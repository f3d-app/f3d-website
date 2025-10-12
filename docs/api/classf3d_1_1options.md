# Class f3d::options

![][C++]
![][public]

**Definition**: `options.h` (line 31)

Class used to control the different options.

A class to control the different options of f3d. See the README_libf3d.md for the full listing of options. The struct below can also be consulted.

## Inner classes

* [f3d::options::incompatible\_exception](structf3d_1_1options_1_1incompatible__exception.md)
* [f3d::options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md)
* [f3d::options::interactor](structf3d_1_1options_1_1interactor.md)
* [f3d::options::model](structf3d_1_1options_1_1model.md)
* [f3d::options::no\_value\_exception](structf3d_1_1options_1_1no__value__exception.md)
* [f3d::options::parsing\_exception](structf3d_1_1options_1_1parsing__exception.md)
* [f3d::options::render](structf3d_1_1options_1_1render.md)
* [f3d::options::scene](structf3d_1_1options_1_1scene.md)
* [f3d::options::ui](structf3d_1_1options_1_1ui.md)

## Members

* [copy](classf3d_1_1options.md#classf3d_1_1options_1ab9d687afd0665f68274b4bbe6b7d11f5)
* [format](classf3d_1_1options.md#classf3d_1_1options_1a5c84338393f315d46e82a697cb65f410)
* [get](classf3d_1_1options.md#classf3d_1_1options_1a340535d7dceb9fced1c19b6571d91f81)
* [getAllNames](classf3d_1_1options.md#classf3d_1_1options_1a722119028984f674b21abecaef51f859)
* [getAsString](classf3d_1_1options.md#classf3d_1_1options_1a4a238691779258bf860cf1dcd455b41e)
* [getClosestOption](classf3d_1_1options.md#classf3d_1_1options_1a115a0c9d76e250657283bb195a4428ee)
* [getNames](classf3d_1_1options.md#classf3d_1_1options_1ab3b98399029bd7437fcae7b4b43ce5bf)
* [hasValue](classf3d_1_1options.md#classf3d_1_1options_1aa907225ddee7f51c844fea9eef7728a1)
* [interactor](classf3d_1_1options.md#classf3d_1_1options_1aa287e68c8f75c10e32a1b1c99cd5478b)
* [isOptional](classf3d_1_1options.md#classf3d_1_1options_1ae075b953f83e90773333b1cd447b918e)
* [isSame](classf3d_1_1options.md#classf3d_1_1options_1a4fb9ff49cd54cf5e8c03ac412e734fbd)
* [model](classf3d_1_1options.md#classf3d_1_1options_1a8cc373e7f784206675a0eb539484b1c6)
* [operator=](classf3d_1_1options.md#classf3d_1_1options_1aaa79aa9d8182451fef7dbea10b3de64a)
* [operator=](classf3d_1_1options.md#classf3d_1_1options_1a069f395f37e24c1b7158467d09b0e379)
* [options](classf3d_1_1options.md#classf3d_1_1options_1ac7d2a41fa0d89a27674fce76f097df07)
* [options](classf3d_1_1options.md#classf3d_1_1options_1a1b05085aaa9b359e26bf1dc34c447277)
* [options](classf3d_1_1options.md#classf3d_1_1options_1aaf9453ef24d28f1da697afbcfa65e67a)
* [parse](classf3d_1_1options.md#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6)
* [removeValue](classf3d_1_1options.md#classf3d_1_1options_1af4a3df470307fca3f27f0b6be9069b11)
* [render](classf3d_1_1options.md#classf3d_1_1options_1a032db47739d7efcabeb5dcea65c9a649)
* [reset](classf3d_1_1options.md#classf3d_1_1options_1a14b30525d9a905087449bf89eff38634)
* [scene](classf3d_1_1options.md#classf3d_1_1options_1a10ce695a833bd835305c60377c627ec3)
* [set](classf3d_1_1options.md#classf3d_1_1options_1a863b0153b83210d422a4a6e3012a2590)
* [setAsString](classf3d_1_1options.md#classf3d_1_1options_1a5224e2d850dbb2b811bf00eb3e2d390c)
* [toggle](classf3d_1_1options.md#classf3d_1_1options_1add0d53143dc8f3d3bf8d7770c0585de7)
* [ui](classf3d_1_1options.md#classf3d_1_1options_1a2f4da5927f7441605182f4e33b4d5a51)
* [~options](classf3d_1_1options.md#classf3d_1_1options_1a4f9b6f55863744717bfcca64c0d2db10)

## Constructors

### Function options {#classf3d_1_1options_1ac7d2a41fa0d89a27674fce76f097df07}

![][public]


```cpp
f3d::options::options()
```




Default/Copy/move constructors/operators.



**Return type**: 



### Function ~options {#classf3d_1_1options_1a4f9b6f55863744717bfcca64c0d2db10}

![][public]


```cpp
f3d::options::~options()
```




Default/Copy/move constructors/operators.



**Return type**: 



### Function options {#classf3d_1_1options_1a1b05085aaa9b359e26bf1dc34c447277}

![][public]


```cpp
f3d::options::options(const options &opt)
```




Default/Copy/move constructors/operators.



**Parameters**:

* const [options](classf3d_1_1options.md) & **opt**

**Return type**: 



### Function operator= {#classf3d_1_1options_1aaa79aa9d8182451fef7dbea10b3de64a}

![][public]


```cpp
options & f3d::options::operator=(const options &opt)
```




Default/Copy/move constructors/operators.



**Parameters**:

* const [options](classf3d_1_1options.md) & **opt**

**Return type**: [options](classf3d_1_1options.md) &



### Function options {#classf3d_1_1options_1aaf9453ef24d28f1da697afbcfa65e67a}

![][public]


```cpp
f3d::options::options(options &&other) noexcept
```




Default/Copy/move constructors/operators.



**Parameters**:

* [options](classf3d_1_1options.md) && **other**

**Return type**: 



### Function operator= {#classf3d_1_1options_1a069f395f37e24c1b7158467d09b0e379}

![][public]


```cpp
options & f3d::options::operator=(options &&other) noexcept
```




Default/Copy/move constructors/operators.



**Parameters**:

* [options](classf3d_1_1options.md) && **other**

**Return type**: [options](classf3d_1_1options.md) &



## Public attributes

### Variable interactor {#classf3d_1_1options_1aa287e68c8f75c10e32a1b1c99cd5478b}

![][public]

**Definition**: `options.h` (line 200)


```cpp
struct f3d::options::interactor f3d::options::interactor
```








**Type**: struct f3d::options::interactor



### Variable model {#classf3d_1_1options_1a8cc373e7f784206675a0eb539484b1c6}

![][public]

**Definition**: `options.h` (line 252)


```cpp
struct f3d::options::model f3d::options::model
```








**Type**: struct f3d::options::model



### Variable render {#classf3d_1_1options_1a032db47739d7efcabeb5dcea65c9a649}

![][public]

**Definition**: `options.h` (line 313)


```cpp
struct f3d::options::render f3d::options::render
```








**Type**: struct f3d::options::render



### Variable scene {#classf3d_1_1options_1a10ce695a833bd835305c60377c627ec3}

![][public]

**Definition**: `options.h` (line 330)


```cpp
struct f3d::options::scene f3d::options::scene
```








**Type**: struct f3d::options::scene



### Variable ui {#classf3d_1_1options_1a2f4da5927f7441605182f4e33b4d5a51}

![][public]

**Definition**: `options.h` (line 359)


```cpp
struct f3d::options::ui f3d::options::ui
```








**Type**: struct f3d::options::ui



## Public functions

### Function set {#classf3d_1_1options_1a863b0153b83210d422a4a6e3012a2590}

![][public]


```cpp
options & f3d::options::set(std::string_view name, const option_variant_t &value)
```




Set an option as a variant based on its name Please note that, on Windows, using an explicit std::string may be required: [https://stackoverflow.com/questions/60681710/prefer-stdstring-in-stdvariantbool-stdstring-for-const-char](https://stackoverflow.com/questions/60681710/prefer-stdstring-in-stdvariantbool-stdstring-for-const-char) Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist. Throw an [options::incompatible\_exception](structf3d_1_1options_1_1incompatible__exception.md) if value is not compatible with option.



**Parameters**:

* std::string_view **name**
* const option_variant_t & **value**

**Return type**: [options](classf3d_1_1options.md) &



### Function get {#classf3d_1_1options_1a340535d7dceb9fced1c19b6571d91f81}

![][public]
![][const]


```cpp
option_variant_t f3d::options::get(std::string_view name) const
```




Get an option as a variant based on its name Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist. Throw an [options::no\_value\_exception](structf3d_1_1options_1_1no__value__exception.md) if option has not been set.



**Parameters**:

* std::string_view **name**

**Return type**: option_variant_t



### Function setAsString {#classf3d_1_1options_1a5224e2d850dbb2b811bf00eb3e2d390c}

![][public]


```cpp
options & f3d::options::setAsString(std::string_view name, const std::string &str)
```




Set an option as a string based on its name Use dedicated parsing code, see the related doc in PARSING.md. Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist. Throw an [options::parsing\_exception](structf3d_1_1options_1_1parsing__exception.md) if parsing failed.



**Parameters**:

* std::string_view **name**
* const std::string & **str**

**Return type**: [options](classf3d_1_1options.md) &



### Function getAsString {#classf3d_1_1options_1a4a238691779258bf860cf1dcd455b41e}

![][public]
![][const]


```cpp
std::string f3d::options::getAsString(std::string_view name) const
```




Get an option as a string based on its name Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist. Throw an [options::no\_value\_exception](structf3d_1_1options_1_1no__value__exception.md) if option has not been set.



**Parameters**:

* std::string_view **name**

**Return type**: std::string



### Function toggle {#classf3d_1_1options_1add0d53143dc8f3d3bf8d7770c0585de7}

![][public]


```cpp
options & f3d::options::toggle(std::string_view name)
```




A boolean option specific method to toggle it. If the option has not been set yet, set it to true. Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist. Throw an [options::incompatible\_exception](structf3d_1_1options_1_1incompatible__exception.md) if option is not boolean.



**Parameters**:

* std::string_view **name**

**Return type**: [options](classf3d_1_1options.md) &



### Function isSame {#classf3d_1_1options_1a4fb9ff49cd54cf5e8c03ac412e734fbd}

![][public]
![][const]


```cpp
bool f3d::options::isSame(const options &other, std::string_view name) const
```




Compare an option between this and a provided other. Return true if they are the same value, false otherwise. Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* const [options](classf3d_1_1options.md) & **other**
* std::string_view **name**

**Return type**: bool



### Function hasValue {#classf3d_1_1options_1aa907225ddee7f51c844fea9eef7728a1}

![][public]
![][const]


```cpp
bool f3d::options::hasValue(std::string_view name) const
```




Return true if an option has a value, false otherwise Always returns true for non-optional options. Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* std::string_view **name**

**Return type**: bool



### Function copy {#classf3d_1_1options_1ab9d687afd0665f68274b4bbe6b7d11f5}

![][public]


```cpp
options & f3d::options::copy(const options &other, std::string_view name)
```




Copy the value of an option from this to the provided other. Throw an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* const [options](classf3d_1_1options.md) & **other**
* std::string_view **name**

**Return type**: [options](classf3d_1_1options.md) &



### Function getNames {#classf3d_1_1options_1ab3b98399029bd7437fcae7b4b43ce5bf}

![][public]
![][const]


```cpp
std::vector< std::string > f3d::options::getNames() const
```




Get all option names that currently have values.



**Return type**: std::vector< std::string >



### Function getClosestOption {#classf3d_1_1options_1a115a0c9d76e250657283bb195a4428ee}

![][public]
![][const]


```cpp
std::pair< std::string, unsigned int > f3d::options::getClosestOption(std::string_view option) const
```




Get the closest option name and its Levenshtein distance.



**Parameters**:

* std::string_view **option**

**Return type**: std::pair< std::string, unsigned int >



### Function isOptional {#classf3d_1_1options_1ae075b953f83e90773333b1cd447b918e}

![][public]
![][const]


```cpp
bool f3d::options::isOptional(std::string_view option) const
```




Returns true if the option is optional else returns false. Throws an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* std::string_view **option**

**Return type**: bool



### Function reset {#classf3d_1_1options_1a14b30525d9a905087449bf89eff38634}

![][public]


```cpp
options & f3d::options::reset(std::string_view name)
```




Resets the option to default value. Throws an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* std::string_view **name**

**Return type**: [options](classf3d_1_1options.md) &



### Function removeValue {#classf3d_1_1options_1af4a3df470307fca3f27f0b6be9069b11}

![][public]


```cpp
options & f3d::options::removeValue(std::string_view name)
```




Unset the option if it is optional else throws [options::incompatible\_exception](structf3d_1_1options_1_1incompatible__exception.md). Throws an [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if option does not exist.



**Parameters**:

* std::string_view **name**

**Return type**: [options](classf3d_1_1options.md) &



## Public static functions

### Function getAllNames {#classf3d_1_1options_1a722119028984f674b21abecaef51f859}

![][public]
![][static]


```cpp
static std::vector< std::string > f3d::options::getAllNames()
```




Get all available option names.



**Return type**: std::vector< std::string >



### Function parse {#classf3d_1_1options_1ad95e308431a7bf07c4dc1454ee90d4e6}

![][public]
![][static]


```cpp
static T f3d::options::parse(const std::string &str)
```




Templated parsing method used internally to parse strings. Implemented for the different supported types, see PARSING.md for more info. Throw an [options::parsing\_exception](structf3d_1_1options_1_1parsing__exception.md) if parsing failed.



**Parameters**:

* const std::string & **str**

**Return type**: T



### Function format {#classf3d_1_1options_1a5c84338393f315d46e82a697cb65f410}

![][public]
![][static]


```cpp
static std::string f3d::options::format(const T &var)
```




Templated parsing method used internally to format var into strings. Implemented for the different supported types, see PARSING.md for more info.



**Parameters**:

* const T & **var**

**Return type**: std::string





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)