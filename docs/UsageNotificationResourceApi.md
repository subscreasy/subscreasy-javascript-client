# SubscreasyJsClient.UsageNotificationResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsageNotificationUsingPOST**](UsageNotificationResourceApi.md#createUsageNotificationUsingPOST) | **POST** /api/usage-notifications | createUsageNotification
[**deleteUsageNotificationUsingDELETE**](UsageNotificationResourceApi.md#deleteUsageNotificationUsingDELETE) | **DELETE** /api/usage-notifications/{id} | deleteUsageNotification
[**getAllUsageNotificationsUsingGET**](UsageNotificationResourceApi.md#getAllUsageNotificationsUsingGET) | **GET** /api/usage-notifications | getAllUsageNotifications
[**getUsageNotificationUsingGET**](UsageNotificationResourceApi.md#getUsageNotificationUsingGET) | **GET** /api/usage-notifications/{id} | getUsageNotification
[**updateUsageNotificationUsingPUT**](UsageNotificationResourceApi.md#updateUsageNotificationUsingPUT) | **PUT** /api/usage-notifications | updateUsageNotification


<a name="createUsageNotificationUsingPOST"></a>
# **createUsageNotificationUsingPOST**
> UsageNotification createUsageNotificationUsingPOST(usageNotification)

createUsageNotification

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UsageNotificationResourceApi();

var usageNotification = new SubscreasyJsClient.UsageNotification(); // UsageNotification | usageNotification


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsageNotificationUsingPOST(usageNotification, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageNotification** | [**UsageNotification**](UsageNotification.md)| usageNotification | 

### Return type

[**UsageNotification**](UsageNotification.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUsageNotificationUsingDELETE"></a>
# **deleteUsageNotificationUsingDELETE**
> deleteUsageNotificationUsingDELETE(id)

deleteUsageNotification

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UsageNotificationResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsageNotificationUsingDELETE(id, callback);
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

<a name="getAllUsageNotificationsUsingGET"></a>
# **getAllUsageNotificationsUsingGET**
> [UsageNotification] getAllUsageNotificationsUsingGET()

getAllUsageNotifications

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UsageNotificationResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsageNotificationsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UsageNotification]**](UsageNotification.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUsageNotificationUsingGET"></a>
# **getUsageNotificationUsingGET**
> UsageNotification getUsageNotificationUsingGET(id)

getUsageNotification

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UsageNotificationResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsageNotificationUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**UsageNotification**](UsageNotification.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateUsageNotificationUsingPUT"></a>
# **updateUsageNotificationUsingPUT**
> UsageNotification updateUsageNotificationUsingPUT(usageNotification)

updateUsageNotification

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UsageNotificationResourceApi();

var usageNotification = new SubscreasyJsClient.UsageNotification(); // UsageNotification | usageNotification


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsageNotificationUsingPUT(usageNotification, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageNotification** | [**UsageNotification**](UsageNotification.md)| usageNotification | 

### Return type

[**UsageNotification**](UsageNotification.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

