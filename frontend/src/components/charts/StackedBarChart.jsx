import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyStackedBarChart({dataset, XlabelName, series}) {
   
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ 
          scaleType: 'band', 
          dataKey: XlabelName, 
          tickLabelStyle: {
            angle: 20,
            textAnchor: 'start',
            fontSize: 10,
        },
        }]}
      series={ series}
      width = {400}
      height = {250}

    />
  );
}

