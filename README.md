# ngjstn.com 

This is just a basic website that I made for future projects down the road. It's very much a work in progress, but you can still check it out at [ngjstn.com](http://ngjstn.com) 

The website is made with React frontend and Node express backend, hosted with Heroku cloud service. The frontend was heavily referenced using Takuya Matsuyama's work, which you can find [here](https://github.com/craftzdog/craftzdog-homepage). 

---

### Setup
> Just a few notes to myself when setting up the development environment 

Make sure to have Node.js installed, which can be installed [here](https://nodejs.org/en/download/). To check if you already have it installed, use the commands: 
``` 
node -v 
npm -v
```

Once that's sorted, navigate to the the repository's root directory and install all of the node dependencies: 
```
npm install
```
This should have created a folder called `node_modules` with the dependencies listed in `package.json` 

To run the application locally, go to the root level and enter the following command: 
```
npm run dev 
```
The website should now be accessible at [http://localhost:3000](http://localhost:3000) 

While the process is running, any changes that are made should be updated in real-time whenever the file is saved. 

--- 

### Deploy on Heroku 

You can just navigate to the project dashboard's `Deploy` tab on Heroku and point it to the Github repository's main branch and press the `Deploy Branch` button. 

If you want to be fancy and use [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), you need to add the remote to the local repository: 
```
heroku login
heroku git:remote -a example-app

git remote -v   # to check that the remote was setup 
```

Next, add the repo files, stage the commit, and push: 
```
git add .
git commit -m "heroku deploy message" 
git push heroku main 
```


Once it's finished successfully deploying, it should at least be accessible at [https://ngjstn-website.herokuapp.com/](https://ngjstn-website.herokuapp.com/), and if configured, the custom domain that was defined [ngjstn.com](http://ngjstn.com)