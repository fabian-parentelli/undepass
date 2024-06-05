import UserRouter from "./users.router.js";
import CityRouter from './cities.router.js';
import AvatarRouter from "./avatars.router.js";
import UserFinanRouter from './usersFinan.router.js'
import ContactRouter from "./contactus.router.js";
import EventRouter from './event.router.js';
import SitesRouter from "./sites.router.js";
import ShiftRouter from "./shifts.router.js";
import ProductRouter from './products.router.js';
import CommentRouter from "./comments.router.js";
import CartRouter from "./cart.router.js";
import OrderRouter from "./orders.router.js";

export const userRouter = new UserRouter().getRouter();
export const citiesRouter = new CityRouter().getRouter();
export const avatarRouter = new AvatarRouter().getRouter();
export const userFinanRouter = new UserFinanRouter().getRouter();
export const contactRouter = new ContactRouter().getRouter();
export const eventRouter = new EventRouter().getRouter();
export const sitesRouter = new SitesRouter().getRouter();
export const shiftRouter = new ShiftRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();
export const commentRouter = new CommentRouter().getRouter();
export const cartRouter = new CartRouter().getRouter();
export const orderRouter = new OrderRouter().getRouter();