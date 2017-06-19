import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngStrap from 'angular-strap';

import 'angular/angular-csp.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './index.config.js';

import home from './home-page/homeModule.js';

angular.module('main', [
  ngRoute,
  ngAnimate,
  ngStrap,
  home
])
  .config(router);

angular.bootstrap(document.documentElement, ['main']);