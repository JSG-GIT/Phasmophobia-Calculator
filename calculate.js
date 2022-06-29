var toTrinary = function(n){ return n.toString(3) };
var checkDeck = function(n){
	var deck = n;
  var P_total = 0;
  var P = 0;
  var dead = false;
	for(var n=0;n<10;n++){
  	var card = deck.charAt(n);
    if( card == 2 )
		{
    	if( P > 0 ){ P -= 1; }
      else{ dead = true; }
    }
    if( (card == 1) && ( dead === false) )
			{ P_total++; P++ }
  }
  return(P_total > 1);
}

var configurations = [];
var chances = [];

for(var i=0;i<Math.pow(3,10);i++){
	var temp = toTrinary(i);
	var n = 10 - temp.length;
  for(var j=0;j<n;j++){ temp = "0" + temp; }
  configurations[i] = temp;
  var chance = 1;
  for(var n=0;n<10;n++){
  	if(temp.charAt(n) == 0){ chance *= (1 - (0.03*(5/6))); }
    if(temp.charAt(n) == 1){ chance *= (0.02*(5/6)); }
    if(temp.charAt(n) == 2){ chance *= (0.01*(5/6)); }
  }
  chances[i] = chance;
}

var total = 0;

for(var i=0;i<configurations.length;i++){
	if (checkDeck(configurations[i])){ total += chances[i];}
}

console.log(1/total);
