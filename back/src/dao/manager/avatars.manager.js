import { avatarModel } from '../models/avatars.model.js';
import { imgEventModel } from '../models/imgEvent.model.js';

export default class Avatar {

    newEvent = async (event) => {
        return await imgEventModel.create(event);
    };

    getEvents = async () => {
        return await imgEventModel.find().lean();
    };

    // Avatares...

    newAvatar = async (avatar) => {
        return await avatarModel.create(avatar);
    };

    vewAvatar = async () => {
        return await avatarModel.find().lean();
    };

    getAvatarById = async (id) => {
        return await avatarModel.findById(id).lean();
    };

    updateAvatar = async (avatar) => {
        return await avatarModel.findByIdAndUpdate({ _id: avatar._id }, avatar);
    };

};