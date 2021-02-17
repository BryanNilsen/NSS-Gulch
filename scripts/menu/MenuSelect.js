import { getMenuCategories } from "./MenuProvider.js";

export const MenuSelect = () => {
    getMenuCategories()
        .then((menuData) => {
            // const menuCategories = useMenuCategories()
            return render(menuData)
        })
}

const render = (categoryArray) => {
    const contentTarget = document.getElementById("page-filter")
    const categoryOptions = categoryArray.map(item => {
        return `
        <option value="${item.id}">${item.name}</option>
        `
    }).join("")

    contentTarget.innerHTML = `
    <strong>Filter by: </strong>
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
        const customEvent = new CustomEvent("menuSelected", {
            detail: {
                menuId: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("menusNavClicked", event => {
    MenuSelect()
})