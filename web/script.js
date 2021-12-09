//Im Hamburger-Menu dropdown von dropdown-Elementen
let responsiveDropdownButton = document.getElementsByClassName('responsive-dropdown-button')
let dropdownMenu = document.getElementsByClassName('dropdown-menu')

for (let index = 0; index < responsiveDropdownButton.length; index++) {
    responsiveDropdownButton[index].addEventListener('click', () => {
        dropdownMenu[index].classList.toggle('active')
        for (let j = 0; j < responsiveDropdownButton.length; j++) {
            if (index != j){
                dropdownMenu[j].classList.remove('active')
            }
        }
    })
}

//Wenn auf dropdownButton ohne Content geclickt wird. Alle mit Content minimieren
let noContentDropdownButton = document.getElementsByClassName('no-content-dropdown-button')
for (let index = 0; index < noContentDropdownButton.length; index++) {
    noContentDropdownButton[index].addEventListener('click', () => {
        for (let j = 0; j < responsiveDropdownButton.length; j++) {
            dropdownMenu[j].classList.remove('active')
        }
    })
}

//Hamburger-Menu dropdown toggle
let hamburgerButton = document.getElementsByClassName('hamburger-button')[0]
let navbar = document.getElementsByClassName('navbar')[0]

hamburgerButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    hamburgerButton.classList.toggle('active')
    //dropdown-Elemente removen wenn geöffnet/geschlossen
    for (let i = 0; i < responsiveDropdownButton.length; i++) {
        dropdownMenu[i].classList.remove('active')
    }
})


let dropdownButton = document.getElementsByClassName('dropdown-signal')

for (let index = 0; index < dropdownButton.length; index++) {
    dropdownButton[index].addEventListener('click', () => {
        navbar.classList.remove('active')
        hamburgerButton.classList.remove('active')
    })
}


//Bei click ausserhalb Navbar, Navbar minimieren
let main = document.getElementsByTagName('main')[0]
let footer = document.getElementsByTagName('footer')[0]

main.addEventListener('click', () => {
    navbar.classList.remove('active')
    hamburgerButton.classList.remove('active')
})

footer.addEventListener('click', () => {
    navbar.classList.remove('active')
    hamburgerButton.classList.remove('active')    
})

var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    73: 'i',
    77: 'm',
    83: 's',
    84: 't',
    85: 'u'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

let html = document.getElementsByClassName('html')[0]

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {
        konamiCodePosition++;

        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    html.classList.toggle('konami-code');
}



var konamiCode2 = ['a', 'u', 't', 'i', 's', 'm', 'u', 's', 'down', 'down'];

var konamiCodePosition2 = 0;


document.addEventListener('keydown', function(e) {
    key = allowedKeys[e.keyCode];
    var requiredKey2 = konamiCode2[konamiCodePosition2];

    if (key == requiredKey2) {
        konamiCodePosition2++;

        if (konamiCodePosition2 == konamiCode2.length) {
            activateCheats2();
            konamiCodePosition2 = 0;
        }
    } else {
        konamiCodePosition2 = 0;
    }
});

function activateCheats2() {
    html.classList.toggle('autismus');
}



let toTop = document.getElementsByClassName('to-top')[0]

document.addEventListener('scroll', () =>{
    if (window.scrollY != 0) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})




   