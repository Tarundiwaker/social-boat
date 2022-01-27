import mydata from "./mydata";
import intro from "./intro.css";

export default function About() {
  return (
    <>
      <div className="main">
        <div className="myLine">
          <h1 className="heading">Something About me</h1>
          <p>
            Hey i am Tarun diwaker,I have completed B.tech in Information
            technology from Rajkiya Engineering College Azamgarhin august 2021.
            i have completed Full stack web development course from newton
            school in October 2021 I have completed industrial training as a
            full stack web developer in MSMEx Pune (november to january) i am
            familiar with JIRA Bitbucket and git, i given some link in following
          </p>
        </div>
        <h1 className="heading">
          Connect with me just click on these socialplatforms
        </h1>
        <div className="social">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              width: "100%",
            }}
          >
            <div
              style={
                {
                  // display: "flex",
                  // // flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              }
            >
              <a
                href={mydata[0].social.facebook}
                target="_blank"
                style={{
                  margin: 4,
                  display: "flex",
                  //   flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#323232",
                }}
              >
                <h9>Facebook</h9>
              </a>
              <a
                href={mydata[0].social.Email}
                target="_blank"
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#323232",
                }}
              >
                <h9>Email</h9>
              </a>
              <a
                href={mydata[0].social.github}
                target="_blank"
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#323232",
                }}
              >
                <h9>Github</h9>
              </a>
              <a
                href={mydata[0].social.linkedIn}
                target="_blank"
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#323232",
                }}
              >
                <h9>linkedin</h9>
              </a>
              <a
                href={mydata[0].social.resume}
                target="_blank"
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#323232",
                }}
              >
                <h9>my resume</h9>
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
