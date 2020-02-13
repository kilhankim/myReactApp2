#!/bin/sh

target=`ps -ef | grep node | awk '{if("app.js"==$9) print $2}'`
kill -9 $target
