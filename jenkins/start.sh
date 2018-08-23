#!/bin/bash

docker run -d --name jmrjenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jrayback/jenkins:latest