"use strict"

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(() => {
    const myDate = new Date()
    const hourDeg = myDate.getHours()* 30
    const minDeg = myDate.getMinutes()*6
    const secDeg = myDate.getSeconds()*6

    sec.style.transform = `rotateZ(${secDeg}deg)`
    min.style.transform  = `rotateZ(${minDeg}deg)`
    hour.style.transform  = `rotateZ(${hourDeg + minDeg/12}deg)`

}, 1000)