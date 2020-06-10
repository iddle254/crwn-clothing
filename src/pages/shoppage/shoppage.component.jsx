import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collectionpreview/collection-preview.component'

class Shoppage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shopdata: SHOP_DATA
        }
    }

    render() {
        const {shopdata}=this.state;
        return (
            <div className='shop-page'>
                {shopdata.map(({id, ...otherSectionProps})=>(
                    <CollectionPreview key={id} {...otherSectionProps}/>
                ))}
            </div>
            
        )
    }
}

export default Shoppage