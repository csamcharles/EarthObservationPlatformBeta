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
[AWS Lightsail](https://aws.amazon.com/lightsail/) is an easy to use cloud platform that allows for virtual private servers to be created. It allows for users to take advantage of features such as load balancing, while keeping things simple. 

In the EOPbeta, we chose to use AWS Lightsail because of its simplicity. It allows us to easily manage our server and make adjustments without hassle. The platform also allows us to view a variety of live metrics such as CPU usage, data flowing in and out of our server and several others. AWS Lightsail also gives us the ab

Additionally, when setting up our server on Lightsail, we were able choose from a variety of different blueprints for our Lightsail instance. We used the Node.js blueprint running on a Linux platform, which worked very well for us as our server is written in Node.js. This allowed for a very smooth transition from a local server to a server hosted on the Lightsail instance.

Two other draws for us when considering Lightsail were it's ability to apply load balancing and its built in SSH client. The ability to incorperate load balancing into an application like the EOPbeta is crutial. The application will need to be scaled and will require addtional resources when more users start to use the program. The other feature that we found very useful is the built in SSH client. This allows us to access our Linux instance a the click of a button, leading to changes being quick and painless.

We feel that the AWS Lightsail platform will be able to handle our needs and makes scaling up the application issue free. The current instance being used does have a small amounnt of storage and memory as that is all that is required for testing, however addtional resources can be easily added. In the far future we may need to switch the more complex EC2 that allows for customization and more power, however this will not occur until the EOP reaches a very large audience.

## Docker

<img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" width="250" align="left"/> 







[Travis CI]: https://travis-ci.org/

