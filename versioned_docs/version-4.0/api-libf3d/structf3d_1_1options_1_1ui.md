# Structure f3d::options::ui {/* #structf3d_1_1options_1_1ui */}

![][C++]
![][public]

**Definition**: `options.h` (line 493)





## Inner classes

* [f3d::options::ui::backdrop](structf3d_1_1options_1_1ui_1_1backdrop.md)
* [f3d::options::ui::drop\_zone](structf3d_1_1options_1_1ui_1_1drop__zone.md)
* [f3d::options::ui::notifications](structf3d_1_1options_1_1ui_1_1notifications.md)
* [f3d::options::ui::scene\_hierarchy](structf3d_1_1options_1_1ui_1_1scene__hierarchy.md)

## Members

* [animation\_progress](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1afac69d34155f032a045f9e5dfb9f4a8a)
* [animation\_progress\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a9f6540b023600f532630ce61c1985ddf)
* [axis](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1abfd8854499551ce7c0c540d78df2aff1)
* [backdrop](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a22decd9179c26365b4bd3a362f082ffa)
* [cheatsheet](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a1cde66196d0a9ce0226138000375fe34)
* [console](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a6f1714ac73921c439ec565d81a37ab6f)
* [dpi\_aware](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1ada3f3b11f1572a35a3cc18982ab49b3b)
* [drop\_zone](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a3d7eb05cdc0b47b25ebe4c064ed193fc)
* [filename](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a7048320d9bb390ae7835661897e95dd1)
* [filename\_info](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a0e50b1165e587143d700f0c2d63ad418)
* [font\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1aef4e16640f1a1d39b082e95065cf92cf)
* [font\_file](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1aa3b74802f8b6f49f192b5e10bdf0e57d)
* [fps](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a32b32dd1964f7aef02551de40fd7f621)
* [hdri\_filename](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a0be6a75fb4cb26a99b3d2de679428a68)
* [loader\_progress](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a57c3b693a4c40a2b53c2bbd78a424590)
* [loader\_progress\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a4d57d0a667f20b54a1e883168b70cf55)
* [metadata](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a15cbd89b8b286034c91edf77f6278a7e)
* [minimal\_console](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1af69b0a70c39649a14b49b06a3c429f37)
* [notifications](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a65758894ab746dc244ff501b849a618a)
* [scalar\_bar](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a00a0273d310e85dd94b8e974affc6b44)
* [scale](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a240d1a8507160aa83f10508efa911f56)
* [scene\_hierarchy](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1a0f19ae5ee6e65270e47a1b922fbf3de8)
* [x\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1aa8d952112cf3576c45e68b3826d04eda)
* [y\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1ad39fabdba87a573799118efc53c49038)
* [z\_color](structf3d_1_1options_1_1ui.md#structf3d_1_1options_1_1ui_1ab72517b9b3a0ef4bb5ff08442207bec0)

## Public attributes

### Variable animation\_progress {/* #structf3d_1_1options_1_1ui_1afac69d34155f032a045f9e5dfb9f4a8a */}

![][public]

**Definition**: `options.h` (line 494)


```cpp
std::string f3d::options::ui::animation_progress = "none"
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::animation_progress"}]}`
*/}

### Variable animation\_progress\_color {/* #structf3d_1_1options_1_1ui_1a9f6540b023600f532630ce61c1985ddf */}

![][public]

**Definition**: `options.h` (line 495)


```cpp
f3d::color_t f3d::options::ui::animation_progress_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_blue")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::animation_progress_color"}]}`
*/}

### Variable axis {/* #structf3d_1_1options_1_1ui_1abfd8854499551ce7c0c540d78df2aff1 */}

![][public]

**Definition**: `options.h` (line 496)


```cpp
bool f3d::options::ui::axis = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::axis"}]}`
*/}

### Variable backdrop {/* #structf3d_1_1options_1_1ui_1a22decd9179c26365b4bd3a362f082ffa */}

![][public]

**Definition**: `options.h` (line 500)


```cpp
struct f3d::options::ui::backdrop f3d::options::ui::backdrop
```








**Type**: struct f3d::options::ui::backdrop

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::backdrop"}]}`
*/}

### Variable cheatsheet {/* #structf3d_1_1options_1_1ui_1a1cde66196d0a9ce0226138000375fe34 */}

![][public]

**Definition**: `options.h` (line 502)


```cpp
bool f3d::options::ui::cheatsheet = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::cheatsheet"}]}`
*/}

### Variable console {/* #structf3d_1_1options_1_1ui_1a6f1714ac73921c439ec565d81a37ab6f */}

![][public]

**Definition**: `options.h` (line 503)


```cpp
bool f3d::options::ui::console = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::console"}]}`
*/}

### Variable dpi\_aware {/* #structf3d_1_1options_1_1ui_1ada3f3b11f1572a35a3cc18982ab49b3b */}

![][public]

**Definition**: `options.h` (line 504)


```cpp
bool f3d::options::ui::dpi_aware = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::dpi_aware"}]}`
*/}

### Variable drop\_zone {/* #structf3d_1_1options_1_1ui_1a3d7eb05cdc0b47b25ebe4c064ed193fc */}

![][public]

**Definition**: `options.h` (line 509)


```cpp
struct f3d::options::ui::drop_zone f3d::options::ui::drop_zone
```








**Type**: struct f3d::options::ui::drop_zone

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::drop_zone"}]}`
*/}

### Variable filename {/* #structf3d_1_1options_1_1ui_1a7048320d9bb390ae7835661897e95dd1 */}

![][public]

**Definition**: `options.h` (line 511)


```cpp
bool f3d::options::ui::filename = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::filename"}]}`
*/}

### Variable filename\_info {/* #structf3d_1_1options_1_1ui_1a0e50b1165e587143d700f0c2d63ad418 */}

![][public]

**Definition**: `options.h` (line 512)


```cpp
std::string f3d::options::ui::filename_info = ""
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::filename_info"}]}`
*/}

### Variable font\_color {/* #structf3d_1_1options_1_1ui_1aef4e16640f1a1d39b082e95065cf92cf */}

![][public]

**Definition**: `options.h` (line 513)


```cpp
f3d::color_t f3d::options::ui::font_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_white")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::font_color"}]}`
*/}

### Variable font\_file {/* #structf3d_1_1options_1_1ui_1aa3b74802f8b6f49f192b5e10bdf0e57d */}

![][public]

**Definition**: `options.h` (line 514)


```cpp
std::optional<std::filesystem::path> f3d::options::ui::font_file
```








**Type**: std::optional< std::filesystem::path >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::font_file"}]}`
*/}

### Variable fps {/* #structf3d_1_1options_1_1ui_1a32b32dd1964f7aef02551de40fd7f621 */}

![][public]

**Definition**: `options.h` (line 515)


```cpp
bool f3d::options::ui::fps = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::fps"}]}`
*/}

### Variable hdri\_filename {/* #structf3d_1_1options_1_1ui_1a0be6a75fb4cb26a99b3d2de679428a68 */}

![][public]

**Definition**: `options.h` (line 516)


```cpp
bool f3d::options::ui::hdri_filename = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::hdri_filename"}]}`
*/}

### Variable loader\_progress {/* #structf3d_1_1options_1_1ui_1a57c3b693a4c40a2b53c2bbd78a424590 */}

![][public]

**Definition**: `options.h` (line 517)


```cpp
bool f3d::options::ui::loader_progress = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::loader_progress"}]}`
*/}

### Variable loader\_progress\_color {/* #structf3d_1_1options_1_1ui_1a4d57d0a667f20b54a1e883168b70cf55 */}

![][public]

**Definition**: `options.h` (line 518)


```cpp
f3d::color_t f3d::options::ui::loader_progress_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_yellow")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::loader_progress_color"}]}`
*/}

### Variable metadata {/* #structf3d_1_1options_1_1ui_1a15cbd89b8b286034c91edf77f6278a7e */}

![][public]

**Definition**: `options.h` (line 519)


```cpp
bool f3d::options::ui::metadata = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::metadata"}]}`
*/}

### Variable minimal\_console {/* #structf3d_1_1options_1_1ui_1af69b0a70c39649a14b49b06a3c429f37 */}

![][public]

**Definition**: `options.h` (line 520)


```cpp
bool f3d::options::ui::minimal_console = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::minimal_console"}]}`
*/}

### Variable notifications {/* #structf3d_1_1options_1_1ui_1a65758894ab746dc244ff501b849a618a */}

![][public]

**Definition**: `options.h` (line 524)


```cpp
struct f3d::options::ui::notifications f3d::options::ui::notifications
```








**Type**: struct f3d::options::ui::notifications

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::notifications"}]}`
*/}

### Variable scalar\_bar {/* #structf3d_1_1options_1_1ui_1a00a0273d310e85dd94b8e974affc6b44 */}

![][public]

**Definition**: `options.h` (line 526)


```cpp
bool f3d::options::ui::scalar_bar = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::scalar_bar"}]}`
*/}

### Variable scale {/* #structf3d_1_1options_1_1ui_1a240d1a8507160aa83f10508efa911f56 */}

![][public]

**Definition**: `options.h` (line 527)


```cpp
f3d::ratio_t f3d::options::ui::scale = [f3d::ratio\_t](classf3d_1_1ratio__t.md){1.0}
```








**Type**: [f3d::ratio\_t](classf3d_1_1ratio__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::scale"}]}`
*/}

### Variable scene\_hierarchy {/* #structf3d_1_1options_1_1ui_1a0f19ae5ee6e65270e47a1b922fbf3de8 */}

![][public]

**Definition**: `options.h` (line 531)


```cpp
struct f3d::options::ui::scene_hierarchy f3d::options::ui::scene_hierarchy
```








**Type**: struct f3d::options::ui::scene_hierarchy

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::scene_hierarchy"}]}`
*/}

### Variable x\_color {/* #structf3d_1_1options_1_1ui_1aa8d952112cf3576c45e68b3826d04eda */}

![][public]

**Definition**: `options.h` (line 533)


```cpp
f3d::color_t f3d::options::ui::x_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_red")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::x_color"}]}`
*/}

### Variable y\_color {/* #structf3d_1_1options_1_1ui_1ad39fabdba87a573799118efc53c49038 */}

![][public]

**Definition**: `options.h` (line 534)


```cpp
f3d::color_t f3d::options::ui::y_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_green")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::y_color"}]}`
*/}

### Variable z\_color {/* #structf3d_1_1options_1_1ui_1ab72517b9b3a0ef4bb5ff08442207bec0 */}

![][public]

**Definition**: `options.h` (line 535)


```cpp
f3d::color_t f3d::options::ui::z_color = [options::parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)<[f3d::color\_t](classf3d_1_1color__t.md)>("f3d_blue")
```








**Type**: [f3d::color\_t](classf3d_1_1color__t.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::options::ui::z_color"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)