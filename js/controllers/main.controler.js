var app = angular.module('MyApp', ['ui.bootstrap', 'ngSanitize', 'ngRoute', 'ngAnimate']);

//yay routing
app.config(function($routeProvider){
	$routeProvider.
	when("/",
		{
			templateUrl: "js/templates/intro.html"
		}
	).when("/contact",
		{
			templateUrl: "js/templates/contact.html"
		}
	).when("/qualified",
		{
			templateUrl: "js/templates/qualified.html"
		}
	).when("/resume",
		{
			templateUrl: "js/templates/resume.html"
		}
	).when("/why",
		{
			templateUrl: "js/templates/why.html"
			
		}
	).when("/video",
		{
			templateUrl: "js/templates/video.html"
		}
	);
});


app.controller("MyController", function($scope, $http, $location) {
    $scope.go = function (path) {
        $location.path(path);
    }

})//end controller mycontroller
app.controller("imgSlide", function($scope, $http){
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
	{image: 'http://lorempixel.com/550/450/', thumb: 'http://lorempixel.com/550/450/', text: 'img' },
	{image: 'http://lorempixel.com/550/450/', thumb: 'http://lorempixel.com/550/450/', text: 'img' },
	{image: 'http://lorempixel.com/550/450/', thumb: 'http://lorempixel.com/550/450/', text: 'img' }

  /*
	{image: 'images/slide1.jpg', thumb: 'images/slide1.jpg', text: 'img' },
	{image: 'images/slide2.jpg', thumb: 'images/slide2.jpg', text: 'img' },
	{image: 'images/slide3.jpg', thumb: 'images/slide3.jpg', text: 'img' },
	{image: 'images/slide4.jpg', thumb: 'images/slide4.jpg', text: 'img' }
	//{image: 'images/slide5.jpg', thumb: 'images/slide5.jpg', text: 'img' }
	//{image: 'images/slide6.jpg', thumb: 'images/slide6.jpg', text: 'img' }
*/
  ];

})


app.controller("resume", function($scope, $http){

	$http({
		method: "GET", url: 'js/controllers/data/resume.data.js'
	}).success(function(data){
		$scope.compInfo = data;
		console.log(data);

	});
})//end controller


app.controller("qualif", function($scope, $http) {
	$http({
		method: "GET", url: 'js/controllers/data/ask.data.js'
	}).success(function(data){
		$scope.wAsk = data;
		console.log(data);
	});

	$http({
		method: "GET", url: 'js/controllers/data/have.data.js'
	}).success(function(data){
		$scope.wHave = data;
	});
})//end controller

app.controller("screenShots", function($scope) {


	var screenShots = $scope.screenShots = [
		{image: 'http://lorempixel.com/100/100/', large: 'http://lorempixel.com/100/100/', thumb: 'http://lorempixel.com/100/100/', text: 'img' }
	];
	var lightBoxImg = $scope.lightBoxImg = [
		{image: 'http://lorempixel.com/100/100/', large: 'http://lorempixel.com/300/300/', thumb: 'http://lorempixel.com/100/100/', text: 'img' }
	];
	$scope.src = lightBoxImg[0].image;
	$scope.len = lightBoxImg.length;
	$scope.lightbox = function() {
		var light = $scope.lightBoxImg[0];
		$scope.src = light.large;

		
	}//end lgithbox

	$scope.lightBolt = false;
	//console.log($scope.lightBolt);

	$scope.lightBox = lightBoxImg[0];
	$scope.shots = screenShots[0];

	//console.log($scope.lightBox.large);

})//end controller








