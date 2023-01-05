import React from "react";
import './Info.css';

const InfoMbappe = function(){
    return(
        <div>
            <div className="profileHeader">
                    <img className="profileImg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg' alt='img'></img>
                <h1 className="profileName">Kylian Mbappé Lottin</h1>
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
                        <p>20 December 1998 | 35 years</p>
                        <p className="country"><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330490.png'></img></span>France</p>
                        <p className='club'><span><img className="flag" src='https://cdn-icons-png.flaticon.com/128/330/330490.png'></img></span>PSG | Forward</p>
                        <p>178 | 73</p>
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

export default InfoMbappe;