# SubscreasyJsClient.SubsriptionResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscriptionUsingPUT**](SubsriptionResourceApi.md#cancelSubscriptionUsingPUT) | **PUT** /api/subscriptions/cancel | cancelSubscription
[**getActiveSubscriptionsUsingGET**](SubsriptionResourceApi.md#getActiveSubscriptionsUsingGET) | **GET** /api/subsriptions/subscriber/{secureId} | getActiveSubscriptions
[**getAllCompanySubscriptionsUsingGET**](SubsriptionResourceApi.md#getAllCompanySubscriptionsUsingGET) | **GET** /api/subscriptions/company/{id} | getAllCompanySubscriptions
[**getSubsriptionUsingGET**](SubsriptionResourceApi.md#getSubsriptionUsingGET) | **GET** /api/subsriptions/{id} | getSubsription
[**startSubscriptionUsingPOST**](SubsriptionResourceApi.md#startSubscriptionUsingPOST) | **POST** /api/subscriptions/start | startSubscription


<a name="cancelSubscriptionUsingPUT"></a>
# **cancelSubscriptionUsingPUT**
> Subsription cancelSubscriptionUsingPUT(cancellation)

cancelSubscription

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.SubsriptionResourceApi();

var cancellation = new SubscreasyJsClient.Cancellation(); // Cancellation | cancellation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelSubscriptionUsingPUT(cancellation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancellation** | [**Cancellation**](Cancellation.md)| cancellation | 

### Return type

[**Subsription**](Subsription.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getActiveSubscriptionsUsingGET"></a>
# **getActiveSubscriptionsUsingGET**
> [Subsription] getActiveSubscriptionsUsingGET(secureId)

getActiveSubscriptions

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.SubsriptionResourceApi();

var secureId = "secureId_example"; // String | secureId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActiveSubscriptionsUsingGET(secureId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secureId** | **String**| secureId | 

### Return type

[**[Subsription]**](Subsription.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllCompanySubscriptionsUsingGET"></a>
# **getAllCompanySubscriptionsUsingGET**
> [Subsription] getAllCompanySubscriptionsUsingGET(id)

getAllCompanySubscriptions

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.SubsriptionResourceApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCompanySubscriptionsUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**[Subsription]**](Subsription.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSubsriptionUsingGET"></a>
# **getSubsriptionUsingGET**
> Subsription getSubsriptionUsingGET(id)

getSubsription

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.SubsriptionResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubsriptionUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**Subsription**](Subsription.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="startSubscriptionUsingPOST"></a>
# **startSubscriptionUsingPOST**
> StartSubscriptionResult startSubscriptionUsingPOST(request)

startSubscription

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.SubsriptionResourceApi();

var request = new SubscreasyJsClient.StartSubscriptionRequest(); // StartSubscriptionRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startSubscriptionUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**StartSubscriptionRequest**](StartSubscriptionRequest.md)| request | 

### Return type

[**StartSubscriptionResult**](StartSubscriptionResult.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

