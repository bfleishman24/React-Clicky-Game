import React, {Component} from 'react';
import Score from './Score';
import Shapes from './Shapes';
import '../index.css';

class Characters extends Component{
		state = {
			score: 0,
			bestScore: 0,
			clickedChars: {
				'Circle': false,
				'Cresent': false,
				'Decagon': false,
				'Heart': false,
				'Heptagon': false,
				'Hexagon': false,
				'Octagon': false,
				'Oval': false,
				'Pentagon': false,
				'Rectangle': false,
				'Square': false,
				'Triange': false
			}
		};

	constructor(props) {
		super(props);
		this.guessChar = this.guessChar.bind(this);
	}

	guessChar = event =>{
		let char = event.target.getAttribute('char'),score;
		var updatedState = this.state.clickedChars;
		if(this.state.clickedChars[char]){
			score = 0;
			for(let name in updatedState){
				updatedState[name]=false;
			}

		}else{
			score = this.state.score+1;
			score > this.state.bestScore && this.setState({bestScore:  score})
			updatedState[char]=true;
		}

		this.setState({
			clickedChars : updatedState, score: score
		});
	};

	render(){
		return <main className="container center-align">
				<div className="row">
				<div className="col m3">
					<Score score={this.state.score} bScore={this.state.bestScore} />
				</div>
					<div className="col s12 m9">
						<Shapes onClick={this.guessChar} />
					</div>
				</div>
			</main>;
	}
}

export default Characters;