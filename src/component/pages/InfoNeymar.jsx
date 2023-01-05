import React from "react";
import './Info.css';

const InfoNeymar = function(){
    return(
        <div>
            <div className="profileHeader">
                    <img className="profileImg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/800px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg' alt='img'></img>
                <h1 className="profileName">Neymar da Silva Santos Junior</h1>
            </div>
            <div className="profileInfo">
                <div className="about">
                    <div className="listName">
                        <p>Age</p>
                        <p>Country</p>
                        <p>Club</p>
                        <p>Height and weight</p>
                    </div>
                    <div className="listAbout">
                        <p>5 february 1992 | 30 years</p>
                        <p className="country"><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330487.png'></img></span>Brazil</p>
                        <p className='club'><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330490.png'></img></span>PSG | Forward</p>
                        <p>175 | 68</p>
                    </div>
                </div>
                <div className="profileTrophy">
                    <div>
                        trophy
                    </div>
                    <div>

                    </div>
                </div>
                <div className="profileGoal">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoNeymar;