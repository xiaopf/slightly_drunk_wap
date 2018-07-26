import React from 'react';
import './editBanner.less';
import { Redirect ,WithRouter} from 'react-router-dom';


// @WithRouter

class EditBanner extends React.Component {
		constructor(props){
			super(props);

			this.state = {
				banner_link : '',
				banner_image : ''
			}

			this.stuffReduce = this.stuffReduce.bind(this);
			this.handleChange = this.handleChange.bind(this);
			this.handleChange1 = this.handleChange1.bind(this);

		}


		componentDidMount () {
			
			let banner_link = this.props.banner.banner_link;
			let banner_image = this.props.banner.banner_image;

			this.setState({
				banner_link : banner_link,
				banner_image : banner_image
			})
		}




		stuffReduce(index,e){
            this.props.onBannerReduce(index);
		}

		handleChange(index,e){
			this.setState({
				banner_link : e.target.value
			})

            this.props.onHandleBannerChange(index,e.target.name,e.target.value,11);

		}		

		handleChange1(index,e){
			this.setState({
				banner_image : e.target.value
			})
            
            let that = this;
            setTimeout(function(){
                console.log(that.state);
            },1000)
            this.props.onHandleBannerChange(index,e.target.name,e.target.value,12);

		}


		render () {

			let index = this.props.index;

			return (

				<div className="editBanner_wrap">


				      { this.props.banner.redirectTo ? <Redirect to={ this.props.banner.redirectTo }></Redirect> : null }

		        	<label className="editBanner_f_title" htmlFor={'stuff_img_'+(index+1)}>banner {index + 1} :</label>

		        	<div className="editBanner_img_wrap">
			        	<img className="editBanner_img" src={this.state.banner_image ? this.state.banner_image : "https://img.tthunbohui.cn/zhuanti/20631/mainbg.png"} alt="" />
			        	 {/* 注释内容 <input className="file_input editBanner_input_msg" id={'stuff_img_'+(index+1)} type="file"/>*/}
		        	</div>

                    
                    <div className="editBanner_text_wrap">

                        <div className="editBanner_text_input_s">
            	        	<label className="editBanner_s_title" htmlFor={'banner_msg_'+(index+1)}>图像 : </label>
                    		<input className='editBanner_msg_input' value = { this.state.banner_image } name = {'banner_image' +(index+1)} id={'banner_image_'+(index+1)} type="text" onChange = { e => this.handleChange1(index,e) }/>
                        </div>

                        <div className="editBanner_text_input_s">
            	        	<label className="editBanner_s_title" htmlFor={'banner_link_'+(index+1)}>链接 : </label>
                    		<input className='editBanner_link_input' value = { this.state.banner_link } name = {'banner_link' +(index+1)} id={'banner_link_'+(index+1)} type="text" onChange = { e => this.handleChange (index,e)}/>
                        </div>



                    </div>

                    <div  className="editBanner_delete" onClick = {(e) => this.stuffReduce(index,e)}>X</div>

				</div>

			)
		}

}

export default EditBanner;