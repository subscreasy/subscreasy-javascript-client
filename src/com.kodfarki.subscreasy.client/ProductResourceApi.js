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
    define(['ApiClient', 'com.kodfarki.subscreasy.client.model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.kodfarki.subscreasy.client.model/Product'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ProductResourceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';

  /**
   * ProductResource service.
   * @module com.kodfarki.subscreasy.client/ProductResourceApi
   * @version 1.0
   */

  /**
   * Constructs a new ProductResourceApi. 
   * @alias module:com.kodfarki.subscreasy.client/ProductResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProductUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~createProductUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createProduct
     * @param {module:com.kodfarki.subscreasy.client.model/Product} product product
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~createProductUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Product}
     */
    this.createProductUsingPOST = function(product, callback) {
      var postBody = product;

      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling createProductUsingPOST");
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/api/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCompanyProductUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~getAllCompanyProductUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/Product>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllCompanyProduct
     * @param {String} companyName companyName
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~getAllCompanyProductUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/Product>}
     */
    this.getAllCompanyProductUsingGET = function(companyName, callback) {
      var postBody = null;

      // verify the required parameter 'companyName' is set
      if (companyName === undefined || companyName === null) {
        throw new Error("Missing the required parameter 'companyName' when calling getAllCompanyProductUsingGET");
      }


      var pathParams = {
        'companyName': companyName
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
      var returnType = [Product];

      return this.apiClient.callApi(
        '/api/na/products2/{companyName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProductsUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~getAllProductsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/Product>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllProducts
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~getAllProductsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/Product>}
     */
    this.getAllProductsUsingGET = function(callback) {
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
      var returnType = [Product];

      return this.apiClient.callApi(
        '/api/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompanyProductUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~getCompanyProductUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCompanyProduct
     * @param {String} companyName companyName
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~getCompanyProductUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Product}
     */
    this.getCompanyProductUsingGET = function(companyName, id, callback) {
      var postBody = null;

      // verify the required parameter 'companyName' is set
      if (companyName === undefined || companyName === null) {
        throw new Error("Missing the required parameter 'companyName' when calling getCompanyProductUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCompanyProductUsingGET");
      }


      var pathParams = {
        'companyName': companyName,
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/api/na/products/{companyName}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~getProductUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getProduct
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~getProductUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Product}
     */
    this.getProductUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductUsingGET");
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/api/products/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductUsingPUT operation.
     * @callback module:com.kodfarki.subscreasy.client/ProductResourceApi~updateProductUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateProduct
     * @param {module:com.kodfarki.subscreasy.client.model/Product} product product
     * @param {module:com.kodfarki.subscreasy.client/ProductResourceApi~updateProductUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/Product}
     */
    this.updateProductUsingPUT = function(product, callback) {
      var postBody = product;

      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling updateProductUsingPUT");
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/api/products', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
