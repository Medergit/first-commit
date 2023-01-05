import React from "react";
import './Info.css';

const InfoRonaldo = function(){
    return(
        <div>
            <div className="profileHeader">
                    <img className="profileImg" src='https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' alt='img'></img>
                <h1 className="profileName">Cristiano Ronaldo dos Santos Aveiro</h1>
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
                        <p>5 February 1985 | 35 years</p>
                        <p className="country"><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330461.png'></img></span>Portugal</p>
                        <p className='club'><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330490.png'></img></span>Al Nassr Football Club | Forward</p>
                        <p>185 | 85</p>
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

export default InfoRonaldo;