import React from 'react';
import styles from './css/Navbar.module.css'

class Navbar extends React.Component {
    
    constructor(){
        super()
        this.state = {
            active : false
        }
        const METHODS = [
            'handlerButtonNavbar'
        ]
        METHODS.forEach((method)=>{
            this[method] = this[method].bind(this)
        })
    }

    handlerButtonNavbar(){
        if (this.state.active){
            this.setState({active : false})
        }else{
            this.setState({active : true})
        }
    }
    
    
    render(){
        const hasActive = this.state.active ? true : false;
        const activeClass = hasActive ? styles['show-navbar'] : styles['hide-navbar'];
        const clases = styles['navbar-container'] + ' ' + activeClass;
        return (
            <div>
                <div className={styles['button-hamburguer']}> 
                    <span onClick={this.handlerButtonNavbar}>Button</span>
                </div>

                <div className={clases}>
                    <div className={styles['navbar-items']} id={styles['ico-home']}>ANBU</div>
                    <div className={styles['navbar-items']} id={styles['home']}>Home</div>
                    <div className={styles['navbar-items']} id={styles['products']}>Productos</div>
                    <div className={styles['navbar-items']} id={styles['contact']}>Contactenos</div>
                </div>
            </div>
            
        )
    }
}
export default Navbar;