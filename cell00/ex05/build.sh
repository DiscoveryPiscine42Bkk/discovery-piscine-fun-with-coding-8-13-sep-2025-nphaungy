#!/bin/bash
if [ $# -eq 0 ]; then
	echo "No argument supplied"
else 
	for arg in "$@"
	do
		mkdir "ex$arg"
	done
fi
