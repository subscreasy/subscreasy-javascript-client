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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.SubscreasyJsClient) {
      root.SubscreasyJsClient = {};
    }
    root.SubscreasyJsClient.Coupon = factory(root.SubscreasyJsClient.ApiClient, root.SubscreasyJsClient.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';




  /**
   * The Coupon model module.
   * @module com.kodfarki.subscreasy.client.model/Coupon
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Coupon</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/Coupon
   * @class
   * @param discountAmount {Number} 
   * @param discountType {module:com.kodfarki.subscreasy.client.model/Coupon.DiscountTypeEnum} 
   * @param maxLimit {Number} 
   */
  var exports = function(discountAmount, discountType, maxLimit) {
    var _this = this;




    _this['discountAmount'] = discountAmount;
    _this['discountType'] = discountType;


    _this['maxLimit'] = maxLimit;
  };

  /**
   * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/Coupon} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/Coupon} The populated <code>Coupon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('currentUsage')) {
        obj['currentUsage'] = ApiClient.convertToType(data['currentUsage'], 'Number');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
      }
      if (data.hasOwnProperty('discountType')) {
        obj['discountType'] = ApiClient.convertToType(data['discountType'], 'String');
      }
      if (data.hasOwnProperty('expireDate')) {
        obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('maxLimit')) {
        obj['maxLimit'] = ApiClient.convertToType(data['maxLimit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Company} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Number} currentUsage
   */
  exports.prototype['currentUsage'] = undefined;
  /**
   * @member {Number} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Coupon.DiscountTypeEnum} discountType
   */
  exports.prototype['discountType'] = undefined;
  /**
   * @member {Date} expireDate
   */
  exports.prototype['expireDate'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} maxLimit
   */
  exports.prototype['maxLimit'] = undefined;


  /**
   * Allowed values for the <code>discountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscountTypeEnum = {
    /**
     * value: "FIXED"
     * @const
     */
    "FIXED": "FIXED",
    /**
     * value: "PERCENTAGE"
     * @const
     */
    "PERCENTAGE": "PERCENTAGE"  };


  return exports;
}));


