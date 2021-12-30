const menubtn = document.querySelector('.settings');
const menuclose = document.querySelector('.close');
const ww = document.querySelector('.ww');
const menuctn = document.querySelector('.popup_settings');
const qq = document.querySelector('.qq');




menubtn.addEventListener('click', function(){       
  menuctn.classList.toggle('active');
  ww.classList.toggle('active');
  qq.classList.toggle('active');
});







/*  menuclose.addEventListener('click', function(){       
  menuctn.classList.remove('active');
}); */



const item_sity = document.querySelector('.item_sity');
const popup_city = document.querySelector('.popup_city');
const popup_close = document.querySelector('.popup_close');

item_sity.addEventListener('click', function(){       
    popup_city.classList.add('active');
  });

  popup_close.addEventListener('click', function(){       
    popup_city.classList.remove('active');
  });


const popup_event = document.querySelector('.popup_event');
const items_event = document.querySelector('.items_event');

popup_event.addEventListener('click', function(){       
    popup_event.classList.toggle('active');
    items_event.classList.toggle('active');
});


const btn_menu_media = document.querySelector('.btn_menu_media');
const menu_media= document.querySelector('.menu_media');
const wrap_btn_menu_media = document.querySelector('.wrap_btn_menu_media');
const btn_menu_media_close = document.querySelector('.btn_menu_media_close');
const footer = document.querySelector('.footer');

btn_menu_media.addEventListener('click', function(){
  btn_menu_media_close.classList.add('active');
  menu_media.classList.toggle('active');
  footer.classList.toggle('active');
  wrap_btn_menu_media.classList.toggle('active');
  settings_media.classList.remove('active');
});

btn_menu_media_close.addEventListener('click', function(){
  wrap_btn_menu_media.classList.toggle('active');
  menu_media.classList.toggle('active');
  footer.classList.toggle('active');
  btn_menu_media_close.classList.remove('active');
});



/* const btn_settings_media = document.querySelector('.btn_settings_media');
const settings_media = document.querySelector('.settings_media');
btn_settings_media.addEventListener('click', function(){
  settings_media.classList.toggle('active');
  footer.classList.toggle('active');
}) */

const btn_settings_media = document.querySelector('.btn_settings_media');
const setting_items = document.querySelector('.setting_items');
const settings_media = document.querySelector('.settings_media');
btn_settings_media.addEventListener('click', function(){
  setting_items.classList.add('active');
  footer.classList.toggle('active');
})

setting_items.addEventListener('click', function(){
  settings_media.classList.add('active');
  setting_items.classList.remove('active');
  menu_media.classList.remove('active');
  wrap_btn_menu_media.classList.toggle('active'); 
  btn_menu_media_close.classList.remove('active'); 
})




const close_message = document.querySelector('.close_message');
const message = document.querySelector('.message');
close_message.addEventListener('click', function(){
  message.classList.toggle('active');
})




