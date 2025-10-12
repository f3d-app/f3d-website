# Namespace f3d

![][C++]






## Classes

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
* [f3d::light\_state\_t](structf3d_1_1light__state__t.md)
* [f3d::log](classf3d_1_1log.md)
* [f3d::mesh\_t](structf3d_1_1mesh__t.md)
* [f3d::options](classf3d_1_1options.md)
* [f3d::point3\_t](structf3d_1_1point3__t.md)
* [f3d::ratio\_t](classf3d_1_1ratio__t.md)
* [f3d::scene](classf3d_1_1scene.md)
* [f3d::transform2d\_t](classf3d_1_1transform2d__t.md)
* [f3d::type\_access\_exception](structf3d_1_1type__access__exception.md)
* [f3d::type\_construction\_exception](structf3d_1_1type__construction__exception.md)
* [f3d::utils](classf3d_1_1utils.md)
* [f3d::vector3\_t](structf3d_1_1vector3__t.md)
* [f3d::window](classf3d_1_1window.md)

## Typedefs

### Typedef option\_variant\_t {#options_8h_1a64f3fb0a25524b592638f097793a05f6}

![][public]



```cpp
using f3d::option_variant_t = 
  std::variant<bool, int, double, std::string, std::vector<double>, std::vector<int>>
```








**Return type**: std::variant< bool, int, double, std::string, std::vector< double >, std::vector< int > >



### Typedef angle\_deg\_t {#types_8h_1afffcb2b9b7c98468046339a5f53837ce}

![][public]



```cpp
using f3d::angle_deg_t =  double
```




Describe an angle in degrees.



**Return type**: double



## Variables

### Variable light\_type {#types_8h_1abf2507668577f7e4f3f728cd68724320}

![][public]



```cpp
enum F3D_EXPORT f3d::light_type
```








**Type**: enum F3D_EXPORT



### Variable CAMERA\_LIGHT {#types_8h_1aa00b99d10397b786c4d08f690cf37bde}

![][public]



```cpp
enum F3D_EXPORT f3d::CAMERA_LIGHT = 2
```








**Type**: enum F3D_EXPORT



### Variable SCENE\_LIGHT {#types_8h_1a05caa6569d9851cec58bebd695c05d3d}

![][public]



```cpp
enum F3D_EXPORT f3d::SCENE_LIGHT = 3
```








**Type**: enum F3D_EXPORT



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)