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
import Company from './Company';
import Offer from './Offer';
import Service from './Service';

/**
 * The ServiceOffering model module.
 * @module com.kodfarki.subscreasy.client.model/ServiceOffering
 * @version 1.0.0
 */
class ServiceOffering {
    /**
     * Constructs a new <code>ServiceOffering</code>.
     * @alias module:com.kodfarki.subscreasy.client.model/ServiceOffering
     * @param quotaAmount {Number} 
     */
    constructor(quotaAmount) { 
        
        ServiceOffering.initialize(this, quotaAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, quotaAmount) { 
        obj['quotaAmount'] = quotaAmount;
    }

    /**
     * Constructs a <code>ServiceOffering</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} obj Optional instance to populate.
     * @return {module:com.kodfarki.subscreasy.client.model/ServiceOffering} The populated <code>ServiceOffering</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOffering();

            if (data.hasOwnProperty('company')) {
                obj['company'] = Company.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = Offer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('overUsagePrice')) {
                obj['overUsagePrice'] = ApiClient.convertToType(data['overUsagePrice'], 'Number');
            }
            if (data.hasOwnProperty('overUsageQuota')) {
                obj['overUsageQuota'] = ApiClient.convertToType(data['overUsageQuota'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quotaAmount')) {
                obj['quotaAmount'] = ApiClient.convertToType(data['quotaAmount'], 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = Service.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('unitName')) {
                obj['unitName'] = ApiClient.convertToType(data['unitName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Company} company
 */
ServiceOffering.prototype['company'] = undefined;

/**
 * @member {String} description
 */
ServiceOffering.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
ServiceOffering.prototype['id'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Offer} offer
 */
ServiceOffering.prototype['offer'] = undefined;

/**
 * @member {Number} overUsagePrice
 */
ServiceOffering.prototype['overUsagePrice'] = undefined;

/**
 * @member {Number} overUsageQuota
 */
ServiceOffering.prototype['overUsageQuota'] = undefined;

/**
 * @member {Number} price
 */
ServiceOffering.prototype['price'] = undefined;

/**
 * @member {Number} quotaAmount
 */
ServiceOffering.prototype['quotaAmount'] = undefined;

/**
 * @member {module:com.kodfarki.subscreasy.client.model/Service} service
 */
ServiceOffering.prototype['service'] = undefined;

/**
 * @member {String} unitName
 */
ServiceOffering.prototype['unitName'] = undefined;






export default ServiceOffering;

