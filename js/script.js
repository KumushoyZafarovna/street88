document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.navbar__toggle')
	const navbarList = document.querySelector('.navbar__list')
	const navbarOverlay = document.querySelector('.navbar__overlay')
	const closeButton = document.querySelector('.navbar__close')

	toggleButton.addEventListener('click', () => {
		navbarList.classList.add('active')
		navbarOverlay.classList.add('active')
	})

	closeButton.addEventListener('click', () => {
		navbarList.classList.remove('active')
		navbarOverlay.classList.remove('active')
	})

	navbarOverlay.addEventListener('click', () => {
		navbarList.classList.remove('active')
		navbarOverlay.classList.remove('active')
	})
})

// "Back to Top" tugmasi uchun
const backToTop = document.getElementById('backToTop')

// Scroll hodisasi kuzatuvchi
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		backToTop.style.display = 'block' // Tugmani ko'rsatish
	} else {
		backToTop.style.display = 'none' // Tugmani yashirish
	}
})

// Tugmaga bosganda sahifani yuqoriga qaytarish
backToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
