# File F3DUtils.h

![][C++]

**Location**: `F3DUtils.h`





## Namespaces

* [F3DUtils](namespaceF3DUtils.md)

## Includes

* vtkextModule.h


```mermaid
graph LR
1["F3DUtils.h"]
click 1 "F3DUtils_8h.md#F3DUtils_8h"
1 --> 2

2["vtkextModule.h"]

```


## Source


```cpp


#ifndef F3DUtils_h
#define F3DUtils_h

#include "vtkextModule.h"

#include <string>

namespace F3DUtils
{
/*
 * Convert provided std into a double and returns it.
 * Catch conversion error, log them if any and returns the provided def value.
 * Use nameError in the log for easier debugging.
 */
VTKEXT_EXPORT double ParseToDouble(
  const std::string& str, double def, const std::string& nameError);

/*
 * Convert provided std into an int and returns it.
 * Catch conversion error, log them if any and returns the provided def value.
 * Use nameError in the log for easier debugging.
 */
VTKEXT_EXPORT int ParseToInt(const std::string& str, int def, const std::string& nameError);
};

#endif
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)