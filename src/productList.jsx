import React from "react";
import "./productList.css";

const products = [
    {id:1 , name:"Sunrise Farm" , price:500, img:"sunrise.jpg", description:"This is Our Sunrise Farm, located in super location of Meghalaya."},
    {id:2 , name:"Bhavani Farm" , price:700, img:"agrifield.jpg", description:"a"},
    {id:3 , name:"Green Farm" , price:700, img:"paddyfarm.jpg", description:"a"},
    {id:4 , name:"Kumar Agri Farm" , price:1200, img:"orangegarden.jpg", description:"a"},
    {id:5 , name:"Nomad Farm" , price:1000, img:"woodFarm.jpg", description:"a"},
    {id:6 , name:"Jain Land" , price:1000, img:"jainland.jpg", description:"a"},
    {id:7 , name:"Orange Farm" , price:500, img:"OrangeFarm.jpg", description:"a"}
];


const ProductList=()=>{
    const bookPlace = () => {
        return (
            <BookingPage />
        )
    }

   const myplaces = (product)=>{
        return(
            <div><button onClick={bookPlace}>
                <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Rs.-{product.price}/day</p>
                </button>
            </div>
        );
            
    }; 
    
    return (
        <div className="product-list-container">
            <h2>Our Products</h2>
            <div className="product-list" >
                {products.map(product=> (
                    <div key={product.id} className="product-item" onClick={(product)=> {
                    const abc= myplaces(product);
                    return abc;}}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Rs.-{product.price}/day</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;