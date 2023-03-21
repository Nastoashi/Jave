const navbarMenu = document.getElementById('navbar')
const burgerMenu = document.getElementById('burger')
const overlayMenu = document.querySelector('.overlay')
const menuItem = document.querySelectorAll('.menu-item, .menu-item-first' )
var em = document.getElementById('email')
var emError = document.getElementById('error')
const submit = document.getElementById('submit')
const btn = document.getElementById('contact')
const btnSbm = document.getElementById('sbm-txt')

// Show and Hide Navbar Function
const toggleMenu = () => {
  navbarMenu.classList.toggle('active')
  overlayMenu.classList.toggle('active')
}

// Fixed Resize Window Function
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains('active')) {
      toggleMenu()
    }
    if (navbarMenu.querySelector('.menu-dropdown.active')) {
      collapseSubMenu()
    }
  }
}

// Initialize Event Listeners
burgerMenu.addEventListener('click', toggleMenu)
overlayMenu.addEventListener('click', toggleMenu)
window.addEventListener('resize', resizeWindow)
for (var r = 0 ; r < menuItem.length; r++) {
  menuItem[r].addEventListener('click' , toggleMenu , false ) ; 
}

btn.addEventListener('mouseover', (event) => {
  btnSbm.style.width = '70px'
})
btn.addEventListener('mouseleave', (event) => {
  btnSbm.style.width = '0'
})

const acc = document.getElementsByClassName('line-block')
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}

function validateEmail() {
  if (!em.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emError.style.opacity = '1'
    return false
  }
  emError.style.opacity = '0'
  return true
}

submit.addEventListener('submit', (e) => {
  e.preventDefault()
  if (validateEmail() == true) {
    let ebody = `
    <h1>Email: </h1>${em.value}
    `

    Email.send({
      SecureToken: '8bc29029-249c-4ca1-a6ba-cbe567caf9e7', //add your token here
      To: 'jackpigeon8@outlook.com',
      From: 'defect.detector.landing@gmail.com',
      Subject: 'Submission from JaveTech',
      Body: ebody,
    }).then(function thank() {
      em.value = ''
      document.getElementById('formInput').classList.add('thank')
      document.getElementById('formBtn').classList.add('thank')
      document.getElementById('formThank').classList.add('thank')
      setTimeout(() => {
        document.getElementById('formInput').classList.remove('thank')
        document.getElementById('formBtn').classList.remove('thank')
        document.getElementById('formThank').classList.remove('thank')
      }, 3000)
    })
  }
})

// scroll

window.addEventListener('scroll', function() { 
  if (window.scrollY >= 1) { document.querySelector("header").classList.add("active") }
  else { document.querySelector("header").classList.remove("active") }
})


