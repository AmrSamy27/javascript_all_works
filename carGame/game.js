
let initX = 0 , initY = 0 , car , leftLimit , road;

function raceGame(event) {
    leftLimit = document.getElementById('raceCar').style.left;
    road = document.getElementsByTagName('body')[0];
    if (event.key == 'ArrowUp') {
        initY += 40;
        road.style.backgroundPositionY = initY + "px";
    }
    else if (event.key == 'ArrowDown') {
        initY -= 40;
        road.style.backgroundPositionY = initY + "px";
    }
    else if (event.key == 'ArrowLeft' &&   parseInt(leftLimit.substring(0,leftLimit.length-2))>80) {
        initX=0;
        initX += 40;
      carElement = document.getElementById("raceCar");
     carElement.style.left= parseInt(carElement.style.left) -initX +"px";  
        
        
    }
    else if (event.key == 'ArrowRight' &&   parseInt(leftLimit.substring(0,leftLimit.length-2))<1480) {
        initX=0;
        initX += 40;
      carElement = document.getElementById("raceCar");
     carElement.style.left= parseInt(carElement.style.left) +initX +"px";
    }
   
   
  }

  

window.addEventListener("keydown", raceGame);

                    

