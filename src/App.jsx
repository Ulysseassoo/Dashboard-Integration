import { Route, Routes } from "react-router"
import Dashboard from "./Screens/Dashboard"
import Contacts from "./Screens/Contacts"
import Chat from "./Screens/Chat"
import UserCard from "./Components/Contacts/UserCard"

function App() {
	return (
		<>
			<Routes>
				<Route path="/dashboard" element={<UserCard />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</>
	)
}

export default App
