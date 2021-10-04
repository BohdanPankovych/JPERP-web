import useImage from 'use-image';
import { Text, Image } from 'react-konva';

const ResizeImg = (width, height)=>{
    const initialSizeWidth = 150;
    const initialSizeHeight = 140;
  
    let adaptedWidth, coefficienWidth, prevHeight, prevWidth, adaptedHeight, coefficienHeight; 
  
    if(height > width){
      adaptedWidth = initialSizeWidth;
      coefficienWidth = width / initialSizeWidth;
      prevHeight = height / coefficienWidth;
  
      adaptedHeight  = initialSizeHeight;
      coefficienHeight = prevHeight / initialSizeHeight;
      adaptedWidth = initialSizeWidth / coefficienHeight;
    }else{
      adaptedHeight = initialSizeHeight;
      coefficienHeight = height/initialSizeHeight;
      prevWidth = width/coefficienHeight;
  
      adaptedWidth = initialSizeWidth;
      coefficienWidth = prevWidth / initialSizeWidth;
      adaptedHeight = initialSizeHeight / coefficienWidth;
    }
  
    return {adaptedWidth, adaptedHeight};
  }

const CanvasEventItem = ({img, x, y, text, ...props})=>{
  const [image] = useImage(img);
  const {adaptedWidth, adaptedHeight} = ResizeImg(image?.naturalWidth, image?.naturalHeight);

  return <>
  <Image image={image} width={adaptedWidth} height={adaptedHeight} x={x} y={y} stroke="white" strokeWidth={10} cornerRadius={10} {...props}/>
  <Text x={x} y={y+adaptedHeight+5} width={adaptedWidth+55} text={text} fontSize={8.5} />
  </>
}

export default CanvasEventItem;