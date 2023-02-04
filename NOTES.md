# opinionated changes

- follow TW rules where possible - `row-start-N` not `grid-row-start-N`
- eliminate multiple ways of writing rules - e.g. only allow `inline-flex` not `flex-inline` in addition
- more rule definitions is better than fewer 'cute' rule definitions that invole more code - see grid rules

# rip and tear

- no arbitrary row/col specifications, between start/end/span we have enough coverage
- we don't need grid-areas support until proven wrong (grid-areas seems nasty to write in a bracket anyhow?)
