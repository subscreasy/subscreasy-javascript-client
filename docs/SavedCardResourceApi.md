# SubscreasyJsClient.SavedCardResourceApi

All URIs are relative to *http://sandbox.subscreasy.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCardUsingPOST**](SavedCardResourceApi.md#createCardUsingPOST) | **POST** /api/saved-cards | createCard
[**deleteCardUsingDELETE**](SavedCardResourceApi.md#deleteCardUsingDELETE) | **DELETE** /api/saved-cards/{id} | deleteCard
[**getAllCardsUsingGET**](SavedCardResourceApi.md#getAllCardsUsingGET) | **GET** /api/saved-cards | getAllCards
[**getCardUsingGET**](SavedCardResourceApi.md#getCardUsingGET) | **GET** /api/saved-cards/{id} | getCard
[**updateCardUsingPUT**](SavedCardResourceApi.md#updateCardUsingPUT) | **PUT** /api/saved-cards | updateCard



## createCardUsingPOST

> SavedCard createCardUsingPOST(card)

createCard

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SavedCardResourceApi();
let card = new SubscreasyJsClient.SavedCard(); // SavedCard | card
apiInstance.createCardUsingPOST(card, (error, data, response) => {
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
 **card** | [**SavedCard**](SavedCard.md)| card | 

### Return type

[**SavedCard**](SavedCard.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteCardUsingDELETE

> deleteCardUsingDELETE(id)

deleteCard

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SavedCardResourceApi();
let id = 789; // Number | id
apiInstance.deleteCardUsingDELETE(id, (error, data, response) => {
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


## getAllCardsUsingGET

> [SavedCard] getAllCardsUsingGET()

getAllCards

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SavedCardResourceApi();
apiInstance.getAllCardsUsingGET((error, data, response) => {
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

[**[SavedCard]**](SavedCard.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getCardUsingGET

> SavedCard getCardUsingGET(id)

getCard

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SavedCardResourceApi();
let id = 789; // Number | id
apiInstance.getCardUsingGET(id, (error, data, response) => {
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

[**SavedCard**](SavedCard.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateCardUsingPUT

> SavedCard updateCardUsingPUT(card)

updateCard

### Example

```javascript
import SubscreasyJsClient from 'subscreasy-js-client';
let defaultClient = SubscreasyJsClient.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new SubscreasyJsClient.SavedCardResourceApi();
let card = new SubscreasyJsClient.SavedCard(); // SavedCard | card
apiInstance.updateCardUsingPUT(card, (error, data, response) => {
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
 **card** | [**SavedCard**](SavedCard.md)| card | 

### Return type

[**SavedCard**](SavedCard.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

