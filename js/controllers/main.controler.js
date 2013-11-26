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



function resume($scope) {
	var compInfo = $scope.compInfo = [
		{
			posComp: 'posComp',
			posTitle: 'posTitle',
			posDates: 'dates',
			respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
			accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
			link: '#' 
		},
		{
			posComp: 'posComp',
		 	posTitle: 'posTitleT',
		  	posDates: 'datesT',
		   	respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		   	accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		     	link: '#' 
		},
		{
			posComp: 'posComp',
		 	posTitle: 'posTitleT',
		  	posDates: 'datesT',
		   	respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		   	accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		     	link: '#' 
		},
		{
			posComp: 'posComp',
			posTitle: 'posTitle',
			posDates: 'dates',
			respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
			accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
			link: '#' 
		},
		{
			posComp: 'posComp',
		 	posTitle: 'posTitleT',
		  	posDates: 'datesT',
		   	respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		   	accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		     	link: '#' 
		},
		{
			posComp: 'posComp',
		 	posTitle: 'posTitleT',
		  	posDates: 'datesT',
		   	respons: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		   	accomp: 'has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ip',
		     	link: '#' 
		}

	];

	$scope.posInfo = compInfo;
	//console.log($scope.posInfo)
}//end resume controller
function qualif($scope) {
	var ask = $scope.ask = [
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		},
		{
			what: 'ask'
		}
	];
	var have = $scope.have = [
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},
		{
			what: 'have'
		},

	];
	$scope.wAsk = ask;
	$scope.wHave = have;
}





