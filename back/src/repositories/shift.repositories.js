import { shiftAdminManager } from '../dao/manager/index.manager.js';

export default class SiteRepository {

    newShift = async (shift) => {
        const result = await shiftAdminManager.newShift(shift);
        return result;
    };
}