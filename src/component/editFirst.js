import React from 'react';
import './editFirst.less';
import EditBanner from '../components/editBanner';



class EditWine extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			banner : [0],
		};


		this.bannerPlus = this.bannerPlus.bind(this);
		this.onBannerReduce = this.onBannerReduce.bind(this);
	}

	

	bannerPlus () {
		let banner = this.state.banner;

		let max = Math.max.apply(null,banner);

		banner.push(max + 1);

		console.log(banner);

		this.setState({
			banner : banner
		})
	}

	onBannerReduce(index){
		let banner = this.state.banner;

		if(banner.length > 1){
			banner.splice(index,1);
			this.setState({
				banner : banner
			})
		}

	}
  

	render () {
        
        let that = this;


        const banners  =  this.state.banner.map(function(banner,index){
                            return <EditBanner key={banner} index = {index} onBannerReduce = {that.onBannerReduce}></EditBanner>
			        	});


             

          

		return (
           <div className="edit_wrap">


                <div className="stuffs">
	                <p className="bTitle">编辑banner</p>
	                {banners}
	                <button className="add_input" onClick = { this.bannerPlus }>添加材料</button>
                </div>


                <button className="submit">确认提交</button>



           </div>
		)
	}
}

export default EditWine;