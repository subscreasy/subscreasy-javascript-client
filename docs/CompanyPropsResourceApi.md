# SubscreasyJsClient.CompanyPropsResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyPropsUsingPOST**](CompanyPropsResourceApi.md#createCompanyPropsUsingPOST) | **POST** /api/company-props | createCompanyProps
[**deleteCompanyPropsUsingDELETE**](CompanyPropsResourceApi.md#deleteCompanyPropsUsingDELETE) | **DELETE** /api/company-props/{id} | deleteCompanyProps
[**getAllCompanyPropsUsingGET**](CompanyPropsResourceApi.md#getAllCompanyPropsUsingGET) | **GET** /api/company-props | getAllCompanyProps
[**getCompanyPropsByCompanyIdUsingGET**](CompanyPropsResourceApi.md#getCompanyPropsByCompanyIdUsingGET) | **GET** /api/company-props/company/{companyId} | getCompanyPropsByCompanyId
[**updateCompanyPropsUsingPUT**](CompanyPropsResourceApi.md#updateCompanyPropsUsingPUT) | **PUT** /api/company-props | updateCompanyProps
[**uploadCSSUsingPOST**](CompanyPropsResourceApi.md#uploadCSSUsingPOST) | **POST** /api/company-props/uploadCSS | uploadCSS
[**uploadFileUsingPOST**](CompanyPropsResourceApi.md#uploadFileUsingPOST) | **POST** /api/company-props/uploadFile | uploadFile



## createCompanyPropsUsingPOST

> CompanyProps createCompanyPropsUsingPOST(companyProps)

createCompanyProps

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let companyProps = new SubscreasyJsClient.CompanyProps(); // CompanyProps | companyProps
apiInstance.createCompanyPropsUsingPOST(companyProps, (error, data, response) => {
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
 **companyProps** | [**CompanyProps**](CompanyProps.md)| companyProps | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteCompanyPropsUsingDELETE

> deleteCompanyPropsUsingDELETE(id)

deleteCompanyProps

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let id = 789; // Number | id
apiInstance.deleteCompanyPropsUsingDELETE(id, (error, data, response) => {
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


## getAllCompanyPropsUsingGET

> [CompanyProps] getAllCompanyPropsUsingGET()

getAllCompanyProps

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
apiInstance.getAllCompanyPropsUsingGET((error, data, response) => {
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

[**[CompanyProps]**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getCompanyPropsByCompanyIdUsingGET

> CompanyProps getCompanyPropsByCompanyIdUsingGET(companyId)

getCompanyPropsByCompanyId

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let companyId = 789; // Number | companyId
apiInstance.getCompanyPropsByCompanyIdUsingGET(companyId, (error, data, response) => {
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
 **companyId** | **Number**| companyId | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateCompanyPropsUsingPUT

> CompanyProps updateCompanyPropsUsingPUT(companyProps)

updateCompanyProps

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let companyProps = new SubscreasyJsClient.CompanyProps(); // CompanyProps | companyProps
apiInstance.updateCompanyPropsUsingPUT(companyProps, (error, data, response) => {
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
 **companyProps** | [**CompanyProps**](CompanyProps.md)| companyProps | 

### Return type

[**CompanyProps**](CompanyProps.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## uploadCSSUsingPOST

> Object uploadCSSUsingPOST(file)

uploadCSS

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let file = "/path/to/file"; // File | file
apiInstance.uploadCSSUsingPOST(file, (error, data, response) => {
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
 **file** | **File**| file | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*


## uploadFileUsingPOST

> Object uploadFileUsingPOST(file)

uploadFile

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.CompanyPropsResourceApi();
let file = "/path/to/file"; // File | file
apiInstance.uploadFileUsingPOST(file, (error, data, response) => {
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
 **file** | **File**| file | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*

