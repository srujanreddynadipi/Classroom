import mongoose from 'mongoose';

const productSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});
const Product = mongoose.model('Product', productSchema);
//products
export default Product;