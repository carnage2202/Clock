function showTime(){
  let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
   //  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
   // let today = weekDay[timeNow.getDay()];
   // let months = timeNow.toLocaleString("default", {
   //     month: "long"});

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".clock").innerText = time;
    // document.getElementById("Display").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
