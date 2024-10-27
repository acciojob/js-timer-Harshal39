// write js code here if required
function dateTime(){
			const timer = document.getElementById('timer');
			const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

        timer.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
		}
	dateTime();