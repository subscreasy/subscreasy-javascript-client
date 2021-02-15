# SubscreasyJsClient.StartSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackParams** | **[String]** |  | [optional] 
**callbackUrl** | **String** |  | [optional] 
**companySiteName** | **String** |  | [optional] 
**couponCode** | **String** |  | [optional] 
**editable** | **Boolean** |  | [optional] 
**errorCallbackUrl** | **String** |  | [optional] 
**offer** | [**Offer**](Offer.md) |  | [optional] 
**paymentCard** | [**PaymentCard**](PaymentCard.md) |  | [optional] 
**paymentType** | **String** |  | [optional] 
**price** | **Number** |  | [optional] 
**privacyPolicyUrl** | **Boolean** |  | [optional] 
**productType** | **String** |  | [optional] 
**savedCard** | [**SavedCard**](SavedCard.md) |  | [optional] 
**subscriber** | [**Subscriber**](Subscriber.md) |  | [optional] 
**subscriberFromDb** | [**Subscriber**](Subscriber.md) |  | [optional] 
**transactionType** | **String** |  | [optional] 



## Enum: PaymentTypeEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `CC` (value: `"CC"`)

* `MOBILE` (value: `"MOBILE"`)





## Enum: ProductTypeEnum


* `PHYSICAL` (value: `"PHYSICAL"`)

* `SERVICE` (value: `"SERVICE"`)





## Enum: TransactionTypeEnum


* `SUBSCRIPTION_REQUEST` (value: `"SUBSCRIPTION_REQUEST"`)

* `CANCELLATION` (value: `"CANCELLATION"`)

* `PAYMENT_REQUEST` (value: `"PAYMENT_REQUEST"`)




