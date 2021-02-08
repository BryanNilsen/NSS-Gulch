let menuCategories = [];

export const getMenuCategories = () => {
    return fetch("http://localhost:5000/menus")
    .then(response => response.json())
    .then(parsedItems => {
        console.table(parsedItems)
        menuCategories = parsedItems
    })

}

export const useMenuCategories = () => {
    return menuCategories.slice()
}