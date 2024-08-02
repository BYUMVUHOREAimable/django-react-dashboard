import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import StoreIcon from '@mui/icons-material/Store';
import MyDonutChart from './charts/DonutChart';
import WcIcon from '@mui/icons-material/Wc';

const Dashboard1 = () => {

    const [myBrancheData, setMyBrancheData] = useState([])
    const [myGenderData, setMyGenderData] = useState([])

    console.log("My Data", myGenderData)

    const GetData = () =>{
        AxiosInstance.get(`branchedata/`)
        .then((res) => {
            setMyBrancheData(res.data)
        } )

        AxiosInstance.get(`genderdata/`)
        .then((res) => {
            setMyGenderData(res.data)
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

                icon2 = {<WcIcon/>}
                title2 = {"Quantities per Gender"}
                chart2={ <MyDonutChart
                            data = {myGenderData}
                            centerlabel={myGenderData.reduce((sum, data) => sum + data.value,0)}
                        />}
            />
           
        </div>
    )

}

export default Dashboard1