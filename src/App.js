import './Base.scss';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function App() {
  var items = [
    {
        companyName: "Charles Schwab",
        role: "Front End Developer",
        technologies: ["Angular 2+", "Node.js", "HTML/CSS", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
        logo: "./schwab-logo.jpg",
        description: "As a member of an Agile development team, I was a front-end developer working with my team to build out a web application within the Retail Web Technologies department."
    },
    {
      companyName: "Texas Conference of Urban Counties",
      role: "Front End Developer",
      technologies: ["Angular 4", "Node.js", "Angular Material", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
      logo: "./cuc-logo.jpg",
      description: "Lead front-end developer on a multi-million dollar software implementation for a government agency. Responsible for application UI/UX design and managing four offshore development teams."
    },
    {
      companyName: "Texas Conference of Urban Counties",
      role: "Front End Developer",
      technologies: ["Angular 4", "Node.js", "Angular Material", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
      logo: "./cuc-logo.jpg",
      description: "Lead front-end developer on a multi-million dollar software implementation for a government agency. Responsible for application UI/UX design and managing four offshore development teams."
    },
    {
      companyName: "Texas Conference of Urban Counties",
      role: "Front End Developer",
      technologies: ["Angular 4", "Node.js", "Angular Material", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
      logo: "./cuc-logo.jpg",
      description: "Lead front-end developer on a multi-million dollar software implementation for a government agency. Responsible for application UI/UX design and managing four offshore development teams."
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" component="h2">BRYCE OLDHAM</Typography>
        <Typography variant="h6" component="h4">Software Architect | Technical Consultant</Typography>
      </header>
      <div className="image-container">
          {/* <div className="leftButton">
            <Fab onClick={buttonLeft} color="primary" aria-label="add">
              <ChevronLeftIcon />
            </Fab>
          </div> */}
          <img src="./mainPhoto.jpg" className="App-logo" alt="main photo" />
          {/* <div className="rightButton">
            <Fab onClick={buttonRight} color="primary" aria-label="add">
              <ChevronRightIcon />
            </Fab>
          </div> */}
      </div>
      <div className="work-container">
        <Carousel 
          navButtonsAlwaysVisible={true} 
          animation="slide"
          autoPlay={false}
          interval={4000}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </div>
      {/* <div className="work-container">
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
      </div> */}
    </div>
  );
}

function Item(props)
{
    return (
        <Paper>
              <div className="schwabLogo">
                <img src={props.item.logo} alt="Schwab Logo"/>
                <div className="textSection">
                  <Typography variant="h5" component="h2">{props.item.role}</Typography>
                  <Typography variant="h6" component="h4">{props.item.companyName}</Typography>
                  <Typography className="description" component="h4">{props.item.description}</Typography>
                  <Divider variant="middle" />
                  <Typography variant="h6" component="h4">Technologies</Typography>
                  <div className="chipSection">
                    {
                      props.item.technologies.map( (technology, i) => <Chip key={i} label={technology} onClick={handleClick} /> )
                    }
                  </div>
                </div>
              </div>
        </Paper>
    )
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
  console.log("card 1: " + val)
  let val2 = (parseInt(document.getElementById('card-2').style.left, 10) || 1000) - 700;
  document.getElementById('card-2').style.transition = '1s';
  document.getElementById('card-2').style.left = val2 + 'px';
  console.log("card 2: " + val2)
  let val3 = (parseInt(document.getElementById('card-3').style.left, 10) || 1850) - 700;
  document.getElementById('card-3').style.transition = '1s';
  document.getElementById('card-3').style.left = val3 + 'px';
  console.log("card 3: " + val3)
  let val4 = (parseInt(document.getElementById('card-4').style.left, 10) || 2700) - 700;
  document.getElementById('card-4').style.transition = '1s';
  document.getElementById('card-4').style.left = val4 + 'px';
  console.log("card 4: " + val4)
}

function buttonLeft() {
  let val = (parseInt(document.getElementById('card-1').style.left, 10) || 150) + 700;
  document.getElementById('card-1').style.transition = '1s';
  document.getElementById('card-1').style.left = val + 'px';
  console.log("card 1: " + val)
  let val2 = (parseInt(document.getElementById('card-2').style.left, 10) || 1000) + 700;
  document.getElementById('card-2').style.transition = '1s';
  document.getElementById('card-2').style.left = val2 + 'px';
  console.log("card 2: " + val2)
  let val3 = (parseInt(document.getElementById('card-3').style.left, 10) || 1850) + 700;
  document.getElementById('card-3').style.transition = '1s';
  document.getElementById('card-3').style.left = val3 + 'px';
  console.log("card 3: " + val3)
  let val4 = (parseInt(document.getElementById('card-4').style.left, 10) || 2700) + 700;
  document.getElementById('card-4').style.transition = '1s';
  document.getElementById('card-4').style.left = val4 + 'px';
  console.log("card 4: " + val4)
}

function generateCardPosition() {

}

export default App;
