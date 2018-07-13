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
    root.SubscreasyJsClient.Invoice = factory(root.SubscreasyJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Invoice model module.
   * @module com.kodfarki.subscreasy.client.model/Invoice
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/Invoice
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/Invoice} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/Invoice} The populated <code>Invoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('billingMonth')) {
        obj['billingMonth'] = ApiClient.convertToType(data['billingMonth'], 'Number');
      }
      if (data.hasOwnProperty('billingYear')) {
        obj['billingYear'] = ApiClient.convertToType(data['billingYear'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('periodEnd')) {
        obj['periodEnd'] = ApiClient.convertToType(data['periodEnd'], 'Date');
      }
      if (data.hasOwnProperty('periodStart')) {
        obj['periodStart'] = ApiClient.convertToType(data['periodStart'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subscriberSecureId')) {
        obj['subscriberSecureId'] = ApiClient.convertToType(data['subscriberSecureId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Number} billingMonth
   */
  exports.prototype['billingMonth'] = undefined;
  /**
   * @member {Number} billingYear
   */
  exports.prototype['billingYear'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} periodEnd
   */
  exports.prototype['periodEnd'] = undefined;
  /**
   * @member {Date} periodStart
   */
  exports.prototype['periodStart'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} subscriberSecureId
   */
  exports.prototype['subscriberSecureId'] = undefined;



  return exports;
}));


