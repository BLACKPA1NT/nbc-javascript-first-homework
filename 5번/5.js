const number = document.querySelectorAll(".number");

console.log(number)


for (i = 0; i < number.length; i++) {
    number[i].innerText = Number(number[i].innerText) + 10
}
