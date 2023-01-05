import React from 'react';
import './Section.css';
import InfoMessi from './InfoMessi.jsx';
import InfoRonaldo from './InfoRonaldo.jsx';
import InfoNeymar from './InfoNeymar.jsx';
import InfoMbappe from './InfoMbappe.jsx';
import List from './List';


import { Routes, Route, } from "react-router-dom";

const Section = function(){
    return(
        <div>
            <div className='container'>
                <div className='menu'>
                    <List/>
                </div>
                <div className='obj'>
                
                        <Routes>
                            <Route path="/InfoMessi" element={<InfoMessi/>}/>
                            <Route path="/InfoRonaldo" element={<InfoRonaldo/>}/>
                            <Route path="/InfoMbappe" element={<InfoMbappe/>}/>
                            <Route path="/InfoNeymar" element={<InfoNeymar/>}/>
                        </Routes>
                    
                </div>
                <div className='graph'></div>
            </div>
        </div>
    )
}

export default Section;