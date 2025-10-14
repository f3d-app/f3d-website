# Class f3d::utils::string_template

![][C++]
![][public]

**Definition**: `utils.h` (line 139)



String template allowing substitution of variables enclosed in curly braces. 
```cpp
string_template("{greeting} {name}!")
  .substitute({ { "greeting", "hello" }, { "name", "World" } })
  .str() == "hello World!"
```

## Inner classes

* [f3d::utils::string\_template::lookup\_error](structf3d_1_1utils_1_1string__template_1_1lookup__error.md)

## Members

* [fragments](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1affe82b419f30bca158eb8b049ffc20a3)
* [str](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb)
* [string\_template](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1abaafc00ca694d03ae57e1faaa58e594c)
* [substitute](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1a482286e6db45c2056d5f1e04bae721f3)
* [substitute](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1a3597d4917b4fb62f75bc599be4122999)
* [substitute](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1aa74c15b745ddd573b689bff3d3ddd16c)
* [variables](classf3d_1_1utils_1_1string__template.md#classf3d_1_1utils_1_1string__template_1a8f45ebbc3ed5775b79d0d5e81ca52d4e)

## Private attributes

### Variable fragments {#classf3d_1_1utils_1_1string__template_1affe82b419f30bca158eb8b049ffc20a3}

![][private]

**Definition**: `utils.h` (line 141)


```cpp
std::vector<std::pair<std::string, bool> > f3d::utils::string_template::fragments
```








**Type**: std::vector< std::pair< std::string, bool > >



## Public functions

### Function string\_template {#classf3d_1_1utils_1_1string__template_1abaafc00ca694d03ae57e1faaa58e594c}

![][public]


```cpp
f3d::utils::string_template::string_template(const std::string &templateString)
```








**Parameters**:

* const std::string & **templateString**

**Return type**: 



### Function substitute {#classf3d_1_1utils_1_1string__template_1a482286e6db45c2056d5f1e04bae721f3}

![][public]


```cpp
string_template & f3d::utils::string_template::substitute(F lookup)
```




Substitute variables based on a `std::string(const std::string&)` function.





Variables for which the function throws a [string\_template::lookup\_error](structf3d_1_1utils_1_1string__template_1_1lookup__error.md) exception are left untouched.



**Parameters**:

* F **lookup**

**Return type**: [string\_template](classf3d_1_1utils_1_1string__template.md) &



### Function substitute {#classf3d_1_1utils_1_1string__template_1a3597d4917b4fb62f75bc599be4122999}

![][public]


```cpp
utils::string_template & f3d::utils::string_template::substitute(const std::map< std::string, std::string > &lookup)
```




Substitute variables based on a map.





Variables for which the map does not contain a key are left untouched.



**Parameters**:

* const std::map< std::string, std::string > & **lookup**

**Return type**: [string\_template](classf3d_1_1utils_1_1string__template.md) &



### Function str {#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb}

![][public]
![][const]


```cpp
std::string f3d::utils::string_template::str() const
```




Return a string representation of the string template



**Return type**: std::string



### Function variables {#classf3d_1_1utils_1_1string__template_1a8f45ebbc3ed5775b79d0d5e81ca52d4e}

![][public]
![][const]


```cpp
std::vector< std::string > f3d::utils::string_template::variables() const
```




List the remaining un-substituted variables.



**Return type**: std::vector< std::string >



### Function substitute {#classf3d_1_1utils_1_1string__template_1aa74c15b745ddd573b689bff3d3ddd16c}

![][public]


```cpp
utils::string_template & f3d::utils::string_template::substitute(F lookup)
```








**Parameters**:

* F **lookup**

**Return type**: [utils::string\_template](classf3d_1_1utils_1_1string__template.md) &





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)