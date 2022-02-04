import React from 'react';
import './App.css';
import Book_Table from './components/Book_Table/Book_Table';
import GalleryReact from './components/Menu/GalleryReact';
import Home from './components/home/home';
import Menu from './components/Menu/Menu';
import Chef from './components/chef/chef';
import Story from './components/story/story';
import Newspage from './components/newspage/newspage';
import Footer from './components/Footer/footer';
import Special_package from './components/special_package/special_package'

function App() {
  return <>
        <div className='app'>
        <Home />
        <Story/>
        <Special_package/>
        <GalleryReact/>
        <Book_Table/>
        <Chef/>
        <Newspage />
        <Footer />
        </div>
      
  </>
}

export default App;
