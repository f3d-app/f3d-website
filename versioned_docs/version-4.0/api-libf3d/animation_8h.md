# File animation.h {/* #animation_8h */}

![][C++]

**Location**: `animation.h`





## Classes

* [f3d::animation](classf3d_1_1animation.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* export.h
* [options.h](options_8h.md)
* [window.h](window_8h.md)


```mermaid
graph LR
1["animation.h"]
click 1 "animation_8h.md#animation_8h"
1 --> 2
1 --> 3
1 --> 6

7["camera.h"]
click 7 "camera_8h_source.md#camera_8h_source"
7 --> 2
7 --> 5

4["exception.h"]
click 4 "exception_8h_source.md#exception_8h_source"

8["image.h"]
click 8 "image_8h_source.md#image_8h_source"
8 --> 4
8 --> 2

3["options.h"]
click 3 "options_8h_source.md#options_8h_source"
3 --> 4
3 --> 2
3 --> 5

5["types.h"]
click 5 "types_8h_source.md#types_8h_source"
5 --> 4
5 --> 2

9["video_frame.h"]
click 9 "video__frame_8h_source.md#video__frame_8h_source"
9 --> 4
9 --> 2

6["window.h"]
click 6 "window_8h_source.md#window_8h_source"
6 --> 7
6 --> 2
6 --> 8
6 --> 9

2["export.h"]

```


## Included by

* [scene.h](scene_8h.md)


```mermaid
graph RL
1["animation.h"]
click 1 "animation_8h.md#animation_8h"
2 --> 1

3["engine.h"]
click 3 "engine_8h_source.md#engine_8h_source"

2["scene.h"]
click 2 "scene_8h_source.md#scene_8h_source"
3 --> 2

```


## Source


```cpp
#ifndef f3d_animation_h
#define f3d_animation_h

#include "export.h"
#include "options.h"
#include "window.h"

namespace f3d
{
class F3D_EXPORT animation
{
public:
  virtual animation& loadTime(double timeValue) = 0;

  [[nodiscard]] virtual std::pair<double, double> getTimeRange() = 0;

  [[nodiscard]] virtual std::vector<double> getKeyFrames() = 0;

  [[nodiscard]] virtual unsigned int count() const = 0;

  [[nodiscard]] virtual std::string getName(std::optional<int> index = std::nullopt) const = 0;

  [[nodiscard]] virtual std::vector<std::string> getNames() const = 0;

  enum class Direction : std::uint8_t
  {
    FORWARD,
    BACKWARD
  };

  virtual animation& toggle(Direction direction = Direction::FORWARD) = 0;

  virtual animation& start(Direction direction = Direction::FORWARD) = 0;

  virtual animation& stop() = 0;

  [[nodiscard]] virtual bool isPlaying() = 0;

  [[nodiscard]] virtual animation::Direction getDirection() = 0;

protected:
  animation() = default;
  virtual ~animation() = default;
  animation(const animation& opt) = delete;
  animation(animation&& opt) = delete;
  animation& operator=(const animation& opt) = delete;
  animation& operator=(animation&& opt) = delete;
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