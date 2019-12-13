import React from 'react';

import { Card, Image, Divider,  Label, Container } from 'semantic-ui-react'

import educationCards from "../../datas/about/education"
import skillsCards from "../../datas/about/skills"

import "./About.css"

const About = (props) => {

  const colorSelector = {
    Expert: "red",
    Proficient: "orange",
    Experienced: "blue",
    Interested: "teal"
  }

  return (
    <div className="About PageInfo">
			<h1>About Me</h1>

      <Container text className="Summary">
        <Image src="/images/about/myself.png" size="small" floated="left" />
        <h3>Hi there.</h3>
        <p>My name is <span style={{fontWeight: "bold"}}>Nut Pinyo</span>. I'm a first-year student from Chulalongkorn University and a self-taught backend developer.</p>
        <p>I believe that you can be good at anything, as long as you're passionate about it. I studied backend development by myself with some help from seniors from the university. With that, I developed the API for <a target="_blank" rel="noopener noreferrer" href="https://projectstack.now.sh/">projectstack.now.sh</a>. </p>
        <p>I also have some interests in frontend development. I created this website in my free time to practice making a website using React as well as to display myself to other people.</p>
        <p>If you have any questions, or if you wish to contact me, feel free to <a href="#" onClick={() => props.changeTab(5)}>contact</a> me right away.</p>
      </Container>
      

			<Divider />

      <h2>Skills</h2>
      <Card.Group stackable itemsPerRow={6}>
        {skillsCards.map((card) => {
          return (
            <Card key={card.skillName}>
              <Image src={card.src} />
              <Card.Content>
                <Card.Header content={card.skillName} />
                <Card.Description content={<Label color={colorSelector[card.level]} content={card.level} />} style={{"fontStyle": "italic"}}/>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>

      

			<Divider />

      <h2>Education</h2>
      <Card.Group itemsPerRow={3} stackable items={educationCards.map((card) => {
        // card.image = <Image src={card.image} />
        return card;
      })} />
    </div>
  );
}
 
export default About;