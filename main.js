/*=============== EMAIL JS ===============*/
// emailjs.init('__NBXGZ6PwozvavqT') 
// const contactForm =  document.getElementById('contact-form'),
//        contactMessage = document.getElementById('contact-message')

// const sendEmail = (e)  =>{
//     e.preventDefault()

  
//     emailjs.sendform('service_c4yttf8','template_5mcms2n','#contact-form','__NBXGZ6PwozvavqT')

//     .then(() => {
        
//         contactMessage.textContent = 'Pesan Berhasil TerKIRIM'
        
       
//         setTimeout(() => {
//           contactMessage.textContent = ''
//         }, 5000)
      
//         contactForm.reset()
//     }, () => {
       
//         contactMessage.textContent = 'GAGAL Mengirim Pesan'
//     })
//  }
// contactForm.addEventListener('submit', sendEmail)
// .catch((error) => {
//     console.log('FAILED...', error.text);
//     contactMessage.textContent = `Error: ${error.text}`;
// })

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

emailjs.init('__NBXGZ6PwozvavqT')

const sendEmail = (e) => {
    e.preventDefault()

    contactMessage.textContent = 'Sending message...'

   
    emailjs.sendForm(
        'service_c4yttf8', // Service ID
        'template_5mcms2n', // Template ID
        contactForm, // Form element
        '__NBXGZ6PwozvavqT' // Public Key
    )
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
    .catch((error) => {
        contactMessage.textContent = 'Message sending failed ❌'
        console.log('FAILED...', error)
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if(window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`info`, {origin: 'left', delay: 800})
sr.reveal(`skills`, {origin: 'left', delay: 1000})
sr.reveal(`about`, {origin: "right", delay: 1200})
sr.reveal(`.project__card, .education__card, .experience__card`, {interval: 100})