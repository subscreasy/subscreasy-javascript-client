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
    instance = new ApiDocumentation.UserDTO();
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

  describe('UserDTO', function() {
    it('should create an instance of UserDTO', function() {
      // uncomment below and update the code to test UserDTO
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be.a(ApiDocumentation.UserDTO);
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property authorities (base name: "authorities")', function() {
      // uncomment below and update the code to test the property authorities
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "imageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property langKey (base name: "langKey")', function() {
      // uncomment below and update the code to test the property langKey
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedBy (base name: "lastModifiedBy")', function() {
      // uncomment below and update the code to test the property lastModifiedBy
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property login (base name: "login")', function() {
      // uncomment below and update the code to test the property login
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

    it('should have the property resetDate (base name: "resetDate")', function() {
      // uncomment below and update the code to test the property resetDate
      //var instane = new ApiDocumentation.UserDTO();
      //expect(instance).to.be();
    });

  });

}));
