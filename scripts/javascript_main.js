		function show_Menu() {
			document.getElementById('menu').classList.toggle('menu_Visible');
			document.getElementById('menu_Background').classList.toggle('menu_Background_Visible');

			const picture = document.getElementById('icon_Menu') || document.getElementById('icon_Menu_Close');
			if (picture.id === 'icon_Menu') {
				picture.id = 'icon_Menu_Close';
			} else {
				picture.id = 'icon_Menu';
			}
		}

		function reload_Page() {
			location.reload();
		}

		function change_Language() {

		}

		// Při změně velikosti okna, se zruší zpomalovací efekt skrytí a odkrytí menu
		window.onload = () => {
			// Proměnná pro uložení časovače
			let set_Timer;

			window.addEventListener('resize', () => {
				const menu = document.querySelector('.menu');

				// Odebereme animaci
				menu.style.transition = 'none';

				// Pokud uživatel stále mění velikost, resetujeme časovač
				clearTimeout(set_Timer);

				// Po 300ms od posledního resize vrátíme animaci
				set_Timer = setTimeout(() => {
					menu.style.transition = 'var(--main_Transition)';
				}, 300);
			});
		};
