// let menuCategories = [];
// let menuItems = [];

export const getMenuCategories = () => {
    return fetch("http://localhost:5000/menus")
        .then(response => response.json())
        .then(parsedItems => {
            // console.table(parsedItems)
            // menuCategories = parsedItems
            return parsedItems
        })

}

// export const useMenuCategories = () => {
//     return menuCategories.slice()
// }


export const getMenuItems = () => {
    return fetch("http://localhost:5000/items")
        .then(response => response.json())
        .then(parsedItems => {
            // console.table(parsedItems)
            // menuItems = parsedItems
            return parsedItems
        })

}

// export const useMenuItems = () => {
//     return menuItems.slice()
// }

