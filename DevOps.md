# DevOps used for the Earth Observation Platform
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart  
  
*This document outlines the devOps tools used when creating the Earth Observation Plarform Beta and how these tools ease maintenance and evolution.*

## Travis CI 
<img src="https://travis-ci.com/images/logos/Tessa-1.png" width="250" align="right"/>

[Travis CI] offers continuous integration and deployment for projects hosted on github. Configuration is notably simple, with the steps for integration with an existing project outlined [here](https://docs.travis-ci.com/user/tutorial/).   

With the Earth Observation Platform, we integrated Travis CI in order to run our Mocha testing (for testing the API) on every push. Travis has an awesome UI that shows the tests running in realtime, and notifies you upon completion. If a new commit breaks a test, then we can fix the code before it is merged into the main code base, catching bugs before they can cause unexpected problems later down the road.  

Since this implementation is a beta test, our mocha tests are limited, and currently travis CI only needs to run one test. Although this is trivial, as the project grows and more tests are added, this auto-testing integration will be extremely useful.  

Travis also lets us deploy to AWS for production, and when are project would reach that stage, this change can be made easily with a few changes to the Travis [yaml](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/.travis.yml) file. More on constructing yaml files can be found [here](https://docs.travis-ci.com/user/customizing-the-build).


## Github
![image alt <](https://image.flaticon.com/icons/svg/25/25231.svg)
Even though github it one of the most commonly used tools (so much that it almost doesn't feel like it), it is still one of the most powerful DevOps tools around. Git hub allows for excellent file tracking, revision history, conflict resolution, and project storage and hosting. 

## Mocha

## AWS LightSail

## Docker





[Travis CI]: https://travis-ci.org/

