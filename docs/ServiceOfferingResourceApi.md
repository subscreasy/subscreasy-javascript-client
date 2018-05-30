# ApiDocumentation.ServiceOfferingResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceOfferingUsingPOST**](ServiceOfferingResourceApi.md#createServiceOfferingUsingPOST) | **POST** /api/service-offerings | createServiceOffering
[**deleteServiceOfferingUsingDELETE**](ServiceOfferingResourceApi.md#deleteServiceOfferingUsingDELETE) | **DELETE** /api/service-offerings/{id} | deleteServiceOffering
[**getAllServiceOfferingsUsingGET**](ServiceOfferingResourceApi.md#getAllServiceOfferingsUsingGET) | **GET** /api/service-offerings | getAllServiceOfferings
[**getServiceOfferingUsingGET**](ServiceOfferingResourceApi.md#getServiceOfferingUsingGET) | **GET** /api/service-offerings/{id} | getServiceOffering
[**updateServiceOfferingUsingPUT**](ServiceOfferingResourceApi.md#updateServiceOfferingUsingPUT) | **PUT** /api/service-offerings | updateServiceOffering


<a name="createServiceOfferingUsingPOST"></a>
# **createServiceOfferingUsingPOST**
> ServiceOffering createServiceOfferingUsingPOST(serviceOffering)

createServiceOffering

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ServiceOfferingResourceApi();

var serviceOffering = new ApiDocumentation.ServiceOffering(); // ServiceOffering | serviceOffering


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServiceOfferingUsingPOST(serviceOffering, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceOffering** | [**ServiceOffering**](ServiceOffering.md)| serviceOffering | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteServiceOfferingUsingDELETE"></a>
# **deleteServiceOfferingUsingDELETE**
> deleteServiceOfferingUsingDELETE(id)

deleteServiceOffering

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ServiceOfferingResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteServiceOfferingUsingDELETE(id, callback);
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

<a name="getAllServiceOfferingsUsingGET"></a>
# **getAllServiceOfferingsUsingGET**
> [ServiceOffering] getAllServiceOfferingsUsingGET()

getAllServiceOfferings

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ServiceOfferingResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllServiceOfferingsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ServiceOffering]**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getServiceOfferingUsingGET"></a>
# **getServiceOfferingUsingGET**
> ServiceOffering getServiceOfferingUsingGET(id)

getServiceOffering

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ServiceOfferingResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServiceOfferingUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateServiceOfferingUsingPUT"></a>
# **updateServiceOfferingUsingPUT**
> ServiceOffering updateServiceOfferingUsingPUT(serviceOffering)

updateServiceOffering

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ServiceOfferingResourceApi();

var serviceOffering = new ApiDocumentation.ServiceOffering(); // ServiceOffering | serviceOffering


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServiceOfferingUsingPUT(serviceOffering, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceOffering** | [**ServiceOffering**](ServiceOffering.md)| serviceOffering | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

