# Class vtkF3DArchiveReader {/* #classvtkF3DArchiveReader */}

![][C++]
![][public]

**Definition**: `vtkF3DArchiveReader.h` (line 25)

Read entries from a zip archive.

Provide random access to the entries of a zip archive stored in a seekable vtkResourceStream, so that readers of archive based formats can extract the files they need without unpacking the whole archive.

**Inherits from**:

* vtkObject

## Members

* [Close](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a22229a904035166e3e19c50bd2c7a4b8)
* [Extract](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1ac4aa574226f71a09d051d7b516516b90)
* [Has](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a67ba681d17bf0aa03081f77d67acc841)
* [Internals](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a87db0cc007c9df7e922154ae5face74c)
* [New](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1af12a5ddce6d86378c28f66f31bcfb7be)
* [Open](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a124856bf82b9fd04ad116fdf0c739b20)
* [operator=](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a1418c6bb7f1f69fae40f109c281dfc8c)
* [PrintSelf](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a789083b9c28dcd847bdf7363de98ba91)
* [vtkF3DArchiveReader](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1aff464b9fade78308d883c93110b101b6)
* [vtkF3DArchiveReader](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a38eb1bd4843efbe8daf2ad6d35a43c6a)
* [vtkTypeMacro](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1a8843d1e4d1c7c861106a8dd2d97e9a07)
* [~vtkF3DArchiveReader](classvtkF3DArchiveReader.md#classvtkF3DArchiveReader_1ac52d8cbb37bf2b543d78fb77b900d5df)

## Private attributes

### Variable Internals {/* #classvtkF3DArchiveReader_1a87db0cc007c9df7e922154ae5face74c */}

![][private]

**Definition**: `vtkF3DArchiveReader.h` (line 67)


```cpp
std::unique_ptr<vtkInternals> vtkF3DArchiveReader::Internals
```








**Type**: std::unique_ptr< vtkInternals >

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::Internals"}]}`
*/}

## Public static functions

### Function New {/* #classvtkF3DArchiveReader_1af12a5ddce6d86378c28f66f31bcfb7be */}

![][public]
![][static]


```cpp
static vtkF3DArchiveReader * vtkF3DArchiveReader::New()
```








**Return type**: [vtkF3DArchiveReader](classvtkF3DArchiveReader.md) *

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::New"}]}`
*/}

## Public functions

### Function vtkTypeMacro {/* #classvtkF3DArchiveReader_1a8843d1e4d1c7c861106a8dd2d97e9a07 */}

![][public]


```cpp
vtkF3DArchiveReader::vtkTypeMacro(vtkF3DArchiveReader, vtkObject)
```








**Parameters**:

* [vtkF3DArchiveReader](classvtkF3DArchiveReader.md)
* vtkObject

**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::vtkTypeMacro"}]}`
*/}

### Function PrintSelf {/* #classvtkF3DArchiveReader_1a789083b9c28dcd847bdf7363de98ba91 */}

![][public]


```cpp
void vtkF3DArchiveReader::PrintSelf(ostream &os, vtkIndent indent) override
```








**Parameters**:

* ostream & **os**
* vtkIndent **indent**

**Return type**: void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::PrintSelf"}]}`
*/}

### Function Open {/* #classvtkF3DArchiveReader_1a124856bf82b9fd04ad116fdf0c739b20 */}

![][public]


```cpp
bool vtkF3DArchiveReader::Open(vtkResourceStream *stream)
```




Open the zip archive contained in the provided stream and read its index. The stream must support seeking and is kept referenced until the archive is closed or this reader is destroyed. Return false if the stream is not seekable or does not contain a valid archive.



**Parameters**:

* vtkResourceStream * **stream**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::Open"}]}`
*/}

### Function Close {/* #classvtkF3DArchiveReader_1a22229a904035166e3e19c50bd2c7a4b8 */}

![][public]


```cpp
void vtkF3DArchiveReader::Close()
```




Close the currently opened archive, if any, and release the stream.



**Return type**: void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::Close"}]}`
*/}

### Function Has {/* #classvtkF3DArchiveReader_1a67ba681d17bf0aa03081f77d67acc841 */}

![][public]


```cpp
bool vtkF3DArchiveReader::Has(const std::string &name)
```




Return true if an entry with the provided name exists in the opened archive. Names are the full paths of the entries, eg: "dir/file.txt".



**Parameters**:

* const std::string & **name**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::Has"}]}`
*/}

### Function Extract {/* #classvtkF3DArchiveReader_1ac4aa574226f71a09d051d7b516516b90 */}

![][public]


```cpp
bool vtkF3DArchiveReader::Extract(const std::string &name, std::vector< char > &out)
```




Extract the uncompressed content of the named entry into out. Return false if the archive is not opened, if the entry does not exist or if its content cannot be extracted.



**Parameters**:

* const std::string & **name**
* std::vector< char > & **out**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::Extract"}]}`
*/}

## Protected functions

### Function vtkF3DArchiveReader {/* #classvtkF3DArchiveReader_1aff464b9fade78308d883c93110b101b6 */}

![][protected]


```cpp
vtkF3DArchiveReader::vtkF3DArchiveReader()
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::vtkF3DArchiveReader"}]}`
*/}

### Function ~vtkF3DArchiveReader {/* #classvtkF3DArchiveReader_1ac52d8cbb37bf2b543d78fb77b900d5df */}

![][protected]


```cpp
vtkF3DArchiveReader::~vtkF3DArchiveReader() override
```








**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::~vtkF3DArchiveReader"}]}`
*/}

## Private functions

### Function vtkF3DArchiveReader {/* #classvtkF3DArchiveReader_1a38eb1bd4843efbe8daf2ad6d35a43c6a */}

![][private]


```cpp
vtkF3DArchiveReader::vtkF3DArchiveReader(const vtkF3DArchiveReader &)=delete
```








**Parameters**:

* const [vtkF3DArchiveReader](classvtkF3DArchiveReader.md) &

**Return type**: 

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::vtkF3DArchiveReader"}]}`
*/}

### Function operator= {/* #classvtkF3DArchiveReader_1a1418c6bb7f1f69fae40f109c281dfc8c */}

![][private]


```cpp
void vtkF3DArchiveReader::operator=(const vtkF3DArchiveReader &)=delete
```








**Parameters**:

* const [vtkF3DArchiveReader](classvtkF3DArchiveReader.md) &

**Return type**: void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"vtkF3DArchiveReader::operator="}]}`
*/}

{/*
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vtkF3DArchiveReader_8h"},"children":[{"type":"text","text":"vtkF3DArchiveReader.h"}]}`
*/}

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)