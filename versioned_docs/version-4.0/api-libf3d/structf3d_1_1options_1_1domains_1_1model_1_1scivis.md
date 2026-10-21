# Structure f3d::options::domains::model::scivis {/* #structf3d_1_1options_1_1domains_1_1model_1_1scivis */}

![][C++]
![][public]

**Definition**: `options.h` (line 584)





## Members

* [discretization](structf3d_1_1options_1_1domains_1_1model_1_1scivis.md#structf3d_1_1options_1_1domains_1_1model_1_1scivis_1ac250fd64088acb145886f44133893bfd)
* [field](structf3d_1_1options_1_1domains_1_1model_1_1scivis.md#structf3d_1_1options_1_1domains_1_1model_1_1scivis_1a35fb2107e7ca43061201396dcb1cdfab)

## Public attributes

### Variable discretization {/* #structf3d_1_1options_1_1domains_1_1model_1_1scivis_1ac250fd64088acb145886f44133893bfd */}

![][public]

**Definition**: `options.h` (line 585)


```cpp
DomainRange<int> f3d::options::domains::model::scivis::discretization = {1, 1024, 5}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< int >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::model::scivis::discretization"}]}`
*/}

### Variable field {/* #structf3d_1_1options_1_1domains_1_1model_1_1scivis_1a35fb2107e7ca43061201396dcb1cdfab */}

![][public]

**Definition**: `options.h` (line 586)


```cpp
DomainEnum<std::string> f3d::options::domains::model::scivis::field = {{"any", "points", "cells", }}
```








**Type**: [DomainEnum](structf3d_1_1options_1_1DomainEnum.md)< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::model::scivis::field"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)