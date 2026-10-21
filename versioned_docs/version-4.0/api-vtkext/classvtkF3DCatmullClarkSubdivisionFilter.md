# Class vtkF3DCatmullClarkSubdivisionFilter {/* #classvtkF3DCatmullClarkSubdivisionFilter */}

![][C++]
![][public]

**Definition**: `vtkF3DCatmullClarkSubdivisionFilter.h` (line 16)

Subdivides polygonal data using the Catmull-Clark subdivision algorithm.

Implementation based on [https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface](https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface)

**Inherits from**:

* vtkSubdivisionFilter

## Members

* [New](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1aaf89753532e552f04d479d56cd5baf96)
* [operator=](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1a4be66257c2acec519e8ec5001b6e9e69)
* [RequestData](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1a816852bd55b4570741db9987fce4819b)
* [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1a5c7d501c1efabc781ebc3b32510558ea)
* [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1a5facf386616c9c9b8dcb6f648ea180d0)
* [vtkTypeMacro](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1ad0ba26093f4e8bbae450043cdc0daadf)
* [~vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md#classvtkF3DCatmullClarkSubdivisionFilter_1ad86ffb082b05f7fd27c2f5cb056c97e0)

## Public static functions

### Function New {/* #classvtkF3DCatmullClarkSubdivisionFilter_1aaf89753532e552f04d479d56cd5baf96 */}

![][public]
![][static]


```cpp
static vtkF3DCatmullClarkSubdivisionFilter * vtkF3DCatmullClarkSubdivisionFilter::New()
```








**Return type**: [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md) *

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::New"}]}`
*/}

## Public functions

### Function vtkTypeMacro {/* #classvtkF3DCatmullClarkSubdivisionFilter_1ad0ba26093f4e8bbae450043cdc0daadf */}

![][public]


```cpp
vtkF3DCatmullClarkSubdivisionFilter::vtkTypeMacro(vtkF3DCatmullClarkSubdivisionFilter, vtkSubdivisionFilter)
```








**Parameters**:

* [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md)
* vtkSubdivisionFilter

**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::vtkTypeMacro"}]}`
*/}

## Protected functions

### Function vtkF3DCatmullClarkSubdivisionFilter {/* #classvtkF3DCatmullClarkSubdivisionFilter_1a5c7d501c1efabc781ebc3b32510558ea */}

![][protected]


```cpp
vtkF3DCatmullClarkSubdivisionFilter::vtkF3DCatmullClarkSubdivisionFilter()
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::vtkF3DCatmullClarkSubdivisionFilter"}]}`
*/}

### Function ~vtkF3DCatmullClarkSubdivisionFilter {/* #classvtkF3DCatmullClarkSubdivisionFilter_1ad86ffb082b05f7fd27c2f5cb056c97e0 */}

![][protected]


```cpp
vtkF3DCatmullClarkSubdivisionFilter::~vtkF3DCatmullClarkSubdivisionFilter() override
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::~vtkF3DCatmullClarkSubdivisionFilter"}]}`
*/}

### Function RequestData {/* #classvtkF3DCatmullClarkSubdivisionFilter_1a816852bd55b4570741db9987fce4819b */}

![][protected]


```cpp
int vtkF3DCatmullClarkSubdivisionFilter::RequestData(vtkInformation *, vtkInformationVector **, vtkInformationVector *) override
```








**Parameters**:

* vtkInformation *
* vtkInformationVector **
* vtkInformationVector *

**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::RequestData"}]}`
*/}

## Private functions

### Function vtkF3DCatmullClarkSubdivisionFilter {/* #classvtkF3DCatmullClarkSubdivisionFilter_1a5facf386616c9c9b8dcb6f648ea180d0 */}

![][private]


```cpp
vtkF3DCatmullClarkSubdivisionFilter::vtkF3DCatmullClarkSubdivisionFilter(const vtkF3DCatmullClarkSubdivisionFilter &)=delete
```








**Parameters**:

* const [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md) &

**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::vtkF3DCatmullClarkSubdivisionFilter"}]}`
*/}

### Function operator= {/* #classvtkF3DCatmullClarkSubdivisionFilter_1a4be66257c2acec519e8ec5001b6e9e69 */}

![][private]


```cpp
void vtkF3DCatmullClarkSubdivisionFilter::operator=(const vtkF3DCatmullClarkSubdivisionFilter &)=delete
```








**Parameters**:

* const [vtkF3DCatmullClarkSubdivisionFilter](classvtkF3DCatmullClarkSubdivisionFilter.md) &

**Return type**: void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter::operator="}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vtkF3DCatmullClarkSubdivisionFilter_8h"},"children":[{"type":"text","text":"vtkF3DCatmullClarkSubdivisionFilter.h"}]}`
*/}

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)