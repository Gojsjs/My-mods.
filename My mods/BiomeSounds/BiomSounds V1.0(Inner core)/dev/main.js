//сообщение ВНИЗУ ЭКРАНА при входе в игру
alert("BiomeSounds PE by Gojsjs(V1.0)");

//сообщение в чате при входе на мир
Callback.addCallback("LevelLoaded", function(){ 
Game.message(ChatColor.BLUE + "BiomeSounds PE by Gojsjs(V1.0)");//не ну а че пусть знают с какими модами играют))))
});

var Leave = null;
var Oceans = null;
var Ocean = [];
var Leaves = [];

function StopAllOceanSounds() {
	for(var i in Ocean) {
		var SP = Ocean[i];
		try {
			if(SP.sound.isPlaying()) {
				SP.sound.stop()
			};
			SP.sound.release()
		} catch(e) {}
	};
	Ocean = []
}

function StopAllLeavesSounds() {
	for(var i in Leaves) {
		var SP = Leaves[i];
		try {
			if(SP.sound.isPlaying()) {
				SP.sound.stop()
			};
			SP.sound.release()
		} catch(e) {}
	};
	Leaves = []
}

function PlaySongVarFile(name, format, vaar) {
	try {
		var media = null;
		for(var i in vaar){
			var SP = vaar[i];
			if(!SP.isPlaying()) {
				media = SP;
				break;
			}
		}
		if(media == null) {
			media = new android.media.MediaPlayer();
			Ocean.push(media);
		}
		media.reset();
		media.setDataSource(__dir__ + "res/sounds/"+name+format);
		media.prepare();
		media.start();
		return media;
	} catch(err) {}
	return media;
}

Callback.addCallback("NativeCommand", function (str) {
if(str=="/stop"){
StopAllOceanSounds();
StopAllLeavesSounds();
}
});

Callback.addCallback("tick", function(){	if (World.getThreadTime() % 4 == 0){
var pos = Player.getPosition();
if ((((World.getBiome(pos.x, pos.z)==0) || (World.getBiome(pos.x, pos.z)==24))&&(Oceans !== 1))&&(pos.y)<=70){
PlaySongVarFile("ocean_1", ".ogg", Ocean);
Oceans = 1;
}
if (((World.getBiome(pos.x, pos.z)!==0)&&(World.getBiome(pos.x, pos.z)!==24))&&(Oceans == 1)){
Oceans = null;
}
if(Oceans !== 1){
StopAllOceanSounds();
}
if ((((World.getBiome(pos.x, pos.z)==4) || (World.getBiome(pos.x, pos.z)==5) || (World.getBiome(pos.x, pos.z)==21) || (World.getBiome(pos.x, pos.z)==27) || (World.getBiome(pos.x, pos.z)==29) || (World.getBiome(pos.x, pos.z)==32))&&(Leave !== 1))&&(pos.y>=63 && pos.y<=90)){
PlaySongVarFile("jungle_1", ".ogg", Leaves);
Leave = 1;
}
if (((World.getBiome(pos.x, pos.z)!==4)&&(World.getBiome(pos.x, pos.z)!==5)&&(World.getBiome(pos.x, pos.z)!==21)&&(World.getBiome(pos.x, pos.z)!==27)&&(World.getBiome(pos.x, pos.z)!==29)&&(World.getBiome(pos.x, pos.z)!==32))&&(Leave == 1)){
Leave = null;
}
if(Leave !== 1){
StopAllLeavesSounds();
}
}
});

Callback.addCallback("LevelLeft", function(){
StopAllOceanSounds();
StopAllLeavesSounds();
});