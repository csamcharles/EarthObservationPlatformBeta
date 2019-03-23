import os.path
import requests

local = False

# put the hosted endpoint here
api_post = 'http://localhost:8080/post' if local else 'aws.com'

print("Please enter the path to your algorithm: ")

file = input()

if os.path.isfile(file):
    print("Sending your algorithm to the cloud...")
    with open(file, 'rb') as f:
        response = requests.post(api_post, files={file: f})
else:
    print("Error! this is not a valid file.")
    exit()

exit()
