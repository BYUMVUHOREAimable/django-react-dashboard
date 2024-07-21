import * as React from 'react';
import { Grid, Box } from '@mui/material';

export default function MyChartBox(props) {
  const {icon1, title1, chart1, icon2, title2, chart2, icon3, title3, chart3} = props
  return (
    <>
        <Grid container
            sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >

            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px dotted #d3d3d3'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon1}</Box>
                    <Box>{title1}</Box>
                </Box>

                <Box sx={{marginBottom: '20px'}}>{chart1}</Box>

            </Grid>

            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px dotted #d3d3d3'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon2}</Box>
                    <Box>{title2}</Box>
                </Box>

                <Box sx={{marginBottom: '20px'}}>{chart2}</Box>

            </Grid>

            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px dotted #d3d3d3'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon3}</Box>
                    <Box>{title3}</Box>
                </Box>

                <Box sx={{marginBottom: '20px'}}>{chart3}</Box>

            </Grid>

        </Grid>

    </>
  );
}
