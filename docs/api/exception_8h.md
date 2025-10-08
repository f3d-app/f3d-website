# File exception.h

![][C++]

**Location**: `exception.h`





## Classes

* [f3d::exception](structf3d_1_1exception.md)

## Namespaces

* [f3d](namespacef3d.md)

## Included by

* [context.h](context_8h.md)
* [engine.h](engine_8h.md)
* [image.h](image_8h.md)
* [interactor.h](interactor_8h.md)
* [scene.h](scene_8h.md)
* [types.h](types_8h.md)
* [utils.h](utils_8h.md)


```mermaid
graph RL
9["camera.h"]
click 9 "camera_8h_source.md#camera_8h_source"
5 --> 9

2["context.h"]
click 2 "context_8h_source.md#context_8h_source"
3 --> 2

3["engine.h"]
click 3 "engine_8h_source.md#engine_8h_source"

1["exception.h"]
click 1 "exception_8h.md#exception_8h"
2 --> 1
3 --> 1
4 --> 1
6 --> 1
7 --> 1
8 --> 1
10 --> 1

4["image.h"]
click 4 "image_8h_source.md#image_8h_source"
5 --> 4

6["interactor.h"]
click 6 "interactor_8h_source.md#interactor_8h_source"
3 --> 6

7["scene.h"]
click 7 "scene_8h_source.md#scene_8h_source"
3 --> 7

8["types.h"]
click 8 "types_8h_source.md#types_8h_source"
9 --> 8
7 --> 8

10["utils.h"]
click 10 "utils_8h_source.md#utils_8h_source"

5["window.h"]
click 5 "window_8h_source.md#window_8h_source"
3 --> 5
6 --> 5

```


## Source


```cpp
#ifndef f3d_exception_h
#define f3d_exception_h

#include <stdexcept>
#include <string>

namespace f3d
{
struct exception : public std::runtime_error
{
  explicit exception(const std::string& what = "")
    : std::runtime_error(what)
  {
  }
};
}

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)