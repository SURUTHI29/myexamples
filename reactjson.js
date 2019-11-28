program that fetched the json data in react using map


import React from "react";
import { FaHeart } from "react-icons/fa";
import data from "./data.json";
import { observable } from "mobx";
import { observer } from "mobx-react";
const data2= data
const product = data.product;
const a = product[0].identifier;
@observer
class Maincon1 extends React.Component {
  @observable fillcolor = "#000";
  constructor(props) {
    super(props);
    // this.state= {
    //   fillcolor: "#000",
    // };
  }
  heartClicked = () => {
    if (this.fillcolor == "#000") {
      this.fillcolor = "#ff0000";
      console.log("heart clicked");
    } else {
      this.fillcolor = "#000";
    }
  };
  content = () => {
    return product.map((data1, index) => (
      <div>
        <div className="column">
          <div className="dress_image">
            <img
              src={product[index].properties.largeimageurl}
              alt="baby dress"
              width="240"
              height="250"
            />
          </div>
          <div className="fixed-heart">
            <FaHeart fill={this.fillcolor} onClick={this.heartClicked} />
          </div>
          <h4>{product[index].properties.shortname}</h4>
        </div>
      </div>
    ));
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
                {/* <div className="column">
                  <div className="dress_image">
                    <img
                      src={product[0].properties.largeimageurl}
                      alt="baby dress"
                      width="240"
                      height="250"
                    />
                  </div>
                  <div className="fixed-heart">
                    <FaHeart
                      fill={this.fillcolor}
                      onClick={this.heartClicked}
                    />
                  </div>
                  <h4>Baby Dress1</h4>
                </div>
                <div className="column">
                  <div className="dress_image">
                    <img
                      src={product[1].properties.largeimageurl}
                      alt="baby dress"
                      width="240"
                      height="250"
                    />
                  </div>
                  <div className="fixed-heart">
                    <FaHeart
                      fill={this.fillcolor}
                      onClick={this.heartClicked}
                    />
                  </div>
                  <h4>Baby Dress2</h4>
                </div>
                <div className="column">
                  <div className="dress_image">
                    <img
                      src={product[2].properties.largeimageurl}
                      alt="baby dress"
                      width="240"
                      height="250"
                    />
                  </div>
                  <div className="fixed-heart">
                    <FaHeart
                      fill={this.fillcolor}
                      onClick={this.heartClicked}
                    />
                  </div>
                  <h4>Baby Dress3</h4>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="dress_image">
                    <img
                      src={product[3].properties.largeimageurl}
                      alt="baby dress"
                      width="240"
                      height="250"
                    />
                  </div>
                  <div className="fixed-heart">
                    <FaHeart
                      fill={this.fillcolor}
                      onClick={this.heartClicked}
                    />
                  </div>
                  <h4>Baby Dress4</h4>
                </div>
                <div className="column">
                  <div className="dress_image">
                    <img
                      src={product[4].properties.largeimageurl}
                      alt="baby dress"
                      width="240"
                      height="250"
                    />
                  </div>
                  <div className="fixed-heart">
                    <FaHeart
                      fill={this.fillcolor}
                      onClick={this.heartClicked}
                    />
                  </div>
                  <h4>Baby Dress5</h4>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maincon1;
