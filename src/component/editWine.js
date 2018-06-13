import React from 'react';
import './editWine.less';
import Step from '../components/step';
import Stuff from '../components/stuff';


class EditWine extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			step : [0],
            stuff : [0]
		};

		this.stepPlus = this.stepPlus.bind(this);
		this.onStepReduce = this.onStepReduce.bind(this);

		this.stuffPlus = this.stuffPlus.bind(this);
		this.onStuffReduce = this.onStuffReduce.bind(this);


	}

	stepPlus () {
		let step = this.state.step;

		let max = Math.max.apply(null,step);

		step.push(max + 1);

		console.log(step);

		this.setState({
			step : step
		})
	}

	onStepReduce(index){
		let step = this.state.step;

		if(step.length > 1){
			step.splice(index,1);
			this.setState({
				step : step
			})
		}
	}

	stuffPlus () {
		let stuff = this.state.stuff;

		let max = Math.max.apply(null,stuff);

		stuff.push(max + 1);

		console.log(stuff);

		this.setState({
			stuff : stuff
		})
	}

	onStuffReduce(index){
		let stuff = this.state.stuff;

		if(stuff.length > 1){
			stuff.splice(index,1);
			this.setState({
				stuff : stuff
			})
		}

	}

  

	render () {
        
        let that = this;
        const steps  =  this.state.step.map(function(step,index){
                            return <Step key={step} index = {index} onStepReduce = {that.onStepReduce}></Step>
			        	});

        const stuffs  =  this.state.stuff.map(function(stuff,index){
                            return <Stuff key={stuff} index = {index} onStuffReduce = {that.onStuffReduce}></Stuff>
			        	});


             

          

		return (
           <form className="edit_wrap" action="/add_list" method="post" >

                <input name="test" type="text"/>

                <button type="submit"  value="Submit" className="submit">确认提交</button>



           </form>
		)
	}
}

export default EditWine;