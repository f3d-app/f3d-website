# Class f3d::mesh_view {/* #classf3d_1_1mesh__view */}

![][C++]
![][public]

**Definition**: `mesh\_view.h` (line 26)

Abstract class to represent a 3D surfacic mesh view in memory.

The [mesh\_view](classf3d_1_1mesh__view.md) class represents a 3D surfacic mesh with points, faces, normals and texture coordinates. It is used to add meshes directly to the scene without having to write them to a file. The interface allows to provide a view of the mesh in memory, making it possible to visualize data without having to convert and copy to F3D internal structures. It also allows to provide an animated mesh by providing different views of the mesh at different times.

## Inner classes

* [f3d::mesh\_view::data\_array\_t](structf3d_1_1mesh__view_1_1data__array__t.md)
* [f3d::mesh\_view::cell\_array\_t](structf3d_1_1mesh__view_1_1cell__array__t.md)
* [f3d::mesh\_view::memory\_view\_t](structf3d_1_1mesh__view_1_1memory__view__t.md)

## Members

* [buffersNeedUpdate](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a17b5417df640a3c01261eb2502af6188)
* [buffersUpdated](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a225ff1fc5c1f50236f480f278ed1b201)
* [data\_type](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847)
* [dataTypeDispatch](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a2c4990ce3170ca8e948fc4058d196f4d)
* [getMemoryView](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a27fc40e2035f5e9d40de7b9590259536)
* [getName](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a97820ed582f48f1039bd9e5be98f8ed1)
* [getTimeRange](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1a50ed115aa3fa4e2796648909a7227a26)

## Public types

### Enumeration type data\_type {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847 */}

![][public]

**Definition**: `mesh\_view.h` (line 66)


```cpp
enum data_type {
  U8,
  I8,
  U16,
  I16,
  U32,
  I32,
  U64,
  I64,
  F32,
  F64
}
```




Enumeration of supported scalar types for point and face scalars



#### Enumerator U8 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847a6669348b484e3008dca2bfa8e85e40b5 */}





#### Enumerator I8 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847a5aef4e3ea379fa0eb2bf42d979443902 */}





#### Enumerator U16 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847aef9ef3ebca4d2b64b6ec83808bafa5f2 */}





#### Enumerator I16 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847abcd774f891b5f9df7099f3ea75dadf8d */}





#### Enumerator U32 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847ac8bd5bedff8ef192d39a962afc0e19ee */}





#### Enumerator I32 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847ad878ea6016bfe01729548bf442de5a8b */}





#### Enumerator U64 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847a31d65cccd6593e4101db93fb878abcaa */}





#### Enumerator I64 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847ae7e62f6928f76df671b5a0379793fab6 */}





#### Enumerator F32 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847a44ad4ef5a76e6aa6fb3e3fa079a54fda */}





#### Enumerator F64 {/* #classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847a1ad5f6f3069070ec4cbbdc94d5e61e0e */}





{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::data_type"}]}`
*/}

## Public functions

### Function getTimeRange {/* #classf3d_1_1mesh__view_1a50ed115aa3fa4e2796648909a7227a26 */}

![][public]
![][const]


```cpp
virtual std::pair< double, double > f3d::mesh_view::getTimeRange() const
```




Get the temporal range



**Return type**: std::pair< double, double >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::getTimeRange"}]}`
*/}

### Function getName {/* #classf3d_1_1mesh__view_1a97820ed582f48f1039bd9e5be98f8ed1 */}

![][public]
![][const]


```cpp
virtual std::string f3d::mesh_view::getName() const
```




Get the name of the mesh



**Return type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::getName"}]}`
*/}

### Function buffersNeedUpdate {/* #classf3d_1_1mesh__view_1a17b5417df640a3c01261eb2502af6188 */}

![][public]
![][const]


```cpp
virtual bool f3d::mesh_view::buffersNeedUpdate() const
```




Signal that the buffers need to be updated. This can be used to indicate that the underlying data has changed and the mesh view should refresh its buffers accordingly. Usually derived when the time independent buffers have changed.



**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::buffersNeedUpdate"}]}`
*/}

### Function buffersUpdated {/* #classf3d_1_1mesh__view_1a225ff1fc5c1f50236f480f278ed1b201 */}

![][public]


```cpp
virtual void f3d::mesh_view::buffersUpdated()
```




Notify that the buffers have been updated. This can be used to determine when the underlying data has been successfully updated.



**Return type**: void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::buffersUpdated"}]}`
*/}

### Function getMemoryView {/* #classf3d_1_1mesh__view_1a27fc40e2035f5e9d40de7b9590259536 */}

![][public]
![][const]


```cpp
virtual memory_view_t f3d::mesh_view::getMemoryView(double time) const =0
```




Specify the mesh data by providing a view of the mesh in memory at a given time. Make sure to add a thread synchronization mechanism if the mesh data is updated asynchronously.



**Parameters**:

* double **time**

**Return type**: [memory\_view\_t](structf3d_1_1mesh__view_1_1memory__view__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::getMemoryView"}]}`
*/}

## Public static functions

### Function dataTypeDispatch {/* #classf3d_1_1mesh__view_1a2c4990ce3170ca8e948fc4058d196f4d */}

![][public]
![][static]


```cpp
static decltype(auto) f3d::mesh_view::dataTypeDispatch(f3d::mesh_view::data_type t, Functor &&f)
```




Dispatch a functor based on the data type, used to avoid code duplication when handling data of different types.



**Parameters**:

* [f3d::mesh\_view::data\_type](classf3d_1_1mesh__view.md#classf3d_1_1mesh__view_1ae248fca95777ee9c2e325345255fb847) **t**
* Functor && **f**

**Return type**: decltype(auto)

{/*
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename Functor"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::mesh_view::dataTypeDispatch"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"mesh__view_8h"},"children":[{"type":"text","text":"mesh_view.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)