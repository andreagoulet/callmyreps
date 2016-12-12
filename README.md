# callmyreps

It has to be easier to call my elected officials. This app will send phone scripts via text or notifications about causes people care about. 

This project is in the super duper early stages, so I'm using this to document my thought process with the hopes that other people can help me bring it to life and improve upon it. 

I was really motivated by the SOPA and PIPA campaigns that came out a couple years ago. I took action. I called my representatives because it was super easy. Now, we need to mobilize more than ever. My research shows that phone calls are by far the most effective form of advocacy. What gets in the way is that people don't know what to say. I found this [spreadsheet](https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=embed_facebook&sle=true#) that brillantly lays out scripts based on whether someone supports or doesn't support a given issue. 

My thought is that we could use the [Sunlight Foundation API](https://sunlightfoundation.com/api/) that powered the SOPA and PIPA campaigns to help create customized scripts for people. 

The app would send customized scripts based on data pulled from the API. Here are some specific use cases I envision: 

* Citizen follows an issue, such as gun violence prevention. They would recieve notifications, one at a time, with a customized script based on whether their representative's voting record on such an issue. If the representative is pro they would recieve one script, if they are agaisnt, they'd recieve a different script, if there isn't enough information to determine a stance, there would be a different script. The goal is to arm the citizen with as much information as possible so all they have to do is press a button to call. 

* Citizen would be notified with a special script if there is going to be an upcoming vote about a cause they care about. 

##Useful Info for Reference
* [User Personas](https://github.com/andreagoulet/callmyreps/issues/6)
* [Wireframe Sketches](https://github.com/andreagoulet/callmyreps/issues/8)

##How to Contribute

#####I want to share my opinion 

1. Join our [Slack channel](https://callmyreps.herokuapp.com/) to get to know the people who are working on this project. Don't be shy. We're easy to get along with. :)

2. Introduce yourself. Tell us your name, what brought you to the project and what skills you have (you don't need to know how to code to help make this project awesome.) 

3. Make friends and join in the conversation. Ask questions. Share ideas. See something that inspires you? Put it in Slack for all of us to see. 

#####I want to work on the app, but I don't know how to code (yet) 

1. Create or sign into your GitHub account

2. Click on the issues button at the top of the page. 

3. Filter issues based on labels. There's work for visual designers, UX/UI, copywriters, and people who are domain experts but don't write code. You do not have to know how to code to contribute. Post a comment and submit work. 

#####I want to work on the app, and I know how to code

1. Create or sign into your GitHub account

2. [Fork the repository](https://help.github.com/articles/fork-a-repo/) and make the changes you want. 

3. When your code is ready for review, submit a [Pull Request](https://help.github.com/articles/about-pull-requests/) so the core team can review your changes. It's normal to have a healthy discussion in the comments before something gets merged in, that's how we work together to make our code the best it can be!  

##Domain Model

* Citizen (first name, last name, address)[1]
* Script [1]
* Party (Republican, Democrat, Independent, N/A)[2]
* Voting Record (pro, against, neutral)[2]
* Issue (Healthcare, Immigration, Reproductive Rights, etc.)[1] 
* Representative [2]
  * National Representative (Senator, House)
  * State Representative (Governor, State Senate, State House)
  * Local Representative (School Board, Special Districts, Board of Supervisor, Town/City Council, Mayor, etc.) 
* District (geographic region within which people vote for a certain office) [2]
* Time to Call (morning, noon, afternoon, evening)[1]
* Calling Frequency (# of times per week)[1]

[1] - written in app, refererenced from [calling sheet](https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=embed_facebook&sle=true#)   
[2] - From [Sunlight Foundation](https://sunlightfoundation.com/api/) or other API

##Product Roadmap

**1. MVP**

* Built using [React Native](https://facebook.github.io/react-native/)
* Goal is cross-platform functionality and speed to market
* Replicate spreadsheet content in an app in three sections
  * Find Reps
  * Calling Scripts
  * Tips & Strategies
* Static content only (No login info or API)

**2. Build a Back End**  
Any content that has changed in the spreadsheet will need to be updated in the app. Any such content will be moved to a back-end and the app will be updated to pull that content from the back-end. 

**3. Create UI for Updating Content Via BackEnd**  
This will allow the originator of the spreadsheet to easily modify scripts using the application. 

**4. Implement Sunlight API**  
When a user clicks Find Reps from the Landing Scene, they will be able to add their address and get a list of their representatives. 

**5. Implement Reminders/Notifications**  
Allows users to schedule reminders from inside the app that will allow them to access a call script and person to call in under two clicks. 
