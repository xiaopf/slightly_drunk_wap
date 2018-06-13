import React from 'react';
import './editBanner.less';

class EditBanner extends React.Component {
		constructor(props){
			super(props);

			this.state={value:'',value2:''}

			this.stuffReduce = this.stuffReduce.bind(this);
			this.inputChange = this.inputChange.bind(this);
			this.inputChange2 = this.inputChange2.bind(this);
		}

		stuffReduce(index,e){
            this.props.onBannerReduce(index);
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

				<div className="editBanner_wrap">
		        	<label className="editBanner_f_title" htmlFor={'stuff_img_'+(index+1)}>banner {index + 1} :</label>

		        	<div className="editBanner_img_wrap">
			        	<img className="editBanner_img" src="../../static/images/mainbg.png" alt="" />
			        	<input className="file_input editBanner_input_msg" id={'stuff_img_'+(index+1)} type="file"/>
		        	</div>

                    
                    <div className="editBanner_text_wrap">

                        <div className="editBanner_text_input_s">
            	        	<label className="editBanner_s_title" htmlFor={'editBanner_msg_'+(index+1)}>链接 : </label>
                    		<input className='editBanner_msg_input' id={'editBanner_msg_'+(index+1)} type="text" onChange = { this.inputChange }/>
                        </div>


                    </div>

                    <div  className="editBanner_delete" onClick = {(e) => this.stuffReduce(index,e)}>X</div>

				</div>

			)
		}

}

export default EditBanner;