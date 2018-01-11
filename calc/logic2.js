
  
  // HEROES BELOW
  var caeley = {
    LEVEL:30,
    HP:5,
    MP:10,
    ATK:3,
    DEF:6,
    NAME: "Caeley"
    }
  var marcus = {
    LEVEL:30,
    HP:7,
    MP:4,
    ATK:7,
    DEF:4,
    NAME: "Marcus"
    }
  var jason = {
    LEVEL:30,
    HP:4,
    MP:3,
    ATK:10,
    DEF:4,
    NAME: "Jason"
    }
    //ENEMIES BELOW
    var shel = {
    HP:5,
    MP:5,
    ATK:5,
    DEF:10,
    LEVEL:30,
    NAME: "Shel"
    }
    var amphi = {
    HP:12,
    MP:1,
    ATK:10,
    DEF:4,
    LEVEL:30,
    NAME: "Amphi"
    }
    var sine = {
    HP:3,
    MP:10,
    ATK:1,
    DEF:3,
    LEVEL:30,
    NAME: "Sine"
    }
  
// variables
var turns = 1;
var playable = [caeley, marcus, jason];
var enemies = [shel, amphi, sine];
var enemy = enemies[0];
var user = playable[1];

  
  
  // BUILDS THE CURRENT STATS
  var userSTAT = {
      HP: Math.floor(user.HP+(user.HP*user.LEVEL)),
      MP: (2 + user.MP),
      ATK: Math.floor(user.ATK+((user.ATK*user.LEVEL)/10)),
      DEF: Math.floor(user.DEF+((user.DEF*user.LEVEL)/10)),
      SKILL: Math.floor(user.LEVEL / 2)
    }

  // DISPLAYS CHANGES IN STATS UPON LEVEL UP
  function buildSTAT (){
    var incHP = Math.floor(user.HP+ (user.HP*user.LEVEL)) - userSTAT.HP;
    console.log("HP+ " + incHP);
    userSTAT.HP = Math.floor(user.HP+ (user.HP*user.LEVEL));

    var incATK = Math.floor(user.ATK+((user.ATK*user.LEVEL)/10)) - userSTAT.ATK;
    console.log("ATK+ " + incATK);
    userSTAT.ATK = Math.floor(user.ATK+((user.ATK*user.LEVEL)/10));

    var incDEF = Math.floor(user.DEF+((user.DEF*user.LEVEL)/10)) - userSTAT.DEF;
    console.log("DEF+ " + incDEF);
    userSTAT.DEF = Math.floor(user.DEF+((user.DEF*user.LEVEL)/10));

    var incSKL = Math.floor(user.LEVEL / 2) - userSTAT.SKILL;
    console.log("SKILL+ " + incSKL);
    userSTAT.DEF = Math.floor(user.LEVEL / 2);
  }

  


  console.log(user.NAME + " (Level " + user.LEVEL + ") ");
  for (var key in userSTAT) {
  console.log(key, userSTAT[key]);
  }

  var levelsGained = 0;
  
  function levelUp (){
    for (i = 0; i < levelsGained; i++){
    console.log(user.NAME + " leveled up!")
    user.LEVEL += 1;
    console.log("Level " + user.LEVEL);
    buildSTAT();
    }
    
  }
  