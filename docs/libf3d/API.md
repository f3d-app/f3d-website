## namespace `f3d` {#namespacef3d}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`f3d::camera`](#classf3d_1_1camera) | Abstract class to control a camera in a window.
`class `[`f3d::color_t`](#classf3d_1_1color__t) | Describe a RGB color.
`class `[`f3d::colormap_t`](#classf3d_1_1colormap__t) | Describe a colormap, which is a vector of repeated: val,r,g,b
`class `[`f3d::context`](#classf3d_1_1context) | Utility function that implements basic OpenGL context symbol resolvers.
`class `[`f3d::direction_t`](#classf3d_1_1direction__t) | Describe a 3D direction.
`class `[`f3d::double_array_t`](#classf3d_1_1double__array__t) | A base template type for an array of double
`class `[`f3d::engine`](#classf3d_1_1engine) | Class used to create instance of other classes.
`class `[`f3d::exception`](#structf3d_1_1exception) | a generic exception used in the libf3d
`class `[`f3d::image`](#classf3d_1_1image) | Class used to represent an image.
`class `[`f3d::interactor`](#classf3d_1_1interactor) | Class used to control interaction and animation.
`class `[`f3d::log`](#classf3d_1_1log) | Class used to show logs in F3D.
`class `[`f3d::ratio_t`](#classf3d_1_1ratio__t) | Describe a ratio.
`class `[`f3d::scene`](#classf3d_1_1scene) | Class to load files into.
`class `[`f3d::transform2d_t`](#classf3d_1_1transform2d__t) | Store a 3x3 transform matrix as a sequence of 9 float values VTK expects a 4x4 matrix, but for 2d transforms this is exposed as a 3x3 matrix
`class `[`f3d::utils`](#classf3d_1_1utils) | Class containing useful static functions.
`class `[`f3d::window`](#classf3d_1_1window) | Abstract class to render in a window or an image.
`struct `[`f3d::camera_state_t`](#structf3d_1_1camera__state__t) | 
`struct `[`f3d::interaction_bind_t`](#structf3d_1_1interaction__bind__t) | 
`struct `[`f3d::light_state_t`](#structf3d_1_1light__state__t) | 
`struct `[`f3d::mesh_t`](#structf3d_1_1mesh__t) | Describe a 3D surfacic mesh. A valid mesh fulfills these requirements:
`struct `[`f3d::point3_t`](#structf3d_1_1point3__t) | Describe a 3D point.
`struct `[`f3d::type_access_exception`](#structf3d_1_1type__access__exception) | An exception that can be thrown by any type if it fails when accessing data for some reason.
`struct `[`f3d::type_construction_exception`](#structf3d_1_1type__construction__exception) | An exception that can be thrown by any type if it fails in the constructor for some reason.
`struct `[`f3d::vector3_t`](#structf3d_1_1vector3__t) | Describe a 3D vector.

## class `f3d::camera` {#classf3d_1_1camera}

Abstract class to control a camera in a window.

A class to control a camera in a window. When modifying the Position/FocalPoint/ViewUp API or the camera movements API, the view up is automatically orthogonalized. All angles are in degrees.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`camera`](#classf3d_1_1camera)` & `[`setCurrentAsDefault`](#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d)`()` | Store the current camera configuration as default.
`public `[`camera`](#classf3d_1_1camera)` & `[`resetToDefault`](#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132)`()` | Reset the camera to the stored default camera configuration.
`public `[`camera`](#classf3d_1_1camera)` & `[`resetToBounds`](#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e)`(double zoomFactor)` | Reset the camera using the bounds of actors in the scene. Provided zoomFactor will be used to position the camera. A value of 1 correspond to the bounds roughly aligned to the edges of the window.

### Members

#### `public `[`camera`](#classf3d_1_1camera)` & `[`setCurrentAsDefault`](#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d)`()` {#classf3d_1_1camera_1a008bf4b1b3a0e06ed1e6753ddd12c10d}

Store the current camera configuration as default.

#### `public `[`camera`](#classf3d_1_1camera)` & `[`resetToDefault`](#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132)`()` {#classf3d_1_1camera_1a419f50f67c84bb4bae12742a399f4132}

Reset the camera to the stored default camera configuration.

#### `public `[`camera`](#classf3d_1_1camera)` & `[`resetToBounds`](#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e)`(double zoomFactor)` {#classf3d_1_1camera_1a78013e452116352500cb02af8356cb4e}

Reset the camera using the bounds of actors in the scene. Provided zoomFactor will be used to position the camera. A value of 1 correspond to the bounds roughly aligned to the edges of the window.

## class `f3d::color_t` {#classf3d_1_1color__t}

```
class f3d::color_t
  : public f3d::double_array_t< 3 >
```

Describe a RGB color.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`color_t`](#classf3d_1_1color__t_1acf69164a9f721cf166a9a8270a8c3156)`() = default` | 
`public inline  explicit `[`color_t`](#classf3d_1_1color__t_1a78047417d30e9afae0ea60d38c20c283)`(const std::vector< double > & vec)` | 
`public inline  `[`color_t`](#classf3d_1_1color__t_1ae5633847d4df8d05405307212fbe940f)`(const std::initializer_list< double > & list)` | 
`public inline  `[`color_t`](#classf3d_1_1color__t_1ab864c2094865a5c8d04e14affcbfd08b)`(double red,double green,double blue)` | 
`public inline double `[`r`](#classf3d_1_1color__t_1a029f159302976b8bc773a29fa8587f69)`() const` | 
`public inline double `[`g`](#classf3d_1_1color__t_1a2248b84a5ada178f2679426f9fea73fd)`() const` | 
`public inline double `[`b`](#classf3d_1_1color__t_1a51dcb99a6f2845d9d31d3a1a9adacda2)`() const` | 

### Members

#### `public inline  `[`color_t`](#classf3d_1_1color__t_1acf69164a9f721cf166a9a8270a8c3156)`() = default` {#classf3d_1_1color__t_1acf69164a9f721cf166a9a8270a8c3156}

#### `public inline  explicit `[`color_t`](#classf3d_1_1color__t_1a78047417d30e9afae0ea60d38c20c283)`(const std::vector< double > & vec)` {#classf3d_1_1color__t_1a78047417d30e9afae0ea60d38c20c283}

#### `public inline  `[`color_t`](#classf3d_1_1color__t_1ae5633847d4df8d05405307212fbe940f)`(const std::initializer_list< double > & list)` {#classf3d_1_1color__t_1ae5633847d4df8d05405307212fbe940f}

#### `public inline  `[`color_t`](#classf3d_1_1color__t_1ab864c2094865a5c8d04e14affcbfd08b)`(double red,double green,double blue)` {#classf3d_1_1color__t_1ab864c2094865a5c8d04e14affcbfd08b}

#### `public inline double `[`r`](#classf3d_1_1color__t_1a029f159302976b8bc773a29fa8587f69)`() const` {#classf3d_1_1color__t_1a029f159302976b8bc773a29fa8587f69}

#### `public inline double `[`g`](#classf3d_1_1color__t_1a2248b84a5ada178f2679426f9fea73fd)`() const` {#classf3d_1_1color__t_1a2248b84a5ada178f2679426f9fea73fd}

#### `public inline double `[`b`](#classf3d_1_1color__t_1a51dcb99a6f2845d9d31d3a1a9adacda2)`() const` {#classf3d_1_1color__t_1a51dcb99a6f2845d9d31d3a1a9adacda2}

## class `f3d::colormap_t` {#classf3d_1_1colormap__t}

Describe a colormap, which is a vector of repeated: val,r,g,b

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`colormap_t`](#classf3d_1_1colormap__t_1a52bf9c26a6d9658e080ce536cf67f195)`() = default` | 
`public inline  explicit `[`colormap_t`](#classf3d_1_1colormap__t_1ae64d62b6ec1fae4875959a4d331b179f)`(const std::vector< double > & vec)` | 
`public inline  `[`colormap_t`](#classf3d_1_1colormap__t_1aef7b5f89eeb562d31ad3548342d556f5)`(const std::initializer_list< double > & list)` | 
`public inline  `[`operator std::vector< double >`](#classf3d_1_1colormap__t_1a7f394b20dddc84d45e8323180c3496f5)`() const` | 
`public inline bool `[`operator==`](#classf3d_1_1colormap__t_1a9d90894bec8b68e89da9ef10f73be83f)`(const `[`colormap_t`](#classf3d_1_1colormap__t)` & other) const` | 
`public inline bool `[`operator!=`](#classf3d_1_1colormap__t_1a812e11d74e119dc5eb62e0772b096987)`(const `[`colormap_t`](#classf3d_1_1colormap__t)` & other) const` | 
`public inline const double * `[`data`](#classf3d_1_1colormap__t_1afd948309686178af70463e014d2dfb35)`() const` | 
`protected std::vector< double > `[`Vector`](#classf3d_1_1colormap__t_1aa9d270c81176f8025c47cc7d7c933975) | 

### Members

#### `public  `[`colormap_t`](#classf3d_1_1colormap__t_1a52bf9c26a6d9658e080ce536cf67f195)`() = default` {#classf3d_1_1colormap__t_1a52bf9c26a6d9658e080ce536cf67f195}

#### `public inline  explicit `[`colormap_t`](#classf3d_1_1colormap__t_1ae64d62b6ec1fae4875959a4d331b179f)`(const std::vector< double > & vec)` {#classf3d_1_1colormap__t_1ae64d62b6ec1fae4875959a4d331b179f}

#### `public inline  `[`colormap_t`](#classf3d_1_1colormap__t_1aef7b5f89eeb562d31ad3548342d556f5)`(const std::initializer_list< double > & list)` {#classf3d_1_1colormap__t_1aef7b5f89eeb562d31ad3548342d556f5}

#### `public inline  `[`operator std::vector< double >`](#classf3d_1_1colormap__t_1a7f394b20dddc84d45e8323180c3496f5)`() const` {#classf3d_1_1colormap__t_1a7f394b20dddc84d45e8323180c3496f5}

#### `public inline bool `[`operator==`](#classf3d_1_1colormap__t_1a9d90894bec8b68e89da9ef10f73be83f)`(const `[`colormap_t`](#classf3d_1_1colormap__t)` & other) const` {#classf3d_1_1colormap__t_1a9d90894bec8b68e89da9ef10f73be83f}

#### `public inline bool `[`operator!=`](#classf3d_1_1colormap__t_1a812e11d74e119dc5eb62e0772b096987)`(const `[`colormap_t`](#classf3d_1_1colormap__t)` & other) const` {#classf3d_1_1colormap__t_1a812e11d74e119dc5eb62e0772b096987}

#### `public inline const double * `[`data`](#classf3d_1_1colormap__t_1afd948309686178af70463e014d2dfb35)`() const` {#classf3d_1_1colormap__t_1afd948309686178af70463e014d2dfb35}

#### `protected std::vector< double > `[`Vector`](#classf3d_1_1colormap__t_1aa9d270c81176f8025c47cc7d7c933975) {#classf3d_1_1colormap__t_1aa9d270c81176f8025c47cc7d7c933975}

## class `f3d::context` {#classf3d_1_1context}

Utility function that implements basic OpenGL context symbol resolvers.

These functions should be used only when the rendering context (the OpenGL window) isn't managed by libf3d, but by the user directly. Therefore, the engine is created using `[f3d::engine::createExternal](#classf3d_1_1engine_1ad34defb23976727cdb2ae884e119e533)` and the functions below can be used as argument of this factory. One can also create a custom functor returning a `f3d::context::function`.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`typedef `[`fptr`](#classf3d_1_1context_1a610f788d93aa8db773efac4238403056) | 
`typedef `[`function`](#classf3d_1_1context_1a6fca2b9e4d2591fd6b68a2f8b5ec727e) | 

### Members

#### `typedef `[`fptr`](#classf3d_1_1context_1a610f788d93aa8db773efac4238403056) {#classf3d_1_1context_1a610f788d93aa8db773efac4238403056}

#### `typedef `[`function`](#classf3d_1_1context_1a6fca2b9e4d2591fd6b68a2f8b5ec727e) {#classf3d_1_1context_1a6fca2b9e4d2591fd6b68a2f8b5ec727e}

## class `f3d::direction_t` {#classf3d_1_1direction__t}

```
class f3d::direction_t
  : public f3d::double_array_t< 3 >
```

Describe a 3D direction.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`direction_t`](#classf3d_1_1direction__t_1aeef8b5002e7596df41f95feb8d7ee8aa)`() = default` | 
`public inline  explicit `[`direction_t`](#classf3d_1_1direction__t_1a4a537a5f6eeb6bac3a07b0b86f3cd2e4)`(const std::vector< double > & vec)` | 
`public inline  `[`direction_t`](#classf3d_1_1direction__t_1aa947f4c442ec9246023f947c52fad5c0)`(const std::initializer_list< double > & list)` | 
`public inline  `[`direction_t`](#classf3d_1_1direction__t_1a771efb8b0f871b1a62be45e8e652aa4a)`(double x,double y,double z)` | 
`public inline double `[`x`](#classf3d_1_1direction__t_1ac91362a4d72347f51706c3e6b5db259d)`() const` | 
`public inline double `[`y`](#classf3d_1_1direction__t_1ac5c01406d2be095e4c05f793feb282fd)`() const` | 
`public inline double `[`z`](#classf3d_1_1direction__t_1ad099e4ab17ddb0b70d0c003f7e820fe9)`() const` | 
`public inline  `[`operator f3d::vector3_t`](#classf3d_1_1direction__t_1ae242b6bd09057602bc2666b5d857f57e)`() const` | 

### Members

#### `public inline  `[`direction_t`](#classf3d_1_1direction__t_1aeef8b5002e7596df41f95feb8d7ee8aa)`() = default` {#classf3d_1_1direction__t_1aeef8b5002e7596df41f95feb8d7ee8aa}

#### `public inline  explicit `[`direction_t`](#classf3d_1_1direction__t_1a4a537a5f6eeb6bac3a07b0b86f3cd2e4)`(const std::vector< double > & vec)` {#classf3d_1_1direction__t_1a4a537a5f6eeb6bac3a07b0b86f3cd2e4}

#### `public inline  `[`direction_t`](#classf3d_1_1direction__t_1aa947f4c442ec9246023f947c52fad5c0)`(const std::initializer_list< double > & list)` {#classf3d_1_1direction__t_1aa947f4c442ec9246023f947c52fad5c0}

#### `public inline  `[`direction_t`](#classf3d_1_1direction__t_1a771efb8b0f871b1a62be45e8e652aa4a)`(double x,double y,double z)` {#classf3d_1_1direction__t_1a771efb8b0f871b1a62be45e8e652aa4a}

#### `public inline double `[`x`](#classf3d_1_1direction__t_1ac91362a4d72347f51706c3e6b5db259d)`() const` {#classf3d_1_1direction__t_1ac91362a4d72347f51706c3e6b5db259d}

#### `public inline double `[`y`](#classf3d_1_1direction__t_1ac5c01406d2be095e4c05f793feb282fd)`() const` {#classf3d_1_1direction__t_1ac5c01406d2be095e4c05f793feb282fd}

#### `public inline double `[`z`](#classf3d_1_1direction__t_1ad099e4ab17ddb0b70d0c003f7e820fe9)`() const` {#classf3d_1_1direction__t_1ad099e4ab17ddb0b70d0c003f7e820fe9}

#### `public inline  `[`operator f3d::vector3_t`](#classf3d_1_1direction__t_1ae242b6bd09057602bc2666b5d857f57e)`() const` {#classf3d_1_1direction__t_1ae242b6bd09057602bc2666b5d857f57e}

## class `f3d::double_array_t` {#classf3d_1_1double__array__t}

A base template type for an array of double

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`double_array_t`](#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)`() = default` | 
`public inline  explicit `[`double_array_t`](#classf3d_1_1double__array__t_1a872c1e46cf2b5c14f5c43c0fdc9c7394)`(const std::vector< double > & vec)` | 
`public inline  `[`double_array_t`](#classf3d_1_1double__array__t_1aed53b98cd814aa024f6566c1f2b2dfc7)`(const std::initializer_list< double > & list)` | 
`public inline  `[`operator std::vector< double >`](#classf3d_1_1double__array__t_1a1398cc5e84c2a2cbfd2bb42165b3f5c7)`() const` | 
`public inline bool `[`operator==`](#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)`(const `[`double_array_t`](#classf3d_1_1double__array__t)` & other) const` | 
`public inline bool `[`operator!=`](#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)`(const `[`double_array_t`](#classf3d_1_1double__array__t)` & other) const` | 
`public inline double `[`operator[]`](#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)`(size_t i) const` | 
`public inline double & `[`operator[]`](#classf3d_1_1double__array__t_1ac2ebe0188822e128084ac53be7ffbf03)`(size_t i)` | 
`public inline const double * `[`data`](#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)`() const` | 
`protected std::array< double, N > `[`Array`](#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792) | 

### Members

#### `public  `[`double_array_t`](#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50)`() = default` {#classf3d_1_1double__array__t_1a13bdc79ab1512e3105862d0cf06a1e50}

#### `public inline  explicit `[`double_array_t`](#classf3d_1_1double__array__t_1a872c1e46cf2b5c14f5c43c0fdc9c7394)`(const std::vector< double > & vec)` {#classf3d_1_1double__array__t_1a872c1e46cf2b5c14f5c43c0fdc9c7394}

#### `public inline  `[`double_array_t`](#classf3d_1_1double__array__t_1aed53b98cd814aa024f6566c1f2b2dfc7)`(const std::initializer_list< double > & list)` {#classf3d_1_1double__array__t_1aed53b98cd814aa024f6566c1f2b2dfc7}

#### `public inline  `[`operator std::vector< double >`](#classf3d_1_1double__array__t_1a1398cc5e84c2a2cbfd2bb42165b3f5c7)`() const` {#classf3d_1_1double__array__t_1a1398cc5e84c2a2cbfd2bb42165b3f5c7}

#### `public inline bool `[`operator==`](#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3)`(const `[`double_array_t`](#classf3d_1_1double__array__t)` & other) const` {#classf3d_1_1double__array__t_1a7a03eb4ac6c40822b820b8acd255e7c3}

#### `public inline bool `[`operator!=`](#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b)`(const `[`double_array_t`](#classf3d_1_1double__array__t)` & other) const` {#classf3d_1_1double__array__t_1a31aa2831b1185ba168f8b23951bb675b}

#### `public inline double `[`operator[]`](#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1)`(size_t i) const` {#classf3d_1_1double__array__t_1a0c160f2e0625cce337988dd018e7b6a1}

#### `public inline double & `[`operator[]`](#classf3d_1_1double__array__t_1ac2ebe0188822e128084ac53be7ffbf03)`(size_t i)` {#classf3d_1_1double__array__t_1ac2ebe0188822e128084ac53be7ffbf03}

#### `public inline const double * `[`data`](#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de)`() const` {#classf3d_1_1double__array__t_1af27ad47a15ebbfde487ecb7d67ffe0de}

#### `protected std::array< double, N > `[`Array`](#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792) {#classf3d_1_1double__array__t_1ab4ec6824918af432b4c7b3fa6ac54792}

## class `f3d::engine` {#classf3d_1_1engine}

Class used to create instance of other classes.

The main class of the libf3d to create all other instances. Configured on creation using an enum, then all objects can be accessed through their getter.

Example usage for adding some files in the scene

```cpp
f3d::engine eng = [f3d::engine::create](#classf3d_1_1engine_1a8dc98863d9785dee5c90725248c46b8a)();
f3d::scene& sce = eng.getscene();
sce.[add](#classf3d_1_1scene_1abb62b89f76dc0c102c7b040cd8837fae)({"path/to/file", "path/to/another/file"});
f3d::interactor& inter = eng.[getInteractor](#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113)();
inter.[start](#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed)();
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`~engine`](#classf3d_1_1engine_1a42c3dd21a33f10e849c804d91af3ca37)`()` | Engine destructor, delete all object instances as well.
`public  `[`engine`](#classf3d_1_1engine_1a091ec0742f81eb1931aa008b6d2eb857)`(const `[`engine`](#classf3d_1_1engine)` & other) = delete` | Engine copy is not possible but move is allowed.
`public  `[`engine`](#classf3d_1_1engine_1a763538a512e6405aa5d05de6eef8e43e)`(`[`engine`](#classf3d_1_1engine)` && other) noexcept` | 
`public `[`engine`](#classf3d_1_1engine)` & `[`operator=`](#classf3d_1_1engine_1a4755881d465474f30bda5b7f1b630ecf)`(const `[`engine`](#classf3d_1_1engine)` & other) = delete` | 
`public `[`engine`](#classf3d_1_1engine)` & `[`operator=`](#classf3d_1_1engine_1a99cd2684bdd36a245b947075cb28dfa5)`(`[`engine`](#classf3d_1_1engine)` && other) noexcept` | 
`public `[`engine`](#classf3d_1_1engine)` & `[`setCachePath`](#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a)`(const std::filesystem::path & cachePath)` | Set the cache path. The provided path is used as is. Currently, it's only used to store HDRI baked textures. By default, the cache path is:
`public `[`engine`](#classf3d_1_1engine)` & `[`setOptions`](#classf3d_1_1engine_1ac4f1d538ed3b0f29c4730893208689df)`(const options & opt)` | Engine provide a default options that you can use using [engine::getOptions()](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will copy options into engine.
`public `[`engine`](#classf3d_1_1engine)` & `[`setOptions`](#classf3d_1_1engine_1ac59b6c8c87b1b671b8c7f55d0d7cc6d9)`(options && opt)` | Engine provide a default options that you can use using [engine::getOptions()](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will move options into engine.
`public options & `[`getOptions`](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a)`()` | Get the default options provided by the engine.
`public `[`window`](#classf3d_1_1window)` & `[`getWindow`](#classf3d_1_1engine_1a621751cc41669de47c318b6f20ec0cd7)`()` | Get the window provided by the engine, if any. If not, will throw a [engine::no_window_exception](#structf3d_1_1engine_1_1no__window__exception).
`public `[`scene`](#classf3d_1_1scene)` & `[`getScene`](#classf3d_1_1engine_1a7de2279c63696943a16c8995f6fbbc82)`()` | Get the loaded provided by the engine.
`public `[`interactor`](#classf3d_1_1interactor)` & `[`getInteractor`](#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113)`()` | Get the interactor provided by the engine, if any. If not, will throw a [engine::no_interactor_exception](#structf3d_1_1engine_1_1no__interactor__exception).

### Members

#### `public  `[`~engine`](#classf3d_1_1engine_1a42c3dd21a33f10e849c804d91af3ca37)`()` {#classf3d_1_1engine_1a42c3dd21a33f10e849c804d91af3ca37}

Engine destructor, delete all object instances as well.

#### `public  `[`engine`](#classf3d_1_1engine_1a091ec0742f81eb1931aa008b6d2eb857)`(const `[`engine`](#classf3d_1_1engine)` & other) = delete` {#classf3d_1_1engine_1a091ec0742f81eb1931aa008b6d2eb857}

Engine copy is not possible but move is allowed.

#### `public  `[`engine`](#classf3d_1_1engine_1a763538a512e6405aa5d05de6eef8e43e)`(`[`engine`](#classf3d_1_1engine)` && other) noexcept` {#classf3d_1_1engine_1a763538a512e6405aa5d05de6eef8e43e}

#### `public `[`engine`](#classf3d_1_1engine)` & `[`operator=`](#classf3d_1_1engine_1a4755881d465474f30bda5b7f1b630ecf)`(const `[`engine`](#classf3d_1_1engine)` & other) = delete` {#classf3d_1_1engine_1a4755881d465474f30bda5b7f1b630ecf}

#### `public `[`engine`](#classf3d_1_1engine)` & `[`operator=`](#classf3d_1_1engine_1a99cd2684bdd36a245b947075cb28dfa5)`(`[`engine`](#classf3d_1_1engine)` && other) noexcept` {#classf3d_1_1engine_1a99cd2684bdd36a245b947075cb28dfa5}

#### `public `[`engine`](#classf3d_1_1engine)` & `[`setCachePath`](#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a)`(const std::filesystem::path & cachePath)` {#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a}

Set the cache path. The provided path is used as is. Currently, it's only used to store HDRI baked textures. By default, the cache path is:

* Windows: LOCALAPPDATA%\f3d

* Linux: ~/.cache/f3d

* macOS: ~/Library/Caches/f3d Throws a [engine::cache_exception](#structf3d_1_1engine_1_1cache__exception) if the provided cachePath cannot be used.

#### `public `[`engine`](#classf3d_1_1engine)` & `[`setOptions`](#classf3d_1_1engine_1ac4f1d538ed3b0f29c4730893208689df)`(const options & opt)` {#classf3d_1_1engine_1ac4f1d538ed3b0f29c4730893208689df}

Engine provide a default options that you can use using [engine::getOptions()](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will copy options into engine.

#### `public `[`engine`](#classf3d_1_1engine)` & `[`setOptions`](#classf3d_1_1engine_1ac59b6c8c87b1b671b8c7f55d0d7cc6d9)`(options && opt)` {#classf3d_1_1engine_1ac59b6c8c87b1b671b8c7f55d0d7cc6d9}

Engine provide a default options that you can use using [engine::getOptions()](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will move options into engine.

#### `public options & `[`getOptions`](#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a)`()` {#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a}

Get the default options provided by the engine.

#### `public `[`window`](#classf3d_1_1window)` & `[`getWindow`](#classf3d_1_1engine_1a621751cc41669de47c318b6f20ec0cd7)`()` {#classf3d_1_1engine_1a621751cc41669de47c318b6f20ec0cd7}

Get the window provided by the engine, if any. If not, will throw a [engine::no_window_exception](#structf3d_1_1engine_1_1no__window__exception).

#### `public `[`scene`](#classf3d_1_1scene)` & `[`getScene`](#classf3d_1_1engine_1a7de2279c63696943a16c8995f6fbbc82)`()` {#classf3d_1_1engine_1a7de2279c63696943a16c8995f6fbbc82}

Get the loaded provided by the engine.

#### `public `[`interactor`](#classf3d_1_1interactor)` & `[`getInteractor`](#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113)`()` {#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113}

Get the interactor provided by the engine, if any. If not, will throw a [engine::no_interactor_exception](#structf3d_1_1engine_1_1no__interactor__exception).

## class `f3d::exception` {#structf3d_1_1exception}

```
class f3d::exception
  : public std::runtime_error
```

a generic exception used in the libf3d

A generic exception used in the libf3d. Can be used to catch all exceptions when needed.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`exception`](#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`exception`](#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d)`(const std::string & what)` {#structf3d_1_1exception_1aef4c85042406694200c7f8793785692d}

## class `f3d::image` {#classf3d_1_1image}

Class used to represent an image.

A class to represent an image, which can be created from a file, a buffer and provided by a window. It provides tools to save and compare images.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`image`](#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a)`(const std::filesystem::path & filePath)` | Read provided file path (used as is) into a new image instance, the following formats are supported: PNG, PNM, TIFF, BMP, HDR, JPEG, GESigna, MetaImage, TGA. EXR files are also supported if the associated module is built. The complete list can be retrieve at runtime by calling `[getSupportedFormats()](#classf3d_1_1image_1a7172165ee5c5b19d15a94914becc4a12)`. Throw an `[image::read_exception](#structf3d_1_1image_1_1read__exception)` in case of failure.
`public  `[`image`](#classf3d_1_1image_1a86af78ae19a5d661fd4d91ea6d27d5b3)`(unsigned int width,unsigned int height,unsigned int channelCount,`[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)` type)` | Create an image from a given width, height, and channel count. A channel type can also be given. Default is BYTE.
`public std::vector< double > `[`getNormalizedPixel`](#classf3d_1_1image_1a743f3828f85e1f0bc1f582d7d798d094)`(const std::pair< int, int > & xy) const` | Read one specific pixel and return all channel normalized values. If the channel type is BYTE or SHORT, the values are normalized to [0, 1] range. Because of the normalization, this function can be slow, prefer getContent when reading several pixels and normalization is not needed.
`public `[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)` `[`getChannelType`](#classf3d_1_1image_1aa8740c8c109540e99c31e88ac1f28987)`() const` | Get image channel type. throw an `[image::read_exception](#structf3d_1_1image_1_1read__exception)` if the type is unknown.
`public unsigned int `[`getChannelTypeSize`](#classf3d_1_1image_1a81c2f37a735c1d4c8a6b066f83674712)`() const` | Get image channel type size in bytes.
`public double `[`compare`](#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45)`(const `[`image`](#classf3d_1_1image)` & reference) const` | Compare current image to a reference. The error is minimum between Minkownski and Wasserstein distance on a SSIM computation, as specified in VTK. Please note, due to possible arithmetic imprecision in the SSIM computation a non-zero value can be returned with identical images. Depending on the VTK version, another comparison algorithm may be used. Error value meaning is described below: 1e-14: Pixel perfect comparison. 0.04: Visually indistinguishable. 0.1: Small visible difference. 0.5: Comparable images. 1.0: Different type, size or number of components
`public const `[`image`](#classf3d_1_1image)` & `[`save`](#classf3d_1_1image_1a1c671d94e024662f0931168ced58e4da)`(const std::filesystem::path & filePath,`[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f)` format) const` | Save an image to the provided file path, used as is, in the specified format. Default format is PNG if not specified. PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4 JPG: Supports channel type BYTE with channel count of 1 or 3 TIF: Supports channel type BYTE, SHORT and FLOAT with channel count of 1 to 4 BMP: Supports channel type BYTE with channel count of 1 to 4 Throw an `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the format is incompatible with with image channel type or channel count or if the image cannot be written for any other reason.
`public std::vector< unsigned char > `[`saveBuffer`](#classf3d_1_1image_1ae52106bbd1dd8572276befea251b06df)`(`[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f)` format) const` | Save an image to a memory buffer in the specified format and returns it. Default format is PNG if not specified. PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4 JPG: Supports channel type BYTE with channel count of 1 or 3 BMP: Supports channel type BYTE with channel count of 1 to 4 TIF format is not supported yet. Throw an `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the type is TIF or if the format is incompatible with with image channel type or channel count.
`public const `[`image`](#classf3d_1_1image)` & `[`toTerminalText`](#classf3d_1_1image_1adf1f0fbdabe4f57e64b3a903b15ad7ee)`(std::ostream & stream) const` | Convert to colored text using ANSI escape sequences for printing in a terminal. Block and half-block characters are used to represent two pixels per character (vertically) meaning that each text line represent two rows of pixels. Byte encoded RGB and RGBA images are supported (alpha channel values are binarized). Assumes terminal support for:
`public std::string `[`toTerminalText`](#classf3d_1_1image_1a73c7e3090c75126b2f5bc03b9a57d3b6)`() const` | Convert to colored text using ANSI escape sequences for printing in a terminal. See `toTerminalText(std::ostream& stream)`. Throw a `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the type is not byte RGB or RGBA.
`public `[`f3d::image`](#classf3d_1_1image)` & `[`setMetadata`](#classf3d_1_1image_1ad1e9fd5f8f94f12d5d6a9e84c59adf11)`(std::string key,std::string value)` | Set the value for a metadata key. Setting an empty value (`""`) removes the key.
`public std::string `[`getMetadata`](#classf3d_1_1image_1a9e10e64f8bde29faaba00e00d134e60f)`(const std::string & key) const` | Get the value for a metadata key. Throw a `[image::read_exception](#structf3d_1_1image_1_1read__exception)` if key does not exist.
`public std::vector< std::string > `[`allMetadata`](#classf3d_1_1image_1a253f66210d3ffee1e3810ed850965859)`() const` | List all the metadata keys which have a value set.
`enum `[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f) | Enumeration of supported export formats
`enum `[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4) | Enumeration of supported channel typesBYTE: 8-bit integer in range [0,255] SHORT: 16-bit integer in range [0,65535] FLOAT: 32-bit floating point in range [-inf,+inf]

### Members

#### `public  explicit `[`image`](#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a)`(const std::filesystem::path & filePath)` {#classf3d_1_1image_1ab94585a274b65994972b88e35884f34a}

Read provided file path (used as is) into a new image instance, the following formats are supported: PNG, PNM, TIFF, BMP, HDR, JPEG, GESigna, MetaImage, TGA. EXR files are also supported if the associated module is built. The complete list can be retrieve at runtime by calling `[getSupportedFormats()](#classf3d_1_1image_1a7172165ee5c5b19d15a94914becc4a12)`. Throw an `[image::read_exception](#structf3d_1_1image_1_1read__exception)` in case of failure.

#### `public  `[`image`](#classf3d_1_1image_1a86af78ae19a5d661fd4d91ea6d27d5b3)`(unsigned int width,unsigned int height,unsigned int channelCount,`[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)` type)` {#classf3d_1_1image_1a86af78ae19a5d661fd4d91ea6d27d5b3}

Create an image from a given width, height, and channel count. A channel type can also be given. Default is BYTE.

#### `public std::vector< double > `[`getNormalizedPixel`](#classf3d_1_1image_1a743f3828f85e1f0bc1f582d7d798d094)`(const std::pair< int, int > & xy) const` {#classf3d_1_1image_1a743f3828f85e1f0bc1f582d7d798d094}

Read one specific pixel and return all channel normalized values. If the channel type is BYTE or SHORT, the values are normalized to [0, 1] range. Because of the normalization, this function can be slow, prefer getContent when reading several pixels and normalization is not needed.

#### `public `[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4)` `[`getChannelType`](#classf3d_1_1image_1aa8740c8c109540e99c31e88ac1f28987)`() const` {#classf3d_1_1image_1aa8740c8c109540e99c31e88ac1f28987}

Get image channel type. throw an `[image::read_exception](#structf3d_1_1image_1_1read__exception)` if the type is unknown.

#### `public unsigned int `[`getChannelTypeSize`](#classf3d_1_1image_1a81c2f37a735c1d4c8a6b066f83674712)`() const` {#classf3d_1_1image_1a81c2f37a735c1d4c8a6b066f83674712}

Get image channel type size in bytes.

#### `public double `[`compare`](#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45)`(const `[`image`](#classf3d_1_1image)` & reference) const` {#classf3d_1_1image_1a49d3d5c99d0a1cb014e6c3392caa9f45}

Compare current image to a reference. The error is minimum between Minkownski and Wasserstein distance on a SSIM computation, as specified in VTK. Please note, due to possible arithmetic imprecision in the SSIM computation a non-zero value can be returned with identical images. Depending on the VTK version, another comparison algorithm may be used. Error value meaning is described below: 1e-14: Pixel perfect comparison. 0.04: Visually indistinguishable. 0.1: Small visible difference. 0.5: Comparable images. 1.0: Different type, size or number of components

#### `public const `[`image`](#classf3d_1_1image)` & `[`save`](#classf3d_1_1image_1a1c671d94e024662f0931168ced58e4da)`(const std::filesystem::path & filePath,`[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f)` format) const` {#classf3d_1_1image_1a1c671d94e024662f0931168ced58e4da}

Save an image to the provided file path, used as is, in the specified format. Default format is PNG if not specified. PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4 JPG: Supports channel type BYTE with channel count of 1 or 3 TIF: Supports channel type BYTE, SHORT and FLOAT with channel count of 1 to 4 BMP: Supports channel type BYTE with channel count of 1 to 4 Throw an `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the format is incompatible with with image channel type or channel count or if the image cannot be written for any other reason.

#### `public std::vector< unsigned char > `[`saveBuffer`](#classf3d_1_1image_1ae52106bbd1dd8572276befea251b06df)`(`[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f)` format) const` {#classf3d_1_1image_1ae52106bbd1dd8572276befea251b06df}

Save an image to a memory buffer in the specified format and returns it. Default format is PNG if not specified. PNG: Supports channel type BYTE and SHORT with channel count of 1 to 4 JPG: Supports channel type BYTE with channel count of 1 or 3 BMP: Supports channel type BYTE with channel count of 1 to 4 TIF format is not supported yet. Throw an `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the type is TIF or if the format is incompatible with with image channel type or channel count.

#### `public const `[`image`](#classf3d_1_1image)` & `[`toTerminalText`](#classf3d_1_1image_1adf1f0fbdabe4f57e64b3a903b15ad7ee)`(std::ostream & stream) const` {#classf3d_1_1image_1adf1f0fbdabe4f57e64b3a903b15ad7ee}

Convert to colored text using ANSI escape sequences for printing in a terminal. Block and half-block characters are used to represent two pixels per character (vertically) meaning that each text line represent two rows of pixels. Byte encoded RGB and RGBA images are supported (alpha channel values are binarized). Assumes terminal support for:

* unicode block characters (`U+2580`, `U+2584`, `U+2588`)

* SGR escape codes (`ESC[0m`, `ESC[49m`)

* 24-bit escape codes (`ESC[38;2;{r};{g};{b}m`, `ESC[48;2;{r};{g};{b}m`) Throw a `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the type is not byte RGB or RGBA.

#### `public std::string `[`toTerminalText`](#classf3d_1_1image_1a73c7e3090c75126b2f5bc03b9a57d3b6)`() const` {#classf3d_1_1image_1a73c7e3090c75126b2f5bc03b9a57d3b6}

Convert to colored text using ANSI escape sequences for printing in a terminal. See `toTerminalText(std::ostream& stream)`. Throw a `[image::write_exception](#structf3d_1_1image_1_1write__exception)` if the type is not byte RGB or RGBA.

#### `public `[`f3d::image`](#classf3d_1_1image)` & `[`setMetadata`](#classf3d_1_1image_1ad1e9fd5f8f94f12d5d6a9e84c59adf11)`(std::string key,std::string value)` {#classf3d_1_1image_1ad1e9fd5f8f94f12d5d6a9e84c59adf11}

Set the value for a metadata key. Setting an empty value (`""`) removes the key.

#### `public std::string `[`getMetadata`](#classf3d_1_1image_1a9e10e64f8bde29faaba00e00d134e60f)`(const std::string & key) const` {#classf3d_1_1image_1a9e10e64f8bde29faaba00e00d134e60f}

Get the value for a metadata key. Throw a `[image::read_exception](#structf3d_1_1image_1_1read__exception)` if key does not exist.

#### `public std::vector< std::string > `[`allMetadata`](#classf3d_1_1image_1a253f66210d3ffee1e3810ed850965859)`() const` {#classf3d_1_1image_1a253f66210d3ffee1e3810ed850965859}

List all the metadata keys which have a value set.

#### `enum `[`SaveFormat`](#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f) {#classf3d_1_1image_1a3965ccbe6b7c763e623ea98458bf0c3f}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PNG            | 
JPG            | 
TIF            | 
BMP            | 

Enumeration of supported export formats

#### `enum `[`ChannelType`](#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4) {#classf3d_1_1image_1a3a84fa8e32dc1597a5589865654e65f4}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BYTE            | 
SHORT            | 
FLOAT            | 

Enumeration of supported channel typesBYTE: 8-bit integer in range [0,255] SHORT: 16-bit integer in range [0,65535] FLOAT: 32-bit floating point in range [-inf,+inf]

## class `f3d::interactor` {#classf3d_1_1interactor}

Class used to control interaction and animation.

A class to control interaction with the window as well as animation. It also provide a timer callback if needed and can record/play interaction file.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`BindingType`](#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e)` `[`getBindingType`](#classf3d_1_1interactor_1a2428ea38b7fe65eeaa925bdce4cefa17)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` | Get the type of a binding.
`public bool `[`playInteraction`](#classf3d_1_1interactor_1a1ed1405954d49fcee5e687a56cc83bf1)`(const std::filesystem::path & file,double deltaTime,std::function< void()> userCallBack)` | Play a VTK interaction file. Provided file path is used as is and file existence will be checked. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop
`public bool `[`recordInteraction`](#classf3d_1_1interactor_1a22d9604dde214323080fae5ab947e08b)`(const std::filesystem::path & file)` | Start interaction and record it all in a VTK interaction file. Provided file path will be used as is and the parent directories of the file will be created
`public `[`interactor`](#classf3d_1_1interactor)` & `[`start`](#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed)`(double deltaTime,std::function< void()> userCallBack)` | Start the interactor event loop. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop
`public `[`interactor`](#classf3d_1_1interactor)` & `[`stop`](#classf3d_1_1interactor_1ab8172c398e25b753a421e6b38f568539)`()` | Stop the interactor.
`public `[`interactor`](#classf3d_1_1interactor)` & `[`requestRender`](#classf3d_1_1interactor_1a12abd21c1a1fb5973e09633c877e2e7a)`()` | Request a render to be done on the next event loop Safe to call in a multithreaded environment

### Members

#### `public `[`BindingType`](#classf3d_1_1interactor_1abdd1b2c798fa2f1bc37ca5f56e671e9e)` `[`getBindingType`](#classf3d_1_1interactor_1a2428ea38b7fe65eeaa925bdce4cefa17)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` {#classf3d_1_1interactor_1a2428ea38b7fe65eeaa925bdce4cefa17}

Get the type of a binding.

Getting type for a bind that does not exists will throw a [does_not_exists_exception](#structf3d_1_1interactor_1_1does__not__exists__exception).

#### `public bool `[`playInteraction`](#classf3d_1_1interactor_1a1ed1405954d49fcee5e687a56cc83bf1)`(const std::filesystem::path & file,double deltaTime,std::function< void()> userCallBack)` {#classf3d_1_1interactor_1a1ed1405954d49fcee5e687a56cc83bf1}

Play a VTK interaction file. Provided file path is used as is and file existence will be checked. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop

#### `public bool `[`recordInteraction`](#classf3d_1_1interactor_1a22d9604dde214323080fae5ab947e08b)`(const std::filesystem::path & file)` {#classf3d_1_1interactor_1a22d9604dde214323080fae5ab947e08b}

Start interaction and record it all in a VTK interaction file. Provided file path will be used as is and the parent directories of the file will be created

#### `public `[`interactor`](#classf3d_1_1interactor)` & `[`start`](#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed)`(double deltaTime,std::function< void()> userCallBack)` {#classf3d_1_1interactor_1af971c61f5dd60430a8f574f9572c8aed}

Start the interactor event loop. The event loop will be triggered every deltaTime in seconds, and userCallBack will be called at the start of the event loop

#### `public `[`interactor`](#classf3d_1_1interactor)` & `[`stop`](#classf3d_1_1interactor_1ab8172c398e25b753a421e6b38f568539)`()` {#classf3d_1_1interactor_1ab8172c398e25b753a421e6b38f568539}

Stop the interactor.

#### `public `[`interactor`](#classf3d_1_1interactor)` & `[`requestRender`](#classf3d_1_1interactor_1a12abd21c1a1fb5973e09633c877e2e7a)`()` {#classf3d_1_1interactor_1a12abd21c1a1fb5973e09633c877e2e7a}

Request a render to be done on the next event loop Safe to call in a multithreaded environment

## class `f3d::log` {#classf3d_1_1log}

Class used to show logs in F3D.

A class to output logs to the standard output. It supports different levels, errors, warnings and info, with associated coloring. A few static methods exists to control the coloring and the verbosity level

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`VerboseLevel`](#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28) | Enumeration of verbose levelsDEBUG: All logs are displayed, including from third parties. INFO: Standard logging level, the default. WARN: Only warnings and errors are displayed. ERROR: Only errors are displayed. QUIET: Logging is fully disabled.

### Members

#### `enum `[`VerboseLevel`](#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28) {#classf3d_1_1log_1acd0826518d1036fcae9e3eddb210ec28}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DEBUG            | 
INFO            | 
WARN            | 
ERROR            | 
QUIET            | 

Enumeration of verbose levelsDEBUG: All logs are displayed, including from third parties. INFO: Standard logging level, the default. WARN: Only warnings and errors are displayed. ERROR: Only errors are displayed. QUIET: Logging is fully disabled.

## class `f3d::ratio_t` {#classf3d_1_1ratio__t}

Describe a ratio.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ratio_t`](#classf3d_1_1ratio__t_1a02a8a65c4b269d42dbdc136d96744b31)`() = default` | 
`public inline  explicit `[`ratio_t`](#classf3d_1_1ratio__t_1a4f363d564b0a7b77e9abbfec2349ec04)`(double val)` | 
`public inline  `[`operator double`](#classf3d_1_1ratio__t_1ad3cabd2f8bd0ef87119cdc46fc635dec)`() const` | 

### Members

#### `public inline  `[`ratio_t`](#classf3d_1_1ratio__t_1a02a8a65c4b269d42dbdc136d96744b31)`() = default` {#classf3d_1_1ratio__t_1a02a8a65c4b269d42dbdc136d96744b31}

#### `public inline  explicit `[`ratio_t`](#classf3d_1_1ratio__t_1a4f363d564b0a7b77e9abbfec2349ec04)`(double val)` {#classf3d_1_1ratio__t_1a4f363d564b0a7b77e9abbfec2349ec04}

#### `public inline  `[`operator double`](#classf3d_1_1ratio__t_1ad3cabd2f8bd0ef87119cdc46fc635dec)`() const` {#classf3d_1_1ratio__t_1ad3cabd2f8bd0ef87119cdc46fc635dec}

## class `f3d::scene` {#classf3d_1_1scene}

Class to load files into.

The scene where files and meshes can be added and loaded into.

Example usage: 
```cpp
std::string path = ...
f3d::engine eng(f3d::window::Type::NATIVE);
f3d::scene& load = eng.getScene();

if (load.[supports](#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd)(path)
{
  load.add(path);
}
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`scene`](#classf3d_1_1scene)` & `[`add`](#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4)`(const `[`mesh_t`](#structf3d_1_1mesh__t)` & mesh)` | Add and load provided mesh into the scene
`public `[`scene`](#classf3d_1_1scene)` & `[`clear`](#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d)`()` | Clear the scene of all added files
`public int `[`addLight`](#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000)`(const `[`light_state_t`](#structf3d_1_1light__state__t)` & lightState) const` | Add a light based on a light state, returns the index of the added light.
`public int `[`getLightCount`](#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6)`() const` | Get the number of lights.
`public `[`light_state_t`](#structf3d_1_1light__state__t)` `[`getLight`](#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2)`(int index) const` | Get the light state at provided index. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.
`public `[`scene`](#classf3d_1_1scene)` & `[`updateLight`](#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2)`(int index,const `[`light_state_t`](#structf3d_1_1light__state__t)` & lightState)` | Update a light at provided index with the provided light state. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.
`public `[`scene`](#classf3d_1_1scene)` & `[`removeLight`](#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34)`(int index)` | Remove a light at provided index. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.
`public `[`scene`](#classf3d_1_1scene)` & `[`removeAllLights`](#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa)`()` | Remove all lights from the scene.
`public bool `[`supports`](#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd)`(const std::filesystem::path & filePath)` | Return true if provided file path is supported, false otherwise.
`public `[`scene`](#classf3d_1_1scene)` & `[`loadAnimationTime`](#classf3d_1_1scene_1ae225316a771e942f930ec61588201233)`(double timeValue)` | Load added files at provided time value if they contain any animation Providing a timeVale outside of the current animationTimeRange will clamp to the closest value in the range. Does not do anything if there is no animations.
`public std::pair< double, double > `[`animationTimeRange`](#classf3d_1_1scene_1af6303bb8cd99ba35cf67c700d1550867)`()` | Get animation time range of currently added files. Returns [0, 0] if there is no animations.
`public unsigned int `[`availableAnimations`](#classf3d_1_1scene_1ac9b41a495f0e8cf680d2511e3959ce6a)`() const` | Return the number of animations available in the currently loaded files.

### Members

#### `public `[`scene`](#classf3d_1_1scene)` & `[`add`](#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4)`(const `[`mesh_t`](#structf3d_1_1mesh__t)` & mesh)` {#classf3d_1_1scene_1a7bdb1253de9d9b0a2ecafea62628b9e4}

Add and load provided mesh into the scene

#### `public `[`scene`](#classf3d_1_1scene)` & `[`clear`](#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d)`()` {#classf3d_1_1scene_1ae154db17f90d720aafb2346411604c1d}

Clear the scene of all added files

#### `public int `[`addLight`](#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000)`(const `[`light_state_t`](#structf3d_1_1light__state__t)` & lightState) const` {#classf3d_1_1scene_1ae0dbd636405f91b884a41798c0488000}

Add a light based on a light state, returns the index of the added light.

#### `public int `[`getLightCount`](#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6)`() const` {#classf3d_1_1scene_1a05905e5c7dc7540ba29303153b881af6}

Get the number of lights.

#### `public `[`light_state_t`](#structf3d_1_1light__state__t)` `[`getLight`](#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2)`(int index) const` {#classf3d_1_1scene_1a7dd307c6b9005ca6673d5738a9df6ef2}

Get the light state at provided index. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.

#### `public `[`scene`](#classf3d_1_1scene)` & `[`updateLight`](#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2)`(int index,const `[`light_state_t`](#structf3d_1_1light__state__t)` & lightState)` {#classf3d_1_1scene_1a77e8a0bad217262f01f902e756ba49c2}

Update a light at provided index with the provided light state. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.

#### `public `[`scene`](#classf3d_1_1scene)` & `[`removeLight`](#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34)`(int index)` {#classf3d_1_1scene_1ad3b235b9a70810f1cbfa609d9802fa34}

Remove a light at provided index. `[light_exception](#structf3d_1_1scene_1_1light__exception)` is thrown if the index is invalid.

#### `public `[`scene`](#classf3d_1_1scene)` & `[`removeAllLights`](#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa)`()` {#classf3d_1_1scene_1adcd47d1cee28ec70333ac691d3db48aa}

Remove all lights from the scene.

#### `public bool `[`supports`](#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd)`(const std::filesystem::path & filePath)` {#classf3d_1_1scene_1a7542a5ca95dd82a89a3b7772cb416dfd}

Return true if provided file path is supported, false otherwise.

#### `public `[`scene`](#classf3d_1_1scene)` & `[`loadAnimationTime`](#classf3d_1_1scene_1ae225316a771e942f930ec61588201233)`(double timeValue)` {#classf3d_1_1scene_1ae225316a771e942f930ec61588201233}

Load added files at provided time value if they contain any animation Providing a timeVale outside of the current animationTimeRange will clamp to the closest value in the range. Does not do anything if there is no animations.

#### `public std::pair< double, double > `[`animationTimeRange`](#classf3d_1_1scene_1af6303bb8cd99ba35cf67c700d1550867)`()` {#classf3d_1_1scene_1af6303bb8cd99ba35cf67c700d1550867}

Get animation time range of currently added files. Returns [0, 0] if there is no animations.

#### `public unsigned int `[`availableAnimations`](#classf3d_1_1scene_1ac9b41a495f0e8cf680d2511e3959ce6a)`() const` {#classf3d_1_1scene_1ac9b41a495f0e8cf680d2511e3959ce6a}

Return the number of animations available in the currently loaded files.

## class `f3d::transform2d_t` {#classf3d_1_1transform2d__t}

```
class f3d::transform2d_t
  : public f3d::double_array_t< 9 >
```

Store a 3x3 transform matrix as a sequence of 9 float values VTK expects a 4x4 matrix, but for 2d transforms this is exposed as a 3x3 matrix

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1ab657bdb45cbf4124f28b96828d056d63)`() = default` | 
`public inline  explicit `[`transform2d_t`](#classf3d_1_1transform2d__t_1a3081204d9c43256e72f6cca0576f0651)`(const std::vector< double > & vec)` | 
`public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1a2800721840535bd112285ec29d34e881)`(const std::initializer_list< double > & list)` | 
`public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1a7e76f1c32dec6276bacbbf82b35dc1bf)`(double M1_1,double M1_2,double M1_3,double M2_1,double M2_2,double M2_3,double M3_1,double M3_2,double M3_3)` | The variables of this function are based on the mathematical notation for matrices, where the coordinates correspond to the following:   [M1_1, M1_2, M1_3]
`public F3D_EXPORT `[`transform2d_t`](#classf3d_1_1transform2d__t_1a87d0abcde4b4c8ed729e20fbf594b1cf)`(const `[`double_array_t`](#classf3d_1_1double__array__t)`< 2 > & scale,const `[`double_array_t`](#classf3d_1_1double__array__t)`< 2 > & translate,const angle_deg_t & angleRad)` | The general form of a 3x3 transformation matrix M with scale S(x,y), translation T(x,y), and angle a (in degrees), is solved out to the following: [cos(a)*S(x), -sin(a)*S(y),   T(x)]

### Members

#### `public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1ab657bdb45cbf4124f28b96828d056d63)`() = default` {#classf3d_1_1transform2d__t_1ab657bdb45cbf4124f28b96828d056d63}

#### `public inline  explicit `[`transform2d_t`](#classf3d_1_1transform2d__t_1a3081204d9c43256e72f6cca0576f0651)`(const std::vector< double > & vec)` {#classf3d_1_1transform2d__t_1a3081204d9c43256e72f6cca0576f0651}

#### `public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1a2800721840535bd112285ec29d34e881)`(const std::initializer_list< double > & list)` {#classf3d_1_1transform2d__t_1a2800721840535bd112285ec29d34e881}

#### `public inline  `[`transform2d_t`](#classf3d_1_1transform2d__t_1a7e76f1c32dec6276bacbbf82b35dc1bf)`(double M1_1,double M1_2,double M1_3,double M2_1,double M2_2,double M2_3,double M3_1,double M3_2,double M3_3)` {#classf3d_1_1transform2d__t_1a7e76f1c32dec6276bacbbf82b35dc1bf}

The variables of this function are based on the mathematical notation for matrices, where the coordinates correspond to the following:   [M1_1, M1_2, M1_3]
 M = [M2_1, M2_2, M2_3] [M3_1, M3_2, M3_3]

#### `public F3D_EXPORT `[`transform2d_t`](#classf3d_1_1transform2d__t_1a87d0abcde4b4c8ed729e20fbf594b1cf)`(const `[`double_array_t`](#classf3d_1_1double__array__t)`< 2 > & scale,const `[`double_array_t`](#classf3d_1_1double__array__t)`< 2 > & translate,const angle_deg_t & angleRad)` {#classf3d_1_1transform2d__t_1a87d0abcde4b4c8ed729e20fbf594b1cf}

The general form of a 3x3 transformation matrix M with scale S(x,y), translation T(x,y), and angle a (in degrees), is solved out to the following: [cos(a)*S(x), -sin(a)*S(y),   T(x)]
 M = [sin(a)*S(x), cos(a)*S(y), T(y)] [0, 0, 1 ]

Using this formula, we fill each cell using the values in the constructor

## class `f3d::utils` {#classf3d_1_1utils}

Class containing useful static functions.

A class containing useful static functions unrelated to other classes.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`KnownFolder`](#classf3d_1_1utils_1aebad957764dffbf22565e30997402037) | Enumeration of supported Windows known folders

### Members

#### `enum `[`KnownFolder`](#classf3d_1_1utils_1aebad957764dffbf22565e30997402037) {#classf3d_1_1utils_1aebad957764dffbf22565e30997402037}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ROAMINGAPPDATA            | 
LOCALAPPDATA            | 
PICTURES            | 

Enumeration of supported Windows known folders

## class `f3d::window` {#classf3d_1_1window}

Abstract class to render in a window or an image.

A class to render things in a window or an image. An icon and windowName can be set which can be shown by a window manager.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`Type`](#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471)` `[`getType`](#classf3d_1_1window_1aef4007b0592061fa3f47152b311cc680)`()` | Get the type of the window.
`public bool `[`isOffscreen`](#classf3d_1_1window_1a0c44d1982ff046a99204937e0df1169d)`()` | Is the window offscreen.
`public `[`camera`](#classf3d_1_1camera)` & `[`getCamera`](#classf3d_1_1window_1a96bc2fa72c67f0fd2242388bb3cbd32b)`()` | Get the camera provided by the window.
`public bool `[`render`](#classf3d_1_1window_1ab0b3550f37167c31821e7ec7400bc0de)`()` | Perform a render of the window to the screen. All dynamic options are updated if needed. Return true on success, false otherwise.
`public `[`image`](#classf3d_1_1image)` `[`renderToImage`](#classf3d_1_1window_1a5f680e97668e40cb8640a9c6d8340b57)`(bool noBackground)` | Perform a render of the window to the screen and save the result in a [f3d::image](#classf3d_1_1image). of ChannelType BYTE and 3 or 4 components (RGB or RGBA). Set noBackground to true to have a transparent background. Return the resulting [f3d::image](#classf3d_1_1image).
`public `[`window`](#classf3d_1_1window)` & `[`setSize`](#classf3d_1_1window_1ac88005ab237f1aaa559968b3752a8509)`(int width,int height)` | Set the size of the window.
`public int `[`getWidth`](#classf3d_1_1window_1a7c115887e68c0bdd5cf7c6048f410c52)`() const` | Get the width of the window.
`public int `[`getHeight`](#classf3d_1_1window_1ad6a230a5f6b8e83ea7680da1c6a32434)`() const` | Get the height of the window.
`public `[`window`](#classf3d_1_1window)` & `[`setPosition`](#classf3d_1_1window_1a80d951424a1687434219a6e8030d5db3)`(int x,int y)` | Set the position of the window.
`public `[`window`](#classf3d_1_1window)` & `[`setIcon`](#classf3d_1_1window_1a97032a56c303d51b9b74a438341696d7)`(const unsigned char * icon,size_t iconSize)` | Set the icon to be shown by a window manager. icon should be an unsigned char array. iconSize should be the sizeof(icon).
`public `[`window`](#classf3d_1_1window)` & `[`setWindowName`](#classf3d_1_1window_1ae5d1313a7822bd6bf234369feb544f37)`(std::string_view windowName)` | Set the window name to be shown by a window manager.
`public `[`point3_t`](#structf3d_1_1point3__t)` `[`getWorldFromDisplay`](#classf3d_1_1window_1ae963c7f41cecb2fb585a83495b05bb73)`(const `[`point3_t`](#structf3d_1_1point3__t)` & displayPoint) const` | Convert a point in display coordinate to world coordinate.
`public `[`point3_t`](#structf3d_1_1point3__t)` `[`getDisplayFromWorld`](#classf3d_1_1window_1a95946b71f0ff9a3cbc36bc9b717270b8)`(const `[`point3_t`](#structf3d_1_1point3__t)` & worldPoint) const` | Convert a point in world coordinate to display coordinate.
`enum `[`Type`](#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471) | Enumeration of supported window typesNONE: A mock window without rendering capabilities. EXTERNAL: An external window that assume the OpenGL context would have been created by another framework. GLX: A window using GLX. WGL: A window using WGL. COCOA: A window using COCOA. EGL: An offscreen window using hardware acceleration that can run headless. OSMESA: An offscreen window using software rendering that is always run headless. WASM: A webassembly window (when libf3d is built with emscripten). UNKNOWN: An unknown window (should not happen).

### Members

#### `public `[`Type`](#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471)` `[`getType`](#classf3d_1_1window_1aef4007b0592061fa3f47152b311cc680)`()` {#classf3d_1_1window_1aef4007b0592061fa3f47152b311cc680}

Get the type of the window.

#### `public bool `[`isOffscreen`](#classf3d_1_1window_1a0c44d1982ff046a99204937e0df1169d)`()` {#classf3d_1_1window_1a0c44d1982ff046a99204937e0df1169d}

Is the window offscreen.

#### `public `[`camera`](#classf3d_1_1camera)` & `[`getCamera`](#classf3d_1_1window_1a96bc2fa72c67f0fd2242388bb3cbd32b)`()` {#classf3d_1_1window_1a96bc2fa72c67f0fd2242388bb3cbd32b}

Get the camera provided by the window.

#### `public bool `[`render`](#classf3d_1_1window_1ab0b3550f37167c31821e7ec7400bc0de)`()` {#classf3d_1_1window_1ab0b3550f37167c31821e7ec7400bc0de}

Perform a render of the window to the screen. All dynamic options are updated if needed. Return true on success, false otherwise.

#### `public `[`image`](#classf3d_1_1image)` `[`renderToImage`](#classf3d_1_1window_1a5f680e97668e40cb8640a9c6d8340b57)`(bool noBackground)` {#classf3d_1_1window_1a5f680e97668e40cb8640a9c6d8340b57}

Perform a render of the window to the screen and save the result in a [f3d::image](#classf3d_1_1image). of ChannelType BYTE and 3 or 4 components (RGB or RGBA). Set noBackground to true to have a transparent background. Return the resulting [f3d::image](#classf3d_1_1image).

#### `public `[`window`](#classf3d_1_1window)` & `[`setSize`](#classf3d_1_1window_1ac88005ab237f1aaa559968b3752a8509)`(int width,int height)` {#classf3d_1_1window_1ac88005ab237f1aaa559968b3752a8509}

Set the size of the window.

#### `public int `[`getWidth`](#classf3d_1_1window_1a7c115887e68c0bdd5cf7c6048f410c52)`() const` {#classf3d_1_1window_1a7c115887e68c0bdd5cf7c6048f410c52}

Get the width of the window.

#### `public int `[`getHeight`](#classf3d_1_1window_1ad6a230a5f6b8e83ea7680da1c6a32434)`() const` {#classf3d_1_1window_1ad6a230a5f6b8e83ea7680da1c6a32434}

Get the height of the window.

#### `public `[`window`](#classf3d_1_1window)` & `[`setPosition`](#classf3d_1_1window_1a80d951424a1687434219a6e8030d5db3)`(int x,int y)` {#classf3d_1_1window_1a80d951424a1687434219a6e8030d5db3}

Set the position of the window.

#### `public `[`window`](#classf3d_1_1window)` & `[`setIcon`](#classf3d_1_1window_1a97032a56c303d51b9b74a438341696d7)`(const unsigned char * icon,size_t iconSize)` {#classf3d_1_1window_1a97032a56c303d51b9b74a438341696d7}

Set the icon to be shown by a window manager. icon should be an unsigned char array. iconSize should be the sizeof(icon).

#### `public `[`window`](#classf3d_1_1window)` & `[`setWindowName`](#classf3d_1_1window_1ae5d1313a7822bd6bf234369feb544f37)`(std::string_view windowName)` {#classf3d_1_1window_1ae5d1313a7822bd6bf234369feb544f37}

Set the window name to be shown by a window manager.

#### `public `[`point3_t`](#structf3d_1_1point3__t)` `[`getWorldFromDisplay`](#classf3d_1_1window_1ae963c7f41cecb2fb585a83495b05bb73)`(const `[`point3_t`](#structf3d_1_1point3__t)` & displayPoint) const` {#classf3d_1_1window_1ae963c7f41cecb2fb585a83495b05bb73}

Convert a point in display coordinate to world coordinate.

#### `public `[`point3_t`](#structf3d_1_1point3__t)` `[`getDisplayFromWorld`](#classf3d_1_1window_1a95946b71f0ff9a3cbc36bc9b717270b8)`(const `[`point3_t`](#structf3d_1_1point3__t)` & worldPoint) const` {#classf3d_1_1window_1a95946b71f0ff9a3cbc36bc9b717270b8}

Convert a point in world coordinate to display coordinate.

#### `enum `[`Type`](#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471) {#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NONE            | 
EXTERNAL            | 
GLX            | 
WGL            | 
COCOA            | 
EGL            | 
OSMESA            | 
WASM            | 
UNKNOWN            | 

Enumeration of supported window typesNONE: A mock window without rendering capabilities. EXTERNAL: An external window that assume the OpenGL context would have been created by another framework. GLX: A window using GLX. WGL: A window using WGL. COCOA: A window using COCOA. EGL: An offscreen window using hardware acceleration that can run headless. OSMESA: An offscreen window using software rendering that is always run headless. WASM: A webassembly window (when libf3d is built with emscripten). UNKNOWN: An unknown window (should not happen).

## struct `f3d::camera_state_t` {#structf3d_1_1camera__state__t}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`point3_t`](#structf3d_1_1point3__t)` `[`position`](#structf3d_1_1camera__state__t_1aa2e4ba7abf206ef14ad9b851af1fcbc6) | 
`public `[`point3_t`](#structf3d_1_1point3__t)` `[`focalPoint`](#structf3d_1_1camera__state__t_1a108b56174ebc8c1ee9a9ad5bb6548ccc) | 
`public `[`vector3_t`](#structf3d_1_1vector3__t)` `[`viewUp`](#structf3d_1_1camera__state__t_1afda85e5dd3f7bc9773bc5ef22c1ccad7) | 
`public angle_deg_t `[`viewAngle`](#structf3d_1_1camera__state__t_1a28f08d9fc1076fe6e265822cb93fbed7) | 

### Members

#### `public `[`point3_t`](#structf3d_1_1point3__t)` `[`position`](#structf3d_1_1camera__state__t_1aa2e4ba7abf206ef14ad9b851af1fcbc6) {#structf3d_1_1camera__state__t_1aa2e4ba7abf206ef14ad9b851af1fcbc6}

#### `public `[`point3_t`](#structf3d_1_1point3__t)` `[`focalPoint`](#structf3d_1_1camera__state__t_1a108b56174ebc8c1ee9a9ad5bb6548ccc) {#structf3d_1_1camera__state__t_1a108b56174ebc8c1ee9a9ad5bb6548ccc}

#### `public `[`vector3_t`](#structf3d_1_1vector3__t)` `[`viewUp`](#structf3d_1_1camera__state__t_1afda85e5dd3f7bc9773bc5ef22c1ccad7) {#structf3d_1_1camera__state__t_1afda85e5dd3f7bc9773bc5ef22c1ccad7}

#### `public angle_deg_t `[`viewAngle`](#structf3d_1_1camera__state__t_1a28f08d9fc1076fe6e265822cb93fbed7) {#structf3d_1_1camera__state__t_1a28f08d9fc1076fe6e265822cb93fbed7}

## struct `f3d::interaction_bind_t` {#structf3d_1_1interaction__bind__t}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ModifierKeys`](#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34)` `[`mod`](#structf3d_1_1interaction__bind__t_1a65b5e074b63fbbfa01b35e5edddf9513) | 
`public std::string `[`inter`](#structf3d_1_1interaction__bind__t_1a1fc8a5b848dea0d130986d1c55ec4afa) | 
`public inline bool `[`operator<`](#structf3d_1_1interaction__bind__t_1a8eb647fcb004f4d79a900f685ec61b2c)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` | Operator to be able to store binds in maps and other structs Compare modifier and interaction
`public inline bool `[`operator==`](#structf3d_1_1interaction__bind__t_1a64a19a262ebd0f0c75757d458306285b)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` | Operator to be able to store binds in maps and other structs Compare modifier and interaction
`public inline std::string `[`format`](#structf3d_1_1interaction__bind__t_1ada344efb3314a4980cae5a76ba0eceb9)`() const` | Format this binding into a string eg: "A", "Any+Question", "Shift+L".
`enum `[`ModifierKeys`](#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34) | Enumeration of supported modifier combination, in binary.

### Members

#### `public `[`ModifierKeys`](#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34)` `[`mod`](#structf3d_1_1interaction__bind__t_1a65b5e074b63fbbfa01b35e5edddf9513) {#structf3d_1_1interaction__bind__t_1a65b5e074b63fbbfa01b35e5edddf9513}

#### `public std::string `[`inter`](#structf3d_1_1interaction__bind__t_1a1fc8a5b848dea0d130986d1c55ec4afa) {#structf3d_1_1interaction__bind__t_1a1fc8a5b848dea0d130986d1c55ec4afa}

#### `public inline bool `[`operator<`](#structf3d_1_1interaction__bind__t_1a8eb647fcb004f4d79a900f685ec61b2c)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` {#structf3d_1_1interaction__bind__t_1a8eb647fcb004f4d79a900f685ec61b2c}

Operator to be able to store binds in maps and other structs Compare modifier and interaction

#### `public inline bool `[`operator==`](#structf3d_1_1interaction__bind__t_1a64a19a262ebd0f0c75757d458306285b)`(const `[`interaction_bind_t`](#structf3d_1_1interaction__bind__t)` & bind) const` {#structf3d_1_1interaction__bind__t_1a64a19a262ebd0f0c75757d458306285b}

Operator to be able to store binds in maps and other structs Compare modifier and interaction

#### `public inline std::string `[`format`](#structf3d_1_1interaction__bind__t_1ada344efb3314a4980cae5a76ba0eceb9)`() const` {#structf3d_1_1interaction__bind__t_1ada344efb3314a4980cae5a76ba0eceb9}

Format this binding into a string eg: "A", "Any+Question", "Shift+L".

#### `enum `[`ModifierKeys`](#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34) {#structf3d_1_1interaction__bind__t_1a2880a58d8f83f045aa09e4ec831fea34}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ANY            | 
NONE            | 
CTRL            | 
SHIFT            | 
CTRL_SHIFT            | 

Enumeration of supported modifier combination, in binary.

## struct `f3d::light_state_t` {#structf3d_1_1light__state__t}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public light_type `[`type`](#structf3d_1_1light__state__t_1a9686287a8a646fcbb4d1071f78165a11) | 
`public `[`point3_t`](#structf3d_1_1point3__t)` `[`position`](#structf3d_1_1light__state__t_1a54a1ed683ee594e405061ed1f7502b4a) | 
`public `[`color_t`](#classf3d_1_1color__t)` `[`color`](#structf3d_1_1light__state__t_1adbbb786c2bcf02d19a4cec2f4c754633) | 
`public `[`vector3_t`](#structf3d_1_1vector3__t)` `[`direction`](#structf3d_1_1light__state__t_1afaac12a01b4b165cf25d3dffa056a465) | 
`public bool `[`positionalLight`](#structf3d_1_1light__state__t_1a953b11665623a73c83dffe27238b6b24) | 
`public double `[`intensity`](#structf3d_1_1light__state__t_1ac67bbfa7a078033cf9e97b0648bb15d6) | 
`public bool `[`switchState`](#structf3d_1_1light__state__t_1a9ed6434bb4f3a39aa97d9d79b9175b9a) | 
`public inline bool `[`operator==`](#structf3d_1_1light__state__t_1aa0c6bb838ea67037f4a318549da66168)`(const `[`light_state_t`](#structf3d_1_1light__state__t)` & other) const` | 

### Members

#### `public light_type `[`type`](#structf3d_1_1light__state__t_1a9686287a8a646fcbb4d1071f78165a11) {#structf3d_1_1light__state__t_1a9686287a8a646fcbb4d1071f78165a11}

#### `public `[`point3_t`](#structf3d_1_1point3__t)` `[`position`](#structf3d_1_1light__state__t_1a54a1ed683ee594e405061ed1f7502b4a) {#structf3d_1_1light__state__t_1a54a1ed683ee594e405061ed1f7502b4a}

#### `public `[`color_t`](#classf3d_1_1color__t)` `[`color`](#structf3d_1_1light__state__t_1adbbb786c2bcf02d19a4cec2f4c754633) {#structf3d_1_1light__state__t_1adbbb786c2bcf02d19a4cec2f4c754633}

#### `public `[`vector3_t`](#structf3d_1_1vector3__t)` `[`direction`](#structf3d_1_1light__state__t_1afaac12a01b4b165cf25d3dffa056a465) {#structf3d_1_1light__state__t_1afaac12a01b4b165cf25d3dffa056a465}

#### `public bool `[`positionalLight`](#structf3d_1_1light__state__t_1a953b11665623a73c83dffe27238b6b24) {#structf3d_1_1light__state__t_1a953b11665623a73c83dffe27238b6b24}

#### `public double `[`intensity`](#structf3d_1_1light__state__t_1ac67bbfa7a078033cf9e97b0648bb15d6) {#structf3d_1_1light__state__t_1ac67bbfa7a078033cf9e97b0648bb15d6}

#### `public bool `[`switchState`](#structf3d_1_1light__state__t_1a9ed6434bb4f3a39aa97d9d79b9175b9a) {#structf3d_1_1light__state__t_1a9ed6434bb4f3a39aa97d9d79b9175b9a}

#### `public inline bool `[`operator==`](#structf3d_1_1light__state__t_1aa0c6bb838ea67037f4a318549da66168)`(const `[`light_state_t`](#structf3d_1_1light__state__t)` & other) const` {#structf3d_1_1light__state__t_1aa0c6bb838ea67037f4a318549da66168}

## struct `f3d::mesh_t` {#structf3d_1_1mesh__t}

Describe a 3D surfacic mesh. A valid mesh fulfills these requirements:

* points must not be empty and its length must be a multiple of 3 (3 times the number of points)

* normals can be empty or its length must be 3 times the number of points

* texture_coordinates can be empty or its length must be 2 times the number of points

* face_sides can be any size including empty resulting in a point cloud

* face_indices length must be the sum of all values in face_sides

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public std::vector< float > `[`points`](#structf3d_1_1mesh__t_1aae9562d60d312a986f8a0d0f61bd4d3c) | 
`public std::vector< float > `[`normals`](#structf3d_1_1mesh__t_1ad0b4a90786f214a89dbae5b2d8468e59) | 
`public std::vector< float > `[`texture_coordinates`](#structf3d_1_1mesh__t_1a5c2cd44ccd008d9f258dc74e4bb074bd) | 
`public std::vector< unsigned int > `[`face_sides`](#structf3d_1_1mesh__t_1a40e1735ee41d5c088e446dce73214d31) | 
`public std::vector< unsigned int > `[`face_indices`](#structf3d_1_1mesh__t_1a309630f63c3f2105e70e079f777f0c81) | 
`public F3D_EXPORT std::pair< bool, std::string > `[`isValid`](#structf3d_1_1mesh__t_1a16d9b017479bf3e65e3d50e5081916eb)`() const` | Check validity of the mesh. Returns a pair with the first element to true if the mesh is valid. If invalid, an error message is returned in the second element.

### Members

#### `public std::vector< float > `[`points`](#structf3d_1_1mesh__t_1aae9562d60d312a986f8a0d0f61bd4d3c) {#structf3d_1_1mesh__t_1aae9562d60d312a986f8a0d0f61bd4d3c}

#### `public std::vector< float > `[`normals`](#structf3d_1_1mesh__t_1ad0b4a90786f214a89dbae5b2d8468e59) {#structf3d_1_1mesh__t_1ad0b4a90786f214a89dbae5b2d8468e59}

#### `public std::vector< float > `[`texture_coordinates`](#structf3d_1_1mesh__t_1a5c2cd44ccd008d9f258dc74e4bb074bd) {#structf3d_1_1mesh__t_1a5c2cd44ccd008d9f258dc74e4bb074bd}

#### `public std::vector< unsigned int > `[`face_sides`](#structf3d_1_1mesh__t_1a40e1735ee41d5c088e446dce73214d31) {#structf3d_1_1mesh__t_1a40e1735ee41d5c088e446dce73214d31}

#### `public std::vector< unsigned int > `[`face_indices`](#structf3d_1_1mesh__t_1a309630f63c3f2105e70e079f777f0c81) {#structf3d_1_1mesh__t_1a309630f63c3f2105e70e079f777f0c81}

#### `public F3D_EXPORT std::pair< bool, std::string > `[`isValid`](#structf3d_1_1mesh__t_1a16d9b017479bf3e65e3d50e5081916eb)`() const` {#structf3d_1_1mesh__t_1a16d9b017479bf3e65e3d50e5081916eb}

Check validity of the mesh. Returns a pair with the first element to true if the mesh is valid. If invalid, an error message is returned in the second element.

## struct `f3d::point3_t` {#structf3d_1_1point3__t}

```
struct f3d::point3_t
  : public std::array< double, 3 >
```

Describe a 3D point.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## struct `f3d::type_access_exception` {#structf3d_1_1type__access__exception}

```
struct f3d::type_access_exception
  : public f3d::exception
```

An exception that can be thrown by any type if it fails when accessing data for some reason.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`type_access_exception`](#structf3d_1_1type__access__exception_1ab3fb2a5741c6a58afd1c17c7607fd7aa)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`type_access_exception`](#structf3d_1_1type__access__exception_1ab3fb2a5741c6a58afd1c17c7607fd7aa)`(const std::string & what)` {#structf3d_1_1type__access__exception_1ab3fb2a5741c6a58afd1c17c7607fd7aa}

## struct `f3d::type_construction_exception` {#structf3d_1_1type__construction__exception}

```
struct f3d::type_construction_exception
  : public f3d::exception
```

An exception that can be thrown by any type if it fails in the constructor for some reason.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`type_construction_exception`](#structf3d_1_1type__construction__exception_1ae979e25c0c37cd043f1f82fee310209e)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`type_construction_exception`](#structf3d_1_1type__construction__exception_1ae979e25c0c37cd043f1f82fee310209e)`(const std::string & what)` {#structf3d_1_1type__construction__exception_1ae979e25c0c37cd043f1f82fee310209e}

## struct `f3d::vector3_t` {#structf3d_1_1vector3__t}

```
struct f3d::vector3_t
  : public std::array< double, 3 >
```

Describe a 3D vector.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `f3d::utils::string_template` {#classf3d_1_1utils_1_1string__template}

String template allowing substitution of variables enclosed in curly braces. 
```cpp
string_template("{greeting} {name}!")
  .substitute({ { "greeting", "hello" }, { "name", "World" } })
  .[str](#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb)() == "hello World!"
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`string_template`](#classf3d_1_1utils_1_1string__template_1abaafc00ca694d03ae57e1faaa58e594c)`(const std::string & templateString)` | 
`public template<>`  <br/>[`string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1a482286e6db45c2056d5f1e04bae721f3)`(F lookup)` | Substitute variables based on a `std::string(const std::string&)` function. Variables for which the function throws a `[string_template::lookup_error](#structf3d_1_1utils_1_1string__template_1_1lookup__error)` exception are left untouched.
`public inline `[`string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1a3597d4917b4fb62f75bc599be4122999)`(const std::map< std::string, std::string > & lookup)` | Substitute variables based on a map. Variables for which the map does not contain a key are left untouched.
`public inline std::string `[`str`](#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb)`() const` | Return a string representation of the string template
`public inline std::vector< std::string > `[`variables`](#classf3d_1_1utils_1_1string__template_1a8f45ebbc3ed5775b79d0d5e81ca52d4e)`() const` | List the remaining un-substituted variables.
`public template<>`  <br/>[`utils::string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1aa74c15b745ddd573b689bff3d3ddd16c)`(F lookup)` | 

### Members

#### `public inline  explicit `[`string_template`](#classf3d_1_1utils_1_1string__template_1abaafc00ca694d03ae57e1faaa58e594c)`(const std::string & templateString)` {#classf3d_1_1utils_1_1string__template_1abaafc00ca694d03ae57e1faaa58e594c}

#### `public template<>`  <br/>[`string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1a482286e6db45c2056d5f1e04bae721f3)`(F lookup)` {#classf3d_1_1utils_1_1string__template_1a482286e6db45c2056d5f1e04bae721f3}

Substitute variables based on a `std::string(const std::string&)` function. Variables for which the function throws a `[string_template::lookup_error](#structf3d_1_1utils_1_1string__template_1_1lookup__error)` exception are left untouched.

#### `public inline `[`string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1a3597d4917b4fb62f75bc599be4122999)`(const std::map< std::string, std::string > & lookup)` {#classf3d_1_1utils_1_1string__template_1a3597d4917b4fb62f75bc599be4122999}

Substitute variables based on a map. Variables for which the map does not contain a key are left untouched.

#### `public inline std::string `[`str`](#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb)`() const` {#classf3d_1_1utils_1_1string__template_1a9b6f01393ee68ac113a9631b526dfbfb}

Return a string representation of the string template

#### `public inline std::vector< std::string > `[`variables`](#classf3d_1_1utils_1_1string__template_1a8f45ebbc3ed5775b79d0d5e81ca52d4e)`() const` {#classf3d_1_1utils_1_1string__template_1a8f45ebbc3ed5775b79d0d5e81ca52d4e}

List the remaining un-substituted variables.

#### `public template<>`  <br/>[`utils::string_template`](#classf3d_1_1utils_1_1string__template)` & `[`substitute`](#classf3d_1_1utils_1_1string__template_1aa74c15b745ddd573b689bff3d3ddd16c)`(F lookup)` {#classf3d_1_1utils_1_1string__template_1aa74c15b745ddd573b689bff3d3ddd16c}

## struct `f3d::interactor::already_exists_exception` {#structf3d_1_1interactor_1_1already__exists__exception}

```
struct f3d::interactor::already_exists_exception
  : public f3d::exception
```

An exception that can be thrown by the interactor when adding something that already exists internally

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`already_exists_exception`](#structf3d_1_1interactor_1_1already__exists__exception_1a356bff2bef426f4c93727c87f8850521)`(const std::string & what)` | 

### Members

#### `public  explicit `[`already_exists_exception`](#structf3d_1_1interactor_1_1already__exists__exception_1a356bff2bef426f4c93727c87f8850521)`(const std::string & what)` {#structf3d_1_1interactor_1_1already__exists__exception_1a356bff2bef426f4c93727c87f8850521}

## struct `f3d::engine::cache_exception` {#structf3d_1_1engine_1_1cache__exception}

```
struct f3d::engine::cache_exception
  : public f3d::exception
```

An exception that can be thrown by the engine when the cache cannot be used

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`cache_exception`](#structf3d_1_1engine_1_1cache__exception_1ab75d07f81b5a88b12a4e45781aed373d)`(const std::string & what)` | 

### Members

#### `public  explicit `[`cache_exception`](#structf3d_1_1engine_1_1cache__exception_1ab75d07f81b5a88b12a4e45781aed373d)`(const std::string & what)` {#structf3d_1_1engine_1_1cache__exception_1ab75d07f81b5a88b12a4e45781aed373d}

## struct `f3d::interactor::command_runtime_exception` {#structf3d_1_1interactor_1_1command__runtime__exception}

```
struct f3d::interactor::command_runtime_exception
  : public f3d::exception
```

An exception that can be thrown by [interactor::triggerCommand](#classf3d_1_1interactor_1a20ab155181432751c7644b87490a1085) when a command callback throw an exception

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`command_runtime_exception`](#structf3d_1_1interactor_1_1command__runtime__exception_1ac33aa8920fd869f50066de4ca067f950)`(const std::string & what)` | 

### Members

#### `public  explicit `[`command_runtime_exception`](#structf3d_1_1interactor_1_1command__runtime__exception_1ac33aa8920fd869f50066de4ca067f950)`(const std::string & what)` {#structf3d_1_1interactor_1_1command__runtime__exception_1ac33aa8920fd869f50066de4ca067f950}

## struct `f3d::interactor::does_not_exists_exception` {#structf3d_1_1interactor_1_1does__not__exists__exception}

```
struct f3d::interactor::does_not_exists_exception
  : public f3d::exception
```

An exception that can be thrown by the interactor when looking for something that does not exists

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`does_not_exists_exception`](#structf3d_1_1interactor_1_1does__not__exists__exception_1a8f83956aa6132858e28d94ca1f8b7685)`(const std::string & what)` | 

### Members

#### `public  explicit `[`does_not_exists_exception`](#structf3d_1_1interactor_1_1does__not__exists__exception_1a8f83956aa6132858e28d94ca1f8b7685)`(const std::string & what)` {#structf3d_1_1interactor_1_1does__not__exists__exception_1a8f83956aa6132858e28d94ca1f8b7685}

## struct `f3d::utils::glob_exception` {#structf3d_1_1utils_1_1glob__exception}

```
struct f3d::utils::glob_exception
  : public f3d::exception
```

An exception that can be thrown by globToRegex

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`glob_exception`](#structf3d_1_1utils_1_1glob__exception_1aabe348542f8fb983670e0871892166b9)`(const std::string & what)` | 

### Members

#### `public  explicit `[`glob_exception`](#structf3d_1_1utils_1_1glob__exception_1aabe348542f8fb983670e0871892166b9)`(const std::string & what)` {#structf3d_1_1utils_1_1glob__exception_1aabe348542f8fb983670e0871892166b9}

## struct `f3d::interactor::invalid_args_exception` {#structf3d_1_1interactor_1_1invalid__args__exception}

```
struct f3d::interactor::invalid_args_exception
  : public f3d::exception
```

An exception that can be thrown by command callbacks when the arguments of the callback are incorrect. This exception is caught by triggerCommand and logged.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`invalid_args_exception`](#structf3d_1_1interactor_1_1invalid__args__exception_1ac50a14b6ce17534752862bf4d9f562a8)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`invalid_args_exception`](#structf3d_1_1interactor_1_1invalid__args__exception_1ac50a14b6ce17534752862bf4d9f562a8)`(const std::string & what)` {#structf3d_1_1interactor_1_1invalid__args__exception_1ac50a14b6ce17534752862bf4d9f562a8}

## struct `f3d::engine::libInformation` {#structf3d_1_1engine_1_1lib_information}

A structure providing information about the libf3d. Returned by [getLibInfo()](#classf3d_1_1engine_1aaf3b6314d61f6b033887ed09255fe5a7).

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public std::string `[`Version`](#structf3d_1_1engine_1_1lib_information_1a77e76b84e18488fd4cbc69011632809c) | 
`public std::string `[`VersionFull`](#structf3d_1_1engine_1_1lib_information_1a22ab02e3f1d8e92fbd4e391bdbab16ee) | 
`public std::string `[`BuildDate`](#structf3d_1_1engine_1_1lib_information_1a96f5421664b16f4911a2a244a5b17130) | 
`public std::string `[`BuildSystem`](#structf3d_1_1engine_1_1lib_information_1a9bc8f08c8a6a54d8c398db63a100f103) | 
`public std::string `[`Compiler`](#structf3d_1_1engine_1_1lib_information_1a89403217bdae41dc3cb2af5a46123fc2) | 
`public std::map< std::string, bool > `[`Modules`](#structf3d_1_1engine_1_1lib_information_1ae91661d2e5ec8af1db9b73ac3a38fe45) | 
`public std::string `[`VTKVersion`](#structf3d_1_1engine_1_1lib_information_1ae18443c52968409bbba45aa86ecbe116) | 
`public std::vector< std::string > `[`Copyrights`](#structf3d_1_1engine_1_1lib_information_1aa5fcaf4da0e499f963511197bafcaa68) | 
`public std::string `[`License`](#structf3d_1_1engine_1_1lib_information_1aa1fc55f2019aefc29181dc1220d29093) | 

### Members

#### `public std::string `[`Version`](#structf3d_1_1engine_1_1lib_information_1a77e76b84e18488fd4cbc69011632809c) {#structf3d_1_1engine_1_1lib_information_1a77e76b84e18488fd4cbc69011632809c}

#### `public std::string `[`VersionFull`](#structf3d_1_1engine_1_1lib_information_1a22ab02e3f1d8e92fbd4e391bdbab16ee) {#structf3d_1_1engine_1_1lib_information_1a22ab02e3f1d8e92fbd4e391bdbab16ee}

#### `public std::string `[`BuildDate`](#structf3d_1_1engine_1_1lib_information_1a96f5421664b16f4911a2a244a5b17130) {#structf3d_1_1engine_1_1lib_information_1a96f5421664b16f4911a2a244a5b17130}

#### `public std::string `[`BuildSystem`](#structf3d_1_1engine_1_1lib_information_1a9bc8f08c8a6a54d8c398db63a100f103) {#structf3d_1_1engine_1_1lib_information_1a9bc8f08c8a6a54d8c398db63a100f103}

#### `public std::string `[`Compiler`](#structf3d_1_1engine_1_1lib_information_1a89403217bdae41dc3cb2af5a46123fc2) {#structf3d_1_1engine_1_1lib_information_1a89403217bdae41dc3cb2af5a46123fc2}

#### `public std::map< std::string, bool > `[`Modules`](#structf3d_1_1engine_1_1lib_information_1ae91661d2e5ec8af1db9b73ac3a38fe45) {#structf3d_1_1engine_1_1lib_information_1ae91661d2e5ec8af1db9b73ac3a38fe45}

#### `public std::string `[`VTKVersion`](#structf3d_1_1engine_1_1lib_information_1ae18443c52968409bbba45aa86ecbe116) {#structf3d_1_1engine_1_1lib_information_1ae18443c52968409bbba45aa86ecbe116}

#### `public std::vector< std::string > `[`Copyrights`](#structf3d_1_1engine_1_1lib_information_1aa5fcaf4da0e499f963511197bafcaa68) {#structf3d_1_1engine_1_1lib_information_1aa5fcaf4da0e499f963511197bafcaa68}

#### `public std::string `[`License`](#structf3d_1_1engine_1_1lib_information_1aa1fc55f2019aefc29181dc1220d29093) {#structf3d_1_1engine_1_1lib_information_1aa1fc55f2019aefc29181dc1220d29093}

## struct `f3d::scene::light_exception` {#structf3d_1_1scene_1_1light__exception}

```
struct f3d::scene::light_exception
  : public f3d::exception
```

An exception that can be thrown by the scene when it fails to index the light

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`light_exception`](#structf3d_1_1scene_1_1light__exception_1acd6c3a9a9db4c724d13df35fa1a455ed)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`light_exception`](#structf3d_1_1scene_1_1light__exception_1acd6c3a9a9db4c724d13df35fa1a455ed)`(const std::string & what)` {#structf3d_1_1scene_1_1light__exception_1acd6c3a9a9db4c724d13df35fa1a455ed}

## struct `f3d::scene::load_failure_exception` {#structf3d_1_1scene_1_1load__failure__exception}

```
struct f3d::scene::load_failure_exception
  : public f3d::exception
```

An exception that can be thrown by the scene when it failed to load a file for some reason.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`load_failure_exception`](#structf3d_1_1scene_1_1load__failure__exception_1ac9d2e898967ab161709bc871afc4e0a7)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`load_failure_exception`](#structf3d_1_1scene_1_1load__failure__exception_1ac9d2e898967ab161709bc871afc4e0a7)`(const std::string & what)` {#structf3d_1_1scene_1_1load__failure__exception_1ac9d2e898967ab161709bc871afc4e0a7}

## struct `f3d::context::loading_exception` {#structf3d_1_1context_1_1loading__exception}

```
struct f3d::context::loading_exception
  : public f3d::exception
```

An exception that can be thrown when the requested library cannot be loaded.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`loading_exception`](#structf3d_1_1context_1_1loading__exception_1ad8bf27581245eff871b457f9d184dbf2)`(const std::string & what)` | 

### Members

#### `public  explicit `[`loading_exception`](#structf3d_1_1context_1_1loading__exception_1ad8bf27581245eff871b457f9d184dbf2)`(const std::string & what)` {#structf3d_1_1context_1_1loading__exception_1ad8bf27581245eff871b457f9d184dbf2}

## struct `f3d::utils::string_template::lookup_error` {#structf3d_1_1utils_1_1string__template_1_1lookup__error}

```
struct f3d::utils::string_template::lookup_error
  : public std::out_of_range
```

Exception to be thrown by substitution functions to let untouched variables through.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  explicit `[`lookup_error`](#structf3d_1_1utils_1_1string__template_1_1lookup__error_1ace69fe341e39403ce1ac61a1e8ded114)`(const std::string & what)` | 

### Members

#### `public inline  explicit `[`lookup_error`](#structf3d_1_1utils_1_1string__template_1_1lookup__error_1ace69fe341e39403ce1ac61a1e8ded114)`(const std::string & what)` {#structf3d_1_1utils_1_1string__template_1_1lookup__error_1ace69fe341e39403ce1ac61a1e8ded114}

## struct `f3d::image::metadata_exception` {#structf3d_1_1image_1_1metadata__exception}

```
struct f3d::image::metadata_exception
  : public f3d::exception
```

An exception that can be thrown by the image. when there is an error related to metadata

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`metadata_exception`](#structf3d_1_1image_1_1metadata__exception_1a9752d5ec2bd62827529058654e0c9ce7)`(const std::string & what)` | 

### Members

#### `public  explicit `[`metadata_exception`](#structf3d_1_1image_1_1metadata__exception_1a9752d5ec2bd62827529058654e0c9ce7)`(const std::string & what)` {#structf3d_1_1image_1_1metadata__exception_1a9752d5ec2bd62827529058654e0c9ce7}

## struct `f3d::engine::no_interactor_exception` {#structf3d_1_1engine_1_1no__interactor__exception}

```
struct f3d::engine::no_interactor_exception
  : public f3d::exception
```

An exception that can be thrown by the engine when no interactor is available .

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`no_interactor_exception`](#structf3d_1_1engine_1_1no__interactor__exception_1ab6af47fb76e7a030e2cd4353387277e3)`(const std::string & what)` | 

### Members

#### `public  explicit `[`no_interactor_exception`](#structf3d_1_1engine_1_1no__interactor__exception_1ab6af47fb76e7a030e2cd4353387277e3)`(const std::string & what)` {#structf3d_1_1engine_1_1no__interactor__exception_1ab6af47fb76e7a030e2cd4353387277e3}

## struct `f3d::engine::no_window_exception` {#structf3d_1_1engine_1_1no__window__exception}

```
struct f3d::engine::no_window_exception
  : public f3d::exception
```

An exception that can be thrown by the engine when no window is available.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`no_window_exception`](#structf3d_1_1engine_1_1no__window__exception_1a696bd4e971733f40df2d91c2a8ff0f64)`(const std::string & what)` | 

### Members

#### `public  explicit `[`no_window_exception`](#structf3d_1_1engine_1_1no__window__exception_1a696bd4e971733f40df2d91c2a8ff0f64)`(const std::string & what)` {#structf3d_1_1engine_1_1no__window__exception_1a696bd4e971733f40df2d91c2a8ff0f64}

## struct `f3d::engine::plugin_exception` {#structf3d_1_1engine_1_1plugin__exception}

```
struct f3d::engine::plugin_exception
  : public f3d::exception
```

An exception that can be thrown by the engine when a plugin cannot be loaded.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`plugin_exception`](#structf3d_1_1engine_1_1plugin__exception_1a912959867189cd1c31a315af92278119)`(const std::string & what)` | 

### Members

#### `public  explicit `[`plugin_exception`](#structf3d_1_1engine_1_1plugin__exception_1a912959867189cd1c31a315af92278119)`(const std::string & what)` {#structf3d_1_1engine_1_1plugin__exception_1a912959867189cd1c31a315af92278119}

## struct `f3d::image::read_exception` {#structf3d_1_1image_1_1read__exception}

```
struct f3d::image::read_exception
  : public f3d::exception
```

An exception that can be thrown by the image. when there is an error on read.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`read_exception`](#structf3d_1_1image_1_1read__exception_1a8494b506cc69a6e1252b171d5ffa4477)`(const std::string & what)` | 

### Members

#### `public  explicit `[`read_exception`](#structf3d_1_1image_1_1read__exception_1a8494b506cc69a6e1252b171d5ffa4477)`(const std::string & what)` {#structf3d_1_1image_1_1read__exception_1a8494b506cc69a6e1252b171d5ffa4477}

## struct `f3d::engine::readerInformation` {#structf3d_1_1engine_1_1reader_information}

A structure providing information about a reader. Returned in a vector by [getReadersInfo()](#classf3d_1_1engine_1a5b2887501e1975218442d9142f4d3b8e).

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public std::string `[`Name`](#structf3d_1_1engine_1_1reader_information_1a30aac8488fbed9ef92fba2bba859263a) | 
`public std::string `[`Description`](#structf3d_1_1engine_1_1reader_information_1a8cd967fb8400bcafb84fac1aff4bc0af) | 
`public std::vector< std::string > `[`Extensions`](#structf3d_1_1engine_1_1reader_information_1a9e778db98dc3a41875ed9c2caeaf3517) | 
`public std::vector< std::string > `[`MimeTypes`](#structf3d_1_1engine_1_1reader_information_1aac8ec25ca07da4cafd1f8a157d583f27) | 
`public std::string `[`PluginName`](#structf3d_1_1engine_1_1reader_information_1a9d938bd142eb2feb3ac72f6c07eafb6b) | 
`public bool `[`HasSceneReader`](#structf3d_1_1engine_1_1reader_information_1ac0dc89d52c535db198c513fb0543755e) | 
`public bool `[`HasGeometryReader`](#structf3d_1_1engine_1_1reader_information_1a63da7048de227a690590703369523aa3) | 

### Members

#### `public std::string `[`Name`](#structf3d_1_1engine_1_1reader_information_1a30aac8488fbed9ef92fba2bba859263a) {#structf3d_1_1engine_1_1reader_information_1a30aac8488fbed9ef92fba2bba859263a}

#### `public std::string `[`Description`](#structf3d_1_1engine_1_1reader_information_1a8cd967fb8400bcafb84fac1aff4bc0af) {#structf3d_1_1engine_1_1reader_information_1a8cd967fb8400bcafb84fac1aff4bc0af}

#### `public std::vector< std::string > `[`Extensions`](#structf3d_1_1engine_1_1reader_information_1a9e778db98dc3a41875ed9c2caeaf3517) {#structf3d_1_1engine_1_1reader_information_1a9e778db98dc3a41875ed9c2caeaf3517}

#### `public std::vector< std::string > `[`MimeTypes`](#structf3d_1_1engine_1_1reader_information_1aac8ec25ca07da4cafd1f8a157d583f27) {#structf3d_1_1engine_1_1reader_information_1aac8ec25ca07da4cafd1f8a157d583f27}

#### `public std::string `[`PluginName`](#structf3d_1_1engine_1_1reader_information_1a9d938bd142eb2feb3ac72f6c07eafb6b) {#structf3d_1_1engine_1_1reader_information_1a9d938bd142eb2feb3ac72f6c07eafb6b}

#### `public bool `[`HasSceneReader`](#structf3d_1_1engine_1_1reader_information_1ac0dc89d52c535db198c513fb0543755e) {#structf3d_1_1engine_1_1reader_information_1ac0dc89d52c535db198c513fb0543755e}

#### `public bool `[`HasGeometryReader`](#structf3d_1_1engine_1_1reader_information_1a63da7048de227a690590703369523aa3) {#structf3d_1_1engine_1_1reader_information_1a63da7048de227a690590703369523aa3}

## struct `f3d::context::symbol_exception` {#structf3d_1_1context_1_1symbol__exception}

```
struct f3d::context::symbol_exception
  : public f3d::exception
```

An exception that can be thrown when the symbol resolver cannot be found in the library.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`symbol_exception`](#structf3d_1_1context_1_1symbol__exception_1a7b0caa387c41f6de33f386b3519079a5)`(const std::string & what)` | 

### Members

#### `public  explicit `[`symbol_exception`](#structf3d_1_1context_1_1symbol__exception_1a7b0caa387c41f6de33f386b3519079a5)`(const std::string & what)` {#structf3d_1_1context_1_1symbol__exception_1a7b0caa387c41f6de33f386b3519079a5}

## struct `f3d::utils::tokenize_exception` {#structf3d_1_1utils_1_1tokenize__exception}

```
struct f3d::utils::tokenize_exception
  : public f3d::exception
```

An exception that can be thrown by tokenize

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`tokenize_exception`](#structf3d_1_1utils_1_1tokenize__exception_1a0693bd9dc5395dedd10c3e6bd7f3e271)`(const std::string & what)` | 

### Members

#### `public  explicit `[`tokenize_exception`](#structf3d_1_1utils_1_1tokenize__exception_1a0693bd9dc5395dedd10c3e6bd7f3e271)`(const std::string & what)` {#structf3d_1_1utils_1_1tokenize__exception_1a0693bd9dc5395dedd10c3e6bd7f3e271}

## struct `f3d::image::write_exception` {#structf3d_1_1image_1_1write__exception}

```
struct f3d::image::write_exception
  : public f3d::exception
```

An exception that can be thrown by the image when there. is an error on write.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`write_exception`](#structf3d_1_1image_1_1write__exception_1ae60ce88787aeb45de2d75c16d1ae0e3a)`(const std::string & what)` | 

### Members

#### `public  explicit `[`write_exception`](#structf3d_1_1image_1_1write__exception_1ae60ce88787aeb45de2d75c16d1ae0e3a)`(const std::string & what)` {#structf3d_1_1image_1_1write__exception_1ae60ce88787aeb45de2d75c16d1ae0e3a}

Generated by [Moxygen](https://sourcey.com/moxygen)