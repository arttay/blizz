var app = angular.module('MyApp', ['ui.bootstrap', 'ngSanitize']);


app.config(function($routeProvider){
	$routeProvider.
	when("/",
		{
			templateUrl: "js/templates/intro.html"
		}
	).
	when("/contact",
		{
			templateUrl: "js/templates/contact.html"
		}
	).
	when("/qualified",
		{
			templateUrl: "js/templates/qualified.html"
		}
	).
	when("/resume",
		{
			templateUrl: "js/templates/resume.html"
		}
	).
	when("/why",
		{
			templateUrl: "js/templates/why.html",
			
		}
	);



});


app.controller("MyController", function($scope, $http) {
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
			what: 'Expert knowledge of CSS, JavaScript, and DOM'//1
		},
		{
			what: 'Extensive experience with Ajax and JavaScript libraries'//2
		},
		{
			what: 'Experience using an MVC framework'//3
		},
		{
			what: 'Familiar with HTTP and basic networking concepts'//4
		},
		{
			what: 'Basic proficiency with Photoshop'//5
		},
		{
			what: 'Self-motivated, and able to independently identify and implement needed improvements'//6
		},
		{
			what: 'Experience authoring websites for mobile devices'//7
		},
		{
			what: 'Contributions to open-source projects or personal projects'//9
		},
		{
			what: 'Strong knowledge of object-oriented programming in languages like Java, C++, Objective-C, or equivalent'//10
		},
		{
			what: 'A passion for web development and gaming'//13
		}
	];
	var have = $scope.have = [
		{
			what: 'have'//expert css/js/dom
		},
		{
			what: "3 years with jQuery/UI5<br />~1 year with Handlesbars/Mustache/Grunt"//ajax/js libraries
		},
		{
			what: 'Kockout at polaris <br />Backbone at Target <br />Angularjs on this site!'//mvcs
		},
		{
			what: 'I have experience with several protocol; HTTP, FTP, IP4/6, SMTP and SSH'//http/networking protocals
		},
		{
			what: 'Most images on this site were edited<br /> in some small way in photoshop '//photoshop
		},
		{
			what: "I could write it all out<br />but it would be better to <a href ='https://www.google.com/'>tell you</a>"//videos
		},
		{
			what: 'My current position is solely dedicated to authoring/refactoring target mobile'//mobile stuff
		},
		{
			what: 'have'//open source/personal projects
		},
		{
			what: "I would refer to my <a href = 'https://github.com/arttay?tab=repositories' target='_blank'>github account</a> <br />for a list of my projects that used C++"//oop stuff
		},
		{
			what: 'have'//pasoin
		},

	

	];
	$scope.wAsk = ask;
	$scope.wHave = have;
}





