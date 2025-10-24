# Structure f3d::options::scene::animation

![][C++]
![][public]

**Definition**: `options.h` (line 328)





## Members

* [autoplay](structf3d_1_1options_1_1scene_1_1animation.md#structf3d_1_1options_1_1scene_1_1animation_1a644b44fa974613e62bbabe0076699c60)
* [index](structf3d_1_1options_1_1scene_1_1animation.md#structf3d_1_1options_1_1scene_1_1animation_1ae3270de15c7fbc48104bb5a89baa8881)
* [indices](structf3d_1_1options_1_1scene_1_1animation.md#structf3d_1_1options_1_1scene_1_1animation_1a2e8dc8d4ba58c493b95605d9cb60b85a)
* [speed\_factor](structf3d_1_1options_1_1scene_1_1animation.md#structf3d_1_1options_1_1scene_1_1animation_1a1b672c686a3d7fffb993f11179b78368)

## Public attributes

### Variable autoplay {#structf3d_1_1options_1_1scene_1_1animation_1a644b44fa974613e62bbabe0076699c60}

![][public]

**Definition**: `options.h` (line 329)


```cpp
bool f3d::options::scene::animation::autoplay = false
```








**Type**: bool



### Variable index {#structf3d_1_1options_1_1scene_1_1animation_1ae3270de15c7fbc48104bb5a89baa8881}

![][public]

**Definition**: `options.h` (line 330)


```cpp
int f3d::options::scene::animation::index = 0
```








**Type**: int



### Variable indices {#structf3d_1_1options_1_1scene_1_1animation_1a2e8dc8d4ba58c493b95605d9cb60b85a}

![][public]

**Definition**: `options.h` (line 331)


```cpp
std::vector<int> f3d::options::scene::animation::indices = {0}
```








**Type**: std::vector< int >



### Variable speed\_factor {#structf3d_1_1options_1_1scene_1_1animation_1a1b672c686a3d7fffb993f11179b78368}

![][public]

**Definition**: `options.h` (line 332)


```cpp
f3d::ratio_t f3d::options::scene::animation::speed_factor = [f3d::ratio\_t](classf3d_1_1ratio__t.md){1.0}
```








**Type**: [f3d::ratio\_t](classf3d_1_1ratio__t.md)



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)