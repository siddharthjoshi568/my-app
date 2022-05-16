import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import EditProfile from "./EditProfile";

function Home() {

    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<MainContent />}></Route>
                    <Route exact path="/edit-profile" element={<EditProfile />}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}
export default Home;