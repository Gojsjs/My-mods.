Callback.addCallback("tick", function(){	
var pos = Player.getPosition();
if(((((World.getBlockID(pos.x+1,pos.y-2,pos.z)==10)||World.getBlockID(pos.x+1,pos.y-2,pos.z)==11))&&(World.getBlockID(pos.x+1,pos.y-1,pos.z)==0))||((((World.getBlockID(pos.x-1,pos.y-2,pos.z)==10)||World.getBlockID(pos.x-1,pos.y-2,pos.z)==11))&&(World.getBlockID(pos.x-1,pos.y-1,pos.z)==0))||((((World.getBlockID(pos.x,pos.y-2,pos.z+1)==10)||World.getBlockID(pos.x,pos.y-2,pos.z+1)==11))&&(World.getBlockID(pos.x,pos.y-1,pos.z+1)==0))||((((World.getBlockID(pos.x,pos.y-2,pos.z-1)==10)||World.getBlockID(pos.x,pos.y-2,pos.z-1)==11))&&(World.getBlockID(pos.x,pos.y-1,pos.z-1)==0)))
{
Entity.setFire(Player.get(), 100);
}
});