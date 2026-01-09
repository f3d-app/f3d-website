# Class f3d::camera {#classf3d_1_1camera}

![][C++]
![][public]

**Definition**: `camera.h` (line 35)

Abstract class to control a camera in a window.

A class to control a camera in a window. When modifying the Position/FocalPoint/ViewUp API or the camera movements API, the view up is automatically orthogonalized. All angles are in degrees.

## Members

* [azimuth](classf3d_1_1camera.md#classf3d_1_1camera_1a1f7e0da617b9404229131c722d27692b)
* [dolly](classf3d_1_1camera.md#classf3d_1_1camera_1a52b3ef3992b10bc5d0ef0d0af78c18dd)
* [elevation](classf3d_1_1camera.md#classf3d_1_1camera_1a834dcc2896ad2881c7bdef6e1759d67e)
* [getFocalPoint](classf3d_1_1camera.md#classf3d_1_1camera_1a9f6c94e3ef2c043dd6cae735dec083e0)
* [getFocalPoint](classf3d_1_1camera.md#classf3d_1_1camera_1aeb8cd30cd39bc60136669892d3cdcc57)
* [getPosition](classf3d_1_1camera.md#classf3d_1_1camera_1a40c5b3c88d916dab949adab8d426595b)
* [getPosition](classf3d_1_1camera.md#classf3d_1_1camera_1ab295a53f2d6f22ef7344b6e6a783f57d)
* [getState](classf3d_1_1camera.md#classf3d_1_1camera_1a948a86b0f4cdd00ffaab16e3138b3472)
* [getState](classf3d_1_1camera.md#classf3d_1_1camera_1ad3a3808a94f57e11ba44a06dc107bc9a)
* [getViewAngle](classf3d_1_1camera.md#classf3d_1_1camera_1add0fc7c6cdd21ff002c8e3b9e9f41f34)
* [getViewAngle](classf3d_1_1camera.md#classf3d_1_1camera_1a87f4da6b5c0893c703dabde78423c6d2)
* [getViewUp](classf3d_1_1camera.md#classf3d_1_1camera_1ad063e0a053acb2e5e9275bec1d6e0054)
* [getViewUp](classf3d_1_1camera.md#classf3d_1_1camera_1ae676ec1e47bf39276146a36ba37530c0)
* [pan](classf3d_1_1camera.md#classf3d_1_1camera_1ab04f6d77ca126becdf76f8c54b69b2d2)
* [pitch](classf3d_1_1camera.md#classf3d_1_1camera_1aac2ed5910d98ba57c2d19335dcbca87b)
* [resetToBounds](classf3d_1_1camera.md#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e)
* [resetToDefault](classf3d_1_1camera.md#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132)
* [roll](classf3d_1_1camera.md#classf3d_1_1camera_1aba63ef9b310c53f90cecb2d546fe18cf)
* [setCurrentAsDefault](classf3d_1_1camera.md#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d)
* [setFocalPoint](classf3d_1_1camera.md#classf3d_1_1camera_1a698939cac8bdccf066b902ef7786abaf)
* [setPosition](classf3d_1_1camera.md#classf3d_1_1camera_1a14f81460eb981f789c5d4a6784fd8d29)
* [setState](classf3d_1_1camera.md#classf3d_1_1camera_1a24144f2aa3dd5785f23d6f641a82f549)
* [setViewAngle](classf3d_1_1camera.md#classf3d_1_1camera_1aca943dc34c65f3b5f9f3773a7b943084)
* [setViewUp](classf3d_1_1camera.md#classf3d_1_1camera_1af41a32697463f7a9557a626ce36b309e)
* [yaw](classf3d_1_1camera.md#classf3d_1_1camera_1a31e21553e251eb931127b138bfd44cef)
* [zoom](classf3d_1_1camera.md#classf3d_1_1camera_1a25389ac60a7dfc9f70a01e85f1f887de)

## Parameters

Set/Get the camera parameters.

### Function setPosition {#classf3d_1_1camera_1a14f81460eb981f789c5d4a6784fd8d29}

![][public]


```cpp
virtual camera & f3d::camera::setPosition(const point3_t &pos)=0
```




Set the position of the camera to the provided arg



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **pos**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setPosition"}]}`
-->

### Function getPosition {#classf3d_1_1camera_1a40c5b3c88d916dab949adab8d426595b}

![][public]
![][const]


```cpp
virtual point3_t f3d::camera::getPosition() const =0
```




Return the position of the camera



**Return type**: [point3\_t](structf3d_1_1point3__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getPosition"}]}`
-->

### Function getPosition {#classf3d_1_1camera_1ab295a53f2d6f22ef7344b6e6a783f57d}

![][public]
![][const]


```cpp
virtual void f3d::camera::getPosition(point3_t &pos) const =0
```




Get the position of the camera into the provided arg



**Parameters**:

* [point3\_t](structf3d_1_1point3__t.md) & **pos**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getPosition"}]}`
-->

### Function setFocalPoint {#classf3d_1_1camera_1a698939cac8bdccf066b902ef7786abaf}

![][public]


```cpp
virtual camera & f3d::camera::setFocalPoint(const point3_t &foc)=0
```




Set the focal point of the camera to the provided arg



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **foc**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setFocalPoint"}]}`
-->

### Function getFocalPoint {#classf3d_1_1camera_1a9f6c94e3ef2c043dd6cae735dec083e0}

![][public]
![][const]


```cpp
virtual point3_t f3d::camera::getFocalPoint() const =0
```




Return the focal point of the camera



**Return type**: [point3\_t](structf3d_1_1point3__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getFocalPoint"}]}`
-->

### Function getFocalPoint {#classf3d_1_1camera_1aeb8cd30cd39bc60136669892d3cdcc57}

![][public]
![][const]


```cpp
virtual void f3d::camera::getFocalPoint(point3_t &foc) const =0
```




Get the focal point of the camera into the provided arg



**Parameters**:

* [point3\_t](structf3d_1_1point3__t.md) & **foc**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getFocalPoint"}]}`
-->

### Function setViewUp {#classf3d_1_1camera_1af41a32697463f7a9557a626ce36b309e}

![][public]


```cpp
virtual camera & f3d::camera::setViewUp(const vector3_t &up)=0
```




Set the view up of the camera to the provided arg



**Parameters**:

* const [vector3\_t](structf3d_1_1vector3__t.md) & **up**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setViewUp"}]}`
-->

### Function getViewUp {#classf3d_1_1camera_1ad063e0a053acb2e5e9275bec1d6e0054}

![][public]
![][const]


```cpp
virtual vector3_t f3d::camera::getViewUp() const =0
```




Return the view up of the camera



**Return type**: [vector3\_t](structf3d_1_1vector3__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getViewUp"}]}`
-->

### Function getViewUp {#classf3d_1_1camera_1ae676ec1e47bf39276146a36ba37530c0}

![][public]
![][const]


```cpp
virtual void f3d::camera::getViewUp(vector3_t &up) const =0
```




Get the view up of the camera into the provided arg



**Parameters**:

* [vector3\_t](structf3d_1_1vector3__t.md) & **up**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getViewUp"}]}`
-->

### Function setViewAngle {#classf3d_1_1camera_1aca943dc34c65f3b5f9f3773a7b943084}

![][public]


```cpp
virtual camera & f3d::camera::setViewAngle(const angle_deg_t &angle)=0
```




Set the view angle in degrees of the camera to the provided arg



**Parameters**:

* const angle_deg_t & **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setViewAngle"}]}`
-->

### Function getViewAngle {#classf3d_1_1camera_1add0fc7c6cdd21ff002c8e3b9e9f41f34}

![][public]
![][const]


```cpp
virtual angle_deg_t f3d::camera::getViewAngle() const =0
```




Return the view angle in degrees of the camera



**Return type**: angle_deg_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getViewAngle"}]}`
-->

### Function getViewAngle {#classf3d_1_1camera_1a87f4da6b5c0893c703dabde78423c6d2}

![][public]
![][const]


```cpp
virtual void f3d::camera::getViewAngle(angle_deg_t &angle) const =0
```




Get the view angle in degrees of the camera into the provided arg



**Parameters**:

* angle_deg_t & **angle**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getViewAngle"}]}`
-->

### Function setState {#classf3d_1_1camera_1a24144f2aa3dd5785f23d6f641a82f549}

![][public]


```cpp
virtual camera & f3d::camera::setState(const camera_state_t &state)=0
```




Set the complete state of the provided arg



**Parameters**:

* const [camera\_state\_t](structf3d_1_1camera__state__t.md) & **state**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setState"}]}`
-->

### Function getState {#classf3d_1_1camera_1a948a86b0f4cdd00ffaab16e3138b3472}

![][public]
![][const]


```cpp
virtual camera_state_t f3d::camera::getState() const =0
```




Return the complete state of the camera



**Return type**: [camera\_state\_t](structf3d_1_1camera__state__t.md)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getState"}]}`
-->

### Function getState {#classf3d_1_1camera_1ad3a3808a94f57e11ba44a06dc107bc9a}

![][public]
![][const]


```cpp
virtual void f3d::camera::getState(camera_state_t &state) const =0
```




Get the complete state of the camera into the provided arg



**Parameters**:

* [camera\_state\_t](structf3d_1_1camera__state__t.md) & **state**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::getState"}]}`
-->

## Manipulation

Standard camera manipulation methods. Angles are in degrees.

### Function dolly {#classf3d_1_1camera_1a52b3ef3992b10bc5d0ef0d0af78c18dd}

![][public]


```cpp
virtual camera & f3d::camera::dolly(double val)=0
```




Divide the camera's distance from the focal point by the given value.



**Parameters**:

* double **val**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::dolly"}]}`
-->

### Function pan {#classf3d_1_1camera_1ab04f6d77ca126becdf76f8c54b69b2d2}

![][public]


```cpp
virtual camera & f3d::camera::pan(double right, double up, double forward=0)=0
```




Move the camera along its horizontal, vertical, and forward axes



**Parameters**:

* double **right**
* double **up**
* double **forward** = 0 

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::pan"}]}`
-->

### Function zoom {#classf3d_1_1camera_1a25389ac60a7dfc9f70a01e85f1f887de}

![][public]


```cpp
virtual camera & f3d::camera::zoom(double factor)=0
```




Decrease the view angle (or the parallel scale in parallel mode) by the specified factor.



**Parameters**:

* double **factor**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::zoom"}]}`
-->

### Function roll {#classf3d_1_1camera_1aba63ef9b310c53f90cecb2d546fe18cf}

![][public]


```cpp
virtual camera & f3d::camera::roll(angle_deg_t angle)=0
```




Rotate the camera about its forward axis.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::roll"}]}`
-->

### Function azimuth {#classf3d_1_1camera_1a1f7e0da617b9404229131c722d27692b}

![][public]


```cpp
virtual camera & f3d::camera::azimuth(angle_deg_t angle)=0
```




Rotate the camera about its vertical axis, centered at the focal point.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::azimuth"}]}`
-->

### Function yaw {#classf3d_1_1camera_1a31e21553e251eb931127b138bfd44cef}

![][public]


```cpp
virtual camera & f3d::camera::yaw(angle_deg_t angle)=0
```




Rotate the camera about its vertical axis, centered the camera's position.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::yaw"}]}`
-->

### Function elevation {#classf3d_1_1camera_1a834dcc2896ad2881c7bdef6e1759d67e}

![][public]


```cpp
virtual camera & f3d::camera::elevation(angle_deg_t angle)=0
```




Rotate the camera about its horizontal axis, centered at the focal point.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::elevation"}]}`
-->

### Function pitch {#classf3d_1_1camera_1aac2ed5910d98ba57c2d19335dcbca87b}

![][public]


```cpp
virtual camera & f3d::camera::pitch(angle_deg_t angle)=0
```




Rotate the camera about its horizontal axis, centered the camera's position.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::pitch"}]}`
-->

## Public functions

### Function setCurrentAsDefault {#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d}

![][public]


```cpp
virtual camera & f3d::camera::setCurrentAsDefault()=0
```




Store the current camera configuration as default.



**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::setCurrentAsDefault"}]}`
-->

### Function resetToDefault {#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132}

![][public]


```cpp
virtual camera & f3d::camera::resetToDefault()=0
```




Reset the camera to the stored default camera configuration.



**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::resetToDefault"}]}`
-->

### Function resetToBounds {#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e}

![][public]


```cpp
virtual camera & f3d::camera::resetToBounds(double zoomFactor=0.9)=0
```




Reset the camera using the bounds of actors in the scene. Provided zoomFactor will be used to position the camera. A value of 1 correspond to the bounds roughly aligned to the edges of the window.



**Parameters**:

* double **zoomFactor** = 0.9 

**Return type**: [camera](classf3d_1_1camera.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::camera::resetToBounds"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"camera_8h"},"children":[{"type":"text","text":"camera.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)