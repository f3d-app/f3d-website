# Structure f3d::mesh_view::memory_view_t {/* #structf3d_1_1mesh__view_1_1memory__view__t */}

![][C++]
![][public]

**Definition**: `mesh\_view.h` (line 160)



Structure representing a view of the mesh in memory at a given time. The pointers provided in this structure must remain valid once the mesh is added to the scene. Will throw a load_failure_exception if any of this assumptions is not respected:
* points must have a 3 components and a data type of F32 or F64

* normals can be empty or must have a 3 components and a data type of F32 or F64

* texture_coordinates can be empty or must have a 2 components and a data type of F32 or F64

## Members

* [cellScalars](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a20fdd5e8a48070691fd8e005ed4c5f5c)
* [lines](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1aa702a73fb8b189e14d5873cba9965d30)
* [normals](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a46c2633f80e81e78b58ef4e17fc333a7)
* [pointCount](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a7afc582d67b950f80855a43c1dc9ce12)
* [points](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a5d6c8cc16e84aa99acabe4778eb894c1)
* [pointScalars](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1acf5ddc574e7641ea00873c29ed2787d7)
* [polygons](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a716279948b9bcc623755a8828d6cb223)
* [textureCoordinates](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1acb7bdd81a4cda748990426571d6b608c)
* [vertices](structf3d_1_1mesh__view_1_1memory__view__t.md#structf3d_1_1mesh__view_1_1memory__view__t_1a1d3ef942fc6e5c5d48d2c256bf1b9f24)

## Public attributes

### Variable pointCount {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a7afc582d67b950f80855a43c1dc9ce12 */}

![][public]

**Definition**: `mesh\_view.h` (line 163)


```cpp
size_t f3d::mesh_view::memory_view_t::pointCount = 0
```








**Type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::pointCount"}]}`
*/}

### Variable points {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a5d6c8cc16e84aa99acabe4778eb894c1 */}

![][public]

**Definition**: `mesh\_view.h` (line 164)


```cpp
data_array_t f3d::mesh_view::memory_view_t::points
```








**Type**: [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::points"}]}`
*/}

### Variable normals {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a46c2633f80e81e78b58ef4e17fc333a7 */}

![][public]

**Definition**: `mesh\_view.h` (line 165)


```cpp
data_array_t f3d::mesh_view::memory_view_t::normals
```








**Type**: [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::normals"}]}`
*/}

### Variable textureCoordinates {/* #structf3d_1_1mesh__view_1_1memory__view__t_1acb7bdd81a4cda748990426571d6b608c */}

![][public]

**Definition**: `mesh\_view.h` (line 166)


```cpp
data_array_t f3d::mesh_view::memory_view_t::textureCoordinates
```








**Type**: [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::textureCoordinates"}]}`
*/}

### Variable vertices {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a1d3ef942fc6e5c5d48d2c256bf1b9f24 */}

![][public]

**Definition**: `mesh\_view.h` (line 169)


```cpp
cell_array_t f3d::mesh_view::memory_view_t::vertices
```








**Type**: [cell\_array\_t](structf3d_1_1mesh__view_1_1cell__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::vertices"}]}`
*/}

### Variable lines {/* #structf3d_1_1mesh__view_1_1memory__view__t_1aa702a73fb8b189e14d5873cba9965d30 */}

![][public]

**Definition**: `mesh\_view.h` (line 170)


```cpp
cell_array_t f3d::mesh_view::memory_view_t::lines
```








**Type**: [cell\_array\_t](structf3d_1_1mesh__view_1_1cell__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::lines"}]}`
*/}

### Variable polygons {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a716279948b9bcc623755a8828d6cb223 */}

![][public]

**Definition**: `mesh\_view.h` (line 171)


```cpp
cell_array_t f3d::mesh_view::memory_view_t::polygons
```








**Type**: [cell\_array\_t](structf3d_1_1mesh__view_1_1cell__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::polygons"}]}`
*/}

### Variable pointScalars {/* #structf3d_1_1mesh__view_1_1memory__view__t_1acf5ddc574e7641ea00873c29ed2787d7 */}

![][public]

**Definition**: `mesh\_view.h` (line 174)


```cpp
std::vector<data_array_t> f3d::mesh_view::memory_view_t::pointScalars
```








**Type**: std::vector< [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::pointScalars"}]}`
*/}

### Variable cellScalars {/* #structf3d_1_1mesh__view_1_1memory__view__t_1a20fdd5e8a48070691fd8e005ed4c5f5c */}

![][public]

**Definition**: `mesh\_view.h` (line 175)


```cpp
std::vector<data_array_t> f3d::mesh_view::memory_view_t::cellScalars
```








**Type**: std::vector< [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::memory_view_t::cellScalars"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)