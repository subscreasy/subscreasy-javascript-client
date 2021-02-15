# SubscreasyJsClient.ChargingLogResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChargingLogUsingPOST**](ChargingLogResourceApi.md#createChargingLogUsingPOST) | **POST** /api/charging-logs | createChargingLog
[**deleteChargingLogUsingDELETE**](ChargingLogResourceApi.md#deleteChargingLogUsingDELETE) | **DELETE** /api/charging-logs/{id} | deleteChargingLog
[**getAllChargingLogsUsingGET**](ChargingLogResourceApi.md#getAllChargingLogsUsingGET) | **GET** /api/charging-logs | getAllChargingLogs
[**getChargingLogUsingGET**](ChargingLogResourceApi.md#getChargingLogUsingGET) | **GET** /api/charging-logs/{id} | getChargingLog
[**getChargingLogsByStatusUsingGET**](ChargingLogResourceApi.md#getChargingLogsByStatusUsingGET) | **GET** /api/charging-logs/status/{status} | getChargingLogsByStatus
[**getPaymentsByMerchantSubscriberIdUsingGET**](ChargingLogResourceApi.md#getPaymentsByMerchantSubscriberIdUsingGET) | **GET** /api/charging-logs/subscriber/m/{merchantSubscriberId} | getPaymentsByMerchantSubscriberId
[**getPaymentsBySubscriberIdUsingGET**](ChargingLogResourceApi.md#getPaymentsBySubscriberIdUsingGET) | **GET** /api/charging-logs/subscriber/id/{subscriberId} | getPaymentsBySubscriberId
[**getPaymentsBySubscriberIdUsingGET1**](ChargingLogResourceApi.md#getPaymentsBySubscriberIdUsingGET1) | **GET** /api/charging-logs/subscriber/{subscriberSecureId} | getPaymentsBySubscriberId
[**getPaymentsBySubscriptionUsingGET**](ChargingLogResourceApi.md#getPaymentsBySubscriptionUsingGET) | **GET** /api/charging-logs/subscription/{id} | getPaymentsBySubscription
[**refundUsingPOST**](ChargingLogResourceApi.md#refundUsingPOST) | **POST** /api/charging-logs/refund/{chargingLogId} | refund
[**updateChargingLogUsingPUT**](ChargingLogResourceApi.md#updateChargingLogUsingPUT) | **PUT** /api/charging-logs | updateChargingLog



## createChargingLogUsingPOST

> ChargingLog createChargingLogUsingPOST(chargingLog)

createChargingLog

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let chargingLog = new SubscreasyJsClient.ChargingLog(); // ChargingLog | chargingLog
apiInstance.createChargingLogUsingPOST(chargingLog, (error, data, response) => {
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
 **chargingLog** | [**ChargingLog**](ChargingLog.md)| chargingLog | 

### Return type

[**ChargingLog**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteChargingLogUsingDELETE

> deleteChargingLogUsingDELETE(id)

deleteChargingLog

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let id = 789; // Number | id
apiInstance.deleteChargingLogUsingDELETE(id, (error, data, response) => {
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


## getAllChargingLogsUsingGET

> [ChargingLog] getAllChargingLogsUsingGET(opts)

getAllChargingLogs

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getAllChargingLogsUsingGET(opts, (error, data, response) => {
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

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getChargingLogUsingGET

> ChargingLog getChargingLogUsingGET(id)

getChargingLog

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let id = 789; // Number | id
apiInstance.getChargingLogUsingGET(id, (error, data, response) => {
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

[**ChargingLog**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getChargingLogsByStatusUsingGET

> [ChargingLog] getChargingLogsByStatusUsingGET(status, opts)

getChargingLogsByStatus

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let status = "status_example"; // String | status
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getChargingLogsByStatusUsingGET(status, opts, (error, data, response) => {
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
 **status** | **String**| status | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPaymentsByMerchantSubscriberIdUsingGET

> [ChargingLog] getPaymentsByMerchantSubscriberIdUsingGET(merchantSubscriberId, opts)

getPaymentsByMerchantSubscriberId

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let merchantSubscriberId = "merchantSubscriberId_example"; // String | merchantSubscriberId
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getPaymentsByMerchantSubscriberIdUsingGET(merchantSubscriberId, opts, (error, data, response) => {
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
 **merchantSubscriberId** | **String**| merchantSubscriberId | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPaymentsBySubscriberIdUsingGET

> [ChargingLog] getPaymentsBySubscriberIdUsingGET(subscriberId, opts)

getPaymentsBySubscriberId

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let subscriberId = 789; // Number | subscriberId
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getPaymentsBySubscriberIdUsingGET(subscriberId, opts, (error, data, response) => {
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
 **subscriberId** | **Number**| subscriberId | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPaymentsBySubscriberIdUsingGET1

> [ChargingLog] getPaymentsBySubscriberIdUsingGET1(subscriberSecureId, opts)

getPaymentsBySubscriberId

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let subscriberSecureId = "subscriberSecureId_example"; // String | subscriberSecureId
let opts = {
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["null"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getPaymentsBySubscriberIdUsingGET1(subscriberSecureId, opts, (error, data, response) => {
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
 **subscriberSecureId** | **String**| subscriberSecureId | 
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPaymentsBySubscriptionUsingGET

> [ChargingLog] getPaymentsBySubscriptionUsingGET(id)

getPaymentsBySubscription

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let id = 789; // Number | id
apiInstance.getPaymentsBySubscriptionUsingGET(id, (error, data, response) => {
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

[**[ChargingLog]**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## refundUsingPOST

> ChargingLog refundUsingPOST(chargingLogId)

refund

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let chargingLogId = 789; // Number | chargingLogId
apiInstance.refundUsingPOST(chargingLogId, (error, data, response) => {
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
 **chargingLogId** | **Number**| chargingLogId | 

### Return type

[**ChargingLog**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateChargingLogUsingPUT

> ChargingLog updateChargingLogUsingPUT(chargingLog)

updateChargingLog

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.ChargingLogResourceApi();
let chargingLog = new SubscreasyJsClient.ChargingLog(); // ChargingLog | chargingLog
apiInstance.updateChargingLogUsingPUT(chargingLog, (error, data, response) => {
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
 **chargingLog** | [**ChargingLog**](ChargingLog.md)| chargingLog | 

### Return type

[**ChargingLog**](ChargingLog.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

