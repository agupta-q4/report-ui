import angular from 'angular';
import {builder} from './components/report-builder';
import {summary} from './components/report-summary';
import {serviceModule} from './service';
export const reportModule = 'reports';

angular
  .module(reportModule, [serviceModule])
  .component('reportBuilder', builder)
  .component('reportSummary', summary);
