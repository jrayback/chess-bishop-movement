#!/bin/bash

# 
# NOTE: The first time this container is started, you will have to configure
# the Jenkins server and import the job(s) with the config files under the
# jobs directory. After that, the configuration will persist because of the
# docker volume we're mounting.
#
docker run -d --name jmrjenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jrayback/jenkins:latest