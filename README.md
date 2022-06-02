#### Setup a DigitalOcean Droplet

This repository supports a [blog post](https://roell.dev/blog/how-to-set-up-a-digitalocean-droplet).

The blog post demonstrates how to host an html page, a react app, a node app, and a python app on a $5 / month DigitalOcean droplet using [Nginx](https://nginx.com).

Steps to set up Node Environment:
move to node folder
cd node
install dependencies
npm i
run server
node index

Steps to set up Python Environment:
move to python folder
cd python
create virtual environment
python3 -m venv venv
activate virtual environment
source venv/bin/activate
install dependencies
pip install -r requirements.txt
run server
uvicorn main:app --reload --port 2345
