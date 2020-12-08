
home = home => {
  //resests to default home screen
  document.querySelector('#title').innerHTML = "Welcome to a D&D Companion App";
  document.querySelector('#emblem').src=`assets/icons8-dragon-100.png`;
  let clear = document.querySelectorAll("p");
     clear.forEach(p => {
       p.innerHTML=""
     });
}

callApi = dndClass => {
  //grabs the class section in the api and gets 6 of them
  const url = `https://api.open5e.com/classes/${dndClass}`;
  const title = document.querySelector('#title');
  const hitDice = document.querySelector('#hitDice');
  const hpAtFirstLvl = document.querySelector('#hpAtFirstLvl');
  const hpAthigherLvl = document.querySelector('#hpAthigherLvl');
  const armorProf = document.querySelector('#armorProf');
  const weaponProf = document.querySelector('#weaponProf');
  const toolsProf = document.querySelector('#toolsProf');
  const savingThrowProf = document.querySelector('#savingThrowProf');
  const skilsProf = document.querySelector('#skilsProf');
  const equipment = document.querySelector('#equipment');
  const spellCastAbil = document.querySelector('#spellCastAbil');
  const features = document.querySelector('#features');
  const desc = document.querySelector('#desc');

  fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
      //used this method of innerHTML and innerText so there is no text on the screen where it is not wanted onload
      title.innerHTML = data.name
      hitDice.innerHTML = "<h3>Hit dice: </h3>" +  data.hit_dice;
      hpAtFirstLvl.innerHTML = "<h3>HP at first Level: </h3>" +  data.hp_at_1st_level;
      hpAthigherLvl.innerHTML = "<h3>HP at higher level: </h3>" +  data.hp_at_higher_levels;
      armorProf.innerHTML = "<h3>Armor proficiency: </h3>" +  data.prof_armor;
      weaponProf.innerHTML = "<h3>Weapon proficiency: </h3>" +  data.prof_weapons;
      toolsProf.innerHTML = "<h3>Proficiency with tools: </h3>" +  data.prof_tools;
      savingThrowProf.innerHTML = "<h3>Saving throw proficiency: </h3>" +  data.prof_saving_throws;
      skilsProf.innerHTML = "<h3>Skills proficiency: </h3>" +  data.prof_skills;
      equipment.innerHTML = "<h3>Equipment: </h3>" +  data.equipment;
      spellCastAbil.innerHTML = "<h3>Spell Casting Ability: </h3>" +  data.spellcasting_ability;
      features.innerHTML= "<br><br><h3>Features: </h3>"
      desc.innerText =  data.desc;
      //added this code here so that the #emblem loads the same time that the data from the api is displayed
      document.querySelector('#emblem').src=`assets/Class Symbols/DnD5E_ClassSymb_${dndClass}.png`;
    });
  }

document.querySelector('#home').addEventListener("click", () => home())
document.querySelector('#fighter').addEventListener("click", () => callApi("fighter"))
document.querySelector('#cleric').addEventListener("click", () => callApi("cleric"))
document.querySelector('#bard').addEventListener("click", () => callApi("bard"))
document.querySelector('#ranger').addEventListener("click", () => callApi("ranger"))
document.querySelector('#rogue').addEventListener("click", () => callApi("rogue"))
document.querySelector('#wizard').addEventListener("click", () => callApi("wizard"))


//to display and hide menu on moble
function menu() {
  const x = document.querySelectorAll('.classSelect');

  for (i=0; i < x.length; i++){
    if (!(x[i].style.display === "block")) {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}
