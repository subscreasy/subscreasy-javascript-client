/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Service from '../com.kodfarki.subscreasy.client.model/Service';

/**
* ServiceResource service.
* @module com.kodfarki.subscreasy.client/ServiceResourceApi
* @version 1.0.0
*/
export default class ServiceResourceApi {

    /**
    * Constructs a new ServiceResourceApi. 
    * @alias module:com.kodfarki.subscreasy.client/ServiceResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
    createServiceUsingPOST(service, callback) {
      let postBody = service;
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling createServiceUsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/services', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    deleteServiceUsingDELETE(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceUsingDELETE");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/services/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getAllServicesUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Service];
      return this.apiClient.callApi(
        '/api/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getServiceUsingGET(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getServiceUsingGET");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/services/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    updateServiceUsingPUT(service, callback) {
      let postBody = service;
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling updateServiceUsingPUT");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/services', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
