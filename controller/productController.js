const {products}=require('../store')


const getAllProducts=(req,res,next)=>{
    res.status(200).json(products)
}
const getSingleProducts=(req,res,next)=>{
    const prodId=parseInt(req.params.id)
    let product=''
    for (let index = 0; index < products.length; index++) {
        if(products[index].id===prodId){
            product=products[index]
        break;}
    }
    res.status(200).json({data:product})
}


const addProduct=(req,res)=>{
    try {
        console.log(req.body)
        // const { carName, year, manufacturer, vin } = req.body;

    const newProduct = {
        id: products.length + 1, // Simple ID generation
        "car name": req.body["car name"],
        year: req.body.year,
        manufacturer: req.body.manufacturer,
        vin: req.body.vin,
    };
    products.push(newProduct);
    console.log(newProduct)
    res.status(201).json(newProduct);}
    catch(error){
        console.log(error)
    }

}
    const updateProduct=(req,res,next)=>{
        try {
            const productId = parseInt(req.params.id);
            const productIndex = products.findIndex(p => p.id === productId);
            
            if (productIndex !== -1) {
                // Update the product
                products[productIndex] = {
                    id: productId, // Maintain the same ID
                    carName: req.body["car name"],
                    year: req.body.year,
                    manufacturer: req.body.manufacturer,
                    vin: req.body.vin,
                };
                res.json(products[productIndex]);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            console.error("Error updating product:", error); // Log the error
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    
    // res.status(200).json({data:store})
    }
    


module.exports={getAllProducts,getSingleProducts,updateProduct, addProduct}