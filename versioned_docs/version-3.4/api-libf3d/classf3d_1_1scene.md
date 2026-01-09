# Class f3d::scene {#classf3d_1_1scene}

![][C++]
![][public]

**Definition**: `scene.h` (line 35)

Class to load files into.

The scene where files and meshes can be added and loaded into.





Example usage: 
```cpp
std::string path = ...
f3d::engine eng(f3d::window::Type::NATIVE);
f3d::scene& load = eng.getScene();

if (load.supports(path)
{
  load.add(path);
}
```

## Inner classes

* [f3d::scene::load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md)
* [f3d::scene::light\_exception](structf3d_1_1scene_1_1light__exception.md)

## Members

* [add](classf3d_1_1scene.md#classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a7bfb6563cbc4b43741141da059092c1f)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a19c696c7ab1b02655cc8598187c4b71c)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a0a57d92388317148755090a471f2e10c)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a981b64ee508c6a0882cbdf57a99b3bb4)
* [addLight](classf3d_1_1scene.md#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000)
* [animationTimeRange](classf3d_1_1scene.md#classf3d_1_1scene_1af6303bb8cd99ba35cf67c700d1550867)
* [availableAnimations](classf3d_1_1scene.md#classf3d_1_1scene_1ac9b41a495f0e8cf680d2511e3959ce6a)
* [clear](classf3d_1_1scene.md#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d)
* [getLight](classf3d_1_1scene.md#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2)
* [getLightCount](classf3d_1_1scene.md#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6)
* [loadAnimationTime](classf3d_1_1scene.md#classf3d_1_1scene_1ae225316a771e942f930ec61588201233)
* [removeAllLights](classf3d_1_1scene.md#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa)
* [removeLight](classf3d_1_1scene.md#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34)
* [supports](classf3d_1_1scene.md#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd)
* [updateLight](classf3d_1_1scene.md#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2)

## undefined

### Function add {#classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::filesystem::path &filePath)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

### Function add {#classf3d_1_1scene_1a7bfb6563cbc4b43741141da059092c1f}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::vector< std::filesystem::path > &filePath)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::vector< std::filesystem::path > & **filePath**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

### Function add {#classf3d_1_1scene_1a19c696c7ab1b02655cc8598187c4b71c}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::vector< std::string > &filePathStrings)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::vector< std::string > & **filePathStrings**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

## undefined

### Function add {#classf3d_1_1scene_1a0a57d92388317148755090a471f2e10c}

![][public]


```cpp
scene & f3d::scene::add(std::initializer_list< std::string > list)
```




Convenience initializer list signature for add method



**Parameters**:

* std::initializer_list< std::string > **list**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

### Function add {#classf3d_1_1scene_1a981b64ee508c6a0882cbdf57a99b3bb4}

![][public]


```cpp
scene & f3d::scene::add(std::initializer_list< std::filesystem::path > list)
```




Convenience initializer list signature for add method



**Parameters**:

* std::initializer_list< std::filesystem::path > **list**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

## Public functions

### Function add {#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4}

![][public]


```cpp
virtual scene & f3d::scene::add(const mesh_t &mesh)=0
```




Add and load provided mesh into the scene



**Parameters**:

* const [mesh\_t](structf3d_1_1mesh__t.md) & **mesh**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
-->

### Function clear {#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d}

![][public]


```cpp
virtual scene & f3d::scene::clear()=0
```




Clear the scene of all added files



**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::clear"}]}`
-->

### Function addLight {#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000}

![][public]
![][const]


```cpp
virtual int f3d::scene::addLight(const light_state_t &lightState) const =0
```




Add a light based on a light state, returns the index of the added light.



**Parameters**:

* const [light\_state\_t](structf3d_1_1light__state__t.md) & **lightState**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::addLight"}]}`
-->

### Function getLightCount {#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6}

![][public]
![][const]


```cpp
virtual int f3d::scene::getLightCount() const =0
```




Get the number of lights.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getLightCount"}]}`
-->

### Function getLight {#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2}

![][public]
![][const]


```cpp
virtual light_state_t f3d::scene::getLight(int index) const =0
```




Get the light state at provided index. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**

**Return type**: [light\_state\_t](structf3d_1_1light__state__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getLight"}]}`
-->

### Function updateLight {#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2}

![][public]


```cpp
virtual scene & f3d::scene::updateLight(int index, const light_state_t &lightState)=0
```




Update a light at provided index with the provided light state. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**
* const [light\_state\_t](structf3d_1_1light__state__t.md) & **lightState**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::updateLight"}]}`
-->

### Function removeLight {#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34}

![][public]


```cpp
virtual scene & f3d::scene::removeLight(int index)=0
```




Remove a light at provided index. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::removeLight"}]}`
-->

### Function removeAllLights {#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa}

![][public]


```cpp
virtual scene & f3d::scene::removeAllLights()=0
```




Remove all lights from the scene.



**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::removeAllLights"}]}`
-->

### Function supports {#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd}

![][public]


```cpp
virtual bool f3d::scene::supports(const std::filesystem::path &filePath)=0
```




Return true if provided file path is supported, false otherwise.



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::supports"}]}`
-->

### Function loadAnimationTime {#classf3d_1_1scene_1ae225316a771e942f930ec61588201233}

![][public]


```cpp
virtual scene & f3d::scene::loadAnimationTime(double timeValue)=0
```




Load added files at provided time value if they contain any animation Providing a timeVale outside of the current animationTimeRange will clamp to the closest value in the range. Does not do anything if there is no animations.



**Parameters**:

* double **timeValue**

**Return type**: [scene](classf3d_1_1scene.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::loadAnimationTime"}]}`
-->

### Function animationTimeRange {#classf3d_1_1scene_1af6303bb8cd99ba35cf67c700d1550867}

![][public]


```cpp
virtual std::pair< double, double > f3d::scene::animationTimeRange()=0
```




Get animation time range of currently added files. Returns [0, 0] if there is no animations.



**Return type**: std::pair< double, double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::animationTimeRange"}]}`
-->

### Function availableAnimations {#classf3d_1_1scene_1ac9b41a495f0e8cf680d2511e3959ce6a}

![][public]
![][const]


```cpp
virtual unsigned int f3d::scene::availableAnimations() const =0
```




Return the number of animations available in the currently loaded files.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::availableAnimations"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"scene_8h"},"children":[{"type":"text","text":"scene.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)