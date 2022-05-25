const  bouton=document.querySelector('.affichage');
const invisible=document.querySelector('.invisible');

bouton.addEventListener('click', () => {
	
	invisible.classList.toggle('is-visible');

});