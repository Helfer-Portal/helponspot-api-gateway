/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.geopointPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var geopointPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/geopoint').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(geopointPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.organisationsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var organisationsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/organisations').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(organisationsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.organisationsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var organisationsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/organisations').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(organisationsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.organisationsOrganisationIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['organisationId'], ['body']);
        
        var organisationsOrganisationIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/organisations/{organisationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['organisationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(organisationsOrganisationIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.organisationsOrganisationIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['organisationId'], ['body']);
        
        var organisationsOrganisationIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/organisations/{organisationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['organisationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(organisationsOrganisationIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.organisationsOrganisationIdRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['organisationId'], ['body']);
        
        var organisationsOrganisationIdRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/organisations/{organisationId}/requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['organisationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(organisationsOrganisationIdRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.qualificationsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var qualificationsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/qualifications').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(qualificationsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var requestsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/requests').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['requestId'], ['body']);
        
        var requestsRequestIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['requestId'], ['body']);
        
        var requestsRequestIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdInvitePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['requestId', 'body'], ['body']);
        
        var requestsRequestIdInvitePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}/invite').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdInvitePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdVolunteersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['requestId'], ['body']);
        
        var requestsRequestIdVolunteersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}/volunteers').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdVolunteersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdVolunteersUserIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['response', 'userId', 'requestId'], ['body']);
        
        var requestsRequestIdVolunteersUserIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}/volunteers/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['response', 'userId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdVolunteersUserIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.requestsRequestIdVolunteersUserIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'requestId'], ['body']);
        
        var requestsRequestIdVolunteersUserIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/requests/{requestId}/volunteers/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(requestsRequestIdVolunteersUserIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var usersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/users').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var usersPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/users').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersUserIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var usersUserIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersUserIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersUserIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var usersUserIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersUserIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersUserIdProfileGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var usersUserIdProfileGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/users/{userId}/profile').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersUserIdProfileGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersUserIdProfilePatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var usersUserIdProfilePatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/users/{userId}/profile').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersUserIdProfilePatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.usersUserIdRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'requestType', 'radius', 'location'], ['body']);
        
        var usersUserIdRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/users/{userId}/requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['requestType', 'radius', 'location']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(usersUserIdRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
