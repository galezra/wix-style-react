import React from 'react';
import PropTypes from 'prop-types';

import { st, classes, vars } from './CarouselWIP.st.css';
import { ChevronLeftSmall, ChevronRightSmall } from 'wix-ui-icons-common';
import Control from './Control';
import Slide from './Slide';
import { CONTROLS_START_END, SLIDING_TYPE, ALIGNMENT } from './constants';
import { isWhollyInView, animate, nop, normalizeIndex } from './utils';

/** The carousel component creates a slideshow for cycling through a series of content. */
class CarouselWIP extends React.PureComponent {
  static displayName = 'CarouselWIP';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** Text for the button */
    buttonText: PropTypes.string,

    /** Any element to render inside */
    children: PropTypes.node,

    /** Array of objects where each contains the `src` of an image (in \<img src="your_src" /\>) */
    images: PropTypes.array,

    /** Sets the skin of the arrow buttons */
    controlsSkin: PropTypes.oneOf(['standard', 'inverted', 'light']),

    /** Show a shadow for the carousel controls */
    showControlsShadow: PropTypes.bool,

    /** Images loop endlessly */
    infinite: PropTypes.bool,

    /** An index of the slide to start on */
    initialSlideIndex: PropTypes.number,

    /** Index change callback. `index => ...` */
    afterChange: PropTypes.func,

    /** Index change callback. `(oldIndex, newIndex) => ...` */
    beforeChange: PropTypes.func,

    /** Sets the arrows position */
    controlsPosition: PropTypes.oneOf(['sides', 'overlay', 'bottom', 'none']),

    /** Sets the arrows position */
    controlsSize: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Configure the start and end controls to be shown disabled or hidden. Relevant when infinite prop is set to false. */
    controlsStartEnd: PropTypes.oneOf(['disabled', 'hidden']),

    /** Sliding behaviour type for the carousel */
    slidingType: PropTypes.oneOf([
      'align-to-start',
      'reveal-one',
      'reveal-chunk',
    ]),

    /** Number of pixels for showing "peeking" cards on the edges of the carousel */
    startEndOffset: PropTypes.number,

    /** Number of pixels dividing between slides */
    gutter: PropTypes.number,

    /** Color for the gradients on the sides of the carousel */
    sidesGradientColor: PropTypes.string,

    // TODO: implement prop
    /** 🚧 Sets the images position */
    imagesPosition: PropTypes.string,

    // TODO: implement prop
    /** 🚧 Sets the images fit */
    imagesFit: PropTypes.oneOf([
      'fill',
      'contain',
      'cover',
      'none',
      'scale-down',
    ]),

    // TODO: implement prop
    /** 🚧 Auto-playing of images */
    autoplay: PropTypes.bool,

    // TODO: implement prop
    /** 🚧 Hide dots */
    hideDots: PropTypes.bool,

    // TODO: implement prop
    /** 🚧 Variable width of children */
    variableWidth: PropTypes.bool,
  };

  static defaultProps = {
    infinite: true,
    controlsSkin: 'standard',
    controlsStartEnd: 'disabled',
    showControlsShadow: false,
    images: [],
    initialSlideIndex: 0,
    controlsPosition: 'sides',
    controlsSize: 'medium',
    slidingType: 'align-to-start',
    startEndOffset: 0,
    gutter: 0,
  };

  constructor(props) {
    super(props);
    this.loadingImagesCount = 0;
    this.visibleSlides = [];
    this.state = {
      activeIndex: this.props.initialSlideIndex,
      isAnimating: false,
      isLeftArrowDisabled: true,
      isRightArrowDisabled: true,
    };
  }

  componentDidMount() {
    const { initialSlideIndex, images } = this.props;
    this.childCount =
      this.carousel && this.carousel.children
        ? this.carousel.children.length
        : images.length;
    this._setImagesOnLoadHandlers();
    if (!this.loadingImagesCount) {
      this._slideTo({ index: initialSlideIndex, immediate: true }).catch(nop);
      this._setVisibleSlides();
    }
  }

  // Need to wait for images to load so we know which images are visible
  // Adding onLoad and onError callbacks to all images under the component
  _setImagesOnLoadHandlers = () => {
    [...this.carousel.children].forEach(child => {
      const childImages = [...child.getElementsByTagName('img')];
      childImages.forEach(img => {
        this.loadingImagesCount++;
        img.onload = this._onImageLoad;
        img.onerror = this._onImageLoad;
      });
    });
  };

  _onImageLoad = () => {
    this.loadingImagesCount--;
    if (!this.loadingImagesCount) {
      this._slideTo({
        index: this.props.initialSlideIndex,
        immediate: true,
      }).catch(nop);
    }
  };

  _setVisibleSlides = () => {
    const { props, carousel, childCount } = this;
    const { infinite } = props;
    const firstVisibleChild = Math.max(
      [...carousel.children].findIndex(child =>
        isWhollyInView(carousel)(child),
      ),
      0,
    );
    const lastVisibleChild = Math.max(
      [...carousel.children].findIndex(
        (child, i, children) =>
          isWhollyInView(carousel)(child) &&
          (i === children.length - 1 ||
            !isWhollyInView(carousel)(children[i + 1])),
      ),
      0,
    );
    this.visibleSlides = [firstVisibleChild, lastVisibleChild];
    this.setState({
      isLeftArrowDisabled: !infinite && this.visibleSlides[0] === 0,
      isRightArrowDisabled:
        !infinite && this.visibleSlides[1] === childCount - 1,
    });
  };

  _slideTo = (
    { index, alignTo, immediate } = {
      index: 0,
      alignTo: ALIGNMENT.LEFT,
      immediate: false,
    },
  ) => {
    if (this.childCount === 0) {
      return Promise.reject('No children to slide to');
    }
    if (!this.carousel) {
      return Promise.reject('The Carousel is not mounted');
    }
    const {
      afterChange,
      beforeChange,
      easing,
      animationDuration: duration,
      infinite,
      startEndOffset,
    } = this.props;
    const { children, scrollLeft, offsetWidth } = this.carousel;
    const slideIndex = normalizeIndex(index, this.childCount, infinite);
    const startingIndex = this.state.activeIndex;
    let delta;
    if (alignTo === ALIGNMENT.RIGHT) {
      delta =
        children[slideIndex].offsetWidth -
        (offsetWidth - children[slideIndex].offsetLeft) -
        scrollLeft +
        startEndOffset;
    } else {
      delta = children[slideIndex].offsetLeft - scrollLeft - startEndOffset;
    }
    if (startingIndex !== slideIndex && beforeChange) {
      beforeChange(startingIndex, index);
    }
    this.setState({ isAnimating: true, activeIndex: slideIndex });
    return new Promise((res, _) => {
      if (immediate) {
        this.carousel.scrollLeft = children[slideIndex].offsetLeft;
        return res();
      } else {
        const originalOverflowX = 'hidden';
        const prop = 'scrollLeft';
        return res(
          animate(this.carousel, {
            prop,
            delta,
            easing,
            duration,
            originalOverflowX,
          }),
        );
      }
    })
      .then(() => {
        this.setState({ isAnimating: false });
        this._setVisibleSlides();
        if (startingIndex !== slideIndex && afterChange) {
          return afterChange(slideIndex);
        }
      })
      .catch(_ => {
        this._setVisibleSlides();
        this.setState({ isAnimating: false });
      });
  };

  _next = () => {
    const { slidingType, infinite } = this.props;
    const [firstVisibleChild, lastVisibleChild] = this.visibleSlides;
    let nextSlide, alignTo;
    if (
      [SLIDING_TYPE.REVEAL_CHUNK, SLIDING_TYPE.REVEAL_ONE].includes(slidingType)
    ) {
      if (lastVisibleChild === this.childCount - 1) {
        nextSlide = infinite ? 0 : lastVisibleChild;
      } else {
        nextSlide = lastVisibleChild + 1;
      }
      alignTo =
        slidingType === SLIDING_TYPE.REVEAL_CHUNK
          ? ALIGNMENT.LEFT
          : ALIGNMENT.RIGHT;
    } else {
      if (firstVisibleChild === this.childCount - 1) {
        nextSlide = infinite ? 0 : firstVisibleChild;
      } else {
        nextSlide = firstVisibleChild + 1;
      }
      alignTo = ALIGNMENT.LEFT;
    }
    return this._slideTo({ index: nextSlide, alignTo });
  };

  _prev = () => {
    const { slidingType, infinite } = this.props;
    const [firstVisibleChild, _] = this.visibleSlides;
    let prevSlide, alignTo;
    if (
      [SLIDING_TYPE.REVEAL_CHUNK, SLIDING_TYPE.REVEAL_ONE].includes(slidingType)
    ) {
      if (firstVisibleChild === 0) {
        prevSlide = infinite ? this.childCount - 1 : firstVisibleChild;
      } else {
        prevSlide = firstVisibleChild - 1;
      }
      alignTo =
        slidingType === SLIDING_TYPE.REVEAL_CHUNK
          ? ALIGNMENT.RIGHT
          : ALIGNMENT.LEFT;
    } else {
      if (firstVisibleChild === 0) {
        prevSlide = infinite ? this.childCount - 1 : 0;
      } else {
        prevSlide = firstVisibleChild - 1;
      }
      alignTo = ALIGNMENT.LEFT;
    }
    return this._slideTo({ index: prevSlide, alignTo });
  };

  _setRef = r => {
    this.carousel = r;
  };

  _renderLeftControl = () => {
    const { isLeftArrowDisabled } = this.state;
    const {
      controlsPosition,
      controlsStartEnd,
      controlsSize,
      controlsSkin,
    } = this.props;

    return (
      controlsPosition !== 'none' &&
      (!isLeftArrowDisabled ||
        controlsStartEnd === CONTROLS_START_END.DISABLED) && (
        <Control
          onClick={this._prev}
          icon={<ChevronLeftSmall />}
          size={controlsSize}
          skin={controlsSkin}
          disabled={isLeftArrowDisabled}
          className={`${classes.control} ${classes.prev}`}
        />
      )
    );
  };

  _renderRightControl = () => {
    const { isRightArrowDisabled } = this.state;
    const {
      controlsPosition,
      controlsStartEnd,
      controlsSize,
      controlsSkin,
    } = this.props;

    return (
      controlsPosition !== 'none' &&
      (!isRightArrowDisabled ||
        controlsStartEnd === CONTROLS_START_END.DISABLED) && (
        <Control
          onClick={this._next}
          icon={<ChevronRightSmall />}
          size={controlsSize}
          skin={controlsSkin}
          disabled={isRightArrowDisabled}
          className={`${classes.control} ${classes.next}`}
        />
      )
    );
  };

  _renderSlides = () => {
    const { images, children, gutter } = this.props;
    const slide = ({ i, image, child }) => (
      <Slide
        key={`slide-${i}`}
        role="listitem"
        width="auto"
        gutter={i > 0 ? `${gutter}px` : ''}
        image={image}
        children={child}
      />
    );

    return (
      <div className={classes.carousel} role="list" ref={this._setRef}>
        {children
          ? React.Children.map(children, (child, i) => slide({ i, child }))
          : images.map((image, i) => slide({ i, image }))}
      </div>
    );
  };

  _renderLeftGradient = () =>
    this.visibleSlides.includes(0) || <div className={classes.start} />;

  _renderRightGradient = () =>
    this.visibleSlides.includes(this.childCount - 1) || (
      <div className={classes.end} />
    );

  render() {
    const {
      dataHook,
      className,
      controlsPosition,
      controlsSize,
      showControlsShadow,
      sidesGradientColor,
    } = this.props;
    const showSidesGradients = !!sidesGradientColor;

    return (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            controlsPosition,
            controlsSize,
            showControlsShadow,
            showSidesGradients,
          },
          className,
        )}
        style={{ [vars.sidesGradientColor]: sidesGradientColor }}
      >
        {showSidesGradients && this._renderLeftGradient()}
        {this._renderLeftControl()}
        {this._renderSlides()}
        {this._renderRightControl()}
        {showSidesGradients && this._renderRightGradient()}
      </div>
    );
  }
}

export default CarouselWIP;
