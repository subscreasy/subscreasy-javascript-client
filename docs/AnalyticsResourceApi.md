# SubscreasyJsClient.AnalyticsResourceApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDashboardAnalyticsUsingGET**](AnalyticsResourceApi.md#getDashboardAnalyticsUsingGET) | **GET** /api/analytics/dashboard | getDashboardAnalytics


<a name="getDashboardAnalyticsUsingGET"></a>
# **getDashboardAnalyticsUsingGET**
> Object getDashboardAnalyticsUsingGET()

getDashboardAnalytics

### Example
```javascript
var SubscreasyJsClient = require('subscreasy-js-client');
var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new SubscreasyJsClient.AnalyticsResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDashboardAnalyticsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

