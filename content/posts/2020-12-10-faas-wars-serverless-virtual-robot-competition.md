---
title: 'FaaS Wars: Serverless & Virtual Robot Competition'
status: Published
date: 'December 10, 2020 5:38 PM'
postFeaturedImage: /images/uploads/blog-faas-wars-serverless-virtual-robot-competition.jpg
excerpt: >-
  FaaS Wars is a programming competition organized by Nimbella. You write code
  to control a robot moving in a battlefield and fire lasers to battle another
  robot, built by other participants. The goal of the game is to defeat the
  "enemy" robot, learn serverless, have fun, compete and win.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    The game’s concept is very simple: you need to write the code that controls
    a robot fighting to the death with another robot (built by other
    participants) ✔
  shareImageUrl: /images/uploads/blog-faas-wars-serverless-virtual-robot-competition.jpg
  title: '​FaaS Wars: serverless virtual robot competition'
---
## _Learn serverless quickly, build your FaaS Fighter and win up to $1400 in cash prizes_

[FaaS Wars](https://faaswars.nimbella.com/) is a programming competition organized by Nimbella and supported by several members of the Apache OpenWhisk community. In this competition, you'll learn "to serverless", have fun, compete and maybe win!

The game’s concept is  simple: you write code to control a robot (**_faasfighter_**) moving in a battlefield and fire lasers to battle another robot, built by other participants. The goal of the game is to defeat the "enemy" robot, hitting it 5 times, and of course, avoiding lasers it will be firing at your robot. The time limit for each match is one minute.

### A Serverless API For Your Robot

The way you control the movements of the faasfighter is to create a serverless API using Nimbella. The API receives an event that describes the state of the game, and responds with orders for the robot fighter to execute. Below is a tutorial that explains how to create your own fighter, along with battle techniques that get progressively "smarter".

​The examples below use JavaScript as the programming language to implement the API. You may however use any other programming language available that Nimbella provides, including Python and Go.

A serverless implementation of an API is called a Nimbella action. The action is a function that receives as input a JSON object encoding the state of the game ("the event"). The action returns the output ("the orders") in JSON as well. The examples that follow are simple enough to be readily translated into the language of your choice.

### Hello Robot

You control your fighter by writing some code using the [FaaS Wars](https://faaswars.nimbella.com/) built-in editor. The code you enter in the editor is a function which has the following format.

```
function main(args) {
    return { "body": [] }
}
```

The function must return a result as a JSON dictionary with the property `"body"` containing an array of orders for your fighter (more on this later). This robot does not execute any moves. It sits idle, waiting for the enemy to destroy it.

### Commanding Your FaaS Fighter​

This next function sends a single order to the robot at every step of the game. It returns an array containing the order to "yell" the given message on the battlefield. Here, the message is the time of day when the order is issued.

```
function main(args) {
    let msg = new Date().toLocaleTimeString()
    return { "body": [ { "yell": msg } ] }
}
```

If you start the battle with this action, you can see the robot emitting the time of day... until it is eventually destroyed by a superior fighter (or time expires). This example is not very useful, battle-wise, but nonetheless, we see our robot is doing something now!

### Moving Your Robot

Next, we'll learn how to instruct the robot fighter to move around the battlefield. As we already pointed out, the action returns an array of commands, so you can give multiple orders in one function execution.
​
The action below instructs the robot to move forward, then turn to the left.

```
function main(args) {
    return { "body": [
       { "move_forwards": 50 },
       { "turn_left": 90 }
    ]}
}
```

​
Run this code and you will note that the robot moves around in a square pattern. The orders are to repeatedly move forward 50 pixels and then turn 90 degrees to left. If the robot is hit, it may change its orientation randomly.

### Reacting To Events

At every step of the game, the robot actually receives information about its environment in the `args` parameter. The most important value to check is `args.event`. There are four events our robot can react to.

* `idle`: when the robot is running out of commands and has nothing to do.
* `enemy-spot`: when the robot sees the enemy right in front of the turret.
* `hit`: when an enemy laser strikes the robot.
* `wall-collide`: when the robot hits the wall and cannot move forward any more.

Now let’s add the ability to "shoot" at the enemy. For this purpose, we introduce a switch on the event. Also, we use an array to accumulate the orders we want to execute. Our revised code follows.

```
function main(args) {
    let orders = []
    switch (args.event) {
        case "idle":
            orders.push({ "move_forwards": 50 })
            orders.push({ "turn_left": 90 })
            break;
        case "enemy-spot":
            orders.push({ "yell": "Fire!" })
            orders.push({ "shoot": true })
            break;
    }
    return { "body": orders }
}
```

​
You will note that this function returns an array of orders. Each order is a map, where the key is some command to execute.

There are two types of orders. The first type are **movement orders**, and they execute sequentially; meaning your robot cannot move forward and backward at the same time, or move and turn simultaneously.

**The movement orders are:**

* `move_forwards <number>`: move forward by the given number of pixels.
* `move_backwards <number>`: move backwards by the given number of pixels.
* `move_opposite <number>`: move in the opposite direction, useful when you hit a wall.
* `turn_left <degrees>`: turn the robot to the left by the given number  of degrees.
* `turn_right <degrees>`: turn the robot right by the given number  of degrees.

The second type of orders are **attack orders** and these execute concurrently. For example, your robot can yell and shoot at the same time. In addition, you can also move the turret.

**The attack orders are:**

* `yell <message>` show a message.
* `shot: true`: order to shoot when the value is true.
* `turn_turret_left <degrees>`: turn the turret to the left by the given number of degrees.
* `turn_turret_right <degrees>`: turn the turret to the right by the given number of degrees.
* `data: <object>`: store the object and provide it in future events.

### A Better Fighter

Now let's put it all together, handling also the cases of the robot colliding with the wall or being hit. What follows is the control program that is the default fighter when you create a new robot.

```
function main(args){
    let orders = []
    switch (args.event) {
        case "idle":
            orders.push({ "turn_turret_left": 45, "move_forwards": 50})
            orders.push({ "turn_left": 45})
            break;
        case "wall-collide":
            orders.push({ "move_opposite": 10})
            orders.push({ "turn_left": 90})
            break;
        case "hit":
            orders.push({ "yell": "Ooops!"})
            break
        case "enemy-spot":
            orders.push({ "yell": "Fire!", "shoot": true})
            break
        default:
            console.log(args)
    }
    return { "body": orders }
}
```

## A Stateful Fighter

So far, we’ve developed a simple robot that moves around a square and shoots when it sees the enemy. Let's try to make the robot a bit smarter, using also its ability to "remember" the current state of the game, and considering more information about the environment.
​
For the examples that follow, we will use this skeleton for the action. You will replace the place holder `// insert here` with the code snippets that are introduced later.

```
function main(args){
    let orders = []
    switch (args.event) {
        // insert here 
        default: 
           break;
    }
    return { "body": orders }
}
```

### The Input Event

The function parameter, called `args` in the examples, is the event received by your serverless API. It includes information about the game, your position and that of the enemy robot. The event schema is as follows.

```
{
  "event": [ "idle" | "enemy-spot" | "hit" | "wall-collide" ],
  "x": number,
  "y": number,
  "energy": number,
  "tank_angle": number,
  "turret_angle": number,
  "angle": number,
  "enemy_spot": {},
  "data": {}
}
```

The event provides the faasfighter's position (`x` and `y`), the number of strikes remaining before defeat (`energy`), the angle of the tank (`tank_angle`) and of the turret (`turrent_angle`), and the total `angle` which is essentially the angle of your laser beam. 
​
Additionally, when your robot spots the enemy, details are provided in the `enemy_spot` object, and you may persist this and other information about the state of the game in `data`. But first, let's learn how to search for the enemy. A simple approach is to rotate the turret 360 degrees, with this code:

```
case "idle":
   orders.push({ "turn_turret_left": 360 })
   break;
```

Now, if you start the battle, enable `Debug` and repeatedly click the `Trace`, you will eventually observe the event `enemy-spot`, when the turret is aligned with the enemy. An example `enemy-spot` object is illustrated below.

```
{
  "event": "enemy-spot",
  "x": 166,
  "y": 250,
  "energy": 5,
  "tank_angle": 195,
  "turret_angle": 152,
  "angle": 348,
  "enemy_spot": {
    "id": 1,
    "x": 368,
    "y": 201,
    "angle": 346,
    "distance": 207,
    "energy": 5
  },
  "data": {}
}
```

## Save and Use History

In the previously shared example, you can notice that there is an enemy at a distance of 207 pixels with an angle of 346 degrees. What can we do with this information? One idea is to remember where we last saw the enemy and use this information to align the turret. So let's save the `angle`. We can do this with the `data` command, as follows:

```
 case "enemy-spot":
    orders.push({ "data": { "angle": args.enemy_spot.angle } })
    break;
```

Now that the robot is preserving some information, we can use it to align our turret and aim at the spotted enemy robot. In general, if our angle is greater than the angle of the enemy we want to move the turret to the left. Otherwise, to the right, and then shoot when we are aligned with the enemy. 
​
After we fire a shot, we want to forget about the angle we recorded until we see the enemy again. Also, we want to avoid being an easy target so it's a good idea to move when we are idle, and keep rotating the turret to spot the enemy. Putting it all together in code:

```
case "idle":
   let data = args.data
   if (data.angle) {
       let me = args.angle
       let it = data.angle
       if (me > it) {
           orders.push({ "turn_turret_left": me - it})
       } else {
           orders.push({ "turn_turret_right": it - me})
       }
       orders.push({ "shoot": true, "data": {}})
   } else {
       orders.push({ "move_forwards": 100, "turn_turret_left": 360})
       orders.push({ "turn_left": 30 + 150 * Math.random() })
   }
   break;
```

## Final Touches

The robot is now pretty good, but it can get stuck when it hits a wall, so we have to adapt. In our case, we are going to move in the opposite direction and then turn right 90 degrees.

```
case "wall-collide":
    orders.push({ "move_opposite": 10})
    orders.push({ "turn_left": 90})
    break;
```

Also, when we are hit, it is better to move away to avoid repeated hits from the enemy. Our choice is to move backwards by a random amount to get to safety and away from enemy fire.

```
case "hit":
    orders.push({ "move_backwards": 10 + 90 * Math.random() })
    break;
```

## Conclusion

You now know the basics of the game and how to control your faasfighter: move around, spot the enemy, persist state, aim and fire. Can you devise a winning strategy? Can you take into account the distance and the velocity of the enemy? Can you anticipate its moves? Can you think of better ways to move away from enemy fire?

The fun is endless and we invite you to have fun, compete, and learn about serverless programming at the same time. This is [FAAS WARS](http://faaswars.nimbella.com/). Good luck, may the best faasfighter win!

Author: Michele Sciabarrà
