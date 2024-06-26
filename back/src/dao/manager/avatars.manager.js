import { avatarModel } from '../models/avatars.model.js';
import { imgEventModel } from '../models/imgEvent.model.js';
import { videoTutModel } from '../models/videoTut.model.js';

export default class Avatar {

    newEvent = async (event) => {
        return await imgEventModel.create(event);
    };

    getEvents = async () => {
        return await imgEventModel.find().lean();
    };

    getEventByName = async (name) => {
        return await imgEventModel.findOne({ style: name }).lean();
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

    // Videos...

    newVideoTut = async (video) => {
        return await videoTutModel.create(video);
    };

    getVideoTutByName = async (name) => {
        return await videoTutModel.findOne({ name: name }).lean();
    };

    getVideoTut = async () => {
        return await videoTutModel.find().lean();
    };
};