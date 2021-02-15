# SubscreasyJsClient.ServiceInstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **Number** |  | [optional] 
**currentUsage** | **Number** |  | [optional] 
**endDate** | **Date** |  | [optional] 
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**numberOfUnits** | **Number** |  | [optional] 
**offer** | [**Offer**](Offer.md) |  | [optional] 
**overUsage** | **Number** |  | [optional] 
**overUsageQuota** | **Number** |  | [optional] 
**quotaOrigin** | **String** |  | [optional] 
**serviceOffering** | [**ServiceOffering**](ServiceOffering.md) |  | [optional] 
**startDate** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**subscriberId** | **String** |  | [optional] 
**subscription** | [**Subsription**](Subsription.md) |  | [optional] 
**type** | **String** |  | [optional] 
**version** | **Number** |  | [optional] 



## Enum: QuotaOriginEnum


* `SUBS` (value: `"SUBS"`)

* `OVER` (value: `"OVER"`)





## Enum: StatusEnum


* `NEW` (value: `"NEW"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `SUSPENDED` (value: `"SUSPENDED"`)

* `FINISHED` (value: `"FINISHED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `IN_TRIAL` (value: `"IN_TRIAL"`)

* `PAYMENT_DUE` (value: `"PAYMENT_DUE"`)





## Enum: TypeEnum


* `ONOFF` (value: `"ONOFF"`)

* `SEAT_BASED` (value: `"SEAT_BASED"`)

* `USAGE_BASED` (value: `"USAGE_BASED"`)




