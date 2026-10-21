# Structure f3d::video_encoder::params {/* #structf3d_1_1video__encoder_1_1params */}

![][C++]
![][public]

**Definition**: `video\_encoder.h` (line 56)



Parameters for configuring the video stream construction. ExplicitCodecName is used when the codec is set to EXPLICIT. Use [getAvailableEncoders()](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1aa117addad3c4d2d557f564abc7a6072f) to retrieve the list of available codec names. Bitrate is specified in Mbps.

## Members

* [Bitrate](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1a6c956351f3c336556eca4ba1afc91ca3)
* [Codec](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1a5f4ac9214409bdf70c34eeddfe79c769)
* [ExplicitCodecName](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1a10d12c40c0acb9bf7467d4ff95b26a7b)
* [FrameRate](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1a087f39a3856f3970978ce26d6f02f21a)
* [Height](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1af01f2c97cf2bf240b1982e2b6a66cce5)
* [LowLatency](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1a5c48cb4e57e568942021824831f3d565)
* [Width](structf3d_1_1video__encoder_1_1params.md#structf3d_1_1video__encoder_1_1params_1ab488efc052ca2ec00a9dd2726a90786e)

## Public attributes

### Variable Codec {/* #structf3d_1_1video__encoder_1_1params_1a5f4ac9214409bdf70c34eeddfe79c769 */}

![][public]

**Definition**: `video\_encoder.h` (line 58)


```cpp
codec f3d::video_encoder::params::Codec = codec::H264
```








**Type**: [codec](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::Codec"}]}`
*/}

### Variable ExplicitCodecName {/* #structf3d_1_1video__encoder_1_1params_1a10d12c40c0acb9bf7467d4ff95b26a7b */}

![][public]

**Definition**: `video\_encoder.h` (line 59)


```cpp
std::string f3d::video_encoder::params::ExplicitCodecName
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::ExplicitCodecName"}]}`
*/}

### Variable Width {/* #structf3d_1_1video__encoder_1_1params_1ab488efc052ca2ec00a9dd2726a90786e */}

![][public]

**Definition**: `video\_encoder.h` (line 60)


```cpp
int f3d::video_encoder::params::Width = 0
```








**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::Width"}]}`
*/}

### Variable Height {/* #structf3d_1_1video__encoder_1_1params_1af01f2c97cf2bf240b1982e2b6a66cce5 */}

![][public]

**Definition**: `video\_encoder.h` (line 61)


```cpp
int f3d::video_encoder::params::Height = 0
```








**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::Height"}]}`
*/}

### Variable FrameRate {/* #structf3d_1_1video__encoder_1_1params_1a087f39a3856f3970978ce26d6f02f21a */}

![][public]

**Definition**: `video\_encoder.h` (line 62)


```cpp
double f3d::video_encoder::params::FrameRate = 30
```








**Type**: double

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::FrameRate"}]}`
*/}

### Variable Bitrate {/* #structf3d_1_1video__encoder_1_1params_1a6c956351f3c336556eca4ba1afc91ca3 */}

![][public]

**Definition**: `video\_encoder.h` (line 63)


```cpp
double f3d::video_encoder::params::Bitrate = 5.0
```








**Type**: double

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::Bitrate"}]}`
*/}

### Variable LowLatency {/* #structf3d_1_1video__encoder_1_1params_1a5c48cb4e57e568942021824831f3d565 */}

![][public]

**Definition**: `video\_encoder.h` (line 64)


```cpp
bool f3d::video_encoder::params::LowLatency = false
```








**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::params::LowLatency"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)