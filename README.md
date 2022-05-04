# Demo Library Service

## Intro

We've prepared a simple Koa app which acts like an API making a call to a downstream data service. The app is akin to something used by a library to track details on books, borrowings, and fines.
The downstream service call is mocked with the `downstream-fixtures/all-books.json` file to mimic the use of an API/database.

There are unit tests for the majority of functionality and integration tests for the `/books` route already implemented. These are written using Jest.

Useful links
  - [Koa Docs](https://koajs.com/)
  - [Jest Docs](https://jestjs.io/docs/getting-started)

## Tasks

Initially, we would like you to ensure the service fulfills the following requirements:

  1) List all available books ✅
  2) Filter books by their title
  3) Filter books by their author
  4) Filter books by their classification
  5) Filter books by their category
  6) Handle mapping books with a `null` blurb


Additional requirements have arisen for an endpoint that generates some metrics for a specific book (found via by ISBN):

  1) The number of times borrowed
  2) The average length of borrowing
  3) The number of times the book has become overdue
