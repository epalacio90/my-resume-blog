import React, {useEffect} from 'react';

const Login = () =>{
	const [usersCount, setUsersCount] = React.useState(null)
	const email = React.useRef()
	const password = React.useRef()

	useEffect(() => {
		fetch('/api/users/count', {
			method: 'GET',
		}).then(response =>{
			response.json().then(data =>{
				setUsersCount(data.count)
			}).catch(error =>{
				console.log('errorJson:: ', error)
			})
		}).catch(error =>{
			console.log('errorFetch:: ', error)
		})
	}, [ ])

	useEffect(()=> {
		if(localStorage.getItem('token')){
			window.location.href = '/'
		}
	}, [])

	const createDefUser = () =>{
		fetch('/api/users/create-default', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response =>{
				setUsersCount(1)
			}).catch(error =>{
				console.log('errorFetch:: ', error)
		})
	}

	const login = (event) => {
		event.preventDefault()
		fetch('/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: email.current.value, password: password.current.value})
		}).then(response =>{
			response.json().then(data =>{
				console.log('data:: ', data)
				if(data.token){
					localStorage.setItem('token', data.token)
					window.location.href = '/'
				}
			}).catch(error =>{
				console.log('errorJson:: ', error)
			})
		} ).catch(error =>{
			console.log('errorFetch:: ', error)
		} )
	}

	return(
		<div className={'container d-flex align-items-center py-4 bg-body-tertiary'}>
			<main className="form-signin w-50 m-auto">
				<form onSubmit={login}>
						<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

						<div className="form-floating">
							<input type="email" ref={email} className="form-control" id="floatingInput" placeholder="name@example.com" />
								<label htmlFor="floatingInput">Email address</label>
						</div>
						<div className="form-floating">
							<input type="password" ref={password} className="form-control" id="floatingPassword" placeholder="Password" />
								<label htmlFor="floatingPassword">Password</label>
						</div>

						<div className="form-check text-start my-3">
							{usersCount === 0 && <a onClick={createDefUser} className="form-check-label" htmlFor="flexCheckDefault">
									Creat default user
								</a>}
						</div>
						<button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
				</form>
			</main>
		</div>
	)
}

export default Login