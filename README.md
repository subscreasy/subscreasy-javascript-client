# api_documentation

ApiDocumentation - JavaScript client for api_documentation
Api Documentation
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_documentation --save
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

Finally, switch to the directory you want to use your api_documentation from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('api_documentation')` in javascript files from the directory you ran the last 
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
var ApiDocumentation = require('api_documentation');

var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['Authorization'] = "Token"

var api = new ApiDocumentation.AnalyticsResourceApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDashboardAnalyticsUsingGET(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiDocumentation.AnalyticsResourceApi* | [**getDashboardAnalyticsUsingGET**](docs/AnalyticsResourceApi.md#getDashboardAnalyticsUsingGET) | **GET** /api/analytics/dashboard | getDashboardAnalytics
*ApiDocumentation.CardResourceApi* | [**createCardUsingPOST**](docs/CardResourceApi.md#createCardUsingPOST) | **POST** /api/cards | createCard
*ApiDocumentation.CardResourceApi* | [**deleteCardUsingDELETE**](docs/CardResourceApi.md#deleteCardUsingDELETE) | **DELETE** /api/cards/{id} | deleteCard
*ApiDocumentation.CardResourceApi* | [**getAllCardsUsingGET**](docs/CardResourceApi.md#getAllCardsUsingGET) | **GET** /api/cards | getAllCards
*ApiDocumentation.CardResourceApi* | [**getCardUsingGET**](docs/CardResourceApi.md#getCardUsingGET) | **GET** /api/cards/{id} | getCard
*ApiDocumentation.CardResourceApi* | [**updateCardUsingPUT**](docs/CardResourceApi.md#updateCardUsingPUT) | **PUT** /api/cards | updateCard
*ApiDocumentation.ChargingLogResourceApi* | [**createChargingLogUsingPOST**](docs/ChargingLogResourceApi.md#createChargingLogUsingPOST) | **POST** /api/charging-logs | createChargingLog
*ApiDocumentation.ChargingLogResourceApi* | [**deleteChargingLogUsingDELETE**](docs/ChargingLogResourceApi.md#deleteChargingLogUsingDELETE) | **DELETE** /api/charging-logs/{id} | deleteChargingLog
*ApiDocumentation.ChargingLogResourceApi* | [**getAllChargingLogsUsingGET**](docs/ChargingLogResourceApi.md#getAllChargingLogsUsingGET) | **GET** /api/charging-logs | getAllChargingLogs
*ApiDocumentation.ChargingLogResourceApi* | [**getChargingLogUsingGET**](docs/ChargingLogResourceApi.md#getChargingLogUsingGET) | **GET** /api/charging-logs/{id} | getChargingLog
*ApiDocumentation.ChargingLogResourceApi* | [**refundUsingPOST**](docs/ChargingLogResourceApi.md#refundUsingPOST) | **POST** /api/charging-logs/refund/{chargingLogId} | refund
*ApiDocumentation.ChargingLogResourceApi* | [**updateChargingLogUsingPUT**](docs/ChargingLogResourceApi.md#updateChargingLogUsingPUT) | **PUT** /api/charging-logs | updateChargingLog
*ApiDocumentation.CompanyPropsResourceApi* | [**createCompanyPropsUsingPOST**](docs/CompanyPropsResourceApi.md#createCompanyPropsUsingPOST) | **POST** /api/company-props | createCompanyProps
*ApiDocumentation.CompanyPropsResourceApi* | [**deleteCompanyPropsUsingDELETE**](docs/CompanyPropsResourceApi.md#deleteCompanyPropsUsingDELETE) | **DELETE** /api/company-props/{id} | deleteCompanyProps
*ApiDocumentation.CompanyPropsResourceApi* | [**getAllCompanyPropsUsingGET**](docs/CompanyPropsResourceApi.md#getAllCompanyPropsUsingGET) | **GET** /api/company-props | getAllCompanyProps
*ApiDocumentation.CompanyPropsResourceApi* | [**getCompanyPropsByCompanyIdUsingGET**](docs/CompanyPropsResourceApi.md#getCompanyPropsByCompanyIdUsingGET) | **GET** /api/company-props/company/{companyId} | getCompanyPropsByCompanyId
*ApiDocumentation.CompanyPropsResourceApi* | [**updateCompanyPropsUsingPUT**](docs/CompanyPropsResourceApi.md#updateCompanyPropsUsingPUT) | **PUT** /api/company-props | updateCompanyProps
*ApiDocumentation.CompanyResourceApi* | [**createCompanyUsingPOST**](docs/CompanyResourceApi.md#createCompanyUsingPOST) | **POST** /api/companies | createCompany
*ApiDocumentation.CompanyResourceApi* | [**deleteCompanyUsingDELETE**](docs/CompanyResourceApi.md#deleteCompanyUsingDELETE) | **DELETE** /api/companies/{id} | deleteCompany
*ApiDocumentation.CompanyResourceApi* | [**getAllCompaniesUsingGET**](docs/CompanyResourceApi.md#getAllCompaniesUsingGET) | **GET** /api/companies | getAllCompanies
*ApiDocumentation.CompanyResourceApi* | [**getCompanyUsingGET**](docs/CompanyResourceApi.md#getCompanyUsingGET) | **GET** /api/companies/{id} | getCompany
*ApiDocumentation.CompanyResourceApi* | [**updateCompanyUsingPUT**](docs/CompanyResourceApi.md#updateCompanyUsingPUT) | **PUT** /api/companies | updateCompany
*ApiDocumentation.CouponResourceApi* | [**createCouponUsingPOST**](docs/CouponResourceApi.md#createCouponUsingPOST) | **POST** /api/coupons | createCoupon
*ApiDocumentation.CouponResourceApi* | [**deleteCouponUsingDELETE**](docs/CouponResourceApi.md#deleteCouponUsingDELETE) | **DELETE** /api/coupons/{id} | deleteCoupon
*ApiDocumentation.CouponResourceApi* | [**getAllCouponsUsingGET**](docs/CouponResourceApi.md#getAllCouponsUsingGET) | **GET** /api/coupons | getAllCoupons
*ApiDocumentation.CouponResourceApi* | [**getCouponUsingGET**](docs/CouponResourceApi.md#getCouponUsingGET) | **GET** /api/coupons/{id} | getCoupon
*ApiDocumentation.CouponResourceApi* | [**updateCouponUsingPUT**](docs/CouponResourceApi.md#updateCouponUsingPUT) | **PUT** /api/coupons | updateCoupon
*ApiDocumentation.EndpointsApi* | [**authorizeUsingPUT**](docs/EndpointsApi.md#authorizeUsingPUT) | **PUT** /api/authorize | authorize
*ApiDocumentation.EndpointsApi* | [**deductUsingPUT**](docs/EndpointsApi.md#deductUsingPUT) | **PUT** /api/deduct | deduct
*ApiDocumentation.EndpointsApi* | [**getAuthorizedServicesUsingGET**](docs/EndpointsApi.md#getAuthorizedServicesUsingGET) | **GET** /api/service/subscriber/{secureId} | getAuthorizedServices
*ApiDocumentation.EndpointsApi* | [**getChargingLogBySubscriptionUsingGET**](docs/EndpointsApi.md#getChargingLogBySubscriptionUsingGET) | **GET** /api/charging-logs/subscription/{id} | getChargingLogBySubscription
*ApiDocumentation.EndpointsApi* | [**getCustomerTotalAmountUsingGET**](docs/EndpointsApi.md#getCustomerTotalAmountUsingGET) | **GET** /api/customer-totalAmountCharge/{id} | getCustomerTotalAmount
*ApiDocumentation.EndpointsApi* | [**getInvoiceDetailsUsingGET**](docs/EndpointsApi.md#getInvoiceDetailsUsingGET) | **GET** /api/getInvoiceDetails | getInvoiceDetails
*ApiDocumentation.EndpointsApi* | [**getMessageTemplateUsingGET**](docs/EndpointsApi.md#getMessageTemplateUsingGET) | **GET** /api/message-templates/email/{lifecycleEventName} | getMessageTemplate
*ApiDocumentation.EndpointsApi* | [**getServiceInstancesBySubscriptionUsingGET**](docs/EndpointsApi.md#getServiceInstancesBySubscriptionUsingGET) | **GET** /api/service-instances/subscription/{id} | getServiceInstancesBySubscription
*ApiDocumentation.EndpointsApi* | [**getServiceOfferingsBySubscriptionPlanUsingGET**](docs/EndpointsApi.md#getServiceOfferingsBySubscriptionPlanUsingGET) | **GET** /api/service-offerings/offer/{id} | getServiceOfferingsBySubscriptionPlan
*ApiDocumentation.EndpointsApi* | [**getTotalRevenuePerMonthUsingGET**](docs/EndpointsApi.md#getTotalRevenuePerMonthUsingGET) | **GET** /api/charging-logs-totalamount-customer/{id} | getTotalRevenuePerMonth
*ApiDocumentation.HistoryResourceApi* | [**createHistoryUsingPOST**](docs/HistoryResourceApi.md#createHistoryUsingPOST) | **POST** /api/histories | createHistory
*ApiDocumentation.HistoryResourceApi* | [**deleteHistoryUsingDELETE**](docs/HistoryResourceApi.md#deleteHistoryUsingDELETE) | **DELETE** /api/histories/{id} | deleteHistory
*ApiDocumentation.HistoryResourceApi* | [**getAllHistoriesUsingGET**](docs/HistoryResourceApi.md#getAllHistoriesUsingGET) | **GET** /api/histories | getAllHistories
*ApiDocumentation.HistoryResourceApi* | [**getHistoryUsingGET**](docs/HistoryResourceApi.md#getHistoryUsingGET) | **GET** /api/histories/{id} | getHistory
*ApiDocumentation.HistoryResourceApi* | [**updateHistoryUsingPUT**](docs/HistoryResourceApi.md#updateHistoryUsingPUT) | **PUT** /api/histories | updateHistory
*ApiDocumentation.InvoiceResourceApi* | [**createInvoiceUsingPOST**](docs/InvoiceResourceApi.md#createInvoiceUsingPOST) | **POST** /api/invoices | createInvoice
*ApiDocumentation.InvoiceResourceApi* | [**deleteInvoiceUsingDELETE**](docs/InvoiceResourceApi.md#deleteInvoiceUsingDELETE) | **DELETE** /api/invoices/{id} | deleteInvoice
*ApiDocumentation.InvoiceResourceApi* | [**getAllInvoicesUsingGET**](docs/InvoiceResourceApi.md#getAllInvoicesUsingGET) | **GET** /api/invoices | getAllInvoices
*ApiDocumentation.InvoiceResourceApi* | [**getInvoiceBySubscriberUsingGET**](docs/InvoiceResourceApi.md#getInvoiceBySubscriberUsingGET) | **GET** /api/invoices/subscriber/{subscriberSecureId} | getInvoiceBySubscriber
*ApiDocumentation.InvoiceResourceApi* | [**getInvoiceUsingGET**](docs/InvoiceResourceApi.md#getInvoiceUsingGET) | **GET** /api/invoices/{id} | getInvoice
*ApiDocumentation.InvoiceResourceApi* | [**updateInvoiceUsingPUT**](docs/InvoiceResourceApi.md#updateInvoiceUsingPUT) | **PUT** /api/invoices | updateInvoice
*ApiDocumentation.MessageTemplateResourceApi* | [**createMessageTemplateUsingPOST**](docs/MessageTemplateResourceApi.md#createMessageTemplateUsingPOST) | **POST** /api/message-templates | createMessageTemplate
*ApiDocumentation.MessageTemplateResourceApi* | [**deleteMessageTemplateUsingDELETE**](docs/MessageTemplateResourceApi.md#deleteMessageTemplateUsingDELETE) | **DELETE** /api/message-templates/{id} | deleteMessageTemplate
*ApiDocumentation.MessageTemplateResourceApi* | [**getAllMessageTemplatesUsingGET**](docs/MessageTemplateResourceApi.md#getAllMessageTemplatesUsingGET) | **GET** /api/message-templates | getAllMessageTemplates
*ApiDocumentation.MessageTemplateResourceApi* | [**getMessageTemplateUsingGET1**](docs/MessageTemplateResourceApi.md#getMessageTemplateUsingGET1) | **GET** /api/message-templates/{id} | getMessageTemplate
*ApiDocumentation.MessageTemplateResourceApi* | [**updateMessageTemplateUsingPUT**](docs/MessageTemplateResourceApi.md#updateMessageTemplateUsingPUT) | **PUT** /api/message-templates | updateMessageTemplate
*ApiDocumentation.OfferResourceApi* | [**createOfferUsingPOST**](docs/OfferResourceApi.md#createOfferUsingPOST) | **POST** /api/offers | createOffer
*ApiDocumentation.OfferResourceApi* | [**deleteOfferUsingDELETE**](docs/OfferResourceApi.md#deleteOfferUsingDELETE) | **DELETE** /api/offers/{id} | deleteOffer
*ApiDocumentation.OfferResourceApi* | [**getAllOffersUsingGET**](docs/OfferResourceApi.md#getAllOffersUsingGET) | **GET** /api/offers | getAllOffers
*ApiDocumentation.OfferResourceApi* | [**getOfferUsingGET**](docs/OfferResourceApi.md#getOfferUsingGET) | **GET** /api/offers/{id} | getOffer
*ApiDocumentation.OfferResourceApi* | [**updateOfferUsingPUT**](docs/OfferResourceApi.md#updateOfferUsingPUT) | **PUT** /api/offers | updateOffer
*ApiDocumentation.ProfileInfoResourceApi* | [**getActiveProfilesUsingGET**](docs/ProfileInfoResourceApi.md#getActiveProfilesUsingGET) | **GET** /api/profile-info | getActiveProfiles
*ApiDocumentation.ServiceInstanceResourceApi* | [**createServiceInstanceUsingPOST**](docs/ServiceInstanceResourceApi.md#createServiceInstanceUsingPOST) | **POST** /api/service-instances | createServiceInstance
*ApiDocumentation.ServiceInstanceResourceApi* | [**deleteServiceInstanceUsingDELETE**](docs/ServiceInstanceResourceApi.md#deleteServiceInstanceUsingDELETE) | **DELETE** /api/service-instances/{id} | deleteServiceInstance
*ApiDocumentation.ServiceInstanceResourceApi* | [**getAllServiceInstancesUsingGET**](docs/ServiceInstanceResourceApi.md#getAllServiceInstancesUsingGET) | **GET** /api/service-instances | getAllServiceInstances
*ApiDocumentation.ServiceInstanceResourceApi* | [**getServiceInstanceUsingGET**](docs/ServiceInstanceResourceApi.md#getServiceInstanceUsingGET) | **GET** /api/service-instances/{id} | getServiceInstance
*ApiDocumentation.ServiceInstanceResourceApi* | [**updateServiceInstanceUsingPUT**](docs/ServiceInstanceResourceApi.md#updateServiceInstanceUsingPUT) | **PUT** /api/service-instances | updateServiceInstance
*ApiDocumentation.ServiceOfferingResourceApi* | [**createServiceOfferingUsingPOST**](docs/ServiceOfferingResourceApi.md#createServiceOfferingUsingPOST) | **POST** /api/service-offerings | createServiceOffering
*ApiDocumentation.ServiceOfferingResourceApi* | [**deleteServiceOfferingUsingDELETE**](docs/ServiceOfferingResourceApi.md#deleteServiceOfferingUsingDELETE) | **DELETE** /api/service-offerings/{id} | deleteServiceOffering
*ApiDocumentation.ServiceOfferingResourceApi* | [**getAllServiceOfferingsUsingGET**](docs/ServiceOfferingResourceApi.md#getAllServiceOfferingsUsingGET) | **GET** /api/service-offerings | getAllServiceOfferings
*ApiDocumentation.ServiceOfferingResourceApi* | [**getServiceOfferingUsingGET**](docs/ServiceOfferingResourceApi.md#getServiceOfferingUsingGET) | **GET** /api/service-offerings/{id} | getServiceOffering
*ApiDocumentation.ServiceOfferingResourceApi* | [**updateServiceOfferingUsingPUT**](docs/ServiceOfferingResourceApi.md#updateServiceOfferingUsingPUT) | **PUT** /api/service-offerings | updateServiceOffering
*ApiDocumentation.ServiceResourceApi* | [**createServiceUsingPOST**](docs/ServiceResourceApi.md#createServiceUsingPOST) | **POST** /api/services | createService
*ApiDocumentation.ServiceResourceApi* | [**deleteServiceUsingDELETE**](docs/ServiceResourceApi.md#deleteServiceUsingDELETE) | **DELETE** /api/services/{id} | deleteService
*ApiDocumentation.ServiceResourceApi* | [**getAllServicesUsingGET**](docs/ServiceResourceApi.md#getAllServicesUsingGET) | **GET** /api/services | getAllServices
*ApiDocumentation.ServiceResourceApi* | [**getServiceUsingGET**](docs/ServiceResourceApi.md#getServiceUsingGET) | **GET** /api/services/{id} | getService
*ApiDocumentation.ServiceResourceApi* | [**updateServiceUsingPUT**](docs/ServiceResourceApi.md#updateServiceUsingPUT) | **PUT** /api/services | updateService
*ApiDocumentation.SubscriberResourceApi* | [**createSubscriberUsingPOST**](docs/SubscriberResourceApi.md#createSubscriberUsingPOST) | **POST** /api/subscribers | createSubscriber
*ApiDocumentation.SubscriberResourceApi* | [**deleteSubscriberUsingDELETE**](docs/SubscriberResourceApi.md#deleteSubscriberUsingDELETE) | **DELETE** /api/subscribers/{id} | deleteSubscriber
*ApiDocumentation.SubscriberResourceApi* | [**getAllSubscribersUsingGET**](docs/SubscriberResourceApi.md#getAllSubscribersUsingGET) | **GET** /api/subscribers | getAllSubscribers
*ApiDocumentation.SubscriberResourceApi* | [**getSubscriberByEmailUsingGET**](docs/SubscriberResourceApi.md#getSubscriberByEmailUsingGET) | **GET** /api/subscribers/email/{email} | getSubscriberByEmail
*ApiDocumentation.SubscriberResourceApi* | [**getSubscriberByNameUsingGET**](docs/SubscriberResourceApi.md#getSubscriberByNameUsingGET) | **GET** /api/subscribers/name/{name} | getSubscriberByName
*ApiDocumentation.SubscriberResourceApi* | [**getSubscriberUsingGET**](docs/SubscriberResourceApi.md#getSubscriberUsingGET) | **GET** /api/subscribers/{id} | getSubscriber
*ApiDocumentation.SubscriberResourceApi* | [**updateSubscriberUsingPUT**](docs/SubscriberResourceApi.md#updateSubscriberUsingPUT) | **PUT** /api/subscribers | updateSubscriber
*ApiDocumentation.SubsriptionResourceApi* | [**cancelSubscriptionUsingPUT**](docs/SubsriptionResourceApi.md#cancelSubscriptionUsingPUT) | **PUT** /api/subscriptions/cancel | cancelSubscription
*ApiDocumentation.SubsriptionResourceApi* | [**getActiveSubscriptionsUsingGET**](docs/SubsriptionResourceApi.md#getActiveSubscriptionsUsingGET) | **GET** /api/subsriptions/subscriber/{secureId} | getActiveSubscriptions
*ApiDocumentation.SubsriptionResourceApi* | [**getAllCompanySubscriptionsUsingGET**](docs/SubsriptionResourceApi.md#getAllCompanySubscriptionsUsingGET) | **GET** /api/subscriptions/company/{id} | getAllCompanySubscriptions
*ApiDocumentation.SubsriptionResourceApi* | [**getSubsriptionUsingGET**](docs/SubsriptionResourceApi.md#getSubsriptionUsingGET) | **GET** /api/subsriptions/{id} | getSubsription
*ApiDocumentation.SubsriptionResourceApi* | [**startSubscriptionUsingPOST**](docs/SubsriptionResourceApi.md#startSubscriptionUsingPOST) | **POST** /api/subscriptions/start | startSubscription
*ApiDocumentation.UsageNotificationResourceApi* | [**createUsageNotificationUsingPOST**](docs/UsageNotificationResourceApi.md#createUsageNotificationUsingPOST) | **POST** /api/usage-notifications | createUsageNotification
*ApiDocumentation.UsageNotificationResourceApi* | [**deleteUsageNotificationUsingDELETE**](docs/UsageNotificationResourceApi.md#deleteUsageNotificationUsingDELETE) | **DELETE** /api/usage-notifications/{id} | deleteUsageNotification
*ApiDocumentation.UsageNotificationResourceApi* | [**getAllUsageNotificationsUsingGET**](docs/UsageNotificationResourceApi.md#getAllUsageNotificationsUsingGET) | **GET** /api/usage-notifications | getAllUsageNotifications
*ApiDocumentation.UsageNotificationResourceApi* | [**getUsageNotificationUsingGET**](docs/UsageNotificationResourceApi.md#getUsageNotificationUsingGET) | **GET** /api/usage-notifications/{id} | getUsageNotification
*ApiDocumentation.UsageNotificationResourceApi* | [**updateUsageNotificationUsingPUT**](docs/UsageNotificationResourceApi.md#updateUsageNotificationUsingPUT) | **PUT** /api/usage-notifications | updateUsageNotification
*ApiDocumentation.UserResourceApi* | [**createUserUsingPOST**](docs/UserResourceApi.md#createUserUsingPOST) | **POST** /api/users | createUser
*ApiDocumentation.UserResourceApi* | [**deleteUserUsingDELETE**](docs/UserResourceApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{login} | deleteUser
*ApiDocumentation.UserResourceApi* | [**getAllUsersUsingGET**](docs/UserResourceApi.md#getAllUsersUsingGET) | **GET** /api/users | getAllUsers
*ApiDocumentation.UserResourceApi* | [**getAuthoritiesUsingGET**](docs/UserResourceApi.md#getAuthoritiesUsingGET) | **GET** /api/users/authorities | getAuthorities
*ApiDocumentation.UserResourceApi* | [**getUserUsingGET**](docs/UserResourceApi.md#getUserUsingGET) | **GET** /api/users/{login} | getUser
*ApiDocumentation.UserResourceApi* | [**updateUserUsingPUT**](docs/UserResourceApi.md#updateUserUsingPUT) | **PUT** /api/users | updateUser


## Documentation for Models

 - [ApiDocumentation.Address](docs/Address.md)
 - [ApiDocumentation.Authority](docs/Authority.md)
 - [ApiDocumentation.Authorization](docs/Authorization.md)
 - [ApiDocumentation.AuthorizedServicesResponse](docs/AuthorizedServicesResponse.md)
 - [ApiDocumentation.Cancellation](docs/Cancellation.md)
 - [ApiDocumentation.ChargingLog](docs/ChargingLog.md)
 - [ApiDocumentation.Company](docs/Company.md)
 - [ApiDocumentation.CompanyProps](docs/CompanyProps.md)
 - [ApiDocumentation.Coupon](docs/Coupon.md)
 - [ApiDocumentation.Deduction](docs/Deduction.md)
 - [ApiDocumentation.DeductionResult](docs/DeductionResult.md)
 - [ApiDocumentation.History](docs/History.md)
 - [ApiDocumentation.Invoice](docs/Invoice.md)
 - [ApiDocumentation.InvoiceRequest](docs/InvoiceRequest.md)
 - [ApiDocumentation.ManagedUserVM](docs/ManagedUserVM.md)
 - [ApiDocumentation.MessageTemplate](docs/MessageTemplate.md)
 - [ApiDocumentation.Offer](docs/Offer.md)
 - [ApiDocumentation.PaymentCard](docs/PaymentCard.md)
 - [ApiDocumentation.ProfileInfoVM](docs/ProfileInfoVM.md)
 - [ApiDocumentation.RecurrencePeriod](docs/RecurrencePeriod.md)
 - [ApiDocumentation.ResponseEntity](docs/ResponseEntity.md)
 - [ApiDocumentation.SavedCard](docs/SavedCard.md)
 - [ApiDocumentation.Service](docs/Service.md)
 - [ApiDocumentation.ServiceInstance](docs/ServiceInstance.md)
 - [ApiDocumentation.ServiceInstanceResult](docs/ServiceInstanceResult.md)
 - [ApiDocumentation.ServiceOffering](docs/ServiceOffering.md)
 - [ApiDocumentation.ServiceOfferingResult](docs/ServiceOfferingResult.md)
 - [ApiDocumentation.StartSubscriptionRequest](docs/StartSubscriptionRequest.md)
 - [ApiDocumentation.Subscriber](docs/Subscriber.md)
 - [ApiDocumentation.SubscriptionCreateResult](docs/SubscriptionCreateResult.md)
 - [ApiDocumentation.SubscriptionPlan](docs/SubscriptionPlan.md)
 - [ApiDocumentation.Subsription](docs/Subsription.md)
 - [ApiDocumentation.UsageNotification](docs/UsageNotification.md)
 - [ApiDocumentation.User](docs/User.md)


## Documentation for Authorization


### apiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

