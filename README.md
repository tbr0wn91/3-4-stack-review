student can write a functioning react application
student can write a functioning Express API
Student can request data from Express API
student can display data from Express API

# No-DB Review


## frontend checklist

- reset.css
- package.json
    - main: server => so we can type nodemon without giving file

### proxy
    - setupProxy.js
        - :3008

### dependencies

- axios
- http-proxy-middleware


### front-end folder structure


- src/
    - App.js => class
    - index.js
    - components/
        - leaderBoard.js
        - Player.js
        - RatioDisplayer.js
        - PlayerForm.js



# backend checklist


### server folder-structure

- server/
    - index.js
    - controller/
        - playerController.js
        - gameController.js (if time)


### dependencies
- express
- axios

### routes


**playerController.js**

get: '/api/cheetah'
post: '/api/woodpecker'
put: '/api/beaver/:id'
delete: 'api/vulture/:id'


### data

```js
const player = {
id,
name,
campus,
role,
wins,
losses
}```