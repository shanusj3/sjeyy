import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"

const App = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <div className="">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>


        </div>
    )
}

export default App