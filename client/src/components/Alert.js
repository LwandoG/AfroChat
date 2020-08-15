import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext)

    if(alertContext.alerts.length > 0){
        return (

            alertContext.alerts.map(alert => (
                <div className="alert" key={alert.id}>
                    {alert.message}
                </div>
            ))
            
        )
    }
    else {
        return <></>
    }

    
}

export default Alert
