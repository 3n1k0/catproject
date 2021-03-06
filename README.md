# Catcyclopedia 😻

## Description

Catcyclopedia is a responsive single page website build to showcase Vue and Typescript skills. It is based on the [Cat API](https://thecatapi.com/) and is based of Vue components.

## Views

### Home

This component is responsible for filtering and categorizing the results retrieved from the API call.
It contains CatCards that lead to their own detail pages.

### DetailPage

Detailed information on each API record initially rendered on the home page.
It contains two times three related items - [CatCards](https://github.com/3n1k0/catproject#catcard) - based on certain criteria (intelligence, affection level).

The qualities featured on the detail page are:

- Energy level
- Intelligence
- Affection level
- Child friendly
- Experimental
- Dog friendly
- Suitable for indoors
- Dog friendly
- Adaptibility
- Shedding level
- Social needs
- Dog friendly
- Stranger friendly

<em>Some of the data from the records are not featured because of unclarity (eg.: health issues from 1 to 5, grooming from 0 to 1 etc.)</em>

### Random

Features a randomly chosen record and renders a button that optionally directs to the detail page.

## Components

### CatCard

Boostrap cards containing an image, a title, three major personality traits and a router link pointing to the detail page of each cat.

### Footer

The footer contains a generated sitemap of the cats initially rendered to the Home.vue component.

### GetCatImage

An API call that takes an id (breedId) as prop to retrieve images.

### TopHeader

Responsive fixed navbar that matches aesthetically and functionally to the contents of the website.



## Project setup

Set an environment variable called VUE_APP_API_KEY and assign your own API key for the Cat API. 

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
