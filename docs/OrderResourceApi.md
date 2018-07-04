# ApiDocumentation.OrderResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderUsingPOST**](OrderResourceApi.md#createOrderUsingPOST) | **POST** /api/orders | createOrder
[**getAllOrdersUsingGET**](OrderResourceApi.md#getAllOrdersUsingGET) | **GET** /api/orders | getAllOrders
[**getOrderUsingGET**](OrderResourceApi.md#getOrderUsingGET) | **GET** /api/orders/{id} | getOrder
[**updateOrderUsingPUT**](OrderResourceApi.md#updateOrderUsingPUT) | **PUT** /api/orders | updateOrder


<a name="createOrderUsingPOST"></a>
# **createOrderUsingPOST**
> Order createOrderUsingPOST(orderRequest)

createOrder

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.OrderResourceApi();

var orderRequest = new ApiDocumentation.CreateOrderRequest(); // CreateOrderRequest | orderRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderUsingPOST(orderRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md)| orderRequest | 

### Return type

[**Order**](Order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllOrdersUsingGET"></a>
# **getAllOrdersUsingGET**
> [Order] getAllOrdersUsingGET()

getAllOrders

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.OrderResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllOrdersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Order]**](Order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getOrderUsingGET"></a>
# **getOrderUsingGET**
> Order getOrderUsingGET(id)

getOrder

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.OrderResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**Order**](Order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateOrderUsingPUT"></a>
# **updateOrderUsingPUT**
> Order updateOrderUsingPUT(order)

updateOrder

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.OrderResourceApi();

var order = new ApiDocumentation.Order(); // Order | order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrderUsingPUT(order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)| order | 

### Return type

[**Order**](Order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

