import requests

def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']
    response = event["Records"][0]["cf"]["response"]
    request_headers = request['headers']
    headers = response["headers"]

    # Handle specific origin errors by responding with index page body so that single page react JS app functions correctly
    if int(response['status']) in [403,404]:
        host_name = request_headers.get('x-blue-green-host')[0]['value']
        site_request = requests.get(f"https://{host_name}/index.html")
        response['status'] = 200
        response['statusDescription'] = 'OK'
        headers["content-type"] = [
            {
                "key": "Content-Type",
                "value": "text/html",
            }
        ]
        response['body'] = site_request.content

    return response
