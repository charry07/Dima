import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'

export class Login extends React.Component{
    
    responseGoogle = (googleRes) => {
        console.log(googleRes);
        axios.post('http://localhost:5000/auth/google',{token: googleRes.tokenId })
        .then(res => {
            console.log('Todo bien ESTE ES EL TOKEN!: ',res.data);
            sessionStorage.setItem('token',res.data);
            window.location.reload(true);
        })
        .catch(err => console.error('Hubo Un Error',err))
    }
    reload = () => {
        
            window.location.reload(true);
        
    }


    render(){
        return(
            <div id="Login">
                <GoogleLogin                    
                    clientId="468523678912-tai2ck20l69crdn139f6vulb5d27ruhu.apps.googleusercontent.com"
                    buttonText="LogIn"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Login;