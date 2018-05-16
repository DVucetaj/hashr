# \#hashr

#hashr is a hashtag searching tool working to solve the problem of relevant hashtags in multimedia marketing

## Getting Started
### Prerequisites

To get started, you need to have NodeJS installed on the machine you wish to run it in.

#### Installing NodeJS on OS X

If not already installed, install [Homebrew](http://brew.sh/) from your desired terminal using: 

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Once Homebrew is installed, 

    brew install node
    
#### Installing NodeJS on Debian/Ubuntu Linux

In your terminal, download node using: 

    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    
Then install node
  
    sudo apt-get install -y nodejs
    
#### Installing NodeJS on Windows

Go to the [NodeJS download page](https://nodejs.org/en/download/) and pick the installed appropriate to your Windows machine

#### Environment Variables

#hashr uses the Twitter API consumer keys, so for the calls to work you need to have access to your consumer keys.
The tool uses a 64-bit encoded version of the keys, so the format is the Consumer Key followed by a colon(:) and then the 

    yourConsumerKeyHere:yourConsumerSecretHere
    
 Convert the concatenated string to a 64-bt encoding, then in your deployment environment create an evnrionment variable with your 64-bit encoded string as the value

    export base64_encoded_bearer_token_credentials=your64bitEncodedKeysHere
    
Creating environemnt keys will vary depending on the environment you are working in. 

# Installing


To get started with running the tool, first clone a it to your local machine using: 

    git clone https://github.com/DVucetaj/hashr

Or alternatively, use a link to your forked repo.

##### Installed dependencies 

There are discrete sides for client side and server side. Both require an installation of node modules. The server side is the root of the repository, so head there and install

    cd hashr
    npm install
    
Once finished, navidate to the client side

    cd client
    npm install
    
Once the dependencies are installed for the client side, the front end needs to be built. 

    npm run build
    
## Deployment

Once everything is installed and set up, running the tool requires two terminals. 
Both of them can be initiated via  `npm start` in the appropriate folders

#### Serverside Termnial
    cd hashr
    npm start
#### Client side Terminal
    cd hashr/client
    npm start

## Built With

* [NodeJS](https://nodejs.org/en/)![nodejs](https://s3.amazonaws.com/openshift-hub/production/quickstarts/243/nodejs_custom.png "NodeJS logo")
* [ReactJS](https://reactjs.org/)![reactjs](https://www.manejandodatos.es/wp-content/uploads/2016/02/reactJS-120x120.jpg "ReactJS logo")
* [ExpressJS](https://expressjs.com/)![expressjs](https://i2.wp.com/nodejs-cloud.com/img/128px/expressjs.png "ExpressJS")

## Authors

* **[Liang Chen](https://github.com/lngchn)** - *Full Stack*
* **[Zishan Ahmed](https://github.com/ZishanAhmed93)** - *Front End*
* **[Donat Vucetaj](https://github.com/DVucetaj)** - *Back End*

## Acknowledgments

A **BIG** shoutout to [CUNY Tech Prep](https://cunytechprep.nyc/) and every single person who is a part of the organization, or supports them. All of the career coaches and instructors are not only intelligent, resourcesful, and coordinated, but they are also kind human beings who helped with any and all requests and issues. The knowledge gained, mistakes fixed, and skills obtained, would not be possible without them! 
