<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Landing Page Starter
</h1>

A (slightly) opinionated Gatsby boilerplate to get started fast. Stack includes:

- [Bootstrap](https://getbootstrap.com/)
- [Reactstrap](https://reactstrap.github.io/)
- [Reactstrap-form-fields](https://github.com/jeremylynch/reactstrap-form-fields)
- [Reactstrap-json-nav](https://github.com/jeremylynch/reactstrap-json-nav)
- [React Icons](https://github.com/react-icons/react-icons)
- [Google Tag Manager](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager)
- [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify)
- [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/)
- [gatsby-plugin-facebook-pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)
- [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
- [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)

[View Demo](https://gatsby-strapi-starter.netlify.com/)

## 🚀 Quick start

```bash
gatsby new gatsby-strapi-website https://github.com/jeremylynch/gatsby-strapi-starter
```

# Testing Notes

This code currently cleanly passes the following checks

- `npm outdated`
- `npm audit`
- `npm run lint`
- `npm run reformat`
- No warnings in JavaScript console, nor logged to terminal

## Outstanding Tests

- JS console occasionally logs
 `http://localhost:8000/page-data/test/page-data.json   404 (not found)`
-- This likely comes from
 `node_modules/gatsby/cache-dir/loader.js`or`.../cache-dir/commons/loader.js`
- Chrome warning:
 `[Deprecation] SharedArrayBuffer will require cross-origin isolation as of M91`
-- Outside the scope of Gatsby; likely requires a React library upgrade
- Form submit button requires an implementation in the Contact page
