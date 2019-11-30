/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: Music.js

//сообщение ВНИЗУ ЭКРАНА при входе в игру
alert("NewMusic PE by Gojsjs(V1.0)");

//сообщение в чате при входе на мир
Callback.addCallback("LevelLoaded", function(){ 
	Game.message(ChatColor.BLUE + "NewMusic PE by Gojsjs(V1.0)");//не ну а че пусть знают с какими модами играют))))
});

importLib("MusicAPI","*");

Callback.addCallback("NativeCommand", function (str) {
if(str=="/song"){
PlaySong("Song", 10, ".ogg");
}
if(str=="/stop"){
	StopAllSoundPlayers();
}
});

Callback.addCallback("tick", function(){		if (World.getThreadTime() % 12000 == 0){
PlaySong("Song", 10, ".ogg");
}
});




