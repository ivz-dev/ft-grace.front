$(document).ready(function() {
  var img_url = ['http://img.joinfo.ua/i/2016/07/800x0/578782215f2d0.jpg', 'http://img.joinfo.ua/i/2016/07/800x0/5787822a9d3dc.jpg', 'http://img.joinfo.ua/i/2016/07/800x0/57878227d36f0.jpg', 'http://img.joinfo.ua/i/2016/07/800x0/57878228a74d1.jpg', 'http://img.joinfo.ua/i/2016/07/800x0/57878229e60d0.jpg'];
  var img_title = ['Title1','Title2','Title3','Title4','Title5'];
  var img_descr = ['сли вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.','Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.','Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает','Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.','Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'];
  var current_img = 0;

  function show_img(number){
  	$('#img-wrapper img').attr("src", img_url[number]);
  	$('.img-title').html(img_title[number]);
  	$('.img-descr').html(img_descr[number]);
  }
  show_img(0);

  $(".count .coun").html(img_url.length);

  $('.right-butt').click(function(){

  	if (current_img==img_url.length-1) {
  		current_img=0;
  	}
  	else{
  		current_img++;
  	}
  	show_img(current_img);

  	$(".count .curr").html(current_img+1);
  });

   $('.left-butt').click(function(){

  	if (current_img==0) {
  		current_img=img_url.length-1;
  	}
  	else{
  		current_img--;
  	}
  	show_img(current_img);
  	$(".count .curr").html(current_img+1);
  });


  
  

});