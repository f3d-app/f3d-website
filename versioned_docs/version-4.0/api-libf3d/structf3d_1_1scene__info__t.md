# Structure f3d::scene_info_t {/* #structf3d_1_1scene__info__t */}

![][C++]
![][public]

**Definition**: `types.h` (line 412)



Describe the contents of the scene, as returned by [scene::getSceneInfo](classf3d_1_1scene.md#classf3d_1_1scene_1a9b5d1f96c1ed46b083d470c1314c2226).

## Members

* [numberOfActors](structf3d_1_1scene__info__t.md#structf3d_1_1scene__info__t_1add59dcfc2d857fd009e84ad57ac749ad)
* [numberOfCells](structf3d_1_1scene__info__t.md#structf3d_1_1scene__info__t_1ac180dfc7e51f8db000861cc279dceb9d)
* [numberOfFiles](structf3d_1_1scene__info__t.md#structf3d_1_1scene__info__t_1a544e8c40ef94df9e6e68bb62581482ba)
* [numberOfPoints](structf3d_1_1scene__info__t.md#structf3d_1_1scene__info__t_1a85c9f2af6803f674fad71f2e9f2c77a5)
* [operator==](structf3d_1_1scene__info__t.md#structf3d_1_1scene__info__t_1a3a5dad25390828f076c3b0b3934c861e)

## Public attributes

### Variable numberOfFiles {/* #structf3d_1_1scene__info__t_1a544e8c40ef94df9e6e68bb62581482ba */}

![][public]

**Definition**: `types.h` (line 416)


```cpp
int f3d::scene_info_t::numberOfFiles = 0
```




Number of files in the scene, which counts every file added with [scene::add](classf3d_1_1scene.md#classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae) as well as every mesh and buffer added with it



**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene_info_t::numberOfFiles"}]}`
*/}

### Variable numberOfActors {/* #structf3d_1_1scene__info__t_1add59dcfc2d857fd009e84ad57ac749ad */}

![][public]

**Definition**: `types.h` (line 419)


```cpp
int f3d::scene_info_t::numberOfActors = 0
```


Number of actors in the scene.





**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene_info_t::numberOfActors"}]}`
*/}

### Variable numberOfPoints {/* #structf3d_1_1scene__info__t_1a85c9f2af6803f674fad71f2e9f2c77a5 */}

![][public]

**Definition**: `types.h` (line 422)


```cpp
std::int64_t f3d::scene_info_t::numberOfPoints = 0
```


Total number of points of all the actors in the scene.





**Type**: std::int64_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene_info_t::numberOfPoints"}]}`
*/}

### Variable numberOfCells {/* #structf3d_1_1scene__info__t_1ac180dfc7e51f8db000861cc279dceb9d */}

![][public]

**Definition**: `types.h` (line 425)


```cpp
std::int64_t f3d::scene_info_t::numberOfCells = 0
```


Total number of cells of all the actors in the scene.





**Type**: std::int64_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene_info_t::numberOfCells"}]}`
*/}

## Public functions

### Function operator== {/* #structf3d_1_1scene__info__t_1a3a5dad25390828f076c3b0b3934c861e */}

![][public]
![][const]


```cpp
bool f3d::scene_info_t::operator==(const scene_info_t &other) const
```








**Parameters**:

* const [scene\_info\_t](structf3d_1_1scene__info__t.md) & **other**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::scene_info_t::operator=="}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)