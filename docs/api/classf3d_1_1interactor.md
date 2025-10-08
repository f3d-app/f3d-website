# Class f3d::interactor

![][C++]
![][public]

**Definition**: `interactor.h` (line 68)

Class used to control interaction and animation.

A class to control interaction with the window as well as animation. It also provide a timer callback if needed and can record/play interaction file.

## Inner classes

* [f3d::interactor::already\_exists\_exception](structf3d_1_1interactor_1_1already__exists__exception.md)
* [f3d::interactor::command\_runtime\_exception](structf3d_1_1interactor_1_1command__runtime__exception.md)
* [f3d::interactor::does\_not\_exists\_exception](structf3d_1_1interactor_1_1does__not__exists__exception.md)
* [f3d::interactor::invalid\_args\_exception](structf3d_1_1interactor_1_1invalid__args__exception.md)

## Members

* [addBinding](classf3d_1_1interactor.md#classf3d_1_1interactor_1a623aa8e44854c1a9d6de1dd49ff39e64)
* [addBinding](classf3d_1_1interactor.md#classf3d_1_1interactor_1a6f3b7851d7a66b911f8084d220cf0e24)
* [addBinding](classf3d_1_1interactor.md#classf3d_1_1interactor_1a73af47683b6965382c3d7baa490d390a)
* [addCommand](classf3d_1_1interactor.md#classf3d_1_1interactor_1a15fd84bdc0bddae3cb4c3873e01c9e87)
* [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e)
* [command\_documentation\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a8b22627ae6305bfb27a1000ebdd21c09)
* [disableCameraMovement](classf3d_1_1interactor.md#classf3d_1_1interactor_1a07f159edfbb3907a7e72307de5043599)
* [documentation\_callback\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0)
* [enableCameraMovement](classf3d_1_1interactor.md#classf3d_1_1interactor_1afc9f9301857e092abf2d92e38a94915e)
* [getBindGroups](classf3d_1_1interactor.md#classf3d_1_1interactor_1a88e9812cf827a4b7aaf8ff9204fb014b)
* [getBindingDocumentation](classf3d_1_1interactor.md#classf3d_1_1interactor_1a51f4448cd8d473a36d5c8c47fc6c0c35)
* [getBindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1a2428ea38b7fe65eeaa925bdce4cefa17)
* [getBinds](classf3d_1_1interactor.md#classf3d_1_1interactor_1a1e1c1ce203738615db14c86b953a1b7b)
* [getBindsForGroup](classf3d_1_1interactor.md#classf3d_1_1interactor_1a1677a80780efb32ae5416244b911eed8)
* [getCommandActions](classf3d_1_1interactor.md#classf3d_1_1interactor_1a68f1196003c42ca6d3514ca4eacbfdbe)
* [initBindings](classf3d_1_1interactor.md#classf3d_1_1interactor_1a5c846fc542b9f211f62c657a9c9afc04)
* [initCommands](classf3d_1_1interactor.md#classf3d_1_1interactor_1a3a0fc5893095224be3345be17b4dc6dd)
* [InputAction](classf3d_1_1interactor.md#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204c)
* [InputModifier](classf3d_1_1interactor.md#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782ad)
* [isPlayingAnimation](classf3d_1_1interactor.md#classf3d_1_1interactor_1a4c1b56b4ec237630491274511a17fe8e)
* [MouseButton](classf3d_1_1interactor.md#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4)
* [playInteraction](classf3d_1_1interactor.md#classf3d_1_1interactor_1a1ed1405954d49fcee5e687a56cc83bf1)
* [recordInteraction](classf3d_1_1interactor.md#classf3d_1_1interactor_1a22d9604dde214323080fae5ab947e08b)
* [removeBinding](classf3d_1_1interactor.md#classf3d_1_1interactor_1a5ddd284c44e8522302e5154ab5f299ff)
* [removeCommand](classf3d_1_1interactor.md#classf3d_1_1interactor_1a358acbd4fa57a835d94b1ce0e6316986)
* [requestRender](classf3d_1_1interactor.md#classf3d_1_1interactor_1a12abd21c1a1fb5973e09633c877e2e7a)
* [start](classf3d_1_1interactor.md#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed)
* [startAnimation](classf3d_1_1interactor.md#classf3d_1_1interactor_1a34b132bcee0d069dc23f051f2d5b5a91)
* [stop](classf3d_1_1interactor.md#classf3d_1_1interactor_1ab8172c398e25b753a421e6b38f568539)
* [stopAnimation](classf3d_1_1interactor.md#classf3d_1_1interactor_1aa233327057f5ad0e0a8c278ed8aec8c8)
* [toggleAnimation](classf3d_1_1interactor.md#classf3d_1_1interactor_1aa4f9891117fb5758df61613ef7f8da30)
* [triggerCommand](classf3d_1_1interactor.md#classf3d_1_1interactor_1a20ab155181432751c7644b87490a1085)
* [triggerKeyboardKey](classf3d_1_1interactor.md#classf3d_1_1interactor_1a7a3b0e57d18d3cafcafe0d65c00d17cb)
* [triggerModUpdate](classf3d_1_1interactor.md#classf3d_1_1interactor_1aae1a76b389b65b8a9a19ef07fab11e8e)
* [triggerMouseButton](classf3d_1_1interactor.md#classf3d_1_1interactor_1a13f4308317204095482bbd3fe59efea1)
* [triggerMousePosition](classf3d_1_1interactor.md#classf3d_1_1interactor_1a8f6fe4e7a4daabecb9c7e0bb48640dc8)
* [triggerMouseWheel](classf3d_1_1interactor.md#classf3d_1_1interactor_1a3221678893461c3186a75861bef7bf33)
* [triggerTextCharacter](classf3d_1_1interactor.md#classf3d_1_1interactor_1af6f808f87468f7e99a5b351f5f09d99b)
* [WheelDirection](classf3d_1_1interactor.md#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6)

## Bindings

### Enumeration type BindingType {#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e}

![][public]

**Definition**: `interactor.h` (line 128)


```cpp
enum BindingType {
  CYCLIC = 0,
  NUMERICAL = 1,
  TOGGLE = 2,
  OTHER = 3
}
```




Enumeration of binding types. Duplication present in vtkext/private/module/vtkF3DUIActor.h.



#### Enumerator CYCLIC {#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9eab970fa647bc2f4761a80276428780061}





#### Enumerator NUMERICAL {#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9ea3a5e2d78492ca47b9db502227af9d76a}





#### Enumerator TOGGLE {#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9ea1252c45651289c0b553a30d27bb5ae9b}





#### Enumerator OTHER {#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9ea03570470bad94692ce93e32700d2e1cb}







### Typedef documentation\_callback\_t {#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0}

![][public]

**Definition**: `interactor.h` (line 122)


```cpp
using f3d::interactor::documentation_callback_t =  std::function<std::pair<std::string, std::string>()>
```




Enumeration of binding types. Duplication present in vtkext/private/module/vtkF3DUIActor.h.



**Return type**: std::function< std::pair< std::string, std::string >()>



### Function initBindings {#classf3d_1_1interactor_1a5c846fc542b9f211f62c657a9c9afc04}

![][public]


```cpp
virtual interactor & f3d::interactor::initBindings()=0
```




Remove all existing interaction commands and add all default bindings see INTERACTIONS.md for details.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function addBinding {#classf3d_1_1interactor_1a623aa8e44854c1a9d6de1dd49ff39e64}

![][public]


```cpp
virtual interactor & f3d::interactor::addBinding(const interaction_bind_t &bind, std::vector< std::string > commands, std::string group={}, documentation_callback_t documentationCallback=nullptr, BindingType type=BindingType::OTHER)=0
```




Use this method to add binding, in order to trigger commands for a specific bind





Bind modifiers is a binary flag from the dedicated enum that represent KeyModifiers. Bind interaction can be a pressed key symbol, eg: "C", or a dedicated key symbol for special keys: "Left", "Right", "Up", "Down", "Space", "Enter", "Escape", "Question".





group is an optional arg to group bindings together for better display of the documentation. Groups are kept in order of addition when recovered using `getBindGroups`. Bindings are kept in order of addition when recovered using `getBindsForGroup`.





documentationCallback is an optional function that returns a pair of string, the first is the doc itself, the second is the current value as a string, if any. Use `getBindingDocumentation` to access this doc.





type is an optional type of binding to provide, it can be used for presenting the binding in a coherent way in logs and cheatsheet.





When the corresponding bind happens, the provided commands will be triggered using triggerCommand. Considering checking if an interaction exists or removing it before adding it to avoid potential conflicts.





ANY modifier interactions will only be triggered if no other interaction bind with modifier is found.





Adding commands for an existing bind will throw a [interactor::already\_exists\_exception](structf3d_1_1interactor_1_1already__exists__exception.md).



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**
* std::vector< std::string > **commands**
* std::string **group** = {} 
* [documentation\_callback\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0) **documentationCallback** = nullptr 
* [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e) **type** = BindingType::OTHER 

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function addBinding {#classf3d_1_1interactor_1a6f3b7851d7a66b911f8084d220cf0e24}

![][public]


```cpp
virtual interactor & f3d::interactor::addBinding(const interaction_bind_t &bind, std::string command, std::string group={}, documentation_callback_t documentationCallback=nullptr, BindingType type=BindingType::OTHER)=0
```




See addBinding Convenience method to add a single command for an interaction, similar as `addBinding(bind, {command})`





Adding command for an existing bind will throw a [interactor::already\_exists\_exception](structf3d_1_1interactor_1_1already__exists__exception.md).



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**
* std::string **command**
* std::string **group** = {} 
* [documentation\_callback\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0) **documentationCallback** = nullptr 
* [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e) **type** = BindingType::OTHER 

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function addBinding {#classf3d_1_1interactor_1a73af47683b6965382c3d7baa490d390a}

![][public]


```cpp
interactor & f3d::interactor::addBinding(const interaction_bind_t &bind, std::initializer_list< std::string > list, std::string group={}, documentation_callback_t documentationCallback=nullptr, BindingType type=BindingType::OTHER)
```




Convenience initializer list signature for add binding method



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**
* std::initializer_list< std::string > **list**
* std::string **group** = {} 
* [documentation\_callback\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0) **documentationCallback** = nullptr 
* [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e) **type** = BindingType::OTHER 

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function removeBinding {#classf3d_1_1interactor_1a5ddd284c44e8522302e5154ab5f299ff}

![][public]


```cpp
virtual interactor & f3d::interactor::removeBinding(const interaction_bind_t &bind)=0
```




Remove binding corresponding to provided bind. Does not do anything if the provided bind does not exists.



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function getBindGroups {#classf3d_1_1interactor_1a88e9812cf827a4b7aaf8ff9204fb014b}

![][public]
![][const]


```cpp
virtual std::vector< std::string > f3d::interactor::getBindGroups() const =0
```




Return a vector of available bind groups, in order of addition



**Return type**: std::vector< std::string >



### Function getBindsForGroup {#classf3d_1_1interactor_1a1677a80780efb32ae5416244b911eed8}

![][public]
![][const]


```cpp
virtual std::vector< interaction_bind_t > f3d::interactor::getBindsForGroup(std::string group) const =0
```




Return a vector of bind for the specified group, in order of addition





Getting binds for a group that does not exists will throw a [does\_not\_exists\_exception](structf3d_1_1interactor_1_1does__not__exists__exception.md).



**Parameters**:

* std::string **group**

**Return type**: std::vector< [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) >



### Function getBinds {#classf3d_1_1interactor_1a1e1c1ce203738615db14c86b953a1b7b}

![][public]
![][const]


```cpp
virtual std::vector< interaction_bind_t > f3d::interactor::getBinds() const =0
```




Return a vector of all binds, in order of addition



**Return type**: std::vector< [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) >



### Function getBindingDocumentation {#classf3d_1_1interactor_1a51f4448cd8d473a36d5c8c47fc6c0c35}

![][public]
![][const]


```cpp
virtual std::pair< std::string, std::string > f3d::interactor::getBindingDocumentation(const interaction_bind_t &bind) const =0
```




Get a pair of string documenting a binding. The first string is the documentation of the binding, eg: "Toggle anti aliasing", "Print scene descr to terminal", "Decrease light intensity" The second string is the current value of the binding, eg: "OFF", "" if there is no value or "1.12". If a binding was not documented on addition, the provided strings will be empty. The possible string can depends on the bindings but boolean value are expected to be "ON", "OFF", "N/A" (for optional values).





Getting documentation for a bind that does not exists will throw a [does\_not\_exists\_exception](structf3d_1_1interactor_1_1does__not__exists__exception.md).



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**

**Return type**: std::pair< std::string, std::string >



## Forwarding input events

### Enumeration type MouseButton {#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4}

![][public]

**Definition**: `interactor.h` (line 266)


```cpp
enum MouseButton {
  LEFT,
  RIGHT,
  MIDDLE
}
```




Enumeration of supported mouse buttons.



#### Enumerator LEFT {#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4a684d325a7303f52e64011467ff5c5758}





#### Enumerator RIGHT {#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4a21507b40c80068eda19865706fdc2403}





#### Enumerator MIDDLE {#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4a43eedd8685eb86592022f8da962e3474}







### Enumeration type WheelDirection {#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6}

![][public]

**Definition**: `interactor.h` (line 276)


```cpp
enum WheelDirection {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT
}
```




Enumeration of supported mouse wheel directions.



#### Enumerator FORWARD {#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6abfec72bb37910c61f36b6c29a1f7ec31}





#### Enumerator BACKWARD {#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6a6377b4908ae38f9a57fe9120cf179eb1}





#### Enumerator LEFT {#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6a684d325a7303f52e64011467ff5c5758}





#### Enumerator RIGHT {#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6a21507b40c80068eda19865706fdc2403}







### Enumeration type InputAction {#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204c}

![][public]

**Definition**: `interactor.h` (line 287)


```cpp
enum InputAction {
  PRESS,
  RELEASE
}
```




Enumeration of supported input actions.



#### Enumerator PRESS {#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204ca93146f537356b7396d2f0413cf0bfc9e}





#### Enumerator RELEASE {#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204ca7d649ef069df9885e382417c79f3d5cd}







### Enumeration type InputModifier {#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782ad}

![][public]

**Definition**: `interactor.h` (line 296)


```cpp
enum InputModifier {
  NONE,
  CTRL,
  SHIFT,
  CTRL_SHIFT
}
```




Enumeration of supported input modifiers.



#### Enumerator NONE {#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782adab50339a10e1de285ac99d4c3990b8693}





#### Enumerator CTRL {#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782ada32f7eee2581c72a5561c21df3013a89a}





#### Enumerator SHIFT {#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782ada46afff2b309b8b16a46d812172a9235c}





#### Enumerator CTRL\_SHIFT {#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782adab99320973a4dd4f1f442037248dcaf8f}







### Function triggerModUpdate {#classf3d_1_1interactor_1aae1a76b389b65b8a9a19ef07fab11e8e}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerModUpdate(InputModifier mod)=0
```




Trigger a modifier update. This will update the internal modifier state of the interactor to match the provided one.



**Parameters**:

* [InputModifier](classf3d_1_1interactor.md#classf3d_1_1interactor_1a6b7cf5f64ee8812854766738325782ad) **mod**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function triggerMouseButton {#classf3d_1_1interactor_1a13f4308317204095482bbd3fe59efea1}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerMouseButton(InputAction action, MouseButton button)=0
```




Trigger a mouse button event. This will trigger the corresponding mouse button press or release event.



**Parameters**:

* [InputAction](classf3d_1_1interactor.md#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204c) **action**
* [MouseButton](classf3d_1_1interactor.md#classf3d_1_1interactor_1a139b5304356e4ec448c1a2f0b30f5ca4) **button**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function triggerMousePosition {#classf3d_1_1interactor_1a8f6fe4e7a4daabecb9c7e0bb48640dc8}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerMousePosition(double xpos, double ypos)=0
```




Trigger a mouse new position event. Positions are in window coordinates, with (0, 0) being the top-left corner. The coordinates are expressed in pixels.



**Parameters**:

* double **xpos**
* double **ypos**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function triggerMouseWheel {#classf3d_1_1interactor_1a3221678893461c3186a75861bef7bf33}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerMouseWheel(WheelDirection direction)=0
```




Trigger a mouse wheel event. At the moment, only vertical wheel events are observed, but it can change in the future.



**Parameters**:

* [WheelDirection](classf3d_1_1interactor.md#classf3d_1_1interactor_1adebcd9542f77a81f07c4bce98dfa73e6) **direction**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function triggerKeyboardKey {#classf3d_1_1interactor_1a7a3b0e57d18d3cafcafe0d65c00d17cb}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerKeyboardKey(InputAction action, std::string_view keySym)=0
```




Trigger a keyboard key event. This is based on X11 key symbols, it's hard to list all of them, but here are a few:
* "A", "B", "C", ..., "Z" for letters

* "0", "1", "2", ..., "9" for numbers

* "Left", "Right", "Up", "Down" for arrow keys

* "Space", "Return", "Escape", "Tab", "BackSpace" for common keys

* "F1", "F2", ..., "F25" for function keys

* "KP_0", "KP_1", ..., "KP_9" for numpad keys 
?> It's possible to run F3D application in verbose mode and press keys to print their symbols.



**Parameters**:

* [InputAction](classf3d_1_1interactor.md#classf3d_1_1interactor_1a5c52dc4bedb695d4853b843a3257204c) **action**
* std::string_view **keySym**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function triggerTextCharacter {#classf3d_1_1interactor_1af6f808f87468f7e99a5b351f5f09d99b}

![][public]


```cpp
virtual interactor & f3d::interactor::triggerTextCharacter(unsigned int codepoint)=0
```




Trigger a text character input event. This will trigger the corresponding character input event, with the codepoint being the Unicode codepoint of the character. It's used for text input, like when typing in a the console input field.



**Parameters**:

* unsigned int **codepoint**

**Return type**: [interactor](classf3d_1_1interactor.md) &



## Command

### Typedef command\_documentation\_t {#classf3d_1_1interactor_1a8b22627ae6305bfb27a1000ebdd21c09}

![][public]

**Definition**: `interactor.h` (line 72)


```cpp
using f3d::interactor::command_documentation_t =  std::pair<std::string, std::string>
```




Remove all existing commands and add all default commands, see COMMANDS.md for details.



**Return type**: std::pair< std::string, std::string >



### Function initCommands {#classf3d_1_1interactor_1a3a0fc5893095224be3345be17b4dc6dd}

![][public]


```cpp
virtual interactor & f3d::interactor::initCommands()=0
```




Remove all existing commands and add all default commands, see COMMANDS.md for details.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function addCommand {#classf3d_1_1interactor_1a15fd84bdc0bddae3cb4c3873e01c9e87}

![][public]


```cpp
virtual interactor & f3d::interactor::addCommand(const std::string &action, std::function< void(const std::vector< std::string > &)> callback, std::optional< command_documentation_t > doc=std::nullopt, std::function< std::vector< std::string >(const std::vector< std::string > &)> completionCallback=nullptr)=0
```




Use this method to add a command to be called using triggerCommand. Adding a command with an already existing action throw a [interactor::already\_exists\_exception](structf3d_1_1interactor_1_1already__exists__exception.md). Considering namespacing dedicated action to avoid conflicts with default action, eg: `my_app::action`



**Parameters**:

* const std::string & **action**
* std::function< void(const std::vector< std::string > &)> **callback**
* std::optional< [command\_documentation\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a8b22627ae6305bfb27a1000ebdd21c09) > **doc** = std::nullopt 
* std::function< std::vector< std::string >(const std::vector< std::string > &)> **completionCallback** = nullptr 

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function removeCommand {#classf3d_1_1interactor_1a358acbd4fa57a835d94b1ce0e6316986}

![][public]


```cpp
virtual interactor & f3d::interactor::removeCommand(const std::string &action)=0
```




Remove a command for provided action, does not do anything if it does not exists.



**Parameters**:

* const std::string & **action**

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function getCommandActions {#classf3d_1_1interactor_1a68f1196003c42ca6d3514ca4eacbfdbe}

![][public]
![][const]


```cpp
virtual std::vector< std::string > f3d::interactor::getCommandActions() const =0
```




Return a string vector containing all currently defined actions of commands



**Return type**: std::vector< std::string >



### Function triggerCommand {#classf3d_1_1interactor_1a20ab155181432751c7644b87490a1085}

![][public]


```cpp
virtual bool f3d::interactor::triggerCommand(std::string_view command, bool keepComments=true)=0
```




Trigger provided command, see COMMANDS.md for details about supported commands and syntax.





If the command fails, it prints a debug log explaining why.





When keepComments argument is true, comments are supported with `#`, any characters after are ignored otherwise '#' and any characters after will be handled as standard character





Return true if the command succeeded, false otherwise. Throw an [interactor::command\_runtime\_exception](structf3d_1_1interactor_1_1command__runtime__exception.md) if the command callback throw an unrecognized exception. Note that default commands will never throw this exception, but adding commands without exception catching may trigger this behavior.



**Parameters**:

* std::string_view **command**
* bool **keepComments** = true 

**Return type**: bool



## Animation

### Function toggleAnimation {#classf3d_1_1interactor_1aa4f9891117fb5758df61613ef7f8da30}

![][public]


```cpp
virtual interactor & f3d::interactor::toggleAnimation()=0
```




Control the animation.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function startAnimation {#classf3d_1_1interactor_1a34b132bcee0d069dc23f051f2d5b5a91}

![][public]


```cpp
virtual interactor & f3d::interactor::startAnimation()=0
```




Control the animation.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function stopAnimation {#classf3d_1_1interactor_1aa233327057f5ad0e0a8c278ed8aec8c8}

![][public]


```cpp
virtual interactor & f3d::interactor::stopAnimation()=0
```




Control the animation.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function isPlayingAnimation {#classf3d_1_1interactor_1a4c1b56b4ec237630491274511a17fe8e}

![][public]


```cpp
virtual bool f3d::interactor::isPlayingAnimation()=0
```




Control the animation.



**Return type**: bool



## Movement

### Function enableCameraMovement {#classf3d_1_1interactor_1afc9f9301857e092abf2d92e38a94915e}

![][public]


```cpp
virtual interactor & f3d::interactor::enableCameraMovement()=0
```




Control if camera movements are enabled, which they are by default.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function disableCameraMovement {#classf3d_1_1interactor_1a07f159edfbb3907a7e72307de5043599}

![][public]


```cpp
virtual interactor & f3d::interactor::disableCameraMovement()=0
```




Control if camera movements are enabled, which they are by default.



**Return type**: [interactor](classf3d_1_1interactor.md) &



## Public functions

### Function getBindingType {#classf3d_1_1interactor_1a2428ea38b7fe65eeaa925bdce4cefa17}

![][public]
![][const]


```cpp
virtual BindingType f3d::interactor::getBindingType(const interaction_bind_t &bind) const =0
```




Get the type of a binding.





Getting type for a bind that does not exists will throw a [does\_not\_exists\_exception](structf3d_1_1interactor_1_1does__not__exists__exception.md).



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**

**Return type**: [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e)



### Function playInteraction {#classf3d_1_1interactor_1a1ed1405954d49fcee5e687a56cc83bf1}

![][public]


```cpp
virtual bool f3d::interactor::playInteraction(const std::filesystem::path &file, double deltaTime=1.0/30, std::function< void()> userCallBack=nullptr)=0
```




Play a VTK interaction file. Provided file path is used as is and file existence will be checked. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop



**Parameters**:

* const std::filesystem::path & **file**
* double **deltaTime** = 1.0/30 
* std::function< void()> **userCallBack** = nullptr 

**Return type**: bool



### Function recordInteraction {#classf3d_1_1interactor_1a22d9604dde214323080fae5ab947e08b}

![][public]


```cpp
virtual bool f3d::interactor::recordInteraction(const std::filesystem::path &file)=0
```




Start interaction and record it all in a VTK interaction file. Provided file path will be used as is and the parent directories of the file will be created



**Parameters**:

* const std::filesystem::path & **file**

**Return type**: bool



### Function start {#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed}

![][public]


```cpp
virtual interactor & f3d::interactor::start(double deltaTime=1.0/30, std::function< void()> userCallBack=nullptr)=0
```




Start the interactor event loop. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop



**Parameters**:

* double **deltaTime** = 1.0/30 
* std::function< void()> **userCallBack** = nullptr 

**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function stop {#classf3d_1_1interactor_1ab8172c398e25b753a421e6b38f568539}

![][public]


```cpp
virtual interactor & f3d::interactor::stop()=0
```




Stop the interactor.



**Return type**: [interactor](classf3d_1_1interactor.md) &



### Function requestRender {#classf3d_1_1interactor_1a12abd21c1a1fb5973e09633c877e2e7a}

![][public]


```cpp
virtual interactor & f3d::interactor::requestRender()=0
```




Request a render to be done on the next event loop Safe to call in a multithreaded environment



**Return type**: [interactor](classf3d_1_1interactor.md) &





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)