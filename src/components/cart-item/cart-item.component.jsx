import { 
    CartItemContainer, 
    ItemsDetails 
} from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemsDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemsDetails>
        </CartItemContainer>
    )
}

export default CartItem;