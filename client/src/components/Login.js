import React, {useState} from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWthAuth";


// const Login = (props) => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   const [credentials, setCredentials] = useState({});

//   const login = e => {
//     e.preventDefault();
//     axiosWithAuth().post('/api/login', credentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.token)
//       this.props.history.push('/protected');
//     })
//   }

//   const handleChange = e => {
//     setCredentials: {
//       ...credentials,
//       [e.target.name]: e.target.value,
//     }
//   }
//   return (
//     // <>
//     //   <h1>Welcome to the Bubble App!</h1>
//     //   <p>Build a login page here</p>
//     // </>
//     <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//   );
// };

// export default Login;

class Login extends React.Component {
  state = {
    credentials: {
    username: '',
    password: ''
  }
}

handleChange = e => {
  this.setState({
    credentials: {
      ...this.state.credentials,
      [e.target.name]: e.target.value
    }
  })
}

login = e => {
  e.preventDefault();
  axios.post('http://localhost:5000/api/login', this.state.credentials)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    this.props.history.push('/protected')
  })
  .catch(err => console.log(err))
}

render() {
  return (
    <div>
      <form onSubmit={this.login}>
        <input
        type='text'
        name='username'
        value={this.state.credentials.username}
        onChange={this.handleChange}
        />
        <input
        type='password'
        name='password'
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}
}

export default Login;
