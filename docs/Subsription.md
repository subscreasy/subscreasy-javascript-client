# SubscreasyJsClient.Subsription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliedCoupon** | [**Coupon**](Coupon.md) |  | [optional] 
**cancelDate** | **Date** |  | [optional] 
**card** | [**SavedCard**](SavedCard.md) |  | [optional] 
**company** | [**Company**](Company.md) |  | 
**endDate** | **Date** |  | [optional] 
**id** | **Number** |  | [optional] 
**lastEvent** | **String** |  | [optional] 
**offer** | [**Offer**](Offer.md) |  | 
**paymentMethod** | **String** |  | [optional] 
**services** | [**[ServiceInstance]**](ServiceInstance.md) |  | [optional] 
**startDate** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**subscriber** | [**Subscriber**](Subscriber.md) |  | [optional] 
**subscriberSecureId** | **String** |  | [optional] 
**termEndDate** | **Date** |  | [optional] 
**termStartDate** | **Date** |  | [optional] 
**trialEndDate** | **Date** |  | [optional] 



## Enum: LastEventEnum


* `STARTED` (value: `"STARTED"`)

* `RENEWED` (value: `"RENEWED"`)

* `RENEWAL_FAILED` (value: `"RENEWAL_FAILED"`)

* `FINISHED` (value: `"FINISHED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `SUBSCRIBER_CREATED` (value: `"SUBSCRIBER_CREATED"`)

* `SUBSCRIBER_UPDATED` (value: `"SUBSCRIBER_UPDATED"`)

* `TRIAL_ENDING` (value: `"TRIAL_ENDING"`)

* `PAYMENT_UPDATED` (value: `"PAYMENT_UPDATED"`)

* `IMMEDIATE_CANCELLATION_REQUESTED` (value: `"IMMEDIATE_CANCELLATION_REQUESTED"`)

* `ENDOFPERIOD_CANCELLATION_REQUESTED` (value: `"ENDOFPERIOD_CANCELLATION_REQUESTED"`)

* `PRICE_UPDATED` (value: `"PRICE_UPDATED"`)





## Enum: PaymentMethodEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `CC` (value: `"CC"`)

* `MOBILE` (value: `"MOBILE"`)





## Enum: StatusEnum


* `NEW` (value: `"NEW"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `SUSPENDED` (value: `"SUSPENDED"`)

* `FINISHED` (value: `"FINISHED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `IN_TRIAL` (value: `"IN_TRIAL"`)

* `PAYMENT_DUE` (value: `"PAYMENT_DUE"`)




