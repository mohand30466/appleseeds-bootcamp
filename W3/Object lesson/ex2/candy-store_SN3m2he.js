var candyStore = {
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
    return candyStore.candies.find(x => x.id === id);
}

function getPrice(candyStore, id) {
    return getCandy(candyStore, id).price;
}

function addCandy(candyStore, id, name, price) {
    const candy = getCandy(candyStore, id);
    if (candy) {
        candy.amount++;
    } else {
        candyStore.candies.push({
            name: name,
            id: id,
            price: price,
            amount: 1
        });
    }
}

function buy(candyStore, id) {
    var candy = getCandy(candyStore, id);
    if (candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount--;
    }
}


function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++){
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else if (typeof expected === "object"){
        for (prop in expected){
            test_equal(actual[prop], expected[prop]);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}

test_equal(getCandy(candyStore, "as12f"), {name: "mint gum",id: "as12f",price: 2,amount: 2});
test_equal(getPrice(candyStore, "5hd7y"), 5);
buy(candyStore, "as12f");
test_equal(getCandy(candyStore, "as12f").amount, 1);
test_equal(candyStore.cashRegister, 202);
buy(candyStore, "as12f");
buy(candyStore, "as12f");
test_equal(getCandy(candyStore, "as12f").amount, 0);
test_equal(candyStore.cashRegister, 204);
addCandy(candyStore, "hfy46", "Bamba", 4);
test_equal(candyStore.candies.length, 3);
buy(candyStore, "hfy46");
test_equal(getCandy(candyStore, "hfy46").amount, 0);
test_equal(candyStore.cashRegister, 208);