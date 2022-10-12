function initGameObjects() {
  const startScreen = document.querySelector(".start-screen");
  const gameScreen = document.querySelector(".game-screen");
  const scoreScreen = document.querySelector(".score");

  return {
    startScreen,
    gameScreen,
    scoreScreen,
    createWizard(initState){
      let wizardElement = document.createElement('div');
      wizardElement.classList.add('wizard');

      
      
      wizardElement.style.height = initState.height + 'px';
      wizardElement.style.width = initState.width + 'px';

      wizardElement.style.left = initState.posX + 'px';
      wizardElement.style.top = initState.posY + 'px';
      
      this.wizardElement = wizardElement;
      gameScreen.appendChild(wizardElement);

      return wizardElement;
    },
    createFireball(wizard, fireball){
      let fireballElement = document.createElement('div');
      fireballElement.classList.add('fireball');
      fireballElement.style.left = wizard.posX + wizard.width  + 'px';
      fireballElement.style.top = wizard.posY + wizard.height / 3 + 5 + 'px';
      fireballElement.style.width = fireball.width + 'px';
      fireballElement.style.height = fireball.height + 'px';
      
      gameScreen.appendChild(fireballElement);
    },
    createBug(stats) {
      const bugElement = document.createElement('div');
      bugElement.classList.add('bug');
      bugElement.style.width = stats.width + 'px';
      bugElement.style.height = stats.height + 'px';
      bugElement.style.left = gameScreen.offsetWidth - stats.width+ 'px';
      bugElement.style.top = Math.floor(Math.random() * (gameScreen.offsetHeight - stats.height)) + 'px';

      gameScreen.appendChild(bugElement);
    }
  };
}
