// write js code here if required
function dateTime(){
			const timer = document.getElementById('timer');
			const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1; // Months are zero-indexed
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

        timer.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
		}
	dateTime();