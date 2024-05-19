import { shiftAdminModel } from '../models/shiftAdmin.model.js';

export default class ShiftAdminManager {

    newShift = async (shift) => {
        return await shiftAdminModel.create(shift);
    };
}