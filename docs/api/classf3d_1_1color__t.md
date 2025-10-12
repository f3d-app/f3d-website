# Class f3d::color\_t

![][C++]
![][public]

**Definition**: `types.h` (line 141)



Describe a RGB color.

**Inherits from**:

* [f3d::double\_array\_t\< 3 \>](classf3d_1_1double__array__t.md)

## Members

* [Array](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792)
* [b](classf3d_1_1color__t.md#classf3d_1_1color__t_1a51dcb99a6f2845d9d31d3a1a9adacda2)
* [color\_t](classf3d_1_1color__t.md#classf3d_1_1color__t_1acf69164a9f721cf166a9a8270a8c3156)
* [color\_t](classf3d_1_1color__t.md#classf3d_1_1color__t_1a78047417d30e9afae0ea60d38c20c283)
* [color\_t](classf3d_1_1color__t.md#classf3d_1_1color__t_1ae5633847d4df8d05405307212fbe940f)
* [color\_t](classf3d_1_1color__t.md#classf3d_1_1color__t_1ab864c2094865a5c8d04e14affcbfd08b)
* [data](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)
* [g](classf3d_1_1color__t.md#classf3d_1_1color__t_1a2248b84a5ada178f2679426f9fea73fd)
* [operator!=](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)
* [operator==](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)
* [operator[]](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)
* [r](classf3d_1_1color__t.md#classf3d_1_1color__t_1a029f159302976b8bc773a29fa8587f69)

## Public functions

### Function color\_t {#classf3d_1_1color__t_1acf69164a9f721cf166a9a8270a8c3156}

![][public]


```cpp
f3d::color_t::color_t()=default
```








**Return type**: 



### Function color\_t {#classf3d_1_1color__t_1a78047417d30e9afae0ea60d38c20c283}

![][public]


```cpp
f3d::color_t::color_t(const std::vector< double > &vec)
```








**Parameters**:

* const std::vector< double > & **vec**

**Return type**: 



### Function color\_t {#classf3d_1_1color__t_1ae5633847d4df8d05405307212fbe940f}

![][public]


```cpp
f3d::color_t::color_t(const std::initializer_list< double > &list)
```








**Parameters**:

* const std::initializer_list< double > & **list**

**Return type**: 



### Function color\_t {#classf3d_1_1color__t_1ab864c2094865a5c8d04e14affcbfd08b}

![][public]


```cpp
f3d::color_t::color_t(double red, double green, double blue)
```








**Parameters**:

* double **red**
* double **green**
* double **blue**

**Return type**: 



### Function r {#classf3d_1_1color__t_1a029f159302976b8bc773a29fa8587f69}

![][public]
![][const]


```cpp
double f3d::color_t::r() const
```








**Return type**: double



### Function g {#classf3d_1_1color__t_1a2248b84a5ada178f2679426f9fea73fd}

![][public]
![][const]


```cpp
double f3d::color_t::g() const
```








**Return type**: double



### Function b {#classf3d_1_1color__t_1a51dcb99a6f2845d9d31d3a1a9adacda2}

![][public]
![][const]


```cpp
double f3d::color_t::b() const
```








**Return type**: double





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)