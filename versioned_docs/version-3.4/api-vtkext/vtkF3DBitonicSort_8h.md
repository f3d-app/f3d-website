# File vtkF3DBitonicSort.h {#vtkF3DBitonicSort_8h}

![][C++]

**Location**: `vtkF3DBitonicSort.h`





## Classes

* [vtkF3DBitonicSort](classvtkF3DBitonicSort.md)

## Includes

* vtkextModule.h


```mermaid
graph LR
1["vtkF3DBitonicSort.h"]
click 1 "vtkF3DBitonicSort_8h.md#vtkF3DBitonicSort_8h"
1 --> 2

2["vtkextModule.h"]

```


## Source


```cpp

#ifndef vtkF3DBitonicSort_h
#define vtkF3DBitonicSort_h

#include <vtkNew.h>
#include <vtkObject.h>

#include "vtkextModule.h"

class vtkShader;
class vtkShaderProgram;
class vtkOpenGLBufferObject;
class vtkOpenGLRenderWindow;

class VTKEXT_EXPORT vtkF3DBitonicSort : public vtkObject
{
public:
  static vtkF3DBitonicSort* New();
  vtkTypeMacro(vtkF3DBitonicSort, vtkObject);

  bool Initialize(int workgroupSize, int keyType, int valueType);

  bool Run(vtkOpenGLRenderWindow* context, int nbPairs, vtkOpenGLBufferObject* keys,
    vtkOpenGLBufferObject* values);

private:
  vtkNew<vtkShader> BitonicSortLocalSortComputeShader;
  vtkNew<vtkShaderProgram> BitonicSortLocalSortProgram;
  vtkNew<vtkShader> BitonicSortLocalDisperseComputeShader;
  vtkNew<vtkShaderProgram> BitonicSortLocalDisperseProgram;
  vtkNew<vtkShader> BitonicSortGlobalFlipComputeShader;
  vtkNew<vtkShaderProgram> BitonicSortGlobalFlipProgram;
  vtkNew<vtkShader> BitonicSortGlobalDisperseComputeShader;
  vtkNew<vtkShaderProgram> BitonicSortGlobalDisperseProgram;

  int WorkgroupSize = -1;
};

#endif
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)