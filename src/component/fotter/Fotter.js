import fotter from "./fotter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Fotter() {
  return (
    <>
      <div className="man">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.facebook.com/tarunjigopal/"
              target="_blank"
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "#a9a9a9",
                margin: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#323232",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "#a9a9a9",
                margin: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#323232",
              }}
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a
              href="https://linkedin.com/in/tarun-diwaker-980bb615b"
              target="_blank"
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "#a9a9a9",
                margin: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#323232",
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fotter;
