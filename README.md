# react-star-wars-crawl

### A fully composable React component that reproduces the Star Wars opening crawl.

Credit for the default styling and animation belongs to Geoff Graham, outlined in his excellent article [here](https://css-tricks.com/snippets/css/star-wars-crawl-text/)

### Installation

    npm install react-star-wars-crawl

### Usage

Simply import the Crawl component. You can use the `title`, `subTitle`, and `text` props to achieve the default Star Wars intro.

    import React from 'react'
    import Crawl from 'react-star-wars-crawl'

    // Import the necessary styles, or include them another way with your build process
    import 'react-star-wars-crawl/lib/index.css'

    const MyCrawlComponent = () => (
        <Crawl
          title="Episode IV"
          subTitle="A New Hope"
          text="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
        />
    )

You can also pass anything you like as a child.

    <Crawl>
      <div>Anything at all</div>
    </Crawl>

### Available props

All default styles can be overriden. A full list of props:

- containerStyles 
- textContainerStyles
- crawlStyles 
- titleStyles 
- subTitleStyles
- textStyles
- title
- subTitle
- text

