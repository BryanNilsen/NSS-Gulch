export const TeamNavBtn = () => {
    const contentTarget = document.getElementById("team-btn__container")
    contentTarget.innerHTML = `
    <a id="team-nav" href="#team" class="navlink">Our Team</a>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "team-nav") {
        const customEvent = new CustomEvent("teamNavClicked")
        eventHub.dispatchEvent(customEvent)
    }
})