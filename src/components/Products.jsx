import data from "../db/data"
import ProductCard from "./ProductCard"

const Products = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                data && data.length > 0 ? data.map((item) => (
                    <ProductCard key={item.title} product={item} />
                )) : null
            }
        </div>
    )
}

export default Products