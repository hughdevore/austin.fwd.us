angular.module('app.controllers', [])
.controller('homeCtrl', function($scope, $state,$interval) {
    
     $scope.intcomma = function(number) { return parseInt(number, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
     $scope.now = Math.round(new Date().getTime()/1000.0)

     // Calculate dates
     $scope.prevTime = new Date('Dec 3 2014, 00:00:00');
     $scope.thisTime = new Date();
     $scope.diff = $scope.thisTime.getTime() - $scope.prevTime.getTime();
     $scope.seconds = ($scope.diff/ (1000));

     // Calculate time intervals
     $scope.numdays = Math.floor(($scope.seconds % 31554000000) / 86400); 
     $scope.numhours = Math.floor((($scope.seconds % 31554000000) % 86400) / 3600);
     $scope.numminutes = Math.floor(((($scope.seconds % 31554000000) % 86400) % 3600) / 60);
     $scope.numseconds = Math.floor(((($scope.seconds % 31554000000) % 86400) % 3600));

     // Calculate TX rate
     $scope.MSrate = .002143582;
     $scope.increment = ($scope.MSrate*100);
     $scope.total = ($scope.diff*$scope.MSrate);
     $scope.commatotal = $scope.intcomma($scope.total);
    
     // TX interval growth function
     $interval(function () {
         $scope.total += $scope.increment;
         $scope.container = $scope.intcomma($scope.total);
     }, 100);
    
    // Calculate National rate
     $scope.MSrateNational = .42824074;
     $scope.incrementNational = ($scope.MSrateNational*100);
     $scope.totalNational = ($scope.diff*$scope.MSrateNational);
    
     // Calculate National growth function
     $interval(function () {
         $scope.totalNational += $scope.incrementNational;
         $scope.containerNational = $scope.intcomma($scope.totalNational);
     }, 100);
    
    $scope.randInt = function(min, max) {
         return Math.floor(Math.random() * (max-min + 1) + min);
       }
    
    $scope.goHome = function() {
		$state.go('home');
	};
})
.controller('successCtrl', function($scope, $state) {
	$scope.goSuccess = function() {
		$state.go('success');
	};
});
