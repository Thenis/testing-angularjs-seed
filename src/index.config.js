export default function ($locationProvider, $routeProvider) {
  'ngInject';
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider

    .when('/', {
      template: '<home-page></home-page>'
    })
    .when('/:test', {
      template: '<home-page></home-page>'
    })

    .otherwise('/');
}