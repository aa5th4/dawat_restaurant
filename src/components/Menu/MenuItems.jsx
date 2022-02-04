import React from 'react';

function MenuItems({items}) {
  return (
    <div className='menu_items'>
            <div  className='col'>
            {
              items.map((elem) => {
                const{id,title,category,price,img,item1,item2,
                    item3,item4,item5,item6,item7,item8,item9} =elem;
                return(
                  <div className='menu_container'>
                      <div className='item' key={id}>
                      <img src={img} alt="" />
                      <div className='wrapup'>
                          <div className='menu_title'>
                                <h3>{title}</h3>
                                <span>{price}</span>
                          </div>
                          <div className='menu_details'>
                              <p>{item1}</p>
                              <p>{item2}</p>
                              <p>{item3}</p>
                              <p>{item4}</p>
                              <p>{item5}</p>
                              <p>{item6}</p>
                              <p>{item7}</p>
                              <p>{item8}</p>
                              <p>{item9}</p>
                          </div>
                      </div>
                </div>
                  </div>
                )
              })
            }
            </div>
       
          </div>
    );
}

export default MenuItems;
