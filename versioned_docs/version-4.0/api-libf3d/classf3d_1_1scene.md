# Class f3d::scene {/* #classf3d_1_1scene */}

![][C++]
![][public]

**Definition**: `scene.h` (line 46)

Class to load files into.

The scene where files and meshes can be added and loaded into.





Example usage: 
```cpp
std::string path = ...
f3d::engine eng(f3d::window::Type::NATIVE);
f3d::scene& load = eng.getScene();

if (load.supports(path) == file_availability::SUPPORTED)
{
  load.add(path);
}
```

## Inner classes

* [f3d::scene::load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md)
* [f3d::scene::light\_exception](structf3d_1_1scene_1_1light__exception.md)
* [f3d::scene::node\_exception](structf3d_1_1scene_1_1node__exception.md)

## Members

* [add](classf3d_1_1scene.md#classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a7bfb6563cbc4b43741141da059092c1f)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a19c696c7ab1b02655cc8598187c4b71c)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1ac2ba0c4b2aca727775b462a500a6b562)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1ab70ea40d189299d4b7f2e756fb49de4a)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a0a57d92388317148755090a471f2e10c)
* [add](classf3d_1_1scene.md#classf3d_1_1scene_1a981b64ee508c6a0882cbdf57a99b3bb4)
* [addLight](classf3d_1_1scene.md#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000)
* [clear](classf3d_1_1scene.md#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d)
* [getAddedFiles](classf3d_1_1scene.md#classf3d_1_1scene_1a8bf2ce652786b4a0bfb5b740d6c39edd)
* [getAnimation](classf3d_1_1scene.md#classf3d_1_1scene_1a8dee3219810a8782719c1fca171f1ed0)
* [getLight](classf3d_1_1scene.md#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2)
* [getLightCount](classf3d_1_1scene.md#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6)
* [getSceneHierarchy](classf3d_1_1scene.md#classf3d_1_1scene_1a616c8e5693333cd50d5f506f9859dcd4)
* [getSceneInfo](classf3d_1_1scene.md#classf3d_1_1scene_1a9b5d1f96c1ed46b083d470c1314c2226)
* [removeAllLights](classf3d_1_1scene.md#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa)
* [removeLight](classf3d_1_1scene.md#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34)
* [setNodeVisibility](classf3d_1_1scene.md#classf3d_1_1scene_1a9841b1e3b7aea372f3f773b83aaf269b)
* [supports](classf3d_1_1scene.md#classf3d_1_1scene_1a0944758bc50d993112dd816b6414efc7)
* [updateLight](classf3d_1_1scene.md#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2)

## undefined

### Function add {/* #classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae */}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::filesystem::path &filePath)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function add {/* #classf3d_1_1scene_1a7bfb6563cbc4b43741141da059092c1f */}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::vector< std::filesystem::path > &filePath)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::vector< std::filesystem::path > & **filePath**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function add {/* #classf3d_1_1scene_1a19c696c7ab1b02655cc8598187c4b71c */}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::vector< std::string > &filePathStrings)=0
```




Add and load provided files into the scene Already added file will NOT be reloaded If it fails to loads a file, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::vector< std::string > & **filePathStrings**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

## undefined

### Function add {/* #classf3d_1_1scene_1a0a57d92388317148755090a471f2e10c */}

![][public]


```cpp
scene & f3d::scene::add(std::initializer_list< std::string > list)
```




Convenience initializer list signature for add method



**Parameters**:

* std::initializer_list< std::string > **list**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function add {/* #classf3d_1_1scene_1a981b64ee508c6a0882cbdf57a99b3bb4 */}

![][public]


```cpp
scene & f3d::scene::add(std::initializer_list< std::filesystem::path > list)
```




Convenience initializer list signature for add method



**Parameters**:

* std::initializer_list< std::filesystem::path > **list**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

## Public functions

### Function add {/* #classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4 */}

![][public]


```cpp
virtual scene & f3d::scene::add(const mesh_t &mesh)=0
```




Add and load provided mesh into the scene If it fails to load the mesh, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const [mesh\_t](structf3d_1_1mesh__t.md) & **mesh**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function add {/* #classf3d_1_1scene_1ac2ba0c4b2aca727775b462a500a6b562 */}

![][public]


```cpp
virtual scene & f3d::scene::add(std::shared_ptr< mesh_view > mesh)=0
```




Add and load provided mesh view into the scene Requires VTK >= 9.6 If it fails to load the mesh, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* std::shared_ptr< [mesh\_view](classf3d_1_1mesh__view.md) > **mesh**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function add {/* #classf3d_1_1scene_1ab70ea40d189299d4b7f2e756fb49de4a */}

![][public]


```cpp
virtual scene & f3d::scene::add(const std::byte *buffer, std::size_t size)=0
```




Add and load provided buffer into the scene as it was file. Automatically picks the right reader to use, unless you use VTK < 9.6.20260128, then it requires the use of `scene.force_reader`. If it fails to loads the buffer, it clears the scene and throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md). On other failures, throw a [load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md).



**Parameters**:

* const std::byte * **buffer**
* std::size_t **size**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::add"}]}`
*/}

### Function clear {/* #classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d */}

![][public]


```cpp
virtual scene & f3d::scene::clear()=0
```




Clear the scene of all added files



**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::clear"}]}`
*/}

### Function getAddedFiles {/* #classf3d_1_1scene_1a8bf2ce652786b4a0bfb5b740d6c39edd */}

![][public]
![][const]


```cpp
virtual std::vector< std::filesystem::path > f3d::scene::getAddedFiles() const =0
```




Return the list of files added to the scene through the path-based add methods, in the order they were provided. Meshes added through the mesh, mesh view or buffer based add methods are not listed.



**Return type**: std::vector< std::filesystem::path >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getAddedFiles"}]}`
*/}

### Function addLight {/* #classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000 */}

![][public]
![][const]


```cpp
virtual int f3d::scene::addLight(const light_state_t &lightState) const =0
```




Add a light based on a light state, returns the index of the added light.



**Parameters**:

* const [light\_state\_t](structf3d_1_1light__state__t.md) & **lightState**

**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::addLight"}]}`
*/}

### Function getLightCount {/* #classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6 */}

![][public]
![][const]


```cpp
virtual int f3d::scene::getLightCount() const =0
```




Get the number of lights.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getLightCount"}]}`
*/}

### Function getLight {/* #classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2 */}

![][public]
![][const]


```cpp
virtual light_state_t f3d::scene::getLight(int index) const =0
```




Get the light state at provided index. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**

**Return type**: [light\_state\_t](structf3d_1_1light__state__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getLight"}]}`
*/}

### Function updateLight {/* #classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2 */}

![][public]


```cpp
virtual scene & f3d::scene::updateLight(int index, const light_state_t &lightState)=0
```




Update a light at provided index with the provided light state. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**
* const [light\_state\_t](structf3d_1_1light__state__t.md) & **lightState**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::updateLight"}]}`
*/}

### Function removeLight {/* #classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34 */}

![][public]


```cpp
virtual scene & f3d::scene::removeLight(int index)=0
```




Remove a light at provided index. [light\_exception](structf3d_1_1scene_1_1light__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **index**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::removeLight"}]}`
*/}

### Function removeAllLights {/* #classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa */}

![][public]


```cpp
virtual scene & f3d::scene::removeAllLights()=0
```




Remove all lights from the scene.



**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::removeAllLights"}]}`
*/}

### Function getSceneHierarchy {/* #classf3d_1_1scene_1a616c8e5693333cd50d5f506f9859dcd4 */}

![][public]
![][const]


```cpp
virtual std::vector< node_state_t > f3d::scene::getSceneHierarchy() const =0
```




Return the scene hierarchy of all added files as a flat vector, in depth-first pre-order, so that a parent node always precedes its children. Returns an empty vector if the scene is empty.



**Return type**: std::vector< [node\_state\_t](structf3d_1_1node__state__t.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getSceneHierarchy"}]}`
*/}

### Function setNodeVisibility {/* #classf3d_1_1scene_1a9841b1e3b7aea372f3f773b83aaf269b */}

![][public]


```cpp
virtual scene & f3d::scene::setNodeVisibility(int nodeId, bool visible)=0
```




Set the visibility of the node at provided index and of all the nodes in its subtree. See types::node_state_t documentation for more information. [node\_exception](structf3d_1_1scene_1_1node__exception.md) is thrown if the index is invalid.



**Parameters**:

* int **nodeId**
* bool **visible**

**Return type**: [scene](classf3d_1_1scene.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::setNodeVisibility"}]}`
*/}

### Function getSceneInfo {/* #classf3d_1_1scene_1a9b5d1f96c1ed46b083d470c1314c2226 */}

![][public]
![][const]


```cpp
virtual scene_info_t f3d::scene::getSceneInfo() const =0
```




Return information about the contents of the scene, eg. its number of points and cells. See types::scene_info_t documentation for more information. Returns zeroed counters if the scene is empty.



**Return type**: [scene\_info\_t](structf3d_1_1scene__info__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getSceneInfo"}]}`
*/}

### Function supports {/* #classf3d_1_1scene_1a0944758bc50d993112dd816b6414efc7 */}

![][public]


```cpp
virtual file_availability f3d::scene::supports(const std::filesystem::path &filePath)=0
```




Return enum file_availability which indicates if the file at the specified path has supported extension, unsupported extension or unsupported content. content validation is only performed with VTK >= 9.6.20260228. Setting scene.skip_content_check to true disables content validation. scene.force_reader is taken into account and plugin should be loaded for their readers to be found.



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: file_availability

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::supports"}]}`
*/}

### Function getAnimation {/* #classf3d_1_1scene_1a8dee3219810a8782719c1fca171f1ed0 */}

![][public]


```cpp
virtual animation & f3d::scene::getAnimation()=0
```




Get the animation available on the scene.



**Return type**: [animation](classf3d_1_1animation.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene::getAnimation"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"scene_8h"},"children":[{"type":"text","text":"scene.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)