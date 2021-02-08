import { getMenuCategories, useMenuCategories } from "./NavProvider.js";

export const NavSelect = () => {
    getMenuCategories()
        .then(() => {
            const menuCategories = useMenuCategories()
            renderToDOM(menuCategories)
        })
}

const renderToDOM = (categoryArray) => {
    const contentTarget = document.getElementById("menu-select__container")
    const categoryOptions = categoryArray.map(item => {
        return `
        <option value="${item.id}">${item.name}</option>
        `
    }).join("")

    contentTarget.innerHTML += `
    <select id="menu--select">
        <option value="0">All Items</option>
        ${categoryOptions}
    </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (changeEvent) => {
    // check if target id is "menu--select"
    if (changeEvent.target.id === "menu--select") {
        const selectedOptionValue = changeEvent.target.value
        const selectedOptionText = changeEvent.target.selectedOptions[0].innerHTML
        const customEvent = new CustomEvent("menuSelected", {
            detail: {
                menuId: parseInt(selectedOptionValue),
                menuText: selectedOptionText
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})