export const LocationsNavBtn = () => {
    const contentTarget = document.getElementById("locations-btn__container")
    contentTarget.innerHTML = `
    <button id="show-locations">Locations</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "show-locations") {
        const customEvent = new CustomEvent("locationsNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})