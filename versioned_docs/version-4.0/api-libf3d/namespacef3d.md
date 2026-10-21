# Namespace f3d {/* #namespacef3d */}

![][C++]






## Classes

* [f3d::animation](classf3d_1_1animation.md)
* [f3d::camera](classf3d_1_1camera.md)
* [f3d::camera\_state\_t](structf3d_1_1camera__state__t.md)
* [f3d::color\_t](classf3d_1_1color__t.md)
* [f3d::colormap\_t](classf3d_1_1colormap__t.md)
* [f3d::context](classf3d_1_1context.md)
* [f3d::direction\_t](classf3d_1_1direction__t.md)
* [f3d::double\_array\_t](classf3d_1_1double__array__t.md)
* [f3d::engine](classf3d_1_1engine.md)
* [f3d::exception](structf3d_1_1exception.md)
* [f3d::image](classf3d_1_1image.md)
* [f3d::interaction\_bind\_t](structf3d_1_1interaction__bind__t.md)
* [f3d::interactor](classf3d_1_1interactor.md)
* [f3d::interactor\_state\_t](structf3d_1_1interactor__state__t.md)
* [f3d::light\_state\_t](structf3d_1_1light__state__t.md)
* [f3d::log](classf3d_1_1log.md)
* [f3d::mesh\_t](structf3d_1_1mesh__t.md)
* [f3d::mesh\_view](classf3d_1_1mesh__view.md)
* [f3d::node\_state\_t](structf3d_1_1node__state__t.md)
* [f3d::options](classf3d_1_1options.md)
* [f3d::point3\_t](structf3d_1_1point3__t.md)
* [f3d::ratio\_t](classf3d_1_1ratio__t.md)
* [f3d::scene](classf3d_1_1scene.md)
* [f3d::scene\_info\_t](structf3d_1_1scene__info__t.md)
* [f3d::transform2d\_t](classf3d_1_1transform2d__t.md)
* [f3d::type\_access\_exception](structf3d_1_1type__access__exception.md)
* [f3d::type\_construction\_exception](structf3d_1_1type__construction__exception.md)
* [f3d::utils](classf3d_1_1utils.md)
* [f3d::vector3\_t](structf3d_1_1vector3__t.md)
* [f3d::video\_encoder](classf3d_1_1video__encoder.md)
* [f3d::video\_frame](classf3d_1_1video__frame.md)
* [f3d::video\_packet](classf3d_1_1video__packet.md)
* [f3d::window](classf3d_1_1window.md)

## Enumeration types

### Enumeration type file\_availability {/* #scene_8h_1a3c27c6912e4dd09586aa0c369d861064 */}

![][public]



```cpp
enum file_availability {
  SUPPORTED = 0,
  UNSUPPORTED_EXTENSION = 1,
  UNSUPPORTED_CONTENT = 2
}
```








#### Enumerator SUPPORTED {/* #scene_8h_1a3c27c6912e4dd09586aa0c369d861064a38e00e00fd4b081268cb0d9083899116 */}





#### Enumerator UNSUPPORTED\_EXTENSION {/* #scene_8h_1a3c27c6912e4dd09586aa0c369d861064aef4a532f23bc7b45366c334bab8e09ef */}





#### Enumerator UNSUPPORTED\_CONTENT {/* #scene_8h_1a3c27c6912e4dd09586aa0c369d861064a49142b5339a1c3807720101a45943cb5 */}





{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::file_availability"}]}`
*/}

## Typedefs

### Typedef option\_variant\_t {/* #options_8h_1a312e60335c1f2935c62eb4631a500aca */}

![][public]



```cpp
using f3d::option_variant_t = 
std::variant<bool, int, double, std::string, std::vector<double>, std::vector<int>>
```








**Return type**: std::variant< bool, int, double, std::string, std::vector< double >, std::vector< int > >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::option_variant_t"}]}`
*/}

### Typedef angle\_deg\_t {/* #types_8h_1afffcb2b9b7c98468046339a5f53837ce */}

![][public]



```cpp
using f3d::angle_deg_t = double
```




Describe an angle in degrees.



**Return type**: double

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::angle_deg_t"}]}`
*/}

## Variables

### Variable light\_type {/* #types_8h_1abf2507668577f7e4f3f728cd68724320 */}

![][public]



```cpp
enum F3D_EXPORT f3d::light_type
```








**Type**: enum F3D_EXPORT

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::light_type"}]}`
*/}

### Variable CAMERA\_LIGHT {/* #types_8h_1aa00b99d10397b786c4d08f690cf37bde */}

![][public]



```cpp
enum F3D_EXPORT f3d::CAMERA_LIGHT = 2
```








**Type**: enum F3D_EXPORT

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::CAMERA_LIGHT"}]}`
*/}

### Variable SCENE\_LIGHT {/* #types_8h_1a05caa6569d9851cec58bebd695c05d3d */}

![][public]



```cpp
enum F3D_EXPORT f3d::SCENE_LIGHT = 3
```








**Type**: enum F3D_EXPORT

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::SCENE_LIGHT"}]}`
*/}

## Functions

### Function operator\<\< {/* #engine_8h_1a49a595c7bb5964cc5578017781e97a4e */}

![][public]


```cpp
F3D_EXPORT std::ostream & f3d::operator<<(std::ostream &stream, const engine::state &st)
```




Write a state as a JSON string into the provided stream, with file paths stored as absolute paths.



**Parameters**:

* std::ostream & **stream**
* const [engine::state](structf3d_1_1engine_1_1state.md) & **st**

**Return type**: F3D_EXPORT std::ostream &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::operator<<"}]}`
*/}

### Function operator\>\> {/* #engine_8h_1abfdf062057cf390fa75e306862206b1d */}

![][public]


```cpp
F3D_EXPORT std::istream & f3d::operator>>(std::istream &stream, engine::state &st)
```




Read a state from the JSON content of the provided stream. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the content cannot be parsed.



**Parameters**:

* std::istream & **stream**
* [engine::state](structf3d_1_1engine_1_1state.md) & **st**

**Return type**: F3D_EXPORT std::istream &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::operator>>"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)