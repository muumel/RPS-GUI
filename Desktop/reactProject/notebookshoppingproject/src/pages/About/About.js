import React from 'react'
import './About.css';

const About = () => {
    return (
        <div classNameName="container">
            <h1 classNameName="text-center" style={{paddingTop: "30%"}}>About</h1>
            <section id="landingPage" className="container">
            <div className="cloudBox">    
                <img src="./img/skyBG.png" alt="skyBg" className="skyBackground" /> 
                <img src="./img/moonSun.png" alt="moonSun" className="moonSun" />  
                <img src="./img/nightCloud1.png" alt="nightCloud1" className="nightCloud1 nightCloudMovingLeft" />
                <img src="./img/nightCloud2.png" alt="nightCloud2" className="nightCloud2 nightCloudMovingRight" />
                <img src="./img/dayCloud1.png" alt="dayCloud1" className="dayCloud1 dayCloudMovingLeft" />
                <img src="./img/dayCloud2.png" alt="dayCloud2" className="dayCloud2 dayCloudMovingRight"/> 
                <img src="./img/lineSkyBG.png" alt="lineSky" className="lineSkyBG" />

                <ul className="bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="brandTextBox">
                <svg width="1238" height="304" viewBox="0 0 1238 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M235.934 294.8C173.494 300.4 121.694 303.2 80.5336 303.2C53.0936 303.2 32.9336 296.76 20.0536 283.88C7.17359 271 0.733595 250.84 0.733595 223.4V89C0.733595 59.6 7.3136 38.32 20.4736 25.16C33.9136 11.72 55.3336 4.99998 84.7336 4.99998H235.934V63.8H101.534C84.7336 63.8 76.3336 72.2 76.3336 89V223.4C76.3336 229.84 78.1536 235.02 81.7936 238.94C85.7136 242.58 90.6136 244.4 96.4936 244.4C102.374 244.4 108.814 244.4 115.814 244.4C122.814 244.12 130.094 243.84 137.654 243.56C145.214 243.28 152.774 243 160.334 242.72C168.174 242.44 178.114 241.88 190.154 241.04C202.474 240.2 217.734 239.22 235.934 238.1V294.8ZM500.583 84.8C500.583 68 492.183 59.6 475.383 59.6H403.983C387.183 59.6 378.783 68 378.783 84.8V219.2C378.783 236 387.183 244.4 403.983 244.4H475.383C492.183 244.4 500.583 236 500.583 219.2V84.8ZM576.183 219.2C576.183 248.6 569.463 270.02 556.023 283.46C542.863 296.62 521.583 303.2 492.183 303.2H387.183C357.783 303.2 336.363 296.62 322.923 283.46C309.763 270.02 303.183 248.6 303.183 219.2V84.8C303.183 55.4 309.763 34.12 322.923 20.96C336.363 7.51998 357.783 0.799984 387.183 0.799984H492.183C521.583 0.799984 542.863 7.51998 556.023 20.96C569.463 34.12 576.183 55.4 576.183 84.8V219.2ZM660.38 4.99998H836.78C866.18 4.99998 887.46 11.72 900.62 25.16C914.06 38.32 920.78 59.6 920.78 89V126.8C920.78 150.04 916.86 168.1 909.02 180.98C901.46 193.86 889.28 202.4 872.48 206.6L924.98 299H843.08L794.78 210.8H735.98V299H660.38V4.99998ZM845.18 89C845.18 72.2 836.78 63.8 819.98 63.8H735.98V152H819.98C836.78 152 845.18 143.6 845.18 126.8V89ZM1237.76 299H1004.66V4.99998H1237.76V63.8H1080.26V120.5H1204.16V179.3H1080.26V240.2H1237.76V299Z" fill="#9C9C9C" fill-opacity="0.3"/>
                </svg>
            </div>
            <div className="lineDesk"></div>
            <div className="desk"></div>
            <div className="book"></div>
            <div className="hedgy"></div>

            <div className="textBox textBoxTopLeft">
                <div className="arrow"></div>
                <div className="box"></div>
            </div>
            <div className="textBox textBoxTopRight">
                <div className="arrow"></div>
                <div className="box"></div>
            </div>
            <div className="textBox textBoxBottomRight">
                <div className="arrowBottom"></div>
                <div className="boxBottom"></div>
            </div>

            
            <a href="shop.html" className="findYourNotes">
                <div className="topic">Find Your Notes</div>
            </a>

            <div className="recommendBooksBox"></div>


            <div className="circleBox1" id="about"></div>
            <div className="tagCharacter1"></div>
            <img src="./img/manGive.png" alt="manGive" className="manGive" />
            <div className="tagCoverMan"></div>
            <div className="textTagBox1"><p className="definitionText">Writer</p></div>
            <div className="whatIsCore">
                <div className="topic">What is <strong>CORE</strong>?</div>
                <div className="definitionTextCore">CORE is a platform for sharing summary notes from students. Moreover, students can sell their own notes or buy it from others with reasonable cost.</div>
            </div>

            <img src="./img/hedgyRecieve.png" alt="hedgyRecieve" className="hedgyReceiveBack" />
            <div className="coverHedgyRecieve"></div>
            <div className="circleBox2"></div>
            <div className="circleBoxHedgy">
                <img src="./img/hedgyRecieve.png" alt="hedgyRecieve" className="hedgyReceive" />
            </div>
            <div className="tagCharacter2"></div>
            <div className="textTagBox2"><p className="definitionText">Learner</p></div>
            <div className="improveYourSkill">
                <div className="subtopic">Improve your skills by being <strong>TEACHER</strong> and <strong>LEARNER</strong> with us</div>
            </div>

            
            <div className="previewBox">
                <div className="controller">
                    <div className="backIcon">
                        <img src="./img/arrow.png" alt="arrow" className="back" />
                    </div>
                    <div className="nextIcon">
                        <img src="./img/arrow.png" alt="arrow" className="next" />
                    </div>
                    <div className="definitionTextCore">Preview of summary notes</div>
                </div>
                <div className="displayNote"></div>
            </div>
            <div className="propertyNotesBox">
                <div className="topic headPropertyNotes">Our notes are</div>
                <div className="propertyBox1">
                    <div className="iconBox">
                        <img src="./img/cover.png" alt="cover" className="icon" />
                    </div>
                    <div className="propertyText">
                        <div className="definitionTextCore">COVER</div>
                        <div className="definitionText">All contents in every grades.</div>
                    </div>
                </div>
                <div className="propertyBox2">
                    <div className="iconBox">
                        <img src="./img/clear.png" alt="cover" className="icon" />
                    </div>
                    <div className="propertyText">
                        <div className="definitionTextCore">CLEAR</div>
                        <div className="definitionText">Easy to understand. It will not make you get confused.</div>
                    </div>                    
                </div>
                <div className="propertyBox3">
                    <div className="iconBox">
                        <img src="./img/concise.png" alt="cover" className="icon" />
                    </div>
                    <div className="propertyText">
                        <div className="definitionTextCore">CONCISE</div>
                        <div className="definitionText">Save your time to rehearse.</div>
                    </div>
                </div>
                <div className="propertyBox4">
                    <div className="iconBox">
                        <img src="./img/cute.png" alt="cover" className="icon" />
                    </div>
                    <div className="propertyText">
                        <div className="definitionTextCore">CUTE</div>
                        <div className="definitionText">You will be enjoyable to read.</div>
                    </div>
                </div>
            </div>
            <img src="./img/characterRead.png" alt="characterRead" className="characterRead" />

            
            <div className="accessBox">
                <div className="topic">Access by</div>
                <div className="accessByEbook">
                    <div className="definitionTextCore">E-book</div>
                    <div className="circleAccess"></div>
                    <div className="accessImage">
                        <img src="./img/laptop.png" alt="laptop" className="accessByFull" />
                    </div>
                </div>
                <div className="accessByPrintedBook">
                    <div classNameName="definitionTextCore">Printed book</div>
                    <div className="circleAccess"></div>
                    <div className="accessImage">
                        <img src="./img/printedBook.png" alt="printedBook" className="accessByFull" />
                    </div>
                </div>
            </div>
            <img src="./img/manWithHedgyRead.png" alt="manReadwithHedgy" className="manWithHedgy" />

            
            <div className="inviteText"><h3 className="subtopic">Let's make <strong>FRIENDS</strong> and <strong>COMMUNITY</strong> for study together</h3></div>
            <div className="reviewBox"></div>            
        </section>
        </div>
    )
}

export default About;
