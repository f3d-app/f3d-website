# Structure f3d::options::domains::model::material {/* #structf3d_1_1options_1_1domains_1_1model_1_1material */}

![][C++]
![][public]

**Definition**: `options.h` (line 565)





## Members

* [base\_ior](structf3d_1_1options_1_1domains_1_1model_1_1material.md#structf3d_1_1options_1_1domains_1_1model_1_1material_1af9dae5e9f70b68be4424192485851006)
* [metallic](structf3d_1_1options_1_1domains_1_1model_1_1material.md#structf3d_1_1options_1_1domains_1_1model_1_1material_1ae62c5a41de1eb4b23eaf2827ffd36aaf)
* [roughness](structf3d_1_1options_1_1domains_1_1model_1_1material.md#structf3d_1_1options_1_1domains_1_1model_1_1material_1a9072256b324a34f053a08fc2a0d791c0)

## Public attributes

### Variable base\_ior {/* #structf3d_1_1options_1_1domains_1_1model_1_1material_1af9dae5e9f70b68be4424192485851006 */}

![][public]

**Definition**: `options.h` (line 566)


```cpp
DomainRange<double> f3d::options::domains::model::material::base_ior = {1.0, 2.5, 0.1}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::model::material::base_ior"}]}`
*/}

### Variable metallic {/* #structf3d_1_1options_1_1domains_1_1model_1_1material_1ae62c5a41de1eb4b23eaf2827ffd36aaf */}

![][public]

**Definition**: `options.h` (line 567)


```cpp
DomainRange<double> f3d::options::domains::model::material::metallic = {0.0, 1.0, 0.05}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::model::material::metallic"}]}`
*/}

### Variable roughness {/* #structf3d_1_1options_1_1domains_1_1model_1_1material_1a9072256b324a34f053a08fc2a0d791c0 */}

![][public]

**Definition**: `options.h` (line 568)


```cpp
DomainRange<double> f3d::options::domains::model::material::roughness = {0.0, 1.0, 0.05}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::model::material::roughness"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)