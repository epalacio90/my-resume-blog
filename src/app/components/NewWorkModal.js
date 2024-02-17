import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import UploadImage from './UploadImage'

const NewWorkModal = ({ isOpen, onClose }) => {
	const [imageLoading, setImageLoading] = useState(false);
	const [image, setImage] = useState(null);
	const color = React.useRef()
	const title = React.useRef()
	const content = React.useRef()

	const handleSave = () => {
		// Save the data
		const data = { title: title.current.value, color: color.current.value, image, content: content.current.value }
		fetch('/api/works',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			},
			body: JSON.stringify(data)
		}).then(response =>{
			response.json().then(data =>{
				onClose();
			}).catch(error =>{
				console.log('errorJson:: ', error)
			})
		})
	}

	return(
		<Modal show={isOpen} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new experience</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form>
					<h4>Add the information</h4>
					<div className="form-floating">
						<input type="text" ref={title} className="form-control" id="floatingInput" placeholder="title" />
						<label htmlFor="floatingInput">Title</label>
					</div>
					<div className="form-floating">
						<input type="text" className="form-control" ref={color} id="colorInput" placeholder="#fffff" />
						<label htmlFor="colorInput">Color code</label>
					</div>
					<div className="form-group">
						<label htmlFor="content">Content</label>
						<textarea className="form-control" ref={content} id="content" rows="3"></textarea>
					</div>
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
				<Button variant="primary" onClick={handleSave}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default NewWorkModal