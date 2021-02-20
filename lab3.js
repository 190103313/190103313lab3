function change(element){
    var x  = element.innerHTML;
    switch(x){
      
        case "Home":
            document.getElementById("img").src="931d040c4cdadfd8d7086ffa3b143447-removebg-preview.png";
            document.getElementById("welcome").innerHTML="Home";
            document.getElementById("mainphoto").href="931d040c4cdadfd8d7086ffa3b143447-removebg-preview.png";
            document.getElementById("img").style.width="450px";
            break;
        case "About":
            document.getElementById("img").src="4bf77d6c82520e47e87417edf566bebf-removebg-preview.png";
            document.getElementById("img").style.width="450px";
            document.getElementById("par").innerHTML = "I've been baking cakes for more than 5 years. I really like baking cake. To do this I bake a cake every day and I like to see blogs dedicated to baking cakes. ";
            document.getElementById("welcome").innerHTML="About";
            document.getElementById("mainphoto").href="4bf77d6c82520e47e87417edf566bebf-removebg-preview.png";
            break;
            case "Hobby":
            document.getElementById("img").src="8e94422827e7d32d6bd9c51d96406761-removebg-preview.png";
            document.getElementById("welcome").innerHTML="Hobby";
            document.getElementById("img").style.width="350px";
            document.getElementById("par").innerHTML = "My other interest is video. I often shoot videos of my baked cakes. Later I edit it and post it in instagram. Recently, my interest in the field of mobilography has been growing."
            document.getElementById("mainphoto").href="8e94422827e7d32d6bd9c51d96406761-removebg-preview.png";
            break;
            case "Contacts":
            document.getElementById("img").src="sub-buzz-1105-1574713306-1-removebg-preview.png";
            document.getElementById("welcome").innerHTML="Contacts";
            document.getElementById("par").innerHTML = "Telephone number: +7 777 77 77 & Email: sapassweet@gmial.com";
            document.getElementById("img").style.width="350px";
            document.getElementById("mainphoto").href="sub-buzz-1105-1574713306-1-removebg-preview.png";
            break;
            
    }
}
$("a[rel='mainphoto']").mainphoto({
    maxWidth:"90%",
    maxHeight:"90%",
    opacity:"0.7",
    current: "изображение {current} из {total}"
});



function bigHeader(element){
	element.style.fontSize="35px";
}
function smallHeader(element){
	elemen.style.fontSize="27px";
}