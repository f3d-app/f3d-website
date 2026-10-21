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
See the exhaustive list below.

Please note certain options are `optional` by default, which means they are not set initially,
See the [APIs](#struct-api) details below for more info.

## Scene Options

### `scene.animation.autoplay` <small>(_bool_, default: `false`, **on load**)</small> {/* #scene.animation.autoplay */}

Automatically start animation.

CLI: [`--animation-autoplay`](../user/OPTIONS#--animation-autoplay).

### `scene.animation.indices` <small>(_vector\<int\>_, default: `0`, **on load**)</small> {/* #scene.animation.indices */}

Select the animations to load.
Any negative value means all animations.
The default scene always has at most one animation.

CLI: [`--animation-indices`](../user/OPTIONS#--animation-indices).

### `scene.animation.speed_factor` <small>(_ratio_, default: `1`, range domain: `[0, 2]`, increment: `0.1` )</small> {/* #scene.animation.speed_factor */}

Set the animation speed factor to slow, speed up or even invert animation.

CLI: [`--animation-speed-factor`](../user/OPTIONS#--animation-speed-factor).

### `scene.animation.time` <small>(_double_, optional, **on load**)</small> {/* #scene.animation.time */}

Set the animation time to load.

CLI: [`--animation-time`](../user/OPTIONS#--animation-time).

### `scene.camera.index` <small>(_int_, optional, **on load**, index domain: dynamic )</small> {/* #scene.camera.index */}

Select the scene camera to use when available in the file.
The default scene always uses automatic camera.
The domain is updated when loading the file to contain the number of cameras in the file.

CLI: [`--camera-index`](../user/OPTIONS#--camera-index).

### `scene.up_direction` <small>(_direction_, default: `+Y`)</small> {/* #scene.up_direction */}

Define the Up direction. It impacts the grid, the axis, the HDRI and the camera.

CLI: [`--up`](../user/OPTIONS#--up).

### `scene.force_reader` <small>(_string_, optional, **on load**)</small> {/* #scene.force_reader */}

Force a specific reader to be used, disregarding the file extension and file content. See [user documentation](../user/02-SUPPORTED_FORMATS.md).

CLI: [`--force-reader`](../user/OPTIONS#--force-reader).

### `scene.skip_content_check` <small>(_bool_, default: `false`)</small> {/* #scene.skip_content_check */}

Select reader to read file without checking its header content but only based on the file extension.

CLI: [`--skip-content-check`](../user/OPTIONS#--skip-content-check).

### `scene.camera.orthographic` <small>(_bool_, optional)</small> {/* #scene.camera.orthographic */}

Set to true to force orthographic projection. Model-specified by default, which is false if not specified.

CLI: [`--camera-orthographic`](../user/OPTIONS#--camera-orthographic).

## Interactor Options

### `interactor.style` <small>(_string_, default: `default`, enum domain: `default, trackball, 2d`)</small> {/* #interactor.style */}

Set the interaction style. `default` uses standard 3D interaction, `trackball` enables trackball interaction, `2d` enables 2D interaction mode (pan/zoom only, no rotation). In `2d` mode, camera commands (`set_camera`, `roll_camera`, `elevation_camera`, `azimuth_camera`) are disabled.

CLI: [`--interaction-style`](../user/OPTIONS#--interaction-style).

### `interactor.invert_zoom` <small>(_bool_, default: `false`)</small> {/* #interactor.invert_zoom */}

Invert the zoom direction.

CLI: [`--invert-zoom`](../user/OPTIONS#--invert-zoom).

## Model Options

### `model.matcap.texture` <small>(_path_, optional)</small> {/* #model.matcap.texture */}

Path to a texture file containing a material capture. All other model options for surfaces are ignored if this is set. Model-specified by default.

CLI: [`--texture-matcap`](../user/OPTIONS#--texture-matcap).

### `model.color.opacity` <small>(_double_, optional, range domain: `[0, 1]`, increment: `0.05`)</small> {/* #model.color.opacity */}

Set _opacity_ on the geometry. Usually used with Depth Peeling option. Multiplied with the `model.color.texture` when present. Model-specified by default.

CLI: [`--opacity`](../user/OPTIONS#--opacity).

### `model.color.rgb` <small>(_color_, optional)</small> {/* #model.color.rgb */}

Set a _color_ on the geometry. Multiplied with the `model.color.texture` when present. Model-specified by default. Ignored if `model.coloring` is not `material`.

CLI: [`--color`](../user/OPTIONS#--color).

### `model.color.texture` <small>(_path_, optional)</small> {/* #model.color.texture */}

Path to a texture file that sets the color of the object. Will be multiplied with rgb and opacity. Model-specified by default.

CLI: [`--texture-base-color`](../user/OPTIONS#--texture-base-color).

### `model.emissive.factor` <small>(_color_, optional)</small> {/* #model.emissive.factor */}

Multiply the emissive color when an emissive texture is present. Model-specified by default.

CLI: [`--emissive-factor`](../user/OPTIONS#--emissive-factor).

### `model.emissive.texture` <small>(_path_, optional)</small> {/* #model.emissive.texture */}

Path to a texture file that sets the emitted light of the object. Multiplied with the `model.emissive.factor`. Model-specified by default.

CLI: [`--texture-emissive`](../user/OPTIONS#--texture-emissive).

### `model.material.metallic` <small>(_double_, optional, range domain: `[0, 1]`, increment: `0.05`)</small> {/* #model.material.metallic */}

Set the _metallic coefficient_ on the geometry (between `0.0` and `1.0`). Multiplied with the `model.material.texture` when present. Model-specified by default.

CLI: [`--metallic`](../user/OPTIONS#--metallic).

### `model.material.roughness` <small>(_double_, optional, range domain: `[0, 1]`, increment: `0.05`)</small> {/* #model.material.roughness */}

Set the _roughness coefficient_ on the geometry (between `0.0` and `1.0`). Multiplied with the `model.material.texture` when present. Model-specified by default.

CLI: [`--roughness`](../user/OPTIONS#--roughness).

### `model.material.base_ior` <small>(_double_, optional, range domain: `[1, 2.5]`, increment: `0.1`)</small> {/* #model.material.base_ior */}

Set the _index of refraction of the base layer_ (between `1.0` and `2.5`). Model-specified by default.

CLI: [`--base-ior`](../user/OPTIONS#--base-ior).

### `model.material.texture` <small>(_path_, optional)</small> {/* #model.material.texture */}

Path to a texture file that sets the Occlusion, Roughness and Metallic values of the object. Multiplied with the `model.material.roughness` and `model.material.metallic`, set both of them to `1.0` to get a true result. Model-specified by default.

CLI: [`--texture-material`](../user/OPTIONS#--texture-material).

### `model.normal_glyphs.enable` <small>(_bool_, default: `false`)</small> {/* #model.normal_glyphs.enable */}

Render vertex normals as arrows on top of the geometry.

### `model.normal_glyphs.scale` <small>(_ratio_, default: `1.0`, range domain: `[0, 10]`, increment: `0.1`)</small> {/* #model.normal_glyphs.scale */}

Scales the normal glyphs

### `model.normal.scale` <small>(_double_, optional, range domain: `[0, 3]`, increment: `0.1`)</small> {/* #model.normal.scale */}

Normal scale affects the strength of the normal deviation from the normal texture. Model-specified by default.

CLI: [`--normal-scale`](../user/OPTIONS#--normal-scale).

### `model.normal.texture` <small>(_path_, optional)</small> {/* #model.normal.texture */}

Path to a texture file that sets the normal map of the object. Model-specified by default.

CLI: [`--texture-normal`](../user/OPTIONS#--texture-normal).

### `model.checkerboard.enable` <small>(_bool_, default: `false`, **on load**)</small> {/* #model.checkerboard.enable */}

Override model's texture with a checkerboard texture. Anti-aliasing is recommended.

CLI: [`--checkerboard`](../user/OPTIONS#--checkerboard).

### `model.unlit` <small>(_bool_, optional)</small> {/* #model.unlit */}

Override model's lighting configuration.
If the value is true, no shading is applied and the model will be unlit.

CLI: [`--unlit`](../user/OPTIONS#--unlit).

### `model.coloring` <small>(_string_, default: `material`, enum domain: `material, scivis, direct`)</small> {/* #model.coloring */}

Specify the coloring mode.
_material_ means default file materials (textured or solid color)
_scivis_ and _direct_ mean the array specified with option `model.scivis.array_name` will be used for coloring (or the first available if not set)
In the case of _scivis_, the array is mapped to a color using the colormap defined in `model.scivis.colormap`
In the case of _direct_, it is assumed that the array defines colors directly as L, LA, RGB, RGBA values depending on the number of components.

CLI: [`--coloring-mode`](../user/OPTIONS#--coloring-mode).

### `model.scivis.field` <small>(_string_, default: `any`, enum domain: `any, points, cells`)</small> {/* #model.scivis.field */}

Specify which array field must be used in `scivis` or `direct` coloring mode..

CLI: [`--coloring-field`](../user/OPTIONS#--coloring-field).

### `model.scivis.discretization` <small>(_int_, optional, range domain: `[1, 1024]`, increment: `5`)</small> {/* #model.scivis.discretization */}

Set how many distinct colors will be used from the colormap. Should be `>=1`.

CLI: [`--colormap-discretization`](../user/OPTIONS#--colormap-discretization).

### `model.scivis.colormap` <small>(_colormap_, default: `<inferno>`)</small> {/* #model.scivis.colormap */}

Set a _custom colormap for the coloring_.See [colormap parsing](../user/08-PARSING.md#colormap) for details.

CLI: [`--colormap`](../user/OPTIONS#--colormap).

### `model.scivis.opacity_map` <small>(_vector\<double\>_, default: `0.0,0.0,1.0,1.0`)</small> {/* #model.scivis.opacity_map */}

Set a _custom opacity map for the coloring_. The format of the opacity map should be `val, opacity, ...`.
It is only used for volume rendering currently.

CLI: [`--volume-opacity-map`](../user/OPTIONS#--volume-opacity-map).

### `model.scivis.component` <small>(_int_, optional)</small> {/* #model.scivis.component */}

Specify the component to color with in `scivis` or `direct` coloring mode. If not set, it means _magnitude_.

CLI: [`--coloring-component`](../user/OPTIONS#--coloring-component).

### `model.scivis.array_name` <small>(_string_, optional)</small> {/* #model.scivis.array_name */}

Select the name of the array to color with.

CLI: [`--coloring-array`](../user/OPTIONS#--coloring-array).

### `model.scivis.range` <small>(_vector\<double\>_, optional)</small> {/* #model.scivis.range */}

Set the _coloring range_. Automatically computed by default.
When automatically computed and minimum and maximum values are nearly equal, the object is colored with the mid value.

CLI: [`--coloring-range`](../user/OPTIONS#--coloring-range).

### `model.point_sprites.type` <small>(_string_, default: `none`, enum domain: `none, sphere, gaussian, circle, stddev, bound, cross`)</small> {/* #model.point_sprites.type */}

Enable and set the point sprites type. This allows to show sprites instead of points.

CLI: [`--point-sprites`](../user/OPTIONS#--point-sprites).

### `model.point_sprites.size` <small>(_double_, default: `10.0`, range domain: `[1, 100]`, increment: `1`)</small> {/* #model.point_sprites.size */}

Set the _size_ of point sprites.

CLI: [`--point-sprites-size`](../user/OPTIONS#--point-sprites-size).

### `model.point_sprites.absolute_size` <small>(_bool_, default: `false`)</small> {/* #model.point_sprites.absolute_size */}

Do not scale the point sprites size by the scene bounding box.

CLI: [`--point-sprites-absolute-size`](../user/OPTIONS#--point-sprites-absolute-size).

### `model.volume.enable` <small>(_bool_, default: `false`)</small> {/* #model.volume.enable */}

Enable _volume rendering_. It is only available for 3D image data and will display nothing with incompatible data. It forces coloring.

CLI: [`--volume`](../user/OPTIONS#--volume).

### `model.volume.inverse` <small>(_bool_, default: `false`)</small> {/* #model.volume.inverse */}

Inverse the linear opacity function.

CLI: [`--volume-inverse`](../user/OPTIONS#--volume-inverse).

### `model.textures_transform` <small>(_transform2d_, optional)</small> {/* #model.textures_transform */}

Transform applied to textures on the model. If a default transform is set by the importer, the default value will be multiplied by this transform.

CLI: [`--textures-transform`](../user/OPTIONS#--textures-transform).

## Render Options

### `render.effect.blending.mode` <small>(_string_, default: `none`, enum domain: `none, ddp, sort, sort_cpu, stochastic`)</small> {/* #render.effect.blending.mode */}

Enable and set the _blending_ technique. This is a technique used to correctly render translucent objects.
Valid options are: `ddp` (dual depth peeling, quality), `sort` (only for gaussians), `sort_cpu` (only for gaussians, slow), `stochastic` (fast), `none` (disabled).

:::warning

`ddp`, `sort` and `sort_cpu` are not compatible with OpenGL ES (WebAssembly and Android)

:::
CLI: [`--blending`](../user/OPTIONS#--blending).

### `render.effect.antialiasing.mode` <small>(_string_, default: `none`, enum domain: `none, fxaa, ssaa, taa`)</small> {/* #render.effect.antialiasing.mode */}

Enable and set the anti-aliasing technique. This technique is used to reduce aliasing.
Valid options are: `fxaa` (fast), `ssaa` (quality), `taa` (balanced), `none` (disabled).

CLI: [`--anti-aliasing`](../user/OPTIONS#--anti-aliasing).

### `render.effect.ambient_occlusion` <small>(_bool_, default: `false`)</small> {/* #render.effect.ambient_occlusion */}

Enable _ambient occlusion_. This is a technique providing approximate shadows, used to improve the depth perception of the object. Implemented using SSAO

CLI: [`--ambient-occlusion`](../user/OPTIONS#--ambient-occlusion).

### `render.effect.tone_mapping` <small>(_bool_, default: `false`)</small> {/* #render.effect.tone_mapping */}

Enable neutral _Tone Mapping_. This technique is used to map colors properly to the monitor colors.

CLI: [`--tone-mapping`](../user/OPTIONS#--tone-mapping).

### `render.effect.final_shader` <small>(_string_, optional)</small> {/* #render.effect.final_shader */}

Add a final shader to the output image. See [user documentation](../user/11-FINAL_SHADER.md).

CLI: [`--final-shader`](../user/OPTIONS#--final-shader)

### `render.effect.display_depth` <small>(_bool_, default: `false`)</small> {/* #render.effect.display_depth */}

Display the depth buffer as a grayscale image or with a colormap if `model.coloring` is `scivis`.
Only opaque objects are displayed, the grid and translucent/volumetric objects are ignored.

CLI: [`--display-depth`](../user/OPTIONS#--display-depth)

### `render.line_width` <small>(_double_, optional, range domain: `[0, 10]`, increment: `0.1`)</small> {/* #render.line_width */}

Set the _width_ of lines when showing edges. Model-specified by default.

CLI: [`--line-width`](../user/OPTIONS#--line-width).

### `render.show_edges` <small>(_bool_, optional)</small> {/* #render.show_edges */}

Set to true to show the _cell edges_. Model-specified by default.

CLI: [`--edges`](../user/OPTIONS#--edges).

### `render.point_size` <small>(_double_, optional, range domain: `[0, 10]`, increment: `0.1`)</small> {/* #render.point_size */}

Set the _size_ of points when showing vertices. Model-specified by default.

CLI: [`--point-size`](../user/OPTIONS#--point-size).

### `render.backface_type` <small>(_string_, optional, **on load**, enumeration domain: `visible, hidden`)</small> {/* #render.backface_type */}

Set the Backface type, can be `visible` or `hidden`, Model-specified by default.

CLI: [`--backface-type`](../user/OPTIONS#--backface-type).

### `render.grid.enable` <small>(_bool_, default: `false`)</small> {/* #render.grid.enable */}

Show _a grid_ aligned with the horizontal (orthogonal to the Up direction) plane.

CLI: [`--grid`](../user/OPTIONS#--grid).

### `render.grid.absolute` <small>(_bool_, default: `false`)</small> {/* #render.grid.absolute */}

Position the grid at the _absolute origin_ of the model's coordinate system instead of below the model.

CLI: [`--grid-absolute`](../user/OPTIONS#--grid-absolute).

### `render.grid.unit` <small>(_double_, optional)</small> {/* #render.grid.unit */}

Set the size of the _unit square_ for the grid. Automatically computed by default.

CLI: [`--grid-unit`](../user/OPTIONS#--grid-unit).

### `render.grid.subdivisions` <small>(_int_, default: `10`)</small> {/* #render.grid.subdivisions */}

Set the number of subdivisions for the grid.

CLI: [`--grid-subdivisions`](../user/OPTIONS#--grid-subdivisions).

### `render.grid.color` <small>(_color_, default: `0, 0, 0`)</small> {/* #render.grid.color */}

Set the color of grid lines.

CLI: [`--grid-color`](../user/OPTIONS#--grid-color).

### `render.grid.opacity` <small>(_ratio_, default: `1.0`)</small> {/* #render.grid.opacity */}

Set the opacity for the grid lines. Can be set to `0` to show reflection only.

CLI: [`--grid-opacity`](../user/OPTIONS#--grid-opacity).

### `render.grid.reflection` <small>(_ratio_, default: `0.0`)</small> {/* #render.grid.reflection */}

Set the reflection strength on the grid.

CLI: [`--grid-reflection`](../user/OPTIONS#--grid-reflection).

### `render.axes_grid` <small>(_bool_, default: `false`)</small> {/* #render.axes_grid */}

Show _axes grid_ in the scene.

:::warning

this option is not compatible with OpenGL ES (WebAssembly and Android)

:::
CLI: [`--axes-grid`](../user/OPTIONS#--axes-grid).

### `render.raytracing.enable` <small>(_bool_, default: `false`)</small> {/* #render.raytracing.enable */}

Enable _raytracing_. Requires the raytracing module to be enabled.

CLI: [`--raytracing`](../user/OPTIONS#--raytracing).

### `render.raytracing.samples` <small>(_int_, default: `5`, range domain: `[1, 50]`, increment: `1`)</small> {/* #render.raytracing.samples */}

The number of _samples per pixel_.

CLI: [`--raytracing-samples`](../user/OPTIONS#--raytracing-samples).

### `render.raytracing.denoise` <small>(_bool_, default: `false`)</small> {/* #render.raytracing.denoise */}

_Denoise_ the raytracing rendering.

CLI: [`--raytracing-denoise`](../user/OPTIONS#--raytracing-denoise).

### `render.hdri.file` <small>(_path_, optional)</small> {/* #render.hdri.file */}

Set the _HDRI_ image that can be used for ambient lighting and skybox.
Valid file format are `.hdr`, `.exr`, `.png`, `.jpg`, `.pnm`, `.tiff`, `.bmp`.
If not set, a default is provided.

CLI: [`--hdri-file`](../user/OPTIONS#--hdri-file).

### `render.hdri.ambient` <small>(_bool_, default: `false`)</small> {/* #render.hdri.ambient */}

Light the scene using the _HDRI_ image as ambient lighting
The environment act as a light source and is reflected on the material.

CLI: [`--hdri-ambient`](../user/OPTIONS#--hdri-ambient).

### `render.background.color` <small>(_color_, default: `0.2,0.2,0.2`)</small> {/* #render.background.color */}

Set the window _background color_.
Ignored if a _hdri_ skybox is used.

CLI: [`--background-color`](../user/OPTIONS#--background-color).

### `render.background.skybox` <small>(_string_, default: `disabled`, enum domain: `disabled`, `enabled`, `blurred`)</small> {/* #render.background.skybox */}

Define how to show the _HDRI_ image as a skybox
Overrides the the background color if any

CLI: [`--hdri-skybox`](../user/OPTIONS#--hdri-skybox).

### `render.background.blur_coc` <small>(_double_, default: `20.0`, range domain: `[0, 100]`, increment: `5`)</small> {/* #render.background.blur_coc */}

Blur background circle of confusion radius.

CLI: [`--blur-coc`](../user/OPTIONS#--blur-coc).

### `render.light.intensity` <small>(_double_, default: `1.0`, range domain: `[0, 5]`, increment: `0.02`)</small> {/* #render.light.intensity */}

Adjust the intensity of every light in the scene, including HDRI image-based lighting.

CLI: [`--light-intensity`](../user/OPTIONS#--light-intensity).

### `render.armature.enable` <small>(_bool_, default: `false`)</small> {/* #render.armature.enable */}

Display armatures if present in the scene (glTF only).

CLI: [`--armature`](../user/OPTIONS#--armature).

## UI Options

### `ui.axis` <small>(_bool_, default: `false`)</small> {/* #ui.axis */}

Show _axes_ as a trihedron in the scene. Requires an interactor.

CLI: [`--axis`](../user/OPTIONS#--axis).

### `ui.x_color` <small>(_color_, default: `f3d_red`)</small> {/* #ui.x_color */}

Set the X axis color in both widget and grid.

CLI: [`--x-color`](../user/OPTIONS#--x-color).

### `ui.y_color` <small>(_color_, default: `f3d_green`)</small> {/* #ui.y_color */}

Set the Y axis color in both widget and grid.

CLI: [`--y-color`](../user/OPTIONS#--y-color).

### `ui.z_color` <small>(_color_, default: `f3d_blue`)</small> {/* #ui.z_color */}

Set the Z axis color in both widget and grid.

CLI: [`--z-color`](../user/OPTIONS#--z-color).

### `ui.scalar_bar` <small>(_bool_, default: `false`)</small> {/* #ui.scalar_bar */}

Show _scalar bar_ of the coloring by data array.

CLI: [`--coloring-scalar-bar`](../user/OPTIONS#--coloring-scalar-bar).

### `ui.cheatsheet` <small>(_bool_, default: `false`)</small> {/* #ui.cheatsheet */}

Show a interaction cheatsheet

### `ui.console` <small>(_bool_, default: `false`)</small> {/* #ui.console */}

Show the console

### `ui.minimal_console` <small>(_bool_, default: `false`)</small> {/* #ui.minimal_console */}

Show the minimal console. Useful to execute a quick command and exit.

### `ui.filename` <small>(_bool_, default: `false`)</small> {/* #ui.filename */}

Display the _filename info content_ on top of the window.

### `ui.filename_info` <small>(_string_, default: `""`)</small> {/* #ui.filename_info */}

Content of _filename info_ to display.

### `ui.hdri_filename` <small>(_bool_, default: `false`)</small> {/* #ui.hdri_filename */}

Display the _HDRI filename info content_ on top of the window.

CLI: [`--hdri-filename`](../user/OPTIONS#--hdri-filename).

### `ui.font_file` <small>(_path_, optional)</small> {/* #ui.font_file */}

Use the provided FreeType compatible font file to display text.
Can be useful to display non-ASCII filenames.

CLI: [`--font-file`](../user/OPTIONS#--font-file).

### `ui.scale` <small>(_ratio_, default: `1.0`, range domain: `[0, 10]`, increment: `0.1`)</small> {/* #ui.scale */}

Scale fonts. Useful for HiDPI displays.

CLI: [`--font-scale`](../user/OPTIONS#--font-scale).

### `ui.font_color` <small>(_color_, default: `f3d_white`)</small> {/* #ui.font_color */}

Set font color.

CLI: [`--font-color`](../user/OPTIONS#--font-color).

### `ui.dpi_aware` <small>(_bool_, default: `false`)</small> {/* #ui.dpi_aware */}

Scale the _font scale_ and _resolution_ by the display scaling factor.
Only supported on Windows platform.

CLI: [`--dpi-aware`](../user/OPTIONS#--dpi-aware).

### `ui.fps` <small>(_bool_, default: `false`)</small> {/* #ui.fps */}

Display a _frame per second counter_.

:::warning

this option is not compatible with OpenGL ES (WebAssembly and Android)

:::
CLI: [`--fps`](../user/OPTIONS#--fps).

### `ui.loader_progress` <small>(_bool_, default: `false`, **on load**)</small> {/* #ui.loader_progress */}

Show a _progress bar_ when loading the file.

CLI: [`--loading-progress`](../user/OPTIONS#--loading-progress).

### `ui.loader_progress_color` <small>(_color_, default: `f3d_yellow`)</small> {/* #ui.loader_progress_color */}

Set loader progress bar color.

### `ui.animation_progress` <small>(_string_, default: `none`, enum domain: `none`, `default`, `advanced`)</small> {/* #ui.animation_progress */}

Control the _progress bar_ shown when playing the animation. Can be `none` (hidden),
`default` (only the progress bar, which can be clicked or dragged to jump to a
time) or `advanced` (the progress bar plus time range, animation name and current
time labels, with a marker for each key frame).

CLI: [`--animation-progress`](../user/OPTIONS#--animation-progress).

### `ui.animation_progress_color` <small>(_color_, default: `f3d_blue`)</small> {/* #ui.animation_progress_color */}

Set animation progress bar color.

### `ui.metadata` <small>(_bool_, default: `false`)</small> {/* #ui.metadata */}

Display the _metadata_.

CLI: [`--metadata`](../user/OPTIONS#--metadata).

### `ui.drop_zone.enable` <small>(_bool_, default: `false`)</small> {/* #ui.drop_zone.enable */}

Show a drop zone. Rendering is disabled when the viewport is smaller than 10×10 pixels.

### `ui.drop_zone.custom_binds` <small>(_string_, default: `""`)</small> {/* #ui.drop_zone.custom_binds */}

Space separated custom key bindings to display in the drop zone.

### `ui.drop_zone.show_logo` <small>(_bool_, default: `false`)</small> {/* #ui.drop_zone.show_logo */}

Display the logo. Needs ui.drop_zone.enable to be true.

### `ui.backdrop.color` <small>(_color_, default: `f3d_black`)</small> {/* #ui.backdrop.color */}

Set the color of the backdrop behind the UI elements.

CLI: [`--backdrop-color`](../user/OPTIONS#--backdrop-color).

### `ui.backdrop.opacity` <small>(_double_, default: `0.9`, range domain: `[0, 1]`, increment: `0.05`)</small> {/* #ui.backdrop.opacity */}

Set the opacity of the backdrop behind the UI elements. Value is between 0.0 (fully transparent) and 1.0 (fully opaque).

CLI: [`--backdrop-opacity`](../user/OPTIONS#--backdrop-opacity).

### `ui.scene_hierarchy.enable` <small>(_bool_, default: `false`)</small> {/* #ui.scene_hierarchy.enable */}

Display the _scene hierarchy_ as a tree representing the internal structure of the model, with checkboxes allowing to hide or show individual parts.
By default the tree is only expanded enough to show nodes that have meaningful names, but all nodes can be fully expanded manually.

CLI: [`--scene-hierarchy`](../user/OPTIONS#--scene-hierarchy).

### `ui.scene_hierarchy.max_width` <small>(_int_, default: `600`)</small> {/* #ui.scene_hierarchy.max_width */}

Maximum width of the _scene hierarchy_ widget in pixels.

### `ui.notifications.enable` <small>(_bool_, default: `false`)</small> {/* #ui.notifications.enable */}

Show notifications at the bottom left of the viewport.

CLI: [`--notifications`](../user/OPTIONS#--notifications).

### `ui.notifications.show_bindings` <small>(_bool_, default: `false`)</small> {/* #ui.notifications.show_bindings */}

Show corresponding keys when notifications are triggered by bindings key press events.

## Domains

Certains options have domains that helps user pick valid values.
Options with domains are documented as such above.
Domains are never enforced but are indicative.
Domains are taken into account when using the dedicated [string API](#string-api)
or [related commands](../user/07-COMMANDS.md).

Range domains are intended for numeric options that have minimum, a maximum and an increment.
Enum domains are intended for options that have a finite set of possible value.
Index domains are intended for integer options that are between 0 and a maximum.

If an option has a `dynamic` domains, it means the libf3d can change the domain.
It is possible to directly read/write a domain using the [struct API](#struct-api).
It is possible to read a domain using the [variant API](#variant-api).

## APIs

There are three APIs to access the options

### Struct API

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

Domains are accessible through the dedicated struct:

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  std::cout << opt.domains.render.raytracing.samples.range[1] << "\n";
  std::cout << opt.domains.render.effect.blending.mode.enum[0] << "\n";
```

### String API

The most generic and flexible API, as it rely on parsing and string generation.
See the [parsing documentation](../user/08-PARSING.md) for more details.

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

This API can interact directly with domains using `increase`/`decrease` and `cycle`:

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  opt.increase("render.raytracing.samples").increase("render.raytracing.samples").decrease("render.raytracing.samples");
  opt.cycle("render.effect.blending.mode").cycle("render.effect.blending.mode");
```

When using this API make sure to catch exceptions as documented in the `option.h` header.

### Variant API

An API that is similar to the F3D 2.0 options API thanks to std::variant.

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();
  opt.set("render.show_edges", true);
  opt.set("render.grid.enable", true);
  opt.set("ui.metadata", true);
  opt.set("model.material.roughness", 0.6);
```

This API can read domains using `hasDomain`, `getDomainStyle`, `getRangeDomain`, `getEnumDomain` and `getIndexDomain`.

```cpp
  f3d::engine eng = f3d::engine::create();
  f3d::options& opt = eng.getOptions();

  std::string optionName = "option.name";
  if (opt.hasDomain(optionName))
  {
    switch (opt.getDomainStyle(optionName))
    {
      case f3d::domain_style::RANGE:
        DomainRange<option_variant_t> domain = opt.getRangeDomain("optionName");
        ...
        break;
      case f3d::domain_style::ENUM:
        DomainEnum<option_variant_t> domain = opt.getEnumDomain("optionName");
        ...
        break;
      case f3d::domain_style::INDEX:
        DomainIndex domain = opt.getIndexDomain("optionName");
        ...
        break;
    }
  }
```

When using this API make sure to catch exception shown above with the string API.
