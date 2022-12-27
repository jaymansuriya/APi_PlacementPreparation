const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        console.log(error)
        res.json({ message: error });
      }
};

// Single product
const product_details = async (req, res) => {
    try {
      
        const product = await Product.find({ch:Number(req.params.ch)});
        console.log(req.params)
         console.log((req.params.ch))
         console.log(typeof(req.params.ch))
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const product_create = async (req, res) => {
    console.log(req)
    const product = new Product({
        title: "a",
        price: "a",
        image: "a",
        details: "a"
      });
    // const product = new Product({
    //     title: req.body.title,
    //     price: req.body.price,
    //     image: req.body.image,
    //     details: req.body.details
    //   });
    
      try {
        console.log('in')
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          // title: _.get(req.body, "title", ""),   // lodash
          price: req.body.price,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }