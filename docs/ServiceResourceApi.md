# SubscreasyJsClient.ServiceResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceUsingPOST**](ServiceResourceApi.md#createServiceUsingPOST) | **POST** /api/services | createService
[**deleteServiceUsingDELETE**](ServiceResourceApi.md#deleteServiceUsingDELETE) | **DELETE** /api/services/{id} | deleteService
[**getAllServicesUsingGET**](ServiceResourceApi.md#getAllServicesUsingGET) | **GET** /api/services | getAllServices
[**getServiceUsingGET**](ServiceResourceApi.md#getServiceUsingGET) | **GET** /api/services/{id} | getService
[**updateServiceUsingPUT**](ServiceResourceApi.md#updateServiceUsingPUT) | **PUT** /api/services | updateService



## createServiceUsingPOST

> Service createServiceUsingPOST(service)

createService

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceResourceApi();
let service = new SubscreasyJsClient.Service(); // Service | service
apiInstance.createServiceUsingPOST(service, (error, data, response) => {
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
 **service** | [**Service**](Service.md)| service | 

### Return type

[**Service**](Service.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteServiceUsingDELETE

> deleteServiceUsingDELETE(id)

deleteService

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceResourceApi();
let id = 789; // Number | id
apiInstance.deleteServiceUsingDELETE(id, (error, data, response) => {
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


## getAllServicesUsingGET

> [Service] getAllServicesUsingGET()

getAllServices

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceResourceApi();
apiInstance.getAllServicesUsingGET((error, data, response) => {
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

[**[Service]**](Service.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceUsingGET

> Service getServiceUsingGET(id)

getService

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceResourceApi();
let id = 789; // Number | id
apiInstance.getServiceUsingGET(id, (error, data, response) => {
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

[**Service**](Service.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateServiceUsingPUT

> Service updateServiceUsingPUT(service)

updateService

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceResourceApi();
let service = new SubscreasyJsClient.Service(); // Service | service
apiInstance.updateServiceUsingPUT(service, (error, data, response) => {
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
 **service** | [**Service**](Service.md)| service | 

### Return type

[**Service**](Service.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

