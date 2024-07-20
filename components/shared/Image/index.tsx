import NextImage from "next/image";
import React from "react";

export function Image(props) {
  if ((!props.width || !props.height) && !props.fill) {
    console.warn("An image with url", props.src, "is missing width or height");
    return (
      <NextImage
        {...props}
        height={1000}
        overrideSrc={props.src}
        style={{ height: "auto", maxWidth: "100%", ...props.style }}
        width={1000}
      />
    );
  }

  return <NextImage {...props} overrideSrc={props.src} />;
}
