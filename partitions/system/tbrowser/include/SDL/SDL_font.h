

#ifndef _SDL_font_h
#define _SDL_font_h

#include "SDL_video.h"

/* Set up for C function definitions, even when using C++ */
#ifdef __cplusplus
extern "C" {
#endif




/*For font*/
typedef enum {
	GB2312,
	UNICODE,
	UTF8
} Font_Coder;


extern DECLSPEC int    SDLCALL SDL_GetFontSize();
extern DECLSPEC int    SDLCALL SDL_SetFontSize(int size);
extern DECLSPEC Uint32 SDLCALL SDL_GetFontColor ();
extern DECLSPEC Uint32 SDLCALL SDL_SetFontColor(Uint32 color);
extern DECLSPEC Uint32 SDLCALL SDL_GetBkColor ();
extern DECLSPEC Uint32 SDLCALL SDL_SetBkColor(Uint32 color);
extern DECLSPEC int    SDLCALL SDL_GetTextHeight();
extern DECLSPEC int    SDLCALL SDL_DrawText(SDL_Surface *surface,
	                           const char *str , int lenth,
	                           int x, int y,  Font_Coder  coder) ;
extern DECLSPEC int    SDLCALL SDL_GetCharWidth(Uint16 unicode);
extern DECLSPEC int    SDLCALL SDL_DrawUnicodeChar(SDL_Surface *surface, 
						       Uint16 unicode, 
						       int x, int y);
extern DECLSPEC int    SDLCALL SDL_G2U(char *inbuf, unsigned int inlen,
                               char *outbuf, unsigned int outlen) ;



#ifdef __cplusplus
}
#endif


#endif 