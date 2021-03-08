#!/bin/bash
SCRIPTPATH="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"
cd $SCRIPTPATH && cd ../
if [ -z "$1" ]; then
	ng build --prod --build-optimizer --base-href $1 ### /files/scientists/dlittle/quaesitor-web/
else
	ng build --prod --build-optimizer
fi
