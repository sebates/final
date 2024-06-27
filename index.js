const database = [
  {levelId: "97608", levelName: "ice Hell cave", playerId: "52152"},
  {levelId: "115633", levelName: "ice hell cave v2", playerId: "52152"},
  {levelId: "130430", levelName: "ice hell blizzard", playerId: "52152"},
  {levelId: "176630", levelName: "ice hell cave v3", playerId: "52152"},
  {levelId: "198717", levelName: "Demon step", playerId: "52152"},
  {levelId: "334311", levelName: "ice hell cave v4", playerId: "52152"},
  {levelId: "418110", levelName: "Mental Breakdown", playerId: "9834"},
  {levelId: "13035922", levelName: "ICE Carbon Titan X", playerId: "11094602"},
  {levelId: "14430987", levelName: "Bionic Launch", playerId: "4007507"},
];

const players = [
  {playerId: "9834", playerName: "gw-xset"},
  {playerId: "52152", playerName: "small"},
  {playerId: "649868", playerName: "Rob Buck"},
  {playerId: "4007507", playerName: "Ludicrous"},
  {playerId: "169767510", playerName: "roadkiller"}
]

function search(){

  var results = []

  if(document.getElementById("filter").value === "levelName"){
    for(var i=0;i<database.length;i++){
      if(database[i].levelName.toLowerCase().startsWith(document.getElementById("input").value.toLowerCase())) {
        results.push(database[i].levelId);
      }
    }
  }

  if(document.getElementById("filter").value === "levelId"){
    for(var i=0;i<database.length;i++){
      if(database[i].levelId.startsWith(document.getElementById("input").value)) {
        results.push(database[i].levelId);
      }
    }
  }

  document.getElementById("results").innerText = results.length + " results found";
  
  while(document.getElementById("list").firstChild) {
    document.getElementById("list").removeChild(document.getElementById("list").lastChild);
  }

  sort(results);
}

function sort(results) {
  
  display(results);
}

function display(results){
  for(var i=0;i<results.length;i++){
    var levelId2 = results[i];
    var levelName2 = database.find(x => x.levelId === results[i]).levelName;
    var playerId2 = database.find(x => x.levelId === results[i]).playerId;
    var playerName2 = players.find(x => x.playerId === playerId2).playerName;
  
  
  
    var level = document.createElement("div");
    level.id = "level";
  
    var line1 = document.createElement("div");
    line1.innerText = levelName2 + " by " + playerName2 + " (Player ID: " + playerId2 + ")";
    line1.id = "line1";
  
    var line2 = document.createElement("div");
    line2.innerText = "ID: " + levelId2;
    line2.id = "line2";
  
    level.appendChild(line1);
    level.appendChild(line2);
  
    document.getElementById("list").appendChild(level);
  }
}
