import { avatarManager } from '../dao/manager/index.manager.js';

export default class AvatarRepository {

    newVideoTut = async (video) => {
        const result = await avatarManager.newVideoTut(video);
        return result;
    };

    newEvent = async (event) => {
        const result = await avatarManager.newEvent(event);
        return result;
    };

    newAvatar = async (avatar) => {
        const result = await avatarManager.newAvatar(avatar);
        return result;
    };

    getEvents = async () => {
        const result = await avatarManager.getEvents();
        return result;
    };
    
    getVideoTutByName = async (name) => {
        const result = await avatarManager.getVideoTutByName(name);
        return result;
    };
    
    getVideoTut = async () => {
        const result = await avatarManager.getVideoTut();
        return result;
    };

    vewAvatar = async () => {
        const result = await avatarManager.vewAvatar();
        return result;
    };

    getAvatarById = async (id) => {
        const result = await avatarManager.getAvatarById(id);
        return result;
    };

    updateAvatar = async (avatar) => {
        const result = await avatarManager.updateAvatar(avatar);
        return result;
    };

};