# Tasks Steps

<!-- Mid -->

- Bug fix
- Implement GET /books?title=meditations&author=seneca&classification=non-fiction&category=philosophy endpoint (get list of books by properties listed)

---

<!-- Senior -->

- Implement GET /book/{isbn}/metrics endpoint (generate metrics for specific book by isbn)
  - times borrowed
  - times overdue
  - average time borrowed
  - average fine

---

# Tasks for Ben

- Implement GET /books endpoint (list all books)
- Write integration tests for all endpoints
- Create bug (not error) on another branch
  - "The API has failed the CI/CD pipeline as the branch protection failed when a PR was opened. This indicates that there is a bug somewhere tripping the pipeline. We would like you to identify and potentially solve the bug."
  - Hit downstream -> get the list back -> filter list checking data shape on each
- Remove this readme.md
- Separate into branches for smooth delivery
