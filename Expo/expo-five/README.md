# Expo Five

**Purpose**: Testing of Timer mocking and other component validation in Jest.

## Component Hierarchy

- App
	- Counter


## Data

	Counter
	- has a count

[Diagram](http://yuml.me/rolandhordos/diagram/scruffy/class/edit/[ Counter | -count ])

### State Test

1. Is it passed from Parent?  No - state
2. Does it change over time?	No - state
3. Can it be computed?			No - state

Count Should live in the Counter component (or App if no Counter)

