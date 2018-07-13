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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.kodfarki.subscreasy.client.model/Service'));
  } else {
    // Browser globals (root is window)
    if (!root.SubscreasyJsClient) {
      root.SubscreasyJsClient = {};
    }
    root.SubscreasyJsClient.ServiceResourceApi = factory(root.SubscreasyJsClient.ApiClient, root.SubscreasyJsClient.Service);
  }
}(this, function(ApiClient, Service) {
  'use strict';

  /**
   * ServiceResource service.
   * @module com.kodfarki.subscreasy.client/ServiceResourceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ServiceResourceApi. 
   * @alias module:com.kodfarki.subscreasy.client/ServiceResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createServiceUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceResourceApi~createServiceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createService
     * @param {module:com.kodfarki.subscreasy.client.model/Service} service service
     * @param {module:com.kodfarki.subscreasy.client/ServiceResourceApi~createServiceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Service}
     */
    this.createServiceUsingPOST = function(service, callback) {
      var postBody = service;

      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling createServiceUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Service;

      return this.apiClient.callApi(
        '/api/services', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceUsingDELETE operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceResourceApi~deleteServiceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteService
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceResourceApi~deleteServiceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteServiceUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceUsingDELETE");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/services/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServicesUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceResourceApi~getAllServicesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/Service>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllServices
     * @param {module:com.kodfarki.subscreasy.client/ServiceResourceApi~getAllServicesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/Service>}
     */
    this.getAllServicesUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [Service];

      return this.apiClient.callApi(
        '/api/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceResourceApi~getServiceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getService
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceResourceApi~getServiceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Service}
     */
    this.getServiceUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getServiceUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = Service;

      return this.apiClient.callApi(
        '/api/services/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceUsingPUT operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceResourceApi~updateServiceUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateService
     * @param {module:com.kodfarki.subscreasy.client.model/Service} service service
     * @param {module:com.kodfarki.subscreasy.client/ServiceResourceApi~updateServiceUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Service}
     */
    this.updateServiceUsingPUT = function(service, callback) {
      var postBody = service;

      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling updateServiceUsingPUT");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Service;

      return this.apiClient.callApi(
        '/api/services', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
