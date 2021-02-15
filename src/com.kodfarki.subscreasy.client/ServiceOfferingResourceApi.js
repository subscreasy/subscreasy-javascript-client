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
import ServiceOffering from '../com.kodfarki.subscreasy.client.model/ServiceOffering';

/**
* ServiceOfferingResource service.
* @module com.kodfarki.subscreasy.client/ServiceOfferingResourceApi
* @version 1.0.0
*/
export default class ServiceOfferingResourceApi {

    /**
    * Constructs a new ServiceOfferingResourceApi. 
    * @alias module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createServiceOfferingUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~createServiceOfferingUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createServiceOffering
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} serviceOffering serviceOffering
     * @param {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~createServiceOfferingUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceOffering}
     */
    createServiceOfferingUsingPOST(serviceOffering, callback) {
      let postBody = serviceOffering;
      // verify the required parameter 'serviceOffering' is set
      if (serviceOffering === undefined || serviceOffering === null) {
        throw new Error("Missing the required parameter 'serviceOffering' when calling createServiceOfferingUsingPOST");
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
      let returnType = ServiceOffering;
      return this.apiClient.callApi(
        '/api/service-offerings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceOfferingUsingDELETE operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~deleteServiceOfferingUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteServiceOffering
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~deleteServiceOfferingUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteServiceOfferingUsingDELETE(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceOfferingUsingDELETE");
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
        '/api/service-offerings/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServiceOfferingsUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~getAllServiceOfferingsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.kodfarki.subscreasy.client.model/ServiceOffering>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllServiceOfferings
     * @param {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~getAllServiceOfferingsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.kodfarki.subscreasy.client.model/ServiceOffering>}
     */
    getAllServiceOfferingsUsingGET(callback) {
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
      let returnType = [ServiceOffering];
      return this.apiClient.callApi(
        '/api/service-offerings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceOfferingUsingGET operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~getServiceOfferingUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getServiceOffering
     * @param {Number} id id
     * @param {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~getServiceOfferingUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceOffering}
     */
    getServiceOfferingUsingGET(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getServiceOfferingUsingGET");
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
      let returnType = ServiceOffering;
      return this.apiClient.callApi(
        '/api/service-offerings/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceOfferingUsingPUT operation.
     * @callback module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~updateServiceOfferingUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateServiceOffering
     * @param {module:com.kodfarki.subscreasy.client.model/ServiceOffering} serviceOffering serviceOffering
     * @param {module:com.kodfarki.subscreasy.client/ServiceOfferingResourceApi~updateServiceOfferingUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ServiceOffering}
     */
    updateServiceOfferingUsingPUT(serviceOffering, callback) {
      let postBody = serviceOffering;
      // verify the required parameter 'serviceOffering' is set
      if (serviceOffering === undefined || serviceOffering === null) {
        throw new Error("Missing the required parameter 'serviceOffering' when calling updateServiceOfferingUsingPUT");
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
      let returnType = ServiceOffering;
      return this.apiClient.callApi(
        '/api/service-offerings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
