// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4rtj2rkckd5mriu1ju7j4e4hrp",     // CognitoClientID
  "api_base_url": "https://9au45f33i0.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-runi.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1kb9b5vwgtiw4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
