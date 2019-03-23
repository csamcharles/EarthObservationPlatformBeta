import os.path
import requests

local = True

# put the hosted endpoint here
api_post = 'http://localhost:8080/api/submit-alg' if local else 'aws.com'

print("Please enter the path to your algorithm: ")

#file = input()
path = 'test.txt'

if os.path.isfile(path):
    print("Sending your algorithm to the cloud...")
    file = {'algorithm': open(path, 'rb')}
    response = requests.post(api_post, files=file)
    print(response)
else:
    print("Error! this is not a valid file.")
    exit()

exit()
