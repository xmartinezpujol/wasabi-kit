import React from 'react';

import {
  Background,
  CardContainer,
  Image,
} from './styles';

function Card(props) {
  return (
    <CardContainer
      dimensions={props.dimensions}
      height={props.height}
      clickable={props.clickable}
      color={props.color}
      style={props.styleCont}
      onClick={props.onSelection}
    >
      {props.cover &&
        <Image
          url={props.cover}
          zoom={props.zoom}
          imgHeight={props.imgHeight}
          style={props.style}
        />
      }
      {!props.cover &&
        <Background color={props.color} style={props.style} />
      }
      {props.children}
    </CardContainer>
  );
}

export default Card;
