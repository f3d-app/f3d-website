# Structure f3d::light\_state\_t

![][C++]
![][public]

**Definition**: `types.h` (line 340)





## Members

* [color](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1adbbb786c2bcf02d19a4cec2f4c754633)
* [direction](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1afaac12a01b4b165cf25d3dffa056a465)
* [intensity](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1ac67bbfa7a078033cf9e97b0648bb15d6)
* [operator==](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1aa0c6bb838ea67037f4a318549da66168)
* [position](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1a54a1ed683ee594e405061ed1f7502b4a)
* [positionalLight](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1a953b11665623a73c83dffe27238b6b24)
* [switchState](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1a9ed6434bb4f3a39aa97d9d79b9175b9a)
* [type](structf3d_1_1light__state__t.md#structf3d_1_1light__state__t_1a9686287a8a646fcbb4d1071f78165a11)

## Public attributes

### Variable type {#structf3d_1_1light__state__t_1a9686287a8a646fcbb4d1071f78165a11}

![][public]

**Definition**: `types.h` (line 342)


```cpp
light_type f3d::light_state_t::type = light_type::SCENE_LIGHT
```








**Type**: light_type



### Variable position {#structf3d_1_1light__state__t_1a54a1ed683ee594e405061ed1f7502b4a}

![][public]

**Definition**: `types.h` (line 343)


```cpp
point3_t f3d::light_state_t::position = { 0., 0., 0. }
```








**Type**: [point3\_t](structf3d_1_1point3__t.md)



### Variable color {#structf3d_1_1light__state__t_1adbbb786c2bcf02d19a4cec2f4c754633}

![][public]

**Definition**: `types.h` (line 344)


```cpp
color_t f3d::light_state_t::color = { 1., 1., 1. }
```








**Type**: [color\_t](classf3d_1_1color__t.md)



### Variable direction {#structf3d_1_1light__state__t_1afaac12a01b4b165cf25d3dffa056a465}

![][public]

**Definition**: `types.h` (line 345)


```cpp
vector3_t f3d::light_state_t::direction = { 1., 0., 0. }
```








**Type**: [vector3\_t](structf3d_1_1vector3__t.md)



### Variable positionalLight {#structf3d_1_1light__state__t_1a953b11665623a73c83dffe27238b6b24}

![][public]

**Definition**: `types.h` (line 346)


```cpp
bool f3d::light_state_t::positionalLight = false
```








**Type**: bool



### Variable intensity {#structf3d_1_1light__state__t_1ac67bbfa7a078033cf9e97b0648bb15d6}

![][public]

**Definition**: `types.h` (line 347)


```cpp
double f3d::light_state_t::intensity = 1.0
```








**Type**: double



### Variable switchState {#structf3d_1_1light__state__t_1a9ed6434bb4f3a39aa97d9d79b9175b9a}

![][public]

**Definition**: `types.h` (line 348)


```cpp
bool f3d::light_state_t::switchState = true
```








**Type**: bool



## Public functions

### Function operator== {#structf3d_1_1light__state__t_1aa0c6bb838ea67037f4a318549da66168}

![][public]
![][const]


```cpp
bool f3d::light_state_t::operator==(const light_state_t &other) const
```








**Parameters**:

* const [light\_state\_t](structf3d_1_1light__state__t.md) & **other**

**Return type**: bool



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)