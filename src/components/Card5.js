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



class Card5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: window.$word5,
        };


    this.handleChange_def = this.handleChange_def.bind(this);

    }
    handleChange_def(event) {
      window.$def5 = event.target.value;
}

handleSubmit5(event) {
  let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(window.$word5);
    fire.database().ref('messages').push(window.$def5);
    window.$def5 = '';
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
  <Link to="/Card6">
      <button type="button" onClick={this.handleSubmit5}>
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



export default Card5;
