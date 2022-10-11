function initGameObjects() {
  const startScreen = document.querySelector(".start-screen");
  const gameScreen = document.querySelector(".game-screen");

  return {
    startScreen,
    gameScreen,
    createWizard(initState){
      let wizardElement = document.createElement('div');
      wizardElement.classList.add('wizard');

      
      
      wizardElement.style.height = initState.height + 'px';
      wizardElement.style.width = initState.width + 'px';

      wizardElement.style.left = initState.startX + 'px';
      wizardElement.style.top = initState.startY + 'px';
      
      this.wizardElement = wizardElement;
      gameScreen.appendChild(wizardElement);

      return wizardElement;
    }
  };
}
