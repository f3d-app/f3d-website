# Structure f3d::mesh\_t {#structf3d_1_1mesh__t}

![][C++]
![][public]

**Definition**: `types.h` (line 317)



Describe a 3D surfacic mesh. A valid mesh fulfills these requirements:
* points must not be empty and its length must be a multiple of 3 (3 times the number of points)

* normals can be empty or its length must be 3 times the number of points

* texture_coordinates can be empty or its length must be 2 times the number of points

* face_sides can be any size including empty resulting in a point cloud

* face_indices length must be the sum of all values in face_sides

## Members

* [face\_indices](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1a309630f63c3f2105e70e079f777f0c81)
* [face\_sides](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1a40e1735ee41d5c088e446dce73214d31)
* [isValid](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1a16d9b017479bf3e65e3d50e5081916eb)
* [normals](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1ad0b4a90786f214a89dbae5b2d8468e59)
* [points](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1aae9562d60d312a986f8a0d0f61bd4d3c)
* [texture\_coordinates](structf3d_1_1mesh__t.md#structf3d_1_1mesh__t_1a5c2cd44ccd008d9f258dc74e4bb074bd)

## Public attributes

### Variable points {#structf3d_1_1mesh__t_1aae9562d60d312a986f8a0d0f61bd4d3c}

![][public]

**Definition**: `types.h` (line 319)


```cpp
std::vector<float> f3d::mesh_t::points
```








**Type**: std::vector< float >



### Variable normals {#structf3d_1_1mesh__t_1ad0b4a90786f214a89dbae5b2d8468e59}

![][public]

**Definition**: `types.h` (line 320)


```cpp
std::vector<float> f3d::mesh_t::normals
```








**Type**: std::vector< float >



### Variable texture\_coordinates {#structf3d_1_1mesh__t_1a5c2cd44ccd008d9f258dc74e4bb074bd}

![][public]

**Definition**: `types.h` (line 321)


```cpp
std::vector<float> f3d::mesh_t::texture_coordinates
```








**Type**: std::vector< float >



### Variable face\_sides {#structf3d_1_1mesh__t_1a40e1735ee41d5c088e446dce73214d31}

![][public]

**Definition**: `types.h` (line 322)


```cpp
std::vector<unsigned int> f3d::mesh_t::face_sides
```








**Type**: std::vector< unsigned int >



### Variable face\_indices {#structf3d_1_1mesh__t_1a309630f63c3f2105e70e079f777f0c81}

![][public]

**Definition**: `types.h` (line 323)


```cpp
std::vector<unsigned int> f3d::mesh_t::face_indices
```








**Type**: std::vector< unsigned int >



## Public functions

### Function isValid {#structf3d_1_1mesh__t_1a16d9b017479bf3e65e3d50e5081916eb}

![][public]
![][const]


```cpp
F3D_EXPORT std::pair< bool, std::string > f3d::mesh_t::isValid() const
```




Check validity of the mesh. Returns a pair with the first element to true if the mesh is valid. If invalid, an error message is returned in the second element.



**Return type**: F3D_EXPORT std::pair< bool, std::string >



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)