import { Route, Routes } from "react-router";
import React from "react";
// import Dashboard from "./Screens/Dashboard";
import Contacts from "./Screens/Contacts";
import MessageSingle from "./Components/Chat/MessageSingle";
// import Chat from "./Screens/Chat";
// import UserCard from "./Components/Chat/UserCard";
// import UserSelector from "./Components/Contacts/UserSelector";

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<MessageSingle />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
    );
}

export default App;
