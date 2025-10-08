# Class f3d::camera

![][C++]
![][public]

**Definition**: `camera.h` (line 31)

Abstract class to control a camera in a window.

A class to control a camera in a window. When modifying the Position/FocalPoint/ViewUp API or the camera movements API, the view up is automatically orthogonalized. All angles are in degrees.

## Members

* [azimuth](classf3d_1_1camera.md#classf3d_1_1camera_1a1f7e0da617b9404229131c722d27692b)
* [dolly](classf3d_1_1camera.md#classf3d_1_1camera_1a52b3ef3992b10bc5d0ef0d0af78c18dd)
* [elevation](classf3d_1_1camera.md#classf3d_1_1camera_1a834dcc2896ad2881c7bdef6e1759d67e)
* [getFocalPoint](classf3d_1_1camera.md#classf3d_1_1camera_1a9895950ec24aac2dd984399d3a76bbda)
* [getFocalPoint](classf3d_1_1camera.md#classf3d_1_1camera_1a8186470e18d5ef61fccb1580eb6fe7c6)
* [getPosition](classf3d_1_1camera.md#classf3d_1_1camera_1af9c38dd7e513c71e4c80c1fd61d5d464)
* [getPosition](classf3d_1_1camera.md#classf3d_1_1camera_1a11aa28d837de538281d0445bf47c2d6c)
* [getState](classf3d_1_1camera.md#classf3d_1_1camera_1a52d56d566312cf8cfafdc44cb503cdae)
* [getState](classf3d_1_1camera.md#classf3d_1_1camera_1a1751031156021ef5f035fb599e201b43)
* [getViewAngle](classf3d_1_1camera.md#classf3d_1_1camera_1ae2ba1490e04694c66d5dbd87ecf8728c)
* [getViewAngle](classf3d_1_1camera.md#classf3d_1_1camera_1a266993b7e1f31d447bcfc9d16a445c47)
* [getViewUp](classf3d_1_1camera.md#classf3d_1_1camera_1a5ab680e6a0c95ed82e08391b69011b1a)
* [getViewUp](classf3d_1_1camera.md#classf3d_1_1camera_1aa14bc0553a56d203214ee3eaab1c5fea)
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

### Function setPosition {#classf3d_1_1camera_1a14f81460eb981f789c5d4a6784fd8d29}

![][public]


```cpp
virtual camera & f3d::camera::setPosition(const point3_t &pos)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **pos**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function getPosition {#classf3d_1_1camera_1af9c38dd7e513c71e4c80c1fd61d5d464}

![][public]


```cpp
virtual point3_t f3d::camera::getPosition()=0
```




Set/Get the camera parameters. Angles are in degrees.



**Return type**: [point3\_t](structf3d_1_1point3__t.md)



### Function getPosition {#classf3d_1_1camera_1a11aa28d837de538281d0445bf47c2d6c}

![][public]


```cpp
virtual void f3d::camera::getPosition(point3_t &pos)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* [point3\_t](structf3d_1_1point3__t.md) & **pos**

**Return type**: void



### Function setFocalPoint {#classf3d_1_1camera_1a698939cac8bdccf066b902ef7786abaf}

![][public]


```cpp
virtual camera & f3d::camera::setFocalPoint(const point3_t &foc)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* const [point3\_t](structf3d_1_1point3__t.md) & **foc**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function getFocalPoint {#classf3d_1_1camera_1a9895950ec24aac2dd984399d3a76bbda}

![][public]


```cpp
virtual point3_t f3d::camera::getFocalPoint()=0
```




Set/Get the camera parameters. Angles are in degrees.



**Return type**: [point3\_t](structf3d_1_1point3__t.md)



### Function getFocalPoint {#classf3d_1_1camera_1a8186470e18d5ef61fccb1580eb6fe7c6}

![][public]


```cpp
virtual void f3d::camera::getFocalPoint(point3_t &foc)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* [point3\_t](structf3d_1_1point3__t.md) & **foc**

**Return type**: void



### Function setViewUp {#classf3d_1_1camera_1af41a32697463f7a9557a626ce36b309e}

![][public]


```cpp
virtual camera & f3d::camera::setViewUp(const vector3_t &up)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* const [vector3\_t](structf3d_1_1vector3__t.md) & **up**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function getViewUp {#classf3d_1_1camera_1a5ab680e6a0c95ed82e08391b69011b1a}

![][public]


```cpp
virtual vector3_t f3d::camera::getViewUp()=0
```




Set/Get the camera parameters. Angles are in degrees.



**Return type**: [vector3\_t](structf3d_1_1vector3__t.md)



### Function getViewUp {#classf3d_1_1camera_1aa14bc0553a56d203214ee3eaab1c5fea}

![][public]


```cpp
virtual void f3d::camera::getViewUp(vector3_t &up)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* [vector3\_t](structf3d_1_1vector3__t.md) & **up**

**Return type**: void



### Function setViewAngle {#classf3d_1_1camera_1aca943dc34c65f3b5f9f3773a7b943084}

![][public]


```cpp
virtual camera & f3d::camera::setViewAngle(const angle_deg_t &angle)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* const angle_deg_t & **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function getViewAngle {#classf3d_1_1camera_1ae2ba1490e04694c66d5dbd87ecf8728c}

![][public]


```cpp
virtual angle_deg_t f3d::camera::getViewAngle()=0
```




Set/Get the camera parameters. Angles are in degrees.



**Return type**: angle_deg_t



### Function getViewAngle {#classf3d_1_1camera_1a266993b7e1f31d447bcfc9d16a445c47}

![][public]


```cpp
virtual void f3d::camera::getViewAngle(angle_deg_t &angle)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* angle_deg_t & **angle**

**Return type**: void



### Function setState {#classf3d_1_1camera_1a24144f2aa3dd5785f23d6f641a82f549}

![][public]


```cpp
virtual camera & f3d::camera::setState(const camera_state_t &state)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* const [camera\_state\_t](structf3d_1_1camera__state__t.md) & **state**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function getState {#classf3d_1_1camera_1a52d56d566312cf8cfafdc44cb503cdae}

![][public]


```cpp
virtual camera_state_t f3d::camera::getState()=0
```




Set/Get the camera parameters. Angles are in degrees.



**Return type**: [camera\_state\_t](structf3d_1_1camera__state__t.md)



### Function getState {#classf3d_1_1camera_1a1751031156021ef5f035fb599e201b43}

![][public]


```cpp
virtual void f3d::camera::getState(camera_state_t &state)=0
```




Set/Get the camera parameters. Angles are in degrees.



**Parameters**:

* [camera\_state\_t](structf3d_1_1camera__state__t.md) & **state**

**Return type**: void



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



### Function zoom {#classf3d_1_1camera_1a25389ac60a7dfc9f70a01e85f1f887de}

![][public]


```cpp
virtual camera & f3d::camera::zoom(double factor)=0
```




Decrease the view angle (or the parallel scale in parallel mode) by the specified factor.



**Parameters**:

* double **factor**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function roll {#classf3d_1_1camera_1aba63ef9b310c53f90cecb2d546fe18cf}

![][public]


```cpp
virtual camera & f3d::camera::roll(angle_deg_t angle)=0
```




Rotate the camera about its forward axis.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function azimuth {#classf3d_1_1camera_1a1f7e0da617b9404229131c722d27692b}

![][public]


```cpp
virtual camera & f3d::camera::azimuth(angle_deg_t angle)=0
```




Rotate the camera about its vertical axis, centered at the focal point.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function yaw {#classf3d_1_1camera_1a31e21553e251eb931127b138bfd44cef}

![][public]


```cpp
virtual camera & f3d::camera::yaw(angle_deg_t angle)=0
```




Rotate the camera about its vertical axis, centered the camera's position.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function elevation {#classf3d_1_1camera_1a834dcc2896ad2881c7bdef6e1759d67e}

![][public]


```cpp
virtual camera & f3d::camera::elevation(angle_deg_t angle)=0
```




Rotate the camera about its horizontal axis, centered at the focal point.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



### Function pitch {#classf3d_1_1camera_1aac2ed5910d98ba57c2d19335dcbca87b}

![][public]


```cpp
virtual camera & f3d::camera::pitch(angle_deg_t angle)=0
```




Rotate the camera about its horizontal axis, centered the camera's position.



**Parameters**:

* angle_deg_t **angle**

**Return type**: [camera](classf3d_1_1camera.md) &



## Public functions

### Function setCurrentAsDefault {#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d}

![][public]


```cpp
virtual camera & f3d::camera::setCurrentAsDefault()=0
```




Store the current camera configuration as default.



**Return type**: [camera](classf3d_1_1camera.md) &



### Function resetToDefault {#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132}

![][public]


```cpp
virtual camera & f3d::camera::resetToDefault()=0
```




Reset the camera to the stored default camera configuration.



**Return type**: [camera](classf3d_1_1camera.md) &



### Function resetToBounds {#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e}

![][public]


```cpp
virtual camera & f3d::camera::resetToBounds(double zoomFactor=0.9)=0
```




Reset the camera using the bounds of actors in the scene. Provided zoomFactor will be used to position the camera. A value of 1 correspond to the bounds roughly aligned to the edges of the window.



**Parameters**:

* double **zoomFactor** = 0.9 

**Return type**: [camera](classf3d_1_1camera.md) &





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)