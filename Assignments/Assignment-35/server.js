const exp = require("express");
const app = exp();

app.use(exp.json()); 

let listOfProducts = [
    {
        id: 1,
        name: "Product 1"
    },
    {
        id: 2,
        name: "Product 2"
    },
    {
        id: 3,
        name: "Product 3"
    }
];

app.get('/products', (req, res) => {
    res.send(listOfProducts);
});

app.get('/products/:id', (req, res) => {
    let id = req.params.id;
    let product = listOfProducts.find(product => product.id == id);
    if (!product) {
        res.send({ message: 'Invalid product id' });
    } else {
        res.send(product);
    }
});

app.post('/product', (req, res) => {
    let product = req.body;
    listOfProducts.push(product);
    res.send({ message: 'Added Product', payLoad: listOfProducts });
});

app.put('/product', (req, res) => {
    let product = req.body;
    let index = listOfProducts.findIndex(p => p.id == product.id);
    if (index == -1) {
        res.send({ message: 'Invalid Product id' });
    } else {
        listOfProducts[index] = product;
        res.send({ message: 'Updated Product', payLoad: listOfProducts });
    }
});

app.delete('/product', (req, res) => {
    let id = req.body.id;
    let index = listOfProducts.findIndex(p => p.id == id);
    if (index == -1) {
        res.send({ message: 'Invalid product id' });
    } else {
        listOfProducts.splice(index, 1);
        res.send({ message: 'Deleted product', payLoad: listOfProducts });
    }
});

app.listen(3500, () => {
    console.log('http server started on http://localhost:3500');
});
