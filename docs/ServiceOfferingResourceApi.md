# SubscreasyJsClient.ServiceOfferingResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceOfferingUsingPOST**](ServiceOfferingResourceApi.md#createServiceOfferingUsingPOST) | **POST** /api/service-offerings | createServiceOffering
[**deleteServiceOfferingUsingDELETE**](ServiceOfferingResourceApi.md#deleteServiceOfferingUsingDELETE) | **DELETE** /api/service-offerings/{id} | deleteServiceOffering
[**getAllServiceOfferingsUsingGET**](ServiceOfferingResourceApi.md#getAllServiceOfferingsUsingGET) | **GET** /api/service-offerings | getAllServiceOfferings
[**getServiceOfferingUsingGET**](ServiceOfferingResourceApi.md#getServiceOfferingUsingGET) | **GET** /api/service-offerings/{id} | getServiceOffering
[**updateServiceOfferingUsingPUT**](ServiceOfferingResourceApi.md#updateServiceOfferingUsingPUT) | **PUT** /api/service-offerings | updateServiceOffering



## createServiceOfferingUsingPOST

> ServiceOffering createServiceOfferingUsingPOST(serviceOffering)

createServiceOffering

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceOfferingResourceApi();
let serviceOffering = new SubscreasyJsClient.ServiceOffering(); // ServiceOffering | serviceOffering
apiInstance.createServiceOfferingUsingPOST(serviceOffering, (error, data, response) => {
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
 **serviceOffering** | [**ServiceOffering**](ServiceOffering.md)| serviceOffering | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteServiceOfferingUsingDELETE

> deleteServiceOfferingUsingDELETE(id)

deleteServiceOffering

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceOfferingResourceApi();
let id = 789; // Number | id
apiInstance.deleteServiceOfferingUsingDELETE(id, (error, data, response) => {
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


## getAllServiceOfferingsUsingGET

> [ServiceOffering] getAllServiceOfferingsUsingGET()

getAllServiceOfferings

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceOfferingResourceApi();
apiInstance.getAllServiceOfferingsUsingGET((error, data, response) => {
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

[**[ServiceOffering]**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceOfferingUsingGET

> ServiceOffering getServiceOfferingUsingGET(id)

getServiceOffering

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceOfferingResourceApi();
let id = 789; // Number | id
apiInstance.getServiceOfferingUsingGET(id, (error, data, response) => {
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

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateServiceOfferingUsingPUT

> ServiceOffering updateServiceOfferingUsingPUT(serviceOffering)

updateServiceOffering

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ServiceOfferingResourceApi();
let serviceOffering = new SubscreasyJsClient.ServiceOffering(); // ServiceOffering | serviceOffering
apiInstance.updateServiceOfferingUsingPUT(serviceOffering, (error, data, response) => {
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
 **serviceOffering** | [**ServiceOffering**](ServiceOffering.md)| serviceOffering | 

### Return type

[**ServiceOffering**](ServiceOffering.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

