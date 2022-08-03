const renderTime = () => {
    const clock = document.querySelector('.clock');
    const current = new Date();
    clock.textContent = current.toLocaleTimeString();   
}

setInterval(renderTime,1000);    


