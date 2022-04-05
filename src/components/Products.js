import React from 'react'
import phone from "../images/smart phone 1.jpg"
import Phone from "../images/smart phone 2.jpg"
import phones from "../images/smart phone 3.jpg"

function Products() {
  return (
    <div>
        <div className='firstrow'>
        <div className='card'>
                <h2>Huawei</h2>
                <img src={ phone } alt=""/>
                <p>Ghc 40,000 </p>
                <button>Buy Me</button>
            </div>
            <div className='card'>
                <h2>Samsung</h2>
                <img src={ Phone } alt=""/>
                <p>Ghc 20,000 </p>
                <button>Buy Me</button>
            </div>
            <div className='card'>
                <h2>iphone</h2>
                <img src={ phones } alt=""/>
                <p>Ghc 10,000</p>
                <button>Buy Me</button>
            </div>
        </div>
        <div className='headphones'></div>

        <div className='pendrives'></div>

        <div className='phonecases'></div>
    </div>
    


  )
}

export default Products