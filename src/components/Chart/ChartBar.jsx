import './ChartBar.css';

export default function ChartBar(props) {
  let contentHeigth = "%";

  if (props.maxValue > 0) {
    contentHeigth = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: contentHeigth }}></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  );
}
