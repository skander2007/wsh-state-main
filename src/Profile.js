import React, { Component } from "react";
import Bio from "./profile/components/bio/Bio";
import FullName from "./profile/components/fullname/FullName";
import Profession from "./profile/components/profession/Profession";
import Image from "./profile/components/image/Image";
import "./Profile.css";

export class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0 ,
      memory: null
    }
  }


   componentDidMount () {
     this.setState ({ memory :setInterval (()=> {this.increment()}, 1000) 
   })};

   componentWillUnmount () {
     clearInterval(this.state.memory) 
   };


  increment = () => {
this.setState ({ count : this.state.count +1});

  };
  render() {
    const Bassem = {
      fullName: "Rafael Nadal",
      bio: "was born on June 3, 1986 in Manacor, Spain. Very early on, young Rafael developed a passion for sport, first for football (he was in awe of his uncle Miguel Ángel, defender at FC Barcelona) then for basketball, which he practiced for a short time, before starting in tennis from the age of 4.",
      prof: "Tennis Pro player",
    };
    const handleName = (Bassem) => {
      alert(`Hi , My name is ${Bassem}`);
    };

    return (
      <div className="Profile">
        <FullName name={Bassem} />
        <Image defau={"This photo of him."}>
          <h1
            style={{
              fontFamily: "Arial",
              backgroundColor: "Black",
              borderRadius: "15px",
              color: "white",
              width: "250px",
              margin: "0 auto",
              padding: "25px",
            }}
          >
            {" "}
            Rafael Nadal Photo
          </h1>
          <img
            style={{ height: "528px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rafael_Nadal_%2819047517620%29.jpg/250px-Rafael_Nadal_%2819047517620%29.jpg"
            alt=""
          />
          <h2>
            <button
              style={{
                backgroundColor: "bleu",
                width: "100px",
                height: "50px",
                fontFamily: "Arial",
                color: "white",
                borderRadius: "30px",
              }}
              onClick={() => handleName(Bassem.fullName)}
            >
              Salute{" "}
            </button>
          </h2>
        </Image>
        <Profession pro={Bassem} />
        <Bio Biog={Bassem} />
        <p className="counter">{this.state.count}</p>
      </div>
    );
  }
}

export default Profile;
