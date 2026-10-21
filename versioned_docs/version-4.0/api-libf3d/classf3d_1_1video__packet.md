# Class f3d::video_packet {/* #classf3d_1_1video__packet */}

![][C++]
![][public]

**Definition**: `video\_packet.h` (line 17)

Class used to represent a video packet.

A class to represent a video packet, which is an encoded video frame. The video packet can be used to write to a file or stream over a network. The video packet is produced by the [video\_encoder](classf3d_1_1video__encoder.md) class.

## Members

* [getPacketData](classf3d_1_1video__packet.md#classf3d_1_1video__packet_1a487fad24bc54babf9ea45c03fddbedb4)
* [getPacketSize](classf3d_1_1video__packet.md#classf3d_1_1video__packet_1a7aa7242b201b9a2340481d8931f41e26)
* [getTimestamp](classf3d_1_1video__packet.md#classf3d_1_1video__packet_1ac75b5d93706efe899e32f1534a8844dc)
* [isKeyFrame](classf3d_1_1video__packet.md#classf3d_1_1video__packet_1a84e5c4b5d2243367b392c5b073cd9686)
* [~video\_packet](classf3d_1_1video__packet.md#classf3d_1_1video__packet_1a7d3523ed5f3c31cba5df966d59584f9c)

## Public functions

### Function ~video\_packet {/* #classf3d_1_1video__packet_1a7d3523ed5f3c31cba5df966d59584f9c */}

![][public]


```cpp
virtual f3d::video_packet::~video_packet()=default
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_packet::~video_packet"}]}`
*/}

### Function getPacketSize {/* #classf3d_1_1video__packet_1a7aa7242b201b9a2340481d8931f41e26 */}

![][public]
![][const]


```cpp
virtual size_t f3d::video_packet::getPacketSize() const =0
```




Get the size of the video packet in bytes.



**Return type**: size_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_packet::getPacketSize"}]}`
*/}

### Function getPacketData {/* #classf3d_1_1video__packet_1a487fad24bc54babf9ea45c03fddbedb4 */}

![][public]
![][const]


```cpp
virtual std::byte * f3d::video_packet::getPacketData() const =0
```




Get the data of the video packet.



**Return type**: std::byte *

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_packet::getPacketData"}]}`
*/}

### Function getTimestamp {/* #classf3d_1_1video__packet_1ac75b5d93706efe899e32f1534a8844dc */}

![][public]
![][const]


```cpp
virtual int64_t f3d::video_packet::getTimestamp() const =0
```




Get the timestamp of the video packet.



**Return type**: int64_t

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_packet::getTimestamp"}]}`
*/}

### Function isKeyFrame {/* #classf3d_1_1video__packet_1a84e5c4b5d2243367b392c5b073cd9686 */}

![][public]
![][const]


```cpp
virtual bool f3d::video_packet::isKeyFrame() const =0
```




Returns true if the packet is a key frame, false otherwise.



**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_packet::isKeyFrame"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"video__packet_8h"},"children":[{"type":"text","text":"video_packet.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)