const accordeonBtns = document.querySelectorAll('[data-name="accordeon-title"]');
const list = document.querySelectorAll('.footer__list')
function resize() {
	window.addEventListener('resize', () => {
		if (body.offsetWidth <= 1024) {
			list.forEach(item => {
				item.classList.add('hidden')
			})
		} else {
			list.forEach(item => {
				item.classList.remove('hidden')
			})
		}

	})
	if (body.offsetWidth <= 1024) {
		list.forEach(item => {
			item.classList.add('hidden')
		})
	} else {
		list.forEach(item => {
			item.classList.remove('hidden')
		})

	}
}

resize()

accordeonBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		if (body.offsetWidth <= 1024) {
			if (e.target.nextElementSibling.classList.contains('hidden')) {
				e.target.classList.toggle('hover')
				e.target.nextElementSibling.classList.toggle('hidden')

			} else {
				e.target.classList.toggle('hover')
				e.target.nextElementSibling.classList.toggle('hidden')

			}
		}

	})

})