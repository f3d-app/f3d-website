# File log.h {#log_8h}

![][C++]

**Location**: `log.h`





## Classes

* [f3d::log](classf3d_1_1log.md)

## Namespaces

* [f3d](namespacef3d.md)

## Includes

* export.h


```mermaid
graph LR
1["log.h"]
click 1 "log_8h.md#log_8h"
1 --> 2

2["export.h"]

```


## Included by

* [interactor.h](interactor_8h.md)


```mermaid
graph RL
3["engine.h"]
click 3 "engine_8h_source.md#engine_8h_source"

2["interactor.h"]
click 2 "interactor_8h_source.md#interactor_8h_source"
3 --> 2

1["log.h"]
click 1 "log_8h.md#log_8h"
2 --> 1

```


## Source


```cpp
#ifndef f3d_log_h
#define f3d_log_h

#include "export.h"

#include <functional>
#include <sstream>
#include <string>

namespace f3d
{
class F3D_EXPORT log
{
public:
  enum class VerboseLevel : unsigned char
  {
    DEBUG = 0,
    INFO,
    WARN,
    ERROR,
    QUIET
  };

  template<typename... Args>
  static void print(VerboseLevel level, Args... args)
  {
    std::stringstream ss;
    log::appendArg(ss, args...);
    log::printInternal(level, ss.str());
  }

  template<typename... Args>
  static void debug(Args... args)
  {
    std::stringstream ss;
    log::appendArg(ss, args...);
    log::debugInternal(ss.str());
  }

  template<typename... Args>
  static void info(Args... args)
  {
    std::stringstream ss;
    log::appendArg(ss, args...);
    log::infoInternal(ss.str());
  }

  template<typename... Args>
  static void warn(Args... args)
  {
    std::stringstream ss;
    log::appendArg(ss, args...);
    log::warnInternal(ss.str());
  }

  template<typename... Args>
  static void error(Args... args)
  {
    std::stringstream ss;
    log::appendArg(ss, args...);
    log::errorInternal(ss.str());
  }

  static void setUseColoring(bool use);

  static void setVerboseLevel(VerboseLevel level, bool forceStdErr = false);

  static VerboseLevel getVerboseLevel();

  using forward_fn_t = std::function<void(VerboseLevel, const std::string&)>;

  static void forward(const forward_fn_t& callback);

protected:
  static void appendArg(std::stringstream&)
  {
  }

  template<typename T, typename... Args>
  static void appendArg(std::stringstream& ss, T value, Args... args)
  {
    ss << value;
    log::appendArg(ss, args...);
  }

  static void printInternal(VerboseLevel level, const std::string& msg);
  static void errorInternal(const std::string& msg);
  static void warnInternal(const std::string& msg);
  static void infoInternal(const std::string& msg);
  static void debugInternal(const std::string& msg);
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