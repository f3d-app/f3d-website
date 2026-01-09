# Class vtkF3DFaceVaryingPointDispatcher {#classvtkF3DFaceVaryingPointDispatcher}

![][C++]
![][public]

**Definition**: `vtkF3DFaceVaryingPointDispatcher.h` (line 23)

Dispatch face-varying attributes by duplicating points.

This filter processes arrays on point data in case some of them are flagged as face-varying in which case points must be duplicated before rendering





Face-varying attributes are a special case between point and cell data where the number of tuples in the attributes is equal to the cell connectivity array size. For example, if we have two adjacent quads, we will have 6 points and 8 cell indices (4 per quad). Face-varying attributes, even if located on point data will have 8 tuples, and not 6. It can be seen as attributes, but this filter will normalize it by outputting 8 points.

**Inherits from**:

* vtkPolyDataAlgorithm

## Members

* [INTERPOLATION\_TYPE](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a71fff9c5f8f911a8acc521188a098aaf)
* [New](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a2c01bd1a69ac6e03ddac5069eb8d4166)
* [operator=](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a42c19b9e10ddf1a1847f8a8ce6722c48)
* [RequestData](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1ace7ef1e416f2d4f6808df00d68ead236)
* [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1ac6c58598dd120e26d9f89e8cae1f47f8)
* [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a3e661430576b8d1e4cd85e483454ed6f)
* [vtkTypeMacro](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a91d5a06042aa2ffe4e5659a762c94a06)
* [~vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md#classvtkF3DFaceVaryingPointDispatcher_1a2cec14ec93fc87d03e21823ab42e90a5)

## Public static functions

### Function New {#classvtkF3DFaceVaryingPointDispatcher_1a2c01bd1a69ac6e03ddac5069eb8d4166}

![][public]
![][static]


```cpp
static vtkF3DFaceVaryingPointDispatcher * vtkF3DFaceVaryingPointDispatcher::New()
```








**Return type**: [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::New"}]}`
-->

### Function INTERPOLATION\_TYPE {#classvtkF3DFaceVaryingPointDispatcher_1a71fff9c5f8f911a8acc521188a098aaf}

![][public]
![][static]


```cpp
static vtkInformationIntegerKey * vtkF3DFaceVaryingPointDispatcher::INTERPOLATION_TYPE()
```




Metadata used to indicate which interpolation is used on arrays



**Return type**: vtkInformationIntegerKey *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::INTERPOLATION_TYPE"}]}`
-->

## Public functions

### Function vtkTypeMacro {#classvtkF3DFaceVaryingPointDispatcher_1a91d5a06042aa2ffe4e5659a762c94a06}

![][public]


```cpp
vtkF3DFaceVaryingPointDispatcher::vtkTypeMacro(vtkF3DFaceVaryingPointDispatcher, vtkPolyDataAlgorithm)
```








**Parameters**:

* [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md)
* vtkPolyDataAlgorithm

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::vtkTypeMacro"}]}`
-->

## Protected functions

### Function vtkF3DFaceVaryingPointDispatcher {#classvtkF3DFaceVaryingPointDispatcher_1ac6c58598dd120e26d9f89e8cae1f47f8}

![][protected]


```cpp
vtkF3DFaceVaryingPointDispatcher::vtkF3DFaceVaryingPointDispatcher()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::vtkF3DFaceVaryingPointDispatcher"}]}`
-->

### Function ~vtkF3DFaceVaryingPointDispatcher {#classvtkF3DFaceVaryingPointDispatcher_1a2cec14ec93fc87d03e21823ab42e90a5}

![][protected]


```cpp
vtkF3DFaceVaryingPointDispatcher::~vtkF3DFaceVaryingPointDispatcher() override
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::~vtkF3DFaceVaryingPointDispatcher"}]}`
-->

### Function RequestData {#classvtkF3DFaceVaryingPointDispatcher_1ace7ef1e416f2d4f6808df00d68ead236}

![][protected]


```cpp
int vtkF3DFaceVaryingPointDispatcher::RequestData(vtkInformation *, vtkInformationVector **, vtkInformationVector *) override
```








**Parameters**:

* vtkInformation *
* vtkInformationVector **
* vtkInformationVector *

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::RequestData"}]}`
-->

## Private functions

### Function vtkF3DFaceVaryingPointDispatcher {#classvtkF3DFaceVaryingPointDispatcher_1a3e661430576b8d1e4cd85e483454ed6f}

![][private]


```cpp
vtkF3DFaceVaryingPointDispatcher::vtkF3DFaceVaryingPointDispatcher(const vtkF3DFaceVaryingPointDispatcher &)=delete
```








**Parameters**:

* const [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md) &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::vtkF3DFaceVaryingPointDispatcher"}]}`
-->

### Function operator= {#classvtkF3DFaceVaryingPointDispatcher_1a42c19b9e10ddf1a1847f8a8ce6722c48}

![][private]


```cpp
void vtkF3DFaceVaryingPointDispatcher::operator=(const vtkF3DFaceVaryingPointDispatcher &)=delete
```








**Parameters**:

* const [vtkF3DFaceVaryingPointDispatcher](classvtkF3DFaceVaryingPointDispatcher.md) &

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher::operator="}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vtkF3DFaceVaryingPointDispatcher_8h"},"children":[{"type":"text","text":"vtkF3DFaceVaryingPointDispatcher.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)