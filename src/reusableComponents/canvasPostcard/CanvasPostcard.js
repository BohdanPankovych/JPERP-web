import React from "react";

const CanvasPostcard = ({ backgroundColor, width, height, ...props }) => {
  const canvasRef = React.useRef(null);

  const PIXEL_RATIO = (function () {
    const ctx = document.createElement("canvas").getContext("2d"),
      dpr = window.devicePixelRatio || 1,
      bsr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;

    return dpr / bsr;
  })();

  const fillBack = (ctx) => {
    ctx.fillStyle = backgroundColor; //background
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const drawHeader = (ctx) => {
    console.log(ctx.canvas.width - 30, ctx.canvas.height);
    ctx.fillStyle = "#ed7b09";
    ctx.fillRect(30, 30, ctx.canvas.width - 60, 50);
    // ctx.fillStyle = "black";
    ctx.strokeRect(30, 30, ctx.canvas.width - 60, 50);
  };

  const draw = (ctx) => {
    fillBack(ctx);
    drawHeader(ctx);
  };

  React.useEffect(() => {
    console.log(canvasRef);
    const context = canvasRef.current.getContext("2d");

    draw(context);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={width * PIXEL_RATIO}
      height={height * PIXEL_RATIO}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    />
  );
};

export default CanvasPostcard;
