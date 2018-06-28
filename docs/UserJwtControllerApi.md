# ApiDocumentation.UserJwtControllerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeUsingPOST**](UserJwtControllerApi.md#authorizeUsingPOST) | **POST** /api/authenticate | authorize


<a name="authorizeUsingPOST"></a>
# **authorizeUsingPOST**
> ResponseEntity authorizeUsingPOST(loginVM)

authorize

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.UserJwtControllerApi();

var loginVM = new ApiDocumentation.LoginVM(); // LoginVM | loginVM


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authorizeUsingPOST(loginVM, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginVM** | [**LoginVM**](LoginVM.md)| loginVM | 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

