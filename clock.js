setInterval(()=>{
    let d = new Date();
    let hTime = d.getHours();
    let mTime = d.getMinutes();
    let sTime = d.getSeconds();

    let hrotation = (30*hTime) + (mTime/2);
    let mrotation = (6*mTime) + (sTime/10);
    let srotation = 6*sTime;

    document.querySelector("#hourHand").style.transform = `rotate(${hrotation}deg)`;
    document.querySelector("#minuteHand").style.transform = `rotate(${mrotation}deg)`;

    document.querySelector("#secondHand").style.transform = `rotate(${srotation}deg)`;

},10)