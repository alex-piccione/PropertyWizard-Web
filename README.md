# Property Wizard Web

Property Wizard Web site.

Copied project from this code lab
https://codelabs.developers.google.com/codelabs/cloud-cardboard-viewer/index.html?index=..%2F..%2Fnext17#0

# Run it locally

1. Install dependencies

    `npm install`

2. Start the server

    `export API_KEY=your_api_key`
    `npm start`

    See it on http://localhost:8080

# Deploy on Google Cloud Platform

## Prerequisites

The repository should exists in GCP.

1. Set API_KEY value in app.yaml
2. Run `gcloud app deploy`.

## Deploy a different version

1. Run `gcloud app deploy -version v1`
