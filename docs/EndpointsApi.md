# SubscreasyJsClient.EndpointsApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeUsingPUT**](EndpointsApi.md#authorizeUsingPUT) | **PUT** /api/authorize | authorize
[**deductUsingPUT**](EndpointsApi.md#deductUsingPUT) | **PUT** /api/deduct | deduct
[**getAuthorizedServicesUsingGET**](EndpointsApi.md#getAuthorizedServicesUsingGET) | **GET** /api/service/subscriber/{secureId} | getAuthorizedServices
[**getCustomerTotalAmountUsingGET**](EndpointsApi.md#getCustomerTotalAmountUsingGET) | **GET** /api/customer-totalAmountCharge/{id} | getCustomerTotalAmount
[**getInvoiceDetailsUsingGET**](EndpointsApi.md#getInvoiceDetailsUsingGET) | **GET** /api/getInvoiceDetails | getInvoiceDetails
[**getMessageTemplateUsingGET**](EndpointsApi.md#getMessageTemplateUsingGET) | **GET** /api/message-templates/email/{lifecycleEventName} | getMessageTemplate
[**getServiceInstancesBySubscriptionUsingGET**](EndpointsApi.md#getServiceInstancesBySubscriptionUsingGET) | **GET** /api/service-instances/subscription/{id} | getServiceInstancesBySubscription
[**getServiceOfferingsBySubscriptionPlanUsingGET**](EndpointsApi.md#getServiceOfferingsBySubscriptionPlanUsingGET) | **GET** /api/service-offerings/offer/{id} | getServiceOfferingsBySubscriptionPlan
[**getTotalRevenuePerMonthUsingGET**](EndpointsApi.md#getTotalRevenuePerMonthUsingGET) | **GET** /api/charging-logs-totalamount-customer/{id} | getTotalRevenuePerMonth



## authorizeUsingPUT

> Boolean authorizeUsingPUT(authorization)

authorize

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let authorization = new SubscreasyJsClient.Authorization(); // Authorization | authorization
apiInstance.authorizeUsingPUT(authorization, (error, data, response) => {
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
 **authorization** | [**Authorization**](Authorization.md)| authorization | 

### Return type

**Boolean**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deductUsingPUT

> DeductionResult deductUsingPUT(deduction)

deduct

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let deduction = new SubscreasyJsClient.Deduction(); // Deduction | deduction
apiInstance.deductUsingPUT(deduction, (error, data, response) => {
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
 **deduction** | [**Deduction**](Deduction.md)| deduction | 

### Return type

[**DeductionResult**](DeductionResult.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAuthorizedServicesUsingGET

> AuthorizedServicesResponse getAuthorizedServicesUsingGET(secureId)

getAuthorizedServices

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let secureId = "secureId_example"; // String | secureId
apiInstance.getAuthorizedServicesUsingGET(secureId, (error, data, response) => {
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
 **secureId** | **String**| secureId | 

### Return type

[**AuthorizedServicesResponse**](AuthorizedServicesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getCustomerTotalAmountUsingGET

> Number getCustomerTotalAmountUsingGET(id)

getCustomerTotalAmount

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let id = "id_example"; // String | id
apiInstance.getCustomerTotalAmountUsingGET(id, (error, data, response) => {
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
 **id** | **String**| id | 

### Return type

**Number**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getInvoiceDetailsUsingGET

> Object getInvoiceDetailsUsingGET(invoiceRequest)

getInvoiceDetails

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let invoiceRequest = new SubscreasyJsClient.InvoiceRequest(); // InvoiceRequest | invoiceRequest
apiInstance.getInvoiceDetailsUsingGET(invoiceRequest, (error, data, response) => {
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
 **invoiceRequest** | [**InvoiceRequest**](InvoiceRequest.md)| invoiceRequest | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getMessageTemplateUsingGET

> MessageTemplate getMessageTemplateUsingGET(lifecycleEventName)

getMessageTemplate

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let lifecycleEventName = "lifecycleEventName_example"; // String | lifecycleEventName
apiInstance.getMessageTemplateUsingGET(lifecycleEventName, (error, data, response) => {
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
 **lifecycleEventName** | **String**| lifecycleEventName | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceInstancesBySubscriptionUsingGET

> [ServiceInstanceResult] getServiceInstancesBySubscriptionUsingGET(id)

getServiceInstancesBySubscription

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let id = 789; // Number | id
apiInstance.getServiceInstancesBySubscriptionUsingGET(id, (error, data, response) => {
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

[**[ServiceInstanceResult]**](ServiceInstanceResult.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceOfferingsBySubscriptionPlanUsingGET

> [ServiceOfferingResult] getServiceOfferingsBySubscriptionPlanUsingGET(id)

getServiceOfferingsBySubscriptionPlan

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let id = 789; // Number | id
apiInstance.getServiceOfferingsBySubscriptionPlanUsingGET(id, (error, data, response) => {
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

[**[ServiceOfferingResult]**](ServiceOfferingResult.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTotalRevenuePerMonthUsingGET

> [Object] getTotalRevenuePerMonthUsingGET(id)

getTotalRevenuePerMonth

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.EndpointsApi();
let id = 789; // Number | id
apiInstance.getTotalRevenuePerMonthUsingGET(id, (error, data, response) => {
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

**[Object]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

