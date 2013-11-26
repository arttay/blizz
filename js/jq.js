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

$(document).ready(function(){
	var linkList = ["intro", "resume", "qualified", "contact"];

	 $(".navLinks").click(function(){
	 	var $this = $(this);
	 	var classes = this.classList;
	 	var currentLink = classes[0];
	 	$("." + currentLink +  "").addClass('currentLink');
	 	var index = linkList.indexOf(currentLink);
		if (index > -1) {
			linkList.splice(index, 1);
		}
		for(i=0; i < linkList.length; i++) {
			$("." + linkList[i] + "").removeClass("currentLink");
		}
		linkList.push(currentLink);
		/*
			this small click function addds a class to the clicked 
			item(or rather all items with that class) and removes 
			the class from all items when another item with the class 
			nav linkes is clicked
		*/
	 });
});