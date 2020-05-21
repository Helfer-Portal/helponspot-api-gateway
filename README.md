# HelpOnSpot API gateway

# Contents
* `api-gateway.yml` contains the OpenAPI/Swagger definition for this API 
  * copy past to [swagger editor](https://editor.swagger.io/) for visualization and testing
* `postman-collection.json` collection of sample requests that can be imported to [postman](https://www.postman.com)
* `/sdk/*` includes REST clients to communicate with the API

# Stages
* stages can be considered as completely separate applications 
* each stage has it's own:
  * API gateway stage
  * lambda function
  * cognito user pool

## dev
* base url: `https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev`
* user pool: `help_on_spot_cognito_user_pool_with_sam`
* region ``eu-central-1``

## prod
* base url: `https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/prod`
* user pool: `help_on_spot_prod`
* region ``eu-central-1``




more info about progress [here](https://github.com/orgs/Helfer-Portal/projects/3)
