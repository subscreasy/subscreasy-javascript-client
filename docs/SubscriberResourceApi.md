# SubscreasyJsClient.SubscriberResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriberUsingPOST**](SubscriberResourceApi.md#createSubscriberUsingPOST) | **POST** /api/subscribers | createSubscriber
[**deleteSubscriberUsingDELETE**](SubscriberResourceApi.md#deleteSubscriberUsingDELETE) | **DELETE** /api/subscribers/{id} | deleteSubscriber
[**findAllSubscribersUsingGET**](SubscriberResourceApi.md#findAllSubscribersUsingGET) | **GET** /api/subscribers/find-all | findAllSubscribers
[**getAllSubscribersUsingGET**](SubscriberResourceApi.md#getAllSubscribersUsingGET) | **GET** /api/subscribers | getAllSubscribers
[**getSubscriberByEmailUsingGET**](SubscriberResourceApi.md#getSubscriberByEmailUsingGET) | **GET** /api/subscribers/email/{email} | getSubscriberByEmail
[**getSubscriberByNameUsingGET**](SubscriberResourceApi.md#getSubscriberByNameUsingGET) | **GET** /api/subscribers/name/{name} | getSubscriberByName
[**getSubscriberBySecureIdUsingGET**](SubscriberResourceApi.md#getSubscriberBySecureIdUsingGET) | **GET** /api/subscribers/secureId/{secureId} | getSubscriberBySecureId
[**getSubscriberUsingGET**](SubscriberResourceApi.md#getSubscriberUsingGET) | **GET** /api/subscribers/{id} | getSubscriber
[**updateSubscriberUsingPUT**](SubscriberResourceApi.md#updateSubscriberUsingPUT) | **PUT** /api/subscribers | updateSubscriber



## createSubscriberUsingPOST

> Subscriber createSubscriberUsingPOST(subscriber)

createSubscriber

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let subscriber = new SubscreasyJsClient.Subscriber(); // Subscriber | subscriber
apiInstance.createSubscriberUsingPOST(subscriber, (error, data, response) => {
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
 **subscriber** | [**Subscriber**](Subscriber.md)| subscriber | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteSubscriberUsingDELETE

> deleteSubscriberUsingDELETE(id)

deleteSubscriber

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let id = 789; // Number | id
apiInstance.deleteSubscriberUsingDELETE(id, (error, data, response) => {
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


## findAllSubscribersUsingGET

> [Subscriber] findAllSubscribersUsingGET()

findAllSubscribers

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
apiInstance.findAllSubscribersUsingGET((error, data, response) => {
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

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllSubscribersUsingGET

> [Subscriber] getAllSubscribersUsingGET(opts)

getAllSubscribers

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getAllSubscribersUsingGET(opts, (error, data, response) => {
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
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSubscriberByEmailUsingGET

> [Subscriber] getSubscriberByEmailUsingGET(email, opts)

getSubscriberByEmail

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let email = "email_example"; // String | email
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getSubscriberByEmailUsingGET(email, opts, (error, data, response) => {
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
 **email** | **String**| email | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSubscriberByNameUsingGET

> [Subscriber] getSubscriberByNameUsingGET(name, opts)

getSubscriberByName

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let name = "name_example"; // String | name
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getSubscriberByNameUsingGET(name, opts, (error, data, response) => {
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
 **name** | **String**| name | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[Subscriber]**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSubscriberBySecureIdUsingGET

> Subscriber getSubscriberBySecureIdUsingGET(secureId)

getSubscriberBySecureId

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let secureId = "secureId_example"; // String | secureId
apiInstance.getSubscriberBySecureIdUsingGET(secureId, (error, data, response) => {
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
 **secureId** | **String**| secureId | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSubscriberUsingGET

> Subscriber getSubscriberUsingGET(id)

getSubscriber

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let id = 789; // Number | id
apiInstance.getSubscriberUsingGET(id, (error, data, response) => {
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

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateSubscriberUsingPUT

> Subscriber updateSubscriberUsingPUT(subscriber)

updateSubscriber

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SubscriberResourceApi();
let subscriber = new SubscreasyJsClient.Subscriber(); // Subscriber | subscriber
apiInstance.updateSubscriberUsingPUT(subscriber, (error, data, response) => {
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
 **subscriber** | [**Subscriber**](Subscriber.md)| subscriber | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

