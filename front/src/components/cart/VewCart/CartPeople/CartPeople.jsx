import IsUser from "./IsUser/IsUser";
import NotUser from "./NotUser/NotUser";
import { useEffect, useState } from "react";
import { useCartContext } from "../../../../context/CartContext";
import { useLoginContext } from "../../../../context/LoginContext";
import Load from "../../../utils/Load";

const CartPeople = () => {

    const { user } = useLoginContext();
    const { isProduct, cart } = useCartContext();
    const [isUser, setIsUser] = useState(false);
    const [thereAreP, setThereAreP] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => { setThereAreP(isProduct()) }, [cart]);

    useEffect(() => {
        if (user && user.isLogged) setIsUser(true);
        else setIsUser(false);
    }, [user]);

    return (
        <>
            {!isUser && <NotUser thereAreP={thereAreP} cart={cart} setLoading={setLoading} />}
            {isUser && <IsUser thereAreP={thereAreP} user={user.data} cart={cart} setLoading={setLoading} />}
            <Load loading={loading} />
        </>
    );
};

export default CartPeople;