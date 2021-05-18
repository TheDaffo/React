import React, { Component } from 'react';
import '../style/dichem.css'
import Navbar from '../Components/Navbar'
class NewApp extends Component {
    state = { 
        bannerUrl: 'https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg'
        
     };
    render() { 
        
        return ( 
            <React.Fragment>
                <Navbar />
                <img src={this.state.bannerUrl} alt='banner' className='banner-'/>
                <p>Don't trust big titles on the products and Dont  trust the popularity!
              Educate Yourself and Protect your beauty!!
              Skin care is at the interface of cosmetics, and dermatology, a traditional medical discipline; there is some overlap with each of these topics.

The Federal Food, Drug, and Cosmetic Act defines cosmetics as products intended to cleanse or beautify (for instance, shampoos and lipstick). A separate category exists for medications, which are intended to diagnose, cure, mitigate, treat, or prevent disease, or to affect the structure or function of the body (for instance, sunscreens and acne creams), although some products, such as moisturizing sunscreens and anti-dandruff shampoos, are regulated within both categories.

Skin care differs from dermatology, as traditionally practiced, by its additional but less medical scope and by its inclusion of non-physician professionals, such as estheticians and wound care nursing staff.Skin care includes modifications of individual behavior and of environmental and working conditions.Nevertheless, dermatology has co-opted some aspects of skin care, particularly in the U.S., and to a significantly lesser extent elsewhere, such as the U.K.
            
            </p>
            <button className={this.signuphandler()}> SignUp </button>  
            </React.Fragment>

         );
    }
    signuphandler(){
        let signupBtn = 'm-3 btn ';
        return signupBtn;
    }
}
 
export default NewApp;