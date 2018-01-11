//EACH MOVE IS AN OBJECT WITH TEXT AND A VALUE
  
var knife = {
  text: "its knife",
  strength: 12,
  mpCost: 0
}
var wings = {
  text: "its wings",
  strength: 3,
  mpCost: 0
}
var peck = {
  text: "its wings",
  strength: 6,
  mpCost: 0
}

var rocks = {
  text: "rocks",
  strength: 9,
  mpCost: 0
}
var punch = {
  text: "a punch",
  strength: 12,
  mpCost: 0
}
var fireball = {
  text: "a magic fireball",
  strength: 2,
  mpCost: 1
}
var snowball = {
  text: "a magic snowball",
  strength: 2,
  mpCost: 1
}
var shockbolt = {
  text: "a shocking bolt of lightning",
  strength: 4,
  mpCost: 3
}

  // HEROES BELOW
  var caeley = {
      LEVEL:30,
      HP:5,
      MP:10,
      ATK:3,
      DEF:6,
      NAME: "Caeley",
      MOVES: ["fireball", "snowball", "shock bolt"]
      }
    var marcus = {
      LEVEL:30,
      HP:7,
      MP:4,
      ATK:7,
      DEF:4,
      NAME: "Marcus",
      MOVES: ["fists", "rocks"]
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
      var vengeance = {
      HP:12,
      MP:5,
      ATK:10,
      DEF:5,
      LEVEL:30,
      NAME: "Vengeance",
      MOVES: [knife, wings, peck]
      }
      var amphi = {
      HP:20,
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
    
  
  // variables. ENEMY AND USER DONT NEED TO BE DIFFERENT
  var turns = 1;
  var playable = [caeley, marcus, jason];
  var enemies = [shel, amphi, sine, vengeance];
  var movelist = [knife, wings, peck, rocks, punch, fireball, snowball, shockbolt];
  var enemy = enemies[3];
  var user = playable[1];
  
    
    
    // BUILDS THE CURRENT STATS. THESE TWO SHOULD BE ONE
    var userSTAT = {
        HP: Math.floor(user.HP+(user.HP*user.LEVEL)),
        MP: Math.floor(user.MP + user.LEVEL/(10-user.MP)),
        ATK: Math.floor(user.ATK+((user.ATK*user.LEVEL)/10)),
        DEF: Math.floor(user.DEF+((user.DEF*user.LEVEL)/10))
        
  
      }
      var enemySTAT = {
        HP: Math.floor(enemy.HP+(enemy.HP*enemy.LEVEL)),
        MP: (2 + enemy.MP),
        ATK: Math.floor(enemy.ATK+((enemy.ATK*enemy.LEVEL)/10)),
        DEF: Math.floor(enemy.DEF+((enemy.DEF*enemy.LEVEL)/10))
  
      }
  
    function displaySTAT () {
    console.log(user.NAME + " (Level " + user.LEVEL + ") ");
    $("#log").text(user.NAME + " (Level " + user.LEVEL + ") ")
    for (var key in userSTAT) {
    console.log(key, userSTAT[key]);
    }
    console.log("####### VS ########");
    console.log(enemy.NAME + " (Level " + enemy.LEVEL + ") ");
    for (var key in enemySTAT) {
    console.log(key, enemySTAT[key]);
    
    }
  
    }
    
    displaySTAT();
    
    
   
    var turn = 0;
    var intervalId = setInterval(function turnHandler(){
      turn++;
      console.log("######Turn "+ turn + "#########");
      aiFight();
      userFight();
      if (userSTAT.HP<=0){
        clearInterval(intervalId);
        userSTAT.HP = 0;
        console.log("Oh no! " + user.NAME + " was knocked out!");
      }
      if (enemySTAT.HP<=0){
        clearInterval(intervalId);
        enemySTAT.HP = 0;
        console.log(enemy.NAME + " was knocked out!");
        enemy.LEVEL += 1;
      }
      else {
        displayHP();
      }
      
    }, 5000);
    var damage;
    var roll;
    var crit;
    function aiFight(){
      var aiChoice = Math.floor(Math.random() * enemy.MOVES.length);
      //var power = enemy.MOVES[aiChoice].strength;
      //console.log(power);
      var attacking = enemy.MOVES[aiChoice];
      console.log(attacking.strength);
      //console.log(enemy.NAME + " attacked with " + enemy.MOVES[aiChoice] + "!");
      console.log(enemy.NAME + " attacked with " + attacking.text + "!");
      roll =  Math.floor(Math.random() * 15);
      crit = 1;
      if (roll == 0){crit = 2;console.log("WOW!");}
      else{crit = 1;}
      //console.log (roll);
      damage = (Math.floor(((7 * enemy.ATK)-((userSTAT.DEF)/2)) * ((100-roll)/100)))*crit;
      userSTAT.HP -= damage;
      console.log(user.NAME + " took " + damage + " damage!")
    }
    function userFight(){
      var choice = 1;
      console.log(user.NAME + " attacked with " + user.MOVES[choice] + "!");
      roll =  Math.floor(Math.random() * 15);
      crit = 1;
      if (roll == 0){crit = 2;console.log("CRITICAL HIT!");}
      else{crit = 1;}
      damage = (Math.floor(((7 * user.ATK)-((enemySTAT.DEF)/2)) * ((100-roll)/100)))*crit;
      enemySTAT.HP -= damage;
      console.log(enemy.NAME + " took " + damage + " damage!")
    }
    function displayHP (){
      console.log(user.NAME + ": " + userSTAT.HP);
      console.log(enemy.NAME + ": " + enemySTAT.HP);
    }
    

 // var levelsGained = 0;
    
    // function levelUp (){
    //   for (i = 0; i < levelsGained; i++){
    //   console.log(user.NAME + " leveled up!")
    //   user.LEVEL += 1;
    //   console.log("Level " + user.LEVEL);
    //   buildSTAT();
    //   }
      
    // }

    // // DISPLAYS CHANGES IN STATS UPON LEVEL UP
    // function buildSTAT (){
    //   var incHP = Math.floor(user.HP+ (user.HP*user.LEVEL)) - userSTAT.HP;
    //   console.log("HP+ " + incHP);
    //   userSTAT.HP = Math.floor(user.HP+ (user.HP*user.LEVEL));

    //   var incATK = Math.floor(user.ATK+((user.ATK*user.LEVEL)/10)) - userSTAT.ATK;
    //   console.log("ATK+ " + incATK);
    //   userSTAT.ATK = Math.floor(user.ATK+((user.ATK*user.LEVEL)/10));

    //   var incDEF = Math.floor(user.DEF+((user.DEF*user.LEVEL)/10)) - userSTAT.DEF;
    //   console.log("DEF+ " + incDEF);
    //   userSTAT.DEF = Math.floor(user.DEF+((user.DEF*user.LEVEL)/10));

    //   var incMP = Math.floor(user.LEVEL / 2) - userSTAT.SKILL;
    //   console.log("SKILL+ " + incMP);
    //   userSTAT.DEF = Math.floor(user.LEVEL / 2);
    // }

