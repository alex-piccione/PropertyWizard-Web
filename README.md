# Property Wizard Web

Property Wizard Web site.

Copied project from this code lab
https://codelabs.developers.google.com/codelabs/cloud-cardboard-viewer/index.html?index=..%2F..%2Fnext17#0

# Run it locally

1. Install dependencies

    `npm install`

2. Start the server

    `export API_KEY=your_api_key`  (???)
    run `npm start` or run `start server.bat` (on Windows)

3. Open http://localhost:8080


# Heroku

## Application Error
When this happen web site shows "Application error".  
Check the Heroku log. On Heroku project page select "View logs" from the top right drop down menu.
If the error says to look for npm log ("npm ERR! There is likely additional logging output above.") you can try 
to execute the deploy commands from the heroku console to see what is the error.
I'ven't find yet a simple way to lok to the npm log.  
For the last particular case I run "npm run build:prod" and the error states clearly that 2 files were missing.


# How it works

## Typescript

- tsc command
- tsconfig.json

## tsc

-p (or --project): indicates to the compiler where is the root directory   
if you run it in the root folder it compile ALL the node_modules files !!!


## SystemJS

- systemjs.config.js
- systemjs-angular-loader.js

## Angular2


# Deploy NodeJS on Windows server

## Prerequisites

1. Install NodeJS.
1. Restart (because Node and npm should be visible from the command line)
1. In the web site folder run "npm install"

## Continuous delivery

1. Merge to "master" branch
1. TeamCity trigger start the deployment process
1. Content from "master" btanch is retrieved and stored in the "checkout" folder.
1. `npm install` is run (in the checkout folder)
1. `npm run build` is run (to build TypeScript) (in the checkout folder)
1. Cleanup of destination directory (excluded logs) and copy of the new files
1. `start npm run start_server` is run to start the server. Is it needed?


# Run the NodeJS application

To run the application you must execute "npm start_server" (it execute the corresponding command in package.json "scripts" section).
How to run it in IIS ?

# TeamCity and SSH Key

1. Create a SSH Key using some tool, for example SourceTree open the Putty Key generator
1. Save a private key as <key name>.ppk
1. Upload it on the server (ex. C:\Data\SSH keys\<key name>.ppk)
1. Create a deploy key in Git.
    Write "rsa" followed by a space and/or new line and the public part of the key
1. In TeamCity VCS settings select the "Custom private key" option in Authentication Settings.
1. Set the username and the path to the key.
1. Set Passphrase if it was set when the key was created (optional)
