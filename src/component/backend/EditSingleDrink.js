import React from 'react';
import './EditSingleDrink.css';
import Step from './Step';
import DrinkInfo from './DrinkInfo';

import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { updateItemAsync, addItemAsync, getDrinkAsync} from '../../redux/drink.redux.js';

@connect(
   state => state,
	{ updateItemAsync, addItemAsync, getDrinkAsync}
)



class EditSingleDrink extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			_id:'',
			drinkName : '',
			engName : '',
			img_url : '',
			describes : '',
			steps : [''],
			materials : [{material_img_local_url:'',material_name:'',material_url:''}]
		};

		this.stepPlus = this.stepPlus.bind(this);
		this.onStepReduce = this.onStepReduce.bind(this);
		this.materialPlus = this.materialPlus.bind(this);
		this.onMaterialReduce = this.onMaterialReduce.bind(this);
		this.saveData = this.saveData.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleStepChange = this.handleStepChange.bind(this)
		this.handleMaterialChange = this.handleMaterialChange.bind(this)

	}


	componentDidMount(){
		
		
		if(this.props.match.path !== '/addDrink'){

			let that = this;
	        let id = this.props.match.params.id;
			if (!this.props.drink.drinkList[0]) {
				(async function () {
					await that.props.getDrinkAsync();
					let drink = that.props.drink.drinkList.filter((drink)=>(drink._id === id))[0];
					that.setState({
						_id: drink._id,
						drinkName: drink.drinkName,
						engName: drink.engName,
						img_url: drink.img_url,
						describes: drink.describes,
						steps: drink.steps,
						materials: drink.materials
					})
				})()
			}else{
				let drink = this.props.drink.drinkList.filter((drink) => (drink._id === id))[0];
				this.setState({
					_id: drink._id,
					drinkName: drink.drinkName,
					engName: drink.engName,
					img_url: drink.img_url,
					describes: drink.describes,
					steps: drink.steps,
					materials: drink.materials
				})
			}
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

	materialPlus () {
		let materials = this.state.materials;
		materials.push({material_img_local_url:'',material_name:'',material_url:''});
		this.setState({
			materials : materials
		})
	}

	onMaterialReduce(index){
		let materials = this.state.materials;
		if(materials.length > 1){
			materials.splice(index,1);
			this.setState({
				materials : materials
			})
		}

	}

	saveData(){
		if(this.props.match.path !== '/addDrink'){
			this.props.updateItemAsync(this.state)
		}else{
			this.props.addItemAsync(this.state)
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

    handleMaterialChange (index,name,value,str_len) {
    	let materials = this.state.materials;

    	materials[index][name.slice(0, str_len)] = value;

    	// this.setState({
    	// 	materials:materials
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

        const materials =  this.state.materials.map(function(material,index){
									return <DrinkInfo
			                            key={ material.material_name + material.material_url + index } 
                                        index = { index } 
				                        onMaterialReduce = { that.onMaterialReduce }  
				                        material_msg = { material.material_name }
				                        material_url = { material.material_url }
				                        onHandleMaterialChange = { that.handleMaterialChange }
		                            ></DrinkInfo>
			        	});


             

          

		return (
				<div className="edit_wrap">
					{/* { this.props.drinks.payload ? <Redirect to = 'edit/editWine'></Redirect> : null} */}
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


	                <div className="materials">
		                <p className="bTitle">所需材料</p>
		                {materials}
		                <button className="add_input" onClick = { this.materialPlus }>添加材料</button>
	                </div>

	                <button className="saveData" onClick={ this.saveData }>保存设置</button>
				</div>

		)
	}
}

export default EditSingleDrink;