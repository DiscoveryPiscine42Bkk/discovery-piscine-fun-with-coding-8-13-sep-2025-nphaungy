#!/bin/bash
#find . -type f -o -type d | wc -l | tr -d '\n' | sed 's/$/$/'
find . -type f -o -type d | wc -l 
