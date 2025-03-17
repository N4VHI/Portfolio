document.addEventListener("DOMContentLoaded", function () {
    const toggle11 = document.getElementById("toggle11");
    const toggle21 = document.getElementById("toggle21");
    const toggle12 = document.getElementById("toggle12");
    const toggle22 = document.getElementById("toggle22");
    const header = document.getElementById("header");
    const contenido = document.querySelector(".contenido");

    /* ==========================
       SINCRONIZACIÓN DE CHECKBOXES
       ========================== */
    function syncCheckboxes(source, target) {
        target.checked = source.checked;
    }

    toggle11.addEventListener("change", function () {
        syncCheckboxes(toggle11, toggle21);
        document.body.classList.toggle("light-mode", toggle11.checked);
        header.classList.toggle("light-header", toggle11.checked);
        contenido.classList.toggle("light-contenido", toggle11.checked);
    });

    toggle21.addEventListener("change", function () {
        syncCheckboxes(toggle21, toggle11);
        document.body.classList.toggle("light-mode", toggle21.checked);
        header.classList.toggle("light-header", toggle21.checked);
        contenido.classList.toggle("light-contenido", toggle21.checked);
    });

    toggle12.addEventListener("change", function () {
        syncCheckboxes(toggle12, toggle22);
        toggleLanguage();
    });

    toggle22.addEventListener("change", function () {
        syncCheckboxes(toggle22, toggle12);
        toggleLanguage();
    });

    /* ==========================
       FUNCIÓN PARA TRADUCIR CONTENIDO
       ========================== */
    const translations = {
        "Show CV": "Revisar CV",
        "About": "Sobre mí",
        "Knowledge": "Conocimientos",
        "Projects": "Proyectos",
        "Experience": "Experiencia",
        "Data Analyst": "Analista de Datos",
        "Web Developer": "Desarrollador Web",
        "My full name is Navhi Giordano Andrade Saavedra": "Mi nombre completo es Navhi Giordano Andrade Saavedra",
        "Currently studying Systems Engineering in 'Universidad Nacional de Ingeniería'":
            "Actualmente estudio Ingeniería de Sistemas en la 'Universidad Nacional de Ingeniería'",
        "Passionate about data analysis and web development":
            "Apasionado por el análisis de datos y el desarrollo web",
        "Data Analysis": "Análisis de Datos",
        "Web Development": "Desarrollo Web",
        "Languages": "Lenguajes",
        "Project Title": "Título de Proyecto",
        "Little project description": "Pequeña descripción del proyecto",
        "Didn't make the cut": "No pasé la entrevista",
        "Helped in the organization of the 'First Supply Chain Congress' in UNI":
            "Ayudé en la organización del Primer Congreso de Supply Chain en la UNI",
        "Worked as a private teacher for school and university students": 
            "Trabajé como profesor particular para alumnos desde primaria hasta universitarios",
        "I made this portfolio from scratch <3": "Portafolio creado desde 0 por mí <3"
    };

    function toggleLanguage() {
        document.querySelectorAll("h1, h2, h3, p, a").forEach((element) => {
            let text = element.textContent.trim();
            if (translations[text]) {
                element.textContent = translations[text];
            } else {
                let key = Object.keys(translations).find((key) => translations[key] === text);
                if (key) element.textContent = key;
            }
        });
    }
});

