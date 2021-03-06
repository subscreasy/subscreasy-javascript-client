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

/**
 * The Deduction model module.
 * @module com.kodfarki.subscreasy.client.model/Deduction
 * @version 1.0.0
 */
class Deduction {
    /**
     * Constructs a new <code>Deduction</code>.
     * @alias module:com.kodfarki.subscreasy.client.model/Deduction
     */
    constructor() { 
        
        Deduction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Deduction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.kodfarki.subscreasy.client.model/Deduction} obj Optional instance to populate.
     * @return {module:com.kodfarki.subscreasy.client.model/Deduction} The populated <code>Deduction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deduction();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'Number');
            }
            if (data.hasOwnProperty('serviceName')) {
                obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
            }
            if (data.hasOwnProperty('subscriberEmail')) {
                obj['subscriberEmail'] = ApiClient.convertToType(data['subscriberEmail'], 'String');
            }
            if (data.hasOwnProperty('subscriberSecureId')) {
                obj['subscriberSecureId'] = ApiClient.convertToType(data['subscriberSecureId'], 'String');
            }
            if (data.hasOwnProperty('usageEndTime')) {
                obj['usageEndTime'] = ApiClient.convertToType(data['usageEndTime'], 'Date');
            }
            if (data.hasOwnProperty('usageStartTime')) {
                obj['usageStartTime'] = ApiClient.convertToType(data['usageStartTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
Deduction.prototype['amount'] = undefined;

/**
 * @member {Number} id
 */
Deduction.prototype['id'] = undefined;

/**
 * @member {Number} serviceId
 */
Deduction.prototype['serviceId'] = undefined;

/**
 * @member {String} serviceName
 */
Deduction.prototype['serviceName'] = undefined;

/**
 * @member {String} subscriberEmail
 */
Deduction.prototype['subscriberEmail'] = undefined;

/**
 * @member {String} subscriberSecureId
 */
Deduction.prototype['subscriberSecureId'] = undefined;

/**
 * @member {Date} usageEndTime
 */
Deduction.prototype['usageEndTime'] = undefined;

/**
 * @member {Date} usageStartTime
 */
Deduction.prototype['usageStartTime'] = undefined;






export default Deduction;

