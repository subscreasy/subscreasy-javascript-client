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
    define(['ApiClient', 'model/Offer', 'model/Order', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Offer'), require('./Order'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.OrderItem = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Offer, root.ApiDocumentation.Order, root.ApiDocumentation.Product);
  }
}(this, function(ApiClient, Offer, Order, Product) {
  'use strict';




  /**
   * The OrderItem model module.
   * @module model/OrderItem
   * @version 1.0
   */

  /**
   * Constructs a new <code>OrderItem</code>.
   * @alias module:model/OrderItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderItem} obj Optional instance to populate.
   * @return {module:model/OrderItem} The populated <code>OrderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('offer')) {
        obj['offer'] = Offer.constructFromObject(data['offer']);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = Order.constructFromObject(data['order']);
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = Product.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('productCount')) {
        obj['productCount'] = ApiClient.convertToType(data['productCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Offer} offer
   */
  exports.prototype['offer'] = undefined;
  /**
   * @member {module:model/Order} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {module:model/Product} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {Number} productCount
   */
  exports.prototype['productCount'] = undefined;



  return exports;
}));

