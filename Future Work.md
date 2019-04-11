# Future Work
Team Name: Argonauts

Group Members: Sam Charles, Conor Butte-Landsfried, Michael Baart

_This section will cover various areas in which we believe that we can improve on and enhance the functionality of our system. Functionalities that need to be implemented immediately will be outlined, as well as improvements that can be implemented over the life span of the application in order to provide an effective product regardless of user base size._

## Data Processing

The first major step for our team going forward will be enhancing the data processing ability of the EOP. In order to do this, we plan to incorporate a larger degree user customizability. This would include accepting an algorithm from the user and then running the user supplied data against the supplied algorithm. Currently, our system takes data from the user and runs it through our server, processing it in a way that we specified. Allowing the user to bring their own algorithm is the next step in developing the EOPbeta.

Once the BYOA functionality is in place and fully operational, the next step is to ensure the user recieves their processed data in a format that is useful to them. *****Some more about formatting and outputting useful data to the user*****

Accept alg, data from user, supply user with output file

## Transition to a Web Based Application
Get rid of python cli, have everything hosted on AWS

## Scale up AWS/Move to EC2
move to web will trigger need to scale up and go with AWS EC2

We feel that the AWS Lightsail platform will be able to handle our needs and makes scaling up the application issue free. The current instance being used does have a small amounnt of storage and memory as that is all that is required for testing, however addtional resources can be easily added. In the far future we may need to switch the more complex EC2 that allows for customization and more power, however this will not occur until the EOP reaches a very large audience.
