import React, {Component} from 'react';

class Score extends Component{
	render(){
		return <div className='center-align'>
				<h4>Score: {this.props.score}</h4>
				<h4>Best score: {this.props.bScore}</h4>
			</div>;
	}
}

export default Score;