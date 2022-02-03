//get the time in miliseconds.
//get the current time.
//get the difference between future and now and substracting it.
//how many miliseconds are there in a seconds and so on...
//i have the difference now can i calculate how many days are there and how many minutes are there (167 days )
// 25 - 10 = 15
// 15 :
const countDown = ()=>{
    const countDate = new Date("October 20, 2022 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const difference = countDate - nowDate;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(difference / day);
    console.log(textDay);
    const textHour = Math.floor(difference % day / hour);
    const textMinute = Math.floor(difference % hour / minute);
    const textSecond = Math.floor(difference % minute / second);
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
};
countDown();
//run every seconds
setInterval(countDown, 1000); //format all numbers

//# sourceMappingURL=countdown.97bf790d.js.map
