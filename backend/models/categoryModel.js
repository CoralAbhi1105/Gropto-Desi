const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    productCategory: { type: String, required: true },
    categoryImage: { type: String, required: true },
    productSubcategory: [
        {
            type: Schema.Types.ObjectId, ref: 'Subcategory'
        }
    ],
    created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Category', categoriesSchema);