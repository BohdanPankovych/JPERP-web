import React from "react";
import useImage from 'use-image';
import { Text, Image } from 'react-konva';
import {ResizeImg} from '../../../data/helpers/resizeImg'

const CanvasEventItem = ({img, x, y, text, ...props})=>{
  const [image] = useImage(img);
  const {adaptedWidth, adaptedHeight} = ResizeImg(image?.naturalWidth, image?.naturalHeight, 190, 190);

  return <>
  <Image image={image} width={adaptedWidth} height={adaptedHeight} x={x} y={y} stroke="white" strokeWidth={10} cornerRadius={10} {...props}/>
  <Text x={x} y={y+adaptedHeight+12} width={190} text={text} fontSize={9.5} />
  </>
}

export default CanvasEventItem;
