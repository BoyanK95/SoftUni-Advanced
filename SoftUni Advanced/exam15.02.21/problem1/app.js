function solution() {
  const addGiftsSection = document.getElementsByClassName("card")[0];
  const listOfGiftsSection = document.getElementsByClassName("card")[1];
  const ulRootEl = listOfGiftsSection.querySelector("ul");
  const addGitftBtn = addGiftsSection.querySelector("button");
  const giftNameInput = addGiftsSection.querySelector("input");
  const sentGifts = document.getElementsByClassName("card")[2];
  const sentGiftsUlRootEl = sentGifts.querySelector('ul')
  const discardGiftsSection = document.getElementsByClassName("card")[3];
  const discardUlRootEl = discardGiftsSection.querySelector('ul')
  
  let listOfGiftsArr = [];
  let sentGiftsArr = [];
  let discardGiftArr = []

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
    const discardButton = document.querySelectorAll('#discardButton')
    
    
    sendButton.forEach(button => {
        button.addEventListener('click', sendGift)
    });
    discardButton.forEach(button => {
        button.addEventListener('click', discardGift)
    });
  
    
  
    function sendGift(e) {
        let liElement = e.currentTarget.parentElement
        let nameOfGift = liElement.innerHTML.split('<')[0]

        let sentGiftsHtml = ''
        sentGiftsArr.push(nameOfGift)
        sentGiftsArr.sort((a, b) => a.localeCompare(b))
        .forEach(t => sentGiftsHtml += `<li class="gift">${t}</li>`)

        sentGiftsUlRootEl.innerHTML = sentGiftsHtml

        liElement.remove()
        listOfGiftsArr = listOfGiftsArr.filter(x => x !== nameOfGift)
    }
  

  }
    function discardGift(e) {
        let liElement = e.currentTarget.parentElement
        let nameOfGift = liElement.innerHTML.split('<')[0]

        let discardGiftHtml = ''
        discardGiftArr.push(nameOfGift)
        discardGiftArr.sort((a, b) => a.localeCompare(b))
        .forEach(t => discardGiftHtml += `<li class="gift">${t}</li>`)
        discardUlRootEl.innerHTML = discardGiftHtml

        liElement.remove()

    }
}
