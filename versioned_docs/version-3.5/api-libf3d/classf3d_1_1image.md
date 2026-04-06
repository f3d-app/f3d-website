# Class f3d::image {#classf3d_1_1image}

![][C++]
![][public]

**Definition**: `image.h` (line 22)

Class used to represent an image.

A class to represent an image, which can be created from a file, a buffer and provided by a window. It provides tools to save and compare images.

## Inner classes

* [f3d::image::write\_exception](structf3d_1_1image_1_1write__exception.md)
* [f3d::image::read\_exception](structf3d_1_1image_1_1read__exception.md)
* [f3d::image::metadata\_exception](structf3d_1_1image_1_1metadata__exception.md)

## Members

* [allMetadata](classf3d_1_1image.md#classf3d_1_1image_1a253f66210d3ffee1e3810ed850965859)
* [ChannelType](classf3d_1_1image.md#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)
* [compare](classf3d_1_1image.md#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45)
* [getChannelCount](classf3d_1_1image.md#classf3d_1_1image_1a02cc5b09cf3d682b918ab7d6928dd74a)
* [getChannelType](classf3d_1_1image.md#classf3d_1_1image_1aa8740c8c109540e99c31e88ac1f28987)
* [getChannelTypeSize](classf3d_1_1image.md#classf3d_1_1image_1a81c2f37a735c1d4c8a6b066f83674712)
* [getContent](classf3d_1_1image.md#classf3d_1_1image_1a846017e60bf8ad4518de086a30796089)
* [getHeight](classf3d_1_1image.md#classf3d_1_1image_1a1f3cede0d5c810d273d9406fbe9c9f88)
* [getMetadata](classf3d_1_1image.md#classf3d_1_1image_1a9e10e64f8bde29faaba00e00d134e60f)
* [getNormalizedPixel](classf3d_1_1image.md#classf3d_1_1image_1a743f3828f85e1f0bc1f582d7d798d094)
* [getSupportedFormats](classf3d_1_1image.md#classf3d_1_1image_1a7172165ee5c5b19d15a94914becc4a12)
* [getWidth](classf3d_1_1image.md#classf3d_1_1image_1ae59d1943a87a24c48919beb3ee4c50cd)
* [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a)
* [image](classf3d_1_1image.md#classf3d_1_1image_1a86af78ae19a5d661fd4d91ea6d27d5b3)
* [image](classf3d_1_1image.md#classf3d_1_1image_1aefc24a2599c90b88461892a9010b2521)
* [image](classf3d_1_1image.md#classf3d_1_1image_1a3018cb02119749352d3b43c8b2fbb4c0)
* [image](classf3d_1_1image.md#classf3d_1_1image_1a849dfd623e0fd30b8423a8428ce6683a)
* [Internals](classf3d_1_1image.md#classf3d_1_1image_1ab77091bd6d48ad000c32e3435a668566)
* [operator!=](classf3d_1_1image.md#classf3d_1_1image_1a0117eff18734cc22b4658d9b5cf9ffcf)
* [operator=](classf3d_1_1image.md#classf3d_1_1image_1a8c88a096697c62b4d82c9874ade2a2b6)
* [operator=](classf3d_1_1image.md#classf3d_1_1image_1ad7b6c7999638d424bae865edea71075f)
* [operator==](classf3d_1_1image.md#classf3d_1_1image_1a9946310d12ccca5d8524eb99686c7852)
* [save](classf3d_1_1image.md#classf3d_1_1image_1a1c671d94e024662f0931168ced58e4da)
* [saveBuffer](classf3d_1_1image.md#classf3d_1_1image_1ae52106bbd1dd8572276befea251b06df)
* [SaveFormat](classf3d_1_1image.md#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f)
* [setContent](classf3d_1_1image.md#classf3d_1_1image_1a0a410810b64e6d7169ca1326d7e1bd28)
* [setMetadata](classf3d_1_1image.md#classf3d_1_1image_1ad1e9fd5f8f94f12d5d6a9e84c59adf11)
* [toTerminalText](classf3d_1_1image.md#classf3d_1_1image_1adf1f0fbdabe4f57e64b3a903b15ad7ee)
* [toTerminalText](classf3d_1_1image.md#classf3d_1_1image_1a73c7e3090c75126b2f5bc03b9a57d3b6)
* [~image](classf3d_1_1image.md#classf3d_1_1image_1a22ecd909c5406f00af4ecab8c5f65924)

## Constructors

### Function image {#classf3d_1_1image_1aefc24a2599c90b88461892a9010b2521}

![][public]


```cpp
f3d::image::image()
```




Default/copy/move constructors/operators.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::image"}]}`
-->

### Function ~image {#classf3d_1_1image_1a22ecd909c5406f00af4ecab8c5f65924}

![][public]


```cpp
f3d::image::~image()
```




Default/copy/move constructors/operators.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::~image"}]}`
-->

### Function image {#classf3d_1_1image_1a3018cb02119749352d3b43c8b2fbb4c0}

![][public]


```cpp
f3d::image::image(const image &img)
```




Default/copy/move constructors/operators.



**Parameters**:

* const image & **img**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::image"}]}`
-->

### Function operator= {#classf3d_1_1image_1a8c88a096697c62b4d82c9874ade2a2b6}

![][public]


```cpp
image & f3d::image::operator=(const image &img) noexcept
```




Default/copy/move constructors/operators.



**Parameters**:

* const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) & **img**

**Return type**: [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::operator="}]}`
-->

### Function image {#classf3d_1_1image_1a849dfd623e0fd30b8423a8428ce6683a}

![][public]


```cpp
f3d::image::image(image &&img) noexcept
```




Default/copy/move constructors/operators.



**Parameters**:

* image && **img**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::image"}]}`
-->

### Function operator= {#classf3d_1_1image_1ad7b6c7999638d424bae865edea71075f}

![][public]


```cpp
image & f3d::image::operator=(image &&img) noexcept
```




Default/copy/move constructors/operators.



**Parameters**:

* [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) && **img**

**Return type**: [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::operator="}]}`
-->

## Operators

### Function operator== {#classf3d_1_1image_1a9946310d12ccca5d8524eb99686c7852}

![][public]
![][const]


```cpp
bool f3d::image::operator==(const image &reference) const
```




Comparison operators, uses [image::compare](classf3d_1_1image.md#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45) with a threshold of 1e-14.



**Parameters**:

* const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) & **reference**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::operator=="}]}`
-->

### Function operator!= {#classf3d_1_1image_1a0117eff18734cc22b4658d9b5cf9ffcf}

![][public]
![][const]


```cpp
bool f3d::image::operator!=(const image &reference) const
```




Comparison operators, uses [image::compare](classf3d_1_1image.md#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45) with a threshold of 1e-14.



**Parameters**:

* const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) & **reference**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::operator!="}]}`
-->

## Resolution

### Function getWidth {#classf3d_1_1image_1ae59d1943a87a24c48919beb3ee4c50cd}

![][public]
![][const]


```cpp
unsigned int f3d::image::getWidth() const
```




Set/Get image resolution.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getWidth"}]}`
-->

### Function getHeight {#classf3d_1_1image_1a1f3cede0d5c810d273d9406fbe9c9f88}

![][public]
![][const]


```cpp
unsigned int f3d::image::getHeight() const
```




Set/Get image resolution.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getHeight"}]}`
-->

## Channel Count

### Function getChannelCount {#classf3d_1_1image_1a02cc5b09cf3d682b918ab7d6928dd74a}

![][public]
![][const]


```cpp
unsigned int f3d::image::getChannelCount() const
```




Set/Get image channel count.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getChannelCount"}]}`
-->

## Buffer Data

### Function setContent {#classf3d_1_1image_1a0a410810b64e6d7169ca1326d7e1bd28}

![][public]


```cpp
image & f3d::image::setContent(void *buffer)
```




Set/Get image buffer data. Its size is expected to be `width * height * channelCount * typeSize`.



**Parameters**:

* void * **buffer**

**Return type**: [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::setContent"}]}`
-->

### Function getContent {#classf3d_1_1image_1a846017e60bf8ad4518de086a30796089}

![][public]
![][const]


```cpp
void * f3d::image::getContent() const
```




Set/Get image buffer data. Its size is expected to be `width * height * channelCount * typeSize`.



**Return type**: void *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getContent"}]}`
-->

## Public types

### Enumeration type SaveFormat {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f}

![][public]

**Definition**: `image.h` (line 28)


```cpp
enum SaveFormat {
  PNG,
  JPG,
  TIF,
  BMP
}
```




Enumeration of supported export formats



#### Enumerator PNG {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3fa55505ba281b015ec31f03ccb151b2a34}





#### Enumerator JPG {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3fa92769fe7c40229f4301d6125e0a9e928}





#### Enumerator TIF {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3fa9442880680eb5d7fb60d15f422004547}





#### Enumerator BMP {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3faa5d5ca1447586e23dc011f8c0cc0a6db}





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::SaveFormat"}]}`
-->

### Enumeration type ChannelType {#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4}

![][public]

**Definition**: `image.h` (line 42)


```cpp
enum ChannelType {
  BYTE,
  SHORT,
  FLOAT
}
```




Enumeration of supported channel types
* BYTE: 8-bit integer in range [0,255]

* SHORT: 16-bit integer in range [0,65535]

* FLOAT: 32-bit floating point in range [-inf,+inf]



#### Enumerator BYTE {#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4ae409eb2ba6eb6801f52763ae370c350e}





#### Enumerator SHORT {#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4aa35c2b02966b1563e5bf7b81b8b0cf77}





#### Enumerator FLOAT {#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4ae738c26bf4ce1037fa81b039a915cbf6}





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::ChannelType"}]}`
-->

## Private attributes

### Variable Internals {#classf3d_1_1image_1ab77091bd6d48ad000c32e3435a668566}

![][private]

**Definition**: `image.h` (line 245)


```cpp
internals* f3d::image::Internals
```








**Type**: internals *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::Internals"}]}`
-->

## Public functions

### Function image {#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a}

![][public]


```cpp
f3d::image::image(const std::filesystem::path &filePath)
```




Read provided file path (used as is) into a new image instance, the following formats are supported: PNG, PNM, TIFF, BMP, HDR, JPEG, GESigna, MetaImage, TGA. EXR files are also supported if the associated module is built. The complete list can be retrieved at runtime by calling [getSupportedFormats()](classf3d_1_1image.md#classf3d_1_1image_1a7172165ee5c5b19d15a94914becc4a12).





Throws an [image::read\_exception](structf3d_1_1image_1_1read__exception.md) in case of failure.



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::image"}]}`
-->

### Function image {#classf3d_1_1image_1a86af78ae19a5d661fd4d91ea6d27d5b3}

![][public]


```cpp
f3d::image::image(unsigned int width, unsigned int height, unsigned int channelCount, ChannelType type=ChannelType::BYTE)
```




Create an image from a given width, height, and channel count. A channel type can also be given. Default is BYTE.



**Parameters**:

* unsigned int **width**
* unsigned int **height**
* unsigned int **channelCount**
* [ChannelType](classf3d_1_1image.md#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4) **type** = ChannelType::BYTE 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::image"}]}`
-->

### Function getNormalizedPixel {#classf3d_1_1image_1a743f3828f85e1f0bc1f582d7d798d094}

![][public]
![][const]


```cpp
std::vector< double > f3d::image::getNormalizedPixel(const std::pair< int, int > &xy) const
```




Read one specific pixel and return all channel normalized values. If the channel type is BYTE or SHORT, the values are normalized to [0, 1] range.





Because of the normalization, this function can be slow, prefer [getContent()](classf3d_1_1image.md#classf3d_1_1image_1a846017e60bf8ad4518de086a30796089) when reading several pixels and normalization is not needed.



**Parameters**:

* const std::pair< int, int > & **xy**

**Return type**: std::vector< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getNormalizedPixel"}]}`
-->

### Function getChannelType {#classf3d_1_1image_1aa8740c8c109540e99c31e88ac1f28987}

![][public]
![][const]


```cpp
ChannelType f3d::image::getChannelType() const
```




Get image channel type. Throws an [image::read\_exception](structf3d_1_1image_1_1read__exception.md) if the type is unknown.



**Return type**: [ChannelType](classf3d_1_1image.md#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getChannelType"}]}`
-->

### Function getChannelTypeSize {#classf3d_1_1image_1a81c2f37a735c1d4c8a6b066f83674712}

![][public]
![][const]


```cpp
unsigned int f3d::image::getChannelTypeSize() const
```




Get image channel type size in bytes.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getChannelTypeSize"}]}`
-->

### Function compare {#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45}

![][public]
![][const]


```cpp
double f3d::image::compare(const image &reference) const
```




Compare current image to a reference. The error is minimum between Minkownski and Wasserstein distance on a SSIM computation, as specified in VTK. Please note, due to possible arithmetic imprecision in the SSIM computation a non-zero value can be returned with identical images. Depending on the VTK version, another comparison algorithm may be used. Error value meaning is described below:
* 1e-14: Pixel perfect comparison.

* 0.04: Visually indistinguishable.

* 0.1: Small visible difference.

* 0.5: Comparable images.

* 1.0: Different type, size or number of components



**Parameters**:

* const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) & **reference**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::compare"}]}`
-->

### Function save {#classf3d_1_1image_1a1c671d94e024662f0931168ced58e4da}

![][public]
![][const]


```cpp
const image & f3d::image::save(const std::filesystem::path &filePath, SaveFormat format=SaveFormat::PNG) const
```




Save an image to the provided file path, used as is, in the specified format. Default format is PNG if not specified.
* PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4

* JPG: Supports channel type BYTE with channel count of 1 or 3

* TIF: Supports channel type BYTE, SHORT and FLOAT with channel count of 1 to 4

* BMP: Supports channel type BYTE with channel count of 1 to 4







Throws an [image::write\_exception](structf3d_1_1image_1_1write__exception.md) if the format is incompatible with with image channel type or channel count or if the image cannot be written for any other reason.



**Parameters**:

* const std::filesystem::path & **filePath**
* [SaveFormat](classf3d_1_1image.md#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f) **format** = SaveFormat::PNG 

**Return type**: const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::save"}]}`
-->

### Function saveBuffer {#classf3d_1_1image_1ae52106bbd1dd8572276befea251b06df}

![][public]
![][const]


```cpp
std::vector< unsigned char > f3d::image::saveBuffer(SaveFormat format=SaveFormat::PNG) const
```




Save an image to a memory buffer in the specified format and returns it. Default format is PNG if not specified.
* PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4

* JPG: Supports channel type BYTE with channel count of 1 or 3

* BMP: Supports channel type BYTE with channel count of 1 to 4

* TIF format is not supported yet.







Throws an [image::write\_exception](structf3d_1_1image_1_1write__exception.md) if the type is TIF or if the format is incompatible with with image channel type or channel count.



**Parameters**:

* [SaveFormat](classf3d_1_1image.md#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f) **format** = SaveFormat::PNG 

**Return type**: std::vector< unsigned char >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::saveBuffer"}]}`
-->

### Function toTerminalText {#classf3d_1_1image_1adf1f0fbdabe4f57e64b3a903b15ad7ee}

![][public]
![][const]


```cpp
const image & f3d::image::toTerminalText(std::ostream &stream) const
```




Convert to colored text using ANSI escape sequences for printing in a terminal. Block and half-block characters are used to represent two pixels per character (vertically) meaning that each text line represent two rows of pixels. Byte encoded RGB and RGBA images are supported (alpha channel values are binarized). Assumes terminal support for:
* unicode block characters (`U+2580`, `U+2584`, `U+2588`)

* SGR escape codes (`ESC[0m`, `ESC[49m`)

* 24-bit escape codes (`ESC[38;2;{r};{g};{b}m`, `ESC[48;2;{r};{g};{b}m`)







Throws a [image::write\_exception](structf3d_1_1image_1_1write__exception.md) if the type is not byte RGB or RGBA.



**Parameters**:

* std::ostream & **stream**

**Return type**: const [image](classf3d_1_1image.md#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::toTerminalText"}]}`
-->

### Function toTerminalText {#classf3d_1_1image_1a73c7e3090c75126b2f5bc03b9a57d3b6}

![][public]
![][const]


```cpp
std::string f3d::image::toTerminalText() const
```




Convert to colored text using ANSI escape sequences for printing in a terminal. See toTerminalText(std::ostream& stream).





Throws a [image::write\_exception](structf3d_1_1image_1_1write__exception.md) if the type is not byte RGB or RGBA.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::toTerminalText"}]}`
-->

### Function setMetadata {#classf3d_1_1image_1ad1e9fd5f8f94f12d5d6a9e84c59adf11}

![][public]


```cpp
f3d::image & f3d::image::setMetadata(std::string key, std::string value)
```




Set the value for a metadata key. Setting an empty value (`""`) removes the key.



**Parameters**:

* std::string **key**
* std::string **value**

**Return type**: [f3d::image](classf3d_1_1image.md) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::setMetadata"}]}`
-->

### Function getMetadata {#classf3d_1_1image_1a9e10e64f8bde29faaba00e00d134e60f}

![][public]
![][const]


```cpp
std::string f3d::image::getMetadata(const std::string &key) const
```




Get the value for a metadata key. Throws a [image::read\_exception](structf3d_1_1image_1_1read__exception.md) if key does not exist.



**Parameters**:

* const std::string & **key**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getMetadata"}]}`
-->

### Function allMetadata {#classf3d_1_1image_1a253f66210d3ffee1e3810ed850965859}

![][public]
![][const]


```cpp
std::vector< std::string > f3d::image::allMetadata() const
```




List all the metadata keys which have a value set.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::allMetadata"}]}`
-->

## Public static functions

### Function getSupportedFormats {#classf3d_1_1image_1a7172165ee5c5b19d15a94914becc4a12}

![][public]
![][static]


```cpp
static std::vector< std::string > f3d::image::getSupportedFormats()
```




Get the list of supported image format extensions when opening a file.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::image::getSupportedFormats"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"image_8h"},"children":[{"type":"text","text":"image.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)