/* =========================================================
   INFORMACIÓN DEL PORTAFOLIO
========================================================= */

const portfolioData = {

    perfil: {

        nombre: "TU",

        apellido: "NOMBRE",

        rol: "ESTUDIANTE DE INGENIERÍA",

        titulo:
            "Ingeniería, tecnología y soluciones innovadoras.",

        descripcion:
            "Soy estudiante de ingeniería apasionado por la tecnología, la electrónica, la automatización y el desarrollo de soluciones aplicadas a problemas reales."

    },


    /* =====================================================
       PROYECTOS
    ===================================================== */

    proyectos: [

        {

            titulo:
                "Sistema de monitoreo ambiental",

            descripcion:
                "Sistema automatizado para monitoreo de variables ambientales mediante sensores, microcontroladores y una interfaz de usuario.",

            tecnologias: [

                "ESP32",

                "IoT",

                "Sensores",

                "Automatización"

            ]

        },


        {

            titulo:
                "Sistema de control automatizado",

            descripcion:
                "Desarrollo de un sistema de control basado en sensores y actuadores para automatizar procesos.",

            tecnologias: [

                "Arduino",

                "Control",

                "Electrónica"

            ]

        },


        {

            titulo:
                "Análisis de sistemas eléctricos",

            descripcion:
                "Análisis técnico de sistemas eléctricos, perfiles de carga y comportamiento de la demanda energética.",

            tecnologias: [

                "MATLAB",

                "Excel",

                "Sistemas eléctricos"

            ]

        }

    ],


    /* =====================================================
       CERTIFICADOS
    ===================================================== */

    certificados: [

        {

            titulo:
                "Certificación en Ingeniería",

            institucion:
                "Institución académica"

        },


        {

            titulo:
                "Curso de Automatización",

            institucion:
                "Institución / Plataforma"

        },


        {

            titulo:
                "Curso de Programación",

            institucion:
                "Institución / Plataforma"

        }

    ],


    /* =====================================================
       REDES SOCIALES
    ===================================================== */

    redes: [

        {

            nombre: "GitHub",

            url: "https://github.com/",

            icono: "github"

        },


        {

            nombre: "LinkedIn",

            url: "https://www.linkedin.com/",

            icono: "linkedin"

        },


        {

            nombre: "Instagram",

            url: "https://www.instagram.com/",

            icono: "instagram"

        },


        {

            nombre: "Facebook",

            url: "https://www.facebook.com/",

            icono: "facebook"

        }

    ]

};


/* =========================================================
   CARGAR PERFIL
========================================================= */

document.getElementById("profileName").innerHTML =

    `${portfolioData.perfil.nombre}
    <span>${portfolioData.perfil.apellido}</span>`;


document.getElementById("profileRole").textContent =

    portfolioData.perfil.rol;


document.querySelector(".hero-title").innerHTML =

    portfolioData.perfil.titulo;


document.querySelector(".hero-text").textContent =

    portfolioData.perfil.descripcion;


document.getElementById("footerName").textContent =

    `${portfolioData.perfil.nombre}
     ${portfolioData.perfil.apellido}`;


/* =========================================================
   PROYECTOS
========================================================= */

const projectsContainer =

    document.getElementById(
        "projectsContainer"
    );


portfolioData.proyectos.forEach(

    (project, index) => {

        const card =
            document.createElement("article");


        card.className =
            "project-card";


        card.innerHTML = `

            <p class="project-number">

                PROYECTO
                ${String(index + 1).padStart(2, "0")}

            </p>


            <h3 class="project-title">

                ${project.titulo}

            </h3>


            <p class="project-description">

                ${project.descripcion}

            </p>


            <div class="project-tags">

                ${project.tecnologias
                    .map(
                        tecnologia =>
                        `<span class="tag">
                            ${tecnologia}
                        </span>`
                    )
                    .join("")
                }

            </div>

        `;


        projectsContainer.appendChild(card);

    }

);


/* =========================================================
   CERTIFICADOS
========================================================= */

const certificatesContainer =

    document.getElementById(
        "certificatesContainer"
    );


portfolioData.certificados.forEach(

    certificado => {

        const card =
            document.createElement("article");


        card.className =
            "certificate-card";


        card.innerHTML = `

            <div class="certificate-icon">

                ✓

            </div>


            <h3 class="certificate-title">

                ${certificado.titulo}

            </h3>


            <p class="certificate-institution">

                ${certificado.institucion}

            </p>

        `;


        certificatesContainer.appendChild(card);

    }

);


/* =========================================================
   ICONOS DE REDES
========================================================= */

const icons = {


    github: `

        <svg viewBox="0 0 24 24">

            <path d="M12 .5C5.65.5.5 5.65.5 12c0
            5.08 3.29 9.39 7.86 10.91.58.11.79-.25
            .79-.56 0-.28-.01-1.02-.02-2-3.2.7
            -3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7
            -1.28-1.7-1.05-.72.08-.7.08-.7
            1.16.08 1.77 1.19 1.77 1.19
            1.03 1.76 2.71 1.25 3.37.96.1-.75
            .4-1.25.73-1.54-2.55-.29-5.23-1.28
            -5.23-5.68 0-1.25.45-2.27 1.19-3.07
            -.12-.29-.52-1.45.11-3.02 0 0
            .97-.31 3.18 1.17A11 11 0 0 1 12
            6.07c.98 0 1.97.13 2.89.38
            2.2-1.48 3.17-1.17 3.17-1.17
            .63 1.57.23 2.73.11 3.02.74.8
            1.19 1.82 1.19 3.07 0 4.41-2.69
            5.39-5.25 5.67.41.35.78 1.04.78
            2.1 0 1.52-.01 2.75-.01 3.12
            0 .3.21.67.8.55A11.51 11.51 0 0 0
            23.5 12C23.5 5.65 18.35.5 12 .5Z"/>

        </svg>

    `,


    linkedin: `

        <svg viewBox="0 0 24 24">

            <path d="M4.98 3.5a2.5 2.5 0 1 0
            0 5 2.5 2.5 0 0 0 0-5ZM2.75
            9.5h4.46V21H2.75V9.5ZM9.9
            9.5h4.28v1.57h.06c.6-1.14
            2.05-2.34 4.22-2.34 4.51 0
            5.34 2.97 5.34 6.84V21h-4.46v-4.82
            c0-1.15-.02-2.62-1.6-2.62-1.6
            0-1.84 1.25-1.84 2.54V21H9.9V9.5Z"/>

        </svg>

    `,


    instagram: `

        <svg viewBox="0 0 24 24">

            <path d="M7 2h10a5 5 0 0 1
            5 5v10a5 5 0 0 1-5 5H7a5
            5 0 0 1-5-5V7a5 5 0 0
            1 5-5Zm0 2a3 3 0 0 0-3
            3v10a3 3 0 0 0 3 3h10a3
            3 0 0 0 3-3V7a3 3 0 0
            0 0-3-3H7Zm5 3.5A4.5
            4.5 0 1 1 7.5 12 4.5
            4.5 0 0 1 12 7.5Zm0
            2A2.5 2.5 0 1 0 14.5
            12 2.5 2.5 0 0 0 12
            9.5ZM17.75 6a1.25
            1.25 0 1 1-1.25 1.25A1.25
            1.25 0 0 1 17.75 6Z"/>

        </svg>

    `,


    facebook: `

        <svg viewBox="0 0 24 24">

            <path d="M13.5 21v-8h2.75l.41-3
            h-3.16V8.08c0-.87.24-1.46
            1.49-1.46h1.59V3.94c-.28-.04
            -1.25-.12-2.38-.12-2.35
            0-3.96 1.44-3.96 4.08V10H7.5
            v3h2.74v8h3.26Z"/>

        </svg>

    `

};


/* =========================================================
   REDES SOCIALES
========================================================= */

const socialContainer =

    document.getElementById(
        "socialContainer"
    );


portfolioData.redes.forEach(

    social => {

        const card =
            document.createElement("a");


        card.className =
            "social-card";


        card.href =
            social.url;


        card.target =
            "_blank";


        card.rel =
            "noopener noreferrer";


        card.innerHTML = `

            <div class="social-icon">

                ${icons[social.icono] || ""}

            </div>


            <span class="social-name">

                ${social.nombre}

            </span>

        `;


        socialContainer.appendChild(card);

    }

);


/* =========================================================
   MENÚ RESPONSIVE
========================================================= */

const menuToggle =

    document.getElementById(
        "menuToggle"
    );


const navMenu =

    document.getElementById(
        "navMenu"
    );


menuToggle.addEventListener(

    "click",

    () => {

        navMenu.classList.toggle(
            "open"
        );

    }

);


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR
========================================================= */

document.querySelectorAll(
    ".nav-link"
).forEach(

    link => {

        link.addEventListener(

            "click",

            () => {

                navMenu.classList.remove(
                    "open"
                );

            }

        );

    }

);


/* =========================================================
   DETECTAR SECCIÓN ACTIVA
========================================================= */

const sections =

    document.querySelectorAll(
        "main section"
    );


const navLinks =

    document.querySelectorAll(
        ".nav-link"
    );


const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(

                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(

                            link => {

                                link.classList.remove(
                                    "active"
                                );


                                if (

                                    link.getAttribute(
                                        "href"
                                    ) ===

                                    "#" +
                                    entry.target.id

                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }

                        );

                    }

                }

            );

        },

        {

            threshold: 0.45

        }

    );


sections.forEach(

    section => {

        observer.observe(
            section
        );

    }

);


/* =========================================================
   AÑO ACTUAL
========================================================= */

document.getElementById(
    "currentYear"
).textContent =

    new Date().getFullYear();