import './styles.css';
import './timer'

 /*const clockDay = document.querySelector('[data-value="days"]');
 const clockHour = document.querySelector('[data-value="hours"]');
 const clockMins = document.querySelector('[data-value="mins"]');
const clockSecs = document.querySelector('[data-value="secs"]');
 
const timer = {
    start() { //стартовое время
        const targetDate = new Date('Dec 31, 2020');
        //const targetDate = Date.now();

        setInterval(() => {
            const currentTime = Date.now(); //текущее время
            const deltaTime = targetDate - currentTime; //разница между текущим и конечным временем
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
              updateClockface({ days, hours, mins, secs })       
        }, 1000);
}
}

timer.start();
function pad(value) { 
    return String(value).padStart(2, '0');
}
    
function getTimeComponents(time) { 
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }

function updateClockface ({  days, hours, mins, secs }) { 
    clockDay.textContent = `${days}`;
    clockHour.textContent= `${hours}`;
    clockMins.textContent= `${mins}`;
    clockSecs.textContent= `${secs}`;
}*/