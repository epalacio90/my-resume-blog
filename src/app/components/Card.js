
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
			<a href={content}>
				<div style={cardStyle}>
					<img
						src={image}
						alt="placeholder"
						style={{
							width: '30%',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}}
					/>
				</div>
			</a>

		</div>
	);
}


export default Card;