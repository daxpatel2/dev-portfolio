import React from "react";
import "./Tech.css";
import CodeIcon from "@mui/icons-material/Code";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Tech() {
  return (
    <div className="h2">
      <h2 className="h22">TECHNOLOGIES I'VE USED</h2>
      <section class="tech-container">
        <div className="card">
          <div className="i">
            <CodeIcon fontSize="medium" className="icon" />
          </div>
          <h2>BACK END</h2>
          <p>C</p>
          <p>Java</p>
          <p>Python</p>
          <p>NodeJS</p>
          <p>ExpressJS</p>
        </div>
        <div className="card">
          <div className="card-image">
            <div className="i">
              <ComputerOutlinedIcon fontSize="medium" className="icon" />
            </div>
            <h2>FRONT END</h2>
            <p>CSS</p>
            <p>React</p>
            <p>HTML</p>
            <p>NextJS</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <div className="i">
              <StorageIcon fontSize="medium" className="icon" />
            </div>
            <h2>DATABASE</h2>
            <p>SQL</p>
            <p>Firebase Firestore</p>
            <p>Appwrite Database</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tech;
