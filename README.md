## Setup a DigitalOcean Droplet

This repository supports a [blog post](https://roell.dev/blog/how-to-set-up-a-digitalocean-droplet) that demonstrates how to host an html page, a react app, a node app, and a python app on a $5 / month DigitalOcean droplet using [Nginx](https://nginx.com).

### Steps to set up React App: 
move to react folder <br>
<code>cd react</code><br><br>
install dependencies <br>
<code>npm install</code><br><br>
run site locally <br>
<code>npm run dev</code><br><br>

### Steps to set up Node Server: 
move to node folder <br>
<code>cd node</code><br><br>
install dependencies <br>
<code>npm install</code><br><br>
run server <br>
<code>node index</code><br><br>

### Steps to set up Python Server:
move to python folder <br>
<code>cd python</code><br><br>
create virtual environment <br>
<code>python3 -m venv venv</code><br><br>
activate virtual environment <br>
<code>source venv/bin/activate</code><br><br>
install dependencies <br>
<code>pip install -r requirements.txt</code><br><br>
run server <br>
<code>uvicorn main:app --reload --port 2345 </code><br><br>
