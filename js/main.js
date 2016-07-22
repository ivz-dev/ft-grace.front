$(document).ready(function() {

  var thum_url = ['http://img.joinfo.ua/i/2016/07/150x117/5790b4906849f.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b4924a3b8.jpeg','http://img.joinfo.ua/i/2016/07/150x117/5790b491bb4c8.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b4915d812.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b48fe3fe1.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b4946dfa4.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b493de3c5.jpg','http://img.joinfo.ua/i/2016/07/150x117/5790b49352c3a.jpeg','http://img.joinfo.ua/i/2016/07/150x117/5790b492c0a5f.jpeg','http://img.joinfo.ua/i/2016/07/150x117/5790b48f6d659.jpeg'];
  var big_url = ['http://img.joinfo.ua/i/2016/07/5790b4906849f.jpg','http://img.joinfo.ua/i/2016/07/5790b4924a3b8.jpeg','http://img.joinfo.ua/i/2016/07/5790b491bb4c8.jpg','http://img.joinfo.ua/i/2016/07/5790b4915d812.jpg','http://img.joinfo.ua/i/2016/07/5790b48fe3fe1.jpg','http://img.joinfo.ua/i/2016/07/5790b4946dfa4.jpg','http://img.joinfo.ua/i/2016/07/5790b493de3c5.jpg','http://img.joinfo.ua/i/2016/07/5790b49352c3a.jpeg','http://img.joinfo.ua/i/2016/07/5790b492c0a5f.jpeg','http://img.joinfo.ua/i/2016/07/5790b48f6d659.jpeg'];
  var img_title = ['Title1','Title2','Title3','Title4','Title5'];
  var img_descr = ['сли вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.','Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.','Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает','Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.','Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'];

  var current_img = 0;

  show_thumb(0);
  show_current(current_img);

function show_current(number){ //Функция для отображения активного изображения (полный размер)
  $(".current-img img.current").attr("src", big_url[number]);
}

function show_thumb(number){ //Функция для прокрутки списка миниатюр (вправо), и смены активного
  for(var i=0; i<5; i++){
    if (i+number>=thum_url.length) {
      $(".thumb-list li img").eq(i).attr("src", thum_url[(i+number) - thum_url.length]);
    }
    else{
      $(".thumb-list li img").eq(i).attr("src", thum_url[i+number]);
    }
  }
  show_current(number);
}

function init_lightbox(number){ // Отркыть лайтбокс (на весь экран)
  $(".slider-overlay").css("display", "table");
  show_img_lightbox(number);
}

function show_img_lightbox(number){ ///Функция для отображения активного изображения в лайтбоксе 
 $('#img-wrapper img').attr("src", big_url[number]);

 /* Проверка на наличии названия фотографии */
 if(!img_title[number] || img_title[number]==''){
   $(".img-inf .img-title").html('');
 }
 else{
  $(".img-inf .img-title").html(img_title[number]);
 }

 /* Проверка на наличии описания фотографии */

 if(!img_descr[number] || img_descr[number]==''){
   $(".img-inf .img-descr").html('');
 }
 else{
  $(".img-inf .img-descr").html(img_descr[number]);
 }
}


$(".thumb-list li").click(function(){ 

});

$(".pr-right").click(function(){ //Прокрутить миниатюры вправо
  current_img ++;
  if (current_img>=thum_url.length) {
    current_img=0;
  }
  show_thumb(current_img);
  

});

$(".pr-left").click(function(){ //Прокрутить миниатюры влево
  if (current_img<=0) {
    current_img=thum_url.length-1;
  }
  else{
    current_img --;
  }
  show_thumb(current_img);

});

$(".gallery-close").click(function(){
 $(".slider-overlay").css("display", "none");
})


$(".gall-overlay").click(function(){
  init_lightbox(current_img);
})

$(".count .coun").html(thum_url.length);

$('.right-butt').click(function(){

  if (current_img==big_url.length-1) {
    current_img=0;
  }
  else{
    current_img++;
  }
  show_img_lightbox(current_img);

  $(".count .curr").html(current_img+1);
});


$('.left-butt').click(function(){

 if (current_img==0) {
  current_img=big_url.length-1;
}
else{
  current_img--;
}
show_img_lightbox(current_img);
$(".count .curr").html(current_img+1);
}); 





});