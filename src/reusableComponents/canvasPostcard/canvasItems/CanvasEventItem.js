import useImage from 'use-image';
import { Text, Image } from 'react-konva';
import {ResizeImg} from '../../../data/helpers/resizeImg'

const CanvasEventItem = ({img, x, y, text, ...props})=>{
  const [image] = useImage(img);
  const {adaptedWidth, adaptedHeight} = ResizeImg(image?.naturalWidth, image?.naturalHeight, 150, 140);

  return <>
  <Image image={image} width={adaptedWidth} height={adaptedHeight} x={x} y={y} stroke="white" strokeWidth={10} cornerRadius={10} {...props}/>
  <Text x={x} y={y+adaptedHeight+5} width={adaptedWidth+55} text={text} fontSize={8.5} />
  </>
}

export default CanvasEventItem;