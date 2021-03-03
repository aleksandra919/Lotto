
const result = [];

const lotto = function() {
    if(result.length === 6) return;
    const lottoResult = Math.floor(Math.random() * 49 + 1);
 

    for (let i = 0; i < result.length; i++) {
        if(lottoResult === result[i]) {
            return lotto();
        }
    }
    const div = document.createElement("div");
    div.textContent = lottoResult;
    result.push(lottoResult);
    const numberWrappers = document.getElementById('numbersWrapper')
    numberWrappers.appendChild(div);
}

const button = document.querySelector("button");
button.addEventListener("click", lotto);