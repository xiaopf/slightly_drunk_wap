import React from 'react';
import './Upload.less';

class Upload extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			imgs : []
		}

	
		this.input = React.createRef();
		this.handler = this.handler.bind(this);
		this.deleteImg = this.deleteImg.bind(this);

	}

	deleteImg(index,e){

		let imgs = this.state.imgs;
		imgs.splice(index,1)
		this.setState({
			imgs: imgs
		}) 
	}

    handler(){
		let src = window.URL.createObjectURL(this.input.current.files[0])
		let file = this.input.current.files[0];
		let imgs = this.state.imgs;
		imgs.push({
					file: file,
					src: src
				});
		this.setState({
			imgs: imgs
		}) 
	}

	componentDidUpdate(){
		this.props.update(this.state);
	}

  

	render () {
		let that = this;
		let imgs = this.state.imgs.map((img,index)=>{
			return (
				<React.Fragment key={index}>
					{img.src ?   <div className="imgWrap" >
								<span className="fa fa-close" onClick={(e) => that.deleteImg(index,e)}></span>
								<img src={img.src} alt="img" />
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
						<input onChange={this.handler} onClick={this.addFile} ref={this.input} type="file" />
					</div>
				</div>


		)
	}
}

export default Upload;