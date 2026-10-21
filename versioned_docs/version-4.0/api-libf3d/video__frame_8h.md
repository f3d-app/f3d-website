# File video_frame.h {/* #video__frame_8h */}

![][C++]

**Location**: `video\_frame.h`





## Classes

* [f3d::video\_frame](classf3d_1_1video__frame.md)
* [f3d::video\_frame::invalid\_frame\_exception](structf3d_1_1video__frame_1_1invalid__frame__exception.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* [exception.h](exception_8h.md)
* export.h


```mermaid
graph LR
2["exception.h"]
click 2 "exception_8h_source.md#exception_8h_source"

1["video_frame.h"]
click 1 "video__frame_8h.md#video__frame_8h"
1 --> 2
1 --> 3

3["export.h"]

```


## Included by

* [video_encoder.h](video__encoder_8h.md)
* [window.h](window_8h.md)


```mermaid
graph RL
4["animation.h"]
click 4 "animation_8h_source.md#animation_8h_source"
5 --> 4

6["engine.h"]
click 6 "engine_8h_source.md#engine_8h_source"

7["interactor.h"]
click 7 "interactor_8h_source.md#interactor_8h_source"
6 --> 7

5["scene.h"]
click 5 "scene_8h_source.md#scene_8h_source"
6 --> 5

2["video_encoder.h"]
click 2 "video__encoder_8h_source.md#video__encoder_8h_source"

1["video_frame.h"]
click 1 "video__frame_8h.md#video__frame_8h"
2 --> 1
3 --> 1

3["window.h"]
click 3 "window_8h_source.md#window_8h_source"
4 --> 3
6 --> 3
7 --> 3

```


## Source


```cpp
#ifndef f3d_video_frame_h
#define f3d_video_frame_h

#include "exception.h"
#include "export.h"

namespace f3d
{
class F3D_EXPORT video_frame
{
public:
  virtual ~video_frame() = default;

  virtual video_frame& setTimestamp(int64_t timestamp) = 0;

  struct invalid_frame_exception : public exception
  {
    explicit invalid_frame_exception(const std::string& what = "");
  };
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