# Structure f3d::options::domains::ui {/* #structf3d_1_1options_1_1domains_1_1ui */}

![][C++]
![][public]

**Definition**: `options.h` (line 647)





## Inner classes

* [f3d::options::domains::ui::backdrop](structf3d_1_1options_1_1domains_1_1ui_1_1backdrop.md)
* [f3d::options::domains::ui::drop\_zone](structf3d_1_1options_1_1domains_1_1ui_1_1drop__zone.md)
* [f3d::options::domains::ui::notifications](structf3d_1_1options_1_1domains_1_1ui_1_1notifications.md)
* [f3d::options::domains::ui::scene\_hierarchy](structf3d_1_1options_1_1domains_1_1ui_1_1scene__hierarchy.md)

## Members

* [animation\_progress](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1a482cb735ba39ab37220022c5473cf579)
* [backdrop](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1ad9b8f58a56bf250f3a29ac8bc1e36443)
* [drop\_zone](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1a305e62ea55c5496e559bfd2e2037bb04)
* [notifications](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1a25f3d90140482ae2e24d3f21bb5987a2)
* [scale](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1a68b196351fcd3d58a2c6126ee274f58a)
* [scene\_hierarchy](structf3d_1_1options_1_1domains_1_1ui.md#structf3d_1_1options_1_1domains_1_1ui_1ac02bf4d63b24611680fd68a30e8399f3)

## Public attributes

### Variable animation\_progress {/* #structf3d_1_1options_1_1domains_1_1ui_1a482cb735ba39ab37220022c5473cf579 */}

![][public]

**Definition**: `options.h` (line 648)


```cpp
DomainEnum<std::string> f3d::options::domains::ui::animation_progress = {{"none", "default", "advanced", }}
```








**Type**: [DomainEnum](structf3d_1_1options_1_1DomainEnum.md)< std::string >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::animation_progress"}]}`
*/}

### Variable backdrop {/* #structf3d_1_1options_1_1domains_1_1ui_1ad9b8f58a56bf250f3a29ac8bc1e36443 */}

![][public]

**Definition**: `options.h` (line 651)


```cpp
struct f3d::options::domains::ui::backdrop f3d::options::domains::ui::backdrop
```








**Type**: struct f3d::options::domains::ui::backdrop

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::backdrop"}]}`
*/}

### Variable drop\_zone {/* #structf3d_1_1options_1_1domains_1_1ui_1a305e62ea55c5496e559bfd2e2037bb04 */}

![][public]

**Definition**: `options.h` (line 654)


```cpp
struct f3d::options::domains::ui::drop_zone f3d::options::domains::ui::drop_zone
```








**Type**: struct f3d::options::domains::ui::drop_zone

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::drop_zone"}]}`
*/}

### Variable notifications {/* #structf3d_1_1options_1_1domains_1_1ui_1a25f3d90140482ae2e24d3f21bb5987a2 */}

![][public]

**Definition**: `options.h` (line 657)


```cpp
struct f3d::options::domains::ui::notifications f3d::options::domains::ui::notifications
```








**Type**: struct f3d::options::domains::ui::notifications

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::notifications"}]}`
*/}

### Variable scale {/* #structf3d_1_1options_1_1domains_1_1ui_1a68b196351fcd3d58a2c6126ee274f58a */}

![][public]

**Definition**: `options.h` (line 659)


```cpp
DomainRange<f3d::ratio_t> f3d::options::domains::ui::scale = {[f3d::ratio\_t](classf3d_1_1ratio__t.md)(0.0), [f3d::ratio\_t](classf3d_1_1ratio__t.md)(10.0), [f3d::ratio\_t](classf3d_1_1ratio__t.md)(0.1)}
```








**Type**: [DomainRange](structf3d_1_1options_1_1DomainRange.md)< [f3d::ratio\_t](classf3d_1_1ratio__t.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::scale"}]}`
*/}

### Variable scene\_hierarchy {/* #structf3d_1_1options_1_1domains_1_1ui_1ac02bf4d63b24611680fd68a30e8399f3 */}

![][public]

**Definition**: `options.h` (line 661)


```cpp
struct f3d::options::domains::ui::scene_hierarchy f3d::options::domains::ui::scene_hierarchy
```








**Type**: struct f3d::options::domains::ui::scene_hierarchy

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::domains::ui::scene_hierarchy"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)