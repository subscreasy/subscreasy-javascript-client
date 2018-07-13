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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/ResponseEntity', 'com.kodfarki.subscreasy.client.model/UserDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.kodfarki.subscreasy.client.model/ResponseEntity'), require('../com.kodfarki.subscreasy.client.model/UserDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.SubscreasyJsClient) {
      root.SubscreasyJsClient = {};
    }
    root.SubscreasyJsClient.AccountResourceApi = factory(root.SubscreasyJsClient.ApiClient, root.SubscreasyJsClient.ResponseEntity, root.SubscreasyJsClient.UserDTO);
  }
}(this, function(ApiClient, ResponseEntity, UserDTO) {
  'use strict';

  /**
   * AccountResource service.
   * @module com.kodfarki.subscreasy.client/AccountResourceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountResourceApi. 
   * @alias module:com.kodfarki.subscreasy.client/AccountResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the isAuthenticatedUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/AccountResourceApi~isAuthenticatedUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * isAuthenticated
     * @param {module:com.kodfarki.subscreasy.client/AccountResourceApi~isAuthenticatedUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.isAuthenticatedUsingGET = function(callback) {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/authenticate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerAccountUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/AccountResourceApi~registerAccountUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * registerAccount
     * @param {module:com.kodfarki.subscreasy.client.model/UserDTO} managedUserVM managedUserVM
     * @param {module:com.kodfarki.subscreasy.client/AccountResourceApi~registerAccountUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ResponseEntity}
     */
    this.registerAccountUsingPOST = function(managedUserVM, callback) {
      var postBody = managedUserVM;

      // verify the required parameter 'managedUserVM' is set
      if (managedUserVM === undefined || managedUserVM === null) {
        throw new Error("Missing the required parameter 'managedUserVM' when calling registerAccountUsingPOST");
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
      var accepts = ['application/json', 'text/plain'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/register', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
