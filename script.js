document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center' 
            });
        });
    });

    
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let offset = section.offsetTop - 150; 
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`.nav-item[href="#${id}"]`).classList.add('active');
            }
        });
    });
});
