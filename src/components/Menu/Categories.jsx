import React from "react";

const Categories = ({filterMenu,catItems}) => {
  return (
    <>
    <div className='menu-tabs'>
          <div className='menutab'>
            {
              catItems.map((curname,index) => {
                return  <button  key={index} className='btn' onClick={() => filterMenu(curname)}>
                {curname}
              </button>
              })
            }
           
          </div>
        </div>
    </>
  );
};

export default Categories;