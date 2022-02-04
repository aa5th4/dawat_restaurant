import React from 'react';
import "./Book_Table.css";
import promo from '../promopage/promo_slide_2.jpg';

function Book_Table() {
  return (
    <div className='book_table'>
        <img src={promo} alt="promo" />
        <div className='overlay3'>
            <div className='inside_cont'>
                <h1>BOOK A TABLE NOW !</h1>
                <button>BOOK NOW</button>
            </div>
        </div>

    </div>
    );
}

export default Book_Table;
