import { useTheme } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import type { CustomChartCprops } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function CustomChart(props: CustomChartCprops) {
  const { data, labels, type } = props
  const theme = useTheme()

  const options = {
    responsive: true,
    scaleShowVerticalLines: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typography.subtitle,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: true,
          color: theme.typography.subtitle, // Aqui você define a cor da linha da grade
        },
        ticks: {
          color: theme.typography.subtitle,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgb(12, 112, 242)',
        backgroundColor: 'rgba(12, 112, 242, 1)',
      },
    ],
  }

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}
