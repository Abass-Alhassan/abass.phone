import React from 'react'
import  phones from '../pics/smart phone 1.jpg'
import head from "../pics/head phone 1.jpg"
import drive from "../pics/pendrive 1.jpg"
import cases from "../pics/phone case 1.jpg"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='products'>
        <div className='firstrow'>
            <div className='card'>
                <h2>SmartPhones</h2>
                <img src={ phones } alt=""/>
                <p>we sell quality smart phones at affordable price </p>
                <button><Link to ="/products">view phones</Link></button>
            </div>
            
            
            <div className='card'>
                <h2>SmartPhones</h2>
                <img src={ head } alt=""/>
                <p>we sell quality head phones at affordable price </p>
                <button><Link to="/products">view head phones</Link></button>
            </div>
            </div>
            <div className='secondrow'>
            <div className='card'>
                <h2>PenDrives</h2>
                <img src={ drive } alt=""/>
                <p>we sell quality Pendrives at affordable price </p>
                <button><Link to="/products">view head phones</Link></button>
            </div>
            <div className='card'>
                <h2>PhoneCases</h2>
                <img src={ head } alt=""/>
                <p>we sell quality  phone cases at affordable price </p>
                <button><Link to="/products">view phone cases</Link></button>
            </div>


            </div>
            


        </div>


    
  )
}

export default Home