# Structure f3d::options::model::color

![][C++]
![][public]

**Definition**: `options.h` (line 215)





## Members

* [opacity](structf3d_1_1options_1_1model_1_1color.md#structf3d_1_1options_1_1model_1_1color_1a65270b2230a702a7658beefc83e815fe)
* [rgb](structf3d_1_1options_1_1model_1_1color.md#structf3d_1_1options_1_1model_1_1color_1a5608a561ab77df64de65f40b4fae5f88)
* [texture](structf3d_1_1options_1_1model_1_1color.md#structf3d_1_1options_1_1model_1_1color_1a9574cb855badcc67b83eea7e73aed7c1)

## Public attributes

### Variable opacity {#structf3d_1_1options_1_1model_1_1color_1a65270b2230a702a7658beefc83e815fe}

![][public]

**Definition**: `options.h` (line 216)


```cpp
std::optional<double> f3d::options::model::color::opacity
```








**Type**: std::optional< double >



### Variable rgb {#structf3d_1_1options_1_1model_1_1color_1a5608a561ab77df64de65f40b4fae5f88}

![][public]

**Definition**: `options.h` (line 217)


```cpp
std::optional<f3d::color_t> f3d::options::model::color::rgb
```








**Type**: std::optional< [f3d::color\_t](classf3d_1_1color__t.md) >



### Variable texture {#structf3d_1_1options_1_1model_1_1color_1a9574cb855badcc67b83eea7e73aed7c1}

![][public]

**Definition**: `options.h` (line 218)


```cpp
std::optional<std::filesystem::path> f3d::options::model::color::texture
```








**Type**: std::optional< std::filesystem::path >



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)