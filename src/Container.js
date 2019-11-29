import React, {Component} from 'react'
import PostPreview from './PostPreview'
class Container extends Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <PostPreview title="Man must explore, and this is exploration at its greatest" subtitle="Problems look mighty small from 150 miles up" postDate="September 24, 2019"/>
          <hr/>
          <PostPreview title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." subtitle="" postDate="September 18, 2019"/>
          <hr/>
          <PostPreview title="Science has not yet mastered prophecy" subtitle="We predict too much for the next year and yet far too little for the next ten." postDate="August 24, 2019"/>
          <hr/>
          <PostPreview title="Failure is not an option" subtitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations." postDate="July 8, 2019"/>
        </div>
      </div>
    </div>);
  }
}

export default Container
