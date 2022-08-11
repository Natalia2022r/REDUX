import { Route, HashRouter } from "react-router-dom";
import PostList from "./Posts/PostList";
import AddPostForm from "./Posts/AddPostForm"

function App() {
    return (
        <div className="App">
        <HashRouter>
       
        <Route exact path="/" element ={<PostList />}/>
        <Route exact path="/addform" element= {<AddPostForm/>}/>
    
            </HashRouter>
        </div>
    );
}

export default App;