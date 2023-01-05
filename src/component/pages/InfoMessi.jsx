import React from "react";
import './Info.css';

const InfoMessi = function(){
    return(
        <div>
            <div className="profileHeader">
                    <img className="profileImg" src='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' alt='img'></img>
                <h1 className="profileName">Lionel Andrés Messi Cuccittini</h1>
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
                        <p>24 june 1987 | 35 years</p>
                        <p className="country"><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330487.png'></img></span>Argentina</p>
                        <p className='club'><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330490.png'></img></span>PSG | Forward</p>
                        <p>170 | 72</p>
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

export default InfoMessi;