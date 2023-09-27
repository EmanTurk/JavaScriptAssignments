const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id) {
        return candyStore.candies.find(candy => candy.id === id);
    }
    
    // Test the function
    console.log(getCandy(candyStore, "5hd7y")); 
    console.log(getCandy(candyStore, "nonexistentId"));  

    function getPrice(candyStore, id){
return candyStore.candies.find (candy=> candy.price=== price);}
console.log(getCandy(candyStore,  "5hd7y"));  

    
    
    
    
    