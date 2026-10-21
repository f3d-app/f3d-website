# Structure f3d::interactor::BindingParam {/* #structf3d_1_1interactor_1_1BindingParam */}

![][C++]
![][public]

**Definition**: `interactor.h` (line 169)



Parameter shape for calls to addBinding(...).





Bind modifiers is a binary flag from the dedicated enum that represent KeyModifiers. Bind interaction can be a pressed key symbol, eg: "C", or a dedicated key symbol for special keys: "Left", "Right", "Up", "Down", "Space", "Enter", "Escape", "Question".





Command is the action to perform when this binding is triggered.





Group is an optional arg to group bindings together for better display of the documentation.





DocumentationCallback is an optional function that returns a pair of string, the first is the doc itself, the second is the current value as a string, if any.





Type is an optional type of binding to provide, it can be used for presenting the binding in a coherent way in logs and cheatsheet.





If notify is true, a notification is triggered when pressing the binding.





If repeat is true, the binding is applied repeatedly when holding down the key.

## Members

* [Bind](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1abe07072b0d186089ccf04f70a1ac44f4)
* [Commands](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1a28d4a200f0ac6214d8e2106190fae091)
* [DocCallback](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1a56214a75538320e466fe798b2694ac19)
* [Group](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1a349da3f77f64caf3993f99ec35a9cb44)
* [Notify](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1ab5cc9bd728b4f6607a031ad8dc433e94)
* [Repeat](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1a2d33ed93c046a95c6876a98322699aef)
* [Type](structf3d_1_1interactor_1_1BindingParam.md#structf3d_1_1interactor_1_1BindingParam_1a299315d6097d6fd5218af44d5eda2b48)

## Public attributes

### Variable Bind {/* #structf3d_1_1interactor_1_1BindingParam_1abe07072b0d186089ccf04f70a1ac44f4 */}

![][public]

**Definition**: `interactor.h` (line 171)


```cpp
interaction_bind_t f3d::interactor::BindingParam::Bind
```








**Type**: [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Bind"}]}`
*/}

### Variable Commands {/* #structf3d_1_1interactor_1_1BindingParam_1a28d4a200f0ac6214d8e2106190fae091 */}

![][public]

**Definition**: `interactor.h` (line 172)


```cpp
std::vector<std::string> f3d::interactor::BindingParam::Commands
```








**Type**: std::vector< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Commands"}]}`
*/}

### Variable Group {/* #structf3d_1_1interactor_1_1BindingParam_1a349da3f77f64caf3993f99ec35a9cb44 */}

![][public]

**Definition**: `interactor.h` (line 173)


```cpp
std::string f3d::interactor::BindingParam::Group = {}
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Group"}]}`
*/}

### Variable DocCallback {/* #structf3d_1_1interactor_1_1BindingParam_1a56214a75538320e466fe798b2694ac19 */}

![][public]

**Definition**: `interactor.h` (line 174)


```cpp
documentation_callback_t f3d::interactor::BindingParam::DocCallback = nullptr
```








**Type**: [documentation\_callback\_t](classf3d_1_1interactor.md#classf3d_1_1interactor_1a0da4a08de781bf1594885d5e47f3bad0)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::DocCallback"}]}`
*/}

### Variable Type {/* #structf3d_1_1interactor_1_1BindingParam_1a299315d6097d6fd5218af44d5eda2b48 */}

![][public]

**Definition**: `interactor.h` (line 175)


```cpp
BindingType f3d::interactor::BindingParam::Type = BindingType::OTHER
```








**Type**: [BindingType](classf3d_1_1interactor.md#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Type"}]}`
*/}

### Variable Notify {/* #structf3d_1_1interactor_1_1BindingParam_1ab5cc9bd728b4f6607a031ad8dc433e94 */}

![][public]

**Definition**: `interactor.h` (line 176)


```cpp
bool f3d::interactor::BindingParam::Notify = true
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Notify"}]}`
*/}

### Variable Repeat {/* #structf3d_1_1interactor_1_1BindingParam_1a2d33ed93c046a95c6876a98322699aef */}

![][public]

**Definition**: `interactor.h` (line 177)


```cpp
bool f3d::interactor::BindingParam::Repeat = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::interactor::BindingParam::Repeat"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)