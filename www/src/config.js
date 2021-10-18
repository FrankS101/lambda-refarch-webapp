// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "almac4dicpmqk5eucgqno9gkk",     // CognitoClientID
  "api_base_url": "https://17zjma3s73.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-runi.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1fxurpbzk34od.amplifyapp.com"                                      // AmplifyURL
};

export default config;
