# mbm149-CloudResume-Frontend


# GitHub's introduction of OIDC tokens into GitHub Actions Workflows, you can authenticate from GitHub Actions to Google Cloud using Workload Identity Federation, removing the need to export a long-lived JSON service account key.

export GITHUB_REPO=mbm149/mbm149-CloudResume-Frontend
export PROJECT_ID=copper-moon-370604
export SERVICE_ACCOUNT=github-actions-service-account
export WORKLOAD_IDENTITY_POOL=gh-pool 
export WORKLOAD_IDENTITY_PROVIDER=gh-provider


gcloud services enable \
   storage-component.googleapis.com \
   cloudbuild.googleapis.com \
   iamcredentials.googleapis.com


echo $WORKLOAD_IDENTITY_PROVIDER_LOCATION
projects/857089065468/locations/global/workloadIdentityPools/gh-pool/providers/gh-provider

echo $SERVICE_ACCOUNT@$PROJECT_ID.iam.gserviceaccount.com
github-actions-service-account@my-project-githubaction.iam.gserviceaccount.com


# This is a basic workflow to help you get started with Actions
name: CD

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [main]
  pull_request:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "deploy"
  deploy:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Add "id-token" with the intended permissions.
    permissions:
      contents: "read"
      id-token: "write"

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - id: "auth"
        name: "Authenticate to Google Cloud"
        uses: "google-github-actions/auth@v0"
        with:
          # Replace with your Workload Identity Provider Location
          workload_identity_provider: projects/857089065468/locations/global/workloadIdentityPools/gh-pool/providers/gh-provider
          # Replace with your GitHub Service Account
          service_account: github-actions-service-account@my-project-githubaction.iam.gserviceaccount.com
       
      - id: 'upload-file'
        uses: 'google-github-actions/upload-cloud-storage@v1'
        with:
           path: '/hello/file.txt'    
           destination: 'us.artifacts.my-project-githubaction.appspot.com/file.txt'