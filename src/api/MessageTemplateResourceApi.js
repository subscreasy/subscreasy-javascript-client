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
    define(['ApiClient', 'model/MessageTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MessageTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.MessageTemplateResourceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.MessageTemplate);
  }
}(this, function(ApiClient, MessageTemplate) {
  'use strict';

  /**
   * MessageTemplateResource service.
   * @module api/MessageTemplateResourceApi
   * @version 1.0
   */

  /**
   * Constructs a new MessageTemplateResourceApi. 
   * @alias module:api/MessageTemplateResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createMessageTemplateUsingPOST operation.
     * @callback module:api/MessageTemplateResourceApi~createMessageTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createMessageTemplate
     * @param {module:model/MessageTemplate} messageTemplate messageTemplate
     * @param {module:api/MessageTemplateResourceApi~createMessageTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageTemplate}
     */
    this.createMessageTemplateUsingPOST = function(messageTemplate, callback) {
      var postBody = messageTemplate;

      // verify the required parameter 'messageTemplate' is set
      if (messageTemplate === undefined || messageTemplate === null) {
        throw new Error("Missing the required parameter 'messageTemplate' when calling createMessageTemplateUsingPOST");
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
      var returnType = MessageTemplate;

      return this.apiClient.callApi(
        '/api/message-templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMessageTemplateUsingDELETE operation.
     * @callback module:api/MessageTemplateResourceApi~deleteMessageTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteMessageTemplate
     * @param {Number} id id
     * @param {module:api/MessageTemplateResourceApi~deleteMessageTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMessageTemplateUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMessageTemplateUsingDELETE");
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
        '/api/message-templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMessageTemplatesUsingGET operation.
     * @callback module:api/MessageTemplateResourceApi~getAllMessageTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MessageTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllMessageTemplates
     * @param {module:api/MessageTemplateResourceApi~getAllMessageTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MessageTemplate>}
     */
    this.getAllMessageTemplatesUsingGET = function(callback) {
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
      var returnType = [MessageTemplate];

      return this.apiClient.callApi(
        '/api/message-templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessageTemplateUsingGET1 operation.
     * @callback module:api/MessageTemplateResourceApi~getMessageTemplateUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getMessageTemplate
     * @param {Number} id id
     * @param {module:api/MessageTemplateResourceApi~getMessageTemplateUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageTemplate}
     */
    this.getMessageTemplateUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMessageTemplateUsingGET1");
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
      var returnType = MessageTemplate;

      return this.apiClient.callApi(
        '/api/message-templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMessageTemplateUsingPUT operation.
     * @callback module:api/MessageTemplateResourceApi~updateMessageTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateMessageTemplate
     * @param {module:model/MessageTemplate} messageTemplate messageTemplate
     * @param {module:api/MessageTemplateResourceApi~updateMessageTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageTemplate}
     */
    this.updateMessageTemplateUsingPUT = function(messageTemplate, callback) {
      var postBody = messageTemplate;

      // verify the required parameter 'messageTemplate' is set
      if (messageTemplate === undefined || messageTemplate === null) {
        throw new Error("Missing the required parameter 'messageTemplate' when calling updateMessageTemplateUsingPUT");
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
      var returnType = MessageTemplate;

      return this.apiClient.callApi(
        '/api/message-templates', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
