import {Modal} from 'react-bootstrap'

const WorkModal = ({ work, onClose, isOpen }) => {

	return(
		<Modal show={isOpen} onHide={onClose}>
		</Modal>
	)
}

export default WorkModal;