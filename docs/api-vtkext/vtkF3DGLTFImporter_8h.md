# File vtkF3DGLTFImporter.h

![][C++]

**Location**: `vtkF3DGLTFImporter.h`





## Classes

* [vtkF3DGLTFImporter](classvtkF3DGLTFImporter.md)

## Includes

* vtkextModule.h


```mermaid
graph LR
1["vtkF3DGLTFImporter.h"]
click 1 "vtkF3DGLTFImporter_8h.md#vtkF3DGLTFImporter_8h"
1 --> 2

2["vtkextModule.h"]

```


## Source


```cpp


#ifndef vtkF3DGLTFImporter_h
#define vtkF3DGLTFImporter_h

#include "vtkextModule.h"

#include <vtkGLTFImporter.h>
#include <vtkVersion.h>

class vtkInformationIntegerKey;

class VTKEXT_EXPORT vtkF3DGLTFImporter : public vtkGLTFImporter
{
public:
  static vtkF3DGLTFImporter* New();
  vtkTypeMacro(vtkF3DGLTFImporter, vtkGLTFImporter);

protected:
  vtkF3DGLTFImporter();
  ~vtkF3DGLTFImporter() override = default;

  // need https://gitlab.kitware.com/vtk/vtk/-/merge_requests/11774
#if VTK_VERSION_NUMBER >= VTK_VERSION_CHECK(9, 4, 20241219)
  void ApplyArmatureProperties(vtkActor* actor) override;
#endif

private:
  vtkF3DGLTFImporter(const vtkF3DGLTFImporter&) = delete;
  void operator=(const vtkF3DGLTFImporter&) = delete;
};

#endif
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)