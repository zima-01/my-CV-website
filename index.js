

// Time Local
setInterval(myTimer, 1000);

function myTimer(){
  const d = new Date();
document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}
