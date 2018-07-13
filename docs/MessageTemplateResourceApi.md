# SubscreasyJsClient.MessageTemplateResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessageTemplateUsingPOST**](MessageTemplateResourceApi.md#createMessageTemplateUsingPOST) | **POST** /api/message-templates | createMessageTemplate
[**deleteMessageTemplateUsingDELETE**](MessageTemplateResourceApi.md#deleteMessageTemplateUsingDELETE) | **DELETE** /api/message-templates/{id} | deleteMessageTemplate
[**getAllMessageTemplatesUsingGET**](MessageTemplateResourceApi.md#getAllMessageTemplatesUsingGET) | **GET** /api/message-templates | getAllMessageTemplates
[**getMessageTemplateUsingGET1**](MessageTemplateResourceApi.md#getMessageTemplateUsingGET1) | **GET** /api/message-templates/{id} | getMessageTemplate
[**updateMessageTemplateUsingPUT**](MessageTemplateResourceApi.md#updateMessageTemplateUsingPUT) | **PUT** /api/message-templates | updateMessageTemplate


<a name="createMessageTemplateUsingPOST"></a>
# **createMessageTemplateUsingPOST**
> MessageTemplate createMessageTemplateUsingPOST(messageTemplate)

createMessageTemplate

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();

var messageTemplate = new SubscreasyJsClient.MessageTemplate(); // MessageTemplate | messageTemplate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMessageTemplateUsingPOST(messageTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageTemplate** | [**MessageTemplate**](MessageTemplate.md)| messageTemplate | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteMessageTemplateUsingDELETE"></a>
# **deleteMessageTemplateUsingDELETE**
> deleteMessageTemplateUsingDELETE(id)

deleteMessageTemplate

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMessageTemplateUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllMessageTemplatesUsingGET"></a>
# **getAllMessageTemplatesUsingGET**
> [MessageTemplate] getAllMessageTemplatesUsingGET()

getAllMessageTemplates

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMessageTemplatesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[MessageTemplate]**](MessageTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getMessageTemplateUsingGET1"></a>
# **getMessageTemplateUsingGET1**
> MessageTemplate getMessageTemplateUsingGET1(id)

getMessageTemplate

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessageTemplateUsingGET1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateMessageTemplateUsingPUT"></a>
# **updateMessageTemplateUsingPUT**
> MessageTemplate updateMessageTemplateUsingPUT(messageTemplate)

updateMessageTemplate

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();

var messageTemplate = new SubscreasyJsClient.MessageTemplate(); // MessageTemplate | messageTemplate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMessageTemplateUsingPUT(messageTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageTemplate** | [**MessageTemplate**](MessageTemplate.md)| messageTemplate | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

