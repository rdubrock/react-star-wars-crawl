import React from 'react'
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
  starWars: {
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



const Crawl = ({
  children,
  containerStyles,
  title,
  subTitle,
  text
}) => (
  <div style={styles.container}>
    <div style={styles.fade}></div>
    <section style={styles.starWars}>
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

export default Crawl
