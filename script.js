function updateClock(){
    const now= new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let sec=now.getSeconds();


    hours= hours<10 ? '0' + hours : hours;
    minutes= minutes<10 ? '0' + minutes : minutes;
    sec=sec<10 ? '0' + sec : sec ;


    const timeString= `${hours}:${minutes}:${sec}`;



    document.getElementById('clock').textContent=timeString;
}


updateClock();
setInterval(updateClock,1000);
