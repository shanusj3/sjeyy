
const ProductCard = ({ product }) => {
    return (
        <div className=" w-full  bg-slate-400">
            <img src={product.img} alt="" />
        </div>
    )
}

export default ProductCard