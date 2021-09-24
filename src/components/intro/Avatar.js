import image from '../../img/pho.jpg';
import '../../css/Avatar.css';


function Avatar(){


	return(
		<div className="Avatar-Con" >
			<img className="Avatar-Img" src={image}/>
		</div>
		)
}


export default Avatar;