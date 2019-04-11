# Evaluation of Design and Implementation
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart  
  
*This document evaluates the design and implementation of our prototype system. It will focus on how evolvable, and scalable our infrastructure is relative to the previous code examples*

## System Design
This section focuses on the aspects of our system design that aids in system scalability.

### Architecture Design
Our design boasts a modular, distributed system offering high computation power and large data storage capable of serving a large number of users simultaneously. The way we have separated our system into different components allows us to grow as the demand on different parts of our system increases. The Earth Observation Platform (EOP) is expected to handle large amounts of data, by using a seperate location in our cloud for the database, we can easily expand our database storage and partition the database in different ways to optimize for read operations and allow multiple users simultaneous access to their data. Our system must offer strong computation power and offer high speeds to be able to run the deployed algorithms and process the large amounts of data. We have effectively managed this by placing a load balancer in front of our processing servers for optimal data processing and algorithm computation. This also allows us to easily extend the number of servers needed as the demand on processing increases. This is a long way from the example code bases we used in our first project, as they lacked processing power and offered a monolithic code base to be run on a single machine. Our system servers to eliminate multi-day algorithm processing and instead, allows researchers to get back to their research.

### Architecture Diagram
Below is a high level system architecture diagram. Our prototype system for project 2 - EOPbeta, highlighted in red.
<img src="https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/High%20Level%20EOM%20Architecture%20Diagram.png" width="100%" align="center"/>

## System Implementation
This section focuses on the aspects of our system implementation that ease system evolution.

### Libraries
Our system leverages specific libraries to aid in operations and deployment. We implemented our command line interface in python as it is light weight and interpretable language, along with the [Requests](http://docs.python-requests.org/en/master/) library to effectively communicate with our API server. This leads into our API which we decided to write in JavaScript using [Node.js](https://nodejs.org/en/) and the [Express.js framework](https://expressjs.com/). Lastly, to streamline deployment and integration, we've automated testing using the [Chai](https://www.chaijs.com/) library with the [Mocha](https://mochajs.org/) framework to handle assertions and implement our test suite. All these libraries are well supported by the community and offer strong documentation and example code which makes them easy to use and quick to learn.

### Tools
This section outlines tools we have utilized in our production environment as well as tools to help manage development

#### Production
Amazon Web Services or [AWS](https://aws.amazon.com/), offers us a serverless architecture so we don't have to worry about managing our system infrastructure. The added benefit to a serverless architecture is that we don't have to worry about configuring new servers to support the increasing demand on our system but simply increase our more AWS subscription and all the configuration headache is taken care for us. On top of the already mentioned benefits, AWS has many other cloud based technologies such as [DynamoDB](https://aws.amazon.com/dynamodb/?sc_icampaign=Adoption_Campaign_PAC_paas_Q3_08_2018_DynamoDB_editorial&sc_ichannel=ha&sc_icontent=awssm-1104-default-editorial-upper&sc_ioutcome=PaaS_Digital_Marketing&sc_iplace=ed&trk=ha_awssm-1104-default-editorial-upper-ha_a131L000005juMLQAY&trkCampaign=PAC_DynamoDB_sitemerch_Augustupdate), a cloud database, and other tools such as analytics, security, and developer tools, adding to the cloud possibilities. Another production tool worth mentioning is [Docker](https://www.docker.com/). Docker has become one of the most popular container services and adds to our systems robustness and scalability. By using AWS with Docker researchers are able to run any machine configuration without having to do any of the setup.  Docker also allows us to spin up as many server instances as needed to maximize computation and throughput. Currently EOPbeta only a single container to run a researchers algorithm but, we could easily allow multiple containers per user to offer concurrent computing and speed up algorithm processing times.

#### DevOps
Our last tool which aids in systems evolution is an automated continuous integration (CI) pipeline. We have leveraged [Travis CI](https://travis-ci.com/) in order to run our Mocha testing suite which will run every time new code is pushed to the master repository. Travis offers an awesome user interface that shows the tests running in real time, and notifies you upon completion. This eases system integration by catching bugs and fixing code before a code can even be committed. Saving headache down the road from unexpected bugs. Travis can also be used in our production environment to automate deployment by simple making changes to our [yaml](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/.travis.yml) file. Currently the EOPbeta test suite is very small but, as our system grows and more tests are added, developers can speed through production knowing their code is well tested on every code addition.
 


