# What is React?

React is a JavaScript tool that makes it easy to reason about, construct, and maintain stateless and stateful user interfaces. It provides the means to declaratively define and divide a UI into UI components (a.k.a., React components) using HTML-like nodes called React nodes. React nodes eventually get transformed into a format for UI rendering (e.g., HTML/DOM, canvas, svg, etc...).

## Summary

**What**
* React is a JavaScript library for creating user interfaces
* React is a VIEW Layer
* React is a platform. Use it for Web (HTML, Canvas), Mobile, Desktop

**Why**
* Break UI into Composable Components
* Describe components in Declarative style
* Reactive updates

# React Ecosystem
When talking about React, you cannot simply just React. React does well to introduce some useful primitives into your toolbox and allows you to build your app without introducing too many opinions. As such, you need to learn some other tools to round the whole story of our app.

If you’re new to React (or frontend in general) you may find the ecosystem confusing.

You should learn, in this order, without skipping ahead or learning concurrently:

* **React itself**
* **npm**
* **JavaScript “bundlers**”
* **ES6**
* Routing
* Redux

# React
No JSX. No ES6. No transpilation. Just pure component-oriented pleasure of coding.

* [Playground](https://jsbin.com/dozices/1/edit?html,js,output)
* [Top-Level API DOCS](https://facebook.github.io/react/docs/top-level-api.html)
* [React without JSX](https://facebook.github.io/react/docs/react-without-jsx.html)

## My First Component!

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vidflix</title>
</head>
<body>
    <div id="app"></div>
    <script src="node_modules/react/dist/react.js"></script>
    <script src="node_modules/react-dom/dist/react-dom.js"></script>
    <script>
        var div = React.DOM.div
        var h1 = React.DOM.h1

        var MyFirstComponent = (
            div(null,
                h1(null, 'This is my first component!')
            )
        )

        ReactDOM.render(MyFirstComponent, document.getElementById('app'))
    </script>
</body>
</html>
```

## My Second Component

You should see the text “This is my first component!” on the screen. As you may see, we constructed a bit of DOM using functions. That is what all components are in React: functions. This ends up being a useful and powerful abstraction.

```
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, 'Check out this component!')
      )
    )
  }
})

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
```

Cool, right! My our own custom class, like a div or an h1. We can use it the same way we use any other HTML-native tag.  This allows us to encapsulate style, behavior, and markup into one neat little package and re-use these components everywhere!

Notice we’re using the createClass to create the component and then we’re using using createElement to create an instance of that class. Good to get those straight right now: a class is a type of tag and an element is one single instance of that class.

## Props
Let’s make the title component reusable. **Props** to the rescue.

Props are variables that you pass from the parent to the child but the child cannot modify the props it gets.

```
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = function (props) {
  return (
    div(null,
      h1(null, props.title)
    )
  )
}

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'Props are great!'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!'}),
    React.createElement(MyTitle, {title: 'Props are the best!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
```

Let’s add more props:

```
// change MyTitle's inside h1
h1({ style: {color: props.color} }, props.title)

// change MyFirstComponent inside div
React.createElement(MyTitle, {title: 'Props are great!', color: 'rebeccapurple'}),
React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
React.createElement(MyTitle, {title: 'Props are the best!', color: 'peru'})
```

## JSX
We have been writing our React with vanilla JavaScript up until now. Now we will take advantage of **JSX** which essentially adds HTML/XML-like syntax as a “primitive” type to JavaScript. In reality, what it does it takes the HTML you write for your components and translate them into the same calls we writing just using vanilla JavaScript.

So.

JSX lets you create JavaScript objects using HTML syntax. To generate a link in React using pure JavaScript you'd write:
```
React.createElement('a', {href: 'https://facebook.github.io/react/'}, 'Hello!')
```

With JSX this becomes:
```
<a href="https://facebook.github.io/react/">Hello!</a>
```

*Still Note: JSX is not required to use React*.

[Check out our playground with JSX](https://jsbin.com/sesobom/2/edit?html,css,js,output)

# React Demo App — News App
Now let’s actually develop an app. 
This would be a news list. User can paginate and filter the list.
This is a simple version of an App implemented during the internship.

Imagine that we already have a JSON API and a mock from our designer. Our designer apparently isn't very good because the mock looks like this:
![Let’s start with the mock.](https://d26dzxoao6i3hh.cloudfront.net/items/3X2F0N2H2Y3b310I1r1g/Снимок%20экрана%202017-07-09%20в%2011.45.03.png "The App UI")

The JSON API returns some data that looks like this:

```
{
    "id": "rossiya-snimet-zapret-na-import-moldavskih-vin",
    "title": "Россия снимет запрет на импорт молдавских вин",
    "author": "sports",
    "createdAt": "2017-02-28T05:24:23.856Z",
    "content": "<div class=\"Body\">
             <p>Запрет на&nbsp;импорт молдавских вин в&nbsp;Россию, действующий с&nbsp;сентября 2013 года, в&nbsp;ближайшее время будет снят еще с&nbsp;нескольких предприятий. Об&nbsp;этом объявила глава Роспотребнадзора Анна Попова по&nbsp;итогам проверки российским специалистами молдавских винодельческих предприятий.</p>
<p>Эксперты Роспотребнадзора, сообщила Попова, проверили 13 молдавских предприятий. Большинство из&nbsp;них, по&nbsp;словам главы Роспотребнадзора, смогут поставлять свою продукцию на&nbsp;российский рынок.</p>
<p>С&nbsp;2015 года поставки вин на&nbsp;российский рынок <a href=\"http://tass.ru/ekonomika/2171763\" target="_blank">были разрешены</a> нескольким молдавским предприятиям, однако целиком запрет пока не&nbsp;снят.</p>
           </div>",
   	"summary":
      "Запрет на импорт молдавских вин в Россию, действующий с сентября 2013 года, в ближайшее время будет снят еще с нескольких предприятий. "
  },
```

## Step 1: Break the UI into a component hierarchy
But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, **a component should ideally only do one thing**. If it ends up growing, it should be decomposed into smaller subcomponents.

Consider following proposal: 
![Split UI into Components](https://cl.ly/0J0z14370u44/[8e4c513c8b7ae7edca99a5a3758c8657]_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202017-07-09%20%D0%B2%2011.50.14.png "Split UI")

* React App
  * Header
  * Content (ArticleListPage)
     * Filter
     * ArticleList
         * ArticleListItem
         * ArticleListItem
         *  ...
     * Pagination
 * Footer 

## Step 2: Build a static version in React
Let’s use official officially supported way to create single-page React applications. [Create React App](https://github.com/facebookincubator/create-react-app). It offers a modern build setup with no configuration. It Will handle bundling and transpilation.

Let’s start to build a version that takes our data model and renders the UI but has no interactivity.

## Step 3: Identify the minimal (but complete) representation of UI state

To make our UI interactive, we need to be able to trigger changes to your underlying data model. React makes this easy with [**state**](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html).

Most of your components should simply take some data from props and render it. However, sometimes you need to respond to user input, a server request or the passage of time. For this you use state.

Try to keep as many of your components as possible stateless. By doing this you'll isolate the state to its most logical place and minimize redundancy, making it easier to reason about your application.

We have:

	* The original list of users
	* Current Selected User
	* The value in SearchBar
	* Current Sort Option (name / age / none)
	* mutated list of users

We should ask 3Q’s on every data item:

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.

So finally the state is:

	* Current Selected User
	* The value in SearchBar
	* Current Sort Option (name / age / none)

## Step 4: Identify where your state should live
Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:

For each piece of state in your application:

* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

In our case:
* `UserDetails` needs currentUser, that’s why we have `UserConatainer` to handle it
* `UserList` will get mutated list of users. `UserListContainer` will track the state of filter query and current sort option.

## Step 5: Add inverse data flow
So far, we've built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it's time to support data flowing the other way: the form components need to update the state in UserListContainer.

## And that's it
Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you're used to, remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code. As you start to build large libraries of components, you'll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)

# Resources to Start and Finish

* [React RoadMap](https://github.com/ericdouglas/react-roadmap) — A curated list of free resources to master React Development — a LOT of links there
* [React HowTo](https://github.com/petehunt/react-howto) — Your guide to the (sometimes overwhelming!) React ecosystem.

* [Book: React Enlightment](http://www.reactenlightenment.com/what-is-react.html)

Video Courses:

* [Complete Introduction to React (feat. Redux and React Router) by Frontend Masters](https://frontendmasters.com/courses/react-intro/?u=f69852f549bcd4edc732fa04a440a36b677112b6) — great workshop

If you have a looot of time and hardly fall asleep, great series of video courses on udemy:
* [Modern React with Redux](https://www.udemy.com/react-redux/)
* [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial)

When you ready to try **REDUX**, everything you will need is here. Free, from creator of Redux:

* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)






