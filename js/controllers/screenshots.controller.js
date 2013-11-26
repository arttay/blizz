
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
		console.log($scope);
	}//end lgithbox
	$scope.alert = function($scope) {
		alert("f");

	}
	


	$scope.lightBolt = false;
	console.log($scope.lightBolt);

	$scope.lightBox = lightBoxImg[0];
	$scope.shots = screenShots[0];

	console.log($scope.lightBox.large);
}