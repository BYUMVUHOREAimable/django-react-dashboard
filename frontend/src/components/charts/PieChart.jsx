import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function MyPieChart({myData}) {
  return (
    <PieChart
      series={[
        {
            arcLabel: (item) => `${item.percentage} %`,
            data: myData,
            highlightScope: {faded:'global', highlighted: 'item'},
            faded: { innerRadius: 30, additionalRadius: -30, color:'gray'}
        },
      ]}

      sx={{
        [`& .${pieArcLabelClasses.root}`]:{
            fill: 'white', 
            fontSize: 14,
        }
      }}

      width={400}
      height={200}
    />
  );
}
