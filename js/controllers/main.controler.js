angular.module('MyApp', ['ui.bootstrap']).

controller("MyController", function($scope) {
	$scope.updateImg = function($scope) {
		var imageToShow = 2;
		alert(imageToShow);
		return imageToShow;
		//alert("sup");
	}
	$scope.invNumber = function($scope, $num) {
		var imageToShow = 1;
		imageToShow = imageToShow + num;
		alert(imageToShow);
		

	}
	$scope.alert = function($scope, $num) {
		var tnum = $num;
		console.log(tnum);
	}


})//end controller mycontroller
function imgSlide($scope) {
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

  /*$scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/
}//end controller
//{image: '../images/slide1.jpg', text: 'slide1' },

function screenShots($scope) {
	

	var screenShots = $scope.screenShots = [
		{image: 'http://lorempixel.com/100/100/', large: 'http://lorempixel.com/100/100/', thumb: 'http://lorempixel.com/100/100/', text: 'img' }
	];
	var lightBoxImg = $scope.lightBoxImg = [
		{image: 'http://lorempixel.com/100/100/', large: 'http://lorempixel.com/300/300/', thumb: 'http://lorempixel.com/100/100/', text: 'img' }
	];
	$scope.lightbox = function($scope) {
	/*	var lightBoxImg = $scope.lightBoxImg = [
		{image: 'http://lorempixel.com/100/100/', large: 'http://lorempixel.com/300/300/', thumb: 'http://lorempixel.com/100/100/', text: 'img' }
	

	];
		var lightBol = $scope.lightBool = lightBoxImg[0];
		console.log(lightBol);*/
		$scope.lightBolt = false;
		console.log($scope.lightBolt);
	}//end lgithbox
	$scope.alert = function($scope) {
		alert("f");

	}
	


	$scope.lightBolt = false;
		console.log($scope.lightBolt);

	$scope.lightBox = lightBoxImg[0];
	$scope.shots = screenShots[0];

	console.log($scope.lightBox.large);
}//end screenshots





