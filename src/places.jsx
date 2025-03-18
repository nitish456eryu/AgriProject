import React from "react";
import Navbar from './navbar';
import './App.css';
import Services from './service';
import ProductList from "./productList";
import Blog from "./Blog";

function ShowPlace(props){
    return (
    <>
        <div className="heading">
        <span className='logo'>NK<sup><i>Agro</i></sup></span>
        <Navbar />
        </div>
        
        <div className="frontPage">
            <div className="company-front" >
                <p className="Company-heading">NK Agro Tour</p>
                
            </div>
        
        
        <Services />
        </div>
        <Blog />
        <ProductList />
    </>
    )
}

export default ShowPlace;
/*<h1>{props.name} </h1>
        <img className="place" src={props.imagee} alt={props.name} />
        <p>{props.description} </p> */