// Contador dinámico con máximo 3 horas
function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    let hours = Math.floor(Math.random()*3); // 0,1,2
    let minutes = Math.floor(Math.random()*60);
    let seconds = Math.floor(Math.random()*60);

    function updateCountdown() {
        let text = `Un 30% de descuento ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        countdownEl.textContent = text;

        if(seconds>0) seconds--;
        else{
            if(minutes>0){ minutes--; seconds=59;}
            else{
                if(hours>0){ hours--; minutes=59; seconds=59;}
                else{
                    hours = Math.floor(Math.random()*3);
                    minutes = Math.floor(Math.random()*60);
                    seconds = Math.floor(Math.random()*60);
                }
            }
        }
    }

    updateCountdown();
    setInterval(updateCountdown,1000);
}

startCountdown();
