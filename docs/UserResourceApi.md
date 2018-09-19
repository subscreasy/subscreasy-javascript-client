# SubscreasyJsClient.UserResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsingPOST**](UserResourceApi.md#createUserUsingPOST) | **POST** /api/users | createUser
[**deleteUserUsingDELETE**](UserResourceApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{login} | deleteUser
[**getAllUsersUsingGET**](UserResourceApi.md#getAllUsersUsingGET) | **GET** /api/users | getAllUsers
[**getAuthoritiesUsingGET**](UserResourceApi.md#getAuthoritiesUsingGET) | **GET** /api/users/authorities | getAuthorities
[**getUserProfileUsingGET**](UserResourceApi.md#getUserProfileUsingGET) | **GET** /api/users/profile | getUserProfile
[**getUserUsingGET**](UserResourceApi.md#getUserUsingGET) | **GET** /api/users/{login} | getUser
[**updateCurrentUserUsingPUT**](UserResourceApi.md#updateCurrentUserUsingPUT) | **PUT** /api/users/current | updateCurrentUser
[**updateUserUsingPUT**](UserResourceApi.md#updateUserUsingPUT) | **PUT** /api/users | updateUser


<a name="createUserUsingPOST"></a>
# **createUserUsingPOST**
> ResponseEntity createUserUsingPOST(managedUserVM)

createUser

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var managedUserVM = new SubscreasyJsClient.ManagedUserVM(); // ManagedUserVM | managedUserVM


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserUsingPOST(managedUserVM, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedUserVM** | [**ManagedUserVM**](ManagedUserVM.md)| managedUserVM | 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> deleteUserUsingDELETE(login)

deleteUser

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserUsingDELETE(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllUsersUsingGET"></a>
# **getAllUsersUsingGET**
> [User] getAllUsersUsingGET(opts)

getAllUsers

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var opts = { 
  'page': 56, // Number | Page number of the requested page
  'size': 56, // Number | Size of a page
  'sort': ["sort_example"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number of the requested page | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAuthoritiesUsingGET"></a>
# **getAuthoritiesUsingGET**
> [&#39;String&#39;] getAuthoritiesUsingGET()

getAuthorities

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthoritiesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUserProfileUsingGET"></a>
# **getUserProfileUsingGET**
> User getUserProfileUsingGET()

getUserProfile

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserProfileUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> User getUserUsingGET(login)

getUser

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

[**User**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateCurrentUserUsingPUT"></a>
# **updateCurrentUserUsingPUT**
> User updateCurrentUserUsingPUT(userDTO, opts)

updateCurrentUser

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var userDTO = new SubscreasyJsClient.ManagedUserVM(); // ManagedUserVM | userDTO

var opts = { 
  'id': 789, // Number | 
  'name': "name_example", // String | 
  'streetAddress': "streetAddress_example", // String | 
  'postalCode': "postalCode_example", // String | 
  'city': "city_example", // String | 
  'stateProvince': "stateProvince_example", // String | 
  'country': "country_example", // String | 
  'id2': 789, // Number | 
  'name2': "name_example", // String | 
  'streetAddress2': "streetAddress_example", // String | 
  'postalCode2': "postalCode_example", // String | 
  'city2': "city_example", // String | 
  'stateProvince2': "stateProvince_example", // String | 
  'country2': "country_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCurrentUserUsingPUT(userDTO, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**ManagedUserVM**](ManagedUserVM.md)| userDTO | 
 **id** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **streetAddress** | **String**|  | [optional] 
 **postalCode** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **stateProvince** | **String**|  | [optional] 
 **country** | **String**|  | [optional] 
 **id2** | **Number**|  | [optional] 
 **name2** | **String**|  | [optional] 
 **streetAddress2** | **String**|  | [optional] 
 **postalCode2** | **String**|  | [optional] 
 **city2** | **String**|  | [optional] 
 **stateProvince2** | **String**|  | [optional] 
 **country2** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> User updateUserUsingPUT(managedUserVM)

updateUser

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.UserResourceApi();

var managedUserVM = new SubscreasyJsClient.ManagedUserVM(); // ManagedUserVM | managedUserVM


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserUsingPUT(managedUserVM, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedUserVM** | [**ManagedUserVM**](ManagedUserVM.md)| managedUserVM | 

### Return type

[**User**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

