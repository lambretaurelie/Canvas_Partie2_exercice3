var c = document.getElementById( "humain" );
var ctx = c.getContext("2d");
// tete
ctx.beginPath();
ctx.arc(230,70,50,0,Math.PI*2,true);
ctx.strokeStyle = "#8A0908";
ctx.fillStyle = "#8A0908";
ctx.fill();
ctx.stroke();
// yeux1
ctx.beginPath();
ctx.arc(210,50,10,0,Math.PI*2,true);
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.stroke();
// yeux2
ctx.beginPath();
ctx.arc(250,50,10,0,Math.PI*2,true);
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.stroke();
// cil1
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#FFFFFF";
ctx.moveTo(200,30);
ctx.quadraticCurveTo(240,40,200,30);
ctx.fill();
ctx.stroke();
// cil2
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#FFFFFF";
ctx.moveTo(260,30);
ctx.quadraticCurveTo(230,40,260,30);
ctx.fill();
ctx.stroke();


// Bouche
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#C04108";
ctx.moveTo(250,80);
ctx.quadraticCurveTo(230,100,210,80);
ctx.stroke();
ctx.fill();

// bras
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#8A0908";
ctx.moveTo(100,110);
ctx.lineTo(350,110);
ctx.lineTo(350,140);
ctx.lineTo(100,140);
ctx.moveTo(100,110);
ctx.quadraticCurveTo(50,120,100,140);
ctx.moveTo(350,110);
ctx.quadraticCurveTo(400,120,350,140);
ctx.stroke();
ctx.fill();

// jambe et corps
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#8A0908";
ctx.moveTo(180,140);
ctx.lineTo(180,350);
ctx.lineTo(210,350);
ctx.lineTo(210,290);
ctx.lineTo(280,290);
ctx.moveTo(250,330);
ctx.moveTo(250,290);
ctx.lineTo(250,350);
ctx.lineTo(280,350);
ctx.lineTo(280,140);
ctx.lineTo(180,140);
ctx.moveTo(180,350);
ctx.quadraticCurveTo(190,380,210,350);
ctx.moveTo(280,350);
ctx.quadraticCurveTo(260,380,250,350);
ctx.stroke();
ctx.fill();
//entre jambe
ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "white";
ctx.moveTo(250,290);
ctx.quadraticCurveTo(230,250,210,290);
ctx.stroke();
ctx.fill();
// bouton1
ctx.beginPath();
ctx.arc(230,220,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7A2976";
ctx.fillStyle = "#7A2976";
ctx.fill();
ctx.stroke();
// bouton1
ctx.beginPath();
ctx.arc(230,180,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7A2976";
ctx.fillStyle = "#7A2976";
ctx.fill();
ctx.stroke();
