import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import fire from './fire';
// var inputText = document.querySelector('#inputText').value
//console.log({props.state.word_def})



class Card8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: window.$word8,
        };


    this.handleChange_def = this.handleChange_def.bind(this);

    }
    handleChange_def(event) {
      window.$def8 = event.target.value;
}

handleSubmit8(event) {
  let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(window.$word8);
    fire.database().ref('messages').push(window.$def8);
    window.$def8 = '';
}
render(){
  return (
  <div class="box">
  <div>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front box">
    <div>
    <h1>{this.state.word}</h1>
    </div>
    </div>
    <div class="flip-card-back">
      <h1>Definition</h1>
      <textarea id="inputText" onChange={this.handleChange_def} rows="20" cols="50"/>
              <br/>
    </div>
  </div>

</div>

<div>



<div class="box2">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front box">
    <div>
    <h1>Passage</h1>
    </div>
    </div>
    <div class="flip-card-back">
      <h1>Passage</h1>
      <p>Passage paragraph</p>
    </div>
  </div>
  <Link to="/Card9">
      <button type="button" onClick={this.handleSubmit8}>
           Next
      </button>
  </Link>
    </div>


</div>
</div>
</div>
</div>
)
}
}



export default Card8;
