let menuItems = [];

export const getMenuItems = () => {
    return fetch("http://localhost:5000/items")
        .then(response => response.json())
        .then(parsedItems => {
            console.table(parsedItems)
            menuItems = parsedItems
        })

}

export const useMenuItems = () => {
    return menuItems.slice()
}
