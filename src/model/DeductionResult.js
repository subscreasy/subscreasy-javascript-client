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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.DeductionResult = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeductionResult model module.
   * @module model/DeductionResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>DeductionResult</code>.
   * @alias module:model/DeductionResult
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DeductionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeductionResult} obj Optional instance to populate.
   * @return {module:model/DeductionResult} The populated <code>DeductionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('capacity')) {
        obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
      }
      if (data.hasOwnProperty('consumedResourceId')) {
        obj['consumedResourceId'] = ApiClient.convertToType(data['consumedResourceId'], 'Number');
      }
      if (data.hasOwnProperty('overUsage')) {
        obj['overUsage'] = ApiClient.convertToType(data['overUsage'], 'Number');
      }
      if (data.hasOwnProperty('requestedAmount')) {
        obj['requestedAmount'] = ApiClient.convertToType(data['requestedAmount'], 'Number');
      }
      if (data.hasOwnProperty('subscriptionId')) {
        obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'Number');
      }
      if (data.hasOwnProperty('usage')) {
        obj['usage'] = ApiClient.convertToType(data['usage'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} capacity
   */
  exports.prototype['capacity'] = undefined;
  /**
   * @member {Number} consumedResourceId
   */
  exports.prototype['consumedResourceId'] = undefined;
  /**
   * @member {Number} overUsage
   */
  exports.prototype['overUsage'] = undefined;
  /**
   * @member {Number} requestedAmount
   */
  exports.prototype['requestedAmount'] = undefined;
  /**
   * @member {Number} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * @member {Number} usage
   */
  exports.prototype['usage'] = undefined;



  return exports;
}));


