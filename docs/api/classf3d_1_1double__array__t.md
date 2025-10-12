# Class f3d::double\_array\_t

![][C++]
![][public]

**Definition**: `types.h` (line 81)



A base template type for an array of double

**Template parameters**:

* Nunsigned int **N**

## Members

* [Array](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792)
* [data](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a872c1e46cf2b5c14f5c43c0fdc9c7394)
* [double\_array\_t](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1aed53b98cd814aa024f6566c1f2b2dfc7)
* [operator!=](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)
* [operator==](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)
* [operator[]](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)
* [operator[]](classf3d_1_1double__array__t.md#classf3d_1_1double__array__t_1ac2ebe0188822e128084ac53be7ffbf03)

## Protected attributes

### Variable Array {#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792}

![][protected]

**Definition**: `types.h` (line 135)


```cpp
std::array<double, N> f3d::double_array_t< N >::Array { 0 }
```








**Type**: std::array< double, N >



## Public functions

### Function double\_array\_t {#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50}

![][public]


```cpp
f3d::double_array_t< N >::double_array_t()=default
```








**Return type**: 



### Function double\_array\_t {#classf3d_1_1double__array__t_1a872c1e46cf2b5c14f5c43c0fdc9c7394}

![][public]


```cpp
f3d::double_array_t< N >::double_array_t(const std::vector< double > &vec)
```








**Parameters**:

* const std::vector< double > & **vec**

**Return type**: 



### Function double\_array\_t {#classf3d_1_1double__array__t_1aed53b98cd814aa024f6566c1f2b2dfc7}

![][public]


```cpp
f3d::double_array_t< N >::double_array_t(const std::initializer_list< double > &list)
```








**Parameters**:

* const std::initializer_list< double > & **list**

**Return type**: 



### Function operator== {#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3}

![][public]
![][const]


```cpp
bool f3d::double_array_t< N >::operator==(const double_array_t &other) const
```








**Parameters**:

* const [double\_array\_t](classf3d_1_1double__array__t.md) & **other**

**Return type**: bool



### Function operator!= {#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b}

![][public]
![][const]


```cpp
bool f3d::double_array_t< N >::operator!=(const double_array_t &other) const
```








**Parameters**:

* const [double\_array\_t](classf3d_1_1double__array__t.md) & **other**

**Return type**: bool



### Function operator[] {#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1}

![][public]
![][const]


```cpp
double f3d::double_array_t< N >::operator[](size_t i) const
```








**Parameters**:

* size_t **i**

**Return type**: double



### Function operator[] {#classf3d_1_1double__array__t_1ac2ebe0188822e128084ac53be7ffbf03}

![][public]


```cpp
double & f3d::double_array_t< N >::operator[](size_t i)
```








**Parameters**:

* size_t **i**

**Return type**: double &



### Function data {#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de}

![][public]
![][const]


```cpp
const double * f3d::double_array_t< N >::data() const
```








**Return type**: const double *





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)