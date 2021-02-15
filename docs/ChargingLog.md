# SubscreasyJsClient.ChargingLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliedCoupon** | **Number** |  | [optional] 
**authCode** | **String** |  | [optional] 
**companyId** | **Number** |  | [optional] 
**createDate** | **Date** |  | [optional] 
**currency** | **String** |  | [optional] 
**errorCode** | **String** |  | [optional] 
**errorText** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**invoiceId** | **Number** |  | [optional] 
**jobId** | **Number** |  | [optional] 
**offerId** | **Number** |  | [optional] 
**parentId** | **Number** |  | [optional] 
**paymentGateway** | **String** |  | [optional] 
**paymentId** | **String** |  | [optional] 
**price** | **Number** |  | [optional] 
**reason** | **String** |  | [optional] 
**refundDate** | **Date** |  | [optional] 
**savedCard** | [**SavedCard**](SavedCard.md) |  | [optional] 
**savedCardId** | **Number** |  | [optional] 
**serviceInstanceId** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**subscriberId** | **Number** |  | [optional] 
**subscriberSecureId** | **String** |  | [optional] 
**subscriptionId** | **Number** |  | [optional] 
**threeds** | **Boolean** |  | [optional] 
**transactionId** | **String** |  | [optional] 



## Enum: PaymentGatewayEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `IYZICO` (value: `"IYZICO"`)

* `PAYU` (value: `"PAYU"`)

* `PAYTR` (value: `"PAYTR"`)

* `MOBILEXPRESS` (value: `"MOBILEXPRESS"`)

* `AKTIFBANK` (value: `"AKTIFBANK"`)





## Enum: ReasonEnum


* `START` (value: `"START"`)

* `RENEWAL` (value: `"RENEWAL"`)

* `OVER_USAGE` (value: `"OVER_USAGE"`)

* `REFUND` (value: `"REFUND"`)

* `SAVE_CARD` (value: `"SAVE_CARD"`)

* `TRIAL_PERIOD` (value: `"TRIAL_PERIOD"`)

* `PAYMENT` (value: `"PAYMENT"`)





## Enum: StatusEnum


* `NOT_PAID` (value: `"NOT_PAID"`)

* `PAID` (value: `"PAID"`)

* `FAIL` (value: `"FAIL"`)

* `REFUNDED` (value: `"REFUNDED"`)




