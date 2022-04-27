# Demo Library Service

This service consumes a downstream data source to provide some computed data to consumers. The downstream service call is mocked with the `downstream-fixtures/all-books.json` file to mimic using an API/database as a downstream data source.

The requirements for the service are to:
  
  1) list all available books
  2) filter books by their title
  3) filter books by their author
  4) filter books by their classification
  5) filter books by their category
  6) handle mapping books with a `null` blurb


Additional requirements have arisen for an endpoint that generates some metrics for a specific book (by ISBN):

  * the number of times borrowed
  * the average length of borrowing
  * the number of times the book has become overdue

Useful links
  - [Koa Docs](https://koajs.com/)
  - [Jest Docs](https://jestjs.io/docs/getting-started)
