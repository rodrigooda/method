/**
 * @ngdoc function
 * @name methodApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the methodApp
 */

angular.module('Volusion.controllers')
	.controller('FooterCtrl', ['$scope', 'translate', 'themeSettings', 'ContentMgr',
		function ($scope, translate, themeSettings, ContentMgr) {
			'use strict';

			$scope.$watch(
				function () {
					return ContentMgr.getFooterState();
				},
				function (state) {
					$scope.footerState = state;
				}, true);
		}]);
