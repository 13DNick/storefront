export let Purchase = (customer, order, orderItems) => {
    return {
        customer: customer,
        order: order,
        orderItems: orderItems
    }
}