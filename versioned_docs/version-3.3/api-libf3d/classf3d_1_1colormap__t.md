# Class f3d::colormap_t

![][C++]
![][public]

**Definition**: `types.h` (line 276)



Describe a colormap, which is a vector of repeated: val,r,g,b

## Members

* [colormap\_t](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1a52bf9c26a6d9658e080ce536cf67f195)
* [colormap\_t](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1ae64d62b6ec1fae4875959a4d331b179f)
* [colormap\_t](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1aef7b5f89eeb562d31ad3548342d556f5)
* [data](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1afd948309686178af70463e014d2dfb35)
* [operator!=](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1a812e11d74e119dc5eb62e0772b096987)
* [operator==](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1a9d90894bec8b68e89da9ef10f73be83f)
* [Vector](classf3d_1_1colormap__t.md#classf3d_1_1colormap__t_1aa9d270c81176f8025c47cc7d7c933975)

## Protected attributes

### Variable Vector {#classf3d_1_1colormap__t_1aa9d270c81176f8025c47cc7d7c933975}

![][protected]

**Definition**: `types.h` (line 306)


```cpp
std::vector<double> f3d::colormap_t::Vector
```








**Type**: std::vector< double >



## Public functions

### Function colormap\_t {#classf3d_1_1colormap__t_1a52bf9c26a6d9658e080ce536cf67f195}

![][public]


```cpp
f3d::colormap_t::colormap_t()=default
```








**Return type**: 



### Function colormap\_t {#classf3d_1_1colormap__t_1ae64d62b6ec1fae4875959a4d331b179f}

![][public]


```cpp
f3d::colormap_t::colormap_t(const std::vector< double > &vec)
```








**Parameters**:

* const std::vector< double > & **vec**

**Return type**: 



### Function colormap\_t {#classf3d_1_1colormap__t_1aef7b5f89eeb562d31ad3548342d556f5}

![][public]


```cpp
f3d::colormap_t::colormap_t(const std::initializer_list< double > &list)
```








**Parameters**:

* const std::initializer_list< double > & **list**

**Return type**: 



### Function operator== {#classf3d_1_1colormap__t_1a9d90894bec8b68e89da9ef10f73be83f}

![][public]
![][const]


```cpp
bool f3d::colormap_t::operator==(const colormap_t &other) const
```








**Parameters**:

* const [colormap\_t](classf3d_1_1colormap__t.md) & **other**

**Return type**: bool



### Function operator!= {#classf3d_1_1colormap__t_1a812e11d74e119dc5eb62e0772b096987}

![][public]
![][const]


```cpp
bool f3d::colormap_t::operator!=(const colormap_t &other) const
```








**Parameters**:

* const [colormap\_t](classf3d_1_1colormap__t.md) & **other**

**Return type**: bool



### Function data {#classf3d_1_1colormap__t_1afd948309686178af70463e014d2dfb35}

![][public]
![][const]


```cpp
const double * f3d::colormap_t::data() const
```








**Return type**: const double *





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)