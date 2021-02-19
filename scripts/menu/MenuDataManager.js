
export const getMenuCategories = () => {
    return fetch("http://localhost:5000/menus")
        .then(response => response.json())
        .then(menuCategoriesFromAPI => {
            // console.table(menuCategoriesFromAPI)
            return menuCategoriesFromAPI
        })
}



export const getMenuItems = () => {
    return fetch("http://localhost:5000/items")
        .then(response => response.json())
        .then(menuItemsFromAPI => {
            // console.table(menuItemsFromAPI)
            return menuItemsFromAPI
        })
}


