import { shiftRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shift) => {
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede crear un sistema de gestíon');
    return { status: 'success', result };
};

export { newShift };