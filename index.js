let text = document.querySelectorAll(".text")
let image = document.querySelector(".image")
let backdrop = document.querySelector(".backdrop")
let modal = document.querySelector(".modal")
let card = document.querySelectorAll(".card")
let header = document.querySelector(".name")
let description = document.querySelector(".description")
backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      e.preventDefault()
      CloseModal()
    }
})

card.forEach((cards, index) => {
  card[index].addEventListener("click", (e) => {
    e.preventDefault()
    OpenModal(index)
  })
})
function OpenModal(index) {
    modal.style.backgroundImage = card[index].style.backgroundImage
    backdrop.style.display = "flex"
}
function CloseModal() {
    backdrop.style.display = "none"
}
