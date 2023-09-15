document.getElementById("countdown-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const endDate = new Date(document.getElementById("end-date").value);
    const currentDate = new Date();

    if (endDate <= currentDate) {
        alert("End date must be greater than the current date.");
        return;
    }

    const countdownInterval = setInterval(function() {
        const currentTime = new Date();
        const timeDifference = endDate - currentTime;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "Countdown completed!";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("countdown").textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }
    }, 1000);
});