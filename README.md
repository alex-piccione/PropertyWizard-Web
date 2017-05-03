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

