# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Assignment 2.1
--------------------------------------------------------------------------------
Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.

 resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js']
    .....
    ...
    }
You can choose any simple HTML layout and convert it to React Components
Annwer: Created AppResume as main component and header, footer, about, contact, resume and portfolio as sub components.

--------------------------------------------------------------------------------
React Assignment 2.2
Assignment 2 : Create a Parent Component called Border which can provide some CSS border to any component nested into it.
[Hint : You will need to use children props here

 <Border> 
     <Component> 
 <Border />

Answer:
Created Border component and used in Profile pic section of About Component

--------------------------------------------------------------------------------