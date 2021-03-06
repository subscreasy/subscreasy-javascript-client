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
    instance = new ApiDocumentation.EndpointsApi();
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

  describe('EndpointsApi', function() {
    describe('authorizeUsingPUT', function() {
      it('should call authorizeUsingPUT successfully', function(done) {
        //uncomment below and update the code to test authorizeUsingPUT
        //instance.authorizeUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deductUsingPUT', function() {
      it('should call deductUsingPUT successfully', function(done) {
        //uncomment below and update the code to test deductUsingPUT
        //instance.deductUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuthorizedServicesUsingGET', function() {
      it('should call getAuthorizedServicesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAuthorizedServicesUsingGET
        //instance.getAuthorizedServicesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChargingLogBySubscriptionUsingGET', function() {
      it('should call getChargingLogBySubscriptionUsingGET successfully', function(done) {
        //uncomment below and update the code to test getChargingLogBySubscriptionUsingGET
        //instance.getChargingLogBySubscriptionUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerTotalAmountUsingGET', function() {
      it('should call getCustomerTotalAmountUsingGET successfully', function(done) {
        //uncomment below and update the code to test getCustomerTotalAmountUsingGET
        //instance.getCustomerTotalAmountUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceDetailsUsingGET', function() {
      it('should call getInvoiceDetailsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getInvoiceDetailsUsingGET
        //instance.getInvoiceDetailsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMessageTemplateUsingGET', function() {
      it('should call getMessageTemplateUsingGET successfully', function(done) {
        //uncomment below and update the code to test getMessageTemplateUsingGET
        //instance.getMessageTemplateUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceInstancesBySubscriptionUsingGET', function() {
      it('should call getServiceInstancesBySubscriptionUsingGET successfully', function(done) {
        //uncomment below and update the code to test getServiceInstancesBySubscriptionUsingGET
        //instance.getServiceInstancesBySubscriptionUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceOfferingsBySubscriptionPlanUsingGET', function() {
      it('should call getServiceOfferingsBySubscriptionPlanUsingGET successfully', function(done) {
        //uncomment below and update the code to test getServiceOfferingsBySubscriptionPlanUsingGET
        //instance.getServiceOfferingsBySubscriptionPlanUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTotalRevenuePerMonthUsingGET', function() {
      it('should call getTotalRevenuePerMonthUsingGET successfully', function(done) {
        //uncomment below and update the code to test getTotalRevenuePerMonthUsingGET
        //instance.getTotalRevenuePerMonthUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
