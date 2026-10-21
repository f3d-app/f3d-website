# Class f3d::window {/* #classf3d_1_1window */}

![][C++]
![][public]

**Definition**: `window.h` (line 23)

Abstract class to render in a window or an image.

A class to render things in a window or an image. An icon and windowName can be set which can be shown by a window manager.

## Members

* [getCamera](classf3d_1_1window.md#classf3d_1_1window_1a96bc2fa72c67f0fd2242388bb3cbd32b)
* [getDisplayFromWorld](classf3d_1_1window.md#classf3d_1_1window_1a95946b71f0ff9a3cbc36bc9b717270b8)
* [getDPIScale](classf3d_1_1window.md#classf3d_1_1window_1a5fd6c8a0077c7259ded4a6afc5fd97bb)
* [getHeight](classf3d_1_1window.md#classf3d_1_1window_1ad6a230a5f6b8e83ea7680da1c6a32434)
* [getLeft](classf3d_1_1window.md#classf3d_1_1window_1abe2af65a05d334eb7113b935cfe1005c)
* [getPosition](classf3d_1_1window.md#classf3d_1_1window_1ac55f4778a068918b332e06d400a24c51)
* [getSize](classf3d_1_1window.md#classf3d_1_1window_1a834d65cc733558741a2e4b3a6674aa12)
* [getTop](classf3d_1_1window.md#classf3d_1_1window_1a10e358583d7f0fd7a0ec07772e0081e6)
* [getType](classf3d_1_1window.md#classf3d_1_1window_1aef4007b0592061fa3f47152b311cc680)
* [getVideoFrame](classf3d_1_1window.md#classf3d_1_1window_1a97709b62c2c8dc1b608ed8d448e86d95)
* [getWidth](classf3d_1_1window.md#classf3d_1_1window_1a7c115887e68c0bdd5cf7c6048f410c52)
* [getWorldFromDisplay](classf3d_1_1window.md#classf3d_1_1window_1ae963c7f41cecb2fb585a83495b05bb73)
* [isOffscreen](classf3d_1_1window.md#classf3d_1_1window_1a0c44d1982ff046a99204937e0df1169d)
* [render](classf3d_1_1window.md#classf3d_1_1window_1ab0b3550f37167c31821e7ec7400bc0de)
* [renderToImage](classf3d_1_1window.md#classf3d_1_1window_1a5f680e97668e40cb8640a9c6d8340b57)
* [setIcon](classf3d_1_1window.md#classf3d_1_1window_1a97032a56c303d51b9b74a438341696d7)
* [setPosition](classf3d_1_1window.md#classf3d_1_1window_1a80d951424a1687434219a6e8030d5db3)
* [setSize](classf3d_1_1window.md#classf3d_1_1window_1ac88005ab237f1aaa559968b3752a8509)
* [setUseHDRICache](classf3d_1_1window.md#classf3d_1_1window_1a36b723c7db1c3bed7a681434cca787db)
* [setWindowName](classf3d_1_1window.md#classf3d_1_1window_1ae5d1313a7822bd6bf234369feb544f37)
* [Type](classf3d_1_1window.md#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471)

## Public types

### Enumeration type Type {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471 */}

![][public]

**Definition**: `window.h` (line 39)


```cpp
enum Type {
  NONE,
  EXTERNAL,
  GLX,
  WGL,
  COCOA,
  EGL,
  OSMESA,
  WASM,
  UNKNOWN
}
```




Enumeration of supported window types
* NONE: A mock window without rendering capabilities.

* EXTERNAL: An external window that assume the OpenGL context would have been created by another framework.

* GLX: A window using GLX.

* WGL: A window using WGL.

* COCOA: A window using COCOA.

* EGL: An offscreen window using hardware acceleration that can run headless.

* OSMESA: An offscreen window using software rendering that is always run headless.

* WASM: A webassembly window (when libf3d is built with emscripten).

* UNKNOWN: An unknown window (should not happen).



#### Enumerator NONE {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471ab50339a10e1de285ac99d4c3990b8693 */}





#### Enumerator EXTERNAL {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471a3932d629fb5e2be9d09b3a4485b3cc9d */}





#### Enumerator GLX {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471ac313d26d26abf7402a24ce15663b52b6 */}





#### Enumerator WGL {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471aef3c7326c5c23cc9c408d29410352b67 */}





#### Enumerator COCOA {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471a0439e3cee63c8741e500230121911962 */}





#### Enumerator EGL {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471ab1e1fe0cc927dbeae22dc1839e01bb20 */}





#### Enumerator OSMESA {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471a8e7cb674425fba84b801d46f1fd26b34 */}





#### Enumerator WASM {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471ac7dbeb10b3299406a04231654cf6defd */}





#### Enumerator UNKNOWN {/* #classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471a696b031073e74bf2cb98e5ef201d4aa3 */}





{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::Type"}]}`
*/}

## Public functions

### Function getType {/* #classf3d_1_1window_1aef4007b0592061fa3f47152b311cc680 */}

![][public]


```cpp
virtual Type f3d::window::getType()=0
```




Get the type of the window.



**Return type**: [Type](classf3d_1_1window.md#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getType"}]}`
*/}

### Function isOffscreen {/* #classf3d_1_1window_1a0c44d1982ff046a99204937e0df1169d */}

![][public]


```cpp
virtual bool f3d::window::isOffscreen()=0
```




Is the window offscreen.



**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::isOffscreen"}]}`
*/}

### Function getDPIScale {/* #classf3d_1_1window_1a5fd6c8a0077c7259ded4a6afc5fd97bb */}

![][public]


```cpp
virtual double f3d::window::getDPIScale()=0
```




Get the DPI scale value of the window. Returns 1.0 on platforms where DPI scaling is not supported.



**Return type**: double

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getDPIScale"}]}`
*/}

### Function getCamera {/* #classf3d_1_1window_1a96bc2fa72c67f0fd2242388bb3cbd32b */}

![][public]


```cpp
virtual camera & f3d::window::getCamera()=0
```




Get the camera provided by the window.



**Return type**: [camera](classf3d_1_1camera.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getCamera"}]}`
*/}

### Function render {/* #classf3d_1_1window_1ab0b3550f37167c31821e7ec7400bc0de */}

![][public]


```cpp
virtual bool f3d::window::render()=0
```




Perform a render of the window to the screen. All dynamic options are updated if needed. Return true on success, false otherwise.



**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::render"}]}`
*/}

### Function renderToImage {/* #classf3d_1_1window_1a5f680e97668e40cb8640a9c6d8340b57 */}

![][public]


```cpp
virtual image f3d::window::renderToImage(bool noBackground=false)=0
```




Perform a render of the window to the screen and save the result in a [f3d::image](classf3d_1_1image.md). of ChannelType BYTE and 3 or 4 components (RGB or RGBA). Set noBackground to true to have a transparent background. Returns the resulting [f3d::image](classf3d_1_1image.md).



**Parameters**:

* bool **noBackground** = false 

**Return type**: [image](classf3d_1_1image.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::renderToImage"}]}`
*/}

### Function getVideoFrame {/* #classf3d_1_1window_1a97709b62c2c8dc1b608ed8d448e86d95 */}

![][public]


```cpp
virtual std::shared_ptr< video_frame > f3d::window::getVideoFrame()=0
```




Get the current video frame of the window. This construct the video frame, allocates and fills the Y and UV planes with the current window content in the expected layout. Requires F3D_MODULE_FFMPEG to be enabled. Throws a [video\_frame::invalid\_frame\_exception](structf3d_1_1video__frame_1_1invalid__frame__exception.md) if F3D_MODULE_FFMPEG is disabled or if the resolution is not even or positive. Returns the resulting [f3d::video\_frame](classf3d_1_1video__frame.md).



**Return type**: std::shared_ptr< [video\_frame](classf3d_1_1video__frame.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getVideoFrame"}]}`
*/}

### Function setSize {/* #classf3d_1_1window_1ac88005ab237f1aaa559968b3752a8509 */}

![][public]


```cpp
virtual window & f3d::window::setSize(int width, int height)=0
```




Set the size of the window.



**Parameters**:

* int **width**
* int **height**

**Return type**: [window](classf3d_1_1window.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::setSize"}]}`
*/}

### Function getSize {/* #classf3d_1_1window_1a834d65cc733558741a2e4b3a6674aa12 */}

![][public]
![][const]


```cpp
virtual std::pair< int, int > f3d::window::getSize() const =0
```




Get the size of the window as a (width, height) pair.



**Return type**: std::pair< int, int >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getSize"}]}`
*/}

### Function getWidth {/* #classf3d_1_1window_1a7c115887e68c0bdd5cf7c6048f410c52 */}

![][public]
![][const]


```cpp
virtual int f3d::window::getWidth() const =0
```




Get the width of the window, see getSize.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getWidth"}]}`
*/}

### Function getHeight {/* #classf3d_1_1window_1ad6a230a5f6b8e83ea7680da1c6a32434 */}

![][public]
![][const]


```cpp
virtual int f3d::window::getHeight() const =0
```




Get the height of the window, see getSize.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getHeight"}]}`
*/}

### Function setPosition {/* #classf3d_1_1window_1a80d951424a1687434219a6e8030d5db3 */}

![][public]


```cpp
virtual window & f3d::window::setPosition(int x, int y)=0
```




Set the position of the window.



**Parameters**:

* int **x**
* int **y**

**Return type**: [window](classf3d_1_1window.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::setPosition"}]}`
*/}

### Function getPosition {/* #classf3d_1_1window_1ac55f4778a068918b332e06d400a24c51 */}

![][public]
![][const]


```cpp
virtual std::pair< int, int > f3d::window::getPosition() const =0
```




Get the position of the window as an (x, y) pair.



**Return type**: std::pair< int, int >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getPosition"}]}`
*/}

### Function getLeft {/* #classf3d_1_1window_1abe2af65a05d334eb7113b935cfe1005c */}

![][public]
![][const]


```cpp
virtual int f3d::window::getLeft() const =0
```




Get the position of the left border of the window, see getPosition.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getLeft"}]}`
*/}

### Function getTop {/* #classf3d_1_1window_1a10e358583d7f0fd7a0ec07772e0081e6 */}

![][public]
![][const]


```cpp
virtual int f3d::window::getTop() const =0
```




Get the position of the top border of the window, see getPosition.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getTop"}]}`
*/}

### Function setIcon {/* #classf3d_1_1window_1a97032a56c303d51b9b74a438341696d7 */}

![][public]


```cpp
virtual window & f3d::window::setIcon(const unsigned char *icon, size_t iconSize)=0
```




Set the icon to be shown by a window manager. icon should be an unsigned char array. iconSize should be the sizeof(icon).



**Parameters**:

* const unsigned char * **icon**
* size_t **iconSize**

**Return type**: [window](classf3d_1_1window.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::setIcon"}]}`
*/}

### Function setWindowName {/* #classf3d_1_1window_1ae5d1313a7822bd6bf234369feb544f37 */}

![][public]


```cpp
virtual window & f3d::window::setWindowName(std::string_view windowName)=0
```




Set the window name to be shown by a window manager.



**Parameters**:

* std::string_view **windowName**

**Return type**: [window](classf3d_1_1window.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::setWindowName"}]}`
*/}

### Function getWorldFromDisplay {/* #classf3d_1_1window_1ae963c7f41cecb2fb585a83495b05bb73 */}

![][public]
![][const]


```cpp
virtual point3_t f3d::window::getWorldFromDisplay(const point3_t &displayPoint) const =0
```




Convert a point in display coordinate to world coordinate.



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **displayPoint**

**Return type**: [point3\_t](structf3d_1_1point3__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getWorldFromDisplay"}]}`
*/}

### Function getDisplayFromWorld {/* #classf3d_1_1window_1a95946b71f0ff9a3cbc36bc9b717270b8 */}

![][public]
![][const]


```cpp
virtual point3_t f3d::window::getDisplayFromWorld(const point3_t &worldPoint) const =0
```




Convert a point in world coordinate to display coordinate.



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **worldPoint**

**Return type**: [point3\_t](structf3d_1_1point3__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::getDisplayFromWorld"}]}`
*/}

### Function setUseHDRICache {/* #classf3d_1_1window_1a36b723c7db1c3bed7a681434cca787db */}

![][public]


```cpp
virtual window & f3d::window::setUseHDRICache(bool use)=0
```




Set whether to use HDRI caching or not. Enabled by default. HDRI caching can improve performance by storing precomputed data in cache path. Use [engine::setCachePath](classf3d_1_1engine.md#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a) for specifying the cache location.



**Parameters**:

* bool **use**

**Return type**: [window](classf3d_1_1window.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::window::setUseHDRICache"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"window_8h"},"children":[{"type":"text","text":"window.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)