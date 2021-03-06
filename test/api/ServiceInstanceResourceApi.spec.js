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
    instance = new ApiDocumentation.ServiceInstanceResourceApi();
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

  describe('ServiceInstanceResourceApi', function() {
    describe('createServiceInstanceUsingPOST', function() {
      it('should call createServiceInstanceUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createServiceInstanceUsingPOST
        //instance.createServiceInstanceUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteServiceInstanceUsingDELETE', function() {
      it('should call deleteServiceInstanceUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteServiceInstanceUsingDELETE
        //instance.deleteServiceInstanceUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllServiceInstancesUsingGET', function() {
      it('should call getAllServiceInstancesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllServiceInstancesUsingGET
        //instance.getAllServiceInstancesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceInstanceUsingGET', function() {
      it('should call getServiceInstanceUsingGET successfully', function(done) {
        //uncomment below and update the code to test getServiceInstanceUsingGET
        //instance.getServiceInstanceUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateServiceInstanceUsingPUT', function() {
      it('should call updateServiceInstanceUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateServiceInstanceUsingPUT
        //instance.updateServiceInstanceUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
