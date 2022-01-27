import pic from "./../../image/myPic.jpg.jpeg";
import intro from "./intro.css";
import mydata from "./mydata";

console.log();
export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="my">
          <img src={pic} alt="myPic" className="myPic"></img>
          <div className="myInfo">
            <h1 className="name">{mydata[0].name}</h1>
            <h1 className="profession">{mydata[0].profession}</h1>
            <h9 className="degree">
              {`  ${mydata[0].degree}     ${mydata[0].Batch}`}
            </h9>
          </div>
        </div>
      </div>
    </>
  );
}
