import React from "react";
import CanvasEventItem from './canvasItems/CanvasEventItem';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const CanvasPostcard = ({ backgroundColor, width, height, description, title, date, firstEvent, secondEvent, thirdEvent, fourthEvent, reference}) => {

  return (
    <Stage width={width} height={height} ref={reference}>
      <Layer>
        <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={backgroundColor}
        />
        <Rect
          x={40}
          y={30}
          width={width-80}
          height={50}
          fill="#F57F34"
          cornerRadius={10}
        />

        <Text x={50}  y={45} text={title} fontSize={24} fill="white" fontStyle="bold"/>
        <Text x={width-150}  y={15} text={date} fontSize={15} />

        <Circle x={150} y={230} radius={60} fill="white" />
        <Circle x={150} y={530} radius={60} fill="white" />
        <Circle x={350} y={200} radius={60} fill="white" />

        <CanvasEventItem x={70} y={90} img={firstEvent.img} text={firstEvent.text} /> 
        <CanvasEventItem x={70} y={360} img={secondEvent.img} text={secondEvent.text} /> 
        <CanvasEventItem x={290} y={90} img={thirdEvent.img} text={thirdEvent.text} /> 
        <CanvasEventItem x={290} y={360} img={fourthEvent.img} text={fourthEvent.text} /> 

        <Rect
          x={35}
          y={height-125}
          width={width-70}
          height={110}
          fill="white"
          stroke="#F57F34"
          strokeWidth={3}
          cornerRadius={10}
        />
        <Text x={45} width={width-85} y={height-120} text={description} fontSize={12} />
      </Layer>
    </Stage>
  );
};

export default CanvasPostcard;
