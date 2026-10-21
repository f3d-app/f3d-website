# Class f3d::video_encoder {/* #classf3d_1_1video__encoder */}

![][C++]
![][public]

**Definition**: `video\_encoder.h` (line 25)

Class used to represent a video stream.

A class to represent a video stream, used to encode frames to video packets. It supports a variety of codecs (H264, HEVC, VP8, VP9, AV1) as long as the encoder supports YUV420p pixel format.

## Inner classes

* [f3d::video\_encoder::params](structf3d_1_1video__encoder_1_1params.md)
* [f3d::video\_encoder::codec\_exception](structf3d_1_1video__encoder_1_1codec__exception.md)
* [f3d::video\_encoder::transport\_exception](structf3d_1_1video__encoder_1_1transport__exception.md)

## Members

* [codec](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503)
* [create](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1ac10f87c58de156fa34a3c14121b13e61)
* [flush](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1ad577001711624db01d86dca7966f7a97)
* [getAvailableEncoders](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1aa117addad3c4d2d557f564abc7a6072f)
* [getHeight](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1a271e68f9b4b8b4af0a2c0627a8e4bd5e)
* [getWidth](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1af6c133c12f1ee4dd68193956c7b8f1d0)
* [listen](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1ac0be566cdbaaba2c5083227af68bfb77)
* [submit](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1abe29a70783a68dcefb92e530c2e370d2)
* [~video\_encoder](classf3d_1_1video__encoder.md#classf3d_1_1video__encoder_1aa30d8e60b5a053348433604450b333db)

## undefined

### Function getWidth {/* #classf3d_1_1video__encoder_1af6c133c12f1ee4dd68193956c7b8f1d0 */}

![][public]
![][const]


```cpp
virtual int f3d::video_encoder::getWidth() const =0
```




Get the width and height of the video stream.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::getWidth"}]}`
*/}

### Function getHeight {/* #classf3d_1_1video__encoder_1a271e68f9b4b8b4af0a2c0627a8e4bd5e */}

![][public]
![][const]


```cpp
virtual int f3d::video_encoder::getHeight() const =0
```




Get the width and height of the video stream.



**Return type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::getHeight"}]}`
*/}

## Public types

### Enumeration type codec {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503 */}

![][public]

**Definition**: `video\_encoder.h` (line 40)


```cpp
enum codec {
  H264,
  HEVC,
  VP8,
  VP9,
  AV1,
  EXPLICIT
}
```




Enumeration of codec types. Supported codecs include H264, HEVC, VP8, VP9, AV1, and EXPLICIT for specifying a codec name. H264 is widely supported and commonly used for video encoding. HEVC (also called H265) offers better compression efficiency than H264 but may have less widespread support. VP8 and VP9 are commonly used for web-based video applications. AV1 is a modern codec with high compression efficiency but may require more computational resources.



#### Enumerator H264 {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503a8ba63b54352f7053b055235a9ec7ac09 */}





#### Enumerator HEVC {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503aedc93b70a6a3d160422ba8e728919af1 */}





#### Enumerator VP8 {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503a371414dae50b13ebd272fcdf83a678d1 */}





#### Enumerator VP9 {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503aae4cfaa9283a4f2150ac3da08e388723 */}





#### Enumerator AV1 {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503acae4ca30163749b891686f95532519bd */}





#### Enumerator EXPLICIT {/* #classf3d_1_1video__encoder_1a4db5c8dd71363f8a4a17ce6c80b9e503a440806ada035e97a59ec9d2ca6796cb3 */}





{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::codec"}]}`
*/}

## Public functions

### Function ~video\_encoder {/* #classf3d_1_1video__encoder_1aa30d8e60b5a053348433604450b333db */}

![][public]


```cpp
virtual f3d::video_encoder::~video_encoder()=default
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::~video_encoder"}]}`
*/}

### Function listen {/* #classf3d_1_1video__encoder_1ac0be566cdbaaba2c5083227af68bfb77 */}

![][public]


```cpp
virtual video_encoder & f3d::video_encoder::listen(std::function< void(const std::shared_ptr< video_packet > &)> callback)=0
```




Asynchronously listen for encoded video packets and invoke the provided callback for each packet. Thread safety is ensured, allowing concurrent calls to submit and listen. Throws [transport\_exception](structf3d_1_1video__encoder_1_1transport__exception.md) if there is an error receiving packets from the encoder.



**Parameters**:

* std::function< void(const std::shared_ptr< [video\_packet](classf3d_1_1video__packet.md) > &)> **callback**

**Return type**: [video\_encoder](classf3d_1_1video__encoder.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::listen"}]}`
*/}

### Function submit {/* #classf3d_1_1video__encoder_1abe29a70783a68dcefb92e530c2e370d2 */}

![][public]


```cpp
virtual bool f3d::video_encoder::submit(const std::shared_ptr< video_frame > &frame)=0
```




Send a frame to the video stream for encoding. Returns true if the frame was successfully submitted, false if the encoder is busy and cannot accept new frames at the moment. Thread safety is ensured, allowing concurrent calls to submit and listen. Throws [transport\_exception](structf3d_1_1video__encoder_1_1transport__exception.md) if there is an error submitting the frame to the encoder.



**Parameters**:

* const std::shared_ptr< [video\_frame](classf3d_1_1video__frame.md) > & **frame**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::submit"}]}`
*/}

### Function flush {/* #classf3d_1_1video__encoder_1ad577001711624db01d86dca7966f7a97 */}

![][public]


```cpp
virtual video_encoder & f3d::video_encoder::flush()=0
```




Flush the video stream, ensuring all encoded frames are processed. Signals the end of the stream to the encoder, allowing it to output any remaining packets.



**Return type**: [video\_encoder](classf3d_1_1video__encoder.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::flush"}]}`
*/}

## Public static functions

### Function create {/* #classf3d_1_1video__encoder_1ac10f87c58de156fa34a3c14121b13e61 */}

![][public]
![][static]


```cpp
static std::shared_ptr< video_encoder > f3d::video_encoder::create(const params &p)
```




Create a video encoder instance. Throws [codec\_exception](structf3d_1_1video__encoder_1_1codec__exception.md) if the codec cannot be initialized.



**Parameters**:

* const [params](structf3d_1_1video__encoder_1_1params.md) & **p**

**Return type**: std::shared_ptr< [video\_encoder](classf3d_1_1video__encoder.md) >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::create"}]}`
*/}

### Function getAvailableEncoders {/* #classf3d_1_1video__encoder_1aa117addad3c4d2d557f564abc7a6072f */}

![][public]
![][static]


```cpp
static std::vector< std::pair< std::string, std::string > > f3d::video_encoder::getAvailableEncoders()
```




Get the list of available codecs.



**Return type**: std::vector< std::pair< std::string, std::string > >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_encoder::getAvailableEncoders"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"video__encoder_8h"},"children":[{"type":"text","text":"video_encoder.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)