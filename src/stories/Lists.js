import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs';

import { Events } from './../mocks/Events';
import { HeroSlides } from './../mocks/HeroSlides';

import View from '../View';
import Carousel from '../Carousel';
import CarouselHero from '../CarouselHero';

storiesOf('Carousel', module)
  .addDecorator(withKnobs)
  .add(
    'Hero',
    (() => (
      <CarouselHero
        height={number('Height', 444)}
        slides={HeroSlides}
        imgWidth={1920}
      />
    )),
  )
  .add(
    'EventList',
    (() => {
      const dimensions = object(
        'Dimensions',
        {
          xs: { w: 310, h: 210 },
          sm: { w: 310, h: 210 },
          md: { w: 385, h: 260 },
          lg: { w: 385, h: 260 },
        },
      );
      return (
        <View container style={{ position: 'relative' }}>
          <Carousel
            isLoading={boolean('Loading', false)}
            numCards={9}
            dimensions={dimensions}
            duration={600}
          >
            <EventListCardSelector
              dimensions={dimensions}
            />
          </Carousel>
        </View>
      );
    }),
  );

class EventListCardSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleSelect(eventId) {
    this.setState(() => ({
      selected: eventId,
    }));
  }

  handleFavorite(e) {
    e.stopPropagation();
    alert('Favorite me in API');
  }

  render() {
    return (
      <React.Fragment>
        {Events.map(event => (
          <EventListCardWrapper key={event.id}>
            <EventListCard
              onClick={() => this.handleSelect(event.id)}
              url={event.cover}
              dimensions={this.props.dimensions}
            >
              <Overlay />
            </EventListCard>
            <EventInfo>
              <EventListTitle dimensions={this.props.dimensions}>
                {event.name}
              </EventListTitle>
              <EventListVenueTitle dimensions={this.props.dimensions}>
                {event.venue}
              </EventListVenueTitle>
            </EventInfo>
          </EventListCardWrapper>
        ))}
      </React.Fragment>
    );
  }
}


const EventInfo = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 10,
});

const EventListTitle = styled.span(
  {
    color: '#36424a',
    fontSize: 18,
    lineHeight: 2,
    fontWeight: 900,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    '@media(max-width: 1200px)': {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`,
    },
    '@media(max-width: 992px)': {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`,
    },
    '@media(max-width: 767px)': {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`,
    },
  }),
);

const EventListVenueTitle = styled.span(
  {
    color: '#6e7a83',
    fontSize: 16,
    lineHeight: 1.2,
    marginBottom: 4,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    '@media(max-width: 1200px)': {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`,
    },
    '@media(max-width: 992px)': {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`,
    },
    '@media(max-width: 767px)': {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`,
    },
  }),
);

const EventListCardWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  margin: 3,
  borderRadius: 5,
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  ':hover': {
    cursor: 'pointer',
  },
});

const EventListCard = styled.div(
  {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    borderRadius: 5,
    border: 0,
    transform: 'translateY(0px)',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    ':hover': {
      opacity: 0.8,
    },
  },
  props => ({
    height: props.dimensions.lg.h * 0.6,
    minWidth: props.dimensions.lg.w,
    maxWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
    '@media(max-width: 1200px)': {
      height: props.dimensions.md.h * 0.6,
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w,
    },
    '@media(max-width: 992px)': {
      height: props.dimensions.sm.h * 0.6,
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w,
    },
    '@media(max-width: 767px)': {
      height: props.dimensions.xs.h * 0.6,
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w,
    },
  }),
);

class EventCardSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventId) {
    this.setState(() => ({
      selected: eventId,
    }));
  }

  render() {
    return (
      <React.Fragment>
        {Events.slice(0, 1).map(event => (
          <EventCard
            onClick={() => this.handleSelect(event.id)}
            url={event.cover}
            dimensions={this.props.dimensions}
            selected={this.state.selected === event.id}
            key={event.id}
          >
            <Overlay />
            <EventTitle>
              <Title>
                {event.name}
              </Title>
            </EventTitle>
          </EventCard>
        ))}
      </React.Fragment>
    );
  }
}

const EventCard = styled.div(
  {
    margin: 3,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    borderRadius: 5,
    transform: 'translateY(-1px)',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    ':active': {
      transform: 'translateY(1px)',
    },
    ':hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  props => ({
    height: props.dimensions.lg.h,
    minWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
    border: props.selected ? '5px solid #F83E59' : 0,
    '@media(max-width: 1200px)': {
      height: props.dimensions.md.h,
      minWidth: props.dimensions.md.w,
    },
    '@media(max-width: 992px)': {
      height: props.dimensions.sm.h,
      minWidth: props.dimensions.sm.w,
    },
    '@media(max-width: 767px)': {
      height: props.dimensions.xs.h,
      minWidth: props.dimensions.xs.w,
    },
  }),
);

const Overlay = styled.div({
  position: 'absolute',
  transition: 'all 0.3s ease',
  height: '100%',
  width: '100%',
  zIndex: 1,
  backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)',
});

const EventTitle = styled.div({
  position: 'absolute',
  bottom: 20,
  left: 80,
  zIndex: 70,
  display: 'flex',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

const Title = styled.span({
  fontSize: 18,
  padding: '6px 10px',
  fontWeight: 700,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: 'calc(350px - 100px)',
  '@media(max-width: 767px)': {
    maxWidth: 'calc(260px - 100px)',
  },
});
