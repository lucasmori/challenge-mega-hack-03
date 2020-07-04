import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, VerticalBarSeries } from 'react-vis';
import './styles.css';

const graphicPanel: React.FC = () => {
  const data = [
    { x: 0, y: 6 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 3 },
    { x: 4, y: 2 },
    { x: 5, y: 1 },
    { x: 6, y: 1 },
  ];
  return (
    <div className="panel">
      {/* <XYPlot className="graphic" >
        <VerticalBarSeries className="bars" data={data} barWidth={0.3} />
      </XYPlot> */}
    </div>
  );
};

export default graphicPanel;
