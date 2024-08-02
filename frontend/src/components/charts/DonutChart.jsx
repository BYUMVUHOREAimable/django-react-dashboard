import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function MyDonutChart({data, centerlabel}) {
  return (
    <PieChart 
        series={[{ 
            data, 
            innerRadius: 50,
            arcLabel: (item) => `${item.value}`,
            highlightScope: {faded:'global', highlighted: 'item'},
            faded: { innerRadius: 30, additionalRadius: -30, color:'gray'}
        }]} 
        sx={{
            [`& .${pieArcLabelClasses.root}`]:{
                fill: 'white', 
                fontSize: 12,
            }
          }}
        {...size}>
      <PieCenterLabel>{centerlabel}</PieCenterLabel>
    </PieChart>
  );
}
