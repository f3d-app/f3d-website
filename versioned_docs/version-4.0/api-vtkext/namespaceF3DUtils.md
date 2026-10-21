# Namespace F3DUtils {/* #namespaceF3DUtils */}

![][C++]






## Functions

### Function ParseToDouble {/* #F3DUtils_8h_1a1f3f6d785aab63015203d8a2deb62df5 */}

![][public]


```cpp
VTKEXT_EXPORT double F3DUtils::ParseToDouble(const std::string &str, double def, const std::string &nameError)
```








**Parameters**:

* const std::string & **str**
* double **def**
* const std::string & **nameError**

**Return type**: VTKEXT_EXPORT double

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"F3DUtils::ParseToDouble"}]}`
*/}

### Function ParseToInt {/* #F3DUtils_8h_1aa80ae10ed644843e29f6929be254c33b */}

![][public]


```cpp
VTKEXT_EXPORT int F3DUtils::ParseToInt(const std::string &str, int def, const std::string &nameError)
```








**Parameters**:

* const std::string & **str**
* int **def**
* const std::string & **nameError**

**Return type**: VTKEXT_EXPORT int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"F3DUtils::ParseToInt"}]}`
*/}

### Function CopyToClipboard {/* #F3DUtils_8h_1a40035beaf8df1fcf7a16b1919e1c9d86 */}

![][public]


```cpp
VTKEXT_EXPORT bool F3DUtils::CopyToClipboard(const std::string &text)
```




Copy the text to clipboard. Returns true if the text was successfully copied, false otherwise. Does nothing if F3D_MODULE_CLIP is not enabled.



**Parameters**:

* const std::string & **text**

**Return type**: VTKEXT_EXPORT bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"F3DUtils::CopyToClipboard"}]}`
*/}

### Function GetFromClipboard {/* #F3DUtils_8h_1ab5922af0e0f0135f832277dbe7583fa6 */}

![][public]


```cpp
VTKEXT_EXPORT bool F3DUtils::GetFromClipboard(std::string &text)
```




Get the text from the clipboard. Returns false if F3D_MODULE_CLIP is not enabled, true otherwise. The text parameter will contain the clipboard content if available.



**Parameters**:

* std::string & **text**

**Return type**: VTKEXT_EXPORT bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"F3DUtils::GetFromClipboard"}]}`
*/}

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)