import {getDinnerMenu, useDinnerMenu} from "./DinnerProvider.js"

export const DinnerList = () => {
    getDinnerMenu().then(()=> {
        const dinnerMenu = useDinnerMenu()
        console.log('dinnerMenu: ', dinnerMenu);
        renderToDOM(dinnerMenu)
    })
}

const renderToDOM = (menuArrary) => {
    // get reference to DOM element
    const contentTarget = document.querySelector("main") 
    // iterate items array and make HTML representation
    let menuHTML = menuArrary.map(item => DinnerItem(item)).join("")
    // render to DOM
    contentTarget.innerHTML = `
    <h2>Dinner - Served daily from 6 'til close</h2>
    <hr/>
    <section class="menu__list">
    ${menuHTML}
    </section>
    `

}

const DinnerItem = (menuObj) => {
    // return HTML representation of single menu object
    return `
    <div>
        <h3>${menuObj.name} - ${menuObj.price}</h3>
        <p>${menuObj.description}</p>
    </div>
    `
}