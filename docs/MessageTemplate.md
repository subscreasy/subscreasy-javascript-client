# SubscreasyJsClient.MessageTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | [**Company**](Company.md) |  | 
**enabled** | **Boolean** |  | [optional] 
**eventType** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**messageTemplate** | **String** |  | [optional] 
**notificationType** | **String** |  | [optional] 
**sender** | **String** |  | [optional] 
**subject** | **String** |  | [optional] 



## Enum: EventTypeEnum


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





## Enum: NotificationTypeEnum


* `WEBHOOK` (value: `"WEBHOOK"`)

* `EMAIL` (value: `"EMAIL"`)




