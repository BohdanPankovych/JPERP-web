import React from "react";
import useImage from 'use-image';
import { Text, Image, Circle } from 'react-konva';
import {ResizeImg} from '../../../data/helpers/resizeImg'

const CanvasEventItem = ({img, x, y, text, maxSize = 190, ...props})=>{
  const [image] = useImage(img);
  const {adaptedWidth, adaptedHeight} = ResizeImg(image?.naturalWidth, image?.naturalHeight, maxSize, maxSize);

  return <>
  {image ? <><Circle x={x+adaptedWidth*0.5} y={y+adaptedHeight * 0.9} radius={70} fill="white" />
  <Image image={image} width={adaptedWidth} height={adaptedHeight} x={x} y={y} stroke="white" strokeWidth={10} cornerRadius={10} {...props}/>
  <Text x={x} y={y+adaptedHeight+12} width={210} text={text} fontSize={9.5} /></>: null}
  </>
}

export default CanvasEventItem;
