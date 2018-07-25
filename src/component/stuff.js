import React from 'react';
import './stuff.less';

class Stuff extends React.Component {
		constructor(props){
			super(props);

			this.state = {
				stuff_msg : '',
				stuff_url : ''
			}

			this.stuffReduce = this.stuffReduce.bind(this);
			this.handleChange1 = this.handleChange1.bind(this);
			this.handleChange2 = this.handleChange2.bind(this);
			this.handleChange3 = this.handleChange3.bind(this);

		}

		componentDidMount () {
			
			let stuff_msg = this.props.stuff_msg;
			let stuff_url = this.props.stuff_url;

			this.setState({
				stuff_msg : stuff_msg,
				stuff_url : stuff_url
			})
		}

		stuffReduce(index,e){
            this.props.onStuffReduce(index);
		}
		handleChange1(index,e){
	        this.props.onHandleStuffChange(index,e.target.name,e.target.value,19)
		}
		handleChange2(index,e){
			let value = e.target.value;
			this.setState({
				stuff_msg:value
			})
	        this.props.onHandleStuffChange(index,e.target.name,e.target.value,10)
		}
		handleChange3(index,e){
			let value = e.target.value;
			this.setState({
				stuff_url:value
			})
	        this.props.onHandleStuffChange(index,e.target.name,e.target.value,9)
		}


		render () {

			let index = this.props.index;

			return (

				<div className="stuff_wrap">
		        	<label className="stuff_f_title" htmlFor={'stuff_img_'+(index+1)}>材料 {index + 1} :</label>

		        	<div className="stuff_img_wrap">
			        	<img className="stuff_img" src="https://img.tthunbohui.cn/zhuanti/20631/mainbg.png" alt="" />
			        	<input name={'stuff_img_local_url_'+(index+1)} onChange = { e => this.handleChange1(index,e) }  className="file_input stuff_input_msg" id={'stuff_img_'+(index+1)} type="file"/>
		        	</div>

                    
                    <div className="stuff_text_wrap">

                        <div className="stuff_text_input_s">
            	        	<label className="stuff_s_title" htmlFor={'stuff_msg_'+(index+1)}>名称 : </label>
                    		<input name={'stuff_name_'+(index+1)} id={'stuff_msg_'+(index+1)} value={ this.state.stuff_msg } type="text" onChange = { e => this.handleChange2(index,e) }/>
                        </div>

                		<div className="stuff_text_input_s">
    			        	<label className="stuff_s_title" htmlFor={'stuff_link_'+(index+1)}>链接 : </label>
    		        		<input name={'stuff_url_'+(index+1)} id={'stuff_link_'+(index+1)} value={ this.state.stuff_url } type="text" onChange = { e => this.handleChange3(index,e) }/>
                		</div>

                    </div>

                    <div  className="stuff_delete" onClick = {(e) => this.stuffReduce(index,e)}>X</div>

				</div>

			)
		}

}

export default Stuff;