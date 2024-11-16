var countDownDate = new Date($('.discount-banner').attr('data-expiry')).getTime();
		function timeDown(){
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var day = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var sec = Math.floor((distance % (1000 * 60)) / 1000);
			$(".mot-timer-wrapper .sec .timer:nth-of-type(2) span").text(pad(sec)[0]);
			$(".mot-timer-wrapper .min .timer:nth-of-type(2) span").text(pad(min)[0]);
			$(".mot-timer-wrapper .hour .timer:nth-of-type(2) span").text(pad(hour)[0]);
			$(".mot-timer-wrapper .day .timer:nth-of-type(2) span").text(pad(day)[0]);
			$(".mot-timer-wrapper .sec .timer:nth-of-type(1) span").text(pad(sec)[1]);
			$(".mot-timer-wrapper .min .timer:nth-of-type(1) span").text(pad(min)[1]);
			$(".mot-timer-wrapper .hour .timer:nth-of-type(1) span").text(pad(hour)[1]);
			$(".mot-timer-wrapper .day .timer:nth-of-type(1) span").text(pad(day)[1]);
		}

		$(".iconClose").click(function (e) {
				e.preventDefault();
				$(".discount-banner").slideUp();
		});

		function pad(num) {
			return num < 10 ? "0" + num.toString() : num.toString();
		}

		$(document).ready(function () {
			timeDown()
			const secInterval = setInterval(() => {
				timeDown()
			}, 1000);
		})
