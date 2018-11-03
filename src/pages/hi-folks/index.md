---
title: State-Management
date: "2018-11-02"
---
Hello again and thanks for coming back. Lets jump straight into the nitty gritty and start talking about state.

So I've been doing a lot of research on different state management systems recently due to some of the questions I've been asked during the interview process. There is always the classic React versus Redux decision. For me the decision has typically been pretty an easy one. Do I need a global state? If not then I've just stuck with react's setstate() function to handle all of my state management. Mostly due to scale of the project, I've rarely run into a situation where it wasn't fairly simple to just lift the state to a parent component and pass it down via props.

But there are clearly some great uses of the Redux library and I think I've actually been missing out because I didn't have a great understanding of how it all works. I'm starting to gain a clearer picture of when Redux can be a great way to manage the state of your application. As your state tree gets larger and larger, it can become confusing to keep track of the state as it gets passed down through components. Also changing things later on in child components could completely screw up the entire application if you aren't aware of the possible ripple effects throughout the application. This is where the idea of a global store that all the components can access via functions is such a beautiful idea. It makes the components more presentational/functional and leaves all the heavy lifting to middleware. You have actions that change or mutate the state in some way and then reducers that render components for you and react to the changes in the global state. As your application gets larger and larger it keeps things much cleaner. 

I couldn't have named another state management framework if you had asked me a week ago. I think thats one of the great things about this field though, there is always something new to learn. One of my interviewers asked me if I had heard of MobX and I was honest in my answer that I hadn't. I started doing some research and was actually pointed to an awesome video about state management and some of the competing solutions that are available.

https://www.youtube.com/watch?v=ZGVwMkrL2n0

Mind Blown......

MobX is a really cool framework in that it handles state in a slightly different way. For starters, it combines the two ideas of react and redux and gives you the ability to have state contained within your components or lifted globally in a store.