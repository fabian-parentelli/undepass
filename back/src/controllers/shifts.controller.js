import * as shiftService from '../services/shifts.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (req, res) => {
    try {
        const result = await shiftService.newShift({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); // ----------------------------------------------------------Borrar -----

        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newShift }