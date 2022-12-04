import React, {Component} from "react";

class Title extends Component {

    render (){
        return (
            // <h2>Title: { this.props.name } <h2>

            <div class="box-container">


            <div class="box">
            <img src="chips.jpg" alt="" srcset=""></img>

             <div class="sub-box">
              <h3>Lays</h3>
              <h4>50Tk</h4>
            </div>
            </div>

            <div class="box">
            <img src="kurkure.webp" alt="" srcset=""></img>

             <div class="sub-box">
              <h3>Kurkure</h3>
              <h4>70Tk</h4>
            </div>
            </div>

            <div class="box">
            <img src="detos.webp" alt="" srcset=""></img>

             <div class="sub-box">
              <h3>Detos</h3>
              <h4>20Tk</h4>
            </div>
            </div>


                </div>
          
          
          
        )
    }
}


export default Title;