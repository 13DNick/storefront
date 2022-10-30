export let OrderItem = (name, unitPrice, quantity, price, imageURL, productId) => {
    return {
        name: name,
        unitPrice: unitPrice,
        quantity: quantity,
        price: price,
        imageURL: imageURL,
        productId: productId
    }
}