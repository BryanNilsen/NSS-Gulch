let dinnerMenu = [];

export const getDinnerMenu = () => {
    return fetch("http://localhost:5000/items")
    .then(response => response.json())
    .then(parsedItems => {
        console.table(parsedItems)
        dinnerMenu = parsedItems.filter(item => item.menuId === 2)
    })

}

export const useDinnerMenu = () => {
    return dinnerMenu.slice()
}