import { Routes, Route, useLocation } from "react-router";
import { Home } from "./home";
import { Templates } from "./templates";
import { AnimatePresence } from "motion/react";
import { Contact } from "./contact";

export const AppRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="/modelos-sites" element={<Templates />} />
                <Route path="/entre-em-contato" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}