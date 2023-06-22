import React from 'react';
import './Style/Home.css';

function Home() {
    return (
        <div className='home_container'>
            <div className="home_nav">
                <header className='home_header'>
                    <span className='home_log'>MyCart</span>
                    <input type="text" placeholder='search the item' className='home_search' id='home_search' />
                    <img src="/home/vetri/Desktop/myCart/client/src/Component/Image/search-icon-png-9965.png" alt="" />
                </header>


            </div>
        </div>
    )
}

export default Home