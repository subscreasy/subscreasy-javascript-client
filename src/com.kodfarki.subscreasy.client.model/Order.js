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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Address', 'com.kodfarki.subscreasy.client.model/OrderItem', 'com.kodfarki.subscreasy.client.model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./OrderItem'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.Order = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Address, root.ApiDocumentation.OrderItem, root.ApiDocumentation.User);
  }
}(this, function(ApiClient, Address, OrderItem, User) {
  'use strict';




  /**
   * The Order model module.
   * @module com.kodfarki.subscreasy.client.model/Order
   * @version 1.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/Order
   * @class
   * @param address {module:com.kodfarki.subscreasy.client.model/Address} 
   * @param createDate {Date} 
   * @param user {module:com.kodfarki.subscreasy.client.model/User} 
   */
  var exports = function(address, createDate, user) {
    var _this = this;

    _this['address'] = address;
    _this['createDate'] = createDate;


    _this['user'] = user;
  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/Order} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('orderItems')) {
        obj['orderItems'] = ApiClient.convertToType(data['orderItems'], [OrderItem]);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:com.kodfarki.subscreasy.client.model/OrderItem>} orderItems
   */
  exports.prototype['orderItems'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/User} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


