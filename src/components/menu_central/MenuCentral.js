import React from 'react';
import styles  from '../menu_central/css/MenuCentral.module.css'

class MenuCentral extends React.Component {

    state = {
        zoomInP  : false,
        zoomInC : false
    }

    zoomItem(){
        this.setState({
            zoomInP : true
        })
    }
    //validar si se despliega desde movil o pc
    /*validateMovil = () => {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            alert("desde movil");
        }else {
            alert("dede pc");
        }
    }*/

    render(){
        return (
            <div className={styles.container}>
                {/* <div>anuncios</div>  desarrollar para versionn 2.0*/}
                {/* <div>Destacados</div>   desarrollar para version 2.0 */}
                <div className={styles['menu-items']} id={styles.products} onClick={this.validateMovil}>
                    <p>PRODUCTOS</p></div>
                <div className={styles['menu-items']} id={styles.contact}>
                    <p>CONTACTENOS</p></div>
            </div>
        )  
    }
}

export default MenuCentral;