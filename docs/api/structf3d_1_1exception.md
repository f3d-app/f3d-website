# Class f3d::exception

![][C++]
![][public]

**Definition**: `exception.h` (line 18)

a generic exception used in the libf3d

A generic exception used in the libf3d. Can be used to catch all exceptions when needed.

**Inherits from**:

* std::runtime\_error

**Inherited by**:

* [f3d::context::loading\_exception](structf3d_1_1context_1_1loading__exception.md)
* [f3d::context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md)
* [f3d::engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md)
* [f3d::engine::no\_interactor\_exception](structf3d_1_1engine_1_1no__interactor__exception.md)
* [f3d::engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md)
* [f3d::engine::plugin\_exception](structf3d_1_1engine_1_1plugin__exception.md)
* [f3d::image::metadata\_exception](structf3d_1_1image_1_1metadata__exception.md)
* [f3d::image::read\_exception](structf3d_1_1image_1_1read__exception.md)
* [f3d::image::write\_exception](structf3d_1_1image_1_1write__exception.md)
* [f3d::interactor::already\_exists\_exception](structf3d_1_1interactor_1_1already__exists__exception.md)
* [f3d::interactor::command\_runtime\_exception](structf3d_1_1interactor_1_1command__runtime__exception.md)
* [f3d::interactor::does\_not\_exists\_exception](structf3d_1_1interactor_1_1does__not__exists__exception.md)
* [f3d::interactor::invalid\_args\_exception](structf3d_1_1interactor_1_1invalid__args__exception.md)
* [f3d::options::incompatible\_exception](structf3d_1_1options_1_1incompatible__exception.md)
* [f3d::options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md)
* [f3d::options::no\_value\_exception](structf3d_1_1options_1_1no__value__exception.md)
* [f3d::options::parsing\_exception](structf3d_1_1options_1_1parsing__exception.md)
* [f3d::scene::light\_exception](structf3d_1_1scene_1_1light__exception.md)
* [f3d::scene::load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md)
* [f3d::type\_access\_exception](structf3d_1_1type__access__exception.md)
* [f3d::type\_construction\_exception](structf3d_1_1type__construction__exception.md)
* [f3d::utils::glob\_exception](structf3d_1_1utils_1_1glob__exception.md)
* [f3d::utils::tokenize\_exception](structf3d_1_1utils_1_1tokenize__exception.md)

## Members

* [exception](structf3d_1_1exception.md#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d)

## Public functions

### Function exception {#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d}

![][public]


```cpp
f3d::exception::exception(const std::string &what="")
```








**Parameters**:

* const std::string & **what** = "" 

**Return type**: 





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)