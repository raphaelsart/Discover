function toggleMode() {
    const htlm = document.documentElement
htlm.classList.toggle('light')


const img = document.querySelector("#profile img")

if(htlm.classList.contains('light')) {

    img.setAttribute('src', './assets/avatar-light.png')
} else {
    img.setAttribute('src', './assets/avatar-dark.png')
}

}