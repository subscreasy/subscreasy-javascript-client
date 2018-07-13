# subscreasy-js-client

SubscreasyJsClient - JavaScript client for subscreasy-js-client
Api Documentation
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install subscreasy-js-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your subscreasy-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('subscreasy-js-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SubscreasyJsClient = require('subscreasy-js-client');

var defaultClient = SubscreasyJsClient.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['Authorization'] = "Token"

var api = new SubscreasyJsClient.AccountResourceApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.isAuthenticatedUsingGET(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SubscreasyJsClient.AccountResourceApi* | [**isAuthenticatedUsingGET**](docs/AccountResourceApi.md#isAuthenticatedUsingGET) | **GET** /api/authenticate | isAuthenticated
*SubscreasyJsClient.AccountResourceApi* | [**registerAccountUsingPOST**](docs/AccountResourceApi.md#registerAccountUsingPOST) | **POST** /api/register | registerAccount
*SubscreasyJsClient.AnalyticsResourceApi* | [**getDashboardAnalyticsUsingGET**](docs/AnalyticsResourceApi.md#getDashboardAnalyticsUsingGET) | **GET** /api/analytics/dashboard | getDashboardAnalytics
*SubscreasyJsClient.ChargingLogResourceApi* | [**createChargingLogUsingPOST**](docs/ChargingLogResourceApi.md#createChargingLogUsingPOST) | **POST** /api/charging-logs | createChargingLog
*SubscreasyJsClient.ChargingLogResourceApi* | [**deleteChargingLogUsingDELETE**](docs/ChargingLogResourceApi.md#deleteChargingLogUsingDELETE) | **DELETE** /api/charging-logs/{id} | deleteChargingLog
*SubscreasyJsClient.ChargingLogResourceApi* | [**getAllChargingLogsUsingGET**](docs/ChargingLogResourceApi.md#getAllChargingLogsUsingGET) | **GET** /api/charging-logs | getAllChargingLogs
*SubscreasyJsClient.ChargingLogResourceApi* | [**getChargingLogUsingGET**](docs/ChargingLogResourceApi.md#getChargingLogUsingGET) | **GET** /api/charging-logs/{id} | getChargingLog
*SubscreasyJsClient.ChargingLogResourceApi* | [**refundUsingPOST**](docs/ChargingLogResourceApi.md#refundUsingPOST) | **POST** /api/charging-logs/refund/{chargingLogId} | refund
*SubscreasyJsClient.ChargingLogResourceApi* | [**updateChargingLogUsingPUT**](docs/ChargingLogResourceApi.md#updateChargingLogUsingPUT) | **PUT** /api/charging-logs | updateChargingLog
*SubscreasyJsClient.CompanyPropsResourceApi* | [**createCompanyPropsUsingPOST**](docs/CompanyPropsResourceApi.md#createCompanyPropsUsingPOST) | **POST** /api/company-props | createCompanyProps
*SubscreasyJsClient.CompanyPropsResourceApi* | [**deleteCompanyPropsUsingDELETE**](docs/CompanyPropsResourceApi.md#deleteCompanyPropsUsingDELETE) | **DELETE** /api/company-props/{id} | deleteCompanyProps
*SubscreasyJsClient.CompanyPropsResourceApi* | [**getAllCompanyPropsUsingGET**](docs/CompanyPropsResourceApi.md#getAllCompanyPropsUsingGET) | **GET** /api/company-props | getAllCompanyProps
*SubscreasyJsClient.CompanyPropsResourceApi* | [**getCompanyPropsByCompanyIdUsingGET**](docs/CompanyPropsResourceApi.md#getCompanyPropsByCompanyIdUsingGET) | **GET** /api/company-props/company/{companyId} | getCompanyPropsByCompanyId
*SubscreasyJsClient.CompanyPropsResourceApi* | [**updateCompanyPropsUsingPUT**](docs/CompanyPropsResourceApi.md#updateCompanyPropsUsingPUT) | **PUT** /api/company-props | updateCompanyProps
*SubscreasyJsClient.CompanyResourceApi* | [**createCompanyUsingPOST**](docs/CompanyResourceApi.md#createCompanyUsingPOST) | **POST** /api/companies | createCompany
*SubscreasyJsClient.CompanyResourceApi* | [**deleteCompanyUsingDELETE**](docs/CompanyResourceApi.md#deleteCompanyUsingDELETE) | **DELETE** /api/companies/{id} | deleteCompany
*SubscreasyJsClient.CompanyResourceApi* | [**getAllCompaniesUsingGET**](docs/CompanyResourceApi.md#getAllCompaniesUsingGET) | **GET** /api/companies | getAllCompanies
*SubscreasyJsClient.CompanyResourceApi* | [**getCompanyUsingGET**](docs/CompanyResourceApi.md#getCompanyUsingGET) | **GET** /api/companies/{id} | getCompany
*SubscreasyJsClient.CompanyResourceApi* | [**updateCompanyUsingPUT**](docs/CompanyResourceApi.md#updateCompanyUsingPUT) | **PUT** /api/companies | updateCompany
*SubscreasyJsClient.CouponResourceApi* | [**createCouponUsingPOST**](docs/CouponResourceApi.md#createCouponUsingPOST) | **POST** /api/coupons | createCoupon
*SubscreasyJsClient.CouponResourceApi* | [**deleteCouponUsingDELETE**](docs/CouponResourceApi.md#deleteCouponUsingDELETE) | **DELETE** /api/coupons/{id} | deleteCoupon
*SubscreasyJsClient.CouponResourceApi* | [**getAllCouponsUsingGET**](docs/CouponResourceApi.md#getAllCouponsUsingGET) | **GET** /api/coupons | getAllCoupons
*SubscreasyJsClient.CouponResourceApi* | [**getCouponUsingGET**](docs/CouponResourceApi.md#getCouponUsingGET) | **GET** /api/coupons/{id} | getCoupon
*SubscreasyJsClient.CouponResourceApi* | [**updateCouponUsingPUT**](docs/CouponResourceApi.md#updateCouponUsingPUT) | **PUT** /api/coupons | updateCoupon
*SubscreasyJsClient.EndpointsApi* | [**authorizeUsingPUT**](docs/EndpointsApi.md#authorizeUsingPUT) | **PUT** /api/authorize | authorize
*SubscreasyJsClient.EndpointsApi* | [**deductUsingPUT**](docs/EndpointsApi.md#deductUsingPUT) | **PUT** /api/deduct | deduct
*SubscreasyJsClient.EndpointsApi* | [**getAuthorizedServicesUsingGET**](docs/EndpointsApi.md#getAuthorizedServicesUsingGET) | **GET** /api/service/subscriber/{secureId} | getAuthorizedServices
*SubscreasyJsClient.EndpointsApi* | [**getChargingLogBySubscriptionUsingGET**](docs/EndpointsApi.md#getChargingLogBySubscriptionUsingGET) | **GET** /api/charging-logs/subscription/{id} | getChargingLogBySubscription
*SubscreasyJsClient.EndpointsApi* | [**getCustomerTotalAmountUsingGET**](docs/EndpointsApi.md#getCustomerTotalAmountUsingGET) | **GET** /api/customer-totalAmountCharge/{id} | getCustomerTotalAmount
*SubscreasyJsClient.EndpointsApi* | [**getInvoiceDetailsUsingGET**](docs/EndpointsApi.md#getInvoiceDetailsUsingGET) | **GET** /api/getInvoiceDetails | getInvoiceDetails
*SubscreasyJsClient.EndpointsApi* | [**getMessageTemplateUsingGET**](docs/EndpointsApi.md#getMessageTemplateUsingGET) | **GET** /api/message-templates/email/{lifecycleEventName} | getMessageTemplate
*SubscreasyJsClient.EndpointsApi* | [**getServiceInstancesBySubscriptionUsingGET**](docs/EndpointsApi.md#getServiceInstancesBySubscriptionUsingGET) | **GET** /api/service-instances/subscription/{id} | getServiceInstancesBySubscription
*SubscreasyJsClient.EndpointsApi* | [**getServiceOfferingsBySubscriptionPlanUsingGET**](docs/EndpointsApi.md#getServiceOfferingsBySubscriptionPlanUsingGET) | **GET** /api/service-offerings/offer/{id} | getServiceOfferingsBySubscriptionPlan
*SubscreasyJsClient.EndpointsApi* | [**getTotalRevenuePerMonthUsingGET**](docs/EndpointsApi.md#getTotalRevenuePerMonthUsingGET) | **GET** /api/charging-logs-totalamount-customer/{id} | getTotalRevenuePerMonth
*SubscreasyJsClient.HistoryResourceApi* | [**createHistoryUsingPOST**](docs/HistoryResourceApi.md#createHistoryUsingPOST) | **POST** /api/histories | createHistory
*SubscreasyJsClient.HistoryResourceApi* | [**deleteHistoryUsingDELETE**](docs/HistoryResourceApi.md#deleteHistoryUsingDELETE) | **DELETE** /api/histories/{id} | deleteHistory
*SubscreasyJsClient.HistoryResourceApi* | [**getAllHistoriesUsingGET**](docs/HistoryResourceApi.md#getAllHistoriesUsingGET) | **GET** /api/histories | getAllHistories
*SubscreasyJsClient.HistoryResourceApi* | [**getHistoryUsingGET**](docs/HistoryResourceApi.md#getHistoryUsingGET) | **GET** /api/histories/{id} | getHistory
*SubscreasyJsClient.HistoryResourceApi* | [**updateHistoryUsingPUT**](docs/HistoryResourceApi.md#updateHistoryUsingPUT) | **PUT** /api/histories | updateHistory
*SubscreasyJsClient.InvoiceResourceApi* | [**createInvoiceUsingPOST**](docs/InvoiceResourceApi.md#createInvoiceUsingPOST) | **POST** /api/invoices | createInvoice
*SubscreasyJsClient.InvoiceResourceApi* | [**deleteInvoiceUsingDELETE**](docs/InvoiceResourceApi.md#deleteInvoiceUsingDELETE) | **DELETE** /api/invoices/{id} | deleteInvoice
*SubscreasyJsClient.InvoiceResourceApi* | [**getAllInvoicesUsingGET**](docs/InvoiceResourceApi.md#getAllInvoicesUsingGET) | **GET** /api/invoices | getAllInvoices
*SubscreasyJsClient.InvoiceResourceApi* | [**getInvoiceBySubscriberUsingGET**](docs/InvoiceResourceApi.md#getInvoiceBySubscriberUsingGET) | **GET** /api/invoices/subscriber/{subscriberSecureId} | getInvoiceBySubscriber
*SubscreasyJsClient.InvoiceResourceApi* | [**getInvoiceUsingGET**](docs/InvoiceResourceApi.md#getInvoiceUsingGET) | **GET** /api/invoices/{id} | getInvoice
*SubscreasyJsClient.InvoiceResourceApi* | [**updateInvoiceUsingPUT**](docs/InvoiceResourceApi.md#updateInvoiceUsingPUT) | **PUT** /api/invoices | updateInvoice
*SubscreasyJsClient.MessageTemplateResourceApi* | [**createMessageTemplateUsingPOST**](docs/MessageTemplateResourceApi.md#createMessageTemplateUsingPOST) | **POST** /api/message-templates | createMessageTemplate
*SubscreasyJsClient.MessageTemplateResourceApi* | [**deleteMessageTemplateUsingDELETE**](docs/MessageTemplateResourceApi.md#deleteMessageTemplateUsingDELETE) | **DELETE** /api/message-templates/{id} | deleteMessageTemplate
*SubscreasyJsClient.MessageTemplateResourceApi* | [**getAllMessageTemplatesUsingGET**](docs/MessageTemplateResourceApi.md#getAllMessageTemplatesUsingGET) | **GET** /api/message-templates | getAllMessageTemplates
*SubscreasyJsClient.MessageTemplateResourceApi* | [**getMessageTemplateUsingGET1**](docs/MessageTemplateResourceApi.md#getMessageTemplateUsingGET1) | **GET** /api/message-templates/{id} | getMessageTemplate
*SubscreasyJsClient.MessageTemplateResourceApi* | [**updateMessageTemplateUsingPUT**](docs/MessageTemplateResourceApi.md#updateMessageTemplateUsingPUT) | **PUT** /api/message-templates | updateMessageTemplate
*SubscreasyJsClient.OfferResourceApi* | [**createOfferUsingPOST**](docs/OfferResourceApi.md#createOfferUsingPOST) | **POST** /api/offers | createOffer
*SubscreasyJsClient.OfferResourceApi* | [**deleteOfferUsingDELETE**](docs/OfferResourceApi.md#deleteOfferUsingDELETE) | **DELETE** /api/offers/{id} | deleteOffer
*SubscreasyJsClient.OfferResourceApi* | [**getAllOffersUsingGET**](docs/OfferResourceApi.md#getAllOffersUsingGET) | **GET** /api/offers | getAllOffers
*SubscreasyJsClient.OfferResourceApi* | [**getOfferUsingGET**](docs/OfferResourceApi.md#getOfferUsingGET) | **GET** /api/offers/{id} | getOffer
*SubscreasyJsClient.OfferResourceApi* | [**updateOfferUsingPUT**](docs/OfferResourceApi.md#updateOfferUsingPUT) | **PUT** /api/offers | updateOffer
*SubscreasyJsClient.OrderItemResourceApi* | [**createOrderItemUsingPOST**](docs/OrderItemResourceApi.md#createOrderItemUsingPOST) | **POST** /api/order-items | createOrderItem
*SubscreasyJsClient.OrderItemResourceApi* | [**deleteOrderItemUsingDELETE**](docs/OrderItemResourceApi.md#deleteOrderItemUsingDELETE) | **DELETE** /api/order-items/{id} | deleteOrderItem
*SubscreasyJsClient.OrderItemResourceApi* | [**getAllOrderItemsUsingGET**](docs/OrderItemResourceApi.md#getAllOrderItemsUsingGET) | **GET** /api/order-items | getAllOrderItems
*SubscreasyJsClient.OrderItemResourceApi* | [**getOrderItemUsingGET**](docs/OrderItemResourceApi.md#getOrderItemUsingGET) | **GET** /api/order-items/{id} | getOrderItem
*SubscreasyJsClient.OrderItemResourceApi* | [**updateOrderItemUsingPUT**](docs/OrderItemResourceApi.md#updateOrderItemUsingPUT) | **PUT** /api/order-items | updateOrderItem
*SubscreasyJsClient.OrderResourceApi* | [**createOrderUsingPOST**](docs/OrderResourceApi.md#createOrderUsingPOST) | **POST** /api/orders | createOrder
*SubscreasyJsClient.OrderResourceApi* | [**getAllOrdersUsingGET**](docs/OrderResourceApi.md#getAllOrdersUsingGET) | **GET** /api/orders | getAllOrders
*SubscreasyJsClient.OrderResourceApi* | [**getOrderUsingGET**](docs/OrderResourceApi.md#getOrderUsingGET) | **GET** /api/orders/{id} | getOrder
*SubscreasyJsClient.OrderResourceApi* | [**updateOrderUsingPUT**](docs/OrderResourceApi.md#updateOrderUsingPUT) | **PUT** /api/orders | updateOrder
*SubscreasyJsClient.ProductResourceApi* | [**createProductUsingPOST**](docs/ProductResourceApi.md#createProductUsingPOST) | **POST** /api/products | createProduct
*SubscreasyJsClient.ProductResourceApi* | [**getAllCompanyProductUsingGET**](docs/ProductResourceApi.md#getAllCompanyProductUsingGET) | **GET** /api/na/products2/{companyName} | getAllCompanyProduct
*SubscreasyJsClient.ProductResourceApi* | [**getAllProductsUsingGET**](docs/ProductResourceApi.md#getAllProductsUsingGET) | **GET** /api/products | getAllProducts
*SubscreasyJsClient.ProductResourceApi* | [**getCompanyProductUsingGET**](docs/ProductResourceApi.md#getCompanyProductUsingGET) | **GET** /api/na/products/{companyName}/{id} | getCompanyProduct
*SubscreasyJsClient.ProductResourceApi* | [**getProductUsingGET**](docs/ProductResourceApi.md#getProductUsingGET) | **GET** /api/products/{id} | getProduct
*SubscreasyJsClient.ProductResourceApi* | [**updateProductUsingPUT**](docs/ProductResourceApi.md#updateProductUsingPUT) | **PUT** /api/products | updateProduct
*SubscreasyJsClient.ProductResourceApi* | [**uploadFileUsingPOST**](docs/ProductResourceApi.md#uploadFileUsingPOST) | **POST** /api/products/uploadFile | uploadFile
*SubscreasyJsClient.ProfileInfoResourceApi* | [**getActiveProfilesUsingGET**](docs/ProfileInfoResourceApi.md#getActiveProfilesUsingGET) | **GET** /api/profile-info | getActiveProfiles
*SubscreasyJsClient.SavedCardResourceApi* | [**createCardUsingPOST**](docs/SavedCardResourceApi.md#createCardUsingPOST) | **POST** /api/saved-cards | createCard
*SubscreasyJsClient.SavedCardResourceApi* | [**deleteCardUsingDELETE**](docs/SavedCardResourceApi.md#deleteCardUsingDELETE) | **DELETE** /api/saved-cards/{id} | deleteCard
*SubscreasyJsClient.SavedCardResourceApi* | [**getAllCardsUsingGET**](docs/SavedCardResourceApi.md#getAllCardsUsingGET) | **GET** /api/saved-cards | getAllCards
*SubscreasyJsClient.SavedCardResourceApi* | [**getCardUsingGET**](docs/SavedCardResourceApi.md#getCardUsingGET) | **GET** /api/saved-cards/{id} | getCard
*SubscreasyJsClient.SavedCardResourceApi* | [**updateCardUsingPUT**](docs/SavedCardResourceApi.md#updateCardUsingPUT) | **PUT** /api/saved-cards | updateCard
*SubscreasyJsClient.ServiceInstanceResourceApi* | [**createServiceInstanceUsingPOST**](docs/ServiceInstanceResourceApi.md#createServiceInstanceUsingPOST) | **POST** /api/service-instances | createServiceInstance
*SubscreasyJsClient.ServiceInstanceResourceApi* | [**deleteServiceInstanceUsingDELETE**](docs/ServiceInstanceResourceApi.md#deleteServiceInstanceUsingDELETE) | **DELETE** /api/service-instances/{id} | deleteServiceInstance
*SubscreasyJsClient.ServiceInstanceResourceApi* | [**getAllServiceInstancesUsingGET**](docs/ServiceInstanceResourceApi.md#getAllServiceInstancesUsingGET) | **GET** /api/service-instances | getAllServiceInstances
*SubscreasyJsClient.ServiceInstanceResourceApi* | [**getServiceInstanceUsingGET**](docs/ServiceInstanceResourceApi.md#getServiceInstanceUsingGET) | **GET** /api/service-instances/{id} | getServiceInstance
*SubscreasyJsClient.ServiceInstanceResourceApi* | [**updateServiceInstanceUsingPUT**](docs/ServiceInstanceResourceApi.md#updateServiceInstanceUsingPUT) | **PUT** /api/service-instances | updateServiceInstance
*SubscreasyJsClient.ServiceOfferingResourceApi* | [**createServiceOfferingUsingPOST**](docs/ServiceOfferingResourceApi.md#createServiceOfferingUsingPOST) | **POST** /api/service-offerings | createServiceOffering
*SubscreasyJsClient.ServiceOfferingResourceApi* | [**deleteServiceOfferingUsingDELETE**](docs/ServiceOfferingResourceApi.md#deleteServiceOfferingUsingDELETE) | **DELETE** /api/service-offerings/{id} | deleteServiceOffering
*SubscreasyJsClient.ServiceOfferingResourceApi* | [**getAllServiceOfferingsUsingGET**](docs/ServiceOfferingResourceApi.md#getAllServiceOfferingsUsingGET) | **GET** /api/service-offerings | getAllServiceOfferings
*SubscreasyJsClient.ServiceOfferingResourceApi* | [**getServiceOfferingUsingGET**](docs/ServiceOfferingResourceApi.md#getServiceOfferingUsingGET) | **GET** /api/service-offerings/{id} | getServiceOffering
*SubscreasyJsClient.ServiceOfferingResourceApi* | [**updateServiceOfferingUsingPUT**](docs/ServiceOfferingResourceApi.md#updateServiceOfferingUsingPUT) | **PUT** /api/service-offerings | updateServiceOffering
*SubscreasyJsClient.ServiceResourceApi* | [**createServiceUsingPOST**](docs/ServiceResourceApi.md#createServiceUsingPOST) | **POST** /api/services | createService
*SubscreasyJsClient.ServiceResourceApi* | [**deleteServiceUsingDELETE**](docs/ServiceResourceApi.md#deleteServiceUsingDELETE) | **DELETE** /api/services/{id} | deleteService
*SubscreasyJsClient.ServiceResourceApi* | [**getAllServicesUsingGET**](docs/ServiceResourceApi.md#getAllServicesUsingGET) | **GET** /api/services | getAllServices
*SubscreasyJsClient.ServiceResourceApi* | [**getServiceUsingGET**](docs/ServiceResourceApi.md#getServiceUsingGET) | **GET** /api/services/{id} | getService
*SubscreasyJsClient.ServiceResourceApi* | [**updateServiceUsingPUT**](docs/ServiceResourceApi.md#updateServiceUsingPUT) | **PUT** /api/services | updateService
*SubscreasyJsClient.SubscriberResourceApi* | [**createSubscriberUsingPOST**](docs/SubscriberResourceApi.md#createSubscriberUsingPOST) | **POST** /api/subscribers | createSubscriber
*SubscreasyJsClient.SubscriberResourceApi* | [**deleteSubscriberUsingDELETE**](docs/SubscriberResourceApi.md#deleteSubscriberUsingDELETE) | **DELETE** /api/subscribers/{id} | deleteSubscriber
*SubscreasyJsClient.SubscriberResourceApi* | [**getAllSubscribersUsingGET**](docs/SubscriberResourceApi.md#getAllSubscribersUsingGET) | **GET** /api/subscribers | getAllSubscribers
*SubscreasyJsClient.SubscriberResourceApi* | [**getSubscriberByEmailUsingGET**](docs/SubscriberResourceApi.md#getSubscriberByEmailUsingGET) | **GET** /api/subscribers/email/{email} | getSubscriberByEmail
*SubscreasyJsClient.SubscriberResourceApi* | [**getSubscriberByNameUsingGET**](docs/SubscriberResourceApi.md#getSubscriberByNameUsingGET) | **GET** /api/subscribers/name/{name} | getSubscriberByName
*SubscreasyJsClient.SubscriberResourceApi* | [**getSubscriberBySecureIdUsingGET**](docs/SubscriberResourceApi.md#getSubscriberBySecureIdUsingGET) | **GET** /api/subscribers/secureId/{secureId} | getSubscriberBySecureId
*SubscreasyJsClient.SubscriberResourceApi* | [**getSubscriberUsingGET**](docs/SubscriberResourceApi.md#getSubscriberUsingGET) | **GET** /api/subscribers/{id} | getSubscriber
*SubscreasyJsClient.SubscriberResourceApi* | [**updateSubscriberUsingPUT**](docs/SubscriberResourceApi.md#updateSubscriberUsingPUT) | **PUT** /api/subscribers | updateSubscriber
*SubscreasyJsClient.SubsriptionResourceApi* | [**cancelSubscriptionUsingPUT**](docs/SubsriptionResourceApi.md#cancelSubscriptionUsingPUT) | **PUT** /api/subscriptions/cancel | cancelSubscription
*SubscreasyJsClient.SubsriptionResourceApi* | [**getActiveSubscriptionsUsingGET**](docs/SubsriptionResourceApi.md#getActiveSubscriptionsUsingGET) | **GET** /api/subsriptions/subscriber/{secureId} | getActiveSubscriptions
*SubscreasyJsClient.SubsriptionResourceApi* | [**getAllCompanySubscriptionsUsingGET**](docs/SubsriptionResourceApi.md#getAllCompanySubscriptionsUsingGET) | **GET** /api/subscriptions/company/{id} | getAllCompanySubscriptions
*SubscreasyJsClient.SubsriptionResourceApi* | [**getSubsriptionUsingGET**](docs/SubsriptionResourceApi.md#getSubsriptionUsingGET) | **GET** /api/subsriptions/{id} | getSubsription
*SubscreasyJsClient.SubsriptionResourceApi* | [**startSubscriptionUsingPOST**](docs/SubsriptionResourceApi.md#startSubscriptionUsingPOST) | **POST** /api/subscriptions/start | startSubscription
*SubscreasyJsClient.UsageNotificationResourceApi* | [**createUsageNotificationUsingPOST**](docs/UsageNotificationResourceApi.md#createUsageNotificationUsingPOST) | **POST** /api/usage-notifications | createUsageNotification
*SubscreasyJsClient.UsageNotificationResourceApi* | [**deleteUsageNotificationUsingDELETE**](docs/UsageNotificationResourceApi.md#deleteUsageNotificationUsingDELETE) | **DELETE** /api/usage-notifications/{id} | deleteUsageNotification
*SubscreasyJsClient.UsageNotificationResourceApi* | [**getAllUsageNotificationsUsingGET**](docs/UsageNotificationResourceApi.md#getAllUsageNotificationsUsingGET) | **GET** /api/usage-notifications | getAllUsageNotifications
*SubscreasyJsClient.UsageNotificationResourceApi* | [**getUsageNotificationUsingGET**](docs/UsageNotificationResourceApi.md#getUsageNotificationUsingGET) | **GET** /api/usage-notifications/{id} | getUsageNotification
*SubscreasyJsClient.UsageNotificationResourceApi* | [**updateUsageNotificationUsingPUT**](docs/UsageNotificationResourceApi.md#updateUsageNotificationUsingPUT) | **PUT** /api/usage-notifications | updateUsageNotification
*SubscreasyJsClient.UserJwtControllerApi* | [**authorizeUsingPOST**](docs/UserJwtControllerApi.md#authorizeUsingPOST) | **POST** /api/authenticate | authorize
*SubscreasyJsClient.UserResourceApi* | [**createUserUsingPOST**](docs/UserResourceApi.md#createUserUsingPOST) | **POST** /api/users | createUser
*SubscreasyJsClient.UserResourceApi* | [**deleteUserUsingDELETE**](docs/UserResourceApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{login} | deleteUser
*SubscreasyJsClient.UserResourceApi* | [**getAllUsersUsingGET**](docs/UserResourceApi.md#getAllUsersUsingGET) | **GET** /api/users | getAllUsers
*SubscreasyJsClient.UserResourceApi* | [**getAuthoritiesUsingGET**](docs/UserResourceApi.md#getAuthoritiesUsingGET) | **GET** /api/users/authorities | getAuthorities
*SubscreasyJsClient.UserResourceApi* | [**getUserUsingGET**](docs/UserResourceApi.md#getUserUsingGET) | **GET** /api/users/{login} | getUser
*SubscreasyJsClient.UserResourceApi* | [**updateUserUsingPUT**](docs/UserResourceApi.md#updateUserUsingPUT) | **PUT** /api/users | updateUser


## Documentation for Models

 - [SubscreasyJsClient.Address](docs/Address.md)
 - [SubscreasyJsClient.Authority](docs/Authority.md)
 - [SubscreasyJsClient.Authorization](docs/Authorization.md)
 - [SubscreasyJsClient.AuthorizedServicesResponse](docs/AuthorizedServicesResponse.md)
 - [SubscreasyJsClient.Cancellation](docs/Cancellation.md)
 - [SubscreasyJsClient.ChargingLog](docs/ChargingLog.md)
 - [SubscreasyJsClient.Company](docs/Company.md)
 - [SubscreasyJsClient.CompanyProps](docs/CompanyProps.md)
 - [SubscreasyJsClient.Coupon](docs/Coupon.md)
 - [SubscreasyJsClient.Deduction](docs/Deduction.md)
 - [SubscreasyJsClient.DeductionResult](docs/DeductionResult.md)
 - [SubscreasyJsClient.History](docs/History.md)
 - [SubscreasyJsClient.Invoice](docs/Invoice.md)
 - [SubscreasyJsClient.InvoiceRequest](docs/InvoiceRequest.md)
 - [SubscreasyJsClient.LoginVM](docs/LoginVM.md)
 - [SubscreasyJsClient.ManagedUserVM](docs/ManagedUserVM.md)
 - [SubscreasyJsClient.MessageTemplate](docs/MessageTemplate.md)
 - [SubscreasyJsClient.Offer](docs/Offer.md)
 - [SubscreasyJsClient.Order](docs/Order.md)
 - [SubscreasyJsClient.OrderItem](docs/OrderItem.md)
 - [SubscreasyJsClient.PaymentCard](docs/PaymentCard.md)
 - [SubscreasyJsClient.Product](docs/Product.md)
 - [SubscreasyJsClient.ProfileInfoVM](docs/ProfileInfoVM.md)
 - [SubscreasyJsClient.RecurrencePeriod](docs/RecurrencePeriod.md)
 - [SubscreasyJsClient.ResponseEntity](docs/ResponseEntity.md)
 - [SubscreasyJsClient.SavedCard](docs/SavedCard.md)
 - [SubscreasyJsClient.Service](docs/Service.md)
 - [SubscreasyJsClient.ServiceInstance](docs/ServiceInstance.md)
 - [SubscreasyJsClient.ServiceInstanceResult](docs/ServiceInstanceResult.md)
 - [SubscreasyJsClient.ServiceOffering](docs/ServiceOffering.md)
 - [SubscreasyJsClient.ServiceOfferingResult](docs/ServiceOfferingResult.md)
 - [SubscreasyJsClient.StartSubscriptionRequest](docs/StartSubscriptionRequest.md)
 - [SubscreasyJsClient.StartSubscriptionResult](docs/StartSubscriptionResult.md)
 - [SubscreasyJsClient.Subscriber](docs/Subscriber.md)
 - [SubscreasyJsClient.Subsription](docs/Subsription.md)
 - [SubscreasyJsClient.UsageNotification](docs/UsageNotification.md)
 - [SubscreasyJsClient.User](docs/User.md)
 - [SubscreasyJsClient.UserDTO](docs/UserDTO.md)


## Documentation for Authorization


### apiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

