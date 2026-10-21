# Structure f3d::engine::state {/* #structf3d_1_1engine_1_1state */}

![][C++]
![][public]

**Definition**: `engine.h` (line 271)



A serializable snapshot of an engine: the files added to the scene, the camera configuration and the options that have been set. Captured from an engine with [engine::dump()](classf3d_1_1engine.md#classf3d_1_1engine_1a507672ee49b5b4074530621b981aeaba) and applied back with [engine::load()](classf3d_1_1engine.md#classf3d_1_1engine_1a240e60ea52b382a17acce7eead02ca32), so a state taken from one engine can be restored into another.





A state can be read from and written to a JSON string, a file, the system clipboard or any stream. In its string, stream and clipboard forms, file paths are stored as absolute paths; in its file form, file paths contained by the directory of the file are stored relatively so the statefile stays portable when moved alongside its files.





Scene content added from memory (mesh, mesh view or buffer) is not captured.

## Members

* [Content](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a1cefc90d3a8fe1acf395ce325485ee65)
* [engine](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a614ec0a1871249dee57baf50d4501271)
* [fromClipboard](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1af8d5a56bc518971a96b97ff5704d122b)
* [fromFile](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a029476d5b95ad8e53479d625309a7adf)
* [fromString](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1ac906db27a09a54c713ffe7e4a5cbdb63)
* [operator\<\<](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1add7d1d404d93a1955f03a80b3830dfd1)
* [operator\>\>](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a88759c0c0b8d5fc84ddd3014f7004a12)
* [toClipboard](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a258454af64f01429efa197399d4d96ea)
* [toFile](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a94787feb9a5c5582f3581bd2d8f4761d)
* [toString](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a4851e16dee54c6d6743362199e41431f)

## Friends

### Friend engine {/* #structf3d_1_1engine_1_1state_1a614ec0a1871249dee57baf50d4501271 */}

![][C++]
![][private]

**Definition**: `engine.h` (line 314)







{/*
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class engine"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::engine"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"engine"}]},{"type":"text","text":"\n        "}]}`
*/}

### Friend operator\<\< {/* #structf3d_1_1engine_1_1state_1add7d1d404d93a1955f03a80b3830dfd1 */}

![][C++]
![][private]

**Definition**: `engine.h` (line 315)



Write a state as a JSON string into the provided stream, with file paths stored as absolute paths.



{/*
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"F3D_EXPORT std::ostream &"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"F3D_EXPORT std::ostream & operator<<"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[{"type":"text","text":"(std::ostream &stream, const state &st)"}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::operator<<"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"std::ostream &"}]},{"type":"text","text":"\n          "},{"type":"element","name":"declname","attributes":{},"children":[{"type":"text","text":"stream"}]},{"type":"text","text":"\n        "}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"const "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"structf3d_1_1engine_1_1state"},"children":[{"type":"text","text":"state"}]},{"type":"text","text":" &"}]},{"type":"text","text":"\n          "},{"type":"element","name":"declname","attributes":{},"children":[{"type":"text","text":"st"}]},{"type":"text","text":"\n        "}]}`
*/}

### Friend operator\>\> {/* #structf3d_1_1engine_1_1state_1a88759c0c0b8d5fc84ddd3014f7004a12 */}

![][C++]
![][private]

**Definition**: `engine.h` (line 316)



Read a state from the JSON content of the provided stream. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the content cannot be parsed.



{/*
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"F3D_EXPORT std::istream &"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"F3D_EXPORT std::istream & operator>>"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[{"type":"text","text":"(std::istream &stream, engine::state &st)"}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::operator>>"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"std::istream &"}]},{"type":"text","text":"\n          "},{"type":"element","name":"declname","attributes":{},"children":[{"type":"text","text":"stream"}]},{"type":"text","text":"\n        "}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"structf3d_1_1engine_1_1state"},"children":[{"type":"text","text":"engine::state"}]},{"type":"text","text":" &"}]},{"type":"text","text":"\n          "},{"type":"element","name":"declname","attributes":{},"children":[{"type":"text","text":"st"}]},{"type":"text","text":"\n        "}]}`
*/}

## Private attributes

### Variable Content {/* #structf3d_1_1engine_1_1state_1a1cefc90d3a8fe1acf395ce325485ee65 */}

![][private]

**Definition**: `engine.h` (line 318)


```cpp
std::string f3d::engine::state::Content
```








**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::Content"}]}`
*/}

## Public static functions

### Function fromString {/* #structf3d_1_1engine_1_1state_1ac906db27a09a54c713ffe7e4a5cbdb63 */}

![][public]
![][static]


```cpp
static F3D_EXPORT state f3d::engine::state::fromString(const std::string &content)
```




Build a state from a JSON string previously produced by [state::toString](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a4851e16dee54c6d6743362199e41431f). Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the content cannot be parsed.



**Parameters**:

* const std::string & **content**

**Return type**: F3D_EXPORT [state](structf3d_1_1engine_1_1state.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::fromString"}]}`
*/}

### Function fromFile {/* #structf3d_1_1engine_1_1state_1a029476d5b95ad8e53479d625309a7adf */}

![][public]
![][static]


```cpp
static F3D_EXPORT state f3d::engine::state::fromFile(const std::filesystem::path &filePath)
```




Build a state from a JSON statefile previously written by [state::toFile](structf3d_1_1engine_1_1state.md#structf3d_1_1engine_1_1state_1a94787feb9a5c5582f3581bd2d8f4761d). File paths stored relatively are resolved against the directory of the file. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the file cannot be read or parsed.



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: F3D_EXPORT [state](structf3d_1_1engine_1_1state.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::fromFile"}]}`
*/}

### Function fromClipboard {/* #structf3d_1_1engine_1_1state_1af8d5a56bc518971a96b97ff5704d122b */}

![][public]
![][static]


```cpp
static F3D_EXPORT state f3d::engine::state::fromClipboard()
```




Build a state from the JSON content currently held by the system clipboard. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the clipboard has no readable text, its content cannot be parsed, or clipboard support is not available in this build.



**Return type**: F3D_EXPORT [state](structf3d_1_1engine_1_1state.md)

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::fromClipboard"}]}`
*/}

## Public functions

### Function toString {/* #structf3d_1_1engine_1_1state_1a4851e16dee54c6d6743362199e41431f */}

![][public]
![][const]


```cpp
F3D_EXPORT std::string f3d::engine::state::toString() const
```




Return the state as a JSON string, with file paths stored as absolute paths.



**Return type**: F3D_EXPORT std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::toString"}]}`
*/}

### Function toFile {/* #structf3d_1_1engine_1_1state_1a94787feb9a5c5582f3581bd2d8f4761d */}

![][public]
![][const]


```cpp
F3D_EXPORT void f3d::engine::state::toFile(const std::filesystem::path &filePath) const
```




Write the state as a JSON statefile at the provided path. File paths contained by the directory of the file are stored relatively, as absolute paths otherwise. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the file cannot be written.



**Parameters**:

* const std::filesystem::path & **filePath**

**Return type**: F3D_EXPORT void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::toFile"}]}`
*/}

### Function toClipboard {/* #structf3d_1_1engine_1_1state_1a258454af64f01429efa197399d4d96ea */}

![][public]
![][const]


```cpp
F3D_EXPORT void f3d::engine::state::toClipboard() const
```




Copy the state into the system clipboard as a JSON string, with file paths stored as absolute paths. Throws a [engine::statefile\_exception](structf3d_1_1engine_1_1statefile__exception.md) if the clipboard cannot be written or clipboard support is not available in this build.



**Return type**: F3D_EXPORT void

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::engine::state::toClipboard"}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)