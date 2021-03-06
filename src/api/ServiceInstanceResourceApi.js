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
    define(['ApiClient', 'model/ServiceInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ServiceInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ServiceInstanceResourceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.ServiceInstance);
  }
}(this, function(ApiClient, ServiceInstance) {
  'use strict';

  /**
   * ServiceInstanceResource service.
   * @module api/ServiceInstanceResourceApi
   * @version 1.0
   */

  /**
   * Constructs a new ServiceInstanceResourceApi. 
   * @alias module:api/ServiceInstanceResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createServiceInstanceUsingPOST operation.
     * @callback module:api/ServiceInstanceResourceApi~createServiceInstanceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createServiceInstance
     * @param {module:model/ServiceInstance} serviceInstance serviceInstance
     * @param {module:api/ServiceInstanceResourceApi~createServiceInstanceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInstance}
     */
    this.createServiceInstanceUsingPOST = function(serviceInstance, callback) {
      var postBody = serviceInstance;

      // verify the required parameter 'serviceInstance' is set
      if (serviceInstance === undefined || serviceInstance === null) {
        throw new Error("Missing the required parameter 'serviceInstance' when calling createServiceInstanceUsingPOST");
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
      var returnType = ServiceInstance;

      return this.apiClient.callApi(
        '/api/service-instances', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceInstanceUsingDELETE operation.
     * @callback module:api/ServiceInstanceResourceApi~deleteServiceInstanceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteServiceInstance
     * @param {Number} id id
     * @param {module:api/ServiceInstanceResourceApi~deleteServiceInstanceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteServiceInstanceUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceInstanceUsingDELETE");
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
        '/api/service-instances/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServiceInstancesUsingGET operation.
     * @callback module:api/ServiceInstanceResourceApi~getAllServiceInstancesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ServiceInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllServiceInstances
     * @param {module:api/ServiceInstanceResourceApi~getAllServiceInstancesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ServiceInstance>}
     */
    this.getAllServiceInstancesUsingGET = function(callback) {
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
      var returnType = [ServiceInstance];

      return this.apiClient.callApi(
        '/api/service-instances', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceInstanceUsingGET operation.
     * @callback module:api/ServiceInstanceResourceApi~getServiceInstanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getServiceInstance
     * @param {Number} id id
     * @param {module:api/ServiceInstanceResourceApi~getServiceInstanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInstance}
     */
    this.getServiceInstanceUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getServiceInstanceUsingGET");
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
      var returnType = ServiceInstance;

      return this.apiClient.callApi(
        '/api/service-instances/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceInstanceUsingPUT operation.
     * @callback module:api/ServiceInstanceResourceApi~updateServiceInstanceUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateServiceInstance
     * @param {module:model/ServiceInstance} serviceInstance serviceInstance
     * @param {module:api/ServiceInstanceResourceApi~updateServiceInstanceUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInstance}
     */
    this.updateServiceInstanceUsingPUT = function(serviceInstance, callback) {
      var postBody = serviceInstance;

      // verify the required parameter 'serviceInstance' is set
      if (serviceInstance === undefined || serviceInstance === null) {
        throw new Error("Missing the required parameter 'serviceInstance' when calling updateServiceInstanceUsingPUT");
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
      var returnType = ServiceInstance;

      return this.apiClient.callApi(
        '/api/service-instances', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
