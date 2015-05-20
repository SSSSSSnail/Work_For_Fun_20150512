//
//  ViewController.m
//  Work_For_Fun_201501517
//
//  Created by Snail on 17/5/15.
//  Copyright (c) 2015 Snail. All rights reserved.
//

#import "ViewController.h"
#import "WebViewController.h"

@interface ViewController () <UITableViewDataSource, UITabBarDelegate>

@property (weak, nonatomic) IBOutlet UITableView *tableView;

@property (strong, nonatomic) NSMutableArray *folderPathArray;
@property (copy, nonatomic) NSString *selectedHtml;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    _folderPathArray = [@[] mutableCopy];
    
    NSString *webContentsPath = [[NSBundle mainBundle] pathForResource:@"WebContents" ofType:@""];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSArray *contentsArray = [fileManager contentsOfDirectoryAtPath:webContentsPath error:NULL];
    if (contentsArray.count > 0) {
        [contentsArray enumerateObjectsUsingBlock:^(NSString *folder, NSUInteger idx, BOOL *stop) {
            if ([folder hasPrefix:@"page"]) {
                [_folderPathArray addObject:folder];
            }
        }];
    }
    
    _folderPathArray = [[_folderPathArray sortedArrayUsingComparator:^NSComparisonResult(NSString *obj1, NSString *obj2) {
        NSString *string1 = [obj1 stringByReplacingOccurrencesOfString:@".html" withString:@""];
        NSString *string2 = [obj2 stringByReplacingOccurrencesOfString:@".html" withString:@""];
        int pageNumber1 = [[string1 stringByReplacingOccurrencesOfString:@"page" withString:@""] intValue];
        int pageNumber2 = [[string2 stringByReplacingOccurrencesOfString:@"page" withString:@""] intValue];
        if (pageNumber1 > pageNumber2) {
            return NSOrderedAscending;
        }
        if (pageNumber1 < pageNumber2) {
            return NSOrderedDescending;
        }
        return NSOrderedSame;
    }] mutableCopy];
    
    [_tableView registerClass:[UITableViewCell class] forCellReuseIdentifier:@"tableViewCell"];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return [_folderPathArray count];
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"tableViewCell" forIndexPath:indexPath];
    cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    cell.textLabel.text = _folderPathArray[indexPath.row];
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    _selectedHtml = _folderPathArray[indexPath.row];
    [self performSegueWithIdentifier:@"pushWebViewController" sender:self];
}

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if ([segue.identifier isEqualToString:@"pushWebViewController"]) {
        WebViewController *webViewController = segue.destinationViewController;
        webViewController.loadHtml = _selectedHtml;
    }
}

@end
