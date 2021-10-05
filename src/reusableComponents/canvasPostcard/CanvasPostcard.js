import React from "react";
import CanvasEventItem from './canvasItems/CanvasEventItem';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const CanvasPostcard = ({ backgroundColor, selectedEvents, events, width, height, description, title, date, selectCreator, schoolName, reference}) => {

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
        <Text x={width-130}  y={60} text={selectCreator} fontSize={12} />
        <Text x={50}  y={15} text={schoolName} fontSize={16}/>

        <Circle x={150} y={230} radius={60} fill="white" />
        <Circle x={150} y={530} radius={60} fill="white" />
        <Circle x={350} y={200} radius={60} fill="white" />

        {/*{events.map(e => (*/}
        {/*    <CanvasEventItem img={e.img} text={e.description}/>*/}
        {/*))}*/}

        <CanvasEventItem x={70} y={90} img={selectedEvents[0].img} text={selectedEvents[0].description} />
        <CanvasEventItem x={70} y={360} img={selectedEvents[1].img} text={selectedEvents[1].description} />
        <CanvasEventItem x={290} y={90} img={selectedEvents[2].img} text={selectedEvents[2].description} />
        <CanvasEventItem x={290} y={360} img={selectedEvents[3].img} text={selectedEvents[3].description} />

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
