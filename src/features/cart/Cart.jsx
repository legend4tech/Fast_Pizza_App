import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, userName } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector(userName);

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <Button to="/menu" type="small">
        &larr; Back to menu
      </Button>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="-b mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" onClick={'h'}>
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
