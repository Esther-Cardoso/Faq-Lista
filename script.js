function ativarFaq() {
  const faqLista = document.querySelectorAll('.faq-lista dt')

  if(faqLista.length) {
    faqLista[0].classList.add('ativo')
    faqLista[0].nextElementSibling.classList.add('ativo')
  
    function addAtivo() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
  
    faqLista.forEach((item) => {
      item.addEventListener('click', addAtivo)
    })
  }
}

ativarFaq()