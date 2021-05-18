import React, {Component} from 'react';
class  Navbar extends Component {
    state = { 
        items: ['home' , 'about' , 'signup' , 'login' , 'comments'],
     }
    render() { 
        return ( 
            <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        DiChem
                    </a>
                    <div id='navbarNav'>
                        <ul className='navbar-nav'>
                            {this.state.items.map(item => 
                                <li className='nav-item' key={item}>
                                    <a className='nav-link' href='#'>
                                        {item}

                                    </a>
                                </li>)}

                        </ul>
                    </div>
                </div>

            </nav>
         );
    }
}
 
export default Navbar;
