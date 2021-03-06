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
    define(['ApiClient', 'model/Subsription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subsription'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.History = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Subsription);
  }
}(this, function(ApiClient, Subsription) {
  'use strict';




  /**
   * The History model module.
   * @module model/History
   * @version 1.0
   */

  /**
   * Constructs a new <code>History</code>.
   * @alias module:model/History
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>History</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/History} obj Optional instance to populate.
   * @return {module:model/History} The populated <code>History</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = Subsription.constructFromObject(data['subscription']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/History.NameEnum} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Subsription} subscription
   */
  exports.prototype['subscription'] = undefined;


  /**
   * Allowed values for the <code>name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NameEnum = {
    /**
     * value: "STARTED"
     * @const
     */
    "STARTED": "STARTED",
    /**
     * value: "RENEWED"
     * @const
     */
    "RENEWED": "RENEWED",
    /**
     * value: "FINISHED"
     * @const
     */
    "FINISHED": "FINISHED",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED"  };


  return exports;
}));


