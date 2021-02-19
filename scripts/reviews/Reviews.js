import { getReviews, useReviews } from "./ReviewsProvider.js"
import { ReviewsList } from "./ReviewsList.js"

const eventHub = document.querySelector("body")
eventHub.addEventListener("reviewsNavClicked", event => {
    Reviews()
})

eventHub.addEventListener("reviewsStateChanged", event => {
    Reviews()
})

export const Reviews = () => {
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Reviews"
    // get reference to DOM element
    const contentTarget = document.querySelector("main")
    getReviews()
        .then(() => {
            const reviews = useReviews()
            contentTarget.innerHTML = `
    <section class="reviews__container">
        <div class="mar-r">
            ${ReviewsList(reviews)}
        </div>
    </section>
    `
        })
}