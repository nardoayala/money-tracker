import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import 'Styles/components/PieChart.scss';

am4core.useTheme(am4themes_animated);

class PieChart extends Component {
  generateExpensesData() {
    const { month, data } = this.props;
    const expenses = [];
    const monthData = data.filter((item) => item.month === month);
    if (monthData.length !== 0) {
      monthData[0].expenses.forEach((expense) => {
        let sum = 0;
        expense.entries.forEach((entry) => {
          sum += entry.amount;
        });
        expenses.push({ category: expense.category, value: sum.toFixed(2) });
      });
    }
    return expenses;
  }

  generateChart() {
    const container = am4core.create('chartdiv', am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = 'horizontal';

    // Create chart instance
    const chart = container.createChild(am4charts.PieChart);

    // Add data
    let data = this.generateExpensesData();
    let colorsArray = [
      am4core.color('rgba(255, 99, 132, 1)'),
      am4core.color('rgba(54, 162, 235, 1)'),
      am4core.color('rgba(255, 206, 86, 1)'),
      am4core.color('rgba(75, 192, 192, 1)'),
      am4core.color('rgba(153, 102, 255, 1)'),
      am4core.color('rgba(255, 159, 64, 1)'),
    ];
    if (data.length === 0) {
      data = [{ category: 'No data', value: '100' }];
      colorsArray = [am4core.color('rgba(194,197,204,1)')];
    }

    chart.data = data;

    // chart.radius = am4core.percent(80);
    chart.numberFormatter.numberFormat = '#.';

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = '{category} : {value.percent}%';

    // Labels
    pieSeries.labels.template.disabled = true;

    // Legends
    chart.legend = new am4charts.Legend();
    chart.legend.maxHeight = 150;
    chart.legend.scrollable = true;

    pieSeries.colors.list = colorsArray;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  render() {
    this.generateChart();
    return <div id="chartdiv" className="pie-chart" />;
  }
}

PieChart.propTypes = {
  month: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PieChart;
