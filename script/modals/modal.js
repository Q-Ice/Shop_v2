const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('#payment')
const iconCloseModal = document.querySelector('.modal__header i')
const buttonCloseModal = document.querySelector('.modal__footer button')


openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})

function toggleModal() {
	modal.classList.toggle('hide')
}

window.onclick = function (e) {
	console.log(e.target)
}