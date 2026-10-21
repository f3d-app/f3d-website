# Structure f3d::mesh_view::cell_array_t {/* #structf3d_1_1mesh__view_1_1cell__array__t */}

![][C++]
![][public]

**Definition**: `mesh\_view.h` (line 144)



Structure representing a cell array. For vertices and lines, `offsets` encodes the size of the polyvertex and polylines group respectively. For polygons, `offsets` encodes the size of each polygons (number of vertices per face). `offsetCount` must be equal to the number of cells + 1, and the last value in `offsets` must be equal to `indexCount`. If `offsetCount` is 1, it means that there is no cell. Will throw a load_failure_exception if any of this assumptions is not respected:
* offsetCount is less than 1

* offsets can be empty or must have 1 component and a data type of I32, U32, I64, or U64

* indices can be empty or must have 1 component and a data type of I32, U32, I64, or U64

* offsets and indices must have the same data type

## Members

* [indexCount](structf3d_1_1mesh__view_1_1cell__array__t.md#structf3d_1_1mesh__view_1_1cell__array__t_1acefee3a23cacfed2bf3bd6e1fce1b6ff)
* [indices](structf3d_1_1mesh__view_1_1cell__array__t.md#structf3d_1_1mesh__view_1_1cell__array__t_1ab733ae80da4e07aca5de3b1add431ecf)
* [offsetCount](structf3d_1_1mesh__view_1_1cell__array__t.md#structf3d_1_1mesh__view_1_1cell__array__t_1a5d3621e4a39a4c34ce9c95a71ad02e61)
* [offsets](structf3d_1_1mesh__view_1_1cell__array__t.md#structf3d_1_1mesh__view_1_1cell__array__t_1a17153e73d609fcd0a27aa8a5a00d4791)

## Public attributes

### Variable offsetCount {/* #structf3d_1_1mesh__view_1_1cell__array__t_1a5d3621e4a39a4c34ce9c95a71ad02e61 */}

![][public]

**Definition**: `mesh\_view.h` (line 146)


```cpp
size_t f3d::mesh_view::cell_array_t::offsetCount = 1
```








**Type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::cell_array_t::offsetCount"}]}`
*/}

### Variable offsets {/* #structf3d_1_1mesh__view_1_1cell__array__t_1a17153e73d609fcd0a27aa8a5a00d4791 */}

![][public]

**Definition**: `mesh\_view.h` (line 147)


```cpp
data_array_t f3d::mesh_view::cell_array_t::offsets
```








**Type**: [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::cell_array_t::offsets"}]}`
*/}

### Variable indexCount {/* #structf3d_1_1mesh__view_1_1cell__array__t_1acefee3a23cacfed2bf3bd6e1fce1b6ff */}

![][public]

**Definition**: `mesh\_view.h` (line 148)


```cpp
size_t f3d::mesh_view::cell_array_t::indexCount = 0
```








**Type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::cell_array_t::indexCount"}]}`
*/}

### Variable indices {/* #structf3d_1_1mesh__view_1_1cell__array__t_1ab733ae80da4e07aca5de3b1add431ecf */}

![][public]

**Definition**: `mesh\_view.h` (line 149)


```cpp
data_array_t f3d::mesh_view::cell_array_t::indices
```








**Type**: [data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::cell_array_t::indices"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)