# File vtkF3DFaceVaryingPointDispatcher.h

![][C++]

**Location**: `vtkF3DFaceVaryingPointDispatcher.h`





## Classes

* [vtkF3DFaceVaryingPointDispatcher](classvtk_f3_d_face_varying_point_dispatcher.md)

## Includes

* vtkextModule.h


```mermaid
graph LR
1["vtkF3DFaceVaryingPointDispatcher.h"]
click 1 "vtk_f3_d_face_varying_point_dispatcher_8h.md#vtk_f3_d_face_varying_point_dispatcher_8h"
1 --> 2

2["vtkextModule.h"]

```


## Source


```cpp

#ifndef vtkF3DFaceVaryingPointDispatcher_h
#define vtkF3DFaceVaryingPointDispatcher_h

#include <vtkPolyDataAlgorithm.h>

#include "vtkextModule.h"

class VTKEXT_EXPORT vtkF3DFaceVaryingPointDispatcher : public vtkPolyDataAlgorithm
{
public:
  static vtkF3DFaceVaryingPointDispatcher* New();
  vtkTypeMacro(vtkF3DFaceVaryingPointDispatcher, vtkPolyDataAlgorithm);

  static vtkInformationIntegerKey* INTERPOLATION_TYPE();

protected:
  vtkF3DFaceVaryingPointDispatcher();
  ~vtkF3DFaceVaryingPointDispatcher() override;

  int RequestData(vtkInformation*, vtkInformationVector**, vtkInformationVector*) override;

private:
  vtkF3DFaceVaryingPointDispatcher(const vtkF3DFaceVaryingPointDispatcher&) = delete;
  void operator=(const vtkF3DFaceVaryingPointDispatcher&) = delete;
};

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)