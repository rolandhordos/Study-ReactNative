# Study-ReactNative
This looks very promising, so let's start some study with depth and breadth to test it's strengths and limitations.


## Getting Started

Well!  There's nothing like jumping right in.  Expo set off a firestorm of enthusiastic study of React Native.  Combined with Snack will effortlessly share and publish training activity over the web.  Simply Amazing!

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


### 0.1.0 Ejected

Deciding we want to study beyond Expo, we move forward into the iOS simulator and <em>eject</em> from Expo.  Ideally we can keep our light, fast Expo rhythm as well.

#### Option 1 - No More Expo

This went pretty well.  The iOS app built and ran first shot.

Jest was broken but a small change to the package.json file to change the "jest.preset" from "jest-expo" to "react-native".  The Atom jest package worked the same, as did "yarn test".

Sorely missing was the auto reloading in the iOS App.  I stared at the simulator for a bit, hoping it would do something about my recent changes.  It just stared back.  

But the work cycle is still not so bad here.  Making a small change required only about 15 seconds from "yarn run ios" to having the app refreshed in the simulator.

#### Option 2 - Keep Expo Support

Initial attempt to run-ios was not successful.  Build errors very recognizable as CocoaPods having not been run.

	cd ios
	pod install
	
First major setback for Expo - 345 MB of pod source later (see ejected-with-everything-but-the-kitchen-sink.txt) and we're ready to build again.  It's not just a large amount of code here, there are absurd dependencies like "boost" which are 75M alone and are typically used when Apple's APIs are bypassed for a maximally heavyweight mobile application, plus security concerns.  This is the exact opposite of the amazingly wonderful light, clean, and powerful Expo experience thus far.

Second major setback.  Xcode 9 GA cannot compile the pods provided by Eject option 2 with ExpoKit.  Heavy integration work ahead to get Hello World back online.  We're done.  See Options 1 or 3.

#### Option 3 - Hybrid Expo for Modular Development

The idea here is something better than prototyping, using multiple smaller Expo projects that focus on a specific aspect of your application.  Perhaps segmented like you would see the major features separated with a Tab View based launch screen.  But the main production application is a conventional React Native app.

This is not an automated means provided by Expo, but the manual work is manageable.  It's just so amazingly fast and easy to create an Expo app and get busy, that I think I will try to use it like a "git flow feature" type of thing.  Along with your feature branch you might have a standalone Expo app that proves out your newly added code in a lightweight but focused way.  To be continued.

### 0.1.1 BuddyBuild

By this point a production CI system should be able to pick up distribution for devices.  We'll make a green Jest Project test a requirement for pushing a build.

Success!  It took 2 lines in a buddybuild_prebuild.sh script to make this work.  It didn't work the same in the postclone (sp) script - node is not yet prepared in the BB run.  As prebuild it still shows high in the build log, errors are read just like day to day jest watch in the Terminal, and no heavy Xcode build required.

Here's the repo: <https://github.com/rolandhordos/ExpoThree-Ejected>


### 0.2.0 Third Party Components

This is a very important aspect of a successful software technology, that supports a grassroots movement to enrich the standard component library.  Here is hoping we can use 3rd party components just as easily as we have so far.

#### Jumping In

The hunt for a great carousel.  Chosen not quite arbitrarily, I decided to go through a component selection process just like I would with CocoaPods for a given problem.  Here are my findings, as well as a spontaneous decision to fork a component and contribute to opensource!

1)  Quality of 3rd party React Native components is *extremely* varied, similar to what I'm used to on iOS with CocoaPods but it seems much harder to find that out quickly.  Another win for @Orta :)

2)  Setback for Expo, [snap carousel](https://yarnpkg.com/en/package/react-native-snap-carousel) heated up my iPhone 7+ faster than a 3D game.  Then rendering anomalies were encountered with [react-native-carousel](https://yarnpkg.com/en/package/react-native-carousel) that were not found on the Simulator outside of Expo.  Perhaps this is due to imperfectly matched dependencies, and if so then add brittle as another minus.  Expo appears great for simple projects and for getting relatively simple things working easily.

3)  Very very very few components are implemented using the portrayed modern idiomatic JavaScript I've fallen in love with in the 2017 RN tutorials.  Old approaches involving Mixins and callback hell (missing caller / callee context, great difficulty for non-trivial testing).  See Opportunity.

4)  Minimal to no testing.  See Opportunity.

5)  Jest testing with Components can throw exceptions like ScrollViewMock not supporting the scrollTo method.  Deep dive on Jest here looks to be required incuding Timer Mocking.

#### Opportunity !

Not realizing it was Expo, I set my sights on the shortcomings in react-native-carousel as a chance to fork it and:

- fix the 2 or 3 bugs found
- upgrade it to ES6/7 code like in the 2017 tutorials
- resolve React 16 deprecations
- learn how to publish a component
- contribute to opensource

#### Opportunity Realized

And so we ended up with [a fork](https://github.com/rolandhordos/react-native-carousel) and [a component](https://yarnpkg.com/en/package/@rolandhordos/react-native-carousel) with lots of commit detail to follow the journey.


### 0.2.1 Deeper Jest - Timers

Expo-Five - simple state change over time, testable with Timer Mocking to simulate time.

## Next Release

0.2.2 Component Testing

## Roadmap

Architecture for maximum reuse across Web and Native.

### Flow

Not sure which of these finally smoothed out the Jest globals issue:

	yarn global add flow-typed
	flow-typed install jest@21.2.1
	flow-typed create-stub react-native@0.49.5

Also need to add quite a bit to the [ignore] section of .flowconfig:

	; rh - modules not configured correctly for current flow env
	<PROJECT_ROOT>/node_modules/react-native/local-cli
	<PROJECT_ROOT>/node_modules/react-native/lib
	<PROJECT_ROOT>/node_modules/react-native/Libraries
	<PROJECT_ROOT>/node_modules/react-native-gesture-handler
	<PROJECT_ROOT>/node_modules/react-native/ReactAndroid


### Prop Types

### State

- Redux

### Workflow

### Component Lifecycle

### Realm

### With Swift

### Android

###  Buck ?

	brew tap facebook/fb
	brew install buck

## Q & A

**Q**:  What is the significance of the "container" in the StyleSheet?  Can you have multiple containers at the same time?

**A**:  Container is simply a convention.  Structure of your style information should be intuitive.  Just be sure to read the correct style values into your JSX.  Apply more structure if you want, you just don't have to.

**Q**:  What do flexGrow, flexShrink, and flexBasis do for me?

A try:  <https://stackoverflow.com/questions/43143258/flex-vs-flexgrow-vs-flexshrink-vs-flexbasis-in-react-native>

TODO: experimentation required here, outside of a scrolling environment where autolayout in constrained real-estate conditions can be observed.

### Jest

Validate method execution and state present within call.

Sequenced return values - immediately jump to set of state at the start of a test.

Favorite quote in the documentation: 
> "try to avoid the temptation to implement logic inside of any function that's not directly being tested"

**Q**: How can I verify default component behaviour that doesn't appear in the snapshot, for example flex direction if it's not explicitly set?

#### Mocking Time

Deep insight into runtime behavior.

##### jest.useFakeTimers()

Timey wimey tardis magic !  You can drive time thousands of times faster than real time (infinite loop detection kicks in at 100000 events).  Time jump to just the next event or fire up the Blink drive and *jest.runTimersToTime* jump to a specific point in time.

Combined with Jest's normal function mocking which looks and works beautifully in ES6+ syntax and tracks state seen within the call.  ES7 bound instance methods work seamlessly this way as well -- easy to prove in the mock.calls state.

Note: manually clear state at the end of a timer mock test with *jest.clearAllMocks*, otherwise other tests within the same suite can add to the state.  I was mistaken that Jest already did this on it's own between tests.  Incredible that this can be caught, let alone surfaced for you in mentorship fashion.  It's so easy to miss that the runtime can stack up calls to *setInterval* in an managed runtime.  In other platforms this dynamic - unexpected runtime / container residue can cumulatively cost weeks.  First hand, this found a recent iOS team I lead abandoning TeamCity for iOS CI purposes, never knowing why the Swift/ObjC testing was so unreliable compared to Xcode Server (identical tests).

Still not done.  Now .. **snapshot this exposed state** as well.  I did not know previous to this that the same snapshot mechanism for the React view hierarchy can be used as:

	expect(yourMock).toMatchSnapshot

.. then automatically matched every single time you run.  This will catch unexpected state creep and race conditions *FOR YOU* with one line of code.


### Component Development

#### Using Components in Source Form - project+components

How amazing would it be, if your RN application itself could make use of the React component architecture.  Individually each component could be published for maximum reuse.  Ideally you could run Jest and your App in your project root like you always do, but concurrently you could develop independent components also running at least Jest.

##### Best Option So Far - libsync

Coined *libsync* for a simple rsync of prepared component package lib contents into an installed package version.  It works to hot reload component changes into the project.  It does not allow us to debug ES6/7 based component source.  

To use this technique, add this to the yarn scripts section:

	"libsync":  "npx babel src/ -d lib/ --presets=react-native; rsync -rav lib/ libsync"

You will need to symlink the lib directory of an installed version of the package in the project that is using it.

	ln -s ~/MyProject/node_modules/@me/my-component/lib libsync

Yes, this is a hack.  However it seems to be the best hack available.  Many problems were encountered trying to use the node module architecture to accomplish project+component development.

##### Problems Using Node modules as Developing Components

- Packages are typically published in a minified form, probably in a different folder such as *lib* where the *src* is elsewhere.  The Component Shim approach below which patches the package.json got close but would only work with Jest.
- *Yarn add* as a local package gives the ability to update changes from the local file system without publishing, though would require at least pre packaging of the minified form as use of the component's own ES6/7 source through symlinking or package.json patching would not work.  Possibly some additional Babel configuration here might help.
- For performance each sub-system has it's own caching or optimization that get in the way of creative module usage.  NPM, Jest, RN Packager, Expo ..
- Initializing Jest again in a subdirectory of a project where you mean to run it regularly, causes the "Cannot find module 'setupDevtools' from 'setup.js'" error.
- Dependent modules in subfolders that have a node_modules within them (ex: react and react-native) will cause an arbitrary dependency resolution problem and error out, pointing to the duplicate dependencies.


##### Component Shim to yarn add /filesystem/package

Assuming the package you're developing becomes packaged to a "lib" directory and have development dependencies that clash with the project that's *using* the component, you'll want this **shim** which you can add to the *"scripts"* section and execute as:

	yarn component-shim
	
Add this to package.json scripts section: 

	"component-shim": "yarn add /Users/rolandhordos/Projects/Study/Node/react-native-carousel; cd node_modules/@rolandhordos/react-native-carousel/; rm -fr node_modules/react-native; rm -fr node_modules/react; rm -fr lib; rm -fr src; ln -s /Users/rolandhordos/Projects/Study/Node/react-native-carousel/src; sed -i.bak 's/lib\\/C/src\\/C/g' package.json"

Note that double backslashes were necessary in the JSON in place of single backslashes if you were executing this in sed on the command line.


##### Add Component Source as SubModule

Submodules might have been a straightforward fallback when packaging breaks down, like in other dev envs.  However:

- The source needs to be within the project tree -- in it's sandbox.  Symlinking out to some arbitrary structure always caused some sort of packager, Jest, or Babel originating dependency resolution problem.
- yarn install in a subdirectory of a yarn based project will result in a laundry list of resolution and dependency issues.

The part of this that works, is to directly include the source, make source changes and add to your project testing, then contribute back source changes from the submodule to the component repo.  Then pull / merge changes in as well.  Far from parallel Jest based development.


##### Custom Component Architecture - Not Quite There Yet

It's easy to drink the Component Kool-aid and fall in love with a component inspired architecture.  As of Novenber 2017, it's still really hard to make work well, the way the trivial examples just pop.

**Tweak #1 - Jest - Ignoring Duplicate Module Paths**:  When you're including a component you're developing, into another project, add those module paths to the jest section of package.json.  Otherwise you will get duplicate import type warnings.

``"modulePathIgnorePatterns": ["~/Projects/MyProject/node_modules/@myComponentScope"] ``

**Tweak #2 - Jest - Haste Map Cache Purge**:  Cached haste map related woes.  When you make any non-trivial changes to package.json or other component structure, you may see more consistent results by blowing away the jest cache directory.  You find the cache pack by executing this:

``jest --showConfig | ache``



## IDEs and Editors

### Snack

<https://snack.expo.io/ryYbclcsW>

### Webstorm

Very cool debugging, very easy to enable.

Webstorm hides some files in the /var/private..tmp area.  Not sure how these are maintained yet.  Nice that it is aware that you can have a ton of files getting in the way and accomodate that both visually and on the file system.

### Atom

Loving the "Hackable" nature of this nice light IDE.  Have customized the look and feel right down to specific syntax choices.  Will share these ~/.atom/*.less changes down the road.

<https://atom.io>

Flow makes Atom a real marvel - extremely lightweight for the realtime power avoiding common syntax bugs and type-originating productivity.

#### Nuclide

<https://nuclide.io/docs/quick-start/getting-started/#installation>

Installed as a package in Atom.  Settings > Install > type nuclide and search > [Install]

Facebook's "unified development environment"


## Handy References

Besides the obvious https://facebook.github.io/react-native/

### Good default gitignore file

<https://github.com/gabergg/ReactNativeTodoList/blob/master/.gitignore>


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
