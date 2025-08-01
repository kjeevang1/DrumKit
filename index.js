var num = document.querySelectorAll(".drum").length;

for(var i = 0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
    });
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
});


function makeSound(key){
    switch(key){
            case 'w':
                var audio = new Audio("./Audio/audio1.mp3");
                audio.play();
                break;
            case 'a':
                var audio = new Audio("./Audio/audio2.mp3");
                audio.play();
                break;
            case 's':
                var audio = new Audio("./Audio/audio3.mp3");
                audio.play();
                break;
            case 'd':
                var audio = new Audio("./Audio/audio4.mp3");
                audio.play();
                break;
            case 'j':
                var audio = new Audio("./Audio/audio5.mp3");
                audio.play();
                break;
            case 'k':
                var audio = new Audio("./Audio/audio6.mp3");
                audio.play();
                break;
            case 'l':
                var audio = new Audio("./Audio/audio7.mp3");
                audio.play();
                break;
            default:
                console.log(buttonInnerHtml);
        }
}