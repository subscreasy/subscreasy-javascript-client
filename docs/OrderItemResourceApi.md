# SubscreasyJsClient.OrderItemResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderItemUsingPOST**](OrderItemResourceApi.md#createOrderItemUsingPOST) | **POST** /api/order-items | createOrderItem
[**deleteOrderItemUsingDELETE**](OrderItemResourceApi.md#deleteOrderItemUsingDELETE) | **DELETE** /api/order-items/{id} | deleteOrderItem
[**getAllOrderItemsUsingGET**](OrderItemResourceApi.md#getAllOrderItemsUsingGET) | **GET** /api/order-items | getAllOrderItems
[**getOrderItemUsingGET**](OrderItemResourceApi.md#getOrderItemUsingGET) | **GET** /api/order-items/{id} | getOrderItem
[**updateOrderItemUsingPUT**](OrderItemResourceApi.md#updateOrderItemUsingPUT) | **PUT** /api/order-items | updateOrderItem


<a name="createOrderItemUsingPOST"></a>
# **createOrderItemUsingPOST**
> OrderItem createOrderItemUsingPOST(orderItem)

createOrderItem

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderItemResourceApi();

var orderItem = new SubscreasyJsClient.OrderItem(); // OrderItem | orderItem


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderItemUsingPOST(orderItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItem** | [**OrderItem**](OrderItem.md)| orderItem | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteOrderItemUsingDELETE"></a>
# **deleteOrderItemUsingDELETE**
> deleteOrderItemUsingDELETE(id)

deleteOrderItem

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderItemResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderItemUsingDELETE(id, callback);
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

<a name="getAllOrderItemsUsingGET"></a>
# **getAllOrderItemsUsingGET**
> [OrderItem] getAllOrderItemsUsingGET()

getAllOrderItems

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderItemResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllOrderItemsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[OrderItem]**](OrderItem.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getOrderItemUsingGET"></a>
# **getOrderItemUsingGET**
> OrderItem getOrderItemUsingGET(id)

getOrderItem

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderItemResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderItemUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateOrderItemUsingPUT"></a>
# **updateOrderItemUsingPUT**
> OrderItem updateOrderItemUsingPUT(orderItem)

updateOrderItem

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderItemResourceApi();

var orderItem = new SubscreasyJsClient.OrderItem(); // OrderItem | orderItem


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrderItemUsingPUT(orderItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItem** | [**OrderItem**](OrderItem.md)| orderItem | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

