# Class vtkF3DBitonicSort {#classvtkF3DBitonicSort}

![][C++]
![][public]

**Definition**: `vtkF3DBitonicSort.h` (line 25)

Compute shader used to sort key/value pairs.

This class is used to sort buffers based on the Bitonic Sort algorithm. Inspired by [https://poniesandlight.co.uk/reflect/bitonic_merge_sort/](https://poniesandlight.co.uk/reflect/bitonic_merge_sort/). The original code can be found there: [https://github.com/tgfrerer/island](https://github.com/tgfrerer/island). It's mostly rewritten but some parts are copied (MIT license, Tim Gfrerer).

**Inherits from**:

* vtkObject

## Members

* [BitonicSortGlobalDisperseComputeShader](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a1dfb8c628effca4a6b2762d8bb648165)
* [BitonicSortGlobalDisperseProgram](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a4c706882661dea1dfba02acc6ed4243f)
* [BitonicSortGlobalFlipComputeShader](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1abbcc1e9d47039cbde17bbec65b77fa96)
* [BitonicSortGlobalFlipProgram](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a7d75c37b62db8cb775cd8ec89cf67e1d)
* [BitonicSortLocalDisperseComputeShader](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a6975baa1fe608ef25050ee6b6ee6c9fe)
* [BitonicSortLocalDisperseProgram](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a54af59d1e701862c88b2077a58984104)
* [BitonicSortLocalSortComputeShader](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a950bcfebc04e5d7696b1a9d6bd644ef1)
* [BitonicSortLocalSortProgram](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a2c7d797dce74470b373306d5970ecf57)
* [Initialize](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a16c2b14d63d94a27412b3edb0f4a89e8)
* [New](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1aaf5c38b3d1026d6e513b280171798b13)
* [Run](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1aab9ad18a9dc9dad0848d64a2e9b982d9)
* [vtkTypeMacro](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1ac7d33117c6ed24db9e11a926fa6f0da7)
* [WorkgroupSize](classvtkF3DBitonicSort.md#classvtkF3DBitonicSort_1a6ce3502d24445fed6df1c4cadbe274fe)

## Private attributes

### Variable BitonicSortLocalSortComputeShader {#classvtkF3DBitonicSort_1a950bcfebc04e5d7696b1a9d6bd644ef1}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 55)


```cpp
vtkNew<vtkShader> vtkF3DBitonicSort::BitonicSortLocalSortComputeShader
```








**Type**: vtkNew< vtkShader >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortLocalSortComputeShader"}]}`
-->

### Variable BitonicSortLocalSortProgram {#classvtkF3DBitonicSort_1a2c7d797dce74470b373306d5970ecf57}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 56)


```cpp
vtkNew<vtkShaderProgram> vtkF3DBitonicSort::BitonicSortLocalSortProgram
```








**Type**: vtkNew< vtkShaderProgram >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortLocalSortProgram"}]}`
-->

### Variable BitonicSortLocalDisperseComputeShader {#classvtkF3DBitonicSort_1a6975baa1fe608ef25050ee6b6ee6c9fe}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 57)


```cpp
vtkNew<vtkShader> vtkF3DBitonicSort::BitonicSortLocalDisperseComputeShader
```








**Type**: vtkNew< vtkShader >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortLocalDisperseComputeShader"}]}`
-->

### Variable BitonicSortLocalDisperseProgram {#classvtkF3DBitonicSort_1a54af59d1e701862c88b2077a58984104}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 58)


```cpp
vtkNew<vtkShaderProgram> vtkF3DBitonicSort::BitonicSortLocalDisperseProgram
```








**Type**: vtkNew< vtkShaderProgram >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortLocalDisperseProgram"}]}`
-->

### Variable BitonicSortGlobalFlipComputeShader {#classvtkF3DBitonicSort_1abbcc1e9d47039cbde17bbec65b77fa96}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 59)


```cpp
vtkNew<vtkShader> vtkF3DBitonicSort::BitonicSortGlobalFlipComputeShader
```








**Type**: vtkNew< vtkShader >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortGlobalFlipComputeShader"}]}`
-->

### Variable BitonicSortGlobalFlipProgram {#classvtkF3DBitonicSort_1a7d75c37b62db8cb775cd8ec89cf67e1d}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 60)


```cpp
vtkNew<vtkShaderProgram> vtkF3DBitonicSort::BitonicSortGlobalFlipProgram
```








**Type**: vtkNew< vtkShaderProgram >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortGlobalFlipProgram"}]}`
-->

### Variable BitonicSortGlobalDisperseComputeShader {#classvtkF3DBitonicSort_1a1dfb8c628effca4a6b2762d8bb648165}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 61)


```cpp
vtkNew<vtkShader> vtkF3DBitonicSort::BitonicSortGlobalDisperseComputeShader
```








**Type**: vtkNew< vtkShader >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortGlobalDisperseComputeShader"}]}`
-->

### Variable BitonicSortGlobalDisperseProgram {#classvtkF3DBitonicSort_1a4c706882661dea1dfba02acc6ed4243f}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 62)


```cpp
vtkNew<vtkShaderProgram> vtkF3DBitonicSort::BitonicSortGlobalDisperseProgram
```








**Type**: vtkNew< vtkShaderProgram >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::BitonicSortGlobalDisperseProgram"}]}`
-->

### Variable WorkgroupSize {#classvtkF3DBitonicSort_1a6ce3502d24445fed6df1c4cadbe274fe}

![][private]

**Definition**: `vtkF3DBitonicSort.h` (line 64)


```cpp
int vtkF3DBitonicSort::WorkgroupSize = -1
```








**Type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::WorkgroupSize"}]}`
-->

## Public static functions

### Function New {#classvtkF3DBitonicSort_1aaf5c38b3d1026d6e513b280171798b13}

![][public]
![][static]


```cpp
static vtkF3DBitonicSort * vtkF3DBitonicSort::New()
```








**Return type**: [vtkF3DBitonicSort](classvtkF3DBitonicSort.md) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::New"}]}`
-->

## Public functions

### Function vtkTypeMacro {#classvtkF3DBitonicSort_1ac7d33117c6ed24db9e11a926fa6f0da7}

![][public]


```cpp
vtkF3DBitonicSort::vtkTypeMacro(vtkF3DBitonicSort, vtkObject)
```








**Parameters**:

* [vtkF3DBitonicSort](classvtkF3DBitonicSort.md)
* vtkObject

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::vtkTypeMacro"}]}`
-->

### Function Initialize {#classvtkF3DBitonicSort_1a16c2b14d63d94a27412b3edb0f4a89e8}

![][public]


```cpp
bool vtkF3DBitonicSort::Initialize(int workgroupSize, int keyType, int valueType)
```




Initialize the compute shaders. 
**Parameters**:

* **workgroupSize**: The number of threads running in a single GPU workgroup.
* **keyType**: The VTK type of the key to sort.
* **valueType**: The VTK type of the value to sort. Only VTK_DOUBLE, VTK_FLOAT, VTK_INT and VTK_UNSIGNED_INT are supported


**Returns**:

true if succeeded.



**Parameters**:

* int **workgroupSize**
* int **keyType**
* int **valueType**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::Initialize"}]}`
-->

### Function Run {#classvtkF3DBitonicSort_1aab9ad18a9dc9dad0848d64a2e9b982d9}

![][public]


```cpp
bool vtkF3DBitonicSort::Run(vtkOpenGLRenderWindow *context, int nbPairs, vtkOpenGLBufferObject *keys, vtkOpenGLBufferObject *values)
```




Run the compute shader and sort the buffers. An OpenGL context must exists and given as input in the first argument 
**Parameters**:

* **nbPairs**: The number of element in the buffer keys and values.
* **keys**: OpenGL buffers keys. Must be valid and match data type specified during initialization.
* **values**: OpenGL buffers values. Must be valid and match data type specified during initialization.


**Returns**:

true if succeeded.



**Parameters**:

* vtkOpenGLRenderWindow * **context**
* int **nbPairs**
* vtkOpenGLBufferObject * **keys**
* vtkOpenGLBufferObject * **values**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DBitonicSort::Run"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vtkF3DBitonicSort_8h"},"children":[{"type":"text","text":"vtkF3DBitonicSort.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)