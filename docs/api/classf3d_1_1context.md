# Class f3d::context

![][C++]
![][public]

**Definition**: `context.h` (line 24)

Utility function that implements basic OpenGL context symbol resolvers.

These functions should be used only when the rendering context (the OpenGL window) isn't managed by libf3d, but by the user directly. Therefore, the engine is created using `f3d[engine::createExternal](classf3d_1_1engine.md#classf3d_1_1engine_1ad34defb23976727cdb2ae884e119e533)` and the functions below can be used as argument of this factory. One can also create a custom functor returning a `f3d::context::function`.

## Inner classes

* [f3d::context::loading\_exception](structf3d_1_1context_1_1loading__exception.md)
* [f3d::context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md)

## Members

* [cocoa](classf3d_1_1context.md#classf3d_1_1context_1a8db31eba3c7458bf6dea0391dbd3ea47)
* [egl](classf3d_1_1context.md#classf3d_1_1context_1a90a0689215151ede480d3b1c94c28b2a)
* [fptr](classf3d_1_1context.md#classf3d_1_1context_1a610f788d93aa8db773efac4238403056)
* [function](classf3d_1_1context.md#classf3d_1_1context_1a6fca2b9e4d2591fd6b68a2f8b5ec727e)
* [getSymbol](classf3d_1_1context.md#classf3d_1_1context_1a605d0609b2db440c9e00349d9c17e2c9)
* [glx](classf3d_1_1context.md#classf3d_1_1context_1a09f0e84622124d63c5d4e81f3dc4105d)
* [osmesa](classf3d_1_1context.md#classf3d_1_1context_1a88a487aa18dd42869f7852b7c6c44aed)
* [wgl](classf3d_1_1context.md#classf3d_1_1context_1a87b1ee9e5330aaa6c29a07069cf74820)

## Public types

### Typedef fptr {#classf3d_1_1context_1a610f788d93aa8db773efac4238403056}

![][public]

**Definition**: `context.h` (line 27)


```cpp
using f3d::context::fptr =  void (*)()
```








**Return type**: void(*)()



### Typedef function {#classf3d_1_1context_1a6fca2b9e4d2591fd6b68a2f8b5ec727e}

![][public]

**Definition**: `context.h` (line 28)


```cpp
using f3d::context::function =  std::function<fptr(const char*)>
```








**Return type**: std::function< fptr(const char *)>



## Public static functions

### Function glx {#classf3d_1_1context_1a09f0e84622124d63c5d4e81f3dc4105d}

![][public]
![][static]


```cpp
static function f3d::context::glx()
```




Create a GLX context function. Only supported on Linux. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails.



**Return type**: function



### Function wgl {#classf3d_1_1context_1a87b1ee9e5330aaa6c29a07069cf74820}

![][public]
![][static]


```cpp
static function f3d::context::wgl()
```




Create a WGL context function. Only supported on Windows. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails.



**Return type**: function



### Function cocoa {#classf3d_1_1context_1a8db31eba3c7458bf6dea0391dbd3ea47}

![][public]
![][static]


```cpp
static function f3d::context::cocoa()
```




Create a COCOA context function. This is usually required when using a headless context and a GPU device. Only supported on macOS. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails.



**Return type**: function



### Function egl {#classf3d_1_1context_1a90a0689215151ede480d3b1c94c28b2a}

![][public]
![][static]


```cpp
static function f3d::context::egl()
```




Create a EGL context function. This is usually required when using a headless context and a GPU device. Only supported on Linux and Windows. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails.



**Return type**: function



### Function osmesa {#classf3d_1_1context_1a88a487aa18dd42869f7852b7c6c44aed}

![][public]
![][static]


```cpp
static function f3d::context::osmesa()
```




Create a OSMesa context function. This is usually required when using a headless context and no GPU device. Only supported on Linux and Windows. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails.



**Return type**: function



### Function getSymbol {#classf3d_1_1context_1a605d0609b2db440c9e00349d9c17e2c9}

![][public]
![][static]


```cpp
static function f3d::context::getSymbol(std::string_view lib, std::string_view func)
```




Create a context function from a library name and a function name. The library name must be specified without its prefix and extension. For example, `getSymbol("EGL", "eglGetProcAddress")` looks for the symbol `eglGetProcAddress` in the library `libEGL.so` on Linux. Throw a [loading\_exception](structf3d_1_1context_1_1loading__exception.md) if it fails to find the library or a [symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if the lib does not contains the expected symbol.



**Parameters**:

* std::string_view **lib**
* std::string_view **func**

**Return type**: function





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)