# SubscreasyJsClient.OfferResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveOfferUsingPUT**](OfferResourceApi.md#archiveOfferUsingPUT) | **PUT** /api/offers/archive/{id} | archiveOffer
[**createOfferUsingPOST**](OfferResourceApi.md#createOfferUsingPOST) | **POST** /api/offers | createOffer
[**deleteOfferUsingDELETE**](OfferResourceApi.md#deleteOfferUsingDELETE) | **DELETE** /api/offers/{id} | deleteOffer
[**getAllOffersUsingGET**](OfferResourceApi.md#getAllOffersUsingGET) | **GET** /api/offers | getAllOffers
[**getOfferUsingGET**](OfferResourceApi.md#getOfferUsingGET) | **GET** /api/offers/{id} | getOffer
[**sendOfferPriceChangedEmailUsingPUT**](OfferResourceApi.md#sendOfferPriceChangedEmailUsingPUT) | **PUT** /api/offers/sendOfferPriceChangedEmail/{offerId} | sendOfferPriceChangedEmail
[**updateOfferUsingPUT**](OfferResourceApi.md#updateOfferUsingPUT) | **PUT** /api/offers | updateOffer
[**uploadFileUsingPOST1**](OfferResourceApi.md#uploadFileUsingPOST1) | **POST** /api/offers/uploadFile/{offerId} | uploadFile



## archiveOfferUsingPUT

> archiveOfferUsingPUT(id)

archiveOffer

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let id = 789; // Number | id
apiInstance.archiveOfferUsingPUT(id, (error, data, response) => {
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


## createOfferUsingPOST

> Offer createOfferUsingPOST(offer)

createOffer

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let offer = new SubscreasyJsClient.Offer(); // Offer | offer
apiInstance.createOfferUsingPOST(offer, (error, data, response) => {
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
 **offer** | [**Offer**](Offer.md)| offer | 

### Return type

[**Offer**](Offer.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteOfferUsingDELETE

> deleteOfferUsingDELETE(id)

deleteOffer

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let id = 789; // Number | id
apiInstance.deleteOfferUsingDELETE(id, (error, data, response) => {
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


## getAllOffersUsingGET

> [Offer] getAllOffersUsingGET()

getAllOffers

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
apiInstance.getAllOffersUsingGET((error, data, response) => {
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

[**[Offer]**](Offer.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getOfferUsingGET

> Offer getOfferUsingGET(id)

getOffer

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let id = 789; // Number | id
apiInstance.getOfferUsingGET(id, (error, data, response) => {
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

[**Offer**](Offer.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## sendOfferPriceChangedEmailUsingPUT

> sendOfferPriceChangedEmailUsingPUT(offerId)

sendOfferPriceChangedEmail

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let offerId = 789; // Number | offerId
apiInstance.sendOfferPriceChangedEmailUsingPUT(offerId, (error, data, response) => {
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
 **offerId** | **Number**| offerId | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateOfferUsingPUT

> Offer updateOfferUsingPUT(offer)

updateOffer

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let offer = new SubscreasyJsClient.Offer(); // Offer | offer
apiInstance.updateOfferUsingPUT(offer, (error, data, response) => {
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
 **offer** | [**Offer**](Offer.md)| offer | 

### Return type

[**Offer**](Offer.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## uploadFileUsingPOST1

> Offer uploadFileUsingPOST1(offerId, file)

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

let apiInstance = new SubscreasyJsClient.OfferResourceApi();
let offerId = 789; // Number | offerId
let file = "/path/to/file"; // File | file
apiInstance.uploadFileUsingPOST1(offerId, file, (error, data, response) => {
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
 **offerId** | **Number**| offerId | 
 **file** | **File**| file | 

### Return type

[**Offer**](Offer.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*

