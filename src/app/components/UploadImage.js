import React, {useCallback, useState} from 'react';
import {useDropzone} from "react-dropzone";
import uploadImage from "../assets/images/upload_image.png";


const UploadImage = ({name, setParentLoading, setParentStopLoading, setParentImage, parentImage, description}) =>{
	const [loadingImage, setLoadingImage] = useState(false);

	const onDrop = useCallback(async acceptedFiles => {
		//https://images-quip.herokuapp.com
		setLoadingImage(true);
		const ranNum = Math.floor(Math.random() * 1000000);
		setParentLoading(ranNum);
		const formData  = new FormData();

		formData.append('image', acceptedFiles[0])

		try{
			const responseCrud = await fetch('https://images.epalacio.com.mx/api/images/upload',{
				method: 'POST',
				headers:{
					Authorization: 'Bearer '+ localStorage.getItem('token'),
				},
				body: formData
			})

			const response = await  responseCrud.json()
			setParentImage(response.Location);
			setLoadingImage(false);
			setParentStopLoading(ranNum);
		}catch(e){
			setLoadingImage(false);
			setParentStopLoading(ranNum);
			console.log(e);
		}




	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
	return(
		<>
			<p className={'serviceLabel mt-4'}>{name}</p>
			{description && description()}
			{(!loadingImage && !parentImage ) && <div {...getRootProps()} className={'dashed-border p-5 bg-white text-center'}>
				<input {...getInputProps()} />
				{
					isDragActive ?
						<p>Drop the files here ...</p> :
						<>
							<img src={uploadImage} />
							<p>Seleccione o arrastre una imagen</p>
						</>
				}
			</div>}
			{loadingImage && <div className={'dashed-border p-5 bg-white text-center'}>
			</div>}
			{(!loadingImage && parentImage) && <div className={'dashed-border p-2 bg-white text-center'}>
				<img src={parentImage} style={{maxWidth: 150}} />
				<p style={{cursor: 'pointer', color:'#E24302', textAlign:'center', fontSize: 15}} onClick={()=>{setParentImage('')}}>Eliminar imágen</p>
			</div>}
		</>
	)
}

export default UploadImage;
