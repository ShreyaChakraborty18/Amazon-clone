# Amazon Clone
This project mimics the e-commerce website Amazon.commerce
Bundled with login and sign up functionality, frontend of the 
project includes tons of items listed in the home page that 
can be added to cart. When navigated to the basket those items
 will be displayed which can be removed from the basket as well.
There is a proceed to checkout button on the basket page which 
will redirect you to the checkout page.
In the checkout page, stripe payment is used to process a 
card payment and after entering the card details you will have three 
buttons "Buy Now", "Click to Confirm", "Proceed to Confirmation Page".


## Dependencies

Dependencies used in the project are as follows

[![Node.js](https://img.shields.io/badge/Dependency-Node.js-red)](https://nodejs.org/en/)

![React.js](https://img.shields.io/badge/Library-React.js-blue)

[![AGPL License](https://img.shields.io/badge/Backend-Firebase-lightgrey)](http://www.firebase.com)

[![AGPL License](https://img.shields.io/badge/dependency-Javascript-orange)](http://www.javascript.com)

[![AGPL License](https://img.shields.io/badge/UI-Material--UI-yellowgreen)](http://www.mui.com)


## Demo

https://clone-9d8d4.web.app/


### Home Page -

![image](https://user-images.githubusercontent.com/87025870/210316763-3fee6ad4-11f8-4320-a905-866fa48a8d99.png)


### Login/Signup Page -

![image](https://user-images.githubusercontent.com/87025870/210316979-97604350-0398-4840-9f42-4e88a2fbfc26.png)


### Cart Page -

![image](https://user-images.githubusercontent.com/87025870/210317489-5245c292-dc3f-4e3a-bc17-3ebf29a54a08.png)


### Check Out Page -

![image](https://user-images.githubusercontent.com/87025870/210317729-9be7a417-beab-4b0e-a2a7-7908d2803eaa.png)

![image](https://user-images.githubusercontent.com/87025870/210319210-263d6f0d-6bcb-47ec-85b4-f3449cb44884.png)



### Confirmation Page -

![image](https://user-images.githubusercontent.com/87025870/210317874-3051739f-1ab2-4f84-927a-e90592b690fb.png)


## Deployment

To deploy this project run

```bash
  npm run build
  ```

Upload the build file to a hosting app.
This App is hosted using Firebase.






  
### --------------------------------------------FOR DEVELOPER----------------------------------------
#### Firebase login should be via a cmd, the login might not work in powershell

#### After npm run build, any change in the application will have to updated using the npm run build command
#### firebase login -->
firebase init--> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys          
--> use existing project        
--> public directory(build)       
--> npm run build(be in directory)       
--> firebase deploy         
#### repeat npm run build and firebase deploy everytime a new change is added to the project

#### to run emulators (firebase)
firebase emulators:start

git config --global user.email ""            
git config --global user.name ""          
git init         
git add -A         
git commit -m "Here is amazon clone "       
git remote add origin Link-to-app      
git push -u -f origin master




