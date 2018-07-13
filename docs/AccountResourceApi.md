# SubscreasyJsClient.AccountResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**isAuthenticatedUsingGET**](AccountResourceApi.md#isAuthenticatedUsingGET) | **GET** /api/authenticate | isAuthenticated
[**registerAccountUsingPOST**](AccountResourceApi.md#registerAccountUsingPOST) | **POST** /api/register | registerAccount


<a name="isAuthenticatedUsingGET"></a>
# **isAuthenticatedUsingGET**
> &#39;String&#39; isAuthenticatedUsingGET()

isAuthenticated

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.AccountResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.isAuthenticatedUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="registerAccountUsingPOST"></a>
# **registerAccountUsingPOST**
> ResponseEntity registerAccountUsingPOST(managedUserVM)

registerAccount

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.AccountResourceApi();

var managedUserVM = new SubscreasyJsClient.UserDTO(); // UserDTO | managedUserVM


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerAccountUsingPOST(managedUserVM, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedUserVM** | [**UserDTO**](UserDTO.md)| managedUserVM | 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

