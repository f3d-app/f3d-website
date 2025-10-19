# Command line options

F3D behavior can be fully controlled from the command line using the following options.

## Application Options

### `--input`_`=<input file>`_  <small>(_string_)</small> {#--input}

The input file or files to read, can also be provided as a positional argument. Support directories as well.

### `--output`_`=<png file>`_  <small>(_string_)</small> {#--output}

Instead of showing a render view and render into it, _render directly into a png file_. When used with --ref option, only outputs on failure. If `-` is specified instead of a filename, the PNG file is streamed to the stdout. Can use [template variables](#filename-templating).

### `--no-background`  <small>(_bool_, default: `false`)</small> {#--no-background}

Use with --output to output a png file with a transparent background.

### `-h`, `--help` {#--help}

Print _help_ and exit. Ignore [`--verbose`](#--verbose).

### `--version` {#--version}

Show _version_ information and exit. Ignore [`--verbose`](#--verbose).

### `--list-readers` {#--list-readers}

List available _readers_ and exit. Ignore [`--verbose`](#--verbose).

### `--force-reader`_`=<reader>`_  <small>(_string_)</small> {#--force-reader}

Force a specific [reader](SUPPORTED_FORMATS.md) to be used, disregarding the file extension.

### `--list-bindings` {#--list-bindings}

List available _bindings_ and exit. Ignore [`--verbose`](#--verbose).

### `--list-rendering-backends` {#--list-rendering-backends}

List available _rendering backends_ and exit. Ignore [`--verbose`](#--verbose).

### `--config`_`=<config file path/name/stem>`_  <small>(_string_, default: `config`)</small> {#--config}

Specify the [configuration file](CONFIGURATION_FILE.md) to use. Supports absolute/relative path but also filename/filestem to search for in standard configuration file locations.

### `--no-config`  <small>(_bool_, default: `false`)</small> {#--no-config}

Do not read any configuration file and consider only the command line options.

### `--no-render`  <small>(_bool_, default: `false`)</small> {#--no-render}

Do not render anything and quit just after loading the first file, use with --verbose to recover information about a file.

### `--max-size`_`=<size in MiB>`_  <small>(_int_, default: `-1`)</small> {#--max-size}

Prevent F3D to load a file bigger than the provided size in Mib, leave empty for unlimited, useful for thumbnails.

### `--watch`  <small>(_bool_, default: `false`)</small> {#--watch}

Watch current file and automatically reload it whenever it is modified on disk. Consider ensuring [`--remove-empty-file-groups`](#--remove-empty-file-groups) is not enabled when using this option.

### `--frame-rate`_`=<fps>`_  <small>(_double_, default: `30.0`)</small> {#--frame-rate}

Frame rate used to refresh animation and other repeated tasks (watch, UI). Does not impact rendering frame rate.

### `--load-plugins`_`=<paths or names>`_  <small>(_string_)</small> {#--load-plugins}

List of plugins to load separated with a comma. Official plugins are `alembic`, `assimp`, `draco`, `hdf`, `occt`, `usd`, `vdb`. See [plugins](PLUGINS.md) for more info.

### `--scan-plugins` {#--scan-plugins}

Scan standard directories for plugins and display their names, results may be incomplete. See [plugins](PLUGINS.md) for more info.

### `--screenshot-filename`_`=<png file>`_  <small>(_string_, default: `{app}/{model}_{n}.png`)</small> {#--screenshot-filename}

Filename to save [screenshots](INTERACTIONS.md#taking-screenshots) to. Can use [template variables](#filename-templating). Supports relative paths [as described](INTERACTIONS.md#taking-screenshots).

### `--rendering-backend`_`=<auto|egl|osmesa|glx|wgl>`_  <small>(_string_, default: `auto`)</small> {#--rendering-backend}

Rendering backend to load, `auto` means to let F3D pick the correct one for you depending on your system capabilities. Use `egl` or `osmesa` on linux to force headless rendering.

### `-D`, `--define`_`=<libf3d.option=value>`_  <small>(_special_)</small> {#--define}

A repeatable option to set [libf3d](../libf3d/OPTIONS.md) and [reader](SUPPORTED_FORMATS.md#reader-options) option manually. May trigger unexpected behavior.

### `-R`, `--reset`_`=<libf3d.option>`_  <small>(_special_)</small> {#--reset}

A repeatable option to reset [libf3d options](../libf3d/OPTIONS.md) manually. Useful when overidding option set in [configuration files](CONFIGURATION_FILE.md).

## General Options

### `--verbose`_`=<[debug|info|warning|error|quiet]>`_  <small>(_string_, default: `info`)</small> {#--verbose}

Set _verbose_ level, in order to provide more information about the loaded data in the output. If no level is provided, assume `debug`. Option parsing may ignore this flag.

### `--progress`  <small>(_bool_, default: `false`)</small> {#--progress}

Show a _progress bar_ when loading the file.

### `--animation-progress`  <small>(_bool_, default: `false`)</small> {#--animation-progress}

Show a _progress bar_ when playing the animation.

### `--multi-file-mode`_`=<single|all| dir>`_  <small>(_string_, default: `single`)</small> {#--multi-file-mode}

When opening multiple files, select if they should be shown all at once (`all`), one by one (`single`), or by directory (`dir`). Configuration files for all loaded files will be used in the order they are provided.

### `--multi-file-regex`_`=<regex>`_  <small>(_string_)</small> {#--multi-file-regex}

Regular expression pattern to group files. Captured groups are replaced with `*` so that, for example, the pattern `part(\d+)` would group files `foo-part1.xyz` and `foo-part2.xyz` together as `foo-part*.xyz`.

### `--recursive-dir-add`  <small>(_bool_, default: `false`)</small> {#--recursive-dir-add}

When opening a directory, choose if they should be recursively added or not. If not, only the files in the provided directory will be added.

### `--remove-empty-file-groups`  <small>(_bool_, default: `false`)</small> {#--remove-empty-file-groups}

When loading a file group, if they results in an empty scene, remove the file group and load the next file group.

### `--up`_`=<direction>`_  <small>(_direction_, default: `+Y`)</small> {#--up}

Define the Up direction.

### `-x`, `--axis`  <small>(_bool_, default: `false`)</small> {#--axis}

Show _axes_ as a trihedron in the scene.

### `-g`, `--grid`  <small>(_bool_, default: `false`)</small> {#--grid}

Show _a grid_ aligned with the horizontal (orthogonal to the Up direction) plane.

### `--grid-unit`_`=<length>`_  <small>(_double_)</small> {#--grid-unit}

Set the size of the _unit square_ for the grid. If not set (the default) a suitable value will be automatically computed.

### `--grid-subdivisions`_`=<count>`_  <small>(_int_, default: `10`)</small> {#--grid-subdivisions}

Set the number of subdivisions for the grid.

### `--grid-color`_`=<color>`_  <small>(_color_, default: `0,0,0`)</small> {#--grid-color}

Set the color grid lines.

### `--axes-grid`  <small>(_bool_, default: `false`)</small> {#--axes-grid}

Show _axes grid_ in the scene.

### `-e`, `--edges`  <small>(_bool_, default: `false`)</small> {#--edges}

Show the _cell edges_.

### `--armature`  <small>(_bool_, default: `false`)</small> {#--armature}

Show armature if present (glTF only).

### `--camera-index`_`=<idx>`_  <small>(_int_)</small> {#--camera-index}

Select the scene camera to use when available in the file. Automatically computed by default.

### `-k`, `--trackball`  <small>(_bool_, default: `false`)</small> {#--trackball}

Enable trackball interaction.

### `--invert-zoom`  <small>(_bool_, default: `false`)</small> {#--invert-zoom}

Invert zoom direction with right mouse click.

### `--animation-autoplay`  <small>(_bool_, default: `false`)</small> {#--animation-autoplay}

Automatically start animation.

### `--animation-indices`_`=<idx1,idx2>`_  <small>(_vector\<int\>_, default: `0`)</small> {#--animation-indices}

Select the animations to show.
Any negative value all animations.
The default scene always has at most one animation.

### `--animation-speed-factor`_`=<ratio>`_  <small>(_ratio_, default: `1`)</small> {#--animation-speed-factor}

Set the animation speed factor to slow, speed up or even invert animation time.

### `--animation-time`_`=<time>`_  <small>(_double_)</small> {#--animation-time}

Set the animation time to load.

### `--font-file`_`=<font file>`_  <small>(_path_)</small> {#--font-file}

Use the provided FreeType compatible font file to display text.
Can be useful to display non-ASCII filenames.

### `--font-scale`_`=<ratio>`_  <small>(_ratio_, default: `1.0`)</small> {#--font-scale}

Scale fonts. Useful for HiDPI displays.

### `--command-script`_`=<command script>`_  <small>(_script_)</small> {#--command-script}

Provide a script file containing a list of [commands](COMMANDS.md) to be executed sequentially.
Allows automation of multiple commands or pre-defined tasks.

### `--backdrop-opacity`_`=<opacity>`_  <small>(_double_, default: `0.9`)</small> {#--backdrop-opacity}

Set the opacity of the backdrop behind text information such as FPS, filename, metadata or cheatsheet.

## Material options

### `-o`, `--point-sprites`  <small>(_bool_, default: `false`)</small> {#--point-sprites}

Show sphere _points sprites_ instead of the geometry.

### `--point-sprites-type`_`=<sphere|gaussian>`_  <small>(_string_, default: `sphere`)</small> {#--point-sprites-type}

Set the splat type when showing point sprites.

### `--point-sprites-size`_`=<size>`_  <small>(_double_, default: `10.0`)</small> {#--point-sprites-size}

Set the _size_ of point sprites.

### `--point-size`_`=<size>`_  <small>(_double_)</small> {#--point-size}

Set the _size_ of points when showing vertices. Model-specified by default.

### `--line-width`_`=<size>`_  <small>(_double_)</small> {#--line-width}

Set the _width_ of lines when showing edges. Model-specified by default.

### `--backface-type`_`=<visible|hidden>`_  <small>(_string_)</small> {#--backface-type}

Set the Backface type. Model-specified by default.

### `--color`_`=<color>`_  <small>(_color_)</small> {#--color}

Set a _color_ on the geometry. Multiplied with the base color texture when present.
Model-specified by default.

### `--opacity`_`=<opacity>`_  <small>(_double_)</small> {#--opacity}

Set _opacity_ on the geometry. Multiplied with the base color texture when present.
Model-specified by default. Usually used with [`--translucency-support`](#--translucency-support).

### `--roughness`_`=<roughness>`_  <small>(_double_)</small> {#--roughness}

Set the _roughness coefficient_ on the geometry (0.0-1.0). Multiplied with the material texture when present.
Model-specified by default.

### `--metallic`_`=<metallic>`_  <small>(_double_)</small> {#--metallic}

Set the _metallic coefficient_ on the geometry (0.0-1.0). Multiplied with the material texture when present.
Model-specified by default.

### `--base-ior`_`=<base-ior>`_  <small>(_double_)</small> {#--base-ior}

Set the _index of refraction of the base layer_ (1.0-2.5). Model-specified by default.

### `--hdri-file`_`=<HDRI file>`_  <small>(_path_)</small> {#--hdri-file}

Set the _HDRI_ image that can be used as ambient lighting and skybox.
Valid file format are `.hdr`, `.exr`, `.png`, `.jpg`, `.pnm`, `.tiff`, `.bmp`.
If not set, a default is provided.

### `--hdri-ambient`  <small>(_string_)</small> {#--hdri-ambient}

Light the scene using the _HDRI_ image as ambient lighting.
The environment act as a light source and is reflected on the material.

### `--texture-matcap`_`=<texture file>`_  <small>(_path_)</small> {#--texture-matcap}

Set the texture file to control the material capture of the object. All other model options for surfaces are ignored if this is set. Must be in linear color space.
Model-specified by default.

### `--texture-base-color`_`=<texture file>`_  <small>(_path_)</small> {#--texture-base-color}

Set the texture file to control the color of the object. Please note this will be multiplied with the color and opacity options. Must be in sRGB color space.
Model-specified by default.

### `--texture-material`_`=<texture file>`_  <small>(_path_)</small> {#--texture-material}

Set the texture file to control the occlusion, roughness and metallic values of the object. Please note this will be multiplied with the roughness and metallic options, which have impactful default values. To obtain true results, use [`--roughness=1`](#--roughness) and [`--metallic=1`](#--metallic). Must be in linear color space.
Model-specified by default.

### `--texture-emissive`_`=<texture file>`_  <small>(_path_)</small> {#--texture-emissive}

Set the texture file to control the emitted light of the object. Please note this will be multiplied with the emissive factor. Must be in sRGB color space.
Model-specified by default.

### `--emissive-factor`_`=<color>`_  <small>(_color_)</small> {#--emissive-factor}

Set the emissive factor. This value is multiplied with the emissive color when an emissive texture is present.
Model-specified by default.

### `--texture-normal`_`=<texture file>`_  <small>(_path_)</small> {#--texture-normal}

Set the texture file to control the normal map of the object. Must be in sRGB color space.
Model-specified by default.

### `--normal-scale`_`=<color>`_  <small>(_double_)</small> {#--normal-scale}

Set the normal scale. This value affects the strength of the normal deviation from the normal texture.
Model-specified by default.

### `--textures-transform`_`=<transform2d>`_  <small>(_transform2d_)</small> {#--textures-transform}

Set the 2d transform to use for all textures applied to the model.
Importer may set a default value depending on file type. If a default value exists, the default value is multiplied by the provided transform.

## Window options

### `--background-color`_`=<color>`_  <small>(_color_, default: `0.2, 0.2, 0.2`)</small> {#--background-color}

Set the window _background color_.
Ignored if [`--hdri-skybox`](#--hdri-skybox) is enabled.

### `--resolution`_`=<width,height>`_  <small>(_vector\<double\>_, default: `1000, 600`)</small> {#--resolution}

Set the _window resolution_.

### `--position`_`=<x,y>`_  <small>(_vector\<double\>_)</small> {#--position}

Set the _window position_ (top left corner) , in pixels, starting from the top left of your screens.

### `-z`, `--fps`  <small>(_bool_, default: `false`)</small> {#--fps}

Display a rendering _frame per second counter_.

### `-n`, `--filename`  <small>(_bool_, default: `false`)</small> {#--filename}

Display the _name of the file_ on top of the window.

### `-m`, `--metadata`  <small>(_bool_, default: `false`)</small> {#--metadata}

Display the _metadata_.

### `--hdri-skybox`  <small>(_bool_, default: `false`)</small> {#--hdri-skybox}

Show the HDRI as a skybox. Overrides [`--background-color`](#--background-color) and [`--no-background`](#--no-background).

### `-u`, `--blur-background`  <small>(_bool_, default: `false`)</small> {#--blur-background}

Blur background.
Useful with a HDRI skybox.

### `--blur-coc`  <small>(_double_, default: `20`)</small> {#--blur-coc}

Blur circle of confusion radius.

### `--light-intensity`  <small>(_double_, default: `1.0`)</small> {#--light-intensity}

_Adjust the intensity_ of every light in the scene.

## Scientific visualization options

### `-s`, `--scalar-coloring`  <small>(_bool_, default: `false`)</small> {#--scalar-coloring}

Enable scalar coloring if present in the file. If [`--coloring-array`](#--coloring-array) is not set, the first in alphabetical order will be picked if any are available.

### `--coloring-array`_`=<array_name>`_  <small>(_string_)</small> {#--coloring-array}

The coloring array name to use when coloring.
Use [`--verbose`](#--verbose) to recover the usable array names.

### `-y`, `--comp`_`=<comp_index>`_  <small>(_int_, default: `-1`)</small> {#--comp}

Specify the _component from the scalar_ array to color with.
Use with the scalar option. -1 means _magnitude_. -2 or the short option, -y, means _direct values_.
When using _direct values_, components are used as L, LA, RGB, RGBA values depending on the number of components.

### `-c`, `--cells`  <small>(_bool_, default: `false`)</small> {#--cells}

Specify that the scalar array is to be found _on the cells_ instead of on the points.
Use with the scalar option.

### `--range`_`=<min,max>`_  <small>(_vector\<double\>_)</small> {#--range}

Set the _coloring range_. Automatically computed by default.
Use with the scalar option.

### `-b`, `--bar`  <small>(_bool_, default: `false`)</small> {#--bar}

Show _scalar bar_ of the coloring by array.
Use with the scalar option.

### `--colormap-file`_`=<name>`_  <small>(_string_)</small> {#--colormap-file}

Set a _colormap file for the coloring_.
See [color maps](COLOR_MAPS.md).
Use with the scalar option.

### `--colormap`_`=<colormap>`_  <small>(_colormap_)</small> {#--colormap}

Set a _custom colormap for the coloring_.See [colormap parsing](PARSING.md#colormap) for details.
Ignored if [`--colormap-file`](#--colormap-file) option is specified.
Use with the scalar option.

### `--colormap-discretization`_`=<colors>`_  <small>(_int_)</small> {#--colormap-discretization}

Set the number of distinct colors from [1, N] will be used in the colormap. Any values outside the valid range will result in smooth shading.

### `-v`, `--volume`  <small>(_bool_, default: `false`)</small> {#--volume}

Enable _volume rendering_. It is only functional for 3D image data (VTKXMLVTI, DICOM, NRRD, MetaImage files) and will display nothing with other formats. It forces coloring.

### `-i`, `--inverse`  <small>(_bool_, default: `false`)</small> {#--inverse}

Inverse the linear opacity function used for volume rendering.

## Camera configuration options

### `--camera-position`_`=<X,Y,Z>`_  <small>(_vector\<double\>_)</small> {#--camera-position}

Set the camera position, overrides [`--camera-direction`](#--camera-direction) and [`--camera-zoom-factor`](#--camera-zoom-factor).

### `--camera-focal-point`_`=<X,Y,Z>`_  <small>(_vector\<double\>_)</small> {#--camera-focal-point}

Set the camera focal point.

### `--camera-view-up`_`=<direction>`_  <small>(_direction_)</small> {#--camera-view-up}

Set the camera view up vector. Will be orthogonalized.

### `--camera-view-angle`_`=<angle>`_  <small>(_double_)</small> {#--camera-view-angle}

Set the camera view angle, a strictly positive value in degrees.

### `--camera-direction`_`=<direction>`_  <small>(_direction_)</small> {#--camera-direction}

Set the camera direction, looking at the focal point.

### `--camera-zoom-factor`_`=<factor>`_  <small>(_double_)</small> {#--camera-zoom-factor}

Set the camera zoom factor relative to the autozoom on data, a strictly positive value.

### `--camera-azimuth-angle`_`=<angle>`_  <small>(_double_, default: `0.0`)</small> {#--camera-azimuth-angle}

Apply an azimuth transformation to the camera, in degrees, added after other camera options.

### `--camera-elevation-angle`_`=<angle>`_  <small>(_double_, default: `0.0`)</small> {#--camera-elevation-angle}

Apply an elevation transformation to the camera, in degrees, added after other camera options.

### `--camera-orthographic`  <small>(_bool_)</small> {#--camera-orthographic}

Set the camera to use the orthographic projection. Model-specified by default.

## Raytracing options

### `-r`, `--raytracing`  <small>(_bool_, default: `false`)</small> {#--raytracing}

Enable _OSPRay raytracing_. Requires OSPRay raytracing to be enabled in the linked VTK dependency.

### `--samples`_`=<samples>`_  <small>(_int_, default: `5`)</small> {#--samples}

Set the number of _samples per pixel_ when using raytracing.

### `-d`, `--denoise`  <small>(_bool_, default: `false`)</small> {#--denoise}

_Denoise_ the image when using raytracing.

## PostFX (OpenGL) options

### `-p`, `--translucency-support`  <small>(_bool_, default: `false`)</small> {#--translucency-support}

Enable _translucency support_. This is a technique used to correctly render translucent objects.

### `-q`, `--ambient-occlusion`  <small>(_bool_, default: `false`)</small> {#--ambient-occlusion}

Enable _ambient occlusion_. This is a technique used to improve the depth perception of the object.

### `-a`, `--anti-aliasing`  <small>(_bool_, default: `false`)</small> {#--anti-aliasing}

Enable _anti-aliasing_. This technique is used to reduce aliasing.

### `--anti-aliasing-mode`  <small>(_string_, default: `fxaa`)</small> {#--anti-aliasing-mode}

Anti-aliasing method (`fxaa`: fast, `ssaa`: quality, `taa`: balanced)

:::warning

`taa` forces rendering of the scene at regular interval and will introduce ghosting artifacts on animated scenes.
It also doesn't work with offscreen rendering (when using [`--output`](#--output) option)

:::
### `-t`, `--tone-mapping`  <small>(_bool_, default: `false`)</small> {#--tone-mapping}

Enable generic filmic _Tone Mapping Pass_. This technique is used to map colors properly to the monitor colors.

### `--final-shader`  <small>(_string_)</small> {#--final-shader}

Add a final shader to the output image. See the [dedicated documentation](FINAL_SHADER.md) for more details.

## Testing options

### `--ref`_`=<png file>`_  <small>(_string_)</small> {#--ref}

Render and compare with the provided _reference image_, for testing purposes. Use with output option to generate new baselines and diff images.

### `--ref-threshold`_`=<threshold>`_  <small>(_double_, default: `0.04`)</small> {#--ref-threshold}

Set the _comparison threshold_ to trigger a test failure or success. The default (0.04) correspond to almost visually identical images.

### `--interaction-test-record`_`=<log file>`_  <small>(_string_)</small> {#--interaction-test-record}

Path to an interaction log file to _record interaction events_ to.

### `--interaction-test-play`_`=<log file>`_  <small>(_string_)</small> {#--interaction-test-play}

Path to an interaction log file to _play interactions events_ from when loading a file.

## Rendering options precedence

Some rendering options are not compatible between them, here is the precedence order if several are provided:

- Raytracing ([`-r`](#--raytracing))
- Volume ([`-v`](#--volume))
- Point Sprites ([`-o`](#--point-sprites))

## Options syntax

To turn on/off boolean options, it is possible to write `--option=true` and `--option=false`, eg `--points-sprites=false`.

As documented, the `--option=value` syntax should be preferred. The syntax `--option value` can have unintended effect with positional arguments.

The [`-R`](#--reset) short option has a special syntax: [`-Rlibf3d.option`](#--reset) but can also be used with [`--reset=libf3d.option`](#--reset)

The [`-D/--define`](#--define) option has a special syntax: [`-Dlibf3d.option=value`](#--define) or [`--define=libf3d.option=value`](#--define).

All options are parsed according to their type, see the [parsing documentation](PARSING.md) for more details.

## Filename templating

The destination filename used by [`--output`](#--output) or to save screenshots using [`--screenshot-filename`](#--screenshot-filename) can use the following template variables:

- `{app}`: application name (ie. `F3D`)
- `{version}`: application version (eg. `2.4.0`)
- `{version_full}`: full application version (eg. `2.4.0-abcdefgh`)
- `{model}`: current model filename without extension (eg. `foo` for `/home/user/foo.glb`)
- `{model.ext}`: current model filename with extension (eg. `foo.glb` for `/home/user/foo.glb`)
- `{model_ext}`: current model filename extension (eg. `glb` for `/home/user/foo.glb`)
- `{date}`: current date in YYYYMMDD format
- `{date:format}`: current date as per C++'s `std::put_time` format
- `{n}`: auto-incremented number to make filename unique (up to 1000000)
- `{n:2}`, `{n:3}`, ...: zero-padded auto-incremented number to make filename unique (up to 1000000)
- variable names can be escaped by doubling the braces (eg. use `{{model}}.png` to output `{model}.png` without the model name being substituted)

For example the screenshot filename is configured as `{app}/{model}_{n}.png` by default, meaning that, assuming the model `hello.glb` is being viewed,
consecutive screenshots are going to be saved as `F3D/hello_1.png`, `F3D/hello_2.png`, `F3D/hello_3.png`, ...

Model related variables will be replaced by `no_file` if no file is loaded and `multi_file` if multiple files are loaded using the `multi-file-mode` option.

## HDRI Caches

When using HDRI related options, F3D will create and use a cache directory to store related data in order to speed up rendering.
These cache files can be safely removed at the cost of recomputing them on next use.

The cache directory location is as follows, in order, using the first defined environment variables:

- Windows: `%LOCALAPPDATA%\f3d`
- Linux: `${XDG_CACHE_HOME}/f3d`,`${HOME}/.cache/f3d`
- macOS: `${HOME}/Library/Caches/f3d`
