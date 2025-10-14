# Options

An option is a specific value stored in different struct in an `options` instance.
They can be accessed directly through the structs, through a string API or through a std::variant API.

The possible option are listed below and are organized by categories and subcategories, here is a non-exhaustive explanation of the categories.

- `scene` options are related to how the scene is being displayed
- `render` options are related to the way the render is done
- `render.effect` options are related to specific techniques used that modify the render
- `ui` options are related to the screenspace UI element displayed
- `model` options are related to modifications on the model
- `interactor` options requires an interactor to be present to have any effect

Please note certain options are taken into account when rendering, others when loading a file.
See the exhaustive list below, but note that this may change in the future.

Please note certain options are `optional` by default, which means they are not set initially,
See the [APIs](#struct-api) details below for more info.

## Scene Options

### `scene.animation.autoplay` <small>(_bool_, default: `false`, **on load**)</small> {#scene.animation.autoplay}

Automatically start animation.
CLI: [`--animation-autoplay`](../user/OPTIONS#--animation-autoplay).

### `scene.animation.indices` <small>(_vector\<int\>_, default: `0`, **on load**)</small> {#scene.animation.indices}

Select the animations to load.
Any negative value means all animations.
The default scene always has at most one animation.
CLI: [`--animation-indices`](../user/OPTIONS#--animation-indices).

### `scene.animation.speed_factor` <small>(_ratio_, default: `1`)</small> {#scene.animation.speed_factor}

Set the animation speed factor to slow, speed up or even invert animation.
CLI: [`--animation-speed-factor`](../user/OPTIONS#--animation-speed-factor).

### `scene.animation.time` <small>(_double_, optional, **on load**)</small> {#scene.animation.time}

Set the animation time to load.
CLI: [`--animation-time`](../user/OPTIONS#--animation-time).

### `scene.camera.index` <small>(_int_, optional, **on load**)</small> {#scene.camera.index}

Select the scene camera to use when available in the file.
The default scene always uses automatic camera.
CLI: [`--camera-index`](../user/OPTIONS#--camera-index).

### `scene.up_direction` <small>(_direction_, default: `+Y`, **on load**)</small> {#scene.up_direction}

Define the Up direction. It impacts the grid, the axis, the HDRI and the camera.
CLI: [`--up`](../user/OPTIONS#--up).

### `scene.force_reader` <small>(_string_, optional, **on load**)</small> {#scene.force_reader}

Force a specific reader to be used, disregarding the file extension. See [user documentation](../user/SUPPORTED_FORMATS.md)
CLI: [`--force-reader`](../user/OPTIONS#--force-reader).

### `scene.camera.orthographic` <small>(_bool_, optional, **on load**)</small> {#scene.camera.orthographic}

Set to true to force orthographic projection. Model specified by default, which is false if not specified.
CLI: [`--camera-orthographic`](../user/OPTIONS#--camera-orthographic).

## Interactor Options

### `interactor.trackball` <small>(_bool_, default: `false`)</small> {#interactor.trackball}

Enable trackball interaction.
CLI: [`--trackball`](../user/OPTIONS#--trackball).

### `interactor.invert_zoom` <small>(_bool_, default: `false`)</small> {#interactor.invert_zoom}

Invert the zoom direction.
CLI: [`--invert-zoom`](../user/OPTIONS#--invert-zoom).

## Model Options

### `model.matcap.texture` <small>(_path_, optional)</small> {#model.matcap.texture}

Path to a texture file containing a material capture. All other model options for surfaces are ignored if this is set. Model specified by default.
CLI: [`--texture-matcap`](../user/OPTIONS#--texture-matcap).

### `model.color.opacity` <small>(_double_, optional)</small> {#model.color.opacity}

Set _opacity_ on the geometry. Usually used with Depth Peeling option. Multiplied with the `model.color.texture` when present. Model specified by default.
CLI: [`--opacity`](../user/OPTIONS#--opacity).

### `model.color.rgb` <small>(_color_, optional)</small> {#model.color.rgb}

Set a _color_ on the geometry. Multiplied with the `model.color.texture` when present. Model specified by default.
CLI: [`--color`](../user/OPTIONS#--color).

### `model.color.texture` <small>(_path_, optional)</small> {#model.color.texture}

Path to a texture file that sets the color of the object. Will be multiplied with rgb and opacity. Model specified by default.
CLI: [`--texture-base-color`](../user/OPTIONS#--texture-base-color).

### `model.emissive.factor` <small>(_color_, optional)</small> {#model.emissive.factor}

Multiply the emissive color when an emissive texture is present. Model specified by default.
CLI: [`--emissive-factor`](../user/OPTIONS#--emissive-factor).

### `model.emissive.texture` <small>(_path_, default: ``)</small> {#model.emissive.texture}

Path to a texture file that sets the emitted light of the object. Multiplied with the `model.emissive.factor`. Model specified by default.
CLI: [`--texture-emissive`](../user/OPTIONS#--texture-emissive).

### `model.material.metallic` <small>(_double_, optional)</small> {#model.material.metallic}

Set the _metallic coefficient_ on the geometry (0.0-1.0). Multiplied with the `model.material.texture` when present. Model specified by default.
CLI: [`--metallic`](../user/OPTIONS#--metallic).

### `model.material.roughness` <small>(_double_, optional)</small> {#model.material.roughness}

Set the _roughness coefficient_ on the geometry (0.0-1.0). Multiplied with the `model.material.texture` when present. Model specified by default.
CLI: [`--roughness`](../user/OPTIONS#--roughness).

### `model.material.base_ior` <small>(_double_, optional)</small> {#model.material.base_ior}

Set the _index of refraction of the base layer_ (1.0-2.5). Model specified by default.
CLI: [`--base-ior`](../user/OPTIONS#--base-ior).

### `model.material.texture` <small>(_path_, optional)</small> {#model.material.texture}

Path to a texture file that sets the Occlusion, Roughness and Metallic values of the object. Multiplied with the `model.material.roughness` and `model.material.metallic`, set both of them to 1.0 to get a true result. Model specified by default.
CLI: [`--texture-material`](../user/OPTIONS#--texture-material).

### `model.normal.scale` <small>(_double_, optional)</small> {#model.normal.scale}

Normal scale affects the strength of the normal deviation from the normal texture. Model specified by default.
CLI: [`--normal-scale`](../user/OPTIONS#--normal-scale).

### `model.normal.texture` <small>(_path_, optional)</small> {#model.normal.texture}

Path to a texture file that sets the normal map of the object. Model specified by default.
CLI: [`--texture-normal`](../user/OPTIONS#--texture-normal).

### `model.scivis.enable` <small>(_bool_, default: `false`)</small> {#model.scivis.enable}

_Color by an array_ present in on the data. If `model.scivis.array_name` is not set, the first available array will be used.
CLI: [`--scalar-coloring`](../user/OPTIONS#--scalar-coloring).

### `model.scivis.cells` <small>(_bool_, default: `false`)</small> {#model.scivis.cells}

Color the data with value found _on the cells_ instead of points
CLI: [`--cells`](../user/OPTIONS#--cells).

### `model.scivis.discretization` <small>(_int_, optional)</small> {#model.scivis.discretization}

Set how many distinct colors will be used from the colormap. [1, N] will discretize, values outside that range will result in smooth shading.
CLI: [`--colormap-discretization`](../user/OPTIONS#--colormap-discretization).

### `model.scivis.colormap` <small>(_colormap_, default: `\<inferno\>`)</small> {#model.scivis.colormap}

Set a _custom colormap for the coloring_.See [colormap parsing](../user/PARSING.md#colormap) for details.
CLI: [`--colormap`](../user/OPTIONS#--colormap).

### `model.scivis.component` <small>(_int_, default: `-1`)</small> {#model.scivis.component}

Specify the component to color with. -1 means _magnitude_. -2 means _direct values_.
CLI: [`--comp`](../user/OPTIONS#--comp).

### `model.scivis.array_name` <small>(_string_, default: ``)</small> {#model.scivis.array_name}

Select the name of the array to color with.
CLI: [`--coloring-array`](../user/OPTIONS#--coloring-array).

### `model.scivis.range` <small>(_vector\<double\>_, optional)</small> {#model.scivis.range}

Set the _coloring range_. Automatically computed by default.
CLI: [`--range`](../user/OPTIONS#--range).

### `model.point_sprites.enable` <small>(_bool_, default: `false`)</small> {#model.point_sprites.enable}

Show sphere _points sprites_ instead of the geometry.
CLI: [`--point-sprites`](../user/OPTIONS#--point-sprites).

### `model.point_sprites.type` <small>(_string_, default: `sphere`)</small> {#model.point_sprites.type}

Set the sprites type when showing point sprites (can be `sphere` or `gaussian`).
CLI: [`--point-stripes-type`](../user/OPTIONS#--point-stripes-type).

### `model.point_sprites.size` <small>(_double_, default: `10.0`)</small> {#model.point_sprites.size}

Set the _size_ of point sprites.
CLI: [`--point-stripes-size`](../user/OPTIONS#--point-stripes-size).

### `model.volume.enable` <small>(_bool_, default: `false`)</small> {#model.volume.enable}

Enable _volume rendering_. It is only available for 3D image data (vti, dcm, nrrd, mhd files) and will display nothing with other formats. It forces coloring.
CLI: [`--volume`](../user/OPTIONS#--volume).

### `model.volume.inverse` <small>(_bool_, default: `false`)</small> {#model.volume.inverse}

Inverse the linear opacity function.
CLI: [`--inverse`](../user/OPTIONS#--inverse).

### `model.textures_transform` <small>(_transform2d_, optional)</small> {#model.textures_transform}

Transform applied to textures on the model. If a default transform is set by the importer, the default value will be multiplied by this transform.
CLI: [`--textures-transform`](../user/OPTIONS#--textures-transform).

## Render Options

### `render.effect.translucency_support` <small>(_bool_, default: `false`)</small> {#render.effect.translucency_support}

Enable _translucency support_. This is a technique used to correctly render translucent objects, implemented using depth peeling
CLI: [`--translucency-support`](../user/OPTIONS#--translucency-support).

### `render.effect.antialiasing.enable` <small>(_string_, default: `false`)</small> {#render.effect.antialiasing.enable}

Enable _anti-aliasing_. This technique is used to reduce aliasing.
CLI: [`--anti-aliasing`](../user/OPTIONS#--anti-aliasing).

### `render.effect.antialiasing.mode` <small>(_string_, default: `fxaa`)</small> {#render.effect.antialiasing.mode}

Set the anti-aliasing technique. Valid options are: FXAA (fast), SSAA (quality)
CLI: [`--anti-aliasing-mode`](../user/OPTIONS#--anti-aliasing-mode).

### `render.effect.ambient_occlusion` <small>(_bool_, default: `false`)</small> {#render.effect.ambient_occlusion}

Enable _ambient occlusion_. This is a technique providing approximate shadows, used to improve the depth perception of the object. Implemented using SSAO
CLI: [`--ambient_occlusion`](../user/OPTIONS#--ambient_occlusion).

### `render.effect.tone_mapping` <small>(_bool_, default: `false`)</small> {#render.effect.tone_mapping}

Enable generic filmic _Tone Mapping Pass_. This technique is used to map colors properly to the monitor colors.
CLI: [`--tone-mapping`](../user/OPTIONS#--tone-mapping).

### `render.effect.final_shader` <small>(_string_, optional)</small> {#render.effect.final_shader}

Add a final shader to the output image
CLI: [`--final-shader. See [user documentation](../user/FINAL_SHADER.md).`](../user/OPTIONS#--final-shader. See [user documentation](../user/FINAL_SHADER.md).).

### `render.line_width` <small>(_double_, optional)</small> {#render.line_width}

Set the _width_ of lines when showing edges. Model specified by default.
CLI: [`--line-width`](../user/OPTIONS#--line-width).

### `render.show_edges` <small>(_bool_, optional)</small> {#render.show_edges}

Set to true to show the _cell edges_. Model specified by default.
CLI: [`--edges`](../user/OPTIONS#--edges).

### `render.point_size` <small>(_double_, optional)</small> {#render.point_size}

Set the _size_ of points when showing vertices. Model specified by default.
CLI: [`--point-size`](../user/OPTIONS#--point-size).

### `render.backface_type` <small>(_string_, optional)</small> {#render.backface_type}

Set the Backface type, can be `visible` or `hidden`, model specified by default.
CLI: [`--backface-type`](../user/OPTIONS#--backface-type).

### `render.grid.enable` <small>(_bool_, default: `false`)</small> {#render.grid.enable}

Show _a grid_ aligned with the horizontal (orthogonal to the Up direction) plane.
CLI: [`--grid`](../user/OPTIONS#--grid).

### `render.grid.absolute` <small>(_bool_, default: `false`)</small> {#render.grid.absolute}

Position the grid at the _absolute origin_ of the model's coordinate system instead of below the model.
CLI: [`--grid`](../user/OPTIONS#--grid).

### `render.grid.unit` <small>(_double_, optional)</small> {#render.grid.unit}

Set the size of the _unit square_ for the grid. Automatically computed by default.
CLI: [`--grid-unit`](../user/OPTIONS#--grid-unit).

### `render.grid.subdivisions` <small>(_int_, default: `10`)</small> {#render.grid.subdivisions}

Set the number of subdivisions for the grid.
CLI: [`--grid-subdivisions`](../user/OPTIONS#--grid-subdivisions).

### `render.grid.color` <small>(_color_, default: `0, 0, 0`)</small> {#render.grid.color}

Set the color of grid lines.
CLI: [`--grid-color`](../user/OPTIONS#--grid-color).

### `render.raytracing.enable` <small>(_bool_, default: `false`)</small> {#render.raytracing.enable}

Enable _raytracing_. Requires the raytracing module to be enabled.
CLI: [`--raytracing`](../user/OPTIONS#--raytracing).

### `render.raytracing.samples` <small>(_int_, default: `5`)</small> {#render.raytracing.samples}

The number of _samples per pixel_.
CLI: [`--samples`](../user/OPTIONS#--samples).

### `render.raytracing.denoise` <small>(_bool_, default: `false`)</small> {#render.raytracing.denoise}

_Denoise_ the raytracing rendering.
CLI: [`--denoise`](../user/OPTIONS#--denoise).

### `render.hdri.file` <small>(_path_, optional)</small> {#render.hdri.file}

Set the _HDRI_ image that can be used for ambient lighting and skybox.
Valid file format are hdr, exr, png, jpg, pnm, tiff, bmp.
If not set, a default is provided.
CLI: [`--hdri-file`](../user/OPTIONS#--hdri-file).

### `render.hdri.ambient` <small>(_bool_, default: `false`)</small> {#render.hdri.ambient}

Light the scene using the _HDRI_ image as ambient lighting
The environment act as a light source and is reflected on the material.
CLI: [`--hdri-ambient`](../user/OPTIONS#--hdri-ambient).

### `render.background.color` <small>(_color_, default: `0.2,0.2,0.2`)</small> {#render.background.color}

Set the window _background color_.
Ignored if a _hdri_ skybox is used.
CLI: [`--background-color`](../user/OPTIONS#--background-color).

### `render.background.skybox` <small>(_bool_, default: `false`)</small> {#render.background.skybox}

Show the _HDRI_ image as a skybox
Overrides the the background color if any
CLI: [`--hdri-skybox`](../user/OPTIONS#--hdri-skybox).

### `render.background.blur.enable` <small>(_bool_, default: `false`)</small> {#render.background.blur.enable}

Blur background, useful with a skybox.
CLI: [`--blur-background`](../user/OPTIONS#--blur-background).

### `render.background.blur.coc` <small>(_double_, default: `20.0`)</small> {#render.background.blur.coc}

Blur background circle of confusion radius.
CLI: [`--blur-coc`](../user/OPTIONS#--blur-coc).

### `render.light.intensity` <small>(_double_, default: `1.0`)</small> {#render.light.intensity}

Adjust the intensity of every light in the scene.
CLI: [`--light-intensity`](../user/OPTIONS#--light-intensity).

### `render.armature.enable` <small>(_bool_, default: `false`)</small> {#render.armature.enable}

Display armatures if present in the scene (glTF only).
CLI: [`--armature`](../user/OPTIONS#--armature).

## UI Options

### `ui.axis` <small>(_bool_, default: `false`)</small> {#ui.axis}

Show _axes_ as a trihedron in the scene. Requires an interactor.
CLI: [`--axis`](../user/OPTIONS#--axis).

### `ui.scalar_bar` <small>(_bool_, default: `false`)</small> {#ui.scalar_bar}

Show _scalar bar_ of the coloring by data array.
CLI: [`--bar`](../user/OPTIONS#--bar).

### `ui.cheatsheet` <small>(_bool_, default: `false`)</small> {#ui.cheatsheet}

Show a interaction cheatsheet
CLI: `-`.

### `ui.console` <small>(_bool_, default: `false`)</small> {#ui.console}

Show the console
CLI: `-`.

### `ui.minimal_console` <small>(_bool_, default: `false`)</small> {#ui.minimal_console}

Show the minimal console. Useful to execute a quick command and exit.
CLI: `-`.

### `ui.filename` <small>(_bool_, default: `false`)</small> {#ui.filename}

Display the _filename info content_ on top of the window.
CLI: [`--filename`](../user/OPTIONS#--filename).

### `ui.filename_info` <small>(_string_, default: `-`)</small> {#ui.filename_info}

Content of _filename info_ to display.
CLI: `-`.

### `ui.font_file` <small>(_path_, optional)</small> {#ui.font_file}

Use the provided FreeType compatible font file to display text.
Can be useful to display non-ASCII filenames.
CLI: [`--font-file`](../user/OPTIONS#--font-file).

### `ui.scale` <small>(_ratio_, default: `1.0`)</small> {#ui.scale}

Scale fonts.
CLI: [`--font-scale`](../user/OPTIONS#--font-scale).

### `ui.fps` <small>(_bool_, default: `false`)</small> {#ui.fps}

Display a _frame per second counter_.
CLI: [`--fps`](../user/OPTIONS#--fps).

### `ui.loader_progress` <small>(_bool_, default: `false`, **on load**)</small> {#ui.loader_progress}

Show a _progress bar_ when loading the file.
CLI: [`--progress`](../user/OPTIONS#--progress).

### `ui.animation_progress` <small>(_bool_, default: `false`, **on load**)</small> {#ui.animation_progress}

Show a _progress bar_ when playing the animation.
CLI: [`--animation-progress`](../user/OPTIONS#--animation-progress).

### `ui.metadata` <small>(_bool_, default: `false`)</small> {#ui.metadata}

Display the _metadata_.
CLI: [`--metadata`](../user/OPTIONS#--metadata).

### `ui.drop_zone.enable` <small>(_bool_, default: `false`)</small> {#ui.drop_zone.enable}

Show a drop zone. Rendering is disabled when the viewport is smaller than 10×10 pixels.
CLI: `-`.

### `ui.drop_zone.custom_binds` <small>(_string_, default: `-`)</small> {#ui.drop_zone.custom_binds}

Space separated custom key bindings to display in the drop zone.
CLI: `-`.

### `ui.drop_zone.show_logo` <small>(_bool_, default: `false`)</small> {#ui.drop_zone.show_logo}

Display the logo. Needs ui.drop_zone.enable to be true.
CLI: `-`.

### `ui.backdrop.opacity` <small>(_double_, default: `0.9`)</small> {#ui.backdrop.opacity}

Set the opacity of the backdrop behind the UI elements. Value is between 0.0 (fully transparent) and 1.0 (fully opaque).
CLI: [`--backdrop-opacity`](../user/OPTIONS#--backdrop-opacity).

# APIs

There are three APIs to access the options

## Struct API

The most straightforward and easy to use API, just access it through the structs available in the options instance, eg:

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  opt.render.show_edges = true;
  opt.render.grid.enable = true;
  opt.ui.metadata = true;
  opt.model.material.roughness = 0.6;
```

Please note that when accessing optional options, special care must be used, eg:

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  if (opt.render.line_width.has_value())
  {
    std::cout << "Line Width: " << opt.render.line_width.value() << "\n";
  }
  else
  {
    std::cout << "Line Width: unset\n";
  }
```

It's even more true with the few optional boolean options as std::optional has an implicit boolean cast operator.

## String API

The most generic and flexible API, as it rely on parsing and string generation.
See the [parsing documentation](../user/PARSING.md) for more details.

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  opt.setAsString("render.show_edges", "true");
  opt.setAsString("render.grid.enable", "true");
  opt.setAsString("ui.metadata", "true");
  opt.setAsString("model.material.roughness", "0.6");
```

When using this API make sure to catch exceptions has needed, eg:

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();

  try
  {
    std::cout << userProvidedName << ": " << opt.getAsString(userProvidedName) << "\n";
  }
  catch (const f3d::options::inexistent_exception&)
  {
    std::cout << userProvidedName << " does not exist.\n";
  }
  catch (const f3d::options::no_value_exception&)
  {
    std::cout << userProvidedName << " is not set.\n";
  }
```

## Variant API

An API that is similar to the F3D 2.0 options API thanks to std::variant.

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  opt.set("render.show_edges", true);
  opt.set("render.grid.enable", true);
  opt.set("ui.metadata", true);
  opt.set("model.material.roughness", 0.6);
```

When using this API make sure to catch exception shown above with the string API.
