# Class f3d::log

![][C++]
![][public]

**Definition**: `log.h` (line 22)

Class used to show logs in F3D.

A class to output logs to the standard output. It supports different levels, errors, warnings and info, with associated coloring. A few static methods exists to control the coloring and the verbosity level

## Members

* [debug](classf3d_1_1log.md#classf3d_1_1log_1a02f284fc14964d408428a6cfb816941d)
* [error](classf3d_1_1log.md#classf3d_1_1log_1a7cfc1246ee782202b6145a7e9e9e8752)
* [getVerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1a8fedb73d694ea0b04845b59c03bb5a62)
* [info](classf3d_1_1log.md#classf3d_1_1log_1abc356594e60fc5aaa23dc89890e3e95a)
* [print](classf3d_1_1log.md#classf3d_1_1log_1a00a2ff2ea22fa4a51337802440ba3ee7)
* [setUseColoring](classf3d_1_1log.md#classf3d_1_1log_1a53fe829551853d63206efb6a93287bec)
* [setVerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1a42acb3b11578123d01b58420ebff5d65)
* [VerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28)
* [warn](classf3d_1_1log.md#classf3d_1_1log_1a38f616ec652987ae562353e4f030273d)

## Public types

### Enumeration type VerboseLevel {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28}

![][public]

**Definition**: `log.h` (line 34)


```cpp
enum VerboseLevel {
  DEBUG = 0,
  INFO,
  WARN,
  ERROR,
  QUIET
}
```




Enumeration of verbose levels ============================= DEBUG: All logs are displayed, including from third parties. INFO: Standard logging level, the default. WARN: Only warnings and errors are displayed. ERROR: Only errors are displayed. QUIET: Logging is fully disabled.



#### Enumerator DEBUG {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28adc30ec20708ef7b0f641ef78b7880a15}





#### Enumerator INFO {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28a551b723eafd6a31d444fcb2f5920fbd3}





#### Enumerator WARN {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28a32bd8a1db2275458673903bdb84cb277}





#### Enumerator ERROR {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28abb1ca97ec761fc37101737ba0aa2e7c5}





#### Enumerator QUIET {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28a1b4462755110ae77a3bb7e319f6544fa}







## Public static functions

### Function print {#classf3d_1_1log_1a00a2ff2ea22fa4a51337802440ba3ee7}

![][public]
![][static]


```cpp
static void f3d::log::print(VerboseLevel level, Args... args)
```




Log provided args as provided verbose level.



**Parameters**:

* [VerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28) **level**
* Args... **args**

**Return type**: void



### Function debug {#classf3d_1_1log_1a02f284fc14964d408428a6cfb816941d}

![][public]
![][static]


```cpp
static void f3d::log::debug(Args... args)
```




Log provided args as a debug.



**Parameters**:

* Args... **args**

**Return type**: void



### Function info {#classf3d_1_1log_1abc356594e60fc5aaa23dc89890e3e95a}

![][public]
![][static]


```cpp
static void f3d::log::info(Args... args)
```




Log provided args as an info.



**Parameters**:

* Args... **args**

**Return type**: void



### Function warn {#classf3d_1_1log_1a38f616ec652987ae562353e4f030273d}

![][public]
![][static]


```cpp
static void f3d::log::warn(Args... args)
```




Log provided args as a warning.



**Parameters**:

* Args... **args**

**Return type**: void



### Function error {#classf3d_1_1log_1a7cfc1246ee782202b6145a7e9e9e8752}

![][public]
![][static]


```cpp
static void f3d::log::error(Args... args)
```




Log provided args as an error.



**Parameters**:

* Args... **args**

**Return type**: void



### Function setUseColoring {#classf3d_1_1log_1a53fe829551853d63206efb6a93287bec}

![][public]
![][static]


```cpp
static void f3d::log::setUseColoring(bool use)
```




Set the coloring usage, if applicable (eg: console output).



**Parameters**:

* bool **use**

**Return type**: void



### Function setVerboseLevel {#classf3d_1_1log_1a42acb3b11578123d01b58420ebff5d65}

![][public]
![][static]


```cpp
static void f3d::log::setVerboseLevel(VerboseLevel level, bool forceStdErr=false)
```




Set the verbose level. By default, only warnings and errors are written to stderr, debug and info are written to stdout. If forceStdErr is true, all messages including debug and info are written to stderr.



**Parameters**:

* [VerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28) **level**
* bool **forceStdErr** = false 

**Return type**: void



### Function getVerboseLevel {#classf3d_1_1log_1a8fedb73d694ea0b04845b59c03bb5a62}

![][public]
![][static]


```cpp
static VerboseLevel f3d::log::getVerboseLevel()
```




Get the current verbose level.



**Return type**: [VerboseLevel](classf3d_1_1log.md#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28)





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)