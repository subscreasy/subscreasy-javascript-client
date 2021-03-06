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
import LoginVM from '../com.kodfarki.subscreasy.client.model/LoginVM';
import ResponseEntity from '../com.kodfarki.subscreasy.client.model/ResponseEntity';

/**
* UserJwtController service.
* @module com.kodfarki.subscreasy.client/UserJwtControllerApi
* @version 1.0.0
*/
export default class UserJwtControllerApi {

    /**
    * Constructs a new UserJwtControllerApi. 
    * @alias module:com.kodfarki.subscreasy.client/UserJwtControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authorizeUsingPOST operation.
     * @callback module:com.kodfarki.subscreasy.client/UserJwtControllerApi~authorizeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:com.kodfarki.subscreasy.client.model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * authorize
     * @param {module:com.kodfarki.subscreasy.client.model/LoginVM} loginVM loginVM
     * @param {module:com.kodfarki.subscreasy.client/UserJwtControllerApi~authorizeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.kodfarki.subscreasy.client.model/ResponseEntity}
     */
    authorizeUsingPOST(loginVM, callback) {
      let postBody = loginVM;
      // verify the required parameter 'loginVM' is set
      if (loginVM === undefined || loginVM === null) {
        throw new Error("Missing the required parameter 'loginVM' when calling authorizeUsingPOST");
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
      let returnType = ResponseEntity;
      return this.apiClient.callApi(
        '/api/authenticate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
