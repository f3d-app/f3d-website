# Structure f3d::options::domains::render::background {/* #structf3d_1_1options_1_1domains_1_1render_1_1background */}

![][C++]
![][public]

**Definition**: `options.h` (line 602)





## Members

* [blur\_coc](structf3d_1_1options_1_1domains_1_1render_1_1background.md#structf3d_1_1options_1_1domains_1_1render_1_1background_1ab54ce5b0334660599149c8ad6c60d5a6)
* [skybox](structf3d_1_1options_1_1domains_1_1render_1_1background.md#structf3d_1_1options_1_1domains_1_1render_1_1background_1a6f51e4c4fa3308294739bc24f6d331d3)

## Public attributes

### Variable blur\_coc {/* #structf3d_1_1options_1_1domains_1_1render_1_1background_1ab54ce5b0334660599149c8ad6c60d5a6 */}

![][public]

**Definition**: `options.h` (line 603)


```cpp
DomainRange<double> f3d::options::domains::render::background::blur_coc = {0.0, 100.0, 5.0}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::render::background::blur_coc"}]}`
*/}

### Variable skybox {/* #structf3d_1_1options_1_1domains_1_1render_1_1background_1a6f51e4c4fa3308294739bc24f6d331d3 */}

![][public]

**Definition**: `options.h` (line 604)


```cpp
DomainEnum<std::string> f3d::options::domains::render::background::skybox = {{"disabled", "enabled", "blurred", }}
```








**Type**: [DomainEnum](structf3d_1_1options_1_1DomainEnum.md)< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::render::background::skybox"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)