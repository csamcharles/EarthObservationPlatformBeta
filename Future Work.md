# Future Work
Team Name: Argonauts

Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart

_This section will cover various areas in which we believe that we can improve on and enhance the functionality of our system. Functionalities that need to be implemented immediately will be outlined, as well as improvements that can be implemented over the life span of the application in order to provide an effective product regardless of user base size._

## Data Processing

The first major step for our team going forward will be enhancing the data processing ability of the EOP. In order to do this, we plan to incorporate a larger degree of user customizability. This would include accepting an algorithm from the user and then running the user supplied data against the supplied algorithm. Currently, our system takes data from the user and runs it through our server, processing it in a way that we specified. Allowing the user to bring their own algorithm is the next step in developing the EOPbeta.

Once the BYOA functionality is in place and fully operational, the next step is to ensure the user receives their processed data in a format that is useful to them. This reporting can be specified again by the user but our system can offer metrics and system analytics that may be useful to the researcher. 

Once our system is scaled to its full capacity, we can better use containerization to allow concurrent computing to lessen the wait time needed as algorithms and data are processed. These are all vital steps if we want our system to 

## Transition to a Web Based Application
By transitioning to a web based application we can take away some of the setup required when using our command line interface. Currently the users system must support and be able to run python3 and the python requests library. Without it they won't be able to use our python cli. A web based application will eliminate this initial setup as to not scare away new users from our system. By offering a function user interface, researches can better manage their containers and see reported metrics, statistics and analytics as well as any reporting done by their algorithms.

## Scale up AWS/Move to EC2
We feel that the AWS Lightsail platform will be able to handle our needs and makes scaling up the application issue free. The current instance being used does have a small amount of storage and memory as that is all that is required for testing, however additional resources can be easily added. In the far future we may need to switch the more complex EC2 that allows for customization and more power, however this will not occur until the EOP reaches a very large audience.



