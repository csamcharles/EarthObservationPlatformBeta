# DevOps used for the Earth Observation Platform
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart  
  
*This document outlines the devOps tools used when creating the Earth Observation Plarform Beta and how these tools ease maintenance and evolution.*

## Travis CI
![image alt >](https://travis-ci.com/images/logos/Tessa-1.png)
[Travis CI] offers continuous integration and deployment for projects hosted on github. Configuration is notably simple, with the steps for integration with an existing project outlined [here](https://docs.travis-ci.com/user/tutorial/).   

With the Earth Observation Platform, we integrated Travis CI in order to run our Mocha testing (for testing the API) on every push. Travis has an awesome UI that shows the tests running in realtime, and notifies you upon completion. 

## Github

## Mocha

## AWS LightSail

## Docker





[Travis CI]: https://travis-ci.org/

<style>
img[alt$=">"] {
  float: right;
  width: 200px;
}

img[alt$="<"] {
  float: left;
  width: 200px;
}
</style>