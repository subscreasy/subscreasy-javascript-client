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
    instance = new ApiDocumentation.SavedCardResourceApi();
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

  describe('SavedCardResourceApi', function() {
    describe('createCardUsingPOST', function() {
      it('should call createCardUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createCardUsingPOST
        //instance.createCardUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCardUsingDELETE', function() {
      it('should call deleteCardUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteCardUsingDELETE
        //instance.deleteCardUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllCardsUsingGET', function() {
      it('should call getAllCardsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllCardsUsingGET
        //instance.getAllCardsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardUsingGET', function() {
      it('should call getCardUsingGET successfully', function(done) {
        //uncomment below and update the code to test getCardUsingGET
        //instance.getCardUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCardUsingPUT', function() {
      it('should call updateCardUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateCardUsingPUT
        //instance.updateCardUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
