# ApiDocumentation.SubscriberResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriberUsingPOST**](SubscriberResourceApi.md#createSubscriberUsingPOST) | **POST** /api/subscribers | createSubscriber
[**deleteSubscriberUsingDELETE**](SubscriberResourceApi.md#deleteSubscriberUsingDELETE) | **DELETE** /api/subscribers/{id} | deleteSubscriber
[**getAllSubscribersUsingGET**](SubscriberResourceApi.md#getAllSubscribersUsingGET) | **GET** /api/subscribers | getAllSubscribers
[**getSubscriberByEmailUsingGET**](SubscriberResourceApi.md#getSubscriberByEmailUsingGET) | **GET** /api/subscribers/email/{email} | getSubscriberByEmail
[**getSubscriberByNameUsingGET**](SubscriberResourceApi.md#getSubscriberByNameUsingGET) | **GET** /api/subscribers/name/{name} | getSubscriberByName
[**getSubscriberBySecureIdUsingGET**](SubscriberResourceApi.md#getSubscriberBySecureIdUsingGET) | **GET** /api/subscribers/secureId/{secureId} | getSubscriberBySecureId
[**getSubscriberUsingGET**](SubscriberResourceApi.md#getSubscriberUsingGET) | **GET** /api/subscribers/{id} | getSubscriber
[**updateSubscriberUsingPUT**](SubscriberResourceApi.md#updateSubscriberUsingPUT) | **PUT** /api/subscribers | updateSubscriber


<a name="createSubscriberUsingPOST"></a>
# **createSubscriberUsingPOST**
> Subscriber createSubscriberUsingPOST(subscriber)

createSubscriber

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var subscriber = new ApiDocumentation.Subscriber(); // Subscriber | subscriber


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscriberUsingPOST(subscriber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriber** | [**Subscriber**](Subscriber.md)| subscriber | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteSubscriberUsingDELETE"></a>
# **deleteSubscriberUsingDELETE**
> deleteSubscriberUsingDELETE(id)

deleteSubscriber

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubscriberUsingDELETE(id, callback);
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

<a name="getAllSubscribersUsingGET"></a>
# **getAllSubscribersUsingGET**
> [Subscriber] getAllSubscribersUsingGET()

getAllSubscribers

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSubscribersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSubscriberByEmailUsingGET"></a>
# **getSubscriberByEmailUsingGET**
> [Subscriber] getSubscriberByEmailUsingGET(email)

getSubscriberByEmail

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var email = "email_example"; // String | email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberByEmailUsingGET(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email | 

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSubscriberByNameUsingGET"></a>
# **getSubscriberByNameUsingGET**
> [Subscriber] getSubscriberByNameUsingGET(name)

getSubscriberByName

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var name = "name_example"; // String | name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberByNameUsingGET(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name | 

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSubscriberBySecureIdUsingGET"></a>
# **getSubscriberBySecureIdUsingGET**
> Subscriber getSubscriberBySecureIdUsingGET(secureId)

getSubscriberBySecureId

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var secureId = "secureId_example"; // String | secureId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberBySecureIdUsingGET(secureId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secureId** | **String**| secureId | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSubscriberUsingGET"></a>
# **getSubscriberUsingGET**
> Subscriber getSubscriberUsingGET(id)

getSubscriber

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateSubscriberUsingPUT"></a>
# **updateSubscriberUsingPUT**
> Subscriber updateSubscriberUsingPUT(subscriber)

updateSubscriber

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.SubscriberResourceApi();

var subscriber = new ApiDocumentation.Subscriber(); // Subscriber | subscriber


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSubscriberUsingPUT(subscriber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriber** | [**Subscriber**](Subscriber.md)| subscriber | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

