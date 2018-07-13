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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/UsageNotification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.kodfarki.subscreasy.client.model/UsageNotification'));
  } else {
    // Browser globals (root is window)
    if (!root.SubscreasyJsClient) {
      root.SubscreasyJsClient = {};
    }
    root.SubscreasyJsClient.UsageNotificationResourceApi = factory(root.SubscreasyJsClient.ApiClient, root.SubscreasyJsClient.UsageNotification);
  }
}(this, function(ApiClient, UsageNotification) {
  'use strict';

  /**
   * UsageNotificationResource service.
   * @module com.kodfarki.subscreasy.client/UsageNotificationResourceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UsageNotificationResourceApi. 
   * @alias module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsageNotificationUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~createUsageNotificationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createUsageNotification
     * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} usageNotification usageNotification
     * @param {module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~createUsageNotificationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/UsageNotification}
     */
    this.createUsageNotificationUsingPOST = function(usageNotification, callback) {
      var postBody = usageNotification;

      // verify the required parameter 'usageNotification' is set
      if (usageNotification === undefined || usageNotification === null) {
        throw new Error("Missing the required parameter 'usageNotification' when calling createUsageNotificationUsingPOST");
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
      var returnType = UsageNotification;

      return this.apiClient.callApi(
        '/api/usage-notifications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsageNotificationUsingDELETE operation.
     * @callback module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~deleteUsageNotificationUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteUsageNotification
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~deleteUsageNotificationUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUsageNotificationUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUsageNotificationUsingDELETE");
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
        '/api/usage-notifications/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUsageNotificationsUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~getAllUsageNotificationsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/UsageNotification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllUsageNotifications
     * @param {module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~getAllUsageNotificationsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/UsageNotification>}
     */
    this.getAllUsageNotificationsUsingGET = function(callback) {
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
      var returnType = [UsageNotification];

      return this.apiClient.callApi(
        '/api/usage-notifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageNotificationUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~getUsageNotificationUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getUsageNotification
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~getUsageNotificationUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/UsageNotification}
     */
    this.getUsageNotificationUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUsageNotificationUsingGET");
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
      var returnType = UsageNotification;

      return this.apiClient.callApi(
        '/api/usage-notifications/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUsageNotificationUsingPUT operation.
     * @callback module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~updateUsageNotificationUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateUsageNotification
     * @param {module:com.kodfarki.subscreasy.client.model/UsageNotification} usageNotification usageNotification
     * @param {module:com.kodfarki.subscreasy.client/UsageNotificationResourceApi~updateUsageNotificationUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/UsageNotification}
     */
    this.updateUsageNotificationUsingPUT = function(usageNotification, callback) {
      var postBody = usageNotification;

      // verify the required parameter 'usageNotification' is set
      if (usageNotification === undefined || usageNotification === null) {
        throw new Error("Missing the required parameter 'usageNotification' when calling updateUsageNotificationUsingPUT");
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
      var returnType = UsageNotification;

      return this.apiClient.callApi(
        '/api/usage-notifications', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
