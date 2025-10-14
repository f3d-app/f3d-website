# Class vtkF3DGLTFImporter

![][C++]
![][public]

**Definition**: `vtkF3DGLTFImporter.h` (line 20)

VTK GLTF importer customization.

Subclasses the native importer to modify the armature shader.

**Inherits from**:

* vtkGLTFImporter

## Members

* [ApplyArmatureProperties](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1ac1919590316b268949ca15d94a47a007)
* [New](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1ab5e0294db7094b1fc1deef9ddb30e94f)
* [operator=](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1a9230390392a3e5df7ad258a4cdadd954)
* [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1a54e3b368c94cd53d998e366b972c8b64)
* [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1a5fb734b17c0053c7d43c8f039a404441)
* [vtkTypeMacro](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1aee9cf8a568f96d9a75b8b671939f5bf6)
* [~vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md#classvtkF3DGLTFImporter_1a9430898ee2d26ca17ff98384fff8a5c2)

## Public static functions

### Function New {#classvtkF3DGLTFImporter_1ab5e0294db7094b1fc1deef9ddb30e94f}

![][public]
![][static]


```cpp
static vtkF3DGLTFImporter * vtkF3DGLTFImporter::New()
```








**Return type**: [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md) *



## Public functions

### Function vtkTypeMacro {#classvtkF3DGLTFImporter_1aee9cf8a568f96d9a75b8b671939f5bf6}

![][public]


```cpp
vtkF3DGLTFImporter::vtkTypeMacro(vtkF3DGLTFImporter, vtkGLTFImporter)
```








**Parameters**:

* [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md)
* vtkGLTFImporter

**Return type**: 



## Protected functions

### Function vtkF3DGLTFImporter {#classvtkF3DGLTFImporter_1a54e3b368c94cd53d998e366b972c8b64}

![][protected]


```cpp
vtkF3DGLTFImporter::vtkF3DGLTFImporter()
```








**Return type**: 



### Function ~vtkF3DGLTFImporter {#classvtkF3DGLTFImporter_1a9430898ee2d26ca17ff98384fff8a5c2}

![][protected]


```cpp
vtkF3DGLTFImporter::~vtkF3DGLTFImporter() override=default
```








**Return type**: 



### Function ApplyArmatureProperties {#classvtkF3DGLTFImporter_1ac1919590316b268949ca15d94a47a007}

![][protected]


```cpp
void vtkF3DGLTFImporter::ApplyArmatureProperties(vtkActor *actor) override
```




This method is reimplemented to add information to the actor in order to properly draw armatures on top.



**Parameters**:

* vtkActor * **actor**

**Return type**: void



## Private functions

### Function vtkF3DGLTFImporter {#classvtkF3DGLTFImporter_1a5fb734b17c0053c7d43c8f039a404441}

![][private]


```cpp
vtkF3DGLTFImporter::vtkF3DGLTFImporter(const vtkF3DGLTFImporter &)=delete
```








**Parameters**:

* const [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md) &

**Return type**: 



### Function operator= {#classvtkF3DGLTFImporter_1a9230390392a3e5df7ad258a4cdadd954}

![][private]


```cpp
void vtkF3DGLTFImporter::operator=(const vtkF3DGLTFImporter &)=delete
```








**Parameters**:

* const [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md) &

**Return type**: void





[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)