/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Address from './com.kodfarki.subscreasy.client.model/Address';
import Authority from './com.kodfarki.subscreasy.client.model/Authority';
import Authorization from './com.kodfarki.subscreasy.client.model/Authorization';
import AuthorizedServicesResponse from './com.kodfarki.subscreasy.client.model/AuthorizedServicesResponse';
import BankAccount from './com.kodfarki.subscreasy.client.model/BankAccount';
import Cancellation from './com.kodfarki.subscreasy.client.model/Cancellation';
import ChargingLog from './com.kodfarki.subscreasy.client.model/ChargingLog';
import Company from './com.kodfarki.subscreasy.client.model/Company';
import CompanyProps from './com.kodfarki.subscreasy.client.model/CompanyProps';
import Coupon from './com.kodfarki.subscreasy.client.model/Coupon';
import Deduction from './com.kodfarki.subscreasy.client.model/Deduction';
import DeductionResult from './com.kodfarki.subscreasy.client.model/DeductionResult';
import History from './com.kodfarki.subscreasy.client.model/History';
import Invoice from './com.kodfarki.subscreasy.client.model/Invoice';
import InvoiceRequest from './com.kodfarki.subscreasy.client.model/InvoiceRequest';
import Job from './com.kodfarki.subscreasy.client.model/Job';
import LoginVM from './com.kodfarki.subscreasy.client.model/LoginVM';
import ManagedUserVM from './com.kodfarki.subscreasy.client.model/ManagedUserVM';
import MessageTemplate from './com.kodfarki.subscreasy.client.model/MessageTemplate';
import Offer from './com.kodfarki.subscreasy.client.model/Offer';
import Order from './com.kodfarki.subscreasy.client.model/Order';
import PaymentCard from './com.kodfarki.subscreasy.client.model/PaymentCard';
import ProfileInfoVM from './com.kodfarki.subscreasy.client.model/ProfileInfoVM';
import RecurrencePeriod from './com.kodfarki.subscreasy.client.model/RecurrencePeriod';
import ResponseEntity from './com.kodfarki.subscreasy.client.model/ResponseEntity';
import SaveCardRequest from './com.kodfarki.subscreasy.client.model/SaveCardRequest';
import SavedCard from './com.kodfarki.subscreasy.client.model/SavedCard';
import Service from './com.kodfarki.subscreasy.client.model/Service';
import ServiceInstance from './com.kodfarki.subscreasy.client.model/ServiceInstance';
import ServiceInstanceResult from './com.kodfarki.subscreasy.client.model/ServiceInstanceResult';
import ServiceOffering from './com.kodfarki.subscreasy.client.model/ServiceOffering';
import ServiceOfferingResult from './com.kodfarki.subscreasy.client.model/ServiceOfferingResult';
import StartSubscriptionRequest from './com.kodfarki.subscreasy.client.model/StartSubscriptionRequest';
import StartSubscriptionResult from './com.kodfarki.subscreasy.client.model/StartSubscriptionResult';
import Subscriber from './com.kodfarki.subscreasy.client.model/Subscriber';
import SubscriptionSwitch from './com.kodfarki.subscreasy.client.model/SubscriptionSwitch';
import Subsription from './com.kodfarki.subscreasy.client.model/Subsription';
import SwitchSubscriptionResponse from './com.kodfarki.subscreasy.client.model/SwitchSubscriptionResponse';
import User from './com.kodfarki.subscreasy.client.model/User';
import UserDTO from './com.kodfarki.subscreasy.client.model/UserDTO';
import WebHook from './com.kodfarki.subscreasy.client.model/WebHook';
import AccountResourceApi from './com.kodfarki.subscreasy.client/AccountResourceApi';
import AnalyticsResourceApi from './com.kodfarki.subscreasy.client/AnalyticsResourceApi';
import BankAccountResourceApi from './com.kodfarki.subscreasy.client/BankAccountResourceApi';
import CardResourceApi from './com.kodfarki.subscreasy.client/CardResourceApi';
import ChargingLogResourceApi from './com.kodfarki.subscreasy.client/ChargingLogResourceApi';
import CompanyPropsResourceApi from './com.kodfarki.subscreasy.client/CompanyPropsResourceApi';
import CompanyResourceApi from './com.kodfarki.subscreasy.client/CompanyResourceApi';
import CouponResourceApi from './com.kodfarki.subscreasy.client/CouponResourceApi';
import EndpointsApi from './com.kodfarki.subscreasy.client/EndpointsApi';
import EndpointsNoAuthApi from './com.kodfarki.subscreasy.client/EndpointsNoAuthApi';
import HistoryResourceApi from './com.kodfarki.subscreasy.client/HistoryResourceApi';
import InvoiceResourceApi from './com.kodfarki.subscreasy.client/InvoiceResourceApi';
import MessageTemplateResourceApi from './com.kodfarki.subscreasy.client/MessageTemplateResourceApi';
import OfferResourceApi from './com.kodfarki.subscreasy.client/OfferResourceApi';
import OrderResourceApi from './com.kodfarki.subscreasy.client/OrderResourceApi';
import PaymentResourceApi from './com.kodfarki.subscreasy.client/PaymentResourceApi';
import ProfileInfoResourceApi from './com.kodfarki.subscreasy.client/ProfileInfoResourceApi';
import SavedCardResourceApi from './com.kodfarki.subscreasy.client/SavedCardResourceApi';
import ServiceInstanceResourceApi from './com.kodfarki.subscreasy.client/ServiceInstanceResourceApi';
import ServiceOfferingResourceApi from './com.kodfarki.subscreasy.client/ServiceOfferingResourceApi';
import ServiceResourceApi from './com.kodfarki.subscreasy.client/ServiceResourceApi';
import SubscriberResourceApi from './com.kodfarki.subscreasy.client/SubscriberResourceApi';
import SubscriptionResourceApi from './com.kodfarki.subscreasy.client/SubscriptionResourceApi';
import UserJwtControllerApi from './com.kodfarki.subscreasy.client/UserJwtControllerApi';
import UserResourceApi from './com.kodfarki.subscreasy.client/UserResourceApi';
import WebHookResourceApi from './com.kodfarki.subscreasy.client/WebHookResourceApi';


/**
* Api_Documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SubscreasyJsClient = require('index'); // See note below*.
* var xxxSvc = new SubscreasyJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SubscreasyJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SubscreasyJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SubscreasyJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Address}
     */
    Address,

    /**
     * The Authority model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Authority}
     */
    Authority,

    /**
     * The Authorization model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Authorization}
     */
    Authorization,

    /**
     * The AuthorizedServicesResponse model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/AuthorizedServicesResponse}
     */
    AuthorizedServicesResponse,

    /**
     * The BankAccount model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/BankAccount}
     */
    BankAccount,

    /**
     * The Cancellation model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Cancellation}
     */
    Cancellation,

    /**
     * The ChargingLog model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ChargingLog}
     */
    ChargingLog,

    /**
     * The Company model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Company}
     */
    Company,

    /**
     * The CompanyProps model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/CompanyProps}
     */
    CompanyProps,

    /**
     * The Coupon model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Coupon}
     */
    Coupon,

    /**
     * The Deduction model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Deduction}
     */
    Deduction,

    /**
     * The DeductionResult model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/DeductionResult}
     */
    DeductionResult,

    /**
     * The History model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/History}
     */
    History,

    /**
     * The Invoice model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Invoice}
     */
    Invoice,

    /**
     * The InvoiceRequest model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/InvoiceRequest}
     */
    InvoiceRequest,

    /**
     * The Job model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Job}
     */
    Job,

    /**
     * The LoginVM model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/LoginVM}
     */
    LoginVM,

    /**
     * The ManagedUserVM model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ManagedUserVM}
     */
    ManagedUserVM,

    /**
     * The MessageTemplate model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/MessageTemplate}
     */
    MessageTemplate,

    /**
     * The Offer model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Offer}
     */
    Offer,

    /**
     * The Order model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Order}
     */
    Order,

    /**
     * The PaymentCard model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/PaymentCard}
     */
    PaymentCard,

    /**
     * The ProfileInfoVM model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ProfileInfoVM}
     */
    ProfileInfoVM,

    /**
     * The RecurrencePeriod model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/RecurrencePeriod}
     */
    RecurrencePeriod,

    /**
     * The ResponseEntity model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ResponseEntity}
     */
    ResponseEntity,

    /**
     * The SaveCardRequest model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/SaveCardRequest}
     */
    SaveCardRequest,

    /**
     * The SavedCard model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/SavedCard}
     */
    SavedCard,

    /**
     * The Service model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Service}
     */
    Service,

    /**
     * The ServiceInstance model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ServiceInstance}
     */
    ServiceInstance,

    /**
     * The ServiceInstanceResult model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ServiceInstanceResult}
     */
    ServiceInstanceResult,

    /**
     * The ServiceOffering model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ServiceOffering}
     */
    ServiceOffering,

    /**
     * The ServiceOfferingResult model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/ServiceOfferingResult}
     */
    ServiceOfferingResult,

    /**
     * The StartSubscriptionRequest model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest}
     */
    StartSubscriptionRequest,

    /**
     * The StartSubscriptionResult model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/StartSubscriptionResult}
     */
    StartSubscriptionResult,

    /**
     * The Subscriber model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Subscriber}
     */
    Subscriber,

    /**
     * The SubscriptionSwitch model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/SubscriptionSwitch}
     */
    SubscriptionSwitch,

    /**
     * The Subsription model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/Subsription}
     */
    Subsription,

    /**
     * The SwitchSubscriptionResponse model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/SwitchSubscriptionResponse}
     */
    SwitchSubscriptionResponse,

    /**
     * The User model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/User}
     */
    User,

    /**
     * The UserDTO model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/UserDTO}
     */
    UserDTO,

    /**
     * The WebHook model constructor.
     * @property {module:com.kodfarki.subscreasy.client.model/WebHook}
     */
    WebHook,

    /**
    * The AccountResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/AccountResourceApi}
    */
    AccountResourceApi,

    /**
    * The AnalyticsResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/AnalyticsResourceApi}
    */
    AnalyticsResourceApi,

    /**
    * The BankAccountResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/BankAccountResourceApi}
    */
    BankAccountResourceApi,

    /**
    * The CardResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/CardResourceApi}
    */
    CardResourceApi,

    /**
    * The ChargingLogResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/ChargingLogResourceApi}
    */
    ChargingLogResourceApi,

    /**
    * The CompanyPropsResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/CompanyPropsResourceApi}
    */
    CompanyPropsResourceApi,

    /**
    * The CompanyResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/CompanyResourceApi}
    */
    CompanyResourceApi,

    /**
    * The CouponResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/CouponResourceApi}
    */
    CouponResourceApi,

    /**
    * The EndpointsApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/EndpointsApi}
    */
    EndpointsApi,

    /**
    * The EndpointsNoAuthApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/EndpointsNoAuthApi}
    */
    EndpointsNoAuthApi,

    /**
    * The HistoryResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/HistoryResourceApi}
    */
    HistoryResourceApi,

    /**
    * The InvoiceResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/InvoiceResourceApi}
    */
    InvoiceResourceApi,

    /**
    * The MessageTemplateResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/MessageTemplateResourceApi}
    */
    MessageTemplateResourceApi,

    /**
    * The OfferResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/OfferResourceApi}
    */
    OfferResourceApi,

    /**
    * The OrderResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/OrderResourceApi}
    */
    OrderResourceApi,

    /**
    * The PaymentResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/PaymentResourceApi}
    */
    PaymentResourceApi,

    /**
    * The ProfileInfoResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/ProfileInfoResourceApi}
    */
    ProfileInfoResourceApi,

    /**
    * The SavedCardResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/SavedCardResourceApi}
    */
    SavedCardResourceApi,

    /**
    * The ServiceInstanceResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi}
    */
    ServiceInstanceResourceApi,

    /**
    * The ServiceOfferingResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi}
    */
    ServiceOfferingResourceApi,

    /**
    * The ServiceResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/ServiceResourceApi}
    */
    ServiceResourceApi,

    /**
    * The SubscriberResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/SubscriberResourceApi}
    */
    SubscriberResourceApi,

    /**
    * The SubscriptionResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/SubscriptionResourceApi}
    */
    SubscriptionResourceApi,

    /**
    * The UserJwtControllerApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/UserJwtControllerApi}
    */
    UserJwtControllerApi,

    /**
    * The UserResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/UserResourceApi}
    */
    UserResourceApi,

    /**
    * The WebHookResourceApi service constructor.
    * @property {module:com.kodfarki.subscreasy.client/WebHookResourceApi}
    */
    WebHookResourceApi
};
