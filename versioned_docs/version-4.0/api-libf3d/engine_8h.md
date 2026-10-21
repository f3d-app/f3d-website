# File engine.h {/* #engine_8h */}

![][C++]

**Location**: `engine.h`





## Classes

* [f3d::engine](classf3d_1_1engine.md)
* [f3d::engine::state](structf3d_1_1engine_1_1state.md)
* [f3d::engine::libInformation](structf3d_1_1engine_1_1libInformation.md)
* [f3d::engine::readerInformation](structf3d_1_1engine_1_1readerInformation.md)
* [f3d::engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md)
* [f3d::engine::no\_interactor\_exception](structf3d_1_1engine_1_1no__interactor__exception.md)
* [f3d::engine::plugin\_exception](structf3d_1_1engine_1_1plugin__exception.md)
* [f3d::engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md)
* [f3d::engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* [context.h](context_8h.md)
* [exception.h](exception_8h.md)
* export.h
* [interactor.h](interactor_8h.md)
* [options.h](options_8h.md)
* [scene.h](scene_8h.md)
* [window.h](window_8h.md)


```mermaid
graph LR
15["animation.h"]
click 15 "animation_8h_source.md#animation_8h_source"
15 --> 4
15 --> 7
15 --> 10

11["camera.h"]
click 11 "camera_8h_source.md#camera_8h_source"
11 --> 4
11 --> 8

2["context.h"]
click 2 "context_8h_source.md#context_8h_source"
2 --> 3
2 --> 4

1["engine.h"]
click 1 "engine_8h.md#engine_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 7
1 --> 14
1 --> 10

3["exception.h"]
click 3 "exception_8h_source.md#exception_8h_source"

12["image.h"]
click 12 "image_8h_source.md#image_8h_source"
12 --> 3
12 --> 4

5["interactor.h"]
click 5 "interactor_8h_source.md#interactor_8h_source"
5 --> 3
5 --> 4
5 --> 6
5 --> 7
5 --> 9
5 --> 10

6["log.h"]
click 6 "log_8h_source.md#log_8h_source"
6 --> 4

16["mesh_view.h"]
click 16 "mesh__view_8h_source.md#mesh__view_8h_source"
16 --> 3
16 --> 4

7["options.h"]
click 7 "options_8h_source.md#options_8h_source"
7 --> 3
7 --> 4
7 --> 8

14["scene.h"]
click 14 "scene_8h_source.md#scene_8h_source"
14 --> 15
14 --> 3
14 --> 4
14 --> 16
14 --> 8

8["types.h"]
click 8 "types_8h_source.md#types_8h_source"
8 --> 3
8 --> 4

9["utils.h"]
click 9 "utils_8h_source.md#utils_8h_source"
9 --> 3
9 --> 4

13["video_frame.h"]
click 13 "video__frame_8h_source.md#video__frame_8h_source"
13 --> 3
13 --> 4

10["window.h"]
click 10 "window_8h_source.md#window_8h_source"
10 --> 11
10 --> 4
10 --> 12
10 --> 13

4["export.h"]

```


## Source


```cpp
#ifndef f3d_engine_h
#define f3d_engine_h

#include "context.h"
#include "exception.h"
#include "export.h"
#include "interactor.h"
#include "options.h"
#include "scene.h"
#include "window.h"

#include <filesystem>
#include <iosfwd>
#include <map>
#include <string>
#include <vector>

namespace f3d
{
class F3D_EXPORT engine
{
public:
  [[nodiscard]] static engine create(bool offscreen = false);

  [[nodiscard]] static engine createNone();

  [[nodiscard]] static engine createGLX(bool offscreen = false);

  [[nodiscard]] static engine createWGL(bool offscreen = false);

  [[nodiscard]] static engine createEGL();

  [[nodiscard]] static engine createOSMesa();

  [[nodiscard]] static engine createWasm(std::string_view canvasSelector = "#canvas");

  [[nodiscard]] static engine createExternal(const context::function& getProcAddress);

  [[nodiscard]] static engine createExternalGLX();

  [[nodiscard]] static engine createExternalWGL();

  [[nodiscard]] static engine createExternalCOCOA();

  [[nodiscard]] static engine createExternalEGL();

  [[nodiscard]] static engine createExternalOSMesa();

  ~engine();


  engine(const engine& other) = delete;
  engine(engine&& other) noexcept;
  engine& operator=(const engine& other) = delete;
  engine& operator=(engine&& other) noexcept;

  engine& setCachePath(const std::filesystem::path& cachePath);

  [[nodiscard]] std::filesystem::path getCachePath() const;

  engine& setOptions(const options& opt);

  engine& setOptions(options&& opt);

  [[nodiscard]] options& getOptions();

  [[nodiscard]] window& getWindow();

  [[nodiscard]] scene& getScene();

  [[nodiscard]] interactor& getInteractor();

  struct state
  {
    [[nodiscard]] static F3D_EXPORT state fromString(const std::string& content);

    [[nodiscard]] static F3D_EXPORT state fromFile(const std::filesystem::path& filePath);

    [[nodiscard]] static F3D_EXPORT state fromClipboard();

    [[nodiscard]] F3D_EXPORT std::string toString() const;

    F3D_EXPORT void toFile(const std::filesystem::path& filePath) const;

    F3D_EXPORT void toClipboard() const;

  private:
    friend class engine;
    friend F3D_EXPORT std::ostream& operator<<(std::ostream& stream, const state& st);
    friend F3D_EXPORT std::istream& operator>>(std::istream& stream, state& st);

    std::string Content;
  };

  [[nodiscard]] state dump();

  engine& load(const state& st);

  static std::map<std::string, bool> getRenderingBackendList();

  static void loadPlugin(const std::string& pathOrName,
    const std::vector<std::filesystem::path>& pluginSearchPaths = {});

  static void autoloadPlugins();

  [[nodiscard]] static std::vector<std::string> getPluginsList(
    const std::filesystem::path& pluginPath);

  [[nodiscard]] static std::vector<std::string> getAllReaderOptionNames();

  static void setReaderOption(const std::string& name, const std::string& value);

  struct libInformation
  {
    std::string Version;
    std::string VersionFull;
    std::string BuildDate;
    std::string BuildSystem;
    std::string Compiler;
    std::map<std::string, bool> Modules;
    std::string VTKVersion;
    std::vector<std::string> Copyrights;
    std::string License;
  };

  [[nodiscard]] static libInformation getLibInfo();

  struct readerInformation
  {
    std::string Name;
    std::string Description;
    std::vector<std::string> Extensions;
    std::vector<std::string> MimeTypes;
    std::string PluginName;
    bool HasSceneReader = false;
    bool HasGeometryReader = false;
    bool SupportsStream = false;
  };

  [[nodiscard]] static std::vector<readerInformation> getReadersInfo();

  struct no_window_exception : public exception
  {
    explicit no_window_exception(const std::string& what = "");
  };

  struct no_interactor_exception : public exception
  {
    explicit no_interactor_exception(const std::string& what = "");
  };

  struct plugin_exception : public exception
  {
    explicit plugin_exception(const std::string& what = "");
  };

  struct cache_exception : public exception
  {
    explicit cache_exception(const std::string& what = "");
  };

  struct statefile_exception : public exception
  {
    explicit statefile_exception(const std::string& what = "");
  };

private:
  class internals;
  internals* Internals;

  engine(const std::optional<window::Type>& windowType, bool offscreen,
    const context::function& loader, std::string_view id = "");
};

F3D_EXPORT std::ostream& operator<<(std::ostream& stream, const engine::state& st);

F3D_EXPORT std::istream& operator>>(std::istream& stream, engine::state& st);
}

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)