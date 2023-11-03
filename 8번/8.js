const buttonEvent = document.querySelector(".btn")

buttonEvent.addEventListener("click", function () {
    let input = prompt("아무거나 입력하세요", "")
    alert(input)
})
console.log(buttonEvent)
