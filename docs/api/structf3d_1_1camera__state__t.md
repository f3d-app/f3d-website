# Structure f3d::camera\_state\_t

![][C++]
![][public]

**Definition**: `camera.h` (line 14)





## Members

* [focalPoint](structf3d_1_1camera__state__t.md#structf3d_1_1camera__state__t_1a108b56174ebc8c1ee9a9ad5bb6548ccc)
* [position](structf3d_1_1camera__state__t.md#structf3d_1_1camera__state__t_1aa2e4ba7abf206ef14ad9b851af1fcbc6)
* [viewAngle](structf3d_1_1camera__state__t.md#structf3d_1_1camera__state__t_1a28f08d9fc1076fe6e265822cb93fbed7)
* [viewUp](structf3d_1_1camera__state__t.md#structf3d_1_1camera__state__t_1afda85e5dd3f7bc9773bc5ef22c1ccad7)

## Public attributes

### Variable position {#structf3d_1_1camera__state__t_1aa2e4ba7abf206ef14ad9b851af1fcbc6}

![][public]

**Definition**: `camera.h` (line 16)


```cpp
point3_t f3d::camera_state_t::position = { 0., 0., 1. }
```








**Type**: [point3\_t](structf3d_1_1point3__t.md)



### Variable focalPoint {#structf3d_1_1camera__state__t_1a108b56174ebc8c1ee9a9ad5bb6548ccc}

![][public]

**Definition**: `camera.h` (line 17)


```cpp
point3_t f3d::camera_state_t::focalPoint = { 0., 0., 0. }
```








**Type**: [point3\_t](structf3d_1_1point3__t.md)



### Variable viewUp {#structf3d_1_1camera__state__t_1afda85e5dd3f7bc9773bc5ef22c1ccad7}

![][public]

**Definition**: `camera.h` (line 18)


```cpp
vector3_t f3d::camera_state_t::viewUp = { 0., 1., 0. }
```








**Type**: [vector3\_t](structf3d_1_1vector3__t.md)



### Variable viewAngle {#structf3d_1_1camera__state__t_1a28f08d9fc1076fe6e265822cb93fbed7}

![][public]

**Definition**: `camera.h` (line 19)


```cpp
angle_deg_t f3d::camera_state_t::viewAngle = 30.
```








**Type**: angle_deg_t



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)