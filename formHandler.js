// DOM Elements
const contactForm = document.querySelector("#contact-form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

// Modal Elements
const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const modalOverlay = document.querySelector(".modal-overlay")
const closeModalButton = document.querySelector("#close-modal")

// Regex
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'\.]+$/
// email regex courtesy of bortzmeyer
// https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const messageRegex = /^[^<>]+$/

contactForm.setAttribute("novalidate", true)
contactForm.addEventListener("submit", validateForm)
closeModalButton.addEventListener("click", closeModal)

function validateForm(e) {
  e.preventDefault()

  // validate each input
  if (isValid(email, emailRegex) && isValid(name, nameRegex) && isValid(message, messageRegex)) {
    console.log("Form is looking good, good job!")
    openModal()
    contactForm.reset()
  } else {
    console.log("Something is not valid")
  }
}

function isValid(element, regex) {
  return regex.test(element.value)
}

function openModal() {
  modal.classList.add("active")
  body.classList.add("modal-open")
  modalOverlay.classList.add("active")
}

function closeModal() {
  modal.classList.remove("active")
  body.classList.remove("modal-open")
  modalOverlay.classList.remove("active")
}