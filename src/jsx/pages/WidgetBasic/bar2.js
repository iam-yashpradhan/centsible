import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart2 extends Component {
   render() {
      const data = {
         labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
               borderColor: this.props.color ? this.props.color : "#2f4cdd",
               borderWidth: "0",
               backgroundColor: this.props.color ? this.props.color : "#2f4cdd",
               barThickness: 4,
            },
         ],
      };

      const options = {
        plugins :{
         legend: false,
        },
         responsive: true,
         maintainAspectRatio: false,
         scales: {
            y: 
               {
                  display: false,
                  max: 100,
                  min: 0,
                  ticks: {
                     beginAtZero: true,
                     display: false,
                     stepSize: 10,
                  },
                  grid: {
                     display: false,
                     drawBorder: false,
                  },
               },
            
            x: 
               {
                  display: false,
                  barPercentage: 0.1,
                  grid: {
                     display: false,
                     drawBorder: false,
                  },
                  ticks: {
                     display: false,
                  },
               },
             },
      };

      return (
         <>
            <Bar data={data} height={100} options={options} />
         </>
      );
   }
}

export default BarChart2;
