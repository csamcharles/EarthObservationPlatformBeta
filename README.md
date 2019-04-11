# EarthObservationPlatformBeta   
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart
*A proof of concept for an cloud-based Earth Observation Platform (EOP). The EOP is designed to allow researchers to implement their own algorithm on a large data set using a network of distributed systems hosted on the cloud.*

In this repository you will find the source code for the python command line interface, the source code for the api server and the tests, the travis yaml file, and the docker configuration files.

The api server is deployed on aws, and the project is configured with travis CI to run tests on every push to the repository.

## System Setup
This platform is broken up in to two main components:
1. The CLI: This is a user facing command line interface that takes in an algorithm (.exe) specified by the user, and sends it to the cloud to be processed. The output is then stored on the cloud in the database folder, and can be accessed by the user. Currently, no data processing is implemented.
2. The API: This is the component that receives the user file, and in the future would delegate the task of data processing (among many data processing instances). This is hosted on AWS Light Sail, and is reached via tha CLI discussed above. 

More details can be found regarding the project in the documentation:
 - [RACI Chart](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/RACI_Chart.md)
 - [Deployment Documentation](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/Deployment%20Documentation.md)
 - [DevOps](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/DevOps.md)
 - [Evaluation of Design](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/Evaluation%20of%20Design.md)
 - [Future work](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/Future%20Work.md)
 
 This project was made for SENG 371: Software Evolution, taught by Yvonne Coady
