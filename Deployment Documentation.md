# Deployment Documentation

This document will cover provide an outline on how to use the Earth Observation Platform Beta effectively and error free.

## Purpose of EOPbeta

Currently, the EOPbeta provides a means for users to have files processed through our cloud server. 

### Requirements

Using the EOPbeta is straight forward and painless as the majority of computation occurs on our server. The only file that must be run on the client machine is called [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py). The user must download [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py) and in order to run this file, they must have pyhton installed on their machine. In addition to having python, the user must ensure that they have the "requests" python library installed. The user must also possess a file that they wish to have processed by our server and have it located in the same file as [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py). 

__List of requirements__:
* [Pyhton 3](https://www.python.org/downloads/)
* ["Requests" python library](https://realpython.com/python-requests/)
* [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py)
* File to process

### Functionality of main.py

The majority of the EOPbeta functionality is located on our AWS Lightsail server, however, the [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py) program supplies users with a way to upload thier file to our server in order for the bulk of the processing to be done. When  run from the users terminal, [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py) will prompt the user to  








