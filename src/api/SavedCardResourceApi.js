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
    define(['ApiClient', 'model/SavedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SavedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.SavedCardResourceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.SavedCard);
  }
}(this, function(ApiClient, SavedCard) {
  'use strict';

  /**
   * SavedCardResource service.
   * @module api/SavedCardResourceApi
   * @version 1.0
   */

  /**
   * Constructs a new SavedCardResourceApi. 
   * @alias module:api/SavedCardResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCardUsingPOST operation.
     * @callback module:api/SavedCardResourceApi~createCardUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createCard
     * @param {module:model/SavedCard} card card
     * @param {module:api/SavedCardResourceApi~createCardUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedCard}
     */
    this.createCardUsingPOST = function(card, callback) {
      var postBody = card;

      // verify the required parameter 'card' is set
      if (card === undefined || card === null) {
        throw new Error("Missing the required parameter 'card' when calling createCardUsingPOST");
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
      var returnType = SavedCard;

      return this.apiClient.callApi(
        '/api/saved-cards', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCardUsingDELETE operation.
     * @callback module:api/SavedCardResourceApi~deleteCardUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteCard
     * @param {Number} id id
     * @param {module:api/SavedCardResourceApi~deleteCardUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCardUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCardUsingDELETE");
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
        '/api/saved-cards/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCardsUsingGET operation.
     * @callback module:api/SavedCardResourceApi~getAllCardsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SavedCard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllCards
     * @param {module:api/SavedCardResourceApi~getAllCardsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SavedCard>}
     */
    this.getAllCardsUsingGET = function(callback) {
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
      var returnType = [SavedCard];

      return this.apiClient.callApi(
        '/api/saved-cards', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCardUsingGET operation.
     * @callback module:api/SavedCardResourceApi~getCardUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCard
     * @param {Number} id id
     * @param {module:api/SavedCardResourceApi~getCardUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedCard}
     */
    this.getCardUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCardUsingGET");
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
      var returnType = SavedCard;

      return this.apiClient.callApi(
        '/api/saved-cards/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCardUsingPUT operation.
     * @callback module:api/SavedCardResourceApi~updateCardUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateCard
     * @param {module:model/SavedCard} card card
     * @param {module:api/SavedCardResourceApi~updateCardUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedCard}
     */
    this.updateCardUsingPUT = function(card, callback) {
      var postBody = card;

      // verify the required parameter 'card' is set
      if (card === undefined || card === null) {
        throw new Error("Missing the required parameter 'card' when calling updateCardUsingPUT");
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
      var returnType = SavedCard;

      return this.apiClient.callApi(
        '/api/saved-cards', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
