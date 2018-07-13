# SubscreasyJsClient.InvoiceResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvoiceUsingPOST**](InvoiceResourceApi.md#createInvoiceUsingPOST) | **POST** /api/invoices | createInvoice
[**deleteInvoiceUsingDELETE**](InvoiceResourceApi.md#deleteInvoiceUsingDELETE) | **DELETE** /api/invoices/{id} | deleteInvoice
[**getAllInvoicesUsingGET**](InvoiceResourceApi.md#getAllInvoicesUsingGET) | **GET** /api/invoices | getAllInvoices
[**getInvoiceBySubscriberUsingGET**](InvoiceResourceApi.md#getInvoiceBySubscriberUsingGET) | **GET** /api/invoices/subscriber/{subscriberSecureId} | getInvoiceBySubscriber
[**getInvoiceUsingGET**](InvoiceResourceApi.md#getInvoiceUsingGET) | **GET** /api/invoices/{id} | getInvoice
[**updateInvoiceUsingPUT**](InvoiceResourceApi.md#updateInvoiceUsingPUT) | **PUT** /api/invoices | updateInvoice


<a name="createInvoiceUsingPOST"></a>
# **createInvoiceUsingPOST**
> Invoice createInvoiceUsingPOST(invoice)

createInvoice

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var invoice = new SubscreasyJsClient.Invoice(); // Invoice | invoice


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInvoiceUsingPOST(invoice, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [**Invoice**](Invoice.md)| invoice | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteInvoiceUsingDELETE"></a>
# **deleteInvoiceUsingDELETE**
> deleteInvoiceUsingDELETE(id)

deleteInvoice

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInvoiceUsingDELETE(id, callback);
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

<a name="getAllInvoicesUsingGET"></a>
# **getAllInvoicesUsingGET**
> [Invoice] getAllInvoicesUsingGET()

getAllInvoices

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllInvoicesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Invoice]**](Invoice.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getInvoiceBySubscriberUsingGET"></a>
# **getInvoiceBySubscriberUsingGET**
> [Invoice] getInvoiceBySubscriberUsingGET(subscriberSecureId)

getInvoiceBySubscriber

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var subscriberSecureId = "subscriberSecureId_example"; // String | subscriberSecureId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceBySubscriberUsingGET(subscriberSecureId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriberSecureId** | **String**| subscriberSecureId | 

### Return type

[**[Invoice]**](Invoice.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getInvoiceUsingGET"></a>
# **getInvoiceUsingGET**
> Invoice getInvoiceUsingGET(id)

getInvoice

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateInvoiceUsingPUT"></a>
# **updateInvoiceUsingPUT**
> Invoice updateInvoiceUsingPUT(invoice)

updateInvoice

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.InvoiceResourceApi();

var invoice = new SubscreasyJsClient.Invoice(); // Invoice | invoice


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInvoiceUsingPUT(invoice, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [**Invoice**](Invoice.md)| invoice | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

