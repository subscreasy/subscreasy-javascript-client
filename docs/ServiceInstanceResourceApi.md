# SubscreasyJsClient.ServiceInstanceResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceInstanceUsingPOST**](ServiceInstanceResourceApi.md#createServiceInstanceUsingPOST) | **POST** /api/service-instances | createServiceInstance
[**deleteServiceInstanceUsingDELETE**](ServiceInstanceResourceApi.md#deleteServiceInstanceUsingDELETE) | **DELETE** /api/service-instances/{id} | deleteServiceInstance
[**getAllServiceInstancesUsingGET**](ServiceInstanceResourceApi.md#getAllServiceInstancesUsingGET) | **GET** /api/service-instances | getAllServiceInstances
[**getServiceInstanceUsingGET**](ServiceInstanceResourceApi.md#getServiceInstanceUsingGET) | **GET** /api/service-instances/{id} | getServiceInstance
[**updateServiceInstanceUsingPUT**](ServiceInstanceResourceApi.md#updateServiceInstanceUsingPUT) | **PUT** /api/service-instances | updateServiceInstance


<a name="createServiceInstanceUsingPOST"></a>
# **createServiceInstanceUsingPOST**
> ServiceInstance createServiceInstanceUsingPOST(serviceInstance)

createServiceInstance

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.ServiceInstanceResourceApi();

var serviceInstance = new SubscreasyJsClient.ServiceInstance(); // ServiceInstance | serviceInstance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServiceInstanceUsingPOST(serviceInstance, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceInstance** | [**ServiceInstance**](ServiceInstance.md)| serviceInstance | 

### Return type

[**ServiceInstance**](ServiceInstance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteServiceInstanceUsingDELETE"></a>
# **deleteServiceInstanceUsingDELETE**
> deleteServiceInstanceUsingDELETE(id)

deleteServiceInstance

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.ServiceInstanceResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteServiceInstanceUsingDELETE(id, callback);
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

<a name="getAllServiceInstancesUsingGET"></a>
# **getAllServiceInstancesUsingGET**
> [ServiceInstance] getAllServiceInstancesUsingGET()

getAllServiceInstances

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.ServiceInstanceResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllServiceInstancesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ServiceInstance]**](ServiceInstance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getServiceInstanceUsingGET"></a>
# **getServiceInstanceUsingGET**
> ServiceInstance getServiceInstanceUsingGET(id)

getServiceInstance

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.ServiceInstanceResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServiceInstanceUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**ServiceInstance**](ServiceInstance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateServiceInstanceUsingPUT"></a>
# **updateServiceInstanceUsingPUT**
> ServiceInstance updateServiceInstanceUsingPUT(serviceInstance)

updateServiceInstance

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.ServiceInstanceResourceApi();

var serviceInstance = new SubscreasyJsClient.ServiceInstance(); // ServiceInstance | serviceInstance


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServiceInstanceUsingPUT(serviceInstance, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceInstance** | [**ServiceInstance**](ServiceInstance.md)| serviceInstance | 

### Return type

[**ServiceInstance**](ServiceInstance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

