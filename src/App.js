import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
	Navigate,
	Outlet,
} from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Components/Navbar/Navbar";
import { ActorPage } from "./Pages/ActorPage/ActorPage";
import { HomePage } from "./Pages/Home/HomePage";
import { LoginSignupPage } from "./Pages/LoginSignupPage/LoginSignupPage";
import { MoviePage } from "./Pages/MoviePage/MoviePage";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { WatchlistPage } from "./Pages/WatchlistPage/WatchlistPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GitRedirect } from "./Pages/GithubRedirectPage/GIthubRedirectPage";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
	const [token, setToken] = useState(null)
	
	useEffect(() => {
		const localToken = localStorage.getItem('iemdbToken');
        if (localToken) {
            setToken(localToken)
        }
    }, []);

	const PrivateWrapper = () => {
		const localToken = localStorage.getItem('iemdbToken');
		return localToken ? <Outlet /> : <Navigate to="/login" />;
	};

    const notify = (text) => toast(text, {autoClose: 2000});

    return (
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/login" element={<LoginSignupPage notify={notify} token={token} setToken={setToken} login={true} />} />
                    <Route path="/signup" element={<LoginSignupPage notify={notify} token={token} setToken={setToken} login={false} />} />
                    <Route path="/callback" element={<GitRedirect notify={notify} token={token} setToken={setToken} />} />
					<Route element={<PrivateWrapper />}>
						<Route path="/" element={<HomePage notify={notify} token={token} setToken={setToken} />} />
					</Route>
					<Route element={<PrivateWrapper />}>
						<Route path="/movie/:id" element={<MoviePage notify={notify} token={token} setToken={setToken} />} />
					</Route>
					<Route element={<PrivateWrapper />}>
						<Route path="/watchlist" element={<WatchlistPage notify={notify} token={token} setToken={setToken} />} />
					</Route>
					<Route element={<PrivateWrapper />}>
						<Route path="/actor/:id" element={<ActorPage notify={notify} token={token} setToken={setToken} />} />
					</Route>
                </Routes>
				<ToastContainer />
            </AppContainer>
        </Router>
    );
}


export default App;