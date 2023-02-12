import { useDispatch, useSelector } from "react-redux";
import Fooditem from "./fooditem";
import { clearcart } from "../utils/cartslice";
import cartslice, { clearcart } from "../utils/cartslice";


const cart = () => {
    const cartitem = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleclearcart = () => {
        dispatch(clearcart());
    }
    return (
        <>
            <h1>cart item</h1>
            <button className="bg-green-100 p-2 m-5" onClick={() => handleclearcart()}>clearcart</button>
            {cartitem.map((item) => <Fooditem key={item.id} {...item} />
            )}
        </>
    )
}

export default cart