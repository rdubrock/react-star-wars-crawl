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
  render() {
    const {
      children,
      containerStyles,
      title,
      subTitle,
      text
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.fade}></div>
        <section style={styles.textContainer}>
          <div style={styles.crawl}>
            <div style={styles.title}>
              <p>{title}</p>
              <h1 style={styles.subTitle}>{subTitle}</h1>
            </div>
            <p>{text}</p>
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
  /*
   * Texts
   */
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string
};

export default Crawl
