import "./Reviews.js"

export const ReviewsNavBtn = () => {
    const contentTarget = document.getElementById("reviews-btn__container")
    contentTarget.innerHTML = `
    <button id="show-reviews">Reviews</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id === "show-reviews") {
        const customEvent = new CustomEvent("showReviewsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})