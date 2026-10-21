# Structure f3d::mesh_view::data_array_t {/* #structf3d_1_1mesh__view_1_1data__array__t */}

![][C++]
![][public]

**Definition**: `mesh\_view.h` (line 122)



Structure representing a view of an existing data array. `name` is optional but recommended for pointScalars and faceScalars. `data` pointer must remain valid while the mesh is used in the scene. `stride` is the number of elements (not bytes) to skip to get to the next tuple. If `timeDependent` is true, it means that the data in the array can change over time. Set it to false if the data in the array is constant over time, it can help improving performance.

## Members

* [components](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1ab258c2a2857a64f05a246aa59c5120ef)
* [data](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1ae8608a665d2f86941a762a4aada8d784)
* [name](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1a12d25c00d7dfa562e3fc8f47cd2a7f96)
* [stride](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1ae0d8d89fb82db2db6b911b639567cbbd)
* [timeDependent](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1ab171dfe3e7b1048bcf5a714f9185bd27)
* [type](structf3d_1_1mesh__view_1_1data__array__t.md#structf3d_1_1mesh__view_1_1data__array__t_1a9fd142a1f68ab7b6fa52b8060a9428b6)

## Public attributes

### Variable name {/* #structf3d_1_1mesh__view_1_1data__array__t_1a12d25c00d7dfa562e3fc8f47cd2a7f96 */}

![][public]

**Definition**: `mesh\_view.h` (line 124)


```cpp
std::string f3d::mesh_view::data_array_t::name
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::name"}]}`
*/}

### Variable type {/* #structf3d_1_1mesh__view_1_1data__array__t_1a9fd142a1f68ab7b6fa52b8060a9428b6 */}

![][public]

**Definition**: `mesh\_view.h` (line 125)


```cpp
data_type f3d::mesh_view::data_array_t::type = data_type::F32
```








**Type**: [data\_type](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::type"}]}`
*/}

### Variable data {/* #structf3d_1_1mesh__view_1_1data__array__t_1ae8608a665d2f86941a762a4aada8d784 */}

![][public]

**Definition**: `mesh\_view.h` (line 126)


```cpp
const void* f3d::mesh_view::data_array_t::data = nullptr
```








**Type**: const void *

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::data"}]}`
*/}

### Variable components {/* #structf3d_1_1mesh__view_1_1data__array__t_1ab258c2a2857a64f05a246aa59c5120ef */}

![][public]

**Definition**: `mesh\_view.h` (line 127)


```cpp
size_t f3d::mesh_view::data_array_t::components = 1
```








**Type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::components"}]}`
*/}

### Variable stride {/* #structf3d_1_1mesh__view_1_1data__array__t_1ae0d8d89fb82db2db6b911b639567cbbd */}

![][public]

**Definition**: `mesh\_view.h` (line 128)


```cpp
size_t f3d::mesh_view::data_array_t::stride = 1
```








**Type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::stride"}]}`
*/}

### Variable timeDependent {/* #structf3d_1_1mesh__view_1_1data__array__t_1ab171dfe3e7b1048bcf5a714f9185bd27 */}

![][public]

**Definition**: `mesh\_view.h` (line 129)


```cpp
bool f3d::mesh_view::data_array_t::timeDependent = true
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_array_t::timeDependent"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)