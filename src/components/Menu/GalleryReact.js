import React from 'react';
import Menu from './Menu';
import './menu.css';
import { useState } from 'react';
import MenuItems from './MenuItems';
import Categories from './Categories';


const allCatValues =[ ...new Set (Menu.map((curElem) => curElem.category)),'all'];
console.log(allCatValues);

function GalleryReact() {

  const [items, setItems] = useState(Menu);
  const [catItems,setcatItems] = useState(allCatValues);

  const filterMenu = (categItem) => {

    if(categItem==='all'){
      setItems(Menu);
      return
    }
    const updatedItem = Menu.filter((curElem) => {
        return curElem.category === categItem;
    })

    setItems(updatedItem);
  }

  return (
     <div>
        <div className="today_menu">
          <h1>Today menu</h1>
          <img src="../images/redseperator.png" alt="a" />
        </div>
        <div className='middle'>
        <Categories filterMenu={filterMenu} catItems={catItems}/>

          <MenuItems items={items}/>
        </div>

        </div>
  );
}

export default GalleryReact;
