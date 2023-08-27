import React from 'react';
import "./Style.css";


const End = () => {
    return (
    
        <div className='body'>
            <div className='baskedCart'>
            <div className='first'>
                <div className='tetx'>
                    <h1>
                    Your cart
                    </h1>
                    <p>Not ready to checkout?<a href="#">Continue Shopping</a> </p>
                </div>
            </div>
            <div className='second'>
                        <div className='img'>
                            
                        </div>
                    <div className='secondText'>
                            <div className='miniText'>
                                <p>THE BOY, THE MOLE, THE FOX AND THE HORSE</p>
                                <p>by Charlie Mackesy</p>
                            </div>
                            <div className='miniText2'>
                                <p>Quantity: 1</p>
                                <p>$99</p>
                            </div>
                    </div>
                    <div className='Remove'>
                    <button>Remove</button>
                    </div>
            </div>
            </div>



            <div className='buyCart'>
                <h1>Order Summary</h1>
                <div className='buy'>
                        <div className='Shipping'>
                            <h5>Shipping</h5>
                            <select className='choice'>
                                <option>
                                Select Method
                                </option>
                                <option>
                                Select Method
                                </option>
                            </select>
                        </div>
                        <div className='Shipping'>
                            <h5>Payment</h5>
                            <select className='choice'>
                                <option>
                                Select Method
                                </option>
                                <option>
                                Select Method
                                </option>
                            </select>
                        </div>
                        <div className='line'></div>
                        <div className='Shipping'>
                            <h5>Total</h5>
                            <p>$188</p>
                        </div>
                </div>
                <button>
                Continue to checkout
                </button>
            </div>
        </div>
    );
};

export default End;