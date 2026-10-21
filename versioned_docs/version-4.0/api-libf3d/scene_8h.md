# File scene.h {/* #scene_8h */}

![][C++]

**Location**: `scene.h`





## Classes

* [f3d::scene](classf3d_1_1scene.md)
* [f3d::scene::load\_failure\_exception](structf3d_1_1scene_1_1load__failure__exception.md)
* [f3d::scene::light\_exception](structf3d_1_1scene_1_1light__exception.md)
* [f3d::scene::node\_exception](structf3d_1_1scene_1_1node__exception.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* [animation.h](animation_8h.md)
* [exception.h](exception_8h.md)
* export.h
* [mesh_view.h](mesh__view_8h.md)
* [types.h](types_8h.md)


```mermaid
graph LR
2["animation.h"]
click 2 "animation_8h_source.md#animation_8h_source"
2 --> 3
2 --> 4
2 --> 7

8["camera.h"]
click 8 "camera_8h_source.md#camera_8h_source"
8 --> 3
8 --> 6

5["exception.h"]
click 5 "exception_8h_source.md#exception_8h_source"

9["image.h"]
click 9 "image_8h_source.md#image_8h_source"
9 --> 5
9 --> 3

11["mesh_view.h"]
click 11 "mesh__view_8h_source.md#mesh__view_8h_source"
11 --> 5
11 --> 3

4["options.h"]
click 4 "options_8h_source.md#options_8h_source"
4 --> 5
4 --> 3
4 --> 6

1["scene.h"]
click 1 "scene_8h.md#scene_8h"
1 --> 2
1 --> 5
1 --> 3
1 --> 11
1 --> 6

6["types.h"]
click 6 "types_8h_source.md#types_8h_source"
6 --> 5
6 --> 3

10["video_frame.h"]
click 10 "video__frame_8h_source.md#video__frame_8h_source"
10 --> 5
10 --> 3

7["window.h"]
click 7 "window_8h_source.md#window_8h_source"
7 --> 8
7 --> 3
7 --> 9
7 --> 10

3["export.h"]

```


## Included by

* [engine.h](engine_8h.md)


```mermaid
graph RL
2["engine.h"]
click 2 "engine_8h_source.md#engine_8h_source"

1["scene.h"]
click 1 "scene_8h.md#scene_8h"
2 --> 1

```


## Source


```cpp
#ifndef f3d_scene_h
#define f3d_scene_h

#include "animation.h"
#include "exception.h"
#include "export.h"
#include "mesh_view.h"
#include "types.h"

#include <cstddef>
#include <filesystem>
#include <string>
#include <vector>

namespace f3d
{

enum class file_availability : unsigned char
{
  SUPPORTED = 0,
  UNSUPPORTED_EXTENSION = 1,
  UNSUPPORTED_CONTENT = 2,
};

class F3D_EXPORT scene
{
public:
  struct load_failure_exception : public exception
  {
    explicit load_failure_exception(const std::string& what = "")
      : exception(what) {};
  };


  virtual scene& add(const std::filesystem::path& filePath) = 0;
  virtual scene& add(const std::vector<std::filesystem::path>& filePath) = 0;
  virtual scene& add(const std::vector<std::string>& filePathStrings) = 0;

  virtual scene& add(const mesh_t& mesh) = 0;

  virtual scene& add(std::shared_ptr<mesh_view> mesh) = 0;

  virtual scene& add(const std::byte* buffer, std::size_t size) = 0;


  scene& add(std::initializer_list<std::string> list)
  {
    return this->add(std::vector<std::string>(list));
  }
  scene& add(std::initializer_list<std::filesystem::path> list)
  {
    return this->add(std::vector<std::filesystem::path>(list));
  }

  virtual scene& clear() = 0;

  [[nodiscard]] virtual std::vector<std::filesystem::path> getAddedFiles() const = 0;

  struct light_exception : public exception
  {
    explicit light_exception(const std::string& what = "")
      : f3d::exception(what) {};
  };

  virtual int addLight(const light_state_t& lightState) const = 0;

  [[nodiscard]] virtual int getLightCount() const = 0;

  [[nodiscard]] virtual light_state_t getLight(int index) const = 0;

  virtual scene& updateLight(int index, const light_state_t& lightState) = 0;

  virtual scene& removeLight(int index) = 0;

  virtual scene& removeAllLights() = 0;

  struct node_exception : public exception
  {
    explicit node_exception(const std::string& what = "")
      : f3d::exception(what) {};
  };

  [[nodiscard]] virtual std::vector<node_state_t> getSceneHierarchy() const = 0;

  virtual scene& setNodeVisibility(int nodeId, bool visible) = 0;

  [[nodiscard]] virtual scene_info_t getSceneInfo() const = 0;

  [[nodiscard]] virtual file_availability supports(const std::filesystem::path& filePath) = 0;

  [[nodiscard]] virtual animation& getAnimation() = 0;

protected:
  scene() = default;
  virtual ~scene() = default;
  scene(const scene& opt) = delete;
  scene(scene&& opt) = delete;
  scene& operator=(const scene& opt) = delete;
  scene& operator=(scene&& opt) = delete;
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