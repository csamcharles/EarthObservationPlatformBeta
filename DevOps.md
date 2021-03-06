# DevOps used for the Earth Observation Platform
Team Name: Argonauts   
Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart  
  
*This document outlines the devOps tools used when creating the Earth Observation Platform Beta and how these tools ease maintenance and evolution.*

## Travis CI 

<img src="https://travis-ci.com/images/logos/Tessa-1.png" width="250" align="right"/>

[Travis CI] offers continuous integration and deployment for projects hosted on github. Configuration is notably simple, with the steps for integration with an existing project outlined [here](https://docs.travis-ci.com/user/tutorial/).   

With the Earth Observation Platform, we integrated Travis CI in order to run our Mocha testing (for testing the API) on every push. Travis has an awesome UI that shows the tests running in real time, and notifies you upon completion. If a new commit breaks a test, then we can fix the code before it is merged into the main code base, catching bugs before they can cause unexpected problems later down the road.  

Since this implementation is a beta test, our mocha tests are limited, and currently travis CI only needs to run one test. Although this is trivial, as the project grows and more tests are added, this auto-testing integration will be extremely useful.  

Travis also lets us deploy to AWS for production, and when are project would reach that stage, this change can be made easily with a few changes to the Travis [yaml](https://github.com/csamcharles/EarthObservationPlatformBeta/blob/master/.travis.yml) file. More on constructing yaml files can be found [here](https://docs.travis-ci.com/user/customizing-the-build).


## Github

<img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="250" align="left"/>  

Even though github it one of the most commonly used tools (so much that it almost doesn't feel like it), it is still one of the most powerful DevOps tools around. Git hub allows for excellent file tracking, revision history, conflict resolution, and project storage and hosting.  

For the implementation of our Earth Observation Platform Beta, we use Github to track all changes to the code base, both for our [Node.js express API](https://github.com/csamcharles/EarthObservationPlatformBeta/tree/master/api) as well as the [python command line interface](https://github.com/csamcharles/EarthObservationPlatformBeta/tree/master/cli).  

Github also serves as a useful outward facing host for documentation regarding this project, such as this markdown file you are currently reading.   

Having clear and up to date documentation is critical for maintaining good code over the development life cycle, such that any new developers can get quickly up to speed, and all implementation and design choices are recorded and justified. This way, if something is changed down the road, it is easy to go back and track why things were the way they were prior to the change.

## Mocha  

<img src="https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2Fc645f600-20c5-11e8-9fc9-47523ab65bdd.png&height=640" width="250" align="right"/>    

Testing is an integral part of development and maintenance of a code base. Good tests should evolve with the growth of the project, and be treated with the same importance as the development of new features and patches. For this project, we decided to implement unit testing with the [Mocha](https://mochajs.org/) javaScript testing framework.    

Taken from their website: 

>Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing *simple* and *fun*.      

and it is! We started by creating a simple test following [this](https://mochajs.org/#getting-started) getting started guide from Mocha.   

Once tests were working with `npm test` we were able to integrate the tests with Travis CI to be run with every push to the repository. This was as simple as configuring the language in the travis yaml configuration file to `node_js`.  

To create meaningful tests however, we needed to test the API, and ensure that all the correct responses were returned in different testing scenarios. This is where *Chai* comes in to play.

## Chai  

<img src="https://avatars2.githubusercontent.com/u/1515293?s=400&v=4" width="250" align="left"/>   

[Chai](https://www.chaijs.com/) is an assertion library that can be paired with any javascript testing framework. From our research (and now experience!) it works especially well with Mocha.   

Chai has three main functions that are used while testing. These are the `should`, `expect`, and `assert` functions, and are useful for checking types, object parameters, values, and more.  

Chai has an expressive approach to testing which makes it especially easy to pick up, which was important for our project since we needed to implement testing on a time budget, and had never worked with javascript testing frameworks before.   

Below is an example of a unit test we used with chai to test that the server returned the correct error if a specified file was not included in the request: 

```javascript
chai.use(chaiHttp);
describe('/POST algorithm', () => {
    it('it should send the algorithm', (done) => {
        chai.request(api)
            .post('/api/submit-alg')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
});
```

With the combination of Mocha and Chai, we were able to implement assertions in the unit tests to confirm the responses from the API were complete and correct.   

## AWS LightSail

<img src="https://cdn.freebiesupply.com/logos/large/2x/amazon-lightsail-logo-png-transparent.png" width="250" align="right"/> 

[AWS Lightsail](https://aws.amazon.com/lightsail/) is an easy to use cloud platform that allows for virtual private servers to be created. It allows for users to take advantage of features such as load balancing, while keeping things simple. 

In the EOPbeta, we chose to use AWS Lightsail because of its simplicity. It allows us to easily manage our server and make adjustments without hassle. The platform also allows us to view a variety of live metrics such as CPU usage, data flowing in and out of our server and several others.

Additionally, when setting up our server on Lightsail, we were able choose from a variety of different blueprints for our Lightsail instance. We used the Node.js blueprint running on a Linux platform, which worked very well for us as our server is written in Node.js. This allowed for a very smooth transition from a local server to a server hosted on the Lightsail instance.

Two other draws for us when considering Lightsail were its ability to apply load balancing and its built in SSH client. The ability to incorporate load balancing into an application like the EOPbeta is crucial. The application will need to be scaled and will require additional resources when more users start to use the program. The other feature that we found very useful is the built in SSH client. This allows us to access our Linux instance a the click of a button, leading to changes being quick and painless.

## Docker

<img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" width="250" align="left"/> 

[Docker](https://www.docker.com/) is a container service used to deploy production apps on any machine while preserving a specified environment. Docker works by spinning up an instance of a virtual machine for a single application, installing all the necessary dependencies, and running the application. Docker is especially useful as it allows for easy scaling, as multiple instances of the same application can be created on the fly with minimal configuration. 

This configuration is simple, and is done through [dockerfiles](https://docs.docker.com/engine/reference/builder/). A link to our docker configuration can be found [here](https://github.com/csamcharles/EarthObservationPlatformBeta/tree/master/dockerfiles).

Docker is an important tool for code maintenance and code base evolution. As dependencies grow, the likelihood of error running in a different environment increases. Docker forces the developer to track dependencies, and to test their application in a fresh environment during development - as it would be in production. It is no wonder docker and other container technologies have taken the developing world by storm in recent years.

Given the scope of our project, we only used docker to wrap the API, and not the command line interface. This allows some future proofing, for when we scale we will need multiple instances of the deployed cloud application running concurrently. 

For now, users must still install python3 and the requests library in order to run the CLI. 







[Travis CI]: https://travis-ci.org/
