# Structure f3d::interaction\_bind\_t {#structf3d_1_1interaction__bind__t}

![][C++]
![][public]

**Definition**: `interactor.h` (line 20)





## Members

* [format](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1ada344efb3314a4980cae5a76ba0eceb9)
* [inter](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a1fc8a5b848dea0d130986d1c55ec4afa)
* [mod](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a65b5e074b63fbbfa01b35e5edddf9513)
* [ModifierKeys](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34)
* [operator\<](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a8eb647fcb004f4d79a900f685ec61b2c)
* [operator==](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a64a19a262ebd0f0c75757d458306285b)
* [parse](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a2e76d79fb88e1dfb682b51c41d259349)

## Public types

### Enumeration type ModifierKeys {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34}

![][public]

**Definition**: `interactor.h` (line 25)


```cpp
enum ModifierKeys {
  ANY = 0x80,
  NONE = 0x0,
  CTRL = 0x1,
  SHIFT = 0x2,
  CTRL_SHIFT = 0x3
}
```




Enumeration of supported modifier combination, in binary.



#### Enumerator ANY {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34a8e1bde3c3d303163521522cf1d62f21f}





#### Enumerator NONE {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34ab50339a10e1de285ac99d4c3990b8693}





#### Enumerator CTRL {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34a32f7eee2581c72a5561c21df3013a89a}





#### Enumerator SHIFT {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34a46afff2b309b8b16a46d812172a9235c}





#### Enumerator CTRL\_SHIFT {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34ab99320973a4dd4f1f442037248dcaf8f}







## Public attributes

### Variable mod {#structf3d_1_1interaction__bind__t_1a65b5e074b63fbbfa01b35e5edddf9513}

![][public]

**Definition**: `interactor.h` (line 34)


```cpp
ModifierKeys f3d::interaction_bind_t::mod = ModifierKeys::NONE
```








**Type**: [ModifierKeys](structf3d_1_1interaction__bind__t.md#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34)



### Variable inter {#structf3d_1_1interaction__bind__t_1a1fc8a5b848dea0d130986d1c55ec4afa}

![][public]

**Definition**: `interactor.h` (line 35)


```cpp
std::string f3d::interaction_bind_t::inter
```








**Type**: std::string



## Public functions

### Function operator\< {#structf3d_1_1interaction__bind__t_1a8eb647fcb004f4d79a900f685ec61b2c}

![][public]
![][const]


```cpp
bool f3d::interaction_bind_t::operator<(const interaction_bind_t &bind) const
```




Operator to be able to store binds in maps and other structs Compare modifier and interaction



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**

**Return type**: bool



### Function operator== {#structf3d_1_1interaction__bind__t_1a64a19a262ebd0f0c75757d458306285b}

![][public]
![][const]


```cpp
bool f3d::interaction_bind_t::operator==(const interaction_bind_t &bind) const
```




Operator to be able to store binds in maps and other structs Compare modifier and interaction



**Parameters**:

* const [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md) & **bind**

**Return type**: bool



### Function format {#structf3d_1_1interaction__bind__t_1ada344efb3314a4980cae5a76ba0eceb9}

![][public]
![][const]


```cpp
std::string f3d::interaction_bind_t::format() const
```




Format this binding into a string eg: "A", "Any+Question", "Shift+L".



**Return type**: std::string



## Public static functions

### Function parse {#structf3d_1_1interaction__bind__t_1a2e76d79fb88e1dfb682b51c41d259349}

![][public]
![][static]


```cpp
interaction_bind_t f3d::interaction_bind_t::parse(std::string_view str)
```




Create and return an interaction bind from provided string



**Parameters**:

* std::string_view **str**

**Return type**: [interaction\_bind\_t](structf3d_1_1interaction__bind__t.md)



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)