# Class f3d::video_frame {/* #classf3d_1_1video__frame */}

![][C++]
![][public]

**Definition**: `video\_frame.h` (line 16)

Class used to represent a video frame.

A class to represent a video frame, which is a raw video frame. The video frame can be submitted to the [video\_encoder](classf3d_1_1video__encoder.md) class.

## Inner classes

* [f3d::video\_frame::invalid\_frame\_exception](structf3d_1_1video__frame_1_1invalid__frame__exception.md)

## Members

* [setTimestamp](classf3d_1_1video__frame.md#classf3d_1_1video__frame_1add32b0a44188291328269f5f9c0c842d)
* [~video\_frame](classf3d_1_1video__frame.md#classf3d_1_1video__frame_1af7b08bcc052b68ffa71f4a791485b5c8)

## Public functions

### Function ~video\_frame {/* #classf3d_1_1video__frame_1af7b08bcc052b68ffa71f4a791485b5c8 */}

![][public]


```cpp
virtual f3d::video_frame::~video_frame()=default
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_frame::~video_frame"}]}`
*/}

### Function setTimestamp {/* #classf3d_1_1video__frame_1add32b0a44188291328269f5f9c0c842d */}

![][public]


```cpp
virtual video_frame & f3d::video_frame::setTimestamp(int64_t timestamp)=0
```




Set the timestamp of the video frame.



**Parameters**:

* int64_t **timestamp**

**Return type**: [video\_frame](classf3d_1_1video__frame.md) &

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::video_frame::setTimestamp"}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"video__frame_8h"},"children":[{"type":"text","text":"video_frame.h"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)