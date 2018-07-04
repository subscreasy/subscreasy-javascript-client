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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Offer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Offer'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.Product = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Offer);
  }
}(this, function(ApiClient, Offer) {
  'use strict';




  /**
   * The Product model module.
   * @module com.kodfarki.subscreasy.client.model/Product
   * @version 1.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/Product
   * @class
   * @param description {String} 
   * @param name {String} 
   */
  var exports = function(description, name) {
    var _this = this;

    _this['description'] = description;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/Product} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('offers')) {
        obj['offers'] = ApiClient.convertToType(data['offers'], [Offer]);
      }
      if (data.hasOwnProperty('productType')) {
        obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:com.kodfarki.subscreasy.client.model/Offer>} offers
   */
  exports.prototype['offers'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Product.ProductTypeEnum} productType
   */
  exports.prototype['productType'] = undefined;


  /**
   * Allowed values for the <code>productType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProductTypeEnum = {
    /**
     * value: "SERVICE"
     * @const
     */
    "SERVICE": "SERVICE",
    /**
     * value: "PHYSICAL"
     * @const
     */
    "PHYSICAL": "PHYSICAL"  };


  return exports;
}));


