# Class vtkF3DImporter {#classvtkF3DImporter}

![][C++]
![][public]

**Definition**: `vtkF3DImporter.h` (line 26)

Generic importer for F3D.

This generic importer is provided to simplify implementation of other importers and handle multiple versions of VTK.

**Inherits from**:

* vtkImporter

## Members

* [ACTOR\_IS\_ARMATURE](classvtkF3DImporter.md#classvtkF3DImporter_1a6a7e67761cb0b562ceadf7903ec139b0)
* [SetFailureStatus](classvtkF3DImporter.md#classvtkF3DImporter_1acd5c322fbe7f72589db10fc2fcfc8ea4)
* [UpdateAtTimeValue](classvtkF3DImporter.md#classvtkF3DImporter_1afa7f0fc1608a37a57e9a2f21fcba400d)
* [vtkTypeMacro](classvtkF3DImporter.md#classvtkF3DImporter_1a7638cc80455adc25b1268fc9f6e1858f)

## Public functions

### Function vtkTypeMacro {#classvtkF3DImporter_1a7638cc80455adc25b1268fc9f6e1858f}

![][public]


```cpp
vtkF3DImporter::vtkTypeMacro(vtkF3DImporter, vtkImporter)
```








**Parameters**:

* [vtkF3DImporter](classvtkF3DImporter.md)
* vtkImporter

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DImporter::vtkTypeMacro"}]}`
-->

### Function UpdateAtTimeValue {#classvtkF3DImporter_1afa7f0fc1608a37a57e9a2f21fcba400d}

![][public]


```cpp
bool vtkF3DImporter::UpdateAtTimeValue(double timeValue) override
```




This method should be reimplemented in importer implementations to handle update the importer at a specific time value then call this method and return what it returns.



**Parameters**:

* double **timeValue**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DImporter::UpdateAtTimeValue"}]}`
-->

### Function SetFailureStatus {#classvtkF3DImporter_1acd5c322fbe7f72589db10fc2fcfc8ea4}

![][public]


```cpp
void vtkF3DImporter::SetFailureStatus()
```




Call this method to set the status to failure if supported by the VTK version in use



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DImporter::SetFailureStatus"}]}`
-->

## Public static functions

### Function ACTOR\_IS\_ARMATURE {#classvtkF3DImporter_1a6a7e67761cb0b562ceadf7903ec139b0}

![][public]
![][static]


```cpp
static vtkInformationIntegerKey * vtkF3DImporter::ACTOR_IS_ARMATURE()
```




Information key used to flag actors. Actors having this flag will be drawn on top.



**Return type**: vtkInformationIntegerKey *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DImporter::ACTOR_IS_ARMATURE"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vtkF3DImporter_8h"},"children":[{"type":"text","text":"vtkF3DImporter.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)