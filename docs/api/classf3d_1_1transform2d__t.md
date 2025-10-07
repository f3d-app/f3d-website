# Class f3d::transform2d\_t {#classf3d_1_1transform2d__t}

![][C++]
![][public]

**Definition**: `types.h` (line 217)



Store a 3x3 transform matrix as a sequence of 9 float values VTK expects a 4x4 matrix, but for 2d transforms this is exposed as a 3x3 matrix

**Inherits from**:

* [f3d::double\_array\_t\< 9 \>](classf3d_1_1double__array__t.md)

## Members

* [Array](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792)
* [data](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)
* [operator!=](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)
* [operator==](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)
* [operator[]](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)
* [transform2d\_t](classf3d_1_1transform2d__t.md#classf3d_1_1transform2d__t_1ab657bdb45cbf4124f28b96828d056d63)
* [transform2d\_t](classf3d_1_1transform2d__t.md#classf3d_1_1transform2d__t_1a3081204d9c43256e72f6cca0576f0651)
* [transform2d\_t](classf3d_1_1transform2d__t.md#classf3d_1_1transform2d__t_1a2800721840535bd112285ec29d34e881)
* [transform2d\_t](classf3d_1_1transform2d__t.md#classf3d_1_1transform2d__t_1a7e76f1c32dec6276bacbbf82b35dc1bf)
* [transform2d\_t](classf3d_1_1transform2d__t.md#classf3d_1_1transform2d__t_1a87d0abcde4b4c8ed729e20fbf594b1cf)

## Public functions

### Function transform2d\_t {#classf3d_1_1transform2d__t_1ab657bdb45cbf4124f28b96828d056d63}

![][public]


```cpp
f3d::transform2d_t::transform2d_t()=default
```








**Return type**: 



### Function transform2d\_t {#classf3d_1_1transform2d__t_1a3081204d9c43256e72f6cca0576f0651}

![][public]


```cpp
f3d::transform2d_t::transform2d_t(const std::vector< double > &vec)
```








**Parameters**:

* const std::vector< double > & **vec**

**Return type**: 



### Function transform2d\_t {#classf3d_1_1transform2d__t_1a2800721840535bd112285ec29d34e881}

![][public]


```cpp
f3d::transform2d_t::transform2d_t(const std::initializer_list< double > &list)
```








**Parameters**:

* const std::initializer_list< double > & **list**

**Return type**: 



### Function transform2d\_t {#classf3d_1_1transform2d__t_1a7e76f1c32dec6276bacbbf82b35dc1bf}

![][public]


```cpp
f3d::transform2d_t::transform2d_t(double M1_1, double M1_2, double M1_3, double M2_1, double M2_2, double M2_3, double M3_1, double M3_2, double M3_3)
```




The variables of this function are based on the mathematical notation for matrices, where the coordinates correspond to the following:





[M1_1, M1_2, M1_3] M = [M2_1, M2_2, M2_3] [M3_1, M3_2, M3_3]



**Parameters**:

* double **M1_1**
* double **M1_2**
* double **M1_3**
* double **M2_1**
* double **M2_2**
* double **M2_3**
* double **M3_1**
* double **M3_2**
* double **M3_3**

**Return type**: 



### Function transform2d\_t {#classf3d_1_1transform2d__t_1a87d0abcde4b4c8ed729e20fbf594b1cf}

![][public]


```cpp
F3D_EXPORT f3d::transform2d_t::transform2d_t(const double_array_t< 2 > &scale, const double_array_t< 2 > &translate, const angle_deg_t &angleRad)
```




The general form of a 3x3 transformation matrix M with scale S(x,y), translation T(x,y), and angle a (in degrees), is solved out to the following:





[cos(a)*S(x), -sin(a)*S(y), T(x)] M = [sin(a)*S(x), cos(a)*S(y), T(y)] [0, 0, 1 ]





Using this formula, we fill each cell using the values in the constructor



**Parameters**:

* const [double\_array\_t](classf3d_1_1double__array__t.md)< 2 > & **scale**
* const [double\_array\_t](classf3d_1_1double__array__t.md)< 2 > & **translate**
* const angle_deg_t & **angleRad**

**Return type**: F3D_EXPORT





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)