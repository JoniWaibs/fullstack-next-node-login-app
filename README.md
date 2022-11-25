#### This is a Full Stack fake Login App

You can navigate, log an user and keep a cookie-sesion in the browser until you want to log out. Ths app is build with backend and frontend as a separated implementations, both running in a Docker containers. If you want navigate this, you can follow the step by step to run app.

##### This app contains:
:bulb: SSR architecture
:bulb: Protected routes
:bulb: Cookie sessions
:bulb: Backend logging
:bulb: Backend Unit testing
:bulb: Code format with Eslint & Prettier

##### Powered By
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Screenshots

URL: `/public` user not logged
<div style="display:inline-flex;gap:5px">
  <img src="/frontend/assets/public_not_logged.png" alt="Public url with user not logged">
</div>

URL: `/signin`
<div style="display:inline-flex;gap:5px">
  <img src="/frontend/assets/signin.png" alt="Signin url">
</div>

URL: `/signin` error
<div style="display:inline-flex;gap:5px">
  <img src="/frontend/assets/signin_error.png" alt="Signin url with error">
</div>

URL: `/home` user logged
<div style="display:inline-flex;gap:5px">
  <img src="/frontend/assets/home.png" alt="Home url">
</div>

## How to use

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

> For run application, you must have ***Docker*** installed to be able to launch a local container.
> - [Install Docker on Mac](https://docs.docker.com/desktop/install/mac-install/) 
> - [Install Docker on Windows](https://docs.docker.com/desktop/install/windows-install/) 

## Note

You can't sign up new users, (it was not requested in the challenge) but you can play a lot with the mockedUsers credentials in the `backend/src/mocks/users.json`

For example: You can test the app by logging with this credentials
```JSON
{
  email: Sincere@april.biz,
  password: password,
}
```

## Run app

1 - First, build image and run the development server:

```bash
docker-compose up --build
```

2 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3 - Enjoy it :rocket:

**Note**
If you dont have Docker installed, you can launch app simply running 
**`yarn dev`** for frontend & **`yarn start-dev`** for backend
If you prefer use npm, you can do it :wink:

## Nice To Have

Due to lack of time I have not been able to add features that I liked :disappointed: , for example:

:point_right: More tests features,
:point_right: More accessibility features,
:point_right: More preformance features,
:point_right: Responsive designe,
:point_right: Add `keep me signed in` checkbox.
:point_right: Use a DDBB as mongo or mysql.


## License

© 2022 Jota Waibsnaider

