import React from 'react';
import './Upload.less';
import Input from './Input';
class Upload extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			imgs: []
		}

	
		this.input = React.createRef();
		this.handler = this.handler.bind(this);
		this.deleteImg = this.deleteImg.bind(this);


	}

	componentDidMount(){
		let imgs = this.props.srcs;
		let n_imgs = imgs.map((img)=>{
			return {
				file: {},
				src: img
			}
		})

		this.setState({
			imgs: n_imgs
		})
	}

	deleteImg(index){

		let imgs = this.state.imgs;
		imgs.splice(index,1)
		this.setState({
			imgs: imgs
		}) 
	}

    handler(file,index){

		let src = window.URL.createObjectURL(file)
		let imgs = this.state.imgs;

		if(index >= 0){
			imgs.splice(index,1,{
				file: file,
				src: src
			})
		}else{
			imgs.push({
				file: file,
				src: src
			});
		}

		this.setState({
			imgs: imgs
		}) 

		let that = this;
		setTimeout(() => {
			this.props.update(that.state);
		}, 100);
	}


	render () {
		let that = this;
		let imgs = this.state.imgs.map((img,index)=>{
				return (
					<React.Fragment key={index}>
						{img.src ?   <div className="imgWrap" >
									<span className="fa fa-close" onClick={(e) => that.deleteImg(index)}></span>
									<img src={img.src} alt="img" />
									<Input index={index} change={that.handler}></Input>
								</div> 
						:null}
					</React.Fragment>
				)
			});



		return (
				<div className="uploadwrap">
                   
					{imgs}
					
					<div className="addFileWrap">
						<p className="fa fa-plus"></p>
						<Input change={this.handler} ></Input>
					</div>
				</div>


		)
	}
}

export default Upload;