# File window.h {/* #window_8h */}

![][C++]

**Location**: `window.h`





## Classes

* [f3d::window](classf3d_1_1window.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* [camera.h](camera_8h.md)
* export.h
* [image.h](image_8h.md)
* [video_frame.h](video__frame_8h.md)


```mermaid
graph LR
2["camera.h"]
click 2 "camera_8h_source.md#camera_8h_source"
2 --> 3
2 --> 4

5["exception.h"]
click 5 "exception_8h_source.md#exception_8h_source"

6["image.h"]
click 6 "image_8h_source.md#image_8h_source"
6 --> 5
6 --> 3

4["types.h"]
click 4 "types_8h_source.md#types_8h_source"
4 --> 5
4 --> 3

7["video_frame.h"]
click 7 "video__frame_8h_source.md#video__frame_8h_source"
7 --> 5
7 --> 3

1["window.h"]
click 1 "window_8h.md#window_8h"
1 --> 2
1 --> 3
1 --> 6
1 --> 7

3["export.h"]

```


## Included by

* [animation.h](animation_8h.md)
* [engine.h](engine_8h.md)
* [interactor.h](interactor_8h.md)


```mermaid
graph RL
2["animation.h"]
click 2 "animation_8h_source.md#animation_8h_source"
3 --> 2

4["engine.h"]
click 4 "engine_8h_source.md#engine_8h_source"

5["interactor.h"]
click 5 "interactor_8h_source.md#interactor_8h_source"
4 --> 5

3["scene.h"]
click 3 "scene_8h_source.md#scene_8h_source"
4 --> 3

1["window.h"]
click 1 "window_8h.md#window_8h"
2 --> 1
4 --> 1
5 --> 1

```


## Source


```cpp
#ifndef f3d_window_h
#define f3d_window_h

#include "camera.h"
#include "export.h"
#include "image.h"
#include "video_frame.h"

#include <string>
#include <utility>

namespace f3d
{
class F3D_EXPORT window
{
public:
  enum class Type : unsigned char
  {
    NONE,
    EXTERNAL,
    GLX,
    WGL,
    COCOA,
    EGL,
    OSMESA,
    WASM,
    UNKNOWN
  };

  [[nodiscard]] virtual Type getType() = 0;

  [[nodiscard]] virtual bool isOffscreen() = 0;

  [[nodiscard]] virtual double getDPIScale() = 0;

  [[nodiscard]] virtual camera& getCamera() = 0;

  virtual bool render() = 0;

  [[nodiscard]] virtual image renderToImage(bool noBackground = false) = 0;

  [[nodiscard]] virtual std::shared_ptr<video_frame> getVideoFrame() = 0;

  virtual window& setSize(int width, int height) = 0;

  [[nodiscard]] virtual std::pair<int, int> getSize() const = 0;

  [[nodiscard]] virtual int getWidth() const = 0;

  [[nodiscard]] virtual int getHeight() const = 0;

  virtual window& setPosition(int x, int y) = 0;

  [[nodiscard]] virtual std::pair<int, int> getPosition() const = 0;

  [[nodiscard]] virtual int getLeft() const = 0;

  [[nodiscard]] virtual int getTop() const = 0;

  virtual window& setIcon(const unsigned char* icon, size_t iconSize) = 0;

  virtual window& setWindowName(std::string_view windowName) = 0;

  [[nodiscard]] virtual point3_t getWorldFromDisplay(const point3_t& displayPoint) const = 0;

  [[nodiscard]] virtual point3_t getDisplayFromWorld(const point3_t& worldPoint) const = 0;

  virtual window& setUseHDRICache(bool use) = 0;

protected:
  window() = default;
  virtual ~window() = default;
  window(const window&) = delete;
  window(window&&) = delete;
  window& operator=(const window&) = delete;
  window& operator=(window&&) = delete;
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