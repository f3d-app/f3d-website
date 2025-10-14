# Structure f3d::interactor::invalid_args_exception

![][C++]
![][public]

**Definition**: `interactor.h` (line 421)



An exception that can be thrown by command callbacks when the arguments of the callback are incorrect. This exception is caught by triggerCommand and logged.

**Inherits from**:

* [f3d::exception](structf3d_1_1exception.md)

## Members

* [exception](structf3d_1_1exception.md#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d)
* [invalid\_args\_exception](structf3d_1_1interactor_1_1invalid__args__exception.md#structf3d_1_1interactor_1_1invalid__args__exception_1ac50a14b6ce17534752862bf4d9f562a8)

## Public functions

### Function invalid\_args\_exception {#structf3d_1_1interactor_1_1invalid__args__exception_1ac50a14b6ce17534752862bf4d9f562a8}

![][public]


```cpp
f3d::interactor::invalid_args_exception::invalid_args_exception(const std::string &what="")
```








**Parameters**:

* const std::string & **what** = "" 

**Return type**: 



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)