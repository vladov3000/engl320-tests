# engl320-tests

This is a simple test generator for ENGL 320 tests, but it can be easily generalized for other purposes. The test contains a test generation form, which takes user input on how many questions to create and how much lines of each text to includ. Using this information, the app generates a submittable test with a word bank and several passages. The user matches the given passages to the titles in the word bank and submits to see their results.

Link to [web app](http://vladov3000.com:8080)

## Requirements

1. Node
2. React
3. Formik
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
    
### Formik Installation

Use node to install Formik:

    $ npm install formik --save
    
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

## Development

This code can be easily repurposed for other types of tests, so cloning or forking this github project is encouraged. Before, you begin adding code, it is good to familiarize yourself with the structure of the project.

### Project Layout

Most of the project is folders and files generated from the React project inialization ```npx create-react-app my-app```. These contain code useful for debugging and other development shortcuts, so messing with them is not reccomended. The notable folders/files that are not part of the deafult initialization are:

    1. `./src/app-src`
    2. `./scripts`
    3. `./docker`
    4. `Dockerfile`
    
 #### App-src
 
 This contains all the javascript React code for the web app as well as the JSON file that maps the title of texts to their passages. This is where you should create new React components (as individual javascript files to be organized) and add new files. To make your components visible, you will have to export them and add them to `./src/App.js`.
 
 #### Scripts
 
 This contains miscellaneous code useful for development. Currently, it contains one python script that I used to convert the text pdfs to a one-line string with escape characters for JSON.
 
 #### Docker and Dockerfile
 
  The Dockerfile is used by `./docker/make_container.sh` to make a docker image and `./docker/start_container` runs it. A more detailed description of the parameters can be found in the Deployment section of this README.
 
 ### Running in Development Mode
 
 To run the react app locally in development mode enter:
 
        npm run start
        
 Now, you can access the app from [localhost:3000](http://localhost:3000). The webpage will refresh and update as you make changes in the react app.
 
 ### Explanation of Code
 
  TestMaker.js contains the React component TestMaker, which encapsulates all the react components in the app. Test has a Formik component, which is what process the user's parameter and creates the Test component found in Test.js (this is appended as a child of TestMaker). Then, Test has an init method that generates an object that represents the test (`this.state.questions`) using the props `this.props.questions` and `this.props.lines`, which are the number of questions and number of lines, respectively. The JSON representation of `this.state.questions` is as follows:
  
    [
        {
            title: "Canterbury Tales: \n\t General Prologue}
            correct: "Not-Checked" // this dictates the style of the questions, value can also be "Correct" and "Incorrect"
            contents: "When that April with his showers sweet\n ... \n ... \n"// lines of text as string to render
            answer: "A" // multiple choice answer, each question has unique value
        },
        // more questions repeated here
    ]
    
In the `render()` method for Test, a Word Bank(found in WordBank.js) is generated using the titles of the texts where the letter answer for each title corresponds to the position of the title when sorted alphabetically. Then, Formik is used again to handle the submission of the test. The questions are rendered inside this component and the `OnTestSubmit()` method handles the submission. I would recommend looking at the [Getting Started](https://jaredpalmer.com/formik/docs/overview) page of Formik to understand its purpose and parameters more. `src/app-src/App.css` contains the styling for all the components in the app (not to be confused with `src/App.css`), and texts.json contains JSON that maps each title to a string wit the full text in it.

## Deployment

To deploy onto a server, make sure docker is installed. Then, build the docker image by running

    $ chmod +x ./docker/make_container.sh
    $ ./docker/make_container.sh
    
To run the image:

    $ chmod +x ./docker/start_container.sh
    $ ./docker/start_container.sh [PORT THAT APP WILL RUN ON - DEFAULT is 8080]

The container (but not the image) will be deleted after the run, so there is no clutter. [Tmux](https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/) is a good window manager that can help with running the docker container as a background process.

### Docker Development

Modify the Dockerfile to add new dependencies, and change the parameters in the make and run script to affect the ways the image is built and run.


## Contact

If you have any further questions, feel free to reach out to vladov@uw.edu.
  
  
