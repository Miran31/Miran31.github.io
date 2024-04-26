// scrool acrive link start

let sections = document.querySelectorAll('section');
let navbar = document.querySelectorAll('.navlink');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop){
            currentSection = section.id;
        }
    });

    navbar.forEach(navlink =>{
        if(navlink.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navlink.classList.add('active');
        }
    });
});
// scrool acrive link end


// scrool reveal start


// scrool reveal end



// typed js start

const typed = new Typed('.multipletext',{
    strings: ['Software Engineer', 'Full Stack Developer','Web developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// typed js end