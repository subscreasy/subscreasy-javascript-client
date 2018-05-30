# ApiDocumentation.ChargingLog

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
**parent** | [**ChargingLog**](ChargingLog.md) |  | [optional] 
**paymentGateway** | **String** |  | [optional] 
**paymentId** | **String** |  | [optional] 
**price** | **Number** |  | [optional] 
**reason** | **String** |  | [optional] 
**serviceInstanceId** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**subscriberSecureId** | **String** |  | [optional] 
**subscriptionId** | **Number** |  | [optional] 
**transactionId** | **String** |  | [optional] 


<a name="PaymentGatewayEnum"></a>
## Enum: PaymentGatewayEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `IYZICO` (value: `"IYZICO"`)

* `PAYU` (value: `"PAYU"`)




<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `START` (value: `"START"`)

* `RENEWAL` (value: `"RENEWAL"`)

* `OVER_USAGE` (value: `"OVER_USAGE"`)

* `REFUND` (value: `"REFUND"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `NOT_PAID` (value: `"NOT_PAID"`)

* `SUCCESS` (value: `"SUCCESS"`)

* `FAIL` (value: `"FAIL"`)

* `REFUNDED` (value: `"REFUNDED"`)




