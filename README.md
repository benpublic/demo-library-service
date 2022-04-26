# Demo Library Service

This service consumes a downstream data source to provide some computed data to consumers.

The requirements for the service are to:
  
  1) list all available books
  2) filter books by their title
  3) filter books by their author
  4) filter books by their classification
  5) filter books by their category
  6) filter books by their category

Additional requirements are to generate some metrics for each book to show:

  * the number of times borrowed
  * the average length of borrowing
  * the number of times the book has become overdue
