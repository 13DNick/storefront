export let OrderItem = (name, unitPrice, quantity, price, imageURL) => {
    return {
        name: name,
        unitPrice: unitPrice,
        quantity: quantity,
        price: price,
        imageURL: imageURL
    }
}