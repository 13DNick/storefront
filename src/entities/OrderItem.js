export let OrderItem = (id, order_id, product_id, name, unitPrice, quantity, price, imageURL) => {
    return {
        id: id,
        order_id: order_id,
        product_id: product_id,
        name: name,
        unitPrice: unitPrice,
        quantity: quantity,
        price: price,
        imageURL: imageURL
    }
}