angular.module('app.controllers', [])
.controller('homeCtrl', function($scope, $state,$interval) {
    
     $scope.intcomma = function(number) { return parseInt(number, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); };

     $scope.now = Math.round(new Date().getTime()/1000.0)

     $scope.prevTime = new Date('Dec 3 2014, 00:00:00');
     $scope.thisTime = new Date();
     $scope.diff = $scope.thisTime.getTime() - $scope.prevTime.getTime();
     $scope.seconds = ($scope.diff/ (1000));

     // this is for the text part
     $scope.numdays = Math.floor(($scope.seconds % 31554000000) / 86400); 

     $scope.numhours = Math.floor((($scope.seconds % 31554000000) % 86400) / 3600);

     $scope.numminutes = Math.floor(((($scope.seconds % 31554000000) % 86400) % 3600) / 60);
     $scope.numseconds = Math.floor(((($scope.seconds % 31554000000) % 86400) % 3600));

     $scope.MSrate = .002143582;
     $scope.increment = ($scope.MSrate*100);
     $scope.total = ($scope.diff*$scope.MSrate);
     $scope.commatotal = $scope.intcomma($scope.total);

//     $scope.container = "hereeerrrreeeee";
     $interval(function () {
         $scope.total += $scope.increment;
         $scope.container = $scope.intcomma($scope.total);
         console.log($scope.increment);
     }, 100);
    
    $scope.goHome = function() {
		$state.go('home');
	};
    
//    $scope.container = 'test';
})
.controller('tweetCtrl', function($scope, $state) {
	$scope.goTweet = function() {
		$state.go('tweet');
	};
})
.controller('successCtrl', function($scope, $state) {
	$scope.goSuccess = function() {
		$state.go('success');
	};
});
