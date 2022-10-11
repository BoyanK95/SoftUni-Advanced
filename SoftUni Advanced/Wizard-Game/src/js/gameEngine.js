function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(timestamp =>gameLoop(state, game, timestamp));
    
}


function gameLoop(state, game, timestamp) {
    const { wizard } = state;
    const {wizardElement } = game;

    modifyWizzardPosition(state, game);

    //Spawn bugs
    if (timestamp > state.bugStats.nexSpawnTimestamp) {
        game.createBug(state.bugStats);
        state.bugStats.nexSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    //Render bugs
    document.querySelectorAll('.bug').forEach(bug => {
        let posX = parseInt(bug.style.left);

        bug.style.left = posX - state.bugStats.speed + 'px';
    });

    //Render wizar
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';


    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

function modifyWizzardPosition(state, game) {
    const { wizard } = state
        // Move wizard
        if (state.keys.KeyA) {
            wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
         }
     
         if (state.keys.KeyS) {
             wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
          }
         if (state.keys.KeyD) {
             wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
             
         }
         if (state.keys.KeyW && wizard.posY > 0) {
             wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
          }
}