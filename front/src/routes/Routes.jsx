import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import NavBar from '../components/NavBar/NavBar';
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Register from "../components/user/Register/Register";
import Help from "../components/Help/Help";
import Login from "../components/user/Login/Login";
import WhatEmail from "../components/user/recoverPassword/WhatEmail/WhatEmail";
import NewPassword from "../components/user/recoverPassword/NewPassword/NewPassword";
import Profile from "../components/user/Profile/Profile";
import Dashboard from "../components/Dashboard/Dashboard";
import ContactUs from "../components/ContactUs/ContactUs";
import NewEventUser from "../components/event/NewEventUser/NewEventUser";
import VewEvent from "../components/event/VewEvent/VewEvent";
import ScrollToTop from '../components/utils/ScrollToTo/ScrollToTop';

const RoutesComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>
                
                <NavBar />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="what_email" element={<WhatEmail />} />
                    <Route path="/password/:token" element={<NewPassword />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/newevent_user" element={<NewEventUser />} />
                    <Route path="/vewevent/:id" element={<VewEvent />} />

                    {user.logged &&
                        <>
                            <Route path="/profile/*" element={<Profile />} />
                        </>
                    }
                    {user.logged && user.data && user.data.role === 'admin' &&
                        <Route path="/dashboard/*" element={<Dashboard />} />
                    }
                </Routes>
                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RoutesComp;