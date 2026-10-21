# Structure f3d::options::model::scivis {/* #structf3d_1_1options_1_1model_1_1scivis */}

![][C++]
![][public]

**Definition**: `options.h` (line 396)





## Members

* [array\_name](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1af6095869f0b1427c35665492131ab0fb)
* [colormap](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1abb3219461141f5ff8864c870cc8ba8d0)
* [component](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1aea3152c674546e9ede1eb5b9a8749423)
* [discretization](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1ac7ae9da19bfc26ae445e818ff281c64a)
* [field](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1aaa927ae674f3d98c63e5576f2bb3c5aa)
* [opacity\_map](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1a8f16204d8244d515767a521efa7307b5)
* [range](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1ad8d01d0b28da0651dbf1361728119d07)

## Public attributes

### Variable array\_name {/* #structf3d_1_1options_1_1model_1_1scivis_1af6095869f0b1427c35665492131ab0fb */}

![][public]

**Definition**: `options.h` (line 397)


```cpp
std::optional<std::string> f3d::options::model::scivis::array_name
```








**Type**: std::optional< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::array_name"}]}`
*/}

### Variable colormap {/* #structf3d_1_1options_1_1model_1_1scivis_1abb3219461141f5ff8864c870cc8ba8d0 */}

![][public]

**Definition**: `options.h` (line 398)


```cpp
f3d::colormap_t f3d::options::model::scivis::colormap = [f3d::colormap\_t](classf3d_1_1colormap__t.md){0.0, 0.0, 0.0, 0.0, 0.4, 0.9, 0.0, 0.0, 0.8, 0.9, 0.9, 0.0, 1.0, 1.0, 1.0, 1.0}
```








**Type**: [f3d::colormap\_t](classf3d_1_1colormap__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::colormap"}]}`
*/}

### Variable component {/* #structf3d_1_1options_1_1model_1_1scivis_1aea3152c674546e9ede1eb5b9a8749423 */}

![][public]

**Definition**: `options.h` (line 399)


```cpp
std::optional<int> f3d::options::model::scivis::component
```








**Type**: std::optional< int >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::component"}]}`
*/}

### Variable discretization {/* #structf3d_1_1options_1_1model_1_1scivis_1ac7ae9da19bfc26ae445e818ff281c64a */}

![][public]

**Definition**: `options.h` (line 400)


```cpp
std::optional<int> f3d::options::model::scivis::discretization
```








**Type**: std::optional< int >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::discretization"}]}`
*/}

### Variable field {/* #structf3d_1_1options_1_1model_1_1scivis_1aaa927ae674f3d98c63e5576f2bb3c5aa */}

![][public]

**Definition**: `options.h` (line 401)


```cpp
std::string f3d::options::model::scivis::field = "any"
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::field"}]}`
*/}

### Variable opacity\_map {/* #structf3d_1_1options_1_1model_1_1scivis_1a8f16204d8244d515767a521efa7307b5 */}

![][public]

**Definition**: `options.h` (line 402)


```cpp
std::vector<double> f3d::options::model::scivis::opacity_map = {0.0, 0.0, 1.0, 1.0}
```








**Type**: std::vector< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::opacity_map"}]}`
*/}

### Variable range {/* #structf3d_1_1options_1_1model_1_1scivis_1ad8d01d0b28da0651dbf1361728119d07 */}

![][public]

**Definition**: `options.h` (line 403)


```cpp
std::optional<std::vector<double> > f3d::options::model::scivis::range
```








**Type**: std::optional< std::vector< double > >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::range"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)