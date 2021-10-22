/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

document.getElementById("mainNav").innerHTML = `
<div class="container">
    <a href="index.html" class="navbar-brand"><i class="fab fa-envira"></i>NatPeace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
    <i class="fas fa-bars ms-1"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item"><a class="nav-link" href="atmosfera.html">Capas y Contaminación</a></li>
            <li class="nav-item"><a class="nav-link" href="preservacion.html">Preservación</a></li>
            <li class="nav-item"><a class="nav-link" href="ozono.html">Capa de Ozono</a></li>
            <li class="nav-item"><a class="nav-link" href="viena.html">Convención de Viena</a></li>
            <li class="nav-item"><a class="nav-link" href="montreal.html">Protocolo de Montreal</a></li>
        </ul>
    </div>
</div>
`

document.getElementById("contact").innerHTML = `
<div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Más información</h2>
        <h3 class="section-subheading text-muted">Naveguen por las pestañas del menú para aprender más sobre el tema!</h3>
    </div>
</div>
`

document.getElementById("footer").innerHTML = `
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">Copyright &copy; 2021</div>
        <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" target="_blank" href="https://www.instagram.com/nat.peace.ong/"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!">Grupo 1</a>
            <a class="link-dark text-decoration-none me-3" href="#!">-</a>
            <a class="link-dark text-decoration-none" href="#!">Recursos Naturales</a>
        </div>
    </div>
</div>
`

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
