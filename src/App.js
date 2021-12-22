import './Base.scss';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" component="h2">BRYCE OLDHAM</Typography>
        <Typography variant="h6" component="h4">Full-Stack Developer | Technical Consultant</Typography>
      </header>
      <div className="image-container">
          <div className="leftButton">
            <Fab onClick={buttonLeft} color="primary" aria-label="add">
              <ChevronLeftIcon />
            </Fab>
          </div>
          <img src="./mainPhoto.jpg" className="App-logo" alt="main photo" />
          <div className="rightButton">
            <Fab onClick={buttonRight} color="primary" aria-label="add">
              <ChevronRightIcon />
            </Fab>
          </div>
      </div>
      <div className="work-container">
        <div className="card-container">
          <Card id="card-1" className="card-1">
            <CardContent>
              <div className="schwabLogo">
                <img src="./schwab-logo.jpg" alt="Schwab Logo"/>
                <div className="textSection">
                  <Typography variant="h5" component="h2">Front End Developer</Typography>
                  <Typography variant="h6" component="h4">Charles Schwab</Typography>
                  <Typography className="description" variant="h7" component="h4">As a member of an Agile development team, I was a front-end developer working with my team to build out a web application within the Retail Web Technologies department</Typography>
                  <Divider variant="middle" />
                  <Typography variant="h7" component="h4">Technologies</Typography>
                  <div className="chipSection">
                    <Chip label="Angular 2+"  onClick={handleClick} />
                    <Chip label="Node.js"  onClick={handleClick} />
                    <Chip label="HTML/CSS"  onClick={handleClick} />
                    <Chip label="JavaScript (TypeScript)"  onClick={handleClick} />
                    <Chip label="Agile Scrum"  onClick={handleClick} />
                    <Chip label="Automated Unit Testing w/Karma, Jasmine"  onClick={handleClick} />
                    <Chip label="Jenkins CI"  onClick={handleClick} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card id="card-2" className="card-2">
            <CardContent>
              <div className="schwabLogo">
                <img src="./cuc-logo.jpg" alt="Schwab Logo"/>
                <div className="textSection">
                  <Typography variant="h5" component="h2">Front End Developer</Typography>
                  <Typography variant="h6" component="h4">Texas Conference of Urban Counties</Typography>
                  <Typography className="description" variant="h7" component="h4">Lead front-end developer on a multi-million dollar software implementation for a government agency. Responsible for application UI/UX design and managing four offshore development teams.</Typography>
                  <Divider variant="middle" />
                  <Typography variant="h7" component="h4">Technologies</Typography>
                  <div className="chipSection">
                    <Chip label="Angular 4"  onClick={handleClick} />
                    <Chip label="Angular Material"  onClick={handleClick} />
                    <Chip label="Node.js"  onClick={handleClick} />
                    <Chip label="HTML/CSS"  onClick={handleClick} />
                    <Chip label="JavaScript (TypeScript)"  onClick={handleClick} />
                    <Chip label="Agile Scrum"  onClick={handleClick} />
                    <Chip label="Azure w/Octopus Deploy and TeamCity Configuration"  onClick={handleClick} />
                    <Chip label="Microsoft SQL Server" onClick={handleClick} />
                    <Chip label="Octopus Deploy"  onClick={handleClick} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card id="card-3" className="card-3">
            <CardContent>
              <div className="schwabLogo">
                <img src="./gm_logo.png" alt="Schwab Logo"/>
                <div className="textSection">
                  <Typography variant="h5" component="h2">Full-Stack & Mobile Developer</Typography>
                  <Typography variant="h6" component="h4">General Motors</Typography>
                  <Typography className="description" variant="h7" component="h4">Mobile & Full-Stack developer on a Maven team project delivering Native POC implementations of existing Angular applications within the product suite.</Typography>
                  <Divider variant="middle" />
                  <Typography variant="h7" component="h4">Technologies</Typography>
                  <div className="chipSection">
                  <Chip label="Angular 5, 6, 7 and 8"  onClick={handleClick} />
                    <Chip label="React Native (iOS/Android)"  onClick={handleClick} />
                    <Chip label="Nativescript (iOS/Android)"  onClick={handleClick} />
                    <Chip label="Java w/Spring Boot"  onClick={handleClick} />
                    <Chip label="JavaScript (TypeScript)"  onClick={handleClick} />
                    <Chip label="TFS"  onClick={handleClick} />
                    <Chip label="Jenkins CI"  onClick={handleClick} />
                    <Chip label="Node.js"  onClick={handleClick} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card id="card-4" className="card-4">
            <CardContent>
              <div className="q2Logo">
                <img src="./q2_logo.png" alt="Q2 Logo"/>
                <div className="textSection">
                  <Typography variant="h5" component="h2">Full-Stack Developer</Typography>
                  <Typography variant="h6" component="h4">Q2 eBanking</Typography>
                  <Typography className="description" variant="h7" component="h4">Full-Stack Developer working on a financial services client delivering core, account opening and multiple other software applications within the banking space.</Typography>
                  <Divider variant="middle" />
                  <Typography variant="h7" component="h4">Technologies</Typography>
                  <div className="chipSection">
                    <Chip label="Java w/Spring Boot"  onClick={handleClick} />
                    <Chip label="React w/Redux"  onClick={handleClick} />
                    <Chip label="Vue.js"  onClick={handleClick} />
                    <Chip label="JavaScript (TypeScript)"  onClick={handleClick} />
                    <Chip label="MySQL"  onClick={handleClick} />
                    <Chip label="Jenkins CI"  onClick={handleClick} />
                    <Chip label="AWS"  onClick={handleClick} />
                    <Chip label="Atlassian Products (Jira/Confluence/Bitbucket)"  onClick={handleClick} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

function handleClick() {

}

function handleTransition() {
  document.getElementById("footer-id").classList.add("footer-final");
}

function buttonRight() {
  let val = (parseInt(document.getElementById('card-1').style.left, 10) || 150) - 700;
  document.getElementById('card-1').style.transition = '1s';
  document.getElementById('card-1').style.left = val + 'px';
  let val2 = (parseInt(document.getElementById('card-2').style.left, 10) || 1000) - 700;
  document.getElementById('card-2').style.transition = '1s';
  document.getElementById('card-2').style.left = val2 + 'px';
  let val3 = (parseInt(document.getElementById('card-3').style.left, 10) || 1850) - 700;
  document.getElementById('card-3').style.transition = '1s';
  document.getElementById('card-3').style.left = val3 + 'px';
  let val4 = (parseInt(document.getElementById('card-4').style.left, 10) || 2700) - 700;
  document.getElementById('card-4').style.transition = '1s';
  document.getElementById('card-4').style.left = val4 + 'px';
}

function buttonLeft() {
  let val = (parseInt(document.getElementById('card-1').style.left, 10) || 150) + 700;
  document.getElementById('card-1').style.transition = '1s';
  document.getElementById('card-1').style.left = val + 'px';
  let val2 = (parseInt(document.getElementById('card-2').style.left, 10) || 1000) + 700;
  document.getElementById('card-2').style.transition = '1s';
  document.getElementById('card-2').style.left = val2 + 'px';
  let val3 = (parseInt(document.getElementById('card-3').style.left, 10) || 1850) + 700;
  document.getElementById('card-3').style.transition = '1s';
  document.getElementById('card-3').style.left = val3 + 'px';
  let val4 = (parseInt(document.getElementById('card-4').style.left, 10) || 2700) + 700;
  document.getElementById('card-4').style.transition = '1s';
  document.getElementById('card-4').style.left = val4 + 'px';
}

export default App;
