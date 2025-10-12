# Class f3d::direction\_t

![][C++]
![][public]

**Definition**: `types.h` (line 176)



Describe a 3D direction.

**Inherits from**:

* [f3d::double\_array\_t\< 3 \>](classf3d_1_1double__array__t.md)

## Members

* [Array](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792)
* [data](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)
* [direction\_t](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1aeef8b5002e7596df41f95feb8d7ee8aa)
* [direction\_t](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1a4a537a5f6eeb6bac3a07b0b86f3cd2e4)
* [direction\_t](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1aa947f4c442ec9246023f947c52fad5c0)
* [direction\_t](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1a771efb8b0f871b1a62be45e8e652aa4a)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)
* [operator f3d::vector3\_t](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1ae242b6bd09057602bc2666b5d857f57e)
* [operator!=](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)
* [operator==](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)
* [operator[]](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)
* [x](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1ac91362a4d72347f51706c3e6b5db259d)
* [y](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1ac5c01406d2be095e4c05f793feb282fd)
* [z](classf3d_1_1direction__t.md#classf3d_1_1direction__t_1ad099e4ab17ddb0b70d0c003f7e820fe9)

## Public functions

### Function direction\_t {#classf3d_1_1direction__t_1aeef8b5002e7596df41f95feb8d7ee8aa}

![][public]


```cpp
f3d::direction_t::direction_t()=default
```








**Return type**: 



### Function direction\_t {#classf3d_1_1direction__t_1a4a537a5f6eeb6bac3a07b0b86f3cd2e4}

![][public]


```cpp
f3d::direction_t::direction_t(const std::vector< double > &vec)
```








**Parameters**:

* const std::vector< double > & **vec**

**Return type**: 



### Function direction\_t {#classf3d_1_1direction__t_1aa947f4c442ec9246023f947c52fad5c0}

![][public]


```cpp
f3d::direction_t::direction_t(const std::initializer_list< double > &list)
```








**Parameters**:

* const std::initializer_list< double > & **list**

**Return type**: 



### Function direction\_t {#classf3d_1_1direction__t_1a771efb8b0f871b1a62be45e8e652aa4a}

![][public]


```cpp
f3d::direction_t::direction_t(double x, double y, double z)
```








**Parameters**:

* double **x**
* double **y**
* double **z**

**Return type**: 



### Function x {#classf3d_1_1direction__t_1ac91362a4d72347f51706c3e6b5db259d}

![][public]
![][const]


```cpp
double f3d::direction_t::x() const
```








**Return type**: double



### Function y {#classf3d_1_1direction__t_1ac5c01406d2be095e4c05f793feb282fd}

![][public]
![][const]


```cpp
double f3d::direction_t::y() const
```








**Return type**: double



### Function z {#classf3d_1_1direction__t_1ad099e4ab17ddb0b70d0c003f7e820fe9}

![][public]
![][const]


```cpp
double f3d::direction_t::z() const
```








**Return type**: double



### Function operator f3d::vector3\_t {#classf3d_1_1direction__t_1ae242b6bd09057602bc2666b5d857f57e}

![][public]
![][const]


```cpp
f3d::direction_t::operator f3d::vector3_t() const
```








**Return type**: 





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)