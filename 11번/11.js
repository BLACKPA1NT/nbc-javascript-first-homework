const today = new Date();

const nowTime = today.getHours();

console.log(nowTime);

if (nowTime < 10) {
    console.log("good morning")
} else if (nowTime >= 10 && nowTime <= 18) {
    console.log("good afternoon")
} else {
    console.log("good evening")
}