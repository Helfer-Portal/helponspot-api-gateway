# Cognito User Pool

The `cognito-template.yml` file contains the definitions of the User Pool and required resources.

For more information about how to write/update this template please check here: [Amazon Cognito Resource Type Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_Cognito.html)


## How to deploy to AWS:

Use the following [AWS CLI](https://aws.amazon.com/cli/) command to deploy the template to AWS:

`aws cloudformation deploy --template-file cognito-template.yml --stack-name hos-cognito`
