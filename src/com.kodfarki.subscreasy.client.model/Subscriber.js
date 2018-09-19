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
    root.SubscreasyJsClient.Subscriber = factory(root.SubscreasyJsClient.ApiClient, root.SubscreasyJsClient.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';




  /**
   * The Subscriber model module.
   * @module com.kodfarki.subscreasy.client.model/Subscriber
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Subscriber</code>.
   * @alias module:com.kodfarki.subscreasy.client.model/Subscriber
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>Subscriber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.kodfarki.subscreasy.client.model/Subscriber} obj Optional instance to populate.
   * @return {module:com.kodfarki.subscreasy.client.model/Subscriber} The populated <code>Subscriber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activated')) {
        obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
      }
      if (data.hasOwnProperty('activationKey')) {
        obj['activationKey'] = ApiClient.convertToType(data['activationKey'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('gsmNumber')) {
        obj['gsmNumber'] = ApiClient.convertToType(data['gsmNumber'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('identityNumber')) {
        obj['identityNumber'] = ApiClient.convertToType(data['identityNumber'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('lastLoginDate')) {
        obj['lastLoginDate'] = ApiClient.convertToType(data['lastLoginDate'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('passwordHash')) {
        obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
      }
      if (data.hasOwnProperty('registrationDate')) {
        obj['registrationDate'] = ApiClient.convertToType(data['registrationDate'], 'String');
      }
      if (data.hasOwnProperty('secureId')) {
        obj['secureId'] = ApiClient.convertToType(data['secureId'], 'String');
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = ApiClient.convertToType(data['shippingAddress'], 'String');
      }
      if (data.hasOwnProperty('shippingCity')) {
        obj['shippingCity'] = ApiClient.convertToType(data['shippingCity'], 'String');
      }
      if (data.hasOwnProperty('shippingCountry')) {
        obj['shippingCountry'] = ApiClient.convertToType(data['shippingCountry'], 'String');
      }
      if (data.hasOwnProperty('shippingName')) {
        obj['shippingName'] = ApiClient.convertToType(data['shippingName'], 'String');
      }
      if (data.hasOwnProperty('shippingZipCode')) {
        obj['shippingZipCode'] = ApiClient.convertToType(data['shippingZipCode'], 'String');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
      }
      if (data.hasOwnProperty('useBillingAddressForShipping')) {
        obj['useBillingAddressForShipping'] = ApiClient.convertToType(data['useBillingAddressForShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} activated
   */
  exports.prototype['activated'] = undefined;
  /**
   * @member {String} activationKey
   */
  exports.prototype['activationKey'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {module:com.kodfarki.subscreasy.client.model/Company} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} gsmNumber
   */
  exports.prototype['gsmNumber'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} identityNumber
   */
  exports.prototype['identityNumber'] = undefined;
  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {String} lastLoginDate
   */
  exports.prototype['lastLoginDate'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} passwordHash
   */
  exports.prototype['passwordHash'] = undefined;
  /**
   * @member {String} registrationDate
   */
  exports.prototype['registrationDate'] = undefined;
  /**
   * @member {String} secureId
   */
  exports.prototype['secureId'] = undefined;
  /**
   * @member {String} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * @member {String} shippingCity
   */
  exports.prototype['shippingCity'] = undefined;
  /**
   * @member {String} shippingCountry
   */
  exports.prototype['shippingCountry'] = undefined;
  /**
   * @member {String} shippingName
   */
  exports.prototype['shippingName'] = undefined;
  /**
   * @member {String} shippingZipCode
   */
  exports.prototype['shippingZipCode'] = undefined;
  /**
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;
  /**
   * @member {Boolean} useBillingAddressForShipping
   */
  exports.prototype['useBillingAddressForShipping'] = undefined;
  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;



  return exports;
}));


