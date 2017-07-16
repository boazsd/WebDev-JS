(function(){
  'use strict';
  var gem = [{ name: 'Azurite', price: 2.95 },
  { name: 'Boaz', price: 3.95 },
{ name: 'Shirley', price: 4.95 },
{ name: 'Roy', price: 5.95 },
{ name: 'Eitan', price: 6.95 }];
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function () {
    this.product = gem;
  });
  })();