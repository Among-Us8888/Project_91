function Start(){
Frisk = document.getElementById("Frisk").value;
Chara = document.getElementById("Chara").value;

localStorage.setItem("player_1_Name",Frisk);
localStorage.setItem("player_2_Name",Chara);

window.location="game_page.html";
}