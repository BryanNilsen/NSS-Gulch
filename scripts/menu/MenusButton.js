import "./MenuList.js"
import "./MenuSelect.js"

export const MenusButton = () => {
    const contentTarget = document.getElementById("menus-btn__container")
    contentTarget.innerHTML = `
    <button id="menus-nav">Menus</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "menus-nav") {
        const customEvent = new CustomEvent("menusNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})