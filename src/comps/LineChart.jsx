/* eslint-disable react/prop-types */
import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data }) => (
  <ResponsiveLine
    data={data}
    
    width={480}
    height={260}
    margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: 0,
      max: "auto",
      stacked: false,
      reverse: false,
      tickValues: [0, 50, 100, 150, 200, 250, 300], // Specify the tick values
    }}
    yFormat=" >-.2f"
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Week Days",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Losses",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: -50,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 50,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
           
          },
        ],
      },
    ]}
  />
);

export default LineChart;
