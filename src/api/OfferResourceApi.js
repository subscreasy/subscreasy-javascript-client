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
    define(['ApiClient', 'model/Offer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Offer'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.OfferResourceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Offer);
  }
}(this, function(ApiClient, Offer) {
  'use strict';

  /**
   * OfferResource service.
   * @module api/OfferResourceApi
   * @version 1.0
   */

  /**
   * Constructs a new OfferResourceApi. 
   * @alias module:api/OfferResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createOfferUsingPOST operation.
     * @callback module:api/OfferResourceApi~createOfferUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Offer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createOffer
     * @param {module:model/Offer} offer offer
     * @param {module:api/OfferResourceApi~createOfferUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Offer}
     */
    this.createOfferUsingPOST = function(offer, callback) {
      var postBody = offer;

      // verify the required parameter 'offer' is set
      if (offer === undefined || offer === null) {
        throw new Error("Missing the required parameter 'offer' when calling createOfferUsingPOST");
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
      var returnType = Offer;

      return this.apiClient.callApi(
        '/api/offers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOfferUsingDELETE operation.
     * @callback module:api/OfferResourceApi~deleteOfferUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteOffer
     * @param {Number} id id
     * @param {module:api/OfferResourceApi~deleteOfferUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOfferUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOfferUsingDELETE");
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
        '/api/offers/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllOffersUsingGET operation.
     * @callback module:api/OfferResourceApi~getAllOffersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Offer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllOffers
     * @param {module:api/OfferResourceApi~getAllOffersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Offer>}
     */
    this.getAllOffersUsingGET = function(callback) {
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
      var returnType = [Offer];

      return this.apiClient.callApi(
        '/api/offers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOfferUsingGET operation.
     * @callback module:api/OfferResourceApi~getOfferUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Offer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOffer
     * @param {Number} id id
     * @param {module:api/OfferResourceApi~getOfferUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Offer}
     */
    this.getOfferUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOfferUsingGET");
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
      var returnType = Offer;

      return this.apiClient.callApi(
        '/api/offers/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOfferUsingPUT operation.
     * @callback module:api/OfferResourceApi~updateOfferUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Offer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateOffer
     * @param {module:model/Offer} offer offer
     * @param {module:api/OfferResourceApi~updateOfferUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Offer}
     */
    this.updateOfferUsingPUT = function(offer, callback) {
      var postBody = offer;

      // verify the required parameter 'offer' is set
      if (offer === undefined || offer === null) {
        throw new Error("Missing the required parameter 'offer' when calling updateOfferUsingPUT");
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
      var returnType = Offer;

      return this.apiClient.callApi(
        '/api/offers', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
