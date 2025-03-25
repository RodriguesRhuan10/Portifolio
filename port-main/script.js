function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.header');
});

/*function verificar() {     ---------> Verificador de Data do Plano Básico.
    const agora = new Date();
    const day = agora.getDate();
    const mensagem = `Hoje é dia ${day}!%0A%0AOlá, gostaria de contratar o plano básico!`;

    const whatsappLink = document.querySelector('#whatsapp-link');
    whatsappLink.href = `https://wa.me/5524999443200?text=${mensagem}`;
}*/