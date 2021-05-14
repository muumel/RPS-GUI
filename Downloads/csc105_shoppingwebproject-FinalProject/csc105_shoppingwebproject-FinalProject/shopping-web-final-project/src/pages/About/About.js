import React from "react";
import "./About.css";
import manGive from "./img/manGive.png";
import hedgyRecieve from "./img/hedgyRecieve.png";
import arrow from "./img/arrow.png";
import cover from "./img/cover.png";
import clear from "./img/clear.png";
import concise from "./img/concise.png";
import cute from "./img/cute.png";
import characterRead from "./img/characterRead.png";
import laptop from "./img/laptop.png";
import printedBook from "./img/printedBook.png";
import manWithHedgyRead from "./img/manWithHedgyRead.png";

const About = () => {
  return (
    <div className="wholeContainer">
      <section id="landingPage" className="containerr">       
        <div className="circleBox1" id="about"></div>
        <div className="tagCharacter1"></div>
        <img src={manGive} alt="manGive" className="manGive" />
        <div className="tagCoverMan"></div>
        <div className="textTagBox1">
          <p className="definitionText">Writer</p>
        </div>
        <div className="whatIsCore">
          <div className="topic">
            What is <strong>CORE</strong>?
          </div>
          <div className="definitionTextCore">
            CORE is a platform for sharing summary notes from students.
            Moreover, students can sell their own notes or buy it from others
            with reasonable cost.
          </div>
        </div>

        <img
          src={hedgyRecieve}
          alt="hedgyRecieve"
          className="hedgyReceiveBack"
        />
        <div className="coverHedgyRecieve"></div>
        <div className="circleBox2"></div>
        <div className="circleBoxHedgy">
          <img src={hedgyRecieve} alt="hedgyRecieve" className="hedgyReceive" />
        </div>
        <div className="tagCharacter2"></div>
        <div className="textTagBox2">
          <p className="definitionText">Learner</p>
        </div>
        <div className="improveYourSkill">
          <div className="subtopic">
            Improve your skills by being <strong>TEACHER</strong> and{" "}
            <strong>LEARNER</strong> with us
          </div>
        </div>

        <div className="previewBox">
          <div className="controller">
            <div className="backIcon">
              <img src={arrow} alt="arrow" className="back" />
            </div>
            <div className="nextIcon">
              <img src={arrow} alt="arrow" className="next" />
            </div>
            <div className="definitionTextCore">Preview of summary notes</div>
          </div>
          <div className="displayNote"></div>
        </div>
        <div className="propertyNotesBox">
          <div className="topic headPropertyNotes">Our notes are</div>
          <div className="propertyBox1">
            <div className="iconBox">
              <img src={cover} alt="cover" className="icon" />
            </div>
            <div className="propertyText">
              <div className="definitionTextCore">COVER</div>
              <div className="definitionText">
                All contents in every grades.
              </div>
            </div>
          </div>
          <div className="propertyBox2">
            <div className="iconBox">
              <img src={clear} alt="cover" className="icon" />
            </div>
            <div className="propertyText">
              <div className="definitionTextCore">CLEAR</div>
              <div className="definitionText">
                Easy to understand. It will not make you get confused.
              </div>
            </div>
          </div>
          <div className="propertyBox3">
            <div className="iconBox">
              <img src={concise} alt="cover" className="icon" />
            </div>
            <div className="propertyText">
              <div className="definitionTextCore">CONCISE</div>
              <div className="definitionText">Save your time to rehearse.</div>
            </div>
          </div>
          <div className="propertyBox4">
            <div className="iconBox">
              <img src={cute} alt="cover" className="icon" />
            </div>
            <div className="propertyText">
              <div className="definitionTextCore">CUTE</div>
              <div className="definitionText">
                You will be enjoyable to read.
              </div>
            </div>
          </div>
        </div>
        <img
          src={characterRead}
          alt="characterRead"
          className="characterRead"
        />

        <div className="accessBox">
          <div className="topic">Access by</div>
          <div className="accessByEbook">
            <div className="definitionTextCore">E-book</div>
            <div className="circleAccess"></div>
            <div className="accessImage">
              <img src={laptop} alt="laptop" className="accessByFull" />
            </div>
          </div>
          <div className="accessByPrintedBook">
            <div className="definitionTextCore">Printed book</div>
            <div className="circleAccess"></div>
            <div className="accessImage">
              <img
                src={printedBook}
                alt="printedBook"
                className="accessByFull"
              />
            </div>
          </div>
        </div>
        <img
          src={manWithHedgyRead}
          alt="manReadwithHedgy"
          className="manWithHedgy"
        />

        
      </section>
    </div>
  );
};

export default About;
