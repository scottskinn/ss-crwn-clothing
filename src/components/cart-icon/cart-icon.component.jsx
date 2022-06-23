import { useContext } from 'react';

import { 
    ShoppingIcon, 
    CartIconContainer, 
    ItemCount 
} from './cart-icon.styles'

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCatOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCatOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;