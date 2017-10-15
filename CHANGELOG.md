### 0.0.1

Beginnings of a learning spree.  Expo based fun factor started.  Editing with Nuclide and building up tutorial based experience.

### 0.0.2 Hello World

Build App.js from scratch with minimal referencing, understanding dependencies along the way.  Bare minimum code by current understanding.  StyleSheet so far = watch out tons of non-intuitive memorization ahead (flex must know vertical starting from top by default, justified means something in this direction too, align doesn't).

### 0.0.3 Jest

Use RSpec style testing immediately in an Expo environment.  Snapshots give you a normalized and repeatable structural representation of the view hierarchy.  Mind blown !

Other than Webstorm, debugger configuration seems a bit of a mystery yet, not out of the box or I'm missing something thus far.  If I need a browser to drive tests that don't require it, then why not use an IDE ?  Sticking with Webstorm for now.

### 0.0.4 Layout

Beginnings of getting FlexBox on the brain.  Wonderful code-orented styling options including DRY modeling.  Some of the non-intuitive seems to already be due to layout being a difficult problem to do elegantly.

Snapshot based testing already very powerful.  Atom with the <https://atom.io/packages/tester-jest> package installed is a great way to develop.

Still using Webstorm for debugging when I want to inspect state at a breakpoint.

Still letting "yarn test" run on the screen to the right of Atom.  Light, fast, clean, IDE still not beating it completely.

Colors can wait, layouts for mobile are hard.  Let's try something a little more difficult, leading with Test.

Key to FlexBox seems to be always knowing it's forward direction.  Decided to always set this, making the important flex direction declarative.  Concise works where syntax is intuitive.
