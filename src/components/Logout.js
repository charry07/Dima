import { GoogleLogout } from 'react-google-login';
import React from 'react';


export class Logout extends React.Component{
    removerToken = () => {
        sessionStorage.removeItem('token');
    }
    render(){
        return(
            <div className="Login" onClick={this.removerToken}>
                <GoogleLogout
                    clientId="468523678912-tai2ck20l69crdn139f6vulb5d27ruhu.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}>
                </GoogleLogout>
            </div>
            
        )
    }
}

export default Logout;