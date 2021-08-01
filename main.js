var canvas = new fabric.Canvas('myCanvas');

BirthdayImage_width=30;
BirthdayImage_height=30;

var BirthdayImage_object="";
 

var x= document.getElementById("myAudio");

 function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){
        BirthdayImage_object=Img;

        BirthdayImage_object.scaleToWidth(BirthdayImage_width);
        BirthdayImage_object.scaleToHeight(BirthdayImage_height);
        BirthdayImage_object.set({
            top:BirthdayImage_y,
            left:BirthdayImage_x
        });
        canvas.add(BirthdayImage_object);
    });
}

function playSound(){
	x.play();
}
