import { getMenuItems, useMenuItems } from "./MenuProvider.js"
import { MenuItem } from "./MenuItem.js"

export const MenuList = () => {
    getMenuItems()
        .then(() => {
            const menuItems = useMenuItems()
            renderMenuToDOM(menuItems)
        })
}

const renderMenuToDOM = (menuArrary, menuText) => {
    if (!menuText) {
        menuText = "All Items"
    }
    // get reference to DOM element
    const contentTarget = document.querySelector("main")
    // iterate items array and make HTML representation
    let menuHTML = menuArrary.map(item => MenuItem(item)).join("")
    // render to DOM
    contentTarget.innerHTML = `
    <section class="menu__container">
        <h2>Menu - ${menuText}</h2>
        <hr/>
        <section class="menu__list">
            ${menuHTML}
        </section>
    </section>
    `

}

const eventHub = document.querySelector("body")
eventHub.addEventListener("menuSelected", event => {
    const menuId = event.detail.menuId
    const menuText = event.detail.menuText
    let menuItems = useMenuItems()
    if (menuId !== 0) {
        menuItems = useMenuItems().filter(item => item.menuId === menuId)
    }
    renderMenuToDOM(menuItems, menuText)
})