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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Authority', 'com.kodfarki.subscreasy.client.model/Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Authority'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.User = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Authority, root.ApiDocumentation.Company);
  }
}(this, function(ApiClient, Authority, Company) {
  'use strict';




  /**
   * The User model module.
   * @module com.kodfarki.subscreasy.client.model/User
   * @version 1.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/User
   * @class
   * @param activated {Boolean} 
   * @param login {String} 
   */
  var exports = function(activated, login) {
    var _this = this;

    _this['activated'] = activated;










    _this['login'] = login;

  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/User} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activated')) {
        obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
      }
      if (data.hasOwnProperty('authorities')) {
        obj['authorities'] = ApiClient.convertToType(data['authorities'], [Authority]);
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('langKey')) {
        obj['langKey'] = ApiClient.convertToType(data['langKey'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDate')) {
        obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('resetDate')) {
        obj['resetDate'] = ApiClient.convertToType(data['resetDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} activated
   */
  exports.prototype['activated'] = undefined;
  /**
   * @member {Array.<module:com.kodfarki.subscreasy.client.model/Authority>} authorities
   */
  exports.prototype['authorities'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Company} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * @member {String} langKey
   */
  exports.prototype['langKey'] = undefined;
  /**
   * @member {Date} lastModifiedDate
   */
  exports.prototype['lastModifiedDate'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * @member {Date} resetDate
   */
  exports.prototype['resetDate'] = undefined;



  return exports;
}));


