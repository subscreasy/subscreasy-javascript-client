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
    instance = new ApiDocumentation.OrderResourceApi();
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

  describe('OrderResourceApi', function() {
    describe('createOrderUsingPOST', function() {
      it('should call createOrderUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createOrderUsingPOST
        //instance.createOrderUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderUsingDELETE', function() {
      it('should call deleteOrderUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteOrderUsingDELETE
        //instance.deleteOrderUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllOrdersUsingGET', function() {
      it('should call getAllOrdersUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllOrdersUsingGET
        //instance.getAllOrdersUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderUsingGET', function() {
      it('should call getOrderUsingGET successfully', function(done) {
        //uncomment below and update the code to test getOrderUsingGET
        //instance.getOrderUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrderUsingPUT', function() {
      it('should call updateOrderUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateOrderUsingPUT
        //instance.updateOrderUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));