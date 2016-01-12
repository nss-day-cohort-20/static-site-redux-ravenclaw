# Static Web Group Project

As a team, build the web site for a fictitious product company. The team gets to decide what the name of the company is, and what types of products it manufactures. Be creative and have fun.

## Setup

Every teammate copy and run the following commands in the host machine terminal.

```bash
mkdir -p ~/workspace/group-projects && cd $_
```

## Requirements

### Theme

Pick a theme that the team likes. A good place for inspiration is the [Wordpress themes](https://wordpress.org/themes/) site. Do not purchase, or copy the theme code, just browse them for inspiration. Everyone should agree on a theme and ensure that each page is consistent with the colors, fonts, and/or images chosen.

### Pages
Each team member is going to be responsible for the content of a different page, so decide on the name and content for each of those pages. Some possible options are...

1. Home page
1. Employee listing
1. Company history
1. Company culture/mission
1. Job listings
1. Company awards

Regardless of what pages each team member works on, each team must have a Products page for their site that the team will collaborate on. See more details about the product page below.

### Git
Your team is going to learn how to use git to enable good teamwork when building a software product.

1. Now that everyone has joined the same team, everyone clone the Github Classroom project into your current directory - which should be `group-projects` if you ran the setup commands.
1. `cd` into the directory that got created.
1. Before anyone on the team writes a single line of code, the team will decide on a branch naming strategy. Branches should be descriptive of the work that is going to be done on that branch. Some teams also decide to add the developer's information to the branch name, such as initials. For example, a developer named Jasmine Sheboygen is going to work on the job listings page for the web site. A good name for the branch would be `js-job-listing-page`.
1. Again, before you write any code, one team member volunteer to create the  ignore file on the `master` branch.
    1. `touch .gitignore`
    1. `git add .`
    1. `git commit -m "Initial commit with .gitignore file"`
    1. `git push origin master`
1. Now everyone should `git pull origin master`.
1. That's the last commit you make on the master branch. At this point, each teammate will create their branch.

Now everyone will work on their page on those individual branches. Only when teammates feel that the work is complete, the teammate will push up their branch to Github and create a pull request. One of the other teammates must review the pull request and give a thumbs up (Just type :+1 in the comment box).

Once the PR gets a thumbs up, the teammates can merge the branch by following this process.

```bash
git checkout master
git merge [your approved branch name] 
# Fix any merge conflicts, if you have them
git push origin master
```

### Product page

The team's product page will be driven from JavaScript code. Decide on the names of, at least, 8 products that your business manufactures. The product page must have a linked JavaScript file.

1. Create an array to hold your products.
1. Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
1. The team will use JavaScript to add each product to the DOM.
1. Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
1. The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.

