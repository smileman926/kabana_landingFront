import React from "react";

const IFrame = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
};

export default IFrame;
