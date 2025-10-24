# Class f3d::utils

![][C++]
![][public]

**Definition**: `utils.h` (line 26)

Class containing useful static functions.

A class containing useful static functions unrelated to other classes.

## Inner classes

* [f3d::utils::glob\_exception](structf3d_1_1utils_1_1glob__exception.md)
* [f3d::utils::string\_template](classf3d_1_1utils_1_1string__template.md)
* [f3d::utils::tokenize\_exception](structf3d_1_1utils_1_1tokenize__exception.md)

## Members

* [collapsePath](classf3d_1_1utils.md#classf3d_1_1utils_1a42d295d8692eeab2def58534f52dd3cb)
* [getEnv](classf3d_1_1utils.md#classf3d_1_1utils_1a79dd2ab7d2021779d80b14dbfc7520d1)
* [getKnownFolder](classf3d_1_1utils.md#classf3d_1_1utils_1a19f45d7340b90d124a7bef05d82acbaf)
* [globToRegex](classf3d_1_1utils.md#classf3d_1_1utils_1a31985a8c903ca9880f66e48e0b2cdd99)
* [KnownFolder](classf3d_1_1utils.md#classf3d_1_1utils_1aebad957764dffbf22565e30997402037)
* [textDistance](classf3d_1_1utils.md#classf3d_1_1utils_1a57ebdf21e25b83bdefe7f23743e74424)
* [tokenize](classf3d_1_1utils.md#classf3d_1_1utils_1ae1cfff8e2b9d13a7556133db81b7971f)

## Public types

### Enumeration type KnownFolder {#classf3d_1_1utils_1aebad957764dffbf22565e30997402037}

![][public]

**Definition**: `utils.h` (line 102)


```cpp
enum KnownFolder {
  ROAMINGAPPDATA,
  LOCALAPPDATA,
  PICTURES
}
```




Enumeration of supported Windows known folders



#### Enumerator ROAMINGAPPDATA {#classf3d_1_1utils_1aebad957764dffbf22565e30997402037ae38588db6e73d4680ec6a0fb2717b85b}





#### Enumerator LOCALAPPDATA {#classf3d_1_1utils_1aebad957764dffbf22565e30997402037a26e533b6cb5cf77f7d0a48c2e45598f7}





#### Enumerator PICTURES {#classf3d_1_1utils_1aebad957764dffbf22565e30997402037a7aa9c13a2316c4a661679ecb863b3775}







## Public static functions

### Function textDistance {#classf3d_1_1utils_1a57ebdf21e25b83bdefe7f23743e74424}

![][public]
![][static]


```cpp
static unsigned int f3d::utils::textDistance(std::string_view strA, std::string_view strB)
```




Compute the Levenshtein distance between two strings. Can be useful for spell checking and typo detection.



**Parameters**:

* std::string_view **strA**
* std::string_view **strB**

**Return type**: unsigned int



### Function tokenize {#classf3d_1_1utils_1ae1cfff8e2b9d13a7556133db81b7971f}

![][public]
![][static]


```cpp
static std::vector< std::string > f3d::utils::tokenize(std::string_view str, bool keepComments=true)
```




Tokenize provided string_view into a vector of strings, using the same logic as bash.
* Split by spaces unless between quotes

* Split by quoted section and remove the quotes

* Supported quotes are: '"`
 - Use escaped \ quotes, spaces and escape to add them verbatim
 - When keepComments argument is true, comments are supported with `#`, any characters after are ignored
otherwise '#' and any characters after will be handled as standard character
 - Use escaped \# to add it verbatim when using keepComments = true
 - Other escaped characters are also added verbatim

Throw a tokenize_exception if a quoted section is not closed or if finishing with an escape

Examples:
 - `set scene.up.direction +Z` -> `set` `scene.up.direction` `+Z`
 - `set render.hdri.file "/path/to/file with spaces.png"` -> `set`, `render.hdri.file`, `/path/to/file with spaces.png`
 - `set render.hdri.file '/path/to/file with spaces.png'` -> `set`, `render.hdri.file`, `/path/to/file with spaces.png`
 - `set render.hdri.file "/path/to/file'with'quotes.png"` -> `set`, `render.hdri.file`, `/path/to/file'with'quotes.png`
 - `set render.hdri.file /path/to/file\ spaces\ \'quotes\".png` -> `set`, `render.hdri.file`, `/path/to/file spaces 'quotes".png`

* `set render.hdri.file C:\path\to\windows\file.png` -> `set`, `render.hdri.file`, `C:\path\to\windows\file.png`

* `set scene.up.direction +Z # A comment` -> `set`, `scene.up.direction`, `+Z`

* `set scene.up.direction +\Z` -> `set`, `scene.up.direction`, `+Z`

* `set scene.up.direction "+Z` -> [tokenize\_exception](structf3d_1_1utils_1_1tokenize__exception.md)

* `set scene.up.direction +Z\` -> [tokenize\_exception](structf3d_1_1utils_1_1tokenize__exception.md)



**Parameters**:

* std::string_view **str**
* bool **keepComments** = true 

**Return type**: std::vector< std::string >



### Function collapsePath {#classf3d_1_1utils_1a42d295d8692eeab2def58534f52dd3cb}

![][public]
![][static]


```cpp
static std::filesystem::path f3d::utils::collapsePath(const std::filesystem::path &path, const std::filesystem::path &baseDirectory={})
```




Collapse a string filesystem path by:
* Expanding tilda `~` into home dir in a cross-platform way

* Transform relative path into an absolute path based on basedDirectory if provided, or the current directory if not

* Remove any `..` if any







Rely on vtksys::SystemTools::CollapseFullPath but return empty string if the provided string is empty.



**Parameters**:

* const std::filesystem::path & **path**
* const std::filesystem::path & **baseDirectory** = {} 

**Return type**: std::filesystem::path



### Function globToRegex {#classf3d_1_1utils_1a31985a8c903ca9880f66e48e0b2cdd99}

![][public]
![][static]


```cpp
static std::string f3d::utils::globToRegex(std::string_view glob, char pathSeparator='/')
```




Converts a glob expression to a regular expression. When a glob contains `**`, the `pathSeparator` (`/` by default) is used to help generate the regular expression.





It handles the following glob features:
* `*`: Matches zero or more characters (except path separators when also using `**`)

* `?`: Matches exactly one character (except path separators when also using `**`)

* `[...]`: Character class, matches any of the given characters

* `[!...]` or `[^...]`: Negated character class, matches none of the given characters

* `{a,b,c}`: Alternation, matches any of the given comma-separated patterns

* `**`: Matches any number of characters including path separators







Throws a [utils::glob\_exception](structf3d_1_1utils_1_1glob__exception.md) if a character class or alternation is not closed or the expression ends with an escape.



**Parameters**:

* std::string_view **glob**
* char **pathSeparator** = '/' 

**Return type**: std::string



### Function getEnv {#classf3d_1_1utils_1a79dd2ab7d2021779d80b14dbfc7520d1}

![][public]
![][static]


```cpp
static std::optional< std::string > f3d::utils::getEnv(const std::string &env)
```




Get an environment variable value, returns std::nullopt if not set



**Parameters**:

* const std::string & **env**

**Return type**: std::optional< std::string >



### Function getKnownFolder {#classf3d_1_1utils_1a19f45d7340b90d124a7bef05d82acbaf}

![][public]
![][static]


```cpp
static std::optional< std::string > f3d::utils::getKnownFolder(KnownFolder knownFolder)
```




Get an Windows known folder, returns std::nullopt in case of error. Return std::nullopt on non-Windows platforms.



**Parameters**:

* [KnownFolder](classf3d_1_1utils.md#classf3d_1_1utils_1aebad957764dffbf22565e30997402037) **knownFolder**

**Return type**: std::optional< std::string >





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)