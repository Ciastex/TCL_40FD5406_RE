#ifndef  __UTS_TYPES_H__
#define  __UTS_TYPES_H__

#include <stdio.h>
#include <string.h>


typedef signed char		int8;
typedef signed short		int16;
typedef signed int		int32;
typedef signed long long	int64;

typedef unsigned char		uint8;
typedef unsigned short		uint16;
typedef unsigned int		uint32;
typedef unsigned long long	uint64;

typedef float			float32;
typedef double			float64;


/* Derived arithmetic types */

#ifndef HAVE_BYTE
#define HAVE_BYTE
#endif

typedef uint16		Unicode;


#ifndef	HAVE_BOOL
#ifndef __cplusplus

#if !defined(__true__) && !defined(__false__)
typedef enum _bool {
  false	= 0,
  true	= 1
} bool;
#define __true__
#define __false__
# define __bool_true_false_are_defined 1
#endif
#endif

#define HAVE_BOOL
#endif /*#ifndef	ARCHITECTURE_ST20*/

/*#endif*/

#define SIZEOF_VOIDP	4
#ifndef	ARCHITECTURE_ST20
typedef uint32		uintp;
#endif

/* Some defines and macros */

#ifndef NULL
#define	NULL	((void *)0)
#endif

#ifndef true
#ifndef __true__
#define true 1
#define __true__
#endif
#endif

#ifndef false
#ifndef __false__
#define false 0
#define __false__
#endif
#endif

#ifndef TRUE
#define TRUE 1
#endif
#ifndef FALSE
#define FALSE 0
#endif

enum {
  ERROR_NONE = 0
};

#endif /*_UTS_TYPES_H_*/
