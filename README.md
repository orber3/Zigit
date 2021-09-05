<!--  thank you ! i realy enjoyed the assignment and happy iv'e learned a new tool -react table. -->

<!--

the project is built with Redux for global-state mangement .
the project style is  built with material ui and inline css.

project layout:

app.js contain router for the page

./pages

main.js checks if the user is already logged in , if its logged in it directs him to the information page,
if he isnt login it opens the login compenent.

/components /LoginComponent.js

a wrapper to the login form .

/compnents / LoginForm.js

the login form built with material ui and react-form-hook
i have used regExp to make the validation you have asked  on the forms
 email pattern and password pattern including , 1 upper case letter, 1 small case letter , a number and atleast 8 characters.

/Actions
constans.js
getInfoAction.js - action to recieve information from the api ( using axios)
LoginAction.js - action to log in to the api.



/pages/InfoPage.js

the page call for information after recieving the User information from the store.
the page call for table compenent (re-useable) that renders two tables ( user information and projects information)
the conditions for rendering the conditinals styles are in the props passed to the tableComponent


/components/Table/Tablecomponent.js
almost all of the table logic and style lays in this component.
the table knows to filter , sotrt and add background color for score lower then 70 and higher then 90{91+}

on the Projects table the component know to call for the TableInfoComponent in order to manipulate the data required for the sum and average  and render it to the screen

if i had more time i would extract more logic from this component and make it more re-useable.



//TableInfoComponent.js
manipulate data related to SUM of score and count the false projects and returns it as a renderd div.


//Reducers/ getInfoReducer for the projects informatin
            LoginReducer for the userInformation.



i wanted to add some tests but i didnt had the time to do it.
if i were to build the tests i would have used:
1. jest
2.Enzyme
i would  have checked that the components renders correctly and that the state transfer between the pages is working.






 -->
