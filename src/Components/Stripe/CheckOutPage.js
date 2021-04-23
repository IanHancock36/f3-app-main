
import { setItemAsync } from 'expo-secure-store';
import React,{useState} from 'react'

const CheckOutPage =() => {
    const [cart, setCart] = useState([
        {
            id: 1, 
            name: '30 min Training Session',
            imageURl: '"https://i.ibb.co/qrKdbv4/Screenshot-1.png"',
            qty: 1,
            price: 50
        },
        {
            id: 2, 
            name: '60 min Training Session',
            imageURl: 'https://i.ibb.co/6YrtQ5W/Screenshot-2.png',
            qty: 1,
            price: 75, 
        },
 ])

    const removeItem = (item) => {
        const filter = cart.filter((x)=> x.id !== item.id)
        setCart(filter)
    };
    const total = cart.reduce(
        (accumulateValue, currentValue) => 
        accumulateValue + currentValue.qty * currentValue.price,0 
    )
    return (
        <div className = 'checkout-page'>
            <div className ='head-block'>
            <span className="description">Description</span>
            <span className="quantity">Quantity</span>
            <span className="remove">Remove</span>
            <span className="price">Price</span>
            </div>
        <div className ='content-block'>
            {cart.map((item)=>(
                <div className ='item'>
                    <div className ='description'>
                        <img src={item.imageURl} alt ='stuff' />
                    </div>

                    <div className = 'quantity'>
                        <span>{item.qty}</span>
                    </div>
                    
                    <div className='price'> ${item.price} </div>
                    <div className='remove' oncClick ={() => removeItem(item)}> X </div>
            
                </div>
            ))}

        </div>
            <div className ='total'>Total :${total} </div>
        </div>
    )
}

export default CheckOutPage
