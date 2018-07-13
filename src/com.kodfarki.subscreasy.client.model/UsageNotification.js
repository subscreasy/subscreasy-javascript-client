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
    if (!root.SubscreasyJsClient) {
      root.SubscreasyJsClient = {};
    }
    root.SubscreasyJsClient.UsageNotification = factory(root.SubscreasyJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UsageNotification model module.
   * @module com.kodfarki.subscreasy.client.model/UsageNotification
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UsageNotification</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/UsageNotification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UsageNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/UsageNotification} The populated <code>UsageNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


