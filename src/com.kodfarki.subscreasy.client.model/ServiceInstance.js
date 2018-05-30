/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Offer', 'com.kodfarki.subscreasy.client.model/ServiceOffering', 'com.kodfarki.subscreasy.client.model/Subsription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Offer'), require('./ServiceOffering'), require('./Subsription'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ServiceInstance = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Offer, root.ApiDocumentation.ServiceOffering, root.ApiDocumentation.Subsription);
  }
}(this, function(ApiClient, Offer, ServiceOffering, Subsription) {
  'use strict';




  /**
   * The ServiceInstance model module.
   * @module com.kodfarki.subscreasy.client.model/ServiceInstance
   * @version 1.0
   */

  /**
   * Constructs a new <code>ServiceInstance</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/ServiceInstance
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>ServiceInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/ServiceInstance} The populated <code>ServiceInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('serviceType')) {
        obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
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

  /**
   * @member {Number} capacity
   */
  exports.prototype['capacity'] = undefined;
  /**
   * @member {Number} currentUsage
   */
  exports.prototype['currentUsage'] = undefined;
  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} numberOfUnits
   */
  exports.prototype['numberOfUnits'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Offer} offer
   */
  exports.prototype['offer'] = undefined;
  /**
   * @member {Number} overUsage
   */
  exports.prototype['overUsage'] = undefined;
  /**
   * @member {Number} overUsageQuota
   */
  exports.prototype['overUsageQuota'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.QuotaOriginEnum} quotaOrigin
   */
  exports.prototype['quotaOrigin'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/ServiceOffering} serviceOffering
   */
  exports.prototype['serviceOffering'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.ServiceTypeEnum} serviceType
   */
  exports.prototype['serviceType'] = undefined;
  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} subscriberId
   */
  exports.prototype['subscriberId'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Subsription} subscription
   */
  exports.prototype['subscription'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/ServiceInstance.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;


  /**
   * Allowed values for the <code>quotaOrigin</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QuotaOriginEnum = {
    /**
     * value: "SUBS"
     * @const
     */
    "SUBS": "SUBS",
    /**
     * value: "OVER"
     * @const
     */
    "OVER": "OVER"  };

  /**
   * Allowed values for the <code>serviceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServiceTypeEnum = {
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
    "USAGE_BASED": "USAGE_BASED"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
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
    "CANCELLED": "CANCELLED"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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
    "USAGE_BASED": "USAGE_BASED"  };


  return exports;
}));

