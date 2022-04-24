def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']
    headers = request['headers']

    s3DomainName = headers.get('host')[0]['value']
    s3Region = s3DomainName.split('.')[2]
    contextHeader = headers.get('x-blue-green-context')
    if contextHeader:
        blueGreenContext = contextHeader[0]['value']
        blueGreenPath = "/%s" % blueGreenContext
        print("Blue Green Context is %s" % blueGreenContext)
        request['origin'] = {
            's3': {
                'domainName': s3DomainName,
                'region': s3Region,
                'authMethod': 'origin-access-identity',
                'path': blueGreenPath,
                'customHeaders': {}
            }
        }
    else:
        print("Did not find Blue Green Context")

    return request
