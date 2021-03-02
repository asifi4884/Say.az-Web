import React, { useState } from "react";
import {
  DashboardDataContent,
  DashboardDataHeader,
  DashboardDataQuarter,
  DashboardDataLine,
  DashboardDataInner,
  DashboardDataInnerHeader,
  DashboardChartSide,
  DashboardDataInnerBottom,
  DashboardStatistic,
  DashboardStatisticBody,
  DashboardStatisticItem,
} from "./DashboardStyles";

import { Line, Bar } from "react-chartjs-2";
import { rgba } from "polished";
import { GainsDown } from "../../icons";

export default function Charts() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [index, setIndex] = useState(null);
  const lineState = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: false,
        fill: true,
        lineTension: 0,
        backgroundColor: rgba("#84BDC7", 0.3),
        borderColor: "transparent",
        borderWidth: 0,
        hoverBorderWidth: 15,
        // pointRadius: 4,
        pointBorderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        pointBorderColor: rgba("#0B7D91", 0.2),
        pointBackgroundColor: "#0B7D91",
        data: [850, 750, 200, 950, 500, 300, 1000, 400, 500, 900, 950, 800],
      },
    ],
  };

  const barState = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: false,
        fill: true,
        lineTension: 0,
        backgroundColor: "#DD7E32",
        borderColor: "transparent",
        borderWidth: 0,
        pointBorderWidth: 0,
        pointBackgroundColor: "#0B7D91",
        data: [850, 750, 200, 950, 500, 300, 1000, 400, 500, 900, 950, 800],
      },
    ],
  };

  return (
    <DashboardDataContent>
      <DashboardDataHeader>
        <DashboardDataQuarter>2020</DashboardDataQuarter>
        <DashboardDataLine />
      </DashboardDataHeader>
      <DashboardDataInner>
        <DashboardDataInnerHeader>
          <DashboardChartSide>
            <Line
              width={345}
              height={210}
              data={lineState}
              options={{
                onClick: function (e, element) {
                  if (element.length > 0) {
                    var ind = element[0]._index;
                    setIndex(ind);

                    this.data.datasets[0].pointBorderWidth[ind] = 15;
                    this.update();
                  }
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                      },

                      ticks: {
                        maxTicksLimit: 4,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
                tooltips: {
                  enabled: false,
                },
              }}
            />
            {index !== null && (
              <DashboardDataInnerBottom>
                <DashboardStatistic>
                  <DashboardStatisticBody>
                    <DashboardStatisticItem>
                      <span>
                        <GainsDown /> <strong>2020 {month[index]}</strong>
                      </span>
                      <span>Cəmi: 1,200 AZN</span>
                    </DashboardStatisticItem>
                    <DashboardStatisticItem>
                      <span>Yanvar</span>
                      <span>800 AZN</span>
                    </DashboardStatisticItem>
                    <DashboardStatisticItem>
                      <span>Fevral</span>
                      <span>800 AZN</span>
                    </DashboardStatisticItem>
                    <DashboardStatisticItem>
                      <span>Mart</span>
                      <span>800 AZN</span>
                    </DashboardStatisticItem>
                    <DashboardStatisticItem>
                      <span>Aprel</span>
                      <span>800 AZN</span>
                    </DashboardStatisticItem>
                  </DashboardStatisticBody>
                </DashboardStatistic>
              </DashboardDataInnerBottom>
            )}
          </DashboardChartSide>
          <DashboardChartSide>
            <Bar
              width={345}
              height={210}
              data={barState}
              options={{
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                      },
                      ticks: {
                        maxTicksLimit: 4,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
                tooltips: {
                  enabled: false,
                },
              }}
            />
          </DashboardChartSide>
        </DashboardDataInnerHeader>
      </DashboardDataInner>
    </DashboardDataContent>
  );
}
