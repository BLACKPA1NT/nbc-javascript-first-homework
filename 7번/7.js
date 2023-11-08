// setTimeout(() => {
//     document.querySelector("body").innerHTML = "안녕";
// }, 3000);

const num = document.querySelector(".num");

let count = Number(num.textContent);

setInterval(() => {
    if (count >= 0 && count < 10) {
        count = count + 1;
        num.innerHTML = count;
    } else {
        num.style.display = 'none';
        clearInterval(count)
    }
}, 1000);

// 일단 보류
