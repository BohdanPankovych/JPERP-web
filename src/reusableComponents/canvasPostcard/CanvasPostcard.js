import React from "react";
import CanvasEventItem from "./canvasItems/CanvasEventItem";
import { Stage, Layer, Rect, Text } from "react-konva";

const CanvasPostcard = ({
  backgroundColor,
  selectedEvents,
  width,
  height,
  description,
  title,
  date,
  selectCreator,
  schoolName,
                          scale,
  fullheigh,
    fullwidth,
  reference,
}) => {

  const dateFormater = (date) => {
    const YYMMDD = date.split(',');
    return YYMMDD[0]+"年"+Number(YYMMDD[1])+"月"+Number(YYMMDD[2])+"日";
  }

  return (
    <Stage width={fullwidth} height={fullheigh} scaleX={scale} scaleY={scale} ref={reference}>
      <Layer >
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
          width={width - 80}
          height={50}
          fill="#F57F34"
          cornerRadius={10}
        />

        <Text
          x={50}
          y={45}
          text={title}
          fontSize={24}
          fill="white"
          fontStyle="bold"
        />
        <Text x={width - 150} y={10} text={dateFormater(date)} fontSize={15} />
        <Text x={width - 80} y={60} text={selectCreator} fontSize={12} />
        <Text x={50} y={15} text={schoolName} fontSize={16} />

        {selectedEvents.length === 1 ?
          <CanvasEventItem
            x={190}
            y={200}
            img={selectedEvents[0]?.docRec.image}
            text={selectedEvents[0]?.docRec.comment}
            maxSize={220}
          />
        : selectedEvents.length === 2 ?
        <>
          <CanvasEventItem
            x={70}
            y={220}
            img={selectedEvents[0]?.docRec.image}
            text={selectedEvents[0]?.docRec.comment}
          />
          <CanvasEventItem
            x={290}
            y={220}
            img={selectedEvents[1]?.docRec.image}
            text={selectedEvents[1]?.docRec.comment}
          />
        </>
        : <>
          <CanvasEventItem
            x={70}
            y={90}
            img={selectedEvents[0]?.docRec.image}
            text={selectedEvents[0]?.docRec.comment}
          />
          <CanvasEventItem
            x={290}
            y={90}
            img={selectedEvents[1]?.docRec.image}
            text={selectedEvents[1]?.docRec.comment}
          />
          <CanvasEventItem
            x={70}
            y={360}
            img={selectedEvents[2]?.docRec.image}
            text={selectedEvents[2]?.docRec.comment}
          />
          <CanvasEventItem
            x={290}
            y={360}
            img={selectedEvents[3]?.docRec.image}
            text={selectedEvents[3]?.docRec.comment}
          />
        </>
        }

        <Rect
          x={35}
          y={height - 125}
          width={width - 70}
          height={110}
          fill="white"
          stroke="#F57F34"
          strokeWidth={3}
          cornerRadius={10}
        />
        <Text
          x={45}
          width={width - 85}
          y={height - 120}
          text={description}
          fontSize={12}
        />
      </Layer>
    </Stage>
  );
};

export default CanvasPostcard;
