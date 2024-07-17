import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'

const Dashboard1 = () => {

    const [myData, setMyData] = useState([])
    console.log("MyData", myData)

    const GetData = () =>{
        AxiosInstance.get(`supermarketsales/`)
        .then((res) => {
            setMyData(res.data)
        } )
    }

    useEffect(() => {
        GetData()
    },[])

    return(
        <div>This is the Dashboard 1 page </div>
    )

}

export default Dashboard1