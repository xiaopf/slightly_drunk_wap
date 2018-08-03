import React from 'react';
import './EditWine.less';
import Step from './Step';
import Stuff from './Stuff';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createUpdateItemAsync ,createAddItemAsync} from '../../redux/drink.redux.js';

@connect(
   state => state,
   { createUpdateItemAsync ,createAddItemAsync}
)



class EditWine extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			_id:'',
			drinkName : '',
			engName : '',
			img_url : '',
			describes : '',
			steps : [''],
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

	}


	componentDidMount(){

		if(this.props.match.path !== '/addDrink'){

	        let id = this.props.match.params.id;
	        let drink = this.props.resData.drinkList[id];

	        

			this.setState({
				_id: drink._id,
				drinkName : drink.drinkName,
				engName : drink.engName,
				img_url : drink.img_url,
				describes : drink.describes,
				steps : drink.steps,
	            stuffs : drink.stuffs
			})

	        let that = this;
	        setTimeout(function(){
	        	console.log(that.state)
	        },1000)
		}



	}


	stepPlus () {
		let steps = this.state.steps;
		steps.push('');
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
		stuffs.push({stuff_img_local_url:'',stuff_name:'',stuff_url:''});
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
		if(this.props.match.path !== '/addDrink'){
			this.props.createUpdateItemAsync(this.state)
		}else{
			this.props.createAddItemAsync(this.state)
		}
		
		
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
    	// this.setState({
    	// 	steps:steps
    	// })
    }

    handleStuffChange (index,name,value,str_len) {
    	let stuffs = this.state.stuffs;

    	stuffs[index][name.slice(0, str_len)] = value;

    	// this.setState({
    	// 	stuffs:stuffs
    	// })

    }
  
  

	render () {
        
        let that = this;

        const steps  =  this.state.steps.map(function(step,index){
                            return  <Step 
			                            key={ step + index }
			                            index = { index } 
			                            onStepReduce = { that.onStepReduce } 
			                            step = { step }  
			                            onHandleStepChange = { that.handleStepChange }
		                            ></Step>
			        	});

        const stuffs =  this.state.stuffs.map(function(stuff,index){
                            return <Stuff 
			                            key={ stuff.stuff_name + stuff.stuff_url + index } 
                                        index = { index } 
				                        onStuffReduce = { that.onStuffReduce }  
				                        stuff_msg = { stuff.stuff_name }
				                        stuff_url = { stuff.stuff_url }
				                        onHandleStuffChange = { that.handleStuffChange }
		                            ></Stuff>
			        	});


             

          

		return (
				<div className="edit_wrap">
					{ this.props.drinks.payload ? <Redirect to = 'edit/editWine'></Redirect> : null}
		            <label className="bTitle" htmlFor="">主图</label>

	                <img className="main_img" src={this.state.img_url ? this.state.img_url : "https://img.tthunbohui.cn/zhuanti/20631/mainbg.png"} alt="" />

	                <label className="bTitle" htmlFor="">主图链接</label>
	                <input name="img_url" onChange = { this.handleChange } className=" main_img_input" value={this.state.img_url} type="text"/>

				    <br/>
	                <label className="bTitle" htmlFor="">中文名</label>
	                <input name="drinkName" onChange = { this.handleChange } className="nameCn" type="text" value={this.state.drinkName}/ >
					<br/>
	                <label className="bTitle" htmlFor="">英文名</label>
	                <input name="engName" onChange = { this.handleChange } className="nameEn" type="text" value={this.state.engName}/ >
			        <br />


					<br/>
	                <label className="bTitle" htmlFor="describes">介绍</label>
	                <textarea className="describes" onChange = { this.handleChange } name="describes" id="describes" value={this.state.describes}></textarea>


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