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

import ApiClient from '../ApiClient';
import Offer from './Offer';
import PaymentCard from './PaymentCard';
import SavedCard from './SavedCard';
import Subscriber from './Subscriber';

/**
 * The StartSubscriptionRequest model module.
 * @module com.kodfarki.subscreasy.client.model/StartSubscriptionRequest
 * @version 1.0.0
 */
class StartSubscriptionRequest {
    /**
     * Constructs a new <code>StartSubscriptionRequest</code>.
     * @alias module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest
     */
    constructor() { 
        
        StartSubscriptionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StartSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest} obj Optional instance to populate.
     * @return {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest} The populated <code>StartSubscriptionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartSubscriptionRequest();

            if (data.hasOwnProperty('callbackParams')) {
                obj['callbackParams'] = ApiClient.convertToType(data['callbackParams'], ['String']);
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('companySiteName')) {
                obj['companySiteName'] = ApiClient.convertToType(data['companySiteName'], 'String');
            }
            if (data.hasOwnProperty('couponCode')) {
                obj['couponCode'] = ApiClient.convertToType(data['couponCode'], 'String');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('errorCallbackUrl')) {
                obj['errorCallbackUrl'] = ApiClient.convertToType(data['errorCallbackUrl'], 'String');
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = Offer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('paymentCard')) {
                obj['paymentCard'] = PaymentCard.constructFromObject(data['paymentCard']);
            }
            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = ApiClient.convertToType(data['paymentType'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('privacyPolicyUrl')) {
                obj['privacyPolicyUrl'] = ApiClient.convertToType(data['privacyPolicyUrl'], 'Boolean');
            }
            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
            if (data.hasOwnProperty('savedCard')) {
                obj['savedCard'] = SavedCard.constructFromObject(data['savedCard']);
            }
            if (data.hasOwnProperty('subscriber')) {
                obj['subscriber'] = Subscriber.constructFromObject(data['subscriber']);
            }
            if (data.hasOwnProperty('subscriberFromDb')) {
                obj['subscriberFromDb'] = Subscriber.constructFromObject(data['subscriberFromDb']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} callbackParams
 */
StartSubscriptionRequest.prototype['callbackParams'] = undefined;

/**
 * @member {String} callbackUrl
 */
StartSubscriptionRequest.prototype['callbackUrl'] = undefined;

/**
 * @member {String} companySiteName
 */
StartSubscriptionRequest.prototype['companySiteName'] = undefined;

/**
 * @member {String} couponCode
 */
StartSubscriptionRequest.prototype['couponCode'] = undefined;

/**
 * @member {Boolean} editable
 */
StartSubscriptionRequest.prototype['editable'] = undefined;

/**
 * @member {String} errorCallbackUrl
 */
StartSubscriptionRequest.prototype['errorCallbackUrl'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Offer} offer
 */
StartSubscriptionRequest.prototype['offer'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/PaymentCard} paymentCard
 */
StartSubscriptionRequest.prototype['paymentCard'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest.PaymentTypeEnum} paymentType
 */
StartSubscriptionRequest.prototype['paymentType'] = undefined;

/**
 * @member {Number} price
 */
StartSubscriptionRequest.prototype['price'] = undefined;

/**
 * @member {Boolean} privacyPolicyUrl
 */
StartSubscriptionRequest.prototype['privacyPolicyUrl'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest.ProductTypeEnum} productType
 */
StartSubscriptionRequest.prototype['productType'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/SavedCard} savedCard
 */
StartSubscriptionRequest.prototype['savedCard'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Subscriber} subscriber
 */
StartSubscriptionRequest.prototype['subscriber'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Subscriber} subscriberFromDb
 */
StartSubscriptionRequest.prototype['subscriberFromDb'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/StartSubscriptionRequest.TransactionTypeEnum} transactionType
 */
StartSubscriptionRequest.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>paymentType</code> property.
 * @enum {String}
 * @readonly
 */
StartSubscriptionRequest['PaymentTypeEnum'] = {

    /**
     * value: "OFFLINE"
     * @const
     */
    "OFFLINE": "OFFLINE",

    /**
     * value: "CC"
     * @const
     */
    "CC": "CC",

    /**
     * value: "MOBILE"
     * @const
     */
    "MOBILE": "MOBILE"
};


/**
 * Allowed values for the <code>productType</code> property.
 * @enum {String}
 * @readonly
 */
StartSubscriptionRequest['ProductTypeEnum'] = {

    /**
     * value: "PHYSICAL"
     * @const
     */
    "PHYSICAL": "PHYSICAL",

    /**
     * value: "SERVICE"
     * @const
     */
    "SERVICE": "SERVICE"
};


/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
StartSubscriptionRequest['TransactionTypeEnum'] = {

    /**
     * value: "SUBSCRIPTION_REQUEST"
     * @const
     */
    "SUBSCRIPTION_REQUEST": "SUBSCRIPTION_REQUEST",

    /**
     * value: "CANCELLATION"
     * @const
     */
    "CANCELLATION": "CANCELLATION",

    /**
     * value: "PAYMENT_REQUEST"
     * @const
     */
    "PAYMENT_REQUEST": "PAYMENT_REQUEST"
};



export default StartSubscriptionRequest;

