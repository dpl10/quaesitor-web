#!/bin/bash
SCRIPTPATH="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"
cd $SCRIPTPATH && cd ../ && ng serve --aot --host 0.0.0.0 --poll=2000
