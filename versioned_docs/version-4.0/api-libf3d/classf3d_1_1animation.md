# Class f3d::animation {/* #classf3d_1_1animation */}

![][C++]
![][public]

**Definition**: `animation.h` (line 18)

abstract to handle animation control in the libf3d

A class to control everything related to animation in the libf3d. It recovers information from the currently loaded files in the scene.

## Members

* [count](classf3d_1_1animation.md#classf3d_1_1animation_1aca59f60948672439293ac035d15c2cd4)
* [Direction](classf3d_1_1animation.md#classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0f)
* [getDirection](classf3d_1_1animation.md#classf3d_1_1animation_1a41bfe43215857beea27d820cf44a2324)
* [getKeyFrames](classf3d_1_1animation.md#classf3d_1_1animation_1a823964bbf7fe44e634ee2a8bef6b2581)
* [getName](classf3d_1_1animation.md#classf3d_1_1animation_1a0142fbe51c449d77e554c386c3ddda5c)
* [getNames](classf3d_1_1animation.md#classf3d_1_1animation_1acd324c47d769271fc0cab5b114b1dccf)
* [getTimeRange](classf3d_1_1animation.md#classf3d_1_1animation_1a6f428ec62766896f7d7bbe4682ac6d8c)
* [isPlaying](classf3d_1_1animation.md#classf3d_1_1animation_1a3f70e5baef249b1485eb3fe5f369ebcb)
* [loadTime](classf3d_1_1animation.md#classf3d_1_1animation_1aebb38dc30af716da9a612bb2e8717b73)
* [start](classf3d_1_1animation.md#classf3d_1_1animation_1a513c9a727de1276b92a048e04afca3a2)
* [stop](classf3d_1_1animation.md#classf3d_1_1animation_1a3356c55eea1cb273b86e7487f7db6b60)
* [toggle](classf3d_1_1animation.md#classf3d_1_1animation_1ae2f7929036501f3f8064ce1d8fa05e7d)

## Public types

### Enumeration type Direction {/* #classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0f */}

![][public]

**Definition**: `animation.h` (line 69)


```cpp
enum Direction {
  FORWARD,
  BACKWARD
}
```




Enumeration of animation direction.



#### Enumerator FORWARD {/* #classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0fabfec72bb37910c61f36b6c29a1f7ec31 */}





#### Enumerator BACKWARD {/* #classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0fa6377b4908ae38f9a57fe9120cf179eb1 */}





{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::Direction"}]}`
*/}

## Public functions

### Function loadTime {/* #classf3d_1_1animation_1aebb38dc30af716da9a612bb2e8717b73 */}

![][public]


```cpp
virtual animation & f3d::animation::loadTime(double timeValue)=0
```




Load files in the scene at provided time value if they contain any animation Providing a time value outside of the current animation time range will clamp to the closest value in the range. Does not do anything if there is no animations.



**Parameters**:

* double **timeValue**

**Return type**: [animation](classf3d_1_1animation.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::loadTime"}]}`
*/}

### Function getTimeRange {/* #classf3d_1_1animation_1a6f428ec62766896f7d7bbe4682ac6d8c */}

![][public]


```cpp
virtual std::pair< double, double > f3d::animation::getTimeRange()=0
```




Get animation time range of currently added files in the scene. Returns [0, 0] if there is no animations.



**Return type**: std::pair< double, double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::getTimeRange"}]}`
*/}

### Function getKeyFrames {/* #classf3d_1_1animation_1a823964bbf7fe44e634ee2a8bef6b2581 */}

![][public]


```cpp
virtual std::vector< double > f3d::animation::getKeyFrames()=0
```




Get animation key frame's time of currently added files. Can be used in loadTime to request a specific key frame. Returns empty vector if there is no animations.



**Return type**: std::vector< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::getKeyFrames"}]}`
*/}

### Function count {/* #classf3d_1_1animation_1aca59f60948672439293ac035d15c2cd4 */}

![][public]
![][const]


```cpp
virtual unsigned int f3d::animation::count() const =0
```




Return the number of animations available in the currently loaded files.



**Return type**: unsigned int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::count"}]}`
*/}

### Function getName {/* #classf3d_1_1animation_1a0142fbe51c449d77e554c386c3ddda5c */}

![][public]
![][const]


```cpp
virtual std::string f3d::animation::getName(std::optional< int > index=std::nullopt) const =0
```




Return the animation name of a given animation index, if any.





Specific animation (0..count): Returns the name of the animation at that index, or or current animation name if no index is provided.
* Returns the name of the current animation

* Returns "Multi animations" if more than one animation is current

* Returns "All animations" if all animations are current

* Returns "No animations" if no animations are current Fallback: Returns "No animation" for out-of-bounds requests.



**Parameters**:

* std::optional< int > **index** = std::nullopt 

**Return type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::getName"}]}`
*/}

### Function getNames {/* #classf3d_1_1animation_1acd324c47d769271fc0cab5b114b1dccf */}

![][public]
![][const]


```cpp
virtual std::vector< std::string > f3d::animation::getNames() const =0
```




Return all of the animation names, if any. Returns a vector of length 0 if none.



**Return type**: std::vector< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::getNames"}]}`
*/}

### Function toggle {/* #classf3d_1_1animation_1ae2f7929036501f3f8064ce1d8fa05e7d */}

![][public]


```cpp
virtual animation & f3d::animation::toggle(Direction direction=Direction::FORWARD)=0
```




Set the animation direction in the provided direction then toggle (start if stopped or stop is started) the animation.



**Parameters**:

* [Direction](classf3d_1_1animation.md#classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0f) **direction** = Direction::FORWARD 

**Return type**: [animation](classf3d_1_1animation.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::toggle"}]}`
*/}

### Function start {/* #classf3d_1_1animation_1a513c9a727de1276b92a048e04afca3a2 */}

![][public]


```cpp
virtual animation & f3d::animation::start(Direction direction=Direction::FORWARD)=0
```




Set the animation direction in the provided direction then start the animation if not already started.



**Parameters**:

* [Direction](classf3d_1_1animation.md#classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0f) **direction** = Direction::FORWARD 

**Return type**: [animation](classf3d_1_1animation.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::start"}]}`
*/}

### Function stop {/* #classf3d_1_1animation_1a3356c55eea1cb273b86e7487f7db6b60 */}

![][public]


```cpp
virtual animation & f3d::animation::stop()=0
```




Stop the animation if playing.



**Return type**: [animation](classf3d_1_1animation.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::stop"}]}`
*/}

### Function isPlaying {/* #classf3d_1_1animation_1a3f70e5baef249b1485eb3fe5f369ebcb */}

![][public]


```cpp
virtual bool f3d::animation::isPlaying()=0
```




Return if the animation is currently playing or not



**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::isPlaying"}]}`
*/}

### Function getDirection {/* #classf3d_1_1animation_1a41bfe43215857beea27d820cf44a2324 */}

![][public]


```cpp
virtual animation::Direction f3d::animation::getDirection()=0
```




Return the animation direction, default is Direction::FORWARD



**Return type**: [animation::Direction](classf3d_1_1animation.md#classf3d_1_1animation_1a0536166e8f37d1ba3cc1cf5c12f3db0f)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::animation::getDirection"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"animation_8h"},"children":[{"type":"text","text":"animation.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)