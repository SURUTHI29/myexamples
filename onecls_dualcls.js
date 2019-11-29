single class
import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
 import data from "./data.json";
 import Renderprdt from './RenderPrdt'
 import { observable } from "mobx";
 import { observer } from "mobx-react";
const data2= data
 const product = data.product;
 @observer
 class Maincon1 extends React.Component {
   @observable fillcolor = "#000";
   constructor(props) {
     super(props);
   }

   heartClicked = (index) => {
     if (this.fillcolor == "#000") {
       this.fillcolor = "#ff0000";
       console.log("heart clicked");
     } else {
       this.fillcolor = "#000";
     }
   };
   /* this part is moved to another class
   content = () => {
     const items1 = product.map((data1, index) => {
       return (
         <div>
           <div className="column">
             <div className="dress_image">
               <img
                 src={data1.properties.largeimageurl}
                 alt="baby dress"
                 width="240"
                 height="250"
               />
             </div>
             <div className="fixed-heart">
               <FaHeart fill={this.fillcolor} onClick={this.heartClicked.bind(this,index)} />
             </div>
             <h4>{data1.properties.shortname}</h4>
           </div>
         </div>
       );
     });
     return items1;
   };
 
   render() {
     return (
       <div className="maincon">
         <div className="bodycontent">
           <div className="outer">
             <div id="headName">
               <h1>{data2.category.properties.name}</h1>
             </div>
             <div id="sortby">
               <p>SORT BY</p>
             </div>
             <div className="inner">
               <div className="row">
                 {this.content()}
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }
}

export default Maincon1;

firstclass.js
import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import data from "./data.json";
import { observable } from "mobx";
import { observer } from "mobx-react";
import RenderPrdt from "./RenderPrdt";
const data2 = data;
const product = data.product;
@observer
class Maincon1 extends React.Component {
  @observable fillcolor = "#000";
  // constructor(props) {
  //   super(props);
  // }

  heartClicked = index => {
    if (this.fillcolor === "#000") {
      this.fillcolor = "#ff0000";
      console.log("heart clicked");
    } else {
      this.fillcolor = "#000";
    }
  };

  content = () => {
    const items1 = product.map((data1, index) => {
      return <RenderPrdt data1={data1} />;
    });
    return items1;
  };

  render() {
    return (
      <div className="maincon">
        <div className="bodycontent">
          <div className="outer">
            <div id="headName">
              <h1>{data2.category.properties.name}</h1>
            </div>
            <div id="sortby">
              <p>SORT BY</p>
            </div>

            <div className="inner">
              <div className="row">{this.content()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maincon1;

secondclass.js
import React from "react";
import { FaHeart } from "react-icons/fa";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class Renderprdt extends React.Component {
  @observable fillcolor = "#000";
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="column">
          <div className="dress_image">
            <img
              src={this.props.data1.properties.largeimageurl}
              alt="baby dress"
              width="240"
              height="250"
            />
          </div>
          <div className="fixed-heart">
            <FaHeart fill={this.fillcolor} onClick={this.heartClicked} />
          </div>
          <h4>{this.props.data1.properties.shortname}</h4>
        </div>
      </div>
    );
  }
}

export default Renderprdt;
export { Renderprdt };
