import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValue);
  console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
