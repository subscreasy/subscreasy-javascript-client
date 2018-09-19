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
    define(['ApiClient', 'model/Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.MessageTemplate = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';




  /**
   * The MessageTemplate model module.
   * @module model/MessageTemplate
   * @version 1.0
   */

  /**
   * Constructs a new <code>MessageTemplate</code>.
   * @alias module:model/MessageTemplate
   * @class
   * @param company {module:model/Company} 
   */
  var exports = function(company) {
    var _this = this;

    _this['company'] = company;







  };

  /**
   * Constructs a <code>MessageTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageTemplate} obj Optional instance to populate.
   * @return {module:model/MessageTemplate} The populated <code>MessageTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('messageTemplate')) {
        obj['messageTemplate'] = ApiClient.convertToType(data['messageTemplate'], 'String');
      }
      if (data.hasOwnProperty('notificationType')) {
        obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Company} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {module:model/MessageTemplate.EventTypeEnum} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} messageTemplate
   */
  exports.prototype['messageTemplate'] = undefined;
  /**
   * @member {module:model/MessageTemplate.NotificationTypeEnum} notificationType
   */
  exports.prototype['notificationType'] = undefined;
  /**
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;


  /**
   * Allowed values for the <code>eventType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
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

  /**
   * Allowed values for the <code>notificationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NotificationTypeEnum = {
    /**
     * value: "WEBHOOK"
     * @const
     */
    "WEBHOOK": "WEBHOOK",
    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL"  };


  return exports;
}));


