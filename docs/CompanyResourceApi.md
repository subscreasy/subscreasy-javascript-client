# SubscreasyJsClient.CompanyResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyUsingPOST**](CompanyResourceApi.md#createCompanyUsingPOST) | **POST** /api/companies | createCompany
[**deleteCompanyUsingDELETE**](CompanyResourceApi.md#deleteCompanyUsingDELETE) | **DELETE** /api/companies/{id} | deleteCompany
[**getAllCompaniesUsingGET**](CompanyResourceApi.md#getAllCompaniesUsingGET) | **GET** /api/companies | getAllCompanies
[**getCompanyUsingGET**](CompanyResourceApi.md#getCompanyUsingGET) | **GET** /api/companies/{id} | getCompany
[**updateCompanyUsingPUT**](CompanyResourceApi.md#updateCompanyUsingPUT) | **PUT** /api/companies | updateCompany


<a name="createCompanyUsingPOST"></a>
# **createCompanyUsingPOST**
> Company createCompanyUsingPOST(company)

createCompany

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.CompanyResourceApi();

var company = new SubscreasyJsClient.Company(); // Company | company


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCompanyUsingPOST(company, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Company**](Company.md)| company | 

### Return type

[**Company**](Company.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCompanyUsingDELETE"></a>
# **deleteCompanyUsingDELETE**
> deleteCompanyUsingDELETE(id)

deleteCompany

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.CompanyResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCompanyUsingDELETE(id, callback);
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

<a name="getAllCompaniesUsingGET"></a>
# **getAllCompaniesUsingGET**
> [Company] getAllCompaniesUsingGET()

getAllCompanies

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.CompanyResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCompaniesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Company]**](Company.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCompanyUsingGET"></a>
# **getCompanyUsingGET**
> Company getCompanyUsingGET(id)

getCompany

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.CompanyResourceApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCompanyUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**Company**](Company.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateCompanyUsingPUT"></a>
# **updateCompanyUsingPUT**
> Company updateCompanyUsingPUT(company)

updateCompany

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.CompanyResourceApi();

var company = new SubscreasyJsClient.Company(); // Company | company


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCompanyUsingPUT(company, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Company**](Company.md)| company | 

### Return type

[**Company**](Company.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

