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
 * The ServiceOfferingResult model module.
 * @module com.kodfarki.subscreasy.client.model/ServiceOfferingResult
 * @version 1.0.0
 */
class ServiceOfferingResult {
    /**
     * Constructs a new <code>ServiceOfferingResult</code>.
     * @alias module:com.kodfarki.subscreasy.client.model/ServiceOfferingResult
     */
    constructor() { 
        
        ServiceOfferingResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceOfferingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOfferingResult} obj Optional instance to populate.
     * @return {module:com.kodfarki.subscreasy.client.model/ServiceOfferingResult} The populated <code>ServiceOfferingResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOfferingResult();

            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('unitName')) {
                obj['unitName'] = ApiClient.convertToType(data['unitName'], 'String');
            }
            if (data.hasOwnProperty('unitsPerPrice')) {
                obj['unitsPerPrice'] = ApiClient.convertToType(data['unitsPerPrice'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} capacity
 */
ServiceOfferingResult.prototype['capacity'] = undefined;

/**
 * @member {Number} id
 */
ServiceOfferingResult.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ServiceOfferingResult.prototype['name'] = undefined;

/**
 * @member {Number} price
 */
ServiceOfferingResult.prototype['price'] = undefined;

/**
 * @member {String} type
 */
ServiceOfferingResult.prototype['type'] = undefined;

/**
 * @member {String} unitName
 */
ServiceOfferingResult.prototype['unitName'] = undefined;

/**
 * @member {Number} unitsPerPrice
 */
ServiceOfferingResult.prototype['unitsPerPrice'] = undefined;






export default ServiceOfferingResult;

