# Eat-Da-Burger: Burger App
## Heroku Page:  [Eat-Da-Burger!](https://polar-oasis-24673.herokuapp.com/)

Welcome! - The following Application makes use of Handlebars.js, Express.js, and MySQL.

## How the App Works:
1. Enter a name for a burger and hit submit.
2. The burger automatically is added onto the uneaten side.
3. If you choose to click on the devour button, the burger will be "devoured".
5. Because MySQL is used the "burgers" are stored in a database. The burgers' status and information will remain even if you reload the page.

The "burgers" are kept track with MySQL Database.
Handlebars is used and a true or false checker decides what how the information is displayed. The example below will be for "devoured" burgers.

```handlebars
        {{#if devoured}}
        {{> burgers/burger-box ate=true }}
        {{/if}}
```


Uses the Model View Controller (MVC) architecture.

![Image of Deployed Website - Eat-Da-Burger](/rm_eat_da_burger.png)



