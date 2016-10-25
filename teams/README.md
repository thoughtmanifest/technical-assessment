# Welcome to Teams #

Teams is an app for managing teams by David Sison

## How to run Teams ##

* Start by downloading the Pull Request
* Run `npm install` to ensure you have all of the required dependencies
* Run `npm run serve`
* Open browser to the `http://localhost:3000` or wherever BrowserSync tells you to.
* Enjoy managing your teams.

## Code Decisions ##

This is my first time really working in Angularjs. In general I like the abstraction
and it seems as though there is plenty of depth to the library. I'm sure I've made
some newbie mistakes, but all in all I think the code is fairly readable and
understandable. The main decision I wrestled with is whether to make Users its
own component. I think that as it stands, it makes sense to keep Users as a part
of Teams because there is no other dependency on User and there is very little
to the User object. If the requirements changed, requiring the use of User
in another location or the User object added additional fields or even if the
User object were meant to be edited, I think I'd probably break it out into its
own component.
