const database = [
  {level: "ice Hell cave", levelId: "97608"},
  {level: "ice hell cave v2", levelId: "115633"},
  {level: "ice hell cave v3", levelId: "176630"},
  {level: "ice hell cave v4", levelId: "334311"}
];

function search(){

  document.getElementById("test").innerText = document.getElementById("filter").value;

  var results = []

  if(document.getElementById("filter").value === "level"){
    for(var i=0;i<database.length;i++){
      if(database[i].level.toLowerCase().startsWith(document.getElementById("input").value.toLowerCase())) {
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

  document.getElementById("results").innerText = results.length + " results";
  document.getElementById("levelName0").innerText = database.find(x => x.levelId === results[0]).level;
  document.getElementById("levelId0").innerText = "ID: "+results[0];
};
