#!/bin/bash
SCRIPTPATH="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"
cd $SCRIPTPATH && cd ../ && node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng serve --aot --host=0.0.0.0 --poll=2000
