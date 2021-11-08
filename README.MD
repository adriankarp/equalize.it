# equalize.it (MERN stack E-commerce App)

>Progressive Web App implemented using MERN stack (MongoDB, Express.js, React, Node.js)

<div align="center">
 <img src="https://iili.io/5ENOFV.md.png" alt="homepage component" />
</div>

## This application was developed as a proof-of-concept for my Bachelor's Thesis

The main goal of my bachelor's thesis was to research and implement a progressive web application, to showcase its features.

My choice of application was an E-commerce App, with focus on selling audio equipment.

### Technologies

The backend part is implemented using Node.js and Express.js. As helper services I used cloudinary for images upload and manipulation, and Stripe for payment processing.

The frontend part is implemented using React and Redux. For the service worker, which enables progressive features, I used the one that comes out-of-box from create-react-app, without further modifications.

### Install Dependencies (Backend)

```
npm i
```

### Install Dependencies (Frontend)

```
cd frontend
npm i
```

### Seed Database

Use the following command to put some dummy data in database.
Run it in root folder

```
npm run seeder
```
