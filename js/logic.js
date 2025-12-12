//Переменные:
const interface = document.getElementById('interface');
const start_screen = document.getElementById('start-menu');
const basic_screen = document.getElementById('basic-menu');
const FastMenu = document.getElementById('fast-menu')
const fm_sw = document.querySelector('.fm-sw');
const wifi_show = document.querySelector('.wifi-show');
const sim_info = document.querySelector('.esim');
const dyn_island = document.querySelector('.island');
const island_mi = document.querySelector('.island_mi');
const app_setting = document.querySelector('.setting');
const openapp = document.querySelector('.openapp');

var sim_name = 'eSBA';
var url_music = './local_music/daydream.mp3';
var music_image = './local_music/daydream_i.jpg';


isActivate = false;
isMenu = false;
let date = new Date(); 
let OnFmenu = false;
isWiFi = false;
isBluet = false;
isAirplaneMode = false;


//Регистрация свитчей:
   isSwitch_1 = false; //Свитч режим полета
   isSwitch_2 = false; //Свитч WiFi

updateTime();
setInterval(updateTime, 60000);
GetSwitch(cases=2, data=0)

//Функции:
function OnPhone(){
    interface.classList.add('active');
    isActivate = true;
    ClockMenu();
    dyn_island.style.opacity = '1';
}

function OffPhone(){
    interface.classList.remove('active');
    isActivate = false;
    OnFmenu = true;
    OnOffFastMenu();
;
    dyn_island.style.opacity = '0';
}

function OnOffButton(){
    if(isActivate){
        OffPhone();
    }
    else{
        OnPhone();
    }
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    if (timeElement) {
        timeElement.textContent = currentTime;
    }

    if(timeElement2){
        timeElement2.textContent = currentTime;
    }
}

function OpenMenu(){
    if(isMenu){
    }
    else{
        start_screen.classList.remove('visible');
        start_screen.classList.add('hidden');
        
        
        setTimeout(() => {
            start_screen.style.visibility = 'hidden';
            
            basic_screen.style.visibility = 'visible';
            
            setTimeout(() => {
                basic_screen.classList.remove('hidden');
                basic_screen.classList.add('visible');
            }, 50);
            
            isMenu = true;
        }, 200);
    }
}

function ClockMenu(){
    basic_screen.classList.remove('visible');
    basic_screen.classList.add('hidden');
    
    setTimeout(() => {
        basic_screen.style.visibility = 'hidden';
        start_screen.style.visibility = 'visible';
        
        setTimeout(() => {
            start_screen.classList.remove('hidden');
            start_screen.classList.add('visible');
        }, 50);
        
        isMenu = false;
    }, 200);
}

function toggleAirplane() {
    const airplaneBtn = document.querySelector('.b-poleta');
    const wifiBtn = document.querySelector('.b-wifi');
    const bluetoothBtn = document.querySelector('.b-bluetz');
    const WifiOne = document.querySelector('.signal-info')
    const VpnOne = document.querySelector('.fst-vpn')
    const ConnectToPlane = document.querySelector('.signal1')
    
    isAirplaneMode = !isAirplaneMode;
    
    if (isAirplaneMode) {

        airplaneBtn.style.transition = 'all 0.5s ease';
        wifiBtn.style.transition = 'all 0.5s ease';
        bluetoothBtn.style.transition = 'all 0.5s ease';

        airplaneBtn.style.background = 'rgba(255, 174, 68, 0.79)';
        wifiBtn.style.background = 'rgba(226, 226, 226, 0.233)';
        bluetoothBtn.style.background = 'rgba(226, 226, 226, 0.233)';

        WifiOne.style.transition = 'all 0.5s ease';
        VpnOne.style.transition = 'all 0.5s ease';
        ConnectToPlane.style.transition = 'all 0.5s ease'; 

        WifiOne.textContent = '';
        VpnOne.style.opacity = '0';
        ConnectToPlane.innerHTML = '<i class="fa-solid fa-plane"></i>';
        wifi_show.innerHTML = '<i class="fa-solid fa-plane"></i>';
        sim_info.textContent = '';

        GetSwitch(cases=1, data=1);

    } else {

        airplaneBtn.style.transition = 'all 0.5s ease'
        wifiBtn.style.transition = 'all 0.5s ease';
        bluetoothBtn.style.transition = 'all 0.5s ease';

        airplaneBtn.style.background = 'rgba(226, 226, 226, 0.233)';
        wifiBtn.style.background = 'rgba(8, 144, 255, 0.788)';
        bluetoothBtn.style.background = 'rgba(226, 226, 226, 0.233)';

        ConnectToPlane.style.transition = 'all 0.5s ease'; 
        ConnectToPlane.style.transform = 'translateX(50px)';     
        WifiOne.style.transition = 'all 0.5s ease';
        VpnOne.style.transition = 'all 0.5s ease';
        wifi_show.innerHTML = '<i class="fa-solid fa-wifi"></i>';
        sim_info.textContent = sim_name;

       setTimeout(() => {
        ConnectToPlane.style.transform = 'translateX(0px)';  
        WifiOne.innerHTML = 'eSBA <i class="fa-solid fa-wifi"></i>';
        VpnOne.style.opacity = '1';
        ConnectToPlane.innerHTML = '<i class="fa-solid fa-signal"></i>';
       }, 250);

        GetSwitch(cases=1, data=1);
    }
}

function OnOffFastMenu(){
    if (OnFmenu) {

        OnFmenu = false;
        fm_sw.style.transform = 'translateY(-300px)';

        setTimeout(() => {
         FastMenu.style.opacity = '0';
         FastMenu.style.pointerEvents = 'none' ; 
        }, 300);
    } else {

        OnFmenu = true;
        FastMenu.style.opacity = '1';
        FastMenu.style.pointerEvents = 'auto';

        setTimeout(() => {
            fm_sw.style.transform = 'translateY(0px)';
        }, 150);
    }
}

function animateWaves() {
  const bars = document.querySelectorAll('.wave-bar');
  
  bars.forEach(bar => {

    const randomHeight = Math.random() * 15 + 5;
    bar.style.height = randomHeight + 'px';
  });
}

setInterval(animateWaves, 200);

function stopWaves() {
  const bars = document.querySelectorAll('.wave-bar');
  bars.forEach(bar => {
    bar.style.height = '5px'; 
  });
}

isAudio = false;
var audio_song = null; 
const fm_audiobt = document.querySelector('.fm-btplay');

function PlayOffMusic(){

  if (isAudio){
    audio_song.pause();
    isAudio = false;
    fm_audiobt.innerHTML = '<i class="fa-solid fa-play"></i>';
    dyn_island.style.width = '80px';
    dyn_island.style.left = '35%';
    island_mi.style.opacity = '0';
    island_mi.src = './local_music/basic_icons.jpg';
    stopWaves();
  }
  else{
    audio_song = new Audio(url_music);
    audio_song.play();  
    isAudio = true;
    fm_audiobt.innerHTML = '<i class="fa-solid fa-pause"></i>';
    dyn_island.style.width = '120px';
    dyn_island.style.left = '28%';
    island_mi.src = music_image;
    island_mi.style.opacity = '1';

    audio_song.play();
    setInterval(animateWaves, 200);
  }
 
}

function OffApp(){
    app_setting.style.transform = 'scale(0.05)';

    setTimeout(() => {
       app_setting.style.opacity = '0';
       app_setting.style.pointerEvents = 'none';
       openapp.style.opacity = '0';
       openapp.style.pointerEvents = 'none';
    }, 250);
}

function StartApp(App){
    if(App == 1){
      app_setting.style.transform = 'scale(1)';

      setTimeout(() => {
         app_setting.style.opacity = '1';
         app_setting.style.pointerEvents = 'auto';
         openapp.style.opacity = '1';
         openapp.style.pointerEvents = 'auto';
      }, 150);
    }
}

//Логика свитчей:

function GetSwitch(cases, data=0){
 const Sswitch = document.getElementById('switch_'+cases);
 const switch_slider = document.getElementById('switch-slider_'+cases);

 if(cases == 1){ //Режим полета в настройках
   if(eval('isSwitch_' + cases) == false){

    switch_slider.style.background = 'rgba(255, 255, 255, 0.04)';
    switch_slider.style.backdropFilter = 'blur(1px)';
    switch_slider.style.transform = 'scale(1.8)';
    switch_slider.style.left = '19px';
    Sswitch.style.background = 'rgb(101, 209, 68)';

    if(data == 0){
      toggleAirplane();
    }

    setTimeout(() => {
       switch_slider.style.background = '#ffffff';
       switch_slider.style.backdropFilter = 'blur(0px)';
       switch_slider.style.transform = 'scale(1)';
    }, 300);

    eval('isSwitch_' + cases + ' = true');
   }
   else if(eval('isSwitch_' + cases) == true){
    switch_slider.style.background = 'rgba(255, 255, 255, 0.04)';
    switch_slider.style.backdropFilter = 'blur(1px)';
    switch_slider.style.transform = 'scale(1.8)';
    switch_slider.style.left = '3px';
    Sswitch.style.background = 'rgba(255, 255, 255, 0.295)';

    if(data == 0){
      toggleAirplane();
    }
     
    setTimeout(() => {
       switch_slider.style.background = '#ffffff';
       switch_slider.style.backdropFilter = 'blur(0px)';
       switch_slider.style.transform = 'scale(1)';
    }, 300);

    eval('isSwitch_' + cases + ' = false'); 
   }
 }
 else if(cases == 2){ //WiFi настройка 
    if(isAirplaneMode == true){
       return;
    }
    if(eval('isSwitch_' + cases) == false){

    switch_slider.style.background = 'rgba(255, 255, 255, 0.04)';
    switch_slider.style.backdropFilter = 'blur(1px)';
    switch_slider.style.transform = 'scale(1.8)';
    switch_slider.style.left = '19px';
    Sswitch.style.background = 'rgb(101, 209, 68)';

    if(data == 0){
      OnOffWifiBLUZ(data=1);
    }
    else if(data == 1){
        eval('isSwitch_' + cases + ' = true');
        GetSwitch(cases=2, data=0);
    }

    setTimeout(() => {
       switch_slider.style.background = '#ffffff';
       switch_slider.style.backdropFilter = 'blur(0px)';
       switch_slider.style.transform = 'scale(1)';
    }, 300);

    eval('isSwitch_' + cases + ' = true');
   }
   else if(eval('isSwitch_' + cases) == true){
    switch_slider.style.background = 'rgba(255, 255, 255, 0.04)';
    switch_slider.style.backdropFilter = 'blur(1px)';
    switch_slider.style.transform = 'scale(1.8)';
    switch_slider.style.left = '3px';
    Sswitch.style.background = 'rgba(255, 255, 255, 0.295)';

    if(data == 0){
      OnOffWifiBLUZ(data=1);
    }
    else if(data == 1){
        eval('isSwitch_' + cases + ' = true');
        GetSwitch(cases=2, data=0);
    }
     
    setTimeout(() => {
       switch_slider.style.background = '#ffffff';
       switch_slider.style.backdropFilter = 'blur(0px)';
       switch_slider.style.transform = 'scale(1)';
    }, 300);

    eval('isSwitch_' + cases + ' = false'); 
   }
 }
}


function OnOffWifiBLUZ(data){

 const wifiBtn = document.querySelector('.b-wifi');
 const bluetoothBtn = document.querySelector('.b-bluetz');
 const WifiOne = document.querySelector('.signal-info');
 const WifiShow = document.querySelector('.wifi-show');
 const UpElements = document.querySelector('.up-element');

 if(isAirplaneMode == true){
   return;
 }
 if(data == 1){ //WifiOnOff
    if(isWiFi == true){
        WifiOne.style.transition = 'all 0.5s ease';
        wifiBtn.style.transition = 'all 0.5s ease';
        UpElements.style.left = '204px';
        WifiShow.innerHTML = 'LTE';
        WifiOne.innerHTML = sim_name + ' LTE';
        isWiFi = false;
        wifiBtn.style.background = 'rgba(226, 226, 226, 0.233)'; 
    }
    else if(isWiFi == false){
        WifiOne.style.transition = 'all 0.5s ease';
        wifiBtn.style.transition = 'all 0.5s ease';
        UpElements.style.left = '210px';
        WifiShow.innerHTML = '<i class="fa-solid fa-wifi"></i>';
        WifiOne.innerHTML = sim_name + ' <i class="fa-solid fa-wifi"></i>';
        isWiFi = true;
        wifiBtn.style.background = 'rgba(8, 144, 255, 0.788)'; 
    }
 }
}