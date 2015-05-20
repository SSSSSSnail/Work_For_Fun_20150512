//
//  WebViewController.m
//  Work_For_Fun_20150512
//
//  Created by Snail on 17/5/15.
//  Copyright (c) 2015 Snail. All rights reserved.
//

#import "WebViewController.h"

@interface WebViewController ()

@property (weak, nonatomic) IBOutlet UIWebView *indexWebView;

@end

@implementation WebViewController

- (IBAction)backButton:(UIButton *)sender
{
    [self.navigationController popViewControllerAnimated:YES];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.indexWebView.scrollView.bounces = NO;
    self.indexWebView.allowsInlineMediaPlayback = YES;
    self.indexWebView.mediaPlaybackRequiresUserAction = NO;
    NSString *webContentsPath = [[NSBundle mainBundle] pathForResource:@"WebContents" ofType:@""];
    NSString *htmlPath = [webContentsPath stringByAppendingPathComponent:_loadHtml];
    [self.indexWebView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:htmlPath]]];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
