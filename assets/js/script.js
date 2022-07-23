$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    })
});

// fetch projects
const projectsContainer = document.getElementById('projects-container');
let project = '';

fetch('./assets/js/projects.json')
    .then(res => res.json())
    .then(projects => {
        // console.log(projects);

        projects.forEach(proj => {
            // console.log(proj);
            project += `
    <div class="box">
        <img src="./assets/projects-img/${proj.meta}.png" alt="project">
        <div class="content">
        <h3>${proj.name}</h3>
        <p>${proj.desc}</p>
        <div class="btns">
            <a href="projects/${proj.meta}" class="btn"><i class="fas fa-eye"></i> View</a>
            <a href="https://github.com/jigar-sable/JavaScript-Projects/tree/main/projects/${proj.meta}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
        </div>
    </div>`;
        });
        projectsContainer.innerHTML = project;
    });


// text animation
var _CONTENT = [
    "Build a JavaScript Calculator.",
    "Build a JavaScript Todo List.",
    "Build a JavaScript Age Calculator.",
    "Build a JavaScript Clock.",
    "Build a JavaScript Issue Tracker.",
    "Build a Password Generator.",
    "Build a JavaScript Weather API.",
    "So Let's Get Started!"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
var _CURSOR = document.querySelector("#cursor");

// typing effect
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if (text === _CONTENT[_PART]) {
        // hide the cursor
        _CURSOR.style.display = 'none';
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// deleting effect
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}
_INTERVAL_VAL = setInterval(Type, 100);