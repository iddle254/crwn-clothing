import React from 'react';
import './collectionitem.styles.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem})=> {
    const {imageUrl, price, name} = item;
    return (
        <div className='collection-item'>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
            <CustomButton inverted className='custom-button' onClick={() => addItem(item)}>Add to cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item =>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
