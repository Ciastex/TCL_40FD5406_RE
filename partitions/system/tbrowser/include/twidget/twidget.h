#ifndef __WIDGET_H__
#define __WIDGET_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>

typedef enum {
	EN_NONE,                       //默认不使用进度条
	EN_YELLOW_BAR,                    //黑底黄条进度条
	EN_SMALL_PICTURE_SWITCH,       //右下角几张图片切换进度条
	EN_SMARTTV,                    //smartTV几张大图片切换
	EN_USER_DEFINE                 //通过发消息给ui进程实现,ui进程自定义进度条
}TBROWSER_PROGRESS_E;

void TWidgetProgressShow(void);

void TWidgetProgressHide(void);

void TWidgetProgressSet(int value);

/**
* @brief 设置是否需要显示进度条以及进度条的类型。默认为DEFAULTPROGRESSBAR
          此接口不再使用，实现为空实现。modify by wangyw@tcl.com 2016/02/20
* @param visible 0不显示进度条，1显示
* @param type 进度条的类型
*/
void TWidgetProgressSetVisible(int visible, int type = -1);
/**
* @brief 设置进度条的类型
* @param type 进度条的类型
*/
void TWidgetProgressSetType(TBROWSER_PROGRESS_E type);

int TWidgetProgressInit(SDL_Surface* screen);

int TWidgetProgressSetWeb(SDL_Surface* screen);

void TWidgetProgressDestory(void);

#ifdef __cplusplus
}
#endif

#endif	//__WIDGET_H__
