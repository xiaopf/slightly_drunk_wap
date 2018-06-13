import React from 'react';
import './stuff.less';

class Stuff extends React.Component {
		constructor(props){
			super(props);

			this.state={value:'',value2:''}

			this.stuffReduce = this.stuffReduce.bind(this);
			this.inputChange = this.inputChange.bind(this);
			this.inputChange2 = this.inputChange2.bind(this);
		}

		stuffReduce(index,e){
            this.props.onStuffReduce(index);
		}

		inputChange(e){
			this.setState({
				value:e.target.value
			})
		}
		inputChange2(e){
			this.setState({
				value2:e.target.value
			})
		}

		render () {

			let index = this.props.index;

			return (

				<div className="stuff_wrap">
		        	<label className="stuff_f_title" htmlFor={'stuff_img_'+(index+1)}>材料 {index + 1} :</label>

		        	<div className="stuff_img_wrap">
			        	<img className="stuff_img" src="../../static/images/mainbg.png" alt="" />
			        	<input name="stuff_input_msg" className="file_input stuff_input_msg" id={'stuff_img_'+(index+1)} type="file"/>
		        	</div>

                    
                    <div className="stuff_text_wrap">

                        <div className="stuff_text_input_s">
            	        	<label className="stuff_s_title" htmlFor={'stuff_msg_'+(index+1)}>名称 : </label>
                    		<input name={'stuff_msg_'+(index+1)} id={'stuff_msg_'+(index+1)} type="text" onChange = { this.inputChange }/>
                        </div>

                		<div className="stuff_text_input_s">
    			        	<label className="stuff_s_title" htmlFor={'stuff_link_'+(index+1)}>链接 : </label>
    		        		<input name={'stuff_link_'+(index+1)} id={'stuff_link_'+(index+1)} type="text" onChange = { this.inputChange2 }/>
                		</div>

                    </div>

                    <div  className="stuff_delete" onClick = {(e) => this.stuffReduce(index,e)}>X</div>

				</div>

			)
		}

}

export default Stuff;