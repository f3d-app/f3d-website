# File vtkF3DImporter.h {#vtkF3DImporter_8h}

![][C++]

**Location**: `vtkF3DImporter.h`





## Classes

* [vtkF3DImporter](classvtkF3DImporter.md)

## Includes

* vtkextModule.h


```mermaid
graph LR
1["vtkF3DImporter.h"]
click 1 "vtkF3DImporter_8h.md#vtkF3DImporter_8h"
1 --> 2

2["vtkextModule.h"]

```


## Source


```cpp


#ifndef vtkF3DImporter_h
#define vtkF3DImporter_h

#include "vtkextModule.h"

#include <vtkImporter.h>
#include <vtkVersion.h>

#if VTK_VERSION_NUMBER < VTK_VERSION_CHECK(9, 5, 20250923)
#include <vtkResourceStream.h>
#include <vtkSmartPointer.h>
#endif

class vtkInformationIntegerKey;

class VTKEXT_EXPORT vtkF3DImporter : public vtkImporter
{
public:
  vtkTypeMacro(vtkF3DImporter, vtkImporter);
  static vtkInformationIntegerKey* ACTOR_IS_ARMATURE();

#if VTK_VERSION_NUMBER >= VTK_VERSION_CHECK(9, 3, 20240707)
  bool UpdateAtTimeValue(double timeValue) override;
#else
  virtual bool UpdateAtTimeValue(double timeValue);
  void UpdateTimeStep(double timeValue) override;
#endif

#if VTK_VERSION_NUMBER < VTK_VERSION_CHECK(9, 4, 20250507)
  enum class AnimationSupportLevel : unsigned char{ NONE, UNIQUE, SINGLE, MULTI };

  virtual AnimationSupportLevel GetAnimationSupportLevel()
  {
    return AnimationSupportLevel::MULTI;
  }
#endif

#if VTK_VERSION_NUMBER < VTK_VERSION_CHECK(9, 5, 20251210)
  using vtkImporter::GetTemporalInformation;
  virtual bool GetTemporalInformation(
    vtkIdType animationIndex, double timeRange[2], int& nbTimeSteps, vtkDoubleArray* timeSteps);
#endif

  void SetFailureStatus();

#if VTK_VERSION_NUMBER < VTK_VERSION_CHECK(9, 5, 20250923)

  vtkSetFilePathMacro(FileName);
  vtkGetFilePathMacro(FileName);


  vtkSetSmartPointerMacro(Stream, vtkResourceStream);
  vtkGetSmartPointerMacro(Stream, vtkResourceStream);
#endif

private:
#if VTK_VERSION_NUMBER < VTK_VERSION_CHECK(9, 5, 20250923)
  char* FileName = nullptr;
  vtkSmartPointer<vtkResourceStream> Stream;
#endif
};

#endif
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)