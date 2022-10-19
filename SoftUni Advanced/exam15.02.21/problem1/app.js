function solution() {
  const addGiftsSection = document.getElementsByClassName("card")[0];
  const listOfGiftsSection = document.getElementsByClassName("card")[1];
  const ulRootEl = listOfGiftsSection.querySelector("ul");
  const addGitftBtn = addGiftsSection.querySelector("button");
  const giftNameInput = addGiftsSection.querySelector("input");
  const sentGifts = document.getElementsByClassName("card")[2];
  const sentGiftsUlRootEl = sentGifts.querySelector('ul')
  let listOfGiftsArr = [];

  addGitftBtn.addEventListener("click", addGift);

  function addGift(e) {
    let giftName = giftNameInput.value;
    if (!giftName) {
      return;
    }
    let html = "";
    listOfGiftsArr.push(giftName);
    listOfGiftsArr
      .sort((a, b) => a.localeCompare(b))
      .forEach(t => html += `<li class="gift">${t}<button id="sendButton">Send</button><button id="discardButton">Discard</button></li>`)
    ulRootEl.innerHTML = html;

    giftNameInput.value = "";


    const sendButton = document.querySelectorAll('#sendButton')
    const discardButton = document.getElementById('discardButton')
    
    sendButton.forEach(button => {
        button.addEventListener('click', sendGift)
    });
    discardButton.addEventListener('click', discardGift)
  
    
  
    function sendGift(e) {
        let liElement = e.currentTarget.parentElement
        let nameOfGift = liElement.innerHTML.split('<')[0]
        let rootLiEl = document.createElement('li')
        rootLiEl.classList.add('gift')
        rootLiEl.textContent = nameOfGift
        sentGiftsUlRootEl.appendChild(rootLiEl)
        liElement.remove()
      debugger
    }
  
    function discardGift(e) {
      console.log(e);
      debugger
    }
  }

}
