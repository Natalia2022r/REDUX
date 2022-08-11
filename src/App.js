import { Route, HashRouter, Routes } from "react-router-dom";
import PostList from "./Posts/PostList";
import AddPostForm from "./Posts/AddPostForm"

function App() {
    return (
        <div className="App">
        <HashRouter>
       <Routes>
        <Route exact path="/" element ={<PostList />}/>
        <Route exact path="/addform" element= {<AddPostForm/>}/>
        </Routes>
            </HashRouter>
        </div>
    );
}

export default App;