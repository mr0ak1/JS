const myNums = [1,2,3,4,5]

const totalValue = myNums.reduce((acc,currVal)=> acc+ currVal , 0)
console.log(totalValue);


const shoppingCart=[
    {
        itemName : "JS Course",
        price: 2999,
    },
    {
        itemName : "py Course",
        price: 999,
    },
    {
        itemName : "Mobile dev Course",
        price: 5999,
    },
    {
        itemName : "DS Course",
        price: 12999,
    },
]


const cartValue = shoppingCart.reduce((acc,item)=>(acc+item.price) ,0)

console.log(cartValue);
