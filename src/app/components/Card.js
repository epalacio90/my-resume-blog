
const Card = ({ color, image, title, content }) => {

	const cardStyle = {
		width: '100%',
		height: '300px',
		borderRadius: '10px',
		backgroundColor: color,
		position: 'relative',
	}

	return(
		<div className="col-md-6 col-lg-4">
			<div style={cardStyle}>
				<img
					src={image}
					alt="placeholder"
					style={{
						width: '50%',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)'
					}}
				/>
				<h2 style={{color: 'white'}}>title</h2>
			</div>
		</div>
	);
}


export default Card;