#!/bin/bash

if [docker inspect -f '{{.State.Running}}' angu = "true"]
then
    echo "bug"
else
    toto = docker inspect -f '{{.State.Running}}' angu
    echo $toto
    echo "bug2"
    
fi


name='nginx'

[[ $(docker ps -f "name=$name" --format '{{.Names}}') == $name ]] ||
docker run --rm -d -p 14000:80 --name angu nginxtest:v1