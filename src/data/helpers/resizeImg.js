export const ResizeImg = (width, height, maxWidth, maxHeight)=>{
    // const maxWidth = 150;
    // const maxHeight = 140;
  
    let adaptedWidth, coefficienWidth, prevHeight, prevWidth, adaptedHeight, coefficienHeight; 
  
    if(height > width){
      adaptedWidth = maxWidth;
      coefficienWidth = width / maxWidth;
      prevHeight = height / coefficienWidth;
  
      adaptedHeight  = maxHeight;
      coefficienHeight = prevHeight / maxHeight;
      adaptedWidth = maxWidth / coefficienHeight;
    }else{
      adaptedHeight = maxHeight;
      coefficienHeight = height/maxHeight;
      prevWidth = width/coefficienHeight;
  
      adaptedWidth = maxWidth;
      coefficienWidth = prevWidth / maxWidth;
      adaptedHeight = maxHeight / coefficienWidth;
    }
  
    return {adaptedWidth, adaptedHeight};
  }