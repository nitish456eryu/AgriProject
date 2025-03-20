
function Services(){
    const serviceData = [{id:1, service:"Accomodation", image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403816218.jpg?k=d9f8caf93abdc2074571d9a937a2a9ad9b8f76773a213c3694a0178b0a63df3f&o=&hp=1"},
                         {id:2, service:"Farm Experience", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MIKylHbg62uKeLeZNVV1oBMfes-LkzZu9w&s"},
                         {id:3, service:"Animal Feeding", image:"https://media.istockphoto.com/id/1144033030/photo/a-young-girl-feeds-a-lamb.jpg?s=612x612&w=0&k=20&c=BUIwdWfNWTEhIQnuZCOQaIyJHOIFEGeeHFx5snRfkJg="},
                         {id:4, service:"Fishing and pond activity", image:"https://monchasha.in/wp-content/uploads/2012/09/31.jpg"},
                         {id:5, service:"Outdoor Cooking", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7j0S8ablcv2YGRB78R-fTJSXSEmBZJIhYsQ&s"},
                         {id:6, service:"Camping", image:"https://cdn.pixabay.com/photo/2021/12/20/08/07/camping-6882479_640.jpg"},
                         {id:7, service:"Tractor Rides", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pJ58a3iZ6GlfE1TR97vzZJi5VSU1Viy_gA&s"}
                         ]
    return(
        <>
            <div className="product-list-container">
            <h2>Our Services</h2>
            <div className="product-list" >
                {serviceData.map(product=> (
                    <div key={product.id} className="product-item" >
                        <img src={product.image} alt={product.service} />
                        <h3>{product.service}</h3>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Services;
