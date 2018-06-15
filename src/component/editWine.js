import React from 'react';
import './editWine.less';
import Step from './step';
import Stuff from './stuff';

import { connect } from 'react-redux';
import { createAddItemAsync } from '../redux/drink.redux.js';

@connect(
   state => state,
   { createAddItemAsync }
)



class EditWine extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			drinkName : '',
			engName : '',
			img_local_url : '',
			describes : '',
			steps : [0],
            stuffs : [{stuff_img_local_url:'',stuff_name:'',stuff_url:''}]
		};

		this.stepPlus = this.stepPlus.bind(this);
		this.onStepReduce = this.onStepReduce.bind(this);

		this.stuffPlus = this.stuffPlus.bind(this);
		this.onStuffReduce = this.onStuffReduce.bind(this);
		this.saveData = this.saveData.bind(this);
		this.handleChange = this.handleChange.bind(this);

		 this.handleStepChange = this.handleStepChange.bind(this)
		 this.handleStuffChange = this.handleStuffChange.bind(this)
		 // this.handleStuffChange2 = this.handleStuffChange2.bind(this)
		 // this.handleStuffChange3 = this.handleStuffChange3.bind(this)
	}

	stepPlus () {
		let steps = this.state.steps;

		let max = Math.max.apply(null,steps);

		steps.push(max + 1);

		console.log(steps);

		this.setState({
			steps : steps
		})
	}

	onStepReduce(index){
		let steps = this.state.steps;

		if(steps.length > 1){
			steps.splice(index,1);
			this.setState({
				steps : steps
			})
		}
	}

	stuffPlus () {
		let stuffs = this.state.stuffs;

		let max = Math.max.apply(null,stuffs);

		stuffs.push(max + 1);

		console.log(stuffs);

		this.setState({
			stuffs : stuffs
		})
	}

	onStuffReduce(index){
		let stuffs = this.state.stuffs;

		if(stuffs.length > 1){
			stuffs.splice(index,1);
			this.setState({
				stuffs : stuffs
			})
		}

	}

	saveData(){
		this.props.createAddItemAsync(this.state)
	}

	handleChange(e){

        let name = e.target.name;
        let value = e.target.value;
        this.setState({
        	[name]:value
        })
	}

    handleStepChange (index,step) {

    	let steps = this.state.steps;
    	steps[index] = step;
    	this.setState({
    		steps:steps
    	})

    	console.log(this.state)
    }

    handleStuffChange (index,name,value,str_len) {
    	let stuffs = this.state.stuffs;

    	stuffs[index][name.slice(0, str_len)] = value;

    	this.setState({
    		stuffs:stuffs
    	})

    	console.log(this.state)
    }
  
  

	render () {
        
        let that = this;
        const steps  =  this.state.steps.map(function(step,index){
                            return <Step key={step} index = {index} onStepReduce = {that.onStepReduce}  onHandleStepChange = { that.handleStepChange }></Step>
			        	});

        const stuffs  =  this.state.stuffs.map(function(stuff,index){
                            return <Stuff key={stuff} index = {index} 
			                            onStuffReduce = {that.onStuffReduce}  
			                            onHandleStuffChange = { that.handleStuffChange }

		                            ></Stuff>
			        	});


             

          

		return (
				<div className="edit_wrap">
		            <label className="bTitle" htmlFor="">主图</label>

	                <img className="main_img" src="https://img.tthunbohui.cn/zhuanti/20631/mainbg.png" alt="" />
	                <input name="img_local_url" onChange = { this.handleChange } className="file_input main_img_input" type="file"/>

				    <br/>
	                <label className="bTitle" htmlFor="">中文名</label>
	                <input name="drinkName" onChange = { this.handleChange } className="nameCn" type="text"/>
					<br/>
	                <label className="bTitle" htmlFor="">英文名</label>
	                <input name="engName" onChange = { this.handleChange } className="nameEn" type="text"/>
			        <br />

					<br/>
	                <label className="bTitle" htmlFor="describes">介绍</label>
	                <textarea className="describes" onChange = { this.handleChange } name="describes" id="describes"></textarea>


	                <div className="steps">
		               <p className="bTitle">制作步骤</p>
		               {steps}
		               <button className="add_input" onClick = { this.stepPlus }>添加步骤</button>
	                </div>


	                <div className="stuffs">
		                <p className="bTitle">所需材料</p>
		                {stuffs}
		                <button className="add_input" onClick = { this.stuffPlus }>添加材料</button>
	                </div>

	                <button className="saveData" onClick={ this.saveData }>保存设置</button>
				</div>

		)
	}
}

export default EditWine;