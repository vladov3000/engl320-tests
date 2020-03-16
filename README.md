# engl320-tests

This is a simple test generator for ENGL 320 tests, but it can be easily generalized for other purposes.

## Requirements

1. Node
2. React
3. Docker (for deployment)

### Node Installation

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following commands after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

Node installation instructions copied from github user Mo0x. [Link](https://gist.github.com/MoOx/4378f7c43f6e948e7216).

### React Installation

Use node to install react:

    $ npm install react
    
Confirm the installation by running the following:

    $ npm list react
    engl320-tests@0.1.0 /Users/vlad/Projects/engl320-tests
    └── react@16.12.0 
    
### Docker Installation

Note: Docker is only used for deployment onto a server. This is not a strict prerequisite for local development, so you can skip this step until you are ready.

Docker installation instructions are specific to each operating system and can be found [here](https://docs.docker.com/install/). After you have installed docker, confirm it is installed by runnning this command:

    $ docker run hello-world
    Unable to find image 'hello-world:latest' locally
    latest: Pulling from library/hello-world
    1b930d010525: Pull complete 
    Digest: sha256:f9dfddf63636d84ef479d645ab5885156ae030f611a56f3a7ac7f2fdd86d7e4e
    Status: Downloaded newer image for hello-world:latest

    Hello from Docker!
    This message shows that your installation appears to be working correctly.
    [information about how docker gets and runs the hello-world image]

    
