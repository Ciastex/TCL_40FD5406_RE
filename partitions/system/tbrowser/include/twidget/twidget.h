#ifndef __WIDGET_H__
#define __WIDGET_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>

typedef enum {
	EN_NONE,                       //Ĭ�ϲ�ʹ�ý�����
	EN_YELLOW_BAR,                    //�ڵ׻���������
	EN_SMALL_PICTURE_SWITCH,       //���½Ǽ���ͼƬ�л�������
	EN_SMARTTV,                    //smartTV���Ŵ�ͼƬ�л�
	EN_USER_DEFINE                 //ͨ������Ϣ��ui����ʵ��,ui�����Զ��������
}TBROWSER_PROGRESS_E;

void TWidgetProgressShow(void);

void TWidgetProgressHide(void);

void TWidgetProgressSet(int value);

/**
* @brief �����Ƿ���Ҫ��ʾ�������Լ������������͡�Ĭ��ΪDEFAULTPROGRESSBAR
          �˽ӿڲ���ʹ�ã�ʵ��Ϊ��ʵ�֡�modify by wangyw@tcl.com 2016/02/20
* @param visible 0����ʾ��������1��ʾ
* @param type ������������
*/
void TWidgetProgressSetVisible(int visible, int type = -1);
/**
* @brief ���ý�����������
* @param type ������������
*/
void TWidgetProgressSetType(TBROWSER_PROGRESS_E type);

int TWidgetProgressInit(SDL_Surface* screen);

int TWidgetProgressSetWeb(SDL_Surface* screen);

void TWidgetProgressDestory(void);

#ifdef __cplusplus
}
#endif

#endif	//__WIDGET_H__
