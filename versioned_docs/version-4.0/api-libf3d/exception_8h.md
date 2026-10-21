# File exception.h {/* #exception_8h */}

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
* [mesh_view.h](mesh__view_8h.md)
* [options.h](options_8h.md)
* [scene.h](scene_8h.md)
* [types.h](types_8h.md)
* [utils.h](utils_8h.md)
* [video_encoder.h](video__encoder_8h.md)
* [video_frame.h](video__frame_8h.md)
* [video_packet.h](video__packet_8h.md)


```mermaid
graph RL
6["animation.h"]
click 6 "animation_8h_source.md#animation_8h_source"
7 --> 6

12["camera.h"]
click 12 "camera_8h_source.md#camera_8h_source"
5 --> 12

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
8 --> 1
9 --> 1
10 --> 1
7 --> 1
11 --> 1
13 --> 1
14 --> 1
15 --> 1
16 --> 1

4["image.h"]
click 4 "image_8h_source.md#image_8h_source"
5 --> 4

8["interactor.h"]
click 8 "interactor_8h_source.md#interactor_8h_source"
3 --> 8

9["mesh_view.h"]
click 9 "mesh__view_8h_source.md#mesh__view_8h_source"
7 --> 9

10["options.h"]
click 10 "options_8h_source.md#options_8h_source"
6 --> 10
3 --> 10
8 --> 10

7["scene.h"]
click 7 "scene_8h_source.md#scene_8h_source"
3 --> 7

11["types.h"]
click 11 "types_8h_source.md#types_8h_source"
12 --> 11
10 --> 11
7 --> 11

13["utils.h"]
click 13 "utils_8h_source.md#utils_8h_source"
8 --> 13

14["video_encoder.h"]
click 14 "video__encoder_8h_source.md#video__encoder_8h_source"

15["video_frame.h"]
click 15 "video__frame_8h_source.md#video__frame_8h_source"
14 --> 15
5 --> 15

16["video_packet.h"]
click 16 "video__packet_8h_source.md#video__packet_8h_source"
14 --> 16

5["window.h"]
click 5 "window_8h_source.md#window_8h_source"
6 --> 5
3 --> 5
8 --> 5

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