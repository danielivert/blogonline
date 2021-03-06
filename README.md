This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## What is this?

Blogonline is a Single Page Application built on ReactJS.
The application loads default data the first time it loads on a browser and stores it in local memory.

You can do the following:

* [x] Create an account
* [x] Login
* [x] Create Posts
* [x] Delete Posts
* [x] Create Comments in Posts
* [x] Count views on Posts

Login with:<br>
daniel.trevino@blogonline.com / 12345<br>
test@blogonline.com / 12345

## I want to see it working

You can see the application running [here](https://blogonline.tredan.se)

You can also clone this project and in the project directory run:

### `npm install`

Followed by:

### `npm start`

## Plugins used for styling

[Bootstrap 4 (Grid)](https://getbootstrap.com/docs/4.0/layout/grid/)<br>
[Modular Scale Sass](https://github.com/modularscale/modularscale-sass)<br>
[Sass-mq](https://github.com/sass-mq/sass-mq)<br>
[Typi](https://github.com/zellwk/typi)<br>
[Material-UI](http://www.material-ui.com/#/components/app-bar)

## Plugins used in the application

[React Router v4](https://github.com/ReactTraining/react-router)<br>
[Redux Persist v5](https://github.com/rt2zz/redux-persist)

## Plugins used for development

[ESLint Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)<br>
[Editor Config](https://github.com/editorconfig/editorconfig-vim)<br>
[Flow](https://flow.org/en/docs/react/)<br>
[Prettier](https://github.com/prettier/prettier)<br>
[Husky](https://github.com/typicode/husky)<br>

## Deployment config file

[Captainduckduck](https://github.com/githubsaturn/captainduckduck)

## Folder structure

The folder structure is based on [Atomic Design Methodology](http://bradfrost.com/blog/post/atomic-web-design/) mixed with [React Redux](https://github.com/reactjs/react-redux)

```
src/
  actions/
  components/
    atoms/
    molecules/
    organisms/
    pages/
  reducers/
  store/
  Routes/
  styles/
    scss/
      00_base/
      01_atoms/
      02_molecules/
      03_organisms/
      04_pages/
```

## About

This project is for showcase purposes.
