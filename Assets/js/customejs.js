// animated text

/*
on YT: https://youtu.be/zwl3kZPZ8H8
*/

const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");


// mobile view
let burger = document.getElementById('mobileview-burger'),
            nav = document.getElementById('mobileview-main-nav'),
            slowmo = document.getElementById('mobileview-slowmo');

        burger.addEventListener('click', function () {
            // this.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        });

        slowmo.addEventListener('click', function () {
            this.classList.toggle('is-slowmo');
        });


		// aos script

