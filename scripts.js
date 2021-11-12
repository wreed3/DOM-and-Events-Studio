// Write your JavaScript code here.
function init(){
    const takeOffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
   
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");

    rocket.style.position='absolute';
    rocket.style.left = '275px';
    rocket.style.top = '100px';

   


    takeOffButton.addEventListener('click', function(){
        const confirmation = confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirmation == true){
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
        }
    });

    landButton.addEventListener('click', function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    });

    abortMissionButton.addEventListener('click', function(){
        const confirmation = confirm("Confirm that you want to abort the mission.");
        if(confirmation == true){
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor ="green";
            spaceShuttleHeight.innerText = 0;
        }
        
        });

    upButton.addEventListener('click', function(){
            let movement = `${parseInt(rocket.style.top) - 10}px`;
            rocket.style.top = movement;
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
        });

    downButton.addEventListener('click', function(){
            let movement = `${parseInt(rocket.style.top) + 10}px`;
            rocket.style.top = movement;
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) - 10000;
        });

    leftButton.addEventListener('click', function(){
            let movement = `${parseInt(rocket.style.left) - 10}px`;
            rocket.style.left = movement;
        });

    rightButton.addEventListener('click', function(){
            let movement = `${parseInt(rocket.style.left) + 10}px`;
            rocket.style.left = movement;
        });
   
}
        


window.addEventListener('load', init);
// Remember to pay attention to page loading!