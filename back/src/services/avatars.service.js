import { avatarRepository } from "../repositories/index.repositories.js";
import { AvatarNotFound } from '../utils/custom-exceptions.utils.js';

const newEvent = async (images, imagesUrl, body) => {
    const event = {
        component: body.component,
        style: body.style,
        imagesUrl: imagesUrl[0],
        name: images[0].originalname,
        category: body.category
    };
    const result = await avatarRepository.newEvent(event);
    if (!result) throw new AvatarNotFound('No se puede guardar la imagendel evento');
    return { status: 'success' };
};

const newAvatar = async (images, imagesUrl) => {
    const avatars = [];
    images.forEach((avat, index) => {
        avatars.push({
            avatarName: avat.originalname,
            avatarUrl: imagesUrl[index]
        });
    });
    avatars.forEach(async (avt) => {
        const result = await avatarRepository.newAvatar(avt);
        if (!result) throw new AvatarNotFound(`No se puede agragar el avatar ${avt.avatarName}`);
    });
    return { status: 'success' };
};

const getEvents = async () => {
    const result = await avatarRepository.getEvents();
    if (!result) throw new AvatarNotFound('No se puede obtener las imagenes');
    return { status: 'success', result };
};

const vewAvatar = async () => {
    const result = await avatarRepository.vewAvatar();
    if (!result) throw new AvatarNotFound('No se puede obtener los avatares');
    return { status: 'success', result };
};

const updateActive = async (id) => {
    const avatarDb = await avatarRepository.getAvatarById(id);
    if (!avatarDb) throw new AvatarNotFound('No se encuentra el avatar');
    avatarDb.active = !avatarDb.active;
    const result = await avatarRepository.updateAvatar(avatarDb);
    if (!result) throw new AvatarNotFound('No se puede Actualizar el Avatar');
    return { status: 'success' };
};

export { newEvent, newAvatar, getEvents, vewAvatar, updateActive };