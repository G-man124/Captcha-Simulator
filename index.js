    let currentCaptcha = "";

    function generateCaptcha() {
      const canvas = document.getElementById("captchaCanvas");
      const ctx = canvas.getContext("2d");
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      currentCaptcha = "";

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = `rgb(${rand(100,200)}, ${rand(100,200)}, ${rand(100,200)})`;
        ctx.beginPath();
        ctx.moveTo(rand(0, canvas.width), rand(0, canvas.height));
        ctx.lineTo(rand(0, canvas.width), rand(0, canvas.height));
        ctx.stroke();
      }

      ctx.font = "bold 26px Courier New";
      ctx.textBaseline = "middle";

      for (let i = 0; i < 6; i++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        currentCaptcha += char;
        ctx.save();
        const x = 20 + i * 25;
        const y = canvas.height / 2 + rand(-5, 5);
        const angle = rand(-25, 25) * (Math.PI / 180);
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = `rgb(${rand(20,100)}, ${rand(20,100)}, ${rand(20,100)})`;
        ctx.fillText(char, 0, 0);
        ctx.restore();
      }

      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = "#888";
        ctx.fillRect(rand(0, canvas.width), rand(0, canvas.height), 2, 2);
      }
    }

    function validateCaptcha(event) {
      event.preventDefault();
      const userInput = document.getElementById("captchaInput").value.trim().toUpperCase();
      const status = document.getElementById("status");

      if (userInput === currentCaptcha) {
        status.style.color = "green";
        status.innerHTML = "Good Job Completing This Captcha Simulator";
      } else {
        status.style.color = "red";
        status.textContent = "Incorrect. Try again.";
        document.getElementById("captchaInput").value = "";
        generateCaptcha();
      }
    }

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateCaptcha();
