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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDocumentation.MessageTemplate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MessageTemplate', function() {
    it('should create an instance of MessageTemplate', function() {
      // uncomment below and update the code to test MessageTemplate
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be.a(ApiDocumentation.MessageTemplate);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property messageTemplate (base name: "messageTemplate")', function() {
      // uncomment below and update the code to test the property messageTemplate
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property notificationType (base name: "notificationType")', function() {
      // uncomment below and update the code to test the property notificationType
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new ApiDocumentation.MessageTemplate();
      //expect(instance).to.be();
    });

  });

}));
