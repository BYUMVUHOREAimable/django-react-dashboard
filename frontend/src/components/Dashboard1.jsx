import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import StoreIcon from '@mui/icons-material/Store';
import MyDonutChart from './charts/DonutChart';
import WcIcon from '@mui/icons-material/Wc';
import MyStackedBarChart from './charts/StackedBarChart';
import CategoryIcon from '@mui/icons-material/Category';
import MyChartBox2 from './charts/ChartBox2';
import MyLineChart from './charts/LineChart';
import PublicIcon from '@mui/icons-material/Public';

const Dashboard1 = () => {

    const [myBrancheData, setMyBrancheData] = useState([])
    const [myGenderData, setMyGenderData] = useState([])
    const [MyProductBrancheData, setMyProductBrancheData] = useState([])
    const [myCountryData, setMyCountryData] = useState([])

    console.log("My Data", myCountryData)

    const GetData = () =>{
        AxiosInstance.get(`branchedata/`)
        .then((res) => {
            setMyBrancheData(res.data)
        } )

        AxiosInstance.get(`genderdata/`)
        .then((res) => {
            setMyGenderData(res.data)
        } )

        AxiosInstance.get(`productbranchedata/`)
        .then((res) => {
            setMyProductBrancheData(res.data)
        } )

        AxiosInstance.get(`countrydata/`)
        .then((res) => {
            setMyCountryData(res.data)
        } )
    }

    useEffect(() => {
        GetData()
    },[])

    const myseries = 
        [
          { dataKey: 'quantityBrancheA', label: 'Branche A', stack:"A"}, 
          { dataKey: 'quantityBrancheB', label: 'Branche B', stack:"A"}, 
          { dataKey: 'quantityBrancheC', label: 'Branche C', stack:"A"}, 
        ]
    
    const mycountryseries = 
        [
          { dataKey: 'quantityNetherlands', label: 'Netherlands'}, 
          { dataKey: 'quantityGermany', label: 'Germany'}, 
          { dataKey: 'quantityFrance', label: 'France'}, 
        ]
        


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

                icon3 = {<CategoryIcon/>}
                title3 = {"Quantities per Productline & Branche"}
                chart3={ <MyStackedBarChart
                            dataset={MyProductBrancheData}
                            XlabelName = {'productline__name'}
                            series = {myseries}

                        />}
            
            />

            <MyChartBox2
                 icon1 = {<PublicIcon/>}
                 title1 = {"Quantities per Month per Country"}
                 chart1={ <MyLineChart
                            mydata ={myCountryData} 
                            myxaxis={"month_name"}
                            myseries ={mycountryseries}
                             />}

            />

           
        </div>
    )

}

export default Dashboard1