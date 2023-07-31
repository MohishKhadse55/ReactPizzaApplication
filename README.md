# Project Planning

### Features + Pages
1. User
2. Menu
3. Cart
4. Order

### Necessary pages
1. Homepage --   / 
2. Pizza menu -- /menu
3. art -- /cart
4. Placing a new order -- /order/new
5. Looking up and order -- /order/:orderID

### State Management and Technology decisions 
State slices
1. User  -- Global UI state
2. Menu  -- Global remote state (menu is fetched from API)
3. Cart  -- Global UI state (no need for API, just stored in app)
4. Order -- Global remote state (fetched and submitted to API)

### Feature Based structure 
1. user feature
2. Menu feature
3. cart feature
4. Order feature
5. UI - resusable ui components like button 
6. Services -- interaction with an api
7. utils -- helper function (date and number manipulation )