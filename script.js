function updateCountdown() {
    const targetDate = new Date("2024-04-10");
    const currentDate = new Date();
    
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown").textContent = daysRemaining;
}

// לעדכן את הספירה לאחור בכל יום
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // לעדכן כל שעה
