import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const AreaChart = ({chartData}: any) => {

  const [bulkData, setBulkData] = useState<Array<number>>([])
  const [category, setCategory] = useState<Array<string>>([])

  let state = {
    options: {
      chart: {
        id: 'escrow'
      },
      xaxis: {
        categories: category
      }
    },
    series: [{
      name: 'BulkCount',
      data: bulkData
    }]  
  };

  const filter = (chartData: any) => {
    let bulkDataTemp: Array<number> = [];
    let categoryTemp: Array<string> = [];
    chartData.map((item: any) => {
      bulkDataTemp.push(item.bulkCount)
      categoryTemp.push(item.timestamp)
    })
    setBulkData(bulkDataTemp)
    setCategory(categoryTemp)
  }
  
  useEffect(() => {
    filter(chartData)
  }, [])
  

  return (
    <Chart options={state.options} series={state.series} type="line" width={1000} height={640} />
  );
};

export default AreaChart;
