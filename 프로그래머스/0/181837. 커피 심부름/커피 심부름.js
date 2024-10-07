function solution(order) {
    let totalPrice = 0;
    
    const AMERICANO_PRICE = 4500;
    const CAFELATTE_PRICE = 5000;

    order.forEach(item => {
        if (item.includes('americano')) {
            totalPrice += AMERICANO_PRICE;
        } else if (item.includes('cafelatte')) {
            totalPrice += CAFELATTE_PRICE;
        } else if (item === 'anything') {
            totalPrice += AMERICANO_PRICE;
        }
    });
    
    return totalPrice;
}