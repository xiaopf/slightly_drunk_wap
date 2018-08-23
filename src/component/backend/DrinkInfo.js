import React from 'react';
import './DrinkInfo.less';

class DrinkInfo extends React.Component {
		constructor(props){
			super(props);

			this.state = {
				drinkInfo_msg : '',
				drinkInfo_url : ''
			}

			this.drinkInfoReduce = this.drinkInfoReduce.bind(this);
			this.handleChange1 = this.handleChange1.bind(this);
			this.handleChange2 = this.handleChange2.bind(this);
			this.handleChange3 = this.handleChange3.bind(this);

		}

		componentDidMount () {
			
			let drinkInfo_msg = this.props.drinkInfo_msg;
			let drinkInfo_url = this.props.drinkInfo_url;

			this.setState({
				drinkInfo_msg : drinkInfo_msg,
				drinkInfo_url : drinkInfo_url
			})
		}

		drinkInfoReduce(index,e){
            this.props.onDrinkInfoReduce(index);
		}
		handleChange1(index,e){
	        this.props.onHandleDrinkInfoChange(index,e.target.name,e.target.value,19)
		}
		handleChange2(index,e){
			let value = e.target.value;
			this.setState({
				drinkInfo_msg:value
			})
	        this.props.onHandleDrinkInfoChange(index,e.target.name,e.target.value,10)
		}
		handleChange3(index,e){
			let value = e.target.value;
			this.setState({
				drinkInfo_url:value
			})
	        this.props.onHandleDrinkInfoChange(index,e.target.name,e.target.value,9)
		}


		render () {

			let index = this.props.index;

			return (

				<div className="drinkInfo_wrap">
		        	<label className="drinkInfo_f_title" htmlFor={'drinkInfo_img_'+(index+1)}>材料 {index + 1} :</label>

		        	<div className="drinkInfo_img_wrap">
			        	<img className="drinkInfo_img" src="https://img.tthunbohui.cn/zhuanti/20631/mainbg.png" alt="" />
			        	<input name={'drinkInfo_img_local_url_'+(index+1)} onChange = { e => this.handleChange1(index,e) }  className="file_input drinkInfo_input_msg" id={'drinkInfo_img_'+(index+1)} type="file"/>
		        	</div>

                    
                    <div className="drinkInfo_text_wrap">

                        <div className="drinkInfo_text_input_s">
            	        	<label className="drinkInfo_s_title" htmlFor={'drinkInfo_msg_'+(index+1)}>名称 : </label>
                    		<input name={'drinkInfo_name_'+(index+1)} id={'drinkInfo_msg_'+(index+1)} value={ this.state.drinkInfo_msg } type="text" onChange = { e => this.handleChange2(index,e) }/>
                        </div>

                		<div className="drinkInfo_text_input_s">
    			        	<label className="drinkInfo_s_title" htmlFor={'drinkInfo_link_'+(index+1)}>链接 : </label>
    		        		<input name={'drinkInfo_url_'+(index+1)} id={'drinkInfo_link_'+(index+1)} value={ this.state.drinkInfo_url } type="text" onChange = { e => this.handleChange3(index,e) }/>
                		</div>

                    </div>

                    <div  className="drinkInfo_delete" onClick = {(e) => this.drinkInfoReduce(index,e)}>X</div>

				</div>

			)
		}

}

export default DrinkInfo;