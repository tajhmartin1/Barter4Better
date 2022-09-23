import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Browse from './pages/browse';
import SignUp from './pages/signup';
import Tutorial from './pages/tutorial';
import Post from "./components/post/Post";
function App() {
  const [posts, setPosts] = useState([
    {
      username: "blessingthebobo",
      caption: "Wow, I'm Amazing!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "godtello",
      caption: "Oh, I'm a God!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="app">
      <Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/tutorial' element={<Tutorial/>} />
		<Route path='/browse' element={<Browse/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
      
      <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      
    </div>
    
  );



  
  
}

export default App;
