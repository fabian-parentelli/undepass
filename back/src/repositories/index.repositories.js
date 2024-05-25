import UserRepository from './user.repositories.js';
import AvatarRepository from './avatar.repositories.js';
import UserFinanRepository from './userFinan.repositories.js';
import ContactRepository from './contact.repositories.js';
import EventRepository from './event.repositories.js';
import SiteRepository from './site.repositories.js';
import ShiftRepository from './shift.repositories.js';
import ProductRepository from './Product.repositories.js';

export const userRepository = new UserRepository();
export const avatarRepository = new AvatarRepository();
export const userFinanRepository = new UserFinanRepository();
export const contactRepository = new ContactRepository();
export const eventRepository = new EventRepository();
export const siteRepository = new SiteRepository();
export const shiftRepository = new ShiftRepository();
export const productRepository = new ProductRepository();