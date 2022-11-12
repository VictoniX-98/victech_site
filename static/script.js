var wallpaper = document.getElementById('wallpaper');
const image_name = ['wallpaper1', 'wallpaper2', 'wallpaper3', 'wallpaper4', 'wallpaper5']
var count_img = 0;

window.setInterval(function(){
    wallpaper.src="static/images/"+ image_name[count_img] +".png";
    count_img++;
    if(count_img > 4){ count_img = 0;}
}, 20000);

// var preloader = document.getElementById('preloader');
// var counter = 0;

// window.onload = function(){
//     var fade_effect = setInterval(function(){
//         if(!preloader.style.opacity){
//             preloader.style.opacity = 1;
//         }

//         if(preloader.style.opacity > 0){
//             counter += 0.1;
//             if(counter > 1){
//                 preloader.style.opacity = 0;
//             }
//         }else{
//             clearInterval(fade_effect);
//         }
//     }, 200);
// };
