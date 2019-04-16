# Hilton Review

[Deployed Netlify Hilton App](https://hilton-hotels.netlify.com/login)

## This applicaton does work in Chrome, but the form only works in Firefox as that's what I spent the time coding in it with and there are differences with localStorage.
Asthetically it looks horrid in Chrome also, head's up! Ha.

Typically, I've supported Chrome with customers, so normally I'd develop there. Or with more time ensure cross OS handling / polyfills etc.

![](example.gif)

# The Challenges:

*The first assessment*, given plenty of time to tweak with CSS and make pixel perfect, I wanted to assure the review that I match this mock. I've matched hundreds of mocks at my last company for entire RealEstate SaaS platforms designed by a prior Google/Apple Designer and love doing so! I went for building more to represent myself and have some fun with it, I hope that uniqueness isn't under appreciated or misunderstood, I definitely can and will do whatever needs to be done. Though this goes against my typical development practices daily which is very thorough, I wanted to show inititive!

*The second assessment*, I would love to refactor this, there are some cleaner ways to do this. Plus, functional components simply broken out and using hooks would be supreme. I did use localStorage and it does persist a full page reload for the various selections of the form.

*Both assessments*, Daily I adhere to TDD and typically write tests with components & larger more robust unit tests for containers(views), and I don't just test if it renders, but test the logic to be what the user expects. https://testingjavascript.com/ is the resource for this, as well as a udemy course I completed awhile back when I started overhauling & writing tons of test for legacy code. I really like writing tests, it takes time to produce quality, and in this assignment, I didn't have near the amount of time I wanted to put forth due to wife, kid, full time work with OT. And at some point I had to just throw the towel in and say 4hrs is all I have to give for now.

*I'm very approachable and love feedback! I'll take whatever code review I can get, and even though it's not really going to make a difference for the reviewer or company, I love to learn and iterative from that on anything I work on.*

## Tech Stack

**React via CRA** StandardJS coding style, I've worked under several different style opinions.

**@reach/router** More accessible vs RRv4 & still written by pal Ryan F who I've done training with.

**Redux** Could use React Context, replace with hooks or MobX if team is into observables, with more time.

**Jest/Enzyme** Though not TDD in this go, typically TDD for each component/container I build in real time. Perhaps Cypress or Selenium with SQA ids for automation if there is a QA team for the fun of it! I love QA, I did it for 6+ years.

**prop-types/flow** This could have been TypeScript depending on expectations, or flow pushed more consistently.

 **lodash** This could have been made internal vs package usage.

**Styled Components**

**classnames**


## What I was able to do

I scaffolded a React App from scratch using tools specific to this position.
Hilton Hotel App has some pretty cool features:

1. A login view & user logout to mock auth
2. Share Feedback allows a user to fill out feedback on various Hilton hotels prior booked
3. Hotel Reviews allows a user to review the average reviews of a Hilton hotel
3. Hotel Reviews allows a user to review the average reviews of a Hilton hotel
4. Hotel Details although not the same view as the mock, allows a user to select a Hilton hotel and see specific details: The name, the address, & the phone number
5. Form although not refactored or done correctly logic wise, works to meet the requirements. It was the last thing I did.
6. Components shows a view of various components used that I created for this code challenge
7. Scaffolded Enzyme **UNIT Tests**, but didn't get to work on them. Started shallow with Address but time ran out, and I wanted to do README documentation.

# If I had more time!

1. I'd clearly refactor DynamicForm to not be a hacky/dirty fast solution
2. JEST/ENZYME UNIT TESTS, boy did I want to spend the duration of this 3-4 hrs writing unit tests in Jest for each component, but I wanted to focus on the large picture capability.TDD & Unit Tests are a must. I'd definitely use Jest/Enzyme, or Cypress depending on the use case. Maybe even sqa ids with selenium to automate the UI node testing via CLI.
3. Make everything actually responsive and mobile first. I didn't spend time on CSS Media Queries as much as I wanted.
4. Comments are key. I would have spent more time providing comments as I was coding, to make the code further readable, clean, and easy to pickup by any other devs.
5. Clean code. I would refactor, make class components that have basic state functional and add some Hooks!
6. Perhaps I may have spent less time having fun and more time actually doing the requirements > . <
