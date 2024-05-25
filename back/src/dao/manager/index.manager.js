import User from './users.manager.js';
import Avatar from './avatars.manager.js';
import UserFinan from './userFinan.manager.js';
import Contact from './contact.manager.js';
import Event from './event.manager.js';
import Site from './site.manager.js';
import ShiftAdminManager from './shiftAdmin.manager.js';
import Product from './product.manager.js';

export const userManager = new User();
export const avatarManager = new Avatar();
export const userFinanManager = new UserFinan();
export const contactManager = new Contact();
export const eventManager = new Event();
export const siteManager = new Site();
export const shiftAdminManager = new ShiftAdminManager();
export const productManager = new Product();