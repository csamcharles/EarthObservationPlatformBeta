# Deployment Documentation
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart

_This document will cover provide an outline on how to use the Earth Observation Platform Beta effectively and error free._

## Purpose of EOPbeta

Currently, the EOPbeta provides a means for users to have files processed through our cloud server. 

### Requirements

Using the EOPbeta is straight forward and painless as the majority of computation occurs on our [server](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/api/app.js). The only file that must be run on the client machine is called _main.py_. The user must download _main.py_ and in order to run this file, they must have pyhton installed on their machine. In addition to having python, the user must ensure that they have the "requests" python library installed. The user must also possess a file that they wish to have processed by our server and have it located in the same file as _main.py_. 

__List of requirements__:
* [Pyhton 3](https://www.python.org/downloads/)
* ["Requests" python library](https://realpython.com/python-requests/)
* [_main.py_](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py)
* File to process

### Functionality of _main.py_

The majority of the EOPbeta functionality is located on our AWS Lightsail server, however, the _main.py_ program supplies users with a way to upload thier file to our server in order for the bulk of the processing to be done. The first step is to download _main.py_ and placae it in the same directory as the file the user wishes to process. When run from the users terminal, _main.py_ will prompt the user to enter the name of the file that they wish to upload to our server. If a valid file name is entered, the file will be sent to our AWS server to be processed. The reponse of the server is outputted to the console for the user to see (200, 404, 500, etc.). If, by chance, an incorrect file name is entered, the user will be informed by _main.py_ and the user will need to restart the program and enter a valid file name. 

### Running the EOPbeta

By following the steps below and ensuring all listed requirments are met, any user should be able to run the EOPbeta without issue.

__Steps:__

1. [Download](https://www.python.org/downloads/) Python 3
2. [Download](https://realpython.com/python-requests/) "requests" python library
3. [Download](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/cli/main.py) _main.py_ from EOP repository on GitHub
4. Create a directory with _main.py_ and the file you wish to have processed in it
5. Run _main.py_ from your command line
6. Enter the file name when prompted
7. Examine response from server to verify that the file was processed correctly


#####The Argonauts hope you enjoy your experince using the EOPbeta and we look forward to revceiving feedback from our users
_It is important to note that this is still in beta and lacks processing functionality._






