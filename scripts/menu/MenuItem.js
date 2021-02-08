export const MenuItem = (menuObj) => {
    // return HTML representation of single menu object
    return `
    <div>
        <h3>${menuObj.name} - ${menuObj.price}</h3>
        <p>${menuObj.description}</p>
    </div>
    `
}