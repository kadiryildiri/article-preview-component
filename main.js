const share = document.querySelector("#share")
const socailMedia = document.querySelector("#socailMedia")
const person = document.querySelector("#person")
const mobileSocailMedia = document.querySelector("#mobileSocailMedia")
const mobileShare = document.querySelector("#mobileShare")

share.addEventListener("click", () => {
    socailMedia.classList.toggle("md:hidden")
})

share.addEventListener("click", () => {
    person.classList.toggle("hidden")
    mobileSocailMedia.classList.toggle("hidden")
})

mobileShare.addEventListener("click", () => {
    person.classList.toggle("hidden")
    mobileSocailMedia.classList.toggle("hidden")
})
