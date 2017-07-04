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

# Deploy on Google Cloud Platform

## Prerequisites

The repository should exists in GCP.

## Deploy

1. Set API_KEY value in app.yaml
2. Run `gcloud app deploy`.
3. Open it at https://<your-project-id>.appspot.com

## Deploy a different version

1. Run `gcloud app deploy -version v1`

# Use GIT

1. Configure GIT:
git config --global user.email "you@email.com"
git config --global user.name "Your Name"
git config credential.helper gcloud.sh

2. Add your Cloud Source Repository as a git remote:
git remote add google https://source.developers.google.com/p/YOUR_PROJECT_ID/r/default

3. Push the code into the Cloud Source Repository:
git push --all google

# References

[https://cloud.google.com/sdk/gcloud/reference/app/deploy](Google Cloud "deploy")


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


# Heroku

When you see this error:
'''Application error
An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.'''

Go to the project page.
On the top right buttons menu there is one named "More".
Click it and select "View Logs".
It opens this URL: "https://dashboard.heroku.com/apps/{app name}/logs".


## app[web.1]: npm ERR!     /app/npm-debug.log


