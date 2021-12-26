import './Base.scss';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

function App() {
  var items = [
    {
      companyName: "Amazon",
      role: "Senior Software Engineer",
      technologies: ["React", "Node.js", "JavaScript (TypeScript)", "Java w/Kotlin", "GraphQL", "AWS Serverless", "AWS DynamoDB", "AWS Lambdas" ],
      logo: "./amazon_logo.jpeg",
      description: "Senior Software Engineer on an internal Safety and Auditing product for Amazon AUSTIN. We are utilizing the entire AWS cloud stack to deliver a market leading compliance product."
    },
    {
      companyName: "BP",
      role: "Full-Stack Developer",
      technologies: ["Angular 11", "Node.js", "JavaScript (TypeScript)", "MySQL", "Azure Cloud Stack", ".NET Core" ],
      logo: "./bp_logo.png",
      description: "Senior Full Stack Developer on an internal Data Portal & Visualization project for a Fortune 500 oil and gas client. I worked across multiple teams to deliver both front end and back end solutions."
    },
    {
      companyName: "Verizon",
      role: "Full-Stack Developer",
      technologies: ["React w/Redux", "HTML5/CSS3", "Node.js", "JavaScript (TypeScript)", "MySQL"],
      logo: "./verizon_logo.png",
      description: "One of two Full Stack Developers on an Onboarding Portal / Data Analytics enhancement project that delivered exceptional internal metrics for business stakeholders."
    },
    {
      companyName: "Q2 eBanking",
      role: "Full-Stack Developer",
      technologies: ["Java w/Spring Boot", "Node.js", "JavaScript (TypeScript)", "MySQL", "Atlassian Products (Jira/Confluence)"],
      logo: "./q2_logo.png",
      description: "Full-Stack Developer working on a financial services client delivering core, account opening and multiple other software applications within the banking space."
    },
    {
      companyName: "General Motors",
      role: "Full-Stack & Mobile Developer",
      technologies: ["Angular 5, 6, 7 and 8", "Node.js", "React Native (iOS/Android)", "NativeScript (iOS/Android", "Java w/Spring Boot"],
      logo: "./gm_logo.png",
      description: "Mobile & Full-Stack developer on a Maven team project delivering Native POC implementations of existing Angular applications within the product suite."
    },
    {
      companyName: "Texas Conference of Urban Counties",
      role: "Front End Developer",
      technologies: ["Angular 4", "Node.js", "Angular Material", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
      logo: "./cuc-logo.jpg",
      description: "Lead front-end developer on a multi-million dollar software implementation for a government agency. Responsible for application UI/UX design and managing four offshore development teams."
    },
    {
      companyName: "Charles Schwab",
      role: "Front End Developer",
      technologies: ["Angular 2+", "Node.js", "HTML/CSS", "JavaScript (TypeScript)", "Agile Scrum", "Automated Unit Testing w/Karma, Jasmine", "Jenkins CI"],
      logo: "./schwab-logo.jpg",
      description: "As a member of an Agile development team, I was a front-end developer working with my team to build out a web application within the Retail Web Technologies department."
  },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" component="h2">BRYCE OLDHAM</Typography>
        <Typography variant="h6" class="role" component="h4">Software Architect | Technical Consultant</Typography>
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
      <div className="social-container">
        <SocialIcon fgColor="white" url="https://twitter.com/mettaworldbryce" />
        <SocialIcon fgColor="white" url="https://linkedin.com/in/bryceoldham" />
        <SocialIcon fgColor="white" url="https://instagram.com/texas_oldham" />
        <SocialIcon fgColor="white" url="https://github.com/boldham31" />
      </div>
      <div className="work-container">
        <Carousel 
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
