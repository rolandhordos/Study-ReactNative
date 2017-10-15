# Study-ReactNative
This looks very promising, so let's start some study with depth and breadth to test it's strengths and limitations.


## Getting Started

Well!  Apparently there's nothing like jumping right in.  Expo will certainly ignite a spark and set off a firestorm of enthusiastic study of React Native.  Combined with Snack to effortlessly share and publish training activity over the web.  Simply Amazing!

For structure, I learned gitflow style making feature branches for chunks of work and grouped that into releases.  Here are some highlights:

### 0.0.1

So easy to get up and running.  Amazing tooling even at a simple glance.  Decided to dig in on Nuclide for a spell.

### 0.0.2 Hello World

StyleSheet not actually necessary so far, for an app that displays text and doesn't crash.  Without it though, you cannot layout that text.

Nuclide makes the JSX editing nice -- not sure though if this is just basic Atom at work.

Some elegance lost in the StyleSheet implementation, requiring memorization.  Perhaps I am just lacking some key insight.

- **flex** value range is a percentage, and you need to know it's a range that affects the vertical axis starting with the top of the screen.  Why not name this *verticalRange* or *verticalRangeTop* instead?
- Almost as random, **justifyContent** applies to the vertical axis.  I have a fantasy that time travel can rename this *verticalAlignment*.
- **alignItems** - more of the arbitrary, apparently meaning not the same axis as the justified axis yeesh


### 0.0.3 Jest

The very next bit of complexity has to be a test system.  No, for me it does not matter the size of a project or team this is not optional.

Just a wonderful experience.  Get going testing your Expo app immediately / out of the box.

Webstorm's Jest configuration found me debugging tests with a couple clicks.  Still not familiar with Nuclide as a debugger yet.


### 0.0.4 Layout

Colors can wait, layouts for mobile are hard.  Let's try something a little more difficult, leading with Test.

Key to FlexBox seems to be always knowing it's forward direction.  Decided to always set this, making the important flex direction declarative.  Concise works where syntax is intuitive.

Started using a nice test runner for Jest integration with Atom.  Though still no debugger integration working here yet.

<https://atom.io/packages/tester-jest>

#### Updating Tests

Changed a layout?

- Add or update tests
- Update the incremental change in the snapshot -- code reviewing this diff should be easy or something larger changed

#### ScrollView Structure

More elegance found!  Found out via test and inspection in the debugger, that the runtime View hierarchy depending on the Component does not match the JSX 1 to 1.  The ScrollView has a hidden inner View as the parent of your JSX based Component contents within.

I think this is a good thing, you build with concise clean normalized structure.  You need to know more for testing but it's straight-forward.


## Next Release

### 0.1.0 Ejected

Deciding we want to study beyond Expo, we move forward into the iOS simulator and <em>eject</em> from Expo.  Ideally we can keep our light, fast Expo rhythm as well.

## Roadmap

### 0.1.1 BuddyBuild

By this point a production CI system should be able to pick up distribution for devices.  We'll make a green Jest Project test a requirement for pushing a build.

## Q & A

**Q**:  What is the significance of the "container" in the StyleSheet?  Can you have multiple containers at the same time?

**A**:  Container is simply a convention.  Structure of your style information should be intuitive.  Just be sure to read the correct style values into your JSX.  Apply more structure if you want, you just don't have to.

**Q**:  What do flexGrow, flexShrink, and flexBasis do for me?

A try:  <https://stackoverflow.com/questions/43143258/flex-vs-flexgrow-vs-flexshrink-vs-flexbasis-in-react-native>

TODO: experimentation required here, outside of a scrolling environment where autolayout in constrained real-estate conditions can be observed.

### Jest

**Q**: How can I verify default component behaviour that doesn't appear in the snapshot, for example flex direction if it's not explicitly set?



## IDEs and Editors

### Snack

<https://snack.expo.io/ryYbclcsW>

### Webstorm

Very cool debugging, very easy to enable.  Pretty lightweight RN project template, lighter than Ignite.

Webstorm hides some files in the /var/private..tmp are.  Not sure how these are maintained yet.  Nice that it is aware that you can have a ton of files getting in the way and accomodate that both visually and on the file system.

### Atom

Loving the "Hackable" nature of this nice light IDE.  Have customized the look and feel right down to specific syntax choices.  Will shared these ~/.atom/*.less changes down the road.

## Handy References

Besides the obvious https://facebook.github.io/react-native/

### Good default gitignore file

<https://github.com/gabergg/ReactNativeTodoList/blob/master/.gitignore>



## What Does a React-Native Stack Look Like ?

The first thing I needed, after a trello board to keep organized, was a diagram.  If I'm really going to pick this up, it will mean I'm inevitably going to be training others as well.  For me, a mental map is developed and maintained 100 times more efficiently with diagrams.

Major Pieces of Reactive Native

An [example](http://url.com/ "View")

## How Does It Work ?

## Development Environment Selection

### Webstorm

### Atom

<https://atom.io>

Nice:

- Launches from command line.

#### Nuclide

<https://nuclide.io/docs/quick-start/getting-started/#installation>

Installed as a package in Atom.  Settings > Install > type nuclide and search > [Install]

Facebook's "unified development environment"


### Deco


# Branches

bootstrap - Get this repo going, layout the study plan via an Outline in the Readme and build momentum

# Key Terminal Commands

## Prepare React Framework

### Expo

	yarn global add create-react-native-app

### Otherwise

	yarn global add react-native-cli

### Ignite

	yarn global add ignite-cli

### Webstorm

From Webstorm RN Tutorial here: https://blog.jetbrains.com/webstorm/2016/12/developing-mobile-apps-with-react-native-in-webstorm/

Webstorm wants this package installed to create a new project:

	yarn add global create-react-app
