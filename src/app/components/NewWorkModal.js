import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import UploadImage from './UploadImage'

const NewWorkModal = ({ isOpen, onClose }) => {
	const [imageLoading, setImageLoading] = useState(false);
	const [image, setImage] = useState(null);
	return(
		<Modal show={isOpen} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new experience</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form>
					<UploadImage
						name={'Image for the experience'}
						setParentLoading={setImageLoading}
						setParentStopLoading={()=>{}}
						parentImage={image}
						setParentImage={setImage}
					/>
				</form>

			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onClose}>
					Cancel
				</Button>
				<Button variant="primary" onClick={onClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default NewWorkModal