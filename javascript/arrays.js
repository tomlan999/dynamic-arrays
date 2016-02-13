var imageListA = [];
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	  
    output += '<div class="thumbs_block">';
	for(var i=0; i < imageListA.length; i++)
	{
		output += '<img src="' + imageListA[i] + '" />';
	}
    output += '</div>';
	
    output += '<div class="thumbs_block">';
	for(var j=0; j < imageListB.length; j++)
	{
		output += '<img src="' + imageListB[j] + '" />';
	}
    output += '</div>';

    output += '<div class="thumbs_block">';
	for(var k=0; k < imageListC.length; k++)
	{
		output += '<img src="' + imageListC[k] + '" />';
	}
    output += '</div>';
  
	thumbsDiv.innerHTML = output;
	
};

window.onload = function()
{
	buildThumbnails();
};

var myThumbDiv = document.getElementById("thumbs"); //hook onto the thumbs div

var purchasedImages = []; //create a new array to hold the purchased images

myThumbDiv.addEventListener("click", onImageClick, false); // when someone clicks the DIV with id="thumbs", fire function onImageClick

// create the function referenced in the function handler onImageClick
function onImageClick(evt)
{

  var onlyPath = evt.target.getAttribute("src"); //get the src attribute of the clicked image
    
  var imageIndex = imageListA.indexOf(onlyPath); //search the array for the src attribute in onlyPath and return the index position of the clicked image
  
  if(imageIndex != -1) {
    var selectedImage = imageListA.splice(imageIndex, 1);   // remove the element clicked on from imageListA array and save the image path to the variable selectedImage

    purchasedImages.push(selectedImage); // add clicked image to purchased array
  
  };
  update_shopping_cart(); // run function to build the shopping cart div with purchased images
  
  buildThumbnails(); // rerun buildThumbnails function to update the thumbs div without the image that was moved to the shopping cart
  
  function update_shopping_cart() //build the shopping cart div
  {
    var cart = document.getElementById("shopping_cart_div");
    
    var output = "";
    
    for(var i=0; i <= purchasedImages.length -1; i++)
    {
      output += '<img src="' + purchasedImages[i] + '"width="70" height="50" />';
    }
    
    cart.innerHTML = output;
  
  }
  
};
