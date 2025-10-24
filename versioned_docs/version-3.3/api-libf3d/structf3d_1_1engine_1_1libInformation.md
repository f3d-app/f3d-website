# Structure f3d::engine::libInformation

![][C++]
![][public]

**Definition**: `engine.h` (line 309)



A structure providing information about the libf3d. Returned by [getLibInfo()](classf3d_1_1engine.md#classf3d_1_1engine_1aaf3b6314d61f6b033887ed09255fe5a7).

## Members

* [BuildDate](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1a96f5421664b16f4911a2a244a5b17130)
* [BuildSystem](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1a9bc8f08c8a6a54d8c398db63a100f103)
* [Compiler](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1a89403217bdae41dc3cb2af5a46123fc2)
* [Copyrights](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1aa5fcaf4da0e499f963511197bafcaa68)
* [License](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1aa1fc55f2019aefc29181dc1220d29093)
* [Modules](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1ae91661d2e5ec8af1db9b73ac3a38fe45)
* [Version](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1a77e76b84e18488fd4cbc69011632809c)
* [VersionFull](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1a22ab02e3f1d8e92fbd4e391bdbab16ee)
* [VTKVersion](structf3d_1_1engine_1_1libInformation.md#structf3d_1_1engine_1_1libInformation_1ae18443c52968409bbba45aa86ecbe116)

## Public attributes

### Variable Version {#structf3d_1_1engine_1_1libInformation_1a77e76b84e18488fd4cbc69011632809c}

![][public]

**Definition**: `engine.h` (line 311)


```cpp
std::string f3d::engine::libInformation::Version
```








**Type**: std::string



### Variable VersionFull {#structf3d_1_1engine_1_1libInformation_1a22ab02e3f1d8e92fbd4e391bdbab16ee}

![][public]

**Definition**: `engine.h` (line 312)


```cpp
std::string f3d::engine::libInformation::VersionFull
```








**Type**: std::string



### Variable BuildDate {#structf3d_1_1engine_1_1libInformation_1a96f5421664b16f4911a2a244a5b17130}

![][public]

**Definition**: `engine.h` (line 313)


```cpp
std::string f3d::engine::libInformation::BuildDate
```








**Type**: std::string



### Variable BuildSystem {#structf3d_1_1engine_1_1libInformation_1a9bc8f08c8a6a54d8c398db63a100f103}

![][public]

**Definition**: `engine.h` (line 314)


```cpp
std::string f3d::engine::libInformation::BuildSystem
```








**Type**: std::string



### Variable Compiler {#structf3d_1_1engine_1_1libInformation_1a89403217bdae41dc3cb2af5a46123fc2}

![][public]

**Definition**: `engine.h` (line 315)


```cpp
std::string f3d::engine::libInformation::Compiler
```








**Type**: std::string



### Variable Modules {#structf3d_1_1engine_1_1libInformation_1ae91661d2e5ec8af1db9b73ac3a38fe45}

![][public]

**Definition**: `engine.h` (line 316)


```cpp
std::map<std::string, bool> f3d::engine::libInformation::Modules
```








**Type**: std::map< std::string, bool >



### Variable VTKVersion {#structf3d_1_1engine_1_1libInformation_1ae18443c52968409bbba45aa86ecbe116}

![][public]

**Definition**: `engine.h` (line 317)


```cpp
std::string f3d::engine::libInformation::VTKVersion
```








**Type**: std::string



### Variable Copyrights {#structf3d_1_1engine_1_1libInformation_1aa5fcaf4da0e499f963511197bafcaa68}

![][public]

**Definition**: `engine.h` (line 318)


```cpp
std::vector<std::string> f3d::engine::libInformation::Copyrights
```








**Type**: std::vector< std::string >



### Variable License {#structf3d_1_1engine_1_1libInformation_1aa1fc55f2019aefc29181dc1220d29093}

![][public]

**Definition**: `engine.h` (line 319)


```cpp
std::string f3d::engine::libInformation::License
```








**Type**: std::string



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)