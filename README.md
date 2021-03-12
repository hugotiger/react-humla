# Humla Base

My own custom React hooks and components



## Hooks

| Name            | Typescript  | Implemented
| :-------------- | :---------: | :---------:
| useSmartLoading | ✅          | ✅
| useArray        | ✅          | ✅
| useLocalStorage | ✅          | ✅
| usePrevious     | ✅          | ✅
| useToggle       | ✅          | ✅
| useBoolean      | -           | -
| useHasMounted   | ✅          | ✅


### useSmartLoading

Delays loading state until time threshold is met (1.0s). Used to improve UX by avoiding showing loading indicators during short loading times.  

Also derives `isDelayed` for when loading takes longer time than expected (10.0s), further improving UX.

#### TODO:
- [x] Return `isSmartLoading` when loading takes more than 1.0s
- [x] Return `isDelayed` when loading takes more than 10.0s
- [x] Cancel timeout when `isLoading` argument is reset to false
- [ ] Allow passing more options (threshold for `isDelayed`)
- [ ] Find better variable names
- [ ] Testing

### useArray
Simplifies handling of array-states.  
Similar to native JS methods, but also enables resetting an array etc.

#### TODO
- [x] Push
- [x] Pop
- [x] Clear
- [x] Reset
- [x] Remove (by index)
- [ ] Remove (by value)
- [ ] Testing

### useLocalStorage
Mimics React's `useState` but persists the value to local storage.  
Has the same API as `useState`.

#### TODO
- [x] Allow initial value to be a function
- [x] Allow setState inline function
- [x] Persist across tabs
- [x] Typescript-ify
- [ ] Update state using custom event
- [ ] Maybe allow other storage solutions such as sessions storage
- [ ] Testing

### usePrevious
Returns the previous state. Used in conjuction with other hooks.

Also allows passing an inital value if something else than `undefined` is needed. For example `0: number` for a counter.

#### TODO
- [x] Write the code
- [x] Allow passing an initial value
- [x] Typescript-ify
- [ ] Testing

### useToggle
Handles toggling of a boolean value. Similar to useBoolean.

#### TODO
- [x] Write the code
- [x] Allow passing an initial value
- [ ] Testing

### useBoolean
Handles a boolean value with toggle and setValue-functions. Similar to useToggle.

#### TODO
- [ ] Write the code
- [ ] Allow passing an initial value
- [ ] Testing
  
### useHasMounted

Checks when components has mounted on client-side.

#### TODO
- [x] Write the code
- [ ] Testing

## Components

| Name            | Typescript  | Implemented
| :-------------- | :---------: | :---------:
| Box             | -           | -
| Button          | ❌          | 🔜
