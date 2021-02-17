export const TeamNavBtn = () => {
    const contentTarget = document.getElementById("team-btn__container")
    contentTarget.innerHTML = `
    <button id="show-team">Our Team</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "show-team") {
        const customEvent = new CustomEvent("teamNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})