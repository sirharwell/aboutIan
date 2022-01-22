import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// general styles
import './main.css';
// carousel styles
import './carousel.css';

class Family extends Component {
    render() {
        return (
          <div>
          <br/><br/><br/>
          <Grid centered columns={2}>
          <Grid.Column>
          <Segment textAlign="center" >
            <Carousel dynamicHeight infiniteLoop width="fluid" showArrows={true}>
            <div>
                <img src="./photos/jeeping.jpg" />
                <p className="legend">Jeeping</p>
            </div>
            <div>
                <img src="./photos/mountain.jpg" />
                <p className="legend">Mountains</p>
            </div>
            <div>
                <img src="./photos/castle.jpg" />
                <p className="legend">Castles</p>
            </div>
            <div>
                <img src="./photos/stone.jpg" />
                <p className="legend">Stonehenge</p>
            </div>
            <div>
                <img src="./photos/church.jpg" />
                <p className="legend">Church of Harwell</p>
            </div>
            <div>
                <img src="./photos/beach.jpg" />
                <p className="legend">Grand Cayman</p>
            </div>
            <div>
                <img src="./photos/shell.jpg" />
                <p className="legend">Diving</p>
            </div>
            <div>
                <img src="./photos/cave.jpg" />
                <p className="legend">Cave Tubing</p>
            </div>
            <div>
                <img src="./photos/boat.jpg" />
                <p className="legend">Boating</p>
            </div>
            <div>
                <img src="./photos/zip.jpg" />
                <p className="legend">Zip Lining</p>
            </div>
            <div>
                <img src="./photos/canal.jpg" />
                <p className="legend">Belgium</p>
            </div>
            <div>
                <img src="./photos/rome.jpg" />
                <p className="legend">Rome</p>
            </div>

            </Carousel>
            </Segment>
            </Grid.Column>
            </Grid>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Travel</Header>
              <p style={{ fontSize: '1.33em' }}>
                I live to travel. Most of our extra money goes to seeing the world. There's so much to see and do and I want to see and do it all. Between my wife and I, we've been to 17 countries and we're hoping to expand that. We have a goal to leave the country at least every other year. Our two favorite places have been the UK and basically anywhere in the Caribbean.
              </p>
                <p style={{ fontSize: '1.33em' }}>
                That map has every country that we've been to, all filled. Hopefully as time goes, that map will be much much fuller.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='./photos/Map.png'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='./photos/camp.jpg'
            />
          </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>Camping</Header>
              <p style={{ fontSize: '1.33em' }}> When we're not galavanting the world, we like to spend time outdoors. We camp a lot. I like to camp in tents and sometimes not even those if the weather is nice. Cori likes to camp in cabins. So we've reached a good compromise in that we almost always stay in cabins.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <br/><br/>
            <Header as='h3' style={{ fontSize: '2em' }}>Animals</Header>
              <p style={{ fontSize: '1.33em' }}> I love animals. If I could set up a private animal sanctuary in my backyard, I totally would. We take my sons to the zoo, but we all really know who that zoo trip is really for.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='medium'
                src='./photos/gator.jpg'
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as='h4' content='Contact Me' />
                <div link inverted>
                  <p>Phone: (801) 874-7127</p>
                  <p>Email: sirharwell@gmail.com</p>
                  <div textAlign='center' relaxed columns={3}>
                    <a href='https://www.facebook.com/ian.harwell'>
                      <Button circular color='facebook' icon='facebook'  />
                    </a>
                    <a href='https://www.linkedin.com/in/ian-harwell/'>
                      <Button circular color='linkedin' icon='linkedin' />
                    </a>
                    <a href='https://github.com/sirharwell'>
                      <Button circular color='github' icon='github' />
                    </a>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header as='h4' inverted>About</Header>
                <p>I am a full stack developer. After a career in sales/finance I went back to school to pursue a career that both challenged and excited me. I am ready to work in a fast-paced environment where I can continue learning to do what I love.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )
  }
}

export default Family;
