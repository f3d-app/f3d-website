# Structure f3d::node_state_t {/* #structf3d_1_1node__state__t */}

![][C++]
![][public]

**Definition**: `types.h` (line 373)



Describe a single node of the scene hierarchy, as returned by [scene::getSceneHierarchy](classf3d_1_1scene.md#classf3d_1_1scene_1a616c8e5693333cd50d5f506f9859dcd4).

## Members

* [collapsed](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1a947397d901f423d6ef4c774090f516e9)
* [hasChildren](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1ac1fb38138937744f9b28455b7135a706)
* [id](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1ab8bb6c6c1db4332fd39ce2e5fd97d3b3)
* [label](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1a32382765912d35400db5902c85a0cd68)
* [level](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1aa154e8cd230615b446adb4211c8b7efd)
* [operator==](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1ad16c97c324ea07e82f963532f153ccd8)
* [parentId](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1a2c204cb1f2884ed78a0243789e0c1276)
* [visible](structf3d_1_1node__state__t.md#structf3d_1_1node__state__t_1afaf81259578c65e63f8dacbb67e7f5a0)

## Public attributes

### Variable id {/* #structf3d_1_1node__state__t_1ab8bb6c6c1db4332fd39ce2e5fd97d3b3 */}

![][public]

**Definition**: `types.h` (line 380)


```cpp
int f3d::node_state_t::id = -1
```




Identifier of the node, to be used with [scene::setNodeVisibility](classf3d_1_1scene.md#classf3d_1_1scene_1a9841b1e3b7aea372f3f773b83aaf269b). Ids are assigned in depth-first pre-order, starting at 0 with the root node of the first added file, and correspond to the index of the node in the vector returned by [scene::getSceneHierarchy](classf3d_1_1scene.md#classf3d_1_1scene_1a616c8e5693333cd50d5f506f9859dcd4). They are only invalidated by [scene::clear](classf3d_1_1scene.md#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d), as adding files to the scene only appends nodes.



**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::id"}]}`
*/}

### Variable parentId {/* #structf3d_1_1node__state__t_1a2c204cb1f2884ed78a0243789e0c1276 */}

![][public]

**Definition**: `types.h` (line 383)


```cpp
int f3d::node_state_t::parentId = -1
```


Identifier of the parent node, -1 when the node is a root node.





**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::parentId"}]}`
*/}

### Variable level {/* #structf3d_1_1node__state__t_1aa154e8cd230615b446adb4211c8b7efd */}

![][public]

**Definition**: `types.h` (line 386)


```cpp
int f3d::node_state_t::level = 0
```


Depth of the node, 0 for a root node, can be used to indent it.





**Type**: int

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::level"}]}`
*/}

### Variable label {/* #structf3d_1_1node__state__t_1a32382765912d35400db5902c85a0cd68 */}

![][public]

**Definition**: `types.h` (line 389)


```cpp
std::string f3d::node_state_t::label
```


Name of the node, a placeholder is used when the file does not provide any.





**Type**: std::string

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::label"}]}`
*/}

### Variable visible {/* #structf3d_1_1node__state__t_1afaf81259578c65e63f8dacbb67e7f5a0 */}

![][public]

**Definition**: `types.h` (line 392)


```cpp
bool f3d::node_state_t::visible = true
```


Visibility of the node.





**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::visible"}]}`
*/}

### Variable hasChildren {/* #structf3d_1_1node__state__t_1ac1fb38138937744f9b28455b7135a706 */}

![][public]

**Definition**: `types.h` (line 395)


```cpp
bool f3d::node_state_t::hasChildren = false
```


True if the node has at least one child.





**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::hasChildren"}]}`
*/}

### Variable collapsed {/* #structf3d_1_1node__state__t_1a947397d901f423d6ef4c774090f516e9 */}

![][public]

**Definition**: `types.h` (line 399)


```cpp
bool f3d::node_state_t::collapsed = false
```




True if a user interface should display this node collapsed by default, which is used to compact subtrees whose nodes do not carry any meaningful name



**Type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::collapsed"}]}`
*/}

## Public functions

### Function operator== {/* #structf3d_1_1node__state__t_1ad16c97c324ea07e82f963532f153ccd8 */}

![][public]
![][const]


```cpp
bool f3d::node_state_t::operator==(const node_state_t &other) const
```








**Parameters**:

* const [node\_state\_t](structf3d_1_1node__state__t.md) & **other**

**Return type**: bool

{/*
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"f3d::node_state_t::operator=="}]}`
*/}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)