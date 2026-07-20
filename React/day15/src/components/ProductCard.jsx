const ProductCard = ({data}) => {
  return (
    <>
    <div className=" justify-center items-center bg-rose-400 rounded-2xl flex flex-col">
        <img src={data.images} alt="No Ref" className="w-20 h-20" />
        <h2>{data.title}</h2>
        <h3>{data.category}</h3>
        <h3>{data.price}</h3>
    </div>
    </>
  )
}

export default ProductCard