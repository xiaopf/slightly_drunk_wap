import React from 'react';
import './step.less';

class Step extends React.Component {
		constructor(props){
			super(props);

			this.state={step:''}

			this.stepReduce = this.stepReduce.bind(this);
			this.handleChange = this.handleChange.bind(this);
		}


		componentDidMount () {
            
            let step = this.props.step;
            
			this.setState({
				step:step
			})

		}
 
		stepReduce(index,e){
            this.props.onStepReduce(index);
		}

		handleChange(index,e){
            
            let value = e.target.value;
            
			this.setState({
				step:value
			})

			this.props.onHandleStepChange(index,value);
			
		}

		render () {

			let index = this.props.index;

			return (

				<div className="single_step">
		        	<label className="step_msg" htmlFor={'step_'+(index+1)}>步骤 {index + 1} :</label>
	        		<input name={'step_text_'+(index+1)} className="step_text" id={'step_'+(index+1)} type="text" value = { this.state.step } onChange = { e => this.handleChange(index,e) }/>
	        		<div className="delete_step" onClick = {(e) => this.stepReduce(index,e)}>X</div>
				</div>

			)
		}

}

export default Step;