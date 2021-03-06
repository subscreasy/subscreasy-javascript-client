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
import ServiceInstance from '../com.kodfarki.subscreasy.client.model/ServiceInstance';

/**
* ServiceInstanceResource service.
* @module com.kodfarki.subscreasy.client/ServiceInstanceResourceApi
* @version 1.0.0
*/
export default class ServiceInstanceResourceApi {

    /**
    * Constructs a new ServiceInstanceResourceApi. 
    * @alias module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createServiceInstanceUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~createServiceInstanceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createServiceInstance
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} serviceInstance serviceInstance
     * @param {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~createServiceInstanceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceInstance}
     */
    createServiceInstanceUsingPOST(serviceInstance, callback) {
      let postBody = serviceInstance;
      // verify the required parameter 'serviceInstance' is set
      if (serviceInstance === undefined || serviceInstance === null) {
        throw new Error("Missing the required parameter 'serviceInstance' when calling createServiceInstanceUsingPOST");
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
      let returnType = ServiceInstance;
      return this.apiClient.callApi(
        '/api/service-instances', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceInstanceUsingDELETE operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~deleteServiceInstanceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteServiceInstance
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~deleteServiceInstanceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteServiceInstanceUsingDELETE(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceInstanceUsingDELETE");
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
        '/api/service-instances/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServiceInstancesUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~getAllServiceInstancesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/ServiceInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllServiceInstances
     * @param {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~getAllServiceInstancesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/ServiceInstance>}
     */
    getAllServiceInstancesUsingGET(callback) {
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
      let returnType = [ServiceInstance];
      return this.apiClient.callApi(
        '/api/service-instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceInstanceUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~getServiceInstanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getServiceInstance
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~getServiceInstanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceInstance}
     */
    getServiceInstanceUsingGET(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getServiceInstanceUsingGET");
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
      let returnType = ServiceInstance;
      return this.apiClient.callApi(
        '/api/service-instances/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceInstanceUsingPUT operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~updateServiceInstanceUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateServiceInstance
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceInstance} serviceInstance serviceInstance
     * @param {module:com.kodfarki.subscreasy.client/ServiceInstanceResourceApi~updateServiceInstanceUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceInstance}
     */
    updateServiceInstanceUsingPUT(serviceInstance, callback) {
      let postBody = serviceInstance;
      // verify the required parameter 'serviceInstance' is set
      if (serviceInstance === undefined || serviceInstance === null) {
        throw new Error("Missing the required parameter 'serviceInstance' when calling updateServiceInstanceUsingPUT");
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
      let returnType = ServiceInstance;
      return this.apiClient.callApi(
        '/api/service-instances', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
