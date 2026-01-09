# Structure f3d::options::model::scivis {#structf3d_1_1options_1_1model_1_1scivis}

![][C++]
![][public]

**Definition**: `options.h` (line 249)





## Members

* [array\_name](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1af6095869f0b1427c35665492131ab0fb)
* [cells](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1a906b6ba29fa63c9b3b5ec547f3a53f27)
* [colormap](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1abb3219461141f5ff8864c870cc8ba8d0)
* [component](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1a977abf161325897256e380a5bb007d22)
* [discretization](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1ac7ae9da19bfc26ae445e818ff281c64a)
* [enable](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1ac6d8e206469ba20a22fb72e43ae3e2f6)
* [range](structf3d_1_1options_1_1model_1_1scivis.md#structf3d_1_1options_1_1model_1_1scivis_1ad8d01d0b28da0651dbf1361728119d07)

## Public attributes

### Variable array\_name {#structf3d_1_1options_1_1model_1_1scivis_1af6095869f0b1427c35665492131ab0fb}

![][public]

**Definition**: `options.h` (line 250)


```cpp
std::optional<std::string> f3d::options::model::scivis::array_name
```








**Type**: std::optional< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::array_name"}]}`
-->

### Variable cells {#structf3d_1_1options_1_1model_1_1scivis_1a906b6ba29fa63c9b3b5ec547f3a53f27}

![][public]

**Definition**: `options.h` (line 251)


```cpp
bool f3d::options::model::scivis::cells = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::cells"}]}`
-->

### Variable colormap {#structf3d_1_1options_1_1model_1_1scivis_1abb3219461141f5ff8864c870cc8ba8d0}

![][public]

**Definition**: `options.h` (line 252)


```cpp
f3d::colormap_t f3d::options::model::scivis::colormap = [f3d::colormap\_t](classf3d_1_1colormap__t.md){0.0, 0.0, 0.0, 0.0, 0.4, 0.9, 0.0, 0.0, 0.8, 0.9, 0.9, 0.0, 1.0, 1.0, 1.0, 1.0}
```








**Type**: [f3d::colormap\_t](classf3d_1_1colormap__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::colormap"}]}`
-->

### Variable component {#structf3d_1_1options_1_1model_1_1scivis_1a977abf161325897256e380a5bb007d22}

![][public]

**Definition**: `options.h` (line 253)


```cpp
int f3d::options::model::scivis::component = -1
```








**Type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::component"}]}`
-->

### Variable discretization {#structf3d_1_1options_1_1model_1_1scivis_1ac7ae9da19bfc26ae445e818ff281c64a}

![][public]

**Definition**: `options.h` (line 254)


```cpp
std::optional<int> f3d::options::model::scivis::discretization
```








**Type**: std::optional< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::discretization"}]}`
-->

### Variable enable {#structf3d_1_1options_1_1model_1_1scivis_1ac6d8e206469ba20a22fb72e43ae3e2f6}

![][public]

**Definition**: `options.h` (line 255)


```cpp
bool f3d::options::model::scivis::enable = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::enable"}]}`
-->

### Variable range {#structf3d_1_1options_1_1model_1_1scivis_1ad8d01d0b28da0651dbf1361728119d07}

![][public]

**Definition**: `options.h` (line 256)


```cpp
std::optional<std::vector<double> > f3d::options::model::scivis::range
```








**Type**: std::optional< std::vector< double > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::model::scivis::range"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)