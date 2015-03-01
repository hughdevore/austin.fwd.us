angular.module('app.controllers', [])
.controller('homeCtrl', function($scope, $state) {
	$scope.goHome = function() {
		$state.go('home');
	};
    
//     intcomma = function(number) { return parseInt(number, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); };

//     var now = Math.round(new Date().getTime()/1000.0)

//     var prevTime = new Date('Jun 28, 2013, 00:00:00');
//     var thisTime = new Date();
//     var diff = thisTime.getTime() - prevTime.getTime();
//     var seconds = (diff/ (1000));

//     // this is for the text part
//     var numdays = Math.floor((seconds % 31554000000) / 86400); 

//     var numhours = Math.floor(((seconds % 31554000000) % 86400) / 3600);

//     var numminutes = Math.floor((((seconds % 31554000000) % 86400) % 3600) / 60);

//     var numseconds = Math.floor((((seconds % 31554000000) % 86400) % 3600));

//     var MSrate = .42808333;
//     var increment = (MSrate*100);
//     var total = (diff*MSrate);
//     var commatotal = intcomma(total);

//     $scope.container = "hereeerrrreeeee";
//     setInterval(function () {
//         total+= increment;
// //        $scope.container = intcomma(total);
// //        container.innerHTML = "<h2>$" + intcomma(total) + "</h2>";
//     }, 100);

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
