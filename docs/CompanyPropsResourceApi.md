# ApiDocumentation.CompanyPropsResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyPropsUsingPOST**](CompanyPropsResourceApi.md#createCompanyPropsUsingPOST) | **POST** /api/company-props | createCompanyProps
[**deleteCompanyPropsUsingDELETE**](CompanyPropsResourceApi.md#deleteCompanyPropsUsingDELETE) | **DELETE** /api/company-props/{id} | deleteCompanyProps
[**getAllCompanyPropsUsingGET**](CompanyPropsResourceApi.md#getAllCompanyPropsUsingGET) | **GET** /api/company-props | getAllCompanyProps
[**getCompanyPropsByCompanyIdUsingGET**](CompanyPropsResourceApi.md#getCompanyPropsByCompanyIdUsingGET) | **GET** /api/company-props/company/{companyId} | getCompanyPropsByCompanyId
[**updateCompanyPropsUsingPUT**](CompanyPropsResourceApi.md#updateCompanyPropsUsingPUT) | **PUT** /api/company-props | updateCompanyProps


<a name="createCompanyPropsUsingPOST"></a>
# **createCompanyPropsUsingPOST**
> CompanyProps createCompanyPropsUsingPOST(companyProps)

createCompanyProps

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.CompanyPropsResourceApi();

var companyProps = new ApiDocumentation.CompanyProps(); // CompanyProps | companyProps


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCompanyPropsUsingPOST(companyProps, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyProps** | [**CompanyProps**](CompanyProps.md)| companyProps | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCompanyPropsUsingDELETE"></a>
# **deleteCompanyPropsUsingDELETE**
> deleteCompanyPropsUsingDELETE(id)

deleteCompanyProps

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.CompanyPropsResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCompanyPropsUsingDELETE(id, callback);
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

<a name="getAllCompanyPropsUsingGET"></a>
# **getAllCompanyPropsUsingGET**
> [CompanyProps] getAllCompanyPropsUsingGET()

getAllCompanyProps

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.CompanyPropsResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCompanyPropsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CompanyProps]**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCompanyPropsByCompanyIdUsingGET"></a>
# **getCompanyPropsByCompanyIdUsingGET**
> CompanyProps getCompanyPropsByCompanyIdUsingGET(companyId)

getCompanyPropsByCompanyId

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.CompanyPropsResourceApi();

var companyId = 789; // Number | companyId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCompanyPropsByCompanyIdUsingGET(companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| companyId | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateCompanyPropsUsingPUT"></a>
# **updateCompanyPropsUsingPUT**
> CompanyProps updateCompanyPropsUsingPUT(companyProps)

updateCompanyProps

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.CompanyPropsResourceApi();

var companyProps = new ApiDocumentation.CompanyProps(); // CompanyProps | companyProps


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCompanyPropsUsingPUT(companyProps, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyProps** | [**CompanyProps**](CompanyProps.md)| companyProps | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

