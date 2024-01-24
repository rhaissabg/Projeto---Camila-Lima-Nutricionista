let accordion = window.document.getElementsByClassName('container-lista');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('ativo');
        console.log(accordion)
    })
}