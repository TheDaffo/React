import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import '../style/layer.css'

class Layer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <div className='layer-c'>
                    

                </div>
                <Footer/>

            </React.Fragment>

         );
    }
}
 
export default Layer;