import { Review } from "./Review.js";

export const ReviewsList = (reviewsArray) => {
    // iterate items array and make HTML representation
    let reviewsHTML = reviewsArray.map(item => Review(item)).join("")
    return `
        <section class="review__list">
            ${reviewsHTML}
        </section>
    `
}

