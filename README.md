# It's BIGFOOT!!!
We've all heard about him.. or it. Well whatever it is or if it's real I've got the place for you! Welcome to the Bigfoor Forum. This forum is dedicated to the sightings of Bigfoot nationwide. 

In this Forum you have the ability to log sighitngs of Bigfoot; as well as update and delete sightings if it turned out to be your husband in the fridge late night looking for a sandwich!

I hope you enjoy your time in the Forum and be brave about your hunt for Bigfoot!

# Planning
I'm not sure where my inspiration came from, but all I know is the people needed a space to talk about Bigfoot. I will walk you through my planning process for this application. 
- 1. I had to define the schema in which users would be inputting through.Once the schema was generated i then embedded it in the User Schema which allows authentication for each user. 
- 2. Draft the forms that users would use to log Sightings
    - Ensure that the format of the form aligns with the generated sightings schema
    - Specifying the correct input types to intepret the provided data correctly.

- 3. Genearte all route handlers for each CRUD operation
    - Reference correct ejs template for each route
    - Incorporate International Time Zone functions to increase functionality for all users

- 4. Style the application with css langauge
    - Incorporate Flexbox styling to make Data Input fields more presentable

# Technologies Used 
- **Express**: Express is the back-end framework used to simplify the development of applications.
- **EJS**: EJS is a language used to incorporate Javascript into basic HTML coding.
- **Javascript**: JS is what adds functionality to the application. All asynchronus CRUD operations were developed using Javascript and variables defined in JS were referenced in each EJS template to make the application more dynamic. 
- **Method Override**: A framework used to manipulate http forms that naturally only handle GET and POST requests, and allow them to handle PUT, PATCH, and DELETE requests.
- **CSS**: A language used to style HTML templates, this makes the application more appealing and easier to navigate through for new users. CSS generally makes the user experience better by developing themes and making interactions smoother.
- **HTML**: The bare bones of the operation. The standard way for making web pages, and the content that goes on them like a form or a background.

# Next Steps
Some of the future enhancements that I would like to incorporate are listed below:
-  Develop a community sightings page, this would be a part of the application where users can view sightings recorded by others.
- Develop a rating and commenting system that will allow user to give their input on a sighting recorded by other  users. 




# Previews
![Landing Page Screenshot](./images/p2%20screenshot%201.png)
![User Index Screenshot](./images/p2%20screenshot%202.png)
![Sighting Show Page](./images/p2%20screenshot%203.png)
![Sighting Edit Page](./images/p2%20screenshot%204.png)