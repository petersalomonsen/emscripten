/*
 * Copyright 2014 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#include <assert.h>
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include "emscripten.h"

int main (int argc, char *argv[])
{
   int fh;
   int res;
   long len;

    #if NODEFS
    EM_ASM(
        
            FS.mkdir('yolo');
            FS.mount(NODEFS, { root: '.' }, 'yolo');
            FS.chdir('/yolo');
        
    );
    #endif

    fh = open("testopen", O_WRONLY | O_CREAT | O_EXCL | O_CLOEXEC, 0444);
    if(fh == -1) {
        return 1;
    }

    ftruncate(fh, 0);

    close(fh);
    puts("success");
    
    return 0;
}
