import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../Pages/Home";
import About from '../Pages/About';
import Contact from "../Pages/Contact";
import Ticket from '../Pages/Ticket'
import Login from "../Pages/Login";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import TicketCreate from "../Pages/TicketCreate";
import TicketEdit from "../Pages/TicketEdit";
import TicketView from "../Pages/TicketView";


function PageWrapper({children}) {
    const {AuthDetails}= useContext(AuthContext);

    if (!AuthDetails ?. isLoggedIn) {
        return <Navigate to='/login' />
    }

    return children;
}

export default function AllRoutes() {
    return (
        <Routes>
            {/* Private Routes */}
            <Route path="/" element={
                <PageWrapper>
                    <Home />
                </PageWrapper>
            } />
            <Route path="/about" element={
                <PageWrapper>
                    <About />
                </PageWrapper>
            } />
            <Route path="/contact" element={
                <PageWrapper>
                    <Contact />
                </PageWrapper>
            } />
            <Route path="/ticket" element={
                <PageWrapper>
                    <Ticket />
                </PageWrapper>
            } />
            <Route path="/ticket/create" element={
                <PageWrapper>
                    <TicketCreate />
                </PageWrapper>
            } />
            <Route path="/ticket/edit/:id" element={
                <PageWrapper>
                    <TicketEdit />
                </PageWrapper>
            } />
            <Route path="/ticket/view/:id" element={
                <PageWrapper>
                    <TicketView />
                </PageWrapper>
            } />
            
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}