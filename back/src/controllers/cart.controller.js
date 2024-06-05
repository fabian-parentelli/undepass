import * as cartService from '../services/cart.service.js';
import { CartNotFound } from '../utils/custom-exceptions.utils.js';

const getData = async (req, res) => {
    try {
        const result = await cartService.getData([...req.body]);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CartNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getData };