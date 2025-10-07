# Structure f3d::engine::readerInformation {#structf3d_1_1engine_1_1reader_information}

![][C++]
![][public]

**Definition**: `engine.h` (line 315)



A structure providing information about a reader. Returned in a vector by [getReadersInfo()](classf3d_1_1engine.md#classf3d_1_1engine_1a5b2887501e1975218442d9142f4d3b8e).

## Members

* [Description](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1a8cd967fb8400bcafb84fac1aff4bc0af)
* [Extensions](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1a9e778db98dc3a41875ed9c2caeaf3517)
* [HasGeometryReader](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1a63da7048de227a690590703369523aa3)
* [HasSceneReader](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1ac0dc89d52c535db198c513fb0543755e)
* [MimeTypes](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1aac8ec25ca07da4cafd1f8a157d583f27)
* [Name](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1a30aac8488fbed9ef92fba2bba859263a)
* [PluginName](structf3d_1_1engine_1_1reader_information.md#structf3d_1_1engine_1_1reader_information_1a9d938bd142eb2feb3ac72f6c07eafb6b)

## Public attributes

### Variable Name {#structf3d_1_1engine_1_1reader_information_1a30aac8488fbed9ef92fba2bba859263a}

![][public]

**Definition**: `engine.h` (line 317)


```cpp
std::string f3d::engine::readerInformation::Name
```








**Type**: std::string



### Variable Description {#structf3d_1_1engine_1_1reader_information_1a8cd967fb8400bcafb84fac1aff4bc0af}

![][public]

**Definition**: `engine.h` (line 318)


```cpp
std::string f3d::engine::readerInformation::Description
```








**Type**: std::string



### Variable Extensions {#structf3d_1_1engine_1_1reader_information_1a9e778db98dc3a41875ed9c2caeaf3517}

![][public]

**Definition**: `engine.h` (line 319)


```cpp
std::vector<std::string> f3d::engine::readerInformation::Extensions
```








**Type**: std::vector< std::string >



### Variable MimeTypes {#structf3d_1_1engine_1_1reader_information_1aac8ec25ca07da4cafd1f8a157d583f27}

![][public]

**Definition**: `engine.h` (line 320)


```cpp
std::vector<std::string> f3d::engine::readerInformation::MimeTypes
```








**Type**: std::vector< std::string >



### Variable PluginName {#structf3d_1_1engine_1_1reader_information_1a9d938bd142eb2feb3ac72f6c07eafb6b}

![][public]

**Definition**: `engine.h` (line 321)


```cpp
std::string f3d::engine::readerInformation::PluginName
```








**Type**: std::string



### Variable HasSceneReader {#structf3d_1_1engine_1_1reader_information_1ac0dc89d52c535db198c513fb0543755e}

![][public]

**Definition**: `engine.h` (line 322)


```cpp
bool f3d::engine::readerInformation::HasSceneReader
```








**Type**: bool



### Variable HasGeometryReader {#structf3d_1_1engine_1_1reader_information_1a63da7048de227a690590703369523aa3}

![][public]

**Definition**: `engine.h` (line 323)


```cpp
bool f3d::engine::readerInformation::HasGeometryReader
```








**Type**: bool



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)