import React, { useCallback, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';
import DaysSince from './daysinc';
import DaysAgo from './daysinc';
import StarDisplay from './StarDisplay';

const ProductDetail =  React.memo(() => {
   const productdetail = useLoaderData(); 
   const [selectedIndex, setSelectedIndex] = useState(0);


   const {id} = useParams();
   const [quantityCount, setQuantityCount] = useState(1)
   const navigate = useNavigate();

 console.log('productdetail',productdetail)
    const quantityInc = () =>{
        setQuantityCount((prev) => prev + 1)
    }

    const quantityDec = () => {
        if(quantityCount == 1) {
            return
        }
      setQuantityCount((prev) => prev - 1);
    }
    const navagateProduct = () => {
        navigate('/product')
    }
    const handleThumbnailClick = useCallback((e) => {
        const index = Number(e.currentTarget.dataset.index);
        setSelectedIndex(index);
      }, [selectedIndex]);
    
    return (
        
        <div className="max-w-7xl mx-auto px-4 py-8">
            <button onClick={navagateProduct}>Back to product list</button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-lg aspect-square flex items-center justify-center">
                    <img src={productdetail.images[selectedIndex]} alt="Nike Air Max 2024" className="rounded-lg"/>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {productdetail.images.map((img,index) => {
                     const isActive = index === selectedIndex;

                        return(
                         <div className='img-container'  key={index} >
                       <img src={img} alt="Thumbnail 1" data-index={index}  onClick={handleThumbnailClick} width={140} height={163} className={`rounded-lg cursor-pointer hover:opacity-75 ${isActive ? "border-blue-500 ring-2 ring-blue-300" : "border-transparent"}`}/>
                     
                        </div>
                        )
                    })}
                   
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{productdetail.title}</h1>
                    <p className="text-gray-500">{productdetail.category}</p>
                </div>

                <div className="flex items-center space-x-2">
             
                    <div className="text-gray-600" style={{ display: "flex", alignItems: "center"}}><div style={{marginRight:"5px" }}> Rating : </div> <StarDisplay rating={productdetail.rating}/></div>
                </div>

                <div>
                    <div className="text-2xl font-bold text-gray-900">${productdetail.price}</div>
                </div>
 

                <div>
                    <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                    <div className="flex items-center space-x-2">
                        <button onClick={quantityDec} className="border rounded-md p-2 hover:border-black" fdprocessedid="fund7"><i className="fas fa-minus">-</i></button>
                        <input type="number" value={quantityCount} min="1" className="w-16 text-center border rounded-md p-2" fdprocessedid="1yqzg" readOnly/>
                        <button onClick={quantityInc} className="border rounded-md p-2 hover:border-black" fdprocessedid="whu9ch"><i className="fas fa-plus">+</i></button>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800" fdprocessedid="9ea5h">Add to Cart</button>
                 </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                    <p className="text-gray-600">{productdetail.description}</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Dynamic Air cushioning system</li>
                        <li>Breathable mesh upper with Flywire cables</li>
                        <li>Foam midsole for responsive cushioning</li>
                        <li>Rubber outsole for durable traction</li>
                        <li>Reflective details for visibility in low light</li>
                    </ul>
                </div>
            </div>
        </div>

        <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="space-y-6">
                {productdetail.reviews.map((item,index) => {
                    return (

                   
               
                 <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <div className="flex text-yellow-400 mb-1">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h3 className="font-semibold">{item.reviewerName}</h3>
                        </div>
                        <span className="text-gray-500"> <DaysAgo reviewDate={item.date}/></span>
                    </div>
                    <p className="text-gray-600">{item.comment}</p>
                </div>
                 )
 }) }
            
            </div>
        </section>
    </div>
    );
})

export default ProductDetail;

export const productdetailData = async({params}) => {
    const {id} = params;
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const res =  await response.json()
    return res
}

