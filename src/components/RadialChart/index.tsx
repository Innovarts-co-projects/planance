import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'styled-components';

function RadialChart() {

  const theme = useTheme();

  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

  const chart = {
    series: [66, 22, 11],
    options: {

      labels: ['Income', 'Expenses', 'Investments'],
      colors: [theme.color.green, theme.color.red, theme.color.purple],

      chart: {
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 0.5,
          opacity: 0.08,
        },
      },

      track: {
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 0.5,
          opacity: 0.08,
        },
      },

      stroke: {
        show: true,
        lineCap: 'round' as 'round' | 'butt' | 'square',
      },

      fill: {
        colors: [theme.color.green, theme.color.red, theme.color.purple],
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
              fontFamily: 'Inter',
              fontSize: '1.6rem',
              fontWeight: 600,
              offsetY: -5,
            },
            value: {
              show: true,
              fontSize: '1.3rem',
              fontFamily: 'Inter',
              fontWeight: 500,
              color: theme.color.text,
              offsetY: 5,
            },
            total: {
              show: true,
              label: 'Balance',
              color: theme.color.text,
              fontFamily: 'Inter',
              fontSize: '1.6rem',
              fontWeight: 600,
              formatter() {
                return 'R$ 3000,00';
              },
            },
          },
        },
      },
    },
  };

  return (
    <Chart
      options={chart.options}
      series={chart.series}
      type="radialBar"
      width={350}
    />
  );
}

export default memo(RadialChart);
