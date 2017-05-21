import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#000',
    overflow: 'hidden',
  },
  fade: {
    position: 'relative',
    width: '100%',
    minHeight: '60vh',
    top: '-25px',
    backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
    zIndex: 1,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '800px',
    color: '#feda4a',
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize: '500%',
    fontWeight: '600',
    letterSpacing: '6px',
    lineHeight: '150%',
    perspective: '400px',
    textAlign: 'justify',
  },
  crawl: {
    position: 'relative',
    top: '9999px',
    transformOrigin: '50% 100%',
    animation: 'crawl 60s linear',
  },
  title: {
    fontSize: '90%',
    textAlign: 'center',
  },
  subTitle: {
    margin: '0 0 100px',
    textTransform: 'uppercase',
  }
}



class Crawl extends Component {
  mergeStyles(defaultStyle, userStyle) {
    if(!userStyle) {
      return defaultStyle
    } 

    return Object.assign(defaultStyles, userStyle)
  }

  render() {
    const {
      children,
      containerStyles,
      fadeStyles,
      textContainerStyles,
      crawlStyles,
      titleStyles,
      subTitleStyles,
      textStyles,
      title,
      subTitle,
      text
    } = this.props

    return (
      <div style={mergeStyles(styles.container, containerStyles)}>
        <div style={mergeStyles(styles.fade, fadeStyles)}></div>
        <section style={mergeStyles(styles.textContainer, textContainerStyles)}>
          <div style={mergeStyle(styles.crawl, crawlStyles)}>
            <div style={mergeStyles(styles.title, titleStyles)}>
              <p>{title}</p>
              <h1 style={mergeStyles(styles.subTitle, subTitleStyles)}>{subTitle}</h1>
            </div>
            <p style={textStyles}>{text}</p>
            {children}
          </div>
        </section>
      </div>
    )
  }
} 

Crawl.PropTypes = {
  /**
   * Any nodes in addition to provided text
   */
  children: PropTypes.node,
  /**
   * Override the inline-styles of the various elements.
   */
  containerStyles: PropTypes.object,
  containerStyles: PropTypes.object,
  textContainerStyles: PropTypes.object,
  crawlStyles: PropTypes.object,
  titleStyles: PropTypes.object,
  subTitleStyles: PropTypes.object,
  textStyles: PropTypes.object,
  /*
   * Texts
   */
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string
};

export default Crawl
