let text = document.querySelectorAll(".text")
let image = document.querySelector(".image")
let backdrop = document.querySelector(".backdrop")
let modal = document.querySelector(".modal")
let card = document.querySelectorAll(".card")
let header = document.querySelector(".name")
let description = document.querySelector(".description")
let desc = [
  "I created this. It's kinda neat",
  "Meadows. Kinda nice to be in one",
  "Doggo, the love of my life and also is my profile picture",
  "Look up at the sky, what can you see?",
  "Minecraft Shader Sky (One of my project's background)",
  "Unused background in some other game",
  "The same profile picture, just flipped upside down",
  "My favorite flower"
]
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
    header.textContent = text[index].textContent
    image.style.backgroundImage = card[index].style.backgroundImage
    description.textContent = "\"" + desc[index] + "\""
    backdrop.style.display = "flex"
}
function CloseModal() {
    backdrop.style.display = "none"
}
