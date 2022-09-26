function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);

        result.textContent = power + "%"
    }
    function gradientOut(event) {
        result.textContent = "";
    }
    
}


// const gradientMousemoveHandler = (e) => {
//     let percent = (e.offsetX / e.target.offsetWidth) *100
//    percent= percent.toFixed(0);
   
//     result.textContent = `${percent}%`
// }

// gradient.addEventListener('mousemove', gradientMousemoveHandler)