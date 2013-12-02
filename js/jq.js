/*if no index of, from Moz dev network*/
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement , fromIndex) {
    var i,
        pivot = (fromIndex) ? fromIndex : 0,
        length;

    if (!this) {
      throw new TypeError();
    }

    length = this.length;

    if (length === 0 || pivot >= length) {
      return -1;
    }

    if (pivot < 0) {
      pivot = length - Math.abs(pivot);
    }

    for (i = pivot; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

jQuery.noConflict();
jQuery(document).ready(function(){
	var link = document.location.href.split('/');
	
		if(link[5].length != 0) {
			console.log(link[5]);
			jQuery("." + link[5] + "").addClass("currentLink");
			jQuery(".intro").removeClass("currentLink");
		}
		else {
			console.log(link[5]);
		}
	var linkList = ["intro", "why", "resume", "qualified", "contact"];

	 jQuery(".navLinks").click(function(){
	 	

	 	var classes = this.classList;
	 	var currentLink = classes[0];
	 	jQuery("." + currentLink +  "").addClass('currentLink');
	 	var index = linkList.indexOf(currentLink);
		if (index > -1) {
			linkList.splice(index, 1);
		}
		for(i=0; i < linkList.length; i++) {
			jQuery("." + linkList[i] + "").removeClass("currentLink");
		}
		linkList.push(currentLink);
	



		/*
			this small click function addds a class to the clicked 
			item(or rather all items with that class) and removes 
			the class from all items when another item with the class 
			nav linkes is clicked

			^_^
		*/
	 });//end click
});