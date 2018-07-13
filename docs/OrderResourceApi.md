# SubscreasyJsClient.OrderResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderUsingPOST**](OrderResourceApi.md#createOrderUsingPOST) | **POST** /api/orders | createOrder
[**getAllOrdersUsingGET**](OrderResourceApi.md#getAllOrdersUsingGET) | **GET** /api/orders | getAllOrders
[**getOrderUsingGET**](OrderResourceApi.md#getOrderUsingGET) | **GET** /api/orders/{id} | getOrder
[**updateOrderUsingPUT**](OrderResourceApi.md#updateOrderUsingPUT) | **PUT** /api/orders | updateOrder


<a name="createOrderUsingPOST"></a>
# **createOrderUsingPOST**
> Order createOrderUsingPOST(opts)

createOrder

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderResourceApi();

var opts = { 
  'orderAddressId': 789, // Number | 
  'orderAddressName': "orderAddressName_example", // String | 
  'orderAddressStreetAddress': "orderAddressStreetAddress_example", // String | 
  'orderAddressPostalCode': "orderAddressPostalCode_example", // String | 
  'orderAddressCity': "orderAddressCity_example", // String | 
  'orderAddressStateProvince': "orderAddressStateProvince_example", // String | 
  'orderAddressCountry': "orderAddressCountry_example", // String | 
  'orderBuyerBillingAddressId': 789, // Number | 
  'orderBuyerBillingAddressName': "orderBuyerBillingAddressName_example", // String | 
  'orderBuyerBillingAddressStreetAddress': "orderBuyerBillingAddressStreetAddress_example", // String | 
  'orderBuyerBillingAddressPostalCode': "orderBuyerBillingAddressPostalCode_example", // String | 
  'orderBuyerBillingAddressCity': "orderBuyerBillingAddressCity_example", // String | 
  'orderBuyerBillingAddressStateProvince': "orderBuyerBillingAddressStateProvince_example", // String | 
  'orderBuyerBillingAddressCountry': "orderBuyerBillingAddressCountry_example", // String | 
  'orderBuyerShippingAddressId': 789, // Number | 
  'orderBuyerShippingAddressName': "orderBuyerShippingAddressName_example", // String | 
  'orderBuyerShippingAddressStreetAddress': "orderBuyerShippingAddressStreetAddress_example", // String | 
  'orderBuyerShippingAddressPostalCode': "orderBuyerShippingAddressPostalCode_example", // String | 
  'orderBuyerShippingAddressCity': "orderBuyerShippingAddressCity_example", // String | 
  'orderBuyerShippingAddressStateProvince': "orderBuyerShippingAddressStateProvince_example", // String | 
  'orderBuyerShippingAddressCountry': "orderBuyerShippingAddressCountry_example", // String | 
  'orderBuyerCompanyAddressId': 789, // Number | 
  'orderBuyerCompanyAddressName': "orderBuyerCompanyAddressName_example", // String | 
  'orderBuyerCompanyAddressStreetAddress': "orderBuyerCompanyAddressStreetAddress_example", // String | 
  'orderBuyerCompanyAddressPostalCode': "orderBuyerCompanyAddressPostalCode_example", // String | 
  'orderBuyerCompanyAddressCity': "orderBuyerCompanyAddressCity_example", // String | 
  'orderBuyerCompanyAddressStateProvince': "orderBuyerCompanyAddressStateProvince_example", // String | 
  'orderBuyerCompanyAddressCountry': "orderBuyerCompanyAddressCountry_example", // String | 
  'orderBuyerCompanyId': 789, // Number | 
  'orderBuyerCompanyName': "orderBuyerCompanyName_example", // String | 
  'orderBuyerAuthorities0Name': "orderBuyerAuthorities0Name_example", // String | 
  'orderBuyerCreatedBy': "orderBuyerCreatedBy_example", // String | 
  'orderBuyerCreatedDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'orderBuyerLastModifiedBy': "orderBuyerLastModifiedBy_example", // String | 
  'orderBuyerLastModifiedDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'orderBuyerId': 789, // Number | 
  'orderBuyerLogin': "orderBuyerLogin_example", // String | 
  'orderBuyerPassword': "orderBuyerPassword_example", // String | 
  'orderBuyerFirstName': "orderBuyerFirstName_example", // String | 
  'orderBuyerLastName': "orderBuyerLastName_example", // String | 
  'orderBuyerEmail': "orderBuyerEmail_example", // String | 
  'orderBuyerActivated': true, // Boolean | 
  'orderBuyerLangKey': "orderBuyerLangKey_example", // String | 
  'orderBuyerImageUrl': "orderBuyerImageUrl_example", // String | 
  'orderBuyerActivationKey': "orderBuyerActivationKey_example", // String | 
  'orderBuyerResetKey': "orderBuyerResetKey_example", // String | 
  'orderBuyerResetDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'orderOrderItems0ProductCompanyAddressId': 789, // Number | 
  'orderOrderItems0ProductCompanyAddressName': "orderOrderItems0ProductCompanyAddressName_example", // String | 
  'orderOrderItems0ProductCompanyAddressStreetAddress': "orderOrderItems0ProductCompanyAddressStreetAddress_example", // String | 
  'orderOrderItems0ProductCompanyAddressPostalCode': "orderOrderItems0ProductCompanyAddressPostalCode_example", // String | 
  'orderOrderItems0ProductCompanyAddressCity': "orderOrderItems0ProductCompanyAddressCity_example", // String | 
  'orderOrderItems0ProductCompanyAddressStateProvince': "orderOrderItems0ProductCompanyAddressStateProvince_example", // String | 
  'orderOrderItems0ProductCompanyAddressCountry': "orderOrderItems0ProductCompanyAddressCountry_example", // String | 
  'orderOrderItems0ProductCompanyId': 789, // Number | 
  'orderOrderItems0ProductCompanyName': "orderOrderItems0ProductCompanyName_example", // String | 
  'orderOrderItems0ProductOffers0RecurrenceId': 789, // Number | 
  'orderOrderItems0ProductOffers0RecurrenceRecurrenceType': "orderOrderItems0ProductOffers0RecurrenceRecurrenceType_example", // String | 
  'orderOrderItems0ProductOffers0RecurrenceLength': 789, // Number | 
  'orderOrderItems0ProductOffers0CompanyAddressId': 789, // Number | 
  'orderOrderItems0ProductOffers0CompanyAddressName': "orderOrderItems0ProductOffers0CompanyAddressName_example", // String | 
  'orderOrderItems0ProductOffers0CompanyAddressStreetAddress': "orderOrderItems0ProductOffers0CompanyAddressStreetAddress_example", // String | 
  'orderOrderItems0ProductOffers0CompanyAddressPostalCode': "orderOrderItems0ProductOffers0CompanyAddressPostalCode_example", // String | 
  'orderOrderItems0ProductOffers0CompanyAddressCity': "orderOrderItems0ProductOffers0CompanyAddressCity_example", // String | 
  'orderOrderItems0ProductOffers0CompanyAddressStateProvince': "orderOrderItems0ProductOffers0CompanyAddressStateProvince_example", // String | 
  'orderOrderItems0ProductOffers0CompanyAddressCountry': "orderOrderItems0ProductOffers0CompanyAddressCountry_example", // String | 
  'orderOrderItems0ProductOffers0CompanyId': 789, // Number | 
  'orderOrderItems0ProductOffers0CompanyName': "orderOrderItems0ProductOffers0CompanyName_example", // String | 
  'orderOrderItems0ProductOffers0Id': 789, // Number | 
  'orderOrderItems0ProductOffers0SecureId': "orderOrderItems0ProductOffers0SecureId_example", // String | 
  'orderOrderItems0ProductOffers0Name': "orderOrderItems0ProductOffers0Name_example", // String | 
  'orderOrderItems0ProductOffers0PurchaseType': "orderOrderItems0ProductOffers0PurchaseType_example", // String | 
  'orderOrderItems0ProductOffers0Price': 8.14, // Number | 
  'orderOrderItems0ProductOffers0RecurrenceCount': 56, // Number | 
  'orderOrderItems0ProductOffers0TrialPeriod': 56, // Number | 
  'orderOrderItems0ProductId': 789, // Number | 
  'orderOrderItems0ProductName': "orderOrderItems0ProductName_example", // String | 
  'orderOrderItems0ProductDescription': "orderOrderItems0ProductDescription_example", // String | 
  'orderOrderItems0ProductImagePath': "orderOrderItems0ProductImagePath_example", // String | 
  'orderOrderItems0ProductProductType': "orderOrderItems0ProductProductType_example", // String | 
  'orderOrderItems0OfferRecurrenceId': 789, // Number | 
  'orderOrderItems0OfferRecurrenceRecurrenceType': "orderOrderItems0OfferRecurrenceRecurrenceType_example", // String | 
  'orderOrderItems0OfferRecurrenceLength': 789, // Number | 
  'orderOrderItems0OfferProductCompanyAddressId': 789, // Number | 
  'orderOrderItems0OfferProductCompanyAddressName': "orderOrderItems0OfferProductCompanyAddressName_example", // String | 
  'orderOrderItems0OfferProductCompanyAddressStreetAddress': "orderOrderItems0OfferProductCompanyAddressStreetAddress_example", // String | 
  'orderOrderItems0OfferProductCompanyAddressPostalCode': "orderOrderItems0OfferProductCompanyAddressPostalCode_example", // String | 
  'orderOrderItems0OfferProductCompanyAddressCity': "orderOrderItems0OfferProductCompanyAddressCity_example", // String | 
  'orderOrderItems0OfferProductCompanyAddressStateProvince': "orderOrderItems0OfferProductCompanyAddressStateProvince_example", // String | 
  'orderOrderItems0OfferProductCompanyAddressCountry': "orderOrderItems0OfferProductCompanyAddressCountry_example", // String | 
  'orderOrderItems0OfferProductCompanyId': 789, // Number | 
  'orderOrderItems0OfferProductCompanyName': "orderOrderItems0OfferProductCompanyName_example", // String | 
  'orderOrderItems0OfferProductOffers0RecurrenceId': 789, // Number | 
  'orderOrderItems0OfferProductOffers0RecurrenceRecurrenceType': "orderOrderItems0OfferProductOffers0RecurrenceRecurrenceType_example", // String | 
  'orderOrderItems0OfferProductOffers0RecurrenceLength': 789, // Number | 
  'orderOrderItems0OfferProductOffers0CompanyAddressId': 789, // Number | 
  'orderOrderItems0OfferProductOffers0CompanyAddressName': "orderOrderItems0OfferProductOffers0CompanyAddressName_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyAddressStreetAddress': "orderOrderItems0OfferProductOffers0CompanyAddressStreetAddress_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyAddressPostalCode': "orderOrderItems0OfferProductOffers0CompanyAddressPostalCode_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyAddressCity': "orderOrderItems0OfferProductOffers0CompanyAddressCity_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyAddressStateProvince': "orderOrderItems0OfferProductOffers0CompanyAddressStateProvince_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyAddressCountry': "orderOrderItems0OfferProductOffers0CompanyAddressCountry_example", // String | 
  'orderOrderItems0OfferProductOffers0CompanyId': 789, // Number | 
  'orderOrderItems0OfferProductOffers0CompanyName': "orderOrderItems0OfferProductOffers0CompanyName_example", // String | 
  'orderOrderItems0OfferProductOffers0Id': 789, // Number | 
  'orderOrderItems0OfferProductOffers0SecureId': "orderOrderItems0OfferProductOffers0SecureId_example", // String | 
  'orderOrderItems0OfferProductOffers0Name': "orderOrderItems0OfferProductOffers0Name_example", // String | 
  'orderOrderItems0OfferProductOffers0PurchaseType': "orderOrderItems0OfferProductOffers0PurchaseType_example", // String | 
  'orderOrderItems0OfferProductOffers0Price': 8.14, // Number | 
  'orderOrderItems0OfferProductOffers0RecurrenceCount': 56, // Number | 
  'orderOrderItems0OfferProductOffers0TrialPeriod': 56, // Number | 
  'orderOrderItems0OfferProductId': 789, // Number | 
  'orderOrderItems0OfferProductName': "orderOrderItems0OfferProductName_example", // String | 
  'orderOrderItems0OfferProductDescription': "orderOrderItems0OfferProductDescription_example", // String | 
  'orderOrderItems0OfferProductImagePath': "orderOrderItems0OfferProductImagePath_example", // String | 
  'orderOrderItems0OfferProductProductType': "orderOrderItems0OfferProductProductType_example", // String | 
  'orderOrderItems0OfferCompanyAddressId': 789, // Number | 
  'orderOrderItems0OfferCompanyAddressName': "orderOrderItems0OfferCompanyAddressName_example", // String | 
  'orderOrderItems0OfferCompanyAddressStreetAddress': "orderOrderItems0OfferCompanyAddressStreetAddress_example", // String | 
  'orderOrderItems0OfferCompanyAddressPostalCode': "orderOrderItems0OfferCompanyAddressPostalCode_example", // String | 
  'orderOrderItems0OfferCompanyAddressCity': "orderOrderItems0OfferCompanyAddressCity_example", // String | 
  'orderOrderItems0OfferCompanyAddressStateProvince': "orderOrderItems0OfferCompanyAddressStateProvince_example", // String | 
  'orderOrderItems0OfferCompanyAddressCountry': "orderOrderItems0OfferCompanyAddressCountry_example", // String | 
  'orderOrderItems0OfferCompanyId': 789, // Number | 
  'orderOrderItems0OfferCompanyName': "orderOrderItems0OfferCompanyName_example", // String | 
  'orderOrderItems0OfferId': 789, // Number | 
  'orderOrderItems0OfferSecureId': "orderOrderItems0OfferSecureId_example", // String | 
  'orderOrderItems0OfferName': "orderOrderItems0OfferName_example", // String | 
  'orderOrderItems0OfferPurchaseType': "orderOrderItems0OfferPurchaseType_example", // String | 
  'orderOrderItems0OfferPrice': 8.14, // Number | 
  'orderOrderItems0OfferRecurrenceCount': 56, // Number | 
  'orderOrderItems0OfferTrialPeriod': 56, // Number | 
  'orderOrderItems0Id': 789, // Number | 
  'orderOrderItems0ProductCount': 789, // Number | 
  'orderId': 789, // Number | 
  'orderCreateDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'orderStatus': "orderStatus_example", // String | 
  'paymentCardCardHolderName': "paymentCardCardHolderName_example", // String | 
  'paymentCardCardNumber': "paymentCardCardNumber_example", // String | 
  'paymentCardExpireYear': "paymentCardExpireYear_example", // String | 
  'paymentCardExpireMonth': "paymentCardExpireMonth_example", // String | 
  'paymentCardCardExpiry': "paymentCardCardExpiry_example", // String | 
  'paymentCardCvc': "paymentCardCvc_example", // String | 
  'paymentCardRegisterCard': 56, // Number | 
  'paymentCardCardAlias': "paymentCardCardAlias_example", // String | 
  'paymentCardCardToken': "paymentCardCardToken_example", // String | 
  'paymentCardCardUserKey': "paymentCardCardUserKey_example", // String | 
  'price': 8.14, // Number | 
  'companyName': "companyName_example", // String | 
  'callbackUrl': "callbackUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderAddressId** | **Number**|  | [optional] 
 **orderAddressName** | **String**|  | [optional] 
 **orderAddressStreetAddress** | **String**|  | [optional] 
 **orderAddressPostalCode** | **String**|  | [optional] 
 **orderAddressCity** | **String**|  | [optional] 
 **orderAddressStateProvince** | **String**|  | [optional] 
 **orderAddressCountry** | **String**|  | [optional] 
 **orderBuyerBillingAddressId** | **Number**|  | [optional] 
 **orderBuyerBillingAddressName** | **String**|  | [optional] 
 **orderBuyerBillingAddressStreetAddress** | **String**|  | [optional] 
 **orderBuyerBillingAddressPostalCode** | **String**|  | [optional] 
 **orderBuyerBillingAddressCity** | **String**|  | [optional] 
 **orderBuyerBillingAddressStateProvince** | **String**|  | [optional] 
 **orderBuyerBillingAddressCountry** | **String**|  | [optional] 
 **orderBuyerShippingAddressId** | **Number**|  | [optional] 
 **orderBuyerShippingAddressName** | **String**|  | [optional] 
 **orderBuyerShippingAddressStreetAddress** | **String**|  | [optional] 
 **orderBuyerShippingAddressPostalCode** | **String**|  | [optional] 
 **orderBuyerShippingAddressCity** | **String**|  | [optional] 
 **orderBuyerShippingAddressStateProvince** | **String**|  | [optional] 
 **orderBuyerShippingAddressCountry** | **String**|  | [optional] 
 **orderBuyerCompanyAddressId** | **Number**|  | [optional] 
 **orderBuyerCompanyAddressName** | **String**|  | [optional] 
 **orderBuyerCompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderBuyerCompanyAddressPostalCode** | **String**|  | [optional] 
 **orderBuyerCompanyAddressCity** | **String**|  | [optional] 
 **orderBuyerCompanyAddressStateProvince** | **String**|  | [optional] 
 **orderBuyerCompanyAddressCountry** | **String**|  | [optional] 
 **orderBuyerCompanyId** | **Number**|  | [optional] 
 **orderBuyerCompanyName** | **String**|  | [optional] 
 **orderBuyerAuthorities0Name** | **String**|  | [optional] 
 **orderBuyerCreatedBy** | **String**|  | [optional] 
 **orderBuyerCreatedDate** | **Date**|  | [optional] 
 **orderBuyerLastModifiedBy** | **String**|  | [optional] 
 **orderBuyerLastModifiedDate** | **Date**|  | [optional] 
 **orderBuyerId** | **Number**|  | [optional] 
 **orderBuyerLogin** | **String**|  | [optional] 
 **orderBuyerPassword** | **String**|  | [optional] 
 **orderBuyerFirstName** | **String**|  | [optional] 
 **orderBuyerLastName** | **String**|  | [optional] 
 **orderBuyerEmail** | **String**|  | [optional] 
 **orderBuyerActivated** | **Boolean**|  | [optional] 
 **orderBuyerLangKey** | **String**|  | [optional] 
 **orderBuyerImageUrl** | **String**|  | [optional] 
 **orderBuyerActivationKey** | **String**|  | [optional] 
 **orderBuyerResetKey** | **String**|  | [optional] 
 **orderBuyerResetDate** | **Date**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressId** | **Number**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressName** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressPostalCode** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressCity** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressStateProvince** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyAddressCountry** | **String**|  | [optional] 
 **orderOrderItems0ProductCompanyId** | **Number**|  | [optional] 
 **orderOrderItems0ProductCompanyName** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0RecurrenceId** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0RecurrenceRecurrenceType** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0RecurrenceLength** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressId** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressName** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressPostalCode** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressCity** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressStateProvince** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyAddressCountry** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyId** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0CompanyName** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0Id** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0SecureId** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0Name** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0PurchaseType** | **String**|  | [optional] 
 **orderOrderItems0ProductOffers0Price** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0RecurrenceCount** | **Number**|  | [optional] 
 **orderOrderItems0ProductOffers0TrialPeriod** | **Number**|  | [optional] 
 **orderOrderItems0ProductId** | **Number**|  | [optional] 
 **orderOrderItems0ProductName** | **String**|  | [optional] 
 **orderOrderItems0ProductDescription** | **String**|  | [optional] 
 **orderOrderItems0ProductImagePath** | **String**|  | [optional] 
 **orderOrderItems0ProductProductType** | **String**|  | [optional] 
 **orderOrderItems0OfferRecurrenceId** | **Number**|  | [optional] 
 **orderOrderItems0OfferRecurrenceRecurrenceType** | **String**|  | [optional] 
 **orderOrderItems0OfferRecurrenceLength** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressName** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressPostalCode** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressCity** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressStateProvince** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyAddressCountry** | **String**|  | [optional] 
 **orderOrderItems0OfferProductCompanyId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductCompanyName** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0RecurrenceId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0RecurrenceRecurrenceType** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0RecurrenceLength** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressName** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressPostalCode** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressCity** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressStateProvince** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyAddressCountry** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0CompanyName** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0Id** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0SecureId** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0Name** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0PurchaseType** | **String**|  | [optional] 
 **orderOrderItems0OfferProductOffers0Price** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0RecurrenceCount** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductOffers0TrialPeriod** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductId** | **Number**|  | [optional] 
 **orderOrderItems0OfferProductName** | **String**|  | [optional] 
 **orderOrderItems0OfferProductDescription** | **String**|  | [optional] 
 **orderOrderItems0OfferProductImagePath** | **String**|  | [optional] 
 **orderOrderItems0OfferProductProductType** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressId** | **Number**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressName** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressStreetAddress** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressPostalCode** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressCity** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressStateProvince** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyAddressCountry** | **String**|  | [optional] 
 **orderOrderItems0OfferCompanyId** | **Number**|  | [optional] 
 **orderOrderItems0OfferCompanyName** | **String**|  | [optional] 
 **orderOrderItems0OfferId** | **Number**|  | [optional] 
 **orderOrderItems0OfferSecureId** | **String**|  | [optional] 
 **orderOrderItems0OfferName** | **String**|  | [optional] 
 **orderOrderItems0OfferPurchaseType** | **String**|  | [optional] 
 **orderOrderItems0OfferPrice** | **Number**|  | [optional] 
 **orderOrderItems0OfferRecurrenceCount** | **Number**|  | [optional] 
 **orderOrderItems0OfferTrialPeriod** | **Number**|  | [optional] 
 **orderOrderItems0Id** | **Number**|  | [optional] 
 **orderOrderItems0ProductCount** | **Number**|  | [optional] 
 **orderId** | **Number**|  | [optional] 
 **orderCreateDate** | **Date**|  | [optional] 
 **orderStatus** | **String**|  | [optional] 
 **paymentCardCardHolderName** | **String**|  | [optional] 
 **paymentCardCardNumber** | **String**|  | [optional] 
 **paymentCardExpireYear** | **String**|  | [optional] 
 **paymentCardExpireMonth** | **String**|  | [optional] 
 **paymentCardCardExpiry** | **String**|  | [optional] 
 **paymentCardCvc** | **String**|  | [optional] 
 **paymentCardRegisterCard** | **Number**|  | [optional] 
 **paymentCardCardAlias** | **String**|  | [optional] 
 **paymentCardCardToken** | **String**|  | [optional] 
 **paymentCardCardUserKey** | **String**|  | [optional] 
 **price** | **Number**|  | [optional] 
 **companyName** | **String**|  | [optional] 
 **callbackUrl** | **String**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded;charset=UTF-8
 - **Accept**: */*

<a name="getAllOrdersUsingGET"></a>
# **getAllOrdersUsingGET**
> [Order] getAllOrdersUsingGET()

getAllOrders

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderResourceApi();

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
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderResourceApi();

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
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.OrderResourceApi();

var order = new SubscreasyJsClient.Order(); // Order | order


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

