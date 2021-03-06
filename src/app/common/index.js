import angular from 'angular';
import {gridComponent} from './grid';

export const commonModules = 'report.commons';

angular.module(commonModules, [])
  .component('reportGrid', gridComponent)
  .constant('API', {
    MAPPING: 'http://localhost:3203/api/v2/mappings'
  })
  .factory('HTTP', ['$http', $http => {
    const get = function (api, params) {
      return $http.get(api, params);
    };

    const post = function (api, body) {
      return $http.post(api, body);
    };

    return {get, post};
  }])
  .factory('httpInterceptor', ['$log', '$q', ($log, $q) => {
    return {
      request: config => {
        $log.log('request made....!');
        return config;
      },
      requestError: rejection => {
        return $q.reject(rejection);
      },
      response: response => {
        $log.log('response received....!');
        return response;
      },
      responseError: rejection => {
        $log.log('response error!');
        return $q.reject(rejection);
      }
    };
  }]);
