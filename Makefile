SRC = src
HEADER = ${SRC}/header.js
VERSION = `cat ${SRC}/VERSION`
DIST = dist/sema-${VERSION}.js

all:
	@@mkdir -p dist
	@@touch ${DIST}
	@@cat ${SRC}/lib/* > ${DIST}
	@@cat ${HEADER} | sed s/@VERSION/${VERSION}/ >> ${DIST}
	@@cat ${SRC}/utils/* >> ${DIST}
	@@cat ${SRC}/tree/* >> ${DIST}
	@@rhino ${SRC}/jscc.js -t ${SRC}/driver_web.js_ ${SRC}/sema.par >> ${DIST}
	@@cat ${SRC}/footer.js >> ${DIST}
	      
	@@echo ${DIST} built.

compile:
	rhino ${SRC}/jscc.js -w -t ${SRC}/driver_web.js_ ${SRC}/sema.par -o /dev/null
