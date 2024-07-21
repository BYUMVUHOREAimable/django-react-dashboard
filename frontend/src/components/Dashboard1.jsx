import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import StoreIcon from '@mui/icons-material/Store';

const Dashboard1 = () => {

    const [myBrancheData, setMyBrancheData] = useState([])
    console.log("MyData", myBrancheData)

    const GetData = () =>{
        AxiosInstance.get(`branchedata/`)
        .then((res) => {
            setMyBrancheData(res.data)
        } )
    }

    useEffect(() => {
        GetData()
    },[])

    return(
        <div>
            <MyChartBox
                icon1 = {<StoreIcon/>}
                title1 = {"Quantities per Branch"}
                chart1={ <MyPieChart
                            myData={myBrancheData}
                            />}
            />
           
        </div>
    )

}

export default Dashboard1