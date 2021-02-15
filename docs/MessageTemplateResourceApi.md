# SubscreasyJsClient.MessageTemplateResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessageTemplateUsingPOST**](MessageTemplateResourceApi.md#createMessageTemplateUsingPOST) | **POST** /api/message-templates | createMessageTemplate
[**deleteMessageTemplateUsingDELETE**](MessageTemplateResourceApi.md#deleteMessageTemplateUsingDELETE) | **DELETE** /api/message-templates/{id} | deleteMessageTemplate
[**getAllMessageTemplatesUsingGET**](MessageTemplateResourceApi.md#getAllMessageTemplatesUsingGET) | **GET** /api/message-templates | getAllMessageTemplates
[**getMessageTemplateUsingGET1**](MessageTemplateResourceApi.md#getMessageTemplateUsingGET1) | **GET** /api/message-templates/{id} | getMessageTemplate
[**updateMessageTemplateUsingPUT**](MessageTemplateResourceApi.md#updateMessageTemplateUsingPUT) | **PUT** /api/message-templates | updateMessageTemplate



## createMessageTemplateUsingPOST

> MessageTemplate createMessageTemplateUsingPOST(messageTemplate)

createMessageTemplate

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();
let messageTemplate = new SubscreasyJsClient.MessageTemplate(); // MessageTemplate | messageTemplate
apiInstance.createMessageTemplateUsingPOST(messageTemplate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## deleteMessageTemplateUsingDELETE

> deleteMessageTemplateUsingDELETE(id)

deleteMessageTemplate

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();
let id = 789; // Number | id
apiInstance.deleteMessageTemplateUsingDELETE(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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
- **Accept**: Not defined


## getAllMessageTemplatesUsingGET

> [MessageTemplate] getAllMessageTemplatesUsingGET()

getAllMessageTemplates

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();
apiInstance.getAllMessageTemplatesUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getMessageTemplateUsingGET1

> MessageTemplate getMessageTemplateUsingGET1(id)

getMessageTemplate

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();
let id = 789; // Number | id
apiInstance.getMessageTemplateUsingGET1(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## updateMessageTemplateUsingPUT

> MessageTemplate updateMessageTemplateUsingPUT(messageTemplate)

updateMessageTemplate

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.MessageTemplateResourceApi();
let messageTemplate = new SubscreasyJsClient.MessageTemplate(); // MessageTemplate | messageTemplate
apiInstance.updateMessageTemplateUsingPUT(messageTemplate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

