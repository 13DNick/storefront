export let Order = (totalPrice, totalQuantity, items, dateCreated) => {
    return {
        totalPrice: totalPrice, totalQuantity: totalQuantity, items: items, dateCreated: dateCreated
    }
};