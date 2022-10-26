
const btnOpenBlock = document.querySelector("#button1");
const cardContent = document.querySelector("#content1")

btnOpenBlock.addEventListener('click', function() {
	// cardContent.classList.toggle('content-hidden');
	// if(cardContent.classList.contains('content-hidden')) {
	// 	btnOpenBlock.textContent = 'Открыть блок'
	// } else {
	// 	btnOpenBlock.textContent = 'Закрыть блок'
	// }

	
	if(cardContent.classList.toggle('content-hidden')) {
		btnOpenBlock.textContent = 'Открыть блок';
	} else {
		btnOpenBlock.textContent = 'Закрыть блок';
	}

});