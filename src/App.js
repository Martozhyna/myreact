import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, PostDetailPage, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
