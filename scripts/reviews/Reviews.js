import { getReviews, useReviews } from "./ReviewsProvider.js"
import { ReviewForm } from "./ReviewForm.js"
import { ReviewsList } from "./ReviewsList.js"

const eventHub = document.querySelector("body")
eventHub.addEventListener("showReviewsClicked", event => {
    Reviews()
})

eventHub.addEventListener("reviewsStateChanged", event => {
    Reviews()
})

export const Reviews = () => {
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
        <div class="mar-l">
            ${ReviewForm()}
        </div>
    </section>
    `
        })
}