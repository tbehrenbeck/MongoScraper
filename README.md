# NPR News Scraper

This app allows users to view NPR News articles, save their favorites onto another page, and comment on their favorites. Each article displayed includes a headline which is also a link to the source article and a description that includes the date of publish. There is a 'remove' button next to each article on the saved articles page, but currently it does not work. The app uses Node/Express for the server and routing, MongoDB/Mongoose for the database and models, Handlebars for the layout and views, & Cheerio/Request for scraping the data from www.npr.org

### Dependencies

You will need to npm install the following node modules:

1. express
2. express-handlebars
3. mongoose
4. body-parser
5. cheerio
6. request

Since I have included a package.json file, you do not need to install dependencies by name. Simply run the following in the root of your directory:

```
npm install
```
