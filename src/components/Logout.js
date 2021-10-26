import { GoogleLogout } from 'react-google-login';
import React from 'react';


export class Logout extends React.Component{
    removerToken = () => {
        sessionStorage.removeItem('token');
        console.log('El usuario Cerro Seccion');
        window.location.reload(true);
    }
    render(){
        return(
            <div id="logoutBTN">
                <GoogleLogout
                    clientId="468523678912-tai2ck20l69crdn139f6vulb5d27ruhu.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.removerToken}
                    >
                </GoogleLogout>
            </div>
            
        )
    }
}

export default Logout;