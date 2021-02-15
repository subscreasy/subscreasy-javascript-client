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
    define(['ApiClient', 'model/Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.Service = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';




  /**
   * The Service model module.
   * @module model/Service
   * @version 1.0
   */

  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   * @class
   * @param company {module:model/Company} 
   * @param name {String} 
   * @param type {module:model/Service.TypeEnum} 
   */
  var exports = function(company, name, type) {
    var _this = this;

    _this['company'] = company;

    _this['name'] = name;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Service} obj Optional instance to populate.
   * @return {module:model/Service} The populated <code>Service</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Company} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Service.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


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

