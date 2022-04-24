# myspabluegreen
Test of lambda edge functions to support blue green S3 origin of a JavaScript single page application (SPA)

## Testing URLs in foghorn-io-brad account
1. https://www.app.superscalability.com/
1. https://www-test.app.superscalability.com/


## Deployment
1. run terraform apply
1. For each folder under `files/web`, do the following to deploy the blue and green version of the JavaScipt app to blue/green bucket folders:
   1. run `npm run build`
   1. cd to build folder
   1. run `aws sync . s3://fogs-web-bucket/blue/` or `aws sync . s3://fogs-web-bucket/green/` based on parent folder name

## Credit
The provided JavaScript application in based in part on examples provided by https://upmostly.com/tutorials/react-hello-world-your-first-react-app and https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
