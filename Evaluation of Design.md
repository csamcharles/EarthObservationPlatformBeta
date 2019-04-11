# Evaluation of Design and Implementation
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart  
  
*This document evaluates the design and impementation of our prototype system. It will focus on how evolvable, and scalable our infrastructure is relative to the previous code examples*

## System Design
Our design boasts a modular, distributed system offering high computation power and large data storage capable of serving a large number of users simultaneously. The way we have sepereated our different components allows us to grow our system as the demand on differnet parts of our system increases. The Earth Observation Platform is expect to handle large amounts of data, by using a seperate location in our cloud for the databse, we can easily expand our database storage and partion the database in differnet ways to optimize for read opperations and allow multiple users simultaneous access. Our system must offer strong computation power and offer high speeds to be able to process the large amounts of data. We have effectively managed this by placing a load balancer in front of our processing servers for optimal data processing and algorighm computation. This also allows us to easily extend the number of servers needed as the demand on processing increases. This is a long way from the example code bases we used in our first project. They lacked processing power and offered a monolithic code base to be run on a single machine. Our system takes care of the multi-day algorithm processing and allows researhers to focus on their reserach.

### Architecture Diagram
<img src="https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/High%20Level%20EOM%20Architecture%20Diagram.png" width="100%" align="center"/>

## System Implementation
### Libraries
Our system leverages specific libraries to aid in operations and deployment. We implemented our command line interface in python as it is light weight and interpretable language, along with the [Requests](http://docs.python-requests.org/en/master/) library to effectively communicate with our API server. This leads into our API which we decided to write in JavaScript using [Node.js](https://nodejs.org/en/) and the [Express.js framework](https://expressjs.com/). Lastly, to stream line deployment and integration, weve automated testing usign the [Chai.js](https://www.chaijs.com/) library to handle assertions and implement a test suite. All these libraries are well supported by the community and offer strong documentation and example code. 
### Tools
#### Production
 - aws, docker
 
Mature and wel documented tools. Simplifies deployment and is easily scalable
#### DevOps
 - travis, mocha
 
Make managing a continually evolvin system much more easy
 
