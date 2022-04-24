# myspabluegreen
Test of lambda edge functions to support blue green S3 origin of a JavaScript single page application (SPA)

## Testing URLs in foghorn-io-brad account
1. https://www.app.aws.bradandmarsha.com/
1. https://www-test.app.aws.bradandmarsha.com/
1. https://static-content.app.aws.bradandmarsha.com/image.jpg
1. https://static-content-test.app.aws.bradandmarsha.com/image.jpg


## Deployment
1. run terraform apply
1. For each folder under `files/web`, do the following to deploy the blue and green version of the JavaScipt app to blue/green bucket folders:
   1. run `npm run build`
   1. cd to build folder
   1. run `aws sync . s3://brad-web-bucket/blue/` or `aws sync . s3://brad-web-bucket/green/` based on parent folder name
