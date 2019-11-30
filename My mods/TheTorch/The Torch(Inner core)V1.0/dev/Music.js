Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==50){ 
Entity.setFire(victim, 60);
 }
});