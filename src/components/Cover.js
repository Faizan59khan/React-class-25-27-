import React from 'react';
import COVERIMAGE from '../images/download.jpg'  //image will also import (import name koi bhi lelo)

export default class Cover extends React.Component{  //export default aese dena
    render(){
        return(
            <div className="footer">
               <img src={COVERIMAGE} width="300" height="auto" />
            </div>
        )
    }
}