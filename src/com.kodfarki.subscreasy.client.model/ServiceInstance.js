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
import ServiceOffering from './ServiceOffering';
import Subsription from './Subsription';

/**
 * The ServiceInstance model module.
 * @module com.kodfarki.subscreasy.client.model/ServiceInstance
 * @version 1.0.0
 */
class ServiceInstance {
    /**
     * Constructs a new <code>ServiceInstance</code>.
     * @alias module:com.kodfarki.subscreasy.client.model/ServiceInstance
     */
    constructor() { 
        
        ServiceInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} obj Optional instance to populate.
     * @return {module:com.kodfarki.subscreasy.client.model/ServiceInstance} The populated <code>ServiceInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceInstance();

            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('currentUsage')) {
                obj['currentUsage'] = ApiClient.convertToType(data['currentUsage'], 'Number');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('numberOfUnits')) {
                obj['numberOfUnits'] = ApiClient.convertToType(data['numberOfUnits'], 'Number');
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = Offer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('overUsage')) {
                obj['overUsage'] = ApiClient.convertToType(data['overUsage'], 'Number');
            }
            if (data.hasOwnProperty('overUsageQuota')) {
                obj['overUsageQuota'] = ApiClient.convertToType(data['overUsageQuota'], 'Number');
            }
            if (data.hasOwnProperty('quotaOrigin')) {
                obj['quotaOrigin'] = ApiClient.convertToType(data['quotaOrigin'], 'String');
            }
            if (data.hasOwnProperty('serviceOffering')) {
                obj['serviceOffering'] = ServiceOffering.constructFromObject(data['serviceOffering']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('subscriberId')) {
                obj['subscriberId'] = ApiClient.convertToType(data['subscriberId'], 'String');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = Subsription.constructFromObject(data['subscription']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} capacity
 */
ServiceInstance.prototype['capacity'] = undefined;

/**
 * @member {Number} currentUsage
 */
ServiceInstance.prototype['currentUsage'] = undefined;

/**
 * @member {Date} endDate
 */
ServiceInstance.prototype['endDate'] = undefined;

/**
 * @member {Number} id
 */
ServiceInstance.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ServiceInstance.prototype['name'] = undefined;

/**
 * @member {Number} numberOfUnits
 */
ServiceInstance.prototype['numberOfUnits'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Offer} offer
 */
ServiceInstance.prototype['offer'] = undefined;

/**
 * @member {Number} overUsage
 */
ServiceInstance.prototype['overUsage'] = undefined;

/**
 * @member {Number} overUsageQuota
 */
ServiceInstance.prototype['overUsageQuota'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.QuotaOriginEnum} quotaOrigin
 */
ServiceInstance.prototype['quotaOrigin'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/ServiceOffering} serviceOffering
 */
ServiceInstance.prototype['serviceOffering'] = undefined;

/**
 * @member {Date} startDate
 */
ServiceInstance.prototype['startDate'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.StatusEnum} status
 */
ServiceInstance.prototype['status'] = undefined;

/**
 * @member {String} subscriberId
 */
ServiceInstance.prototype['subscriberId'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Subsription} subscription
 */
ServiceInstance.prototype['subscription'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.TypeEnum} type
 */
ServiceInstance.prototype['type'] = undefined;

/**
 * @member {Number} version
 */
ServiceInstance.prototype['version'] = undefined;





/**
 * Allowed values for the <code>quotaOrigin</code> property.
 * @enum {String}
 * @readonly
 */
ServiceInstance['QuotaOriginEnum'] = {

    /**
     * value: "SUBS"
     * @const
     */
    "SUBS": "SUBS",

    /**
     * value: "OVER"
     * @const
     */
    "OVER": "OVER"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ServiceInstance['StatusEnum'] = {

    /**
     * value: "NEW"
     * @const
     */
    "NEW": "NEW",

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "SUSPENDED"
     * @const
     */
    "SUSPENDED": "SUSPENDED",

    /**
     * value: "FINISHED"
     * @const
     */
    "FINISHED": "FINISHED",

    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",

    /**
     * value: "IN_TRIAL"
     * @const
     */
    "IN_TRIAL": "IN_TRIAL",

    /**
     * value: "PAYMENT_DUE"
     * @const
     */
    "PAYMENT_DUE": "PAYMENT_DUE"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ServiceInstance['TypeEnum'] = {

    /**
     * value: "ONOFF"
     * @const
     */
    "ONOFF": "ONOFF",

    /**
     * value: "SEAT_BASED"
     * @const
     */
    "SEAT_BASED": "SEAT_BASED",

    /**
     * value: "USAGE_BASED"
     * @const
     */
    "USAGE_BASED": "USAGE_BASED"
};



export default ServiceInstance;

