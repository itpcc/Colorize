javascript: (function () { 
  var elem = document.querySelectorAll(["body","html","div","section","header","footer","img"]); 
  for( index=0; index < elem.length; index++ ) {
       removeGrayscale(elem[index]);
  }
  if(document.location.origin == "https://www.pptvhd36.com"){
  	var elem = document.querySelectorAll([".js-player",".jw-media"]); 
	for( index=0; index < elem.length; index++ ) {
	    elem[index].style.setProperty("filter", "saturate(4)", "important");
	}
  }

  function removeGrayscale( element ){  
	  var filter = window.getComputedStyle(element,null).getPropertyValue("filter");
	  if(filter.startsWith('grayscale')){
		element.style.setProperty("filter", "none", "important")
	  }
  }
}());
