# Command-line options

Control F3D behavior from the command-line using the following options.
Option headings use command-line spelling and show the accepted value type, default value, and implicit value when those exist.
In the [configuration files](06-CONFIGURATION_FILE.md), use command-line option names without the leading `--`, or use the libf3d option names documented in the [libf3d options reference](../libf3d/03-OPTIONS.md).

## Application options

### `--input`_`=<input file>`_  <small>(_string_)</small> {/* #--input */}

The input file or files to read, can also be provided as a positional argument. Support directories as well.
If `-` is specified instead of a filename, F3D streams the file from stdin and waits until a stream is provided.

### `--output`_`=<png file>`_  <small>(_string_)</small> {/* #--output */}

Instead of showing a render view and render into it, _render directly into a png file_. When used with the [`--reference`](#--reference) option, only outputs on failure. If `-` is specified instead of a filename, F3D streams the PNG file to stdout. You can also use [template variables](#filename-templating). When using the `{frame}` variable, F3D exports multiple animation frames (see [Export animation frames](05-ANIMATIONS.md#export-animation-frames)).

### `--output-video`_`=<video file>`_  <small>(_string_)</small> {/* #--output-video */}

Instead of showing a render view and render to it, _render directly into a video file_. If `-` is specified instead of a filename, the video file is streamed to the stdout. The resulting file contains raw video frames and can be converted to a video container (e.g. MP4) using FFmpeg for example.

### `--no-background`  <small>(_bool_, default: `false`)</small> {/* #--no-background */}

Use with --output to output a png file with a transparent background.

### `--no-cache`  <small>(_bool_, default: `false`)</small> {/* #--no-cache */}

No [cache](#caches) is used (both reading and writing).
Cache is currently used to save and restore last window size and position.
It's also used to save and restore HDRI related information.

### `-h`, `--help` {/* #--help */}

Print _help_ and exit. Ignore [`--verbose`](#--verbose).

### `--version` {/* #--version */}

Show _version_ information and exit. Ignore [`--verbose`](#--verbose).

### `--list-readers` {/* #--list-readers */}

List available _readers_ and exit. Ignore [`--verbose`](#--verbose).

### `--force-reader`_`=<reader>`_  <small>(_string_)</small> {/* #--force-reader */}

Force a specific [reader](02-SUPPORTED_FORMATS.md) to be used, disregarding the file extension and file content.

### `--skip-content-check`  <small>(_bool_, default: `false`)</small> {/* #--skip-content-check */}

Select reader to read file without checking its header content, but only based on the file extension.

### `--list-bindings` {/* #--list-bindings */}

List available _bindings_ and exit. Ignore [`--verbose`](#--verbose).

### `--list-rendering-backends` {/* #--list-rendering-backends */}

List available _rendering backends_ and exit. Ignore [`--verbose`](#--verbose).

### `--list-video-encoders` {/* #--list-video-encoders */}

List available _video encoders_ and exit. Ignore [`--verbose`](#--verbose).

### `--video-encoder`  <small>(_string_)</small> {/* #--video-encoder */}

Specify the encoder to use when using [`--output-video`](#--output-video).
Use [`--list-video-encoders`](#--list-video-encoders) to list encoders available on your system.

### `--video-bitrate`  <small>(_double_, default: `5.0`)</small> {/* #--video-bitrate */}

Specify the video encoder bitrate in Mbps.
Higher means better quality but larger video stream.

### `--video-low-latency`  <small>(_bool_, default: `false`)</small> {/* #--video-low-latency */}

Specify if the video encoder should reduce latency by emitting packets as soon as possible.
Set this to true in case of real time streaming, otherwise leave it to false to have the best quality possible.

### `--config`_`=<config file path/name/stem>`_  <small>(_string_, default: `config`)</small> {/* #--config */}

Specify the [configuration file](06-CONFIGURATION_FILE.md) to use. Supports absolute/relative path but also filename/filestem to search for in standard configuration file locations.

### `--no-config`  <small>(_bool_, default: `false`)</small> {/* #--no-config */}

Do not read any configuration file and consider only the command-line options.

### `--no-render`  <small>(_bool_, default: `false`)</small> {/* #--no-render */}

Do not render anything and quit just after loading the first file, use with [`--verbose`](#--verbose) to recover information about a file.

### `--load-statefile`_`=<file path>`_  <small>(_string_)</small> {/* #--load-statefile */}

Restore the F3D state from a statefile right after starting, then continue running. F3D applies the statefile above configuration files but below command-line options. An explicit [`--resolution`](#--resolution) overrides the restored window size, and an explicit [`--position`](#--position) overrides the restored window position. If `-` is specified instead of a filename, F3D reads the statefile from the standard input. If the file does not exist, F3D skips it with a warning.

### `--save-statefile`_`=<file path>`_  <small>(_string_)</small> {/* #--save-statefile */}

Save the F3D state to a statefile right after loading, then continue running. The saved state includes the options, camera, window size and all file groups, including the ones not currently loaded. Supports the same [template variables](#filename-templating) as [`--output`](#--output). If `-` is specified instead of a filename, F3D writes the statefile to the standard output.

### `--statefile-filename`_`=<file path>`_  <small>(_string_, default: empty)</small> {/* #--statefile-filename */}

Default filename used by the `save_statefile` and `load_statefile` [commands](07-COMMANDS.md) when none is provided, resolved relative to the current working directory. Supports the same [template variables](#filename-templating) as [`--output`](#--output). If `-` is specified instead of a filename, F3D writes the statefile to the standard output (save) or reads from the standard input (load). When left empty, the `save_statefile` and `load_statefile` commands fall back to a default filename; picking a file through a dialog is instead available with the dedicated `save_statefile_dialog` and `load_statefile_dialog` commands (requires a build with the `tinyfiledialogs` module).

### `--max-size`_`=<size in MiB>`_  <small>(_int_, default: `-1`)</small> {/* #--max-size */}

Prevent F3D to load a file bigger than the provided size in Mib, leave empty for unlimited, useful for thumbnails.

### `--watch`  <small>(_bool_, default: `false`)</small> {/* #--watch */}

Watch current file and automatically reload it whenever it is modified on disk. Consider ensuring [`--remove-empty-file-groups`](#--remove-empty-file-groups) is not enabled when using this option.

### `--frame-rate`_`=<fps>`_  <small>(_double_, default: `30.0`)</small> {/* #--frame-rate */}

Frame rate used to refresh animation and other repeated tasks (watch, UI). Does not impact rendering frame rate.

### `--load-plugins`_`=<paths or names>`_  <small>(_string_)</small> {/* #--load-plugins */}

List of plugins to load separated with a comma. Official plugins are `alembic`, `assimp`, `draco`, `hdf`, `occt`, `pdal`, `usd`, `vdb`, `webifc`. See the [plugin documentation](13-PLUGINS.md) for more info.

### `--plugins-path`_`=<path>`_  <small>(_string_)</small> {/* #--plugins-path */}

Supplementary path to specify where to load plugins from, on top of [default paths](13-PLUGINS.md#supported-plugins).

### `--scan-plugins` {/* #--scan-plugins */}

Scan standard directories for plugins and display their names. Results may be incomplete. See the [plugin documentation](13-PLUGINS.md) for more info.

### `--screenshot-filename`_`=<png file>`_  <small>(_string_, default: `{app}/{model}_{n}.png`)</small> {/* #--screenshot-filename */}

Filename to save [screenshots](04-INTERACTIONS.md#take-screenshots) to. Can use [template variables](#filename-templating). Supports [relative screenshot paths](04-INTERACTIONS.md#take-screenshots).

### `--rendering-backend`_`=<auto|egl|osmesa|glx|wgl>`_  <small>(_string_, default: `auto`)</small> {/* #--rendering-backend */}

Rendering backend to load, `auto` means to let F3D pick the correct one for you depending on your system capabilities. Use `egl` or `osmesa` to force headless rendering. See [rendering backends](12-DESKTOP_INTEGRATION.md#rendering-backends).

### `-D`, `--define`_`=<libf3d.option=value>`_  <small>(_special_)</small> {/* #--define */}

A repeatable option to set [libf3d](../libf3d/03-OPTIONS.md) and [reader](02-SUPPORTED_FORMATS.md#reader-options) option manually. May trigger unexpected behavior.

### `-R`, `--reset`_`=<libf3d.option>`_  <small>(_special_)</small> {/* #--reset */}

A repeatable option to reset [libf3d options](../libf3d/03-OPTIONS.md) manually. Useful when overidding option set in [configuration files](06-CONFIGURATION_FILE.md).

## General options

### `--verbose`_`=<[debug|info|warning|error|quiet]>`_  <small>(_string_, default: `info`, implicit: `debug`)</small> {/* #--verbose */}

Set _verbose_ level to provide more information about the loaded data in the output. Error reporting during option parsing may ignore this flag.

### `--loading-progress`  <small>(_bool_, default: `false`)</small> {/* #--loading-progress */}

Show a _progress bar_ when loading the file.

### `--animation-progress`_`=<none|default|advanced>`_  <small>(_string_, default: `none`, implicit: `default`)</small> {/* #--animation-progress */}

Control the _progress bar_ shown when playing the animation. Use `none` (hidden), `default` (only the progress bar, which can be clicked or dragged to jump to a time) or `advanced` (the progress bar plus time range, animation name and current time labels, with a marker for each key frame).

### `--multi-file-mode`_`=<single|all| dir>`_  <small>(_string_, default: `single`)</small> {/* #--multi-file-mode */}

When opening multiple files, select if F3D shows them all at once (`all`), one by one (`single`), or by directory (`dir`). F3D uses configuration files for all loaded files in the order they are provided.

### `--multi-file-regex`_`=<regex>`_  <small>(_string_)</small> {/* #--multi-file-regex */}

Regular expression pattern to group files. Captured groups are replaced with `*` so that, for example, the pattern `part(\d+)` would group files `foo-part1.xyz` and `foo-part2.xyz` together as `foo-part*.xyz`.

### `--recursive-dir-add`  <small>(_bool_, default: `false`)</small> {/* #--recursive-dir-add */}

When opening a directory, choose if F3D adds files recursively. If not, F3D adds only the files in the provided directory.

### `--remove-empty-file-groups`  <small>(_bool_, default: `false`)</small> {/* #--remove-empty-file-groups */}

When loading a file group, if they results in an empty scene, remove the file group and load the next file group.

### `--up`_`=<direction>`_  <small>(_direction_, default: `+Y`)</small> {/* #--up */}

Define the Up direction.

| +Y                                   | +Z                                   |
| ------------------------------------ | ------------------------------------ |
| ![up direction Y](./images/up_y.png) | ![up direction Z](./images/up_z.png) |

### `-x`, `--axis`  <small>(_bool_, default: `false`)</small> {/* #--axis */}

Show _axes_ as a trihedron in the scene.

#### compare

| OFF                                                                     | ON                               |
| ----------------------------------------------------------------------- | -------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![axis on](./images/axis_on.png) |

### `--x-color`  <small>(_color_, default: `f3d_red`)</small> {/* #--x-color */}

Set the X axis color in both widget and grid.

#### compare

| Default                                          | Yellow                                         |
| ------------------------------------------------ | ---------------------------------------------- |
| ![X color default](./images/x_color_default.png) | ![X color yellow](./images/x_color_yellow.png) |

### `--y-color`  <small>(_color_, default: `f3d_green`)</small> {/* #--y-color */}

Set the Y axis color in both widget and grid.

#### compare

| Default                                          | Yellow                                         |
| ------------------------------------------------ | ---------------------------------------------- |
| ![X color default](./images/x_color_default.png) | ![Y color yellow](./images/y_color_yellow.png) |

### `--z-color`  <small>(_color_, default: `f3d_blue`)</small> {/* #--z-color */}

Set the Z axis color in both widget and grid.

#### compare

| Default                                          | Yellow                                         |
| ------------------------------------------------ | ---------------------------------------------- |
| ![X color default](./images/x_color_default.png) | ![Z color yellow](./images/z_color_yellow.png) |

### `-g`, `--grid`  <small>(_bool_, default: `false`)</small> {/* #--grid */}

Show _a grid_ aligned with the horizontal (orthogonal to the Up direction) plane.

#### compare

| OFF                                                                     | ON                               |
| ----------------------------------------------------------------------- | -------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![grid on](./images/grid_on.png) |

### `--grid-unit`_`=<length>`_  <small>(_double_)</small> {/* #--grid-unit */}

Set the size of the _unit square_ for the grid. If not set (the default), F3D automatically computes a suitable value.

#### compare

| Auto                                                 | 2                                        |
| ---------------------------------------------------- | ---------------------------------------- |
| ![grid unit default](./images/grid_unit_default.png) | ![grid unit 2](./images/grid_unit_2.png) |

### `--grid-subdivisions`_`=<count>`_  <small>(_int_, default: `10`)</small> {/* #--grid-subdivisions */}

Set the number of subdivisions for the grid.

#### compare

| 10 (default)                                                         | 4                                                        |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| ![grid subdivisions default](./images/grid_subdivisions_default.png) | ![grid subdivisions 4](./images/grid_subdivisions_4.png) |

### `--grid-color`_`=<color>`_  <small>(_color_, default: `0,0,0`)</small> {/* #--grid-color */}

Set the color grid lines.

#### compare

| Black (default)                                        | Cyan                                             |
| ------------------------------------------------------ | ------------------------------------------------ |
| ![grid color default](./images/grid_color_default.png) | ![grid color cyan](./images/grid_color_cyan.png) |

### `--grid-opacity`_`=<opacity>`_  <small>(_double_, default: `1`)</small> {/* #--grid-opacity */}

Set the opacity for grid lines. Can be set to `0` to show reflection only.

#### compare

| 100% (default)                                         | 0%                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| ![grid reflection on](./images/grid_reflection_on.png) | ![grid reflection no lines](./images/grid_reflection_no_lines.png) |

### `--grid-reflection`_`=<strength>`_  <small>(_double_, default: `0`)</small> {/* #--grid-reflection */}

Set the reflection strength on the grid.

#### compare

| 0 (OFF)                                                  | 0.5                                                    |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![grid reflection off](./images/grid_reflection_off.png) | ![grid reflection on](./images/grid_reflection_on.png) |

### `--grid-absolute`  <small>(_bool_, default: `false`)</small> {/* #--grid-absolute */}

Position the grid at absolute origin instead of below the model.

#### compare

| OFF                                                  | ON                                                 |
| ---------------------------------------------------- | -------------------------------------------------- |
| ![grid absolute off](./images/grid_absolute_off.png) | ![grid absolute on](./images/grid_absolute_on.png) |

### `--axes-grid`  <small>(_bool_, default: `false`)</small> {/* #--axes-grid */}

Show _axes grid_ in the scene.

#### compare

| OFF                                                                     | ON                                         |
| ----------------------------------------------------------------------- | ------------------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![axes grid on](./images/axes_grid_on.png) |

### `-e`, `--edges`  <small>(_bool_, default: `false`)</small> {/* #--edges */}

Show the _cell edges_.

#### compare

| OFF                                                                     | ON                                 |
| ----------------------------------------------------------------------- | ---------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![edges on](./images/edges_on.png) |

### `--armature`  <small>(_bool_, default: `false`)</small> {/* #--armature */}

Show armature if present.

#### compare

| Disabled                                   | Enable                                   |
| ------------------------------------------ | ---------------------------------------- |
| ![armature off](./images/armature_off.png) | ![armature on](./images/armature_on.png) |

### `--camera-index`_`=<idx>`_  <small>(_int_)</small> {/* #--camera-index */}

Select the scene camera to use when available in the file. Automatically computed by default.

### `-k`, `--interaction-style`_`=<default|trackball|2d>`_  <small>(_string_, default: `default`)</small> {/* #--interaction-style */}

Set the interaction style. `default` uses standard 3D interaction, `trackball` enables trackball interaction, `2d` enables 2D interaction mode (pan/zoom only, no rotation). In `2d` mode, the default camera zoom factor is `1.0` (no padding) instead of `0.9`.

### `--invert-zoom`  <small>(_bool_, default: `false`)</small> {/* #--invert-zoom */}

Invert zoom direction with right mouse click.

### `--animation-autoplay`  <small>(_bool_, default: `false`)</small> {/* #--animation-autoplay */}

Automatically start animation.

### `--animation-indices`_`=<idx1,idx2>`_  <small>(_vector\<int\>_, default: `0`)</small> {/* #--animation-indices */}

Select the animations to show.
Any negative value all animations.
The default scene always has at most one animation.

### `--animation-speed-factor`_`=<ratio>`_  <small>(_ratio_, default: `1`)</small> {/* #--animation-speed-factor */}

Set the animation speed factor to slow, speed up or even invert animation time.

### `--animation-time`_`=<time>`_  <small>(_double_)</small> {/* #--animation-time */}

Set the animation time to load.

### `--font-file`_`=<font file>`_  <small>(_path_)</small> {/* #--font-file */}

Use the provided FreeType compatible font file to display text.
Can be useful to display non-ASCII filenames.

### `--font-scale`_`=<ratio>`_  <small>(_ratio_, default: `1.0`)</small> {/* #--font-scale */}

Scale fonts. Useful for HiDPI displays.

#### compare

| 1                                          | 2                                          |
| ------------------------------------------ | ------------------------------------------ |
| ![font scale 1](./images/font_scale_1.png) | ![font scale 2](./images/font_scale_2.png) |

### `--font-color`_`=<color>`_  <small>(_color_, default: `0.957,0.957,0.957`)</small> {/* #--font-color */}

Set font color. Defaults to #F4F4F4(F3DWhite).

#### compare

| Default                                                | Red (1,0,0)                                    |
| ------------------------------------------------------ | ---------------------------------------------- |
| ![font color default](./images/font_color_default.png) | ![font color red](./images/font_color_red.png) |

### `--dpi-aware`  <small>(_bool_, default: `false`)</small> {/* #--dpi-aware */}

Scale the _font scale_ and _resolution_ by the display scaling factor.

### `--command-script`_`=<command script>`_  <small>(_script_)</small> {/* #--command-script */}

Provide a script file containing a list of [commands](07-COMMANDS.md) to be executed sequentially.
Allows automation of multiple commands or pre-defined tasks.
Run before [`--interaction-test-play`](#--interaction-test-play).

### `--backdrop-color`_`=<color>`_  <small>(_color_, default: `f3d_black`)</small> {/* #--backdrop-color */}

Set the color of the backdrop behind text information such as FPS Counter, Filename, Metadata, or Cheatsheet.

#### compare

| Default (black)                                                | Navy                                                     |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| ![backdrop color default](./images/backdrop_color_default.png) | ![backdrop color navy](./images/backdrop_color_navy.png) |

### `--backdrop-opacity`_`=<opacity>`_  <small>(_double_, default: `0.9`)</small> {/* #--backdrop-opacity */}

Set the opacity of the backdrop behind text information such as FPS Counter, Filename, Metadata, or Cheatsheet.

#### compare

| Default (0.9)                                                      | 0.2                                                        |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![backdrop opacity default](./images/backdrop_opacity_default.png) | ![backdrop opacity 0.2](./images/backdrop_opacity_0.2.png) |

## Material options

### `--normal-glyphs`  <small>(_bool_, default: `false`)</small> {/* #--normal-glyphs */}

Display arrows that show vertex normals.

#### compare

| OFF                                                                     | ON                                                 |
| ----------------------------------------------------------------------- | -------------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![normal glyphs on](./images/normal_glyphs_on.png) |

### `--normal-glyphs-scale`  <small>(_ratio_, default: `1.0`)</small> {/* #--normal-glyphs-scale */}

Adjusts the scales of normal glyphs.

#### compare

| 0.3                                                              | 0.7                                                              |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![normal glyphs scale 0.3](./images/normal_glyphs_scale_0.3.png) | ![normal glyphs scale 0.7](./images/normal_glyphs_scale_0.7.png) |

### `-o`, `--point-sprites`_`=<none|sphere|gaussian|circle|stddev|bound|cross>`_  <small>(_string_, default: `none`, implicit: `sphere`)</small> {/* #--point-sprites */}

Select _points sprites_ types to show instead of the geometry.

#### compare

| none                                                                    | sphere                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![point sprites sphere](./images/point_sprites_sphere.png) |

### `--point-sprites-size`_`=<size>`_  <small>(_double_, default: `10.0`)</small> {/* #--point-sprites-size */}

Set the _size_ of point sprites.

#### compare

| 5                                                          | 2                                                          |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![point sprites sphere](./images/point_sprites_sphere.png) | ![point sprites size 2](./images/point_sprites_size_2.png) |

### `--point-sprites-absolute-size`  <small>(_bool_, default: `false`)</small> {/* #--point-sprites-absolute-size */}

Do not scale the point sprites size by the scene bounding box.

### `--point-size`_`=<size>`_  <small>(_double_)</small> {/* #--point-size */}

Set the _size_ of points when showing vertices. Model-specified by default.

#### compare

| Default (10)                                 | 3                                          |
| -------------------------------------------- | ------------------------------------------ |
| ![point size 10](./images/point_size_10.png) | ![point size 3](./images/point_size_3.png) |

### `--line-width`_`=<size>`_  <small>(_double_)</small> {/* #--line-width */}

Set the _width_ of lines when showing edges. Model-specified by default.

#### compare

| 1                                          | 4                                          |
| ------------------------------------------ | ------------------------------------------ |
| ![line width 1](./images/line_width_1.png) | ![line width 4](./images/line_width_4.png) |

### `--backface-type`_`=<visible|hidden>`_  <small>(_string_)</small> {/* #--backface-type */}

Set the Backface type. Model-specified by default.

#### compare: The quad on the right is pointing away from the camera.

| visible                                                      | hidden                                                     |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| ![backface type visible](./images/backface_type_visible.png) | ![backface type hidden](./images/backface_type_hidden.png) |

### `--color`_`=<color>`_  <small>(_color_)</small> {/* #--color */}

Set a _color_ on the geometry. Multiplied with the base color texture when present.
Model-specified by default. Ignored if [`--coloring-mode`](#--coloring-mode) is not `material`.

#### compare

| red                                  | blue                                   |
| ------------------------------------ | -------------------------------------- |
| ![color red](./images/color_red.png) | ![color blue](./images/color_blue.png) |

### `--opacity`_`=<opacity>`_  <small>(_double_)</small> {/* #--opacity */}

Set _opacity_ on the geometry. Multiplied with the base color texture when present.
Model-specified by default. Usually used with [`--blending`](#--blending).

#### compare

| 1                                    | 0.2                                      |
| ------------------------------------ | ---------------------------------------- |
| ![opacity 1](./images/opacity_1.png) | ![opacity 0.2](./images/opacity_0.2.png) |

### `--roughness`_`=<roughness>`_  <small>(_double_)</small> {/* #--roughness */}

Set the _roughness coefficient_ on the geometry (0.0-1.0). Multiplied with the material texture when present.
Model-specified by default.

#### compare

| 0.2                                          | 0.8                                          |
| -------------------------------------------- | -------------------------------------------- |
| ![roughness 0.2](./images/roughness_0.2.png) | ![roughness 0.8](./images/roughness_0.8.png) |

### `--metallic`_`=<metallic>`_  <small>(_double_)</small> {/* #--metallic */}

Set the _metallic coefficient_ on the geometry (0.0-1.0). Multiplied with the material texture when present.
Model-specified by default.

#### compare

| 0                                      | 1                                      |
| -------------------------------------- | -------------------------------------- |
| ![metallic 0](./images/metallic_0.png) | ![metallic 1](./images/metallic_1.png) |

### `--base-ior`_`=<base-ior>`_  <small>(_double_)</small> {/* #--base-ior */}

Set the _index of refraction of the base layer_ (1.0-2.5). Model-specified by default.

#### compare

| 1.5 (default)                                      | 2.5                                        |
| -------------------------------------------------- | ------------------------------------------ |
| ![base IOR default](./images/base_ior_default.png) | ![base IOR 2.5](./images/base_ior_2.5.png) |

### `--hdri-file`_`=<HDRI file>`_  <small>(_path_)</small> {/* #--hdri-file */}

Set the _HDRI_ image to use as ambient lighting and skybox.
Valid file format are `.hdr`, `.exr`, `.png`, `.jpg`, `.pnm`, `.tiff`, `.bmp`.
If not set, a default is provided.

### `-f`, `--hdri-ambient`  <small>(_bool_, default: `false`)</small> {/* #--hdri-ambient */}

Light the scene using the _HDRI_ image as ambient lighting.
The environment act as a light source and is reflected on the material.

#### compare

| OFF                                                | ON                                               |
| -------------------------------------------------- | ------------------------------------------------ |
| ![HDRI ambient off](./images/hdri_ambient_off.png) | ![HDRI ambient on](./images/hdri_ambient_on.png) |

### `--texture-matcap`_`=<texture file>`_  <small>(_path_)</small> {/* #--texture-matcap */}

Set the texture file to control the material capture of the object. All other model options for surfaces are ignored if this is set. Must be in linear color space.
Model-specified by default.

#### compare

| OFF                                                                     | ON (skin.png)                        |
| ----------------------------------------------------------------------- | ------------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![matcap on](./images/matcap_on.png) |

### `--texture-base-color`_`=<texture file>`_  <small>(_path_)</small> {/* #--texture-base-color */}

Set the texture file to control the color of the object. F3D multiplies this texture with the color and opacity options. Must be in sRGB color space.
Model-specified by default. Set an empty path to remove the model-specified texture.

#### compare

| OFF                                                            | ON                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| ![texture base color off](./images/texture_base_color_off.png) | ![texture base color on](./images/texture_base_color_on.png) |

### `--texture-material`_`=<texture file>`_  <small>(_path_)</small> {/* #--texture-material */}

Set the texture file to control the occlusion, roughness and metallic values of the object. F3D multiplies this texture with the roughness and metallic options, which have impactful default values. To obtain true results, use [`--roughness=1`](#--roughness) and [`--metallic=1`](#--metallic). Must be in linear color space.
Model-specified by default. Set an empty path to remove the model-specified texture.

#### compare

| OFF                                                        | ON                                                       |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| ![texture material off](./images/texture_material_off.png) | ![texture material on](./images/texture_material_on.png) |

### `--texture-emissive`_`=<texture file>`_  <small>(_path_)</small> {/* #--texture-emissive */}

Set the texture file to control the emitted light of the object. F3D multiplies this texture with the emissive factor. Must be in sRGB color space.
Model-specified by default. Set an empty path to remove the model-specified texture.

#### compare

| OFF                                                        | ON                                                       |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| ![texture emissive off](./images/texture_emissive_off.png) | ![texture emissive on](./images/texture_emissive_on.png) |

### `--emissive-factor`_`=<color>`_  <small>(_color_)</small> {/* #--emissive-factor */}

Set the emissive factor. This value is multiplied with the emissive color when an emissive texture is present.
Model-specified by default.

#### compare

| OFF                                                                     | Red (2.0, 0.1, 0.1)                                      |
| ----------------------------------------------------------------------- | -------------------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![emissive factor red](./images/emissive_factor_red.png) |

### `--texture-normal`_`=<texture file>`_  <small>(_path_)</small> {/* #--texture-normal */}

Set the texture file to control the normal map of the object. Must be in sRGB color space.
Model-specified by default. Set an empty path to remove the model-specified texture.

#### compare

| OFF                                                    | ON                                                   |
| ------------------------------------------------------ | ---------------------------------------------------- |
| ![texture normal off](./images/texture_normal_off.png) | ![texture normal on](./images/texture_normal_on.png) |

### `--normal-scale`_`=<factor>`_  <small>(_double_)</small> {/* #--normal-scale */}

Set the normal scale. This value affects the strength of the normal deviation from the normal texture.
Model-specified by default.

#### compare

| 1                                                                       | 2                                              |
| ----------------------------------------------------------------------- | ---------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![normal scale 2](./images/normal_scale_2.png) |

### `--textures-transform`_`=<transform2d>`_  <small>(_transform2d_)</small> {/* #--textures-transform */}

Set the 2d transform to use for all textures applied to the model.
The reader may set a default value depending on the file format. If a default value exists, F3D multiplies it by the provided transform.

#### compare

| None                                                                 | Rotated by 10˚                                                         |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![texture transform default](./images/texture_transform_default.png) | ![texture transform rotation](./images/texture_transform_rotation.png) |

### `--checkerboard`  <small>(_bool_, default: `false`)</small> {/* #--checkerboard */}

Override model's texture with a checkerboard texture. Anti-aliasing is recommended.

#### compare

| OFF                                                                     | ON                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![checkerboard on](./images/checkerboard_on.png) |

### `--unlit`  <small>(_bool_)</small> {/* #--unlit */}

Override model's lighting configuration.
If the value is true, F3D applies no shading and the model is unlit.

#### compare

| OFF                                                                     | ON                                 |
| ----------------------------------------------------------------------- | ---------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![unlit on](./images/unlit_on.png) |

## Window options

### `--background-color`_`=<color>`_  <small>(_color_, default: `0.2, 0.2, 0.2`)</small> {/* #--background-color */}

Set the window _background color_.
Ignored if [`--hdri-skybox`](#--hdri-skybox) is enabled.

#### compare

| Default                                                            | Orange                                                           |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![background color default](./images/background_color_default.png) | ![background color orange](./images/background_color_orange.png) |

### `--resolution`_`=<width,height>`_  <small>(_vector\<double\>_, default: `1000, 600`)</small> {/* #--resolution */}

Set the _window resolution_. When closing an interactive window, its resolution is remembered in a [cache file](#caches), and restored on the next start, unless it is set in a configuration file, a statefile or on the command-line. Rendering to a file with [`--output`](#--output) or [`--reference`](#--reference) is unaffected.
To always start with the same window size, set it in a [configuration file](06-CONFIGURATION_FILE.md), eg: `"resolution": "1280,720"`. It is only applied on the first load.

### `--position`_`=<x,y>`_  <small>(_vector\<double\>_)</small> {/* #--position */}

Set the _window position_ (top left corner), in pixels, starting from the top left of your screens. When closing an interactive window, its position is remembered in a [cache file](#caches), and restored on the next start, unless it is set in a configuration file, a statefile or on the command-line. Rendering to a file with [`--output`](#--output) or [`--reference`](#--reference) is unaffected.
To always start with the same window position, set it in a [configuration file](06-CONFIGURATION_FILE.md), eg: `"position": "100,50"`. It is only applied on the first load.
To save and restore a whole session, including loaded files and the camera, use [statefiles](#statefiles).

### `-z`, `--fps`  <small>(_bool_, default: `false`)</small> {/* #--fps */}

Display the _FPS Counter_.

#### compare

| OFF                                                                     | ON                             |
| ----------------------------------------------------------------------- | ------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![FPS on](./images/fps_on.png) |

### `-n`, `--filename`  <small>(_bool_, default: `false`)</small> {/* #--filename */}

Display the _Filename_ on top of the window.

#### compare

| OFF                                                                     | ON                                       |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![filename on](./images/filename_on.png) |

### `-m`, `--metadata`  <small>(_bool_, default: `false`)</small> {/* #--metadata */}

Display the _Metadata_.

#### compare

| OFF                                                                     | ON                                       |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![metadata on](./images/metadata_on.png) |

### `--scene-hierarchy`  <small>(_bool_, default: `false`)</small> {/* #--scene-hierarchy */}

Display the _Scene hierarchy_ as a tree representing the internal structure of the model, with checkboxes allowing to hide or show individual parts.
By default the tree expands only enough to show nodes that have meaningful names, but you can fully expand all nodes manually.

#### compare

| OFF                                                                     | ON                                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![scene hierarchy on](./images/scene_hierarchy_on.png) |

### `--notifications`  <small>(_bool_, default: `false`)</small> {/* #--notifications */}

Display the _Notifications_ at the bottom left of the window.

### `--hdri-filename`  <small>(_bool_, default: `false`)</small> {/* #--hdri-filename */}

Display the _HDRI filename_.

#### compare

| OFF                                                                     | ON                                                 |
| ----------------------------------------------------------------------- | -------------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![HDRI filename on](./images/hdri_filename_on.png) |

### `-j`, `--hdri-skybox`  <small>(_string_, default: `disabled`, implicit: `enabled`)</small> {/* #--hdri-skybox */}

Define the HDRI skybox display mode.
If value is `disabled`, [`--background-color`](#--background-color) and [`--no-background`](#--no-background) are used.
If value is `enabled`, the skybox is visible.
If value is `blurred`, the skybox is visible and blurred.

#### compare

| enabled                                             | blurred                                           |
| --------------------------------------------------- | ------------------------------------------------- |
| ![HDRI skybox enabled](./images/hdri_skybox_on.png) | ![HDRI skybox blurred](./images/hdri_blur_on.png) |

### `--blur-coc`  <small>(_double_, default: `20`)</small> {/* #--blur-coc */}

Blur circle of confusion radius.

#### compare

| 20 (default)                                                            | 50                                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| ![HDRI blur circle of confusion default](./images/hdri_coc_default.png) | ![HDRI blur circle of confusion 50](./images/hdri_coc_50.png) |

### `--light-intensity`  <small>(_double_, default: `1.0`)</small> {/* #--light-intensity */}

_Adjust the intensity_ of every light in the scene, including HDRI image-based lighting.

#### compare

| 1 (default)                                          | 2                                                    |
| ---------------------------------------------------- | ---------------------------------------------------- |
| ![light intensity 1](./images/light_intensity_1.png) | ![light intensity 2](./images/light_intensity_2.png) |

## Scientific visualization options

### `-s`, `--coloring-mode`  <small>(_string_, default: `material`)</small> {/* #--coloring-mode */}

Specify the coloring mode.
_material_ means default file materials (textured or solid color)
_scivis_ and _direct_ mean the array specified with option [`--coloring-array`](#--coloring-array) will be used for coloring (or the first available if not set)
In the case of _scivis_, the array is mapped to a color using the colormap defined in [`--colormap`](#--colormap)
In the case of _direct_, it is assumed that the array defines colors directly as L, LA, RGB, RGBA values depending on the number of components.
Use <kbd>S</kbd> to cycle at runtime.

#### compare

| OFF                                                      | ON                                                     |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![scalar coloring off](./images/scalar_coloring_off.png) | ![scalar coloring on](./images/scalar_coloring_on.png) |

### `--coloring-array`_`=<array_name>`_  <small>(_string_)</small> {/* #--coloring-array */}

The coloring array name to use when coloring.
Use with [`--coloring-mode=scivis`](#--coloring-mode) or Use with [`--coloring-mode=direct`](#--coloring-mode).
Use <kbd>Y</kbd> to cycle at runtime.
Use [`--verbose`](#--verbose) to recover the usable array names.

#### compare

| Normals (Z)                                                   | Height                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| ![coloring array normals](./images/coloring_array_normal.png) | ![coloring array height](./images/coloring_array_height.png) |

### `-y`, `--coloring-component`_`=<comp_index>`_  <small>(_int_, implicit: `0`)</small> {/* #--coloring-component */}

Specify the _component from the scalar_ array to color with.
If the option is not specified, uses the _magnitude_ of the array.
Use with [`--coloring-mode=scivis`](#--coloring-mode).
Use <kbd>Shift</kbd>+<kbd>Y</kbd> to cycle at runtime.

#### compare

| Normals (X)                                                | Normals (Y)                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![coloring component X](./images/coloring_component_x.png) | ![coloring component Y](./images/coloring_component_y.png) |

### `--coloring-field`  <small>(_string_, default: `any`)</small> {/* #--coloring-field */}

Specify that the scalar array field to color with (`any`, `points`, or `cells`).
Use with [`--coloring-mode=scivis`](#--coloring-mode) or [`--coloring-mode=direct`](#--coloring-mode).
Use if a point array and a cell array have the same name or if you want to skip a field when cycling with <kbd>Y</kbd> at runtime.

#### compare

| points                                                       | cells                                                      |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| ![coloring by cells off](./images/coloring_by_cells_off.png) | ![coloring by cells on](./images/coloring_by_cells_on.png) |

### `--coloring-range`_`=<min,max>`_  <small>(_vector\<double\>_)</small> {/* #--coloring-range */}

Set the _coloring range_. Automatically computed by default.
When automatically computed and minimum and maximum values are nearly equal, the object is colored with the mid value.
Use with [`--coloring-mode=scivis`](#--coloring-mode).

#### compare

| Auto                                                     | 40,200                                                |
| -------------------------------------------------------- | ----------------------------------------------------- |
| ![coloring range auto](./images/coloring_range_auto.png) | ![skull baseline render](./images/skull_baseline.png) |

### `-b`, `--coloring-scalar-bar`  <small>(_bool_, default: `false`)</small> {/* #--coloring-scalar-bar */}

Show _Scalar bar_ of the coloring by array.
Use with [`--coloring-mode=scivis`](#--coloring-mode).

#### compare

| OFF                                                   | ON                                           |
| ----------------------------------------------------- | -------------------------------------------- |
| ![skull baseline render](./images/skull_baseline.png) | ![scalar bar on](./images/scalar_bar_on.png) |

### `--colormap-file`_`=<name>`_  <small>(_string_)</small> {/* #--colormap-file */}

Set a _colormap file for the coloring_.
See [color maps](10-COLOR_MAPS.md).
Use with [`--coloring-mode=scivis`](#--coloring-mode).

#### compare

| Default (inferno)                                     | Viridis                                             |
| ----------------------------------------------------- | --------------------------------------------------- |
| ![skull baseline render](./images/skull_baseline.png) | ![viridis color map](./images/colormap_viridis.png) |

### `--colormap`_`=<colormap>`_  <small>(_colormap_)</small> {/* #--colormap */}

Set a _custom colormap for the coloring_.See [colormap parsing](08-PARSING.md#colormap) for details.
Ignored if [`--colormap-file`](#--colormap-file) option is specified.
Use with [`--coloring-mode=scivis`](#--coloring-mode).

### `--colormap-discretization`_`=<colors>`_  <small>(_int_)</small> {/* #--colormap-discretization */}

Set the number of distinct colors from [1, N] used in the colormap. Any values outside the valid range result in smooth shading.
Use with [`--coloring-mode=scivis`](#--coloring-mode).

#### compare

| Default                                                                           | 8                                                                     |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![color map discretization default](./images/colormap_discretization_default.png) | ![color map discretization 8](./images/colormap_discretization_8.png) |

### `-v`, `--volume`  <small>(_bool_, default: `false`)</small> {/* #--volume */}

Enable _volume rendering_. It is only functional for 3D image data (VTKXMLVTI, DICOM, NRRD, MetaImage files) and displays nothing with other formats. It forces coloring.
Warn if not used with [`--coloring-mode=scivis`](#--coloring-mode) or [`--coloring-mode=scivis`](#--coloring-mode).

#### compare

| OFF                                    | ON                                                    |
| -------------------------------------- | ----------------------------------------------------- |
| ![volume off](./images/volume_off.png) | ![skull baseline render](./images/skull_baseline.png) |

### `--volume-opacity-file`_`=<name>`_  <small>(_string_)</small> {/* #--volume-opacity-file */}

Set an _opacity map file for the coloring_.

#### compare

| Default (linear)                                               | Gaussian                                                         |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![volume opacity default](./images/volume_opacity_default.png) | ![volume opacity gaussian](./images/volume_opacity_gaussian.png) |

### `--volume-opacity-map`_`=<value, opacity>`_  <small>(_vector\<double\>_, default: `0.0,0.0,1.0,1.0`)</small> {/* #--volume-opacity-map */}

Set a _custom opacity map for the coloring_.
Only used with volume rendering for now.
Ignored if [`--volume-opacity-file`](#--volume-opacity-file) option is specified.

### `-i`, `--volume-inverse`  <small>(_bool_, default: `false`)</small> {/* #--volume-inverse */}

Inverse the linear opacity function used for volume rendering.

#### compare

| OFF                                                    | ON                                                   |
| ------------------------------------------------------ | ---------------------------------------------------- |
| ![volume inverse off](./images/volume_inverse_off.png) | ![volume inverse on](./images/volume_inverse_on.png) |

## Camera configuration options

### `--camera-position`_`=<X,Y,Z>`_  <small>(_vector\<double\>_)</small> {/* #--camera-position */}

Set the camera position, overrides [`--camera-direction`](#--camera-direction) and [`--camera-zoom-factor`](#--camera-zoom-factor).

### `--camera-focal-point`_`=<X,Y,Z>`_  <small>(_vector\<double\>_)</small> {/* #--camera-focal-point */}

Set the camera focal point.

### `--camera-view-up`_`=<direction>`_  <small>(_direction_)</small> {/* #--camera-view-up */}

Set the camera view up vector. Will be orthogonalized.

### `--camera-view-angle`_`=<angle>`_  <small>(_double_)</small> {/* #--camera-view-angle */}

Set the camera view angle, a strictly positive value in degrees.

### `--camera-direction`_`=<direction>`_  <small>(_direction_)</small> {/* #--camera-direction */}

Set the camera direction, looking at the focal point.

### `--camera-zoom-factor`_`=<factor>`_  <small>(_double_)</small> {/* #--camera-zoom-factor */}

Set the camera zoom factor relative to the autozoom on data, a strictly positive value.

### `--camera-azimuth-angle`_`=<angle>`_  <small>(_double_, default: `0.0`)</small> {/* #--camera-azimuth-angle */}

Apply an azimuth transformation to the camera, in degrees, added after other camera options.

### `--camera-elevation-angle`_`=<angle>`_  <small>(_double_, default: `0.0`)</small> {/* #--camera-elevation-angle */}

Apply an elevation transformation to the camera, in degrees, added after other camera options.

### `--camera-orthographic`  <small>(_bool_)</small> {/* #--camera-orthographic */}

Set the camera to use the orthographic projection. Model-specified by default.

## Raytracing options

### `-r`, `--raytracing`  <small>(_bool_, default: `false`)</small> {/* #--raytracing */}

Enable _OSPRay raytracing_. Requires OSPRay raytracing to be enabled in the linked VTK dependency.

#### compare

| OFF                                            | ON                                           |
| ---------------------------------------------- | -------------------------------------------- |
| ![raytracing off](./images/raytracing_off.png) | ![raytracing on](./images/raytracing_on.png) |

### `--raytracing-samples`_`=<samples>`_  <small>(_int_, default: `5`)</small> {/* #--raytracing-samples */}

Set the number of _samples per pixel_ when using raytracing.

#### compare

| 2                                                          | 6                                                          |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![raytracing samples 2](./images/raytracing_samples_2.png) | ![raytracing samples 6](./images/raytracing_samples_6.png) |

### `-d`, `--raytracing-denoise`  <small>(_bool_, default: `false`)</small> {/* #--raytracing-denoise */}

_Denoise_ the image when using raytracing.

#### compare

| OFF (2 samples)                                                | ON                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| ![raytracing denoise off](./images/raytracing_denoise_off.png) | ![raytracing denoise on](./images/raytracing_denoise_on.png) |

## PostFX (OpenGL) options

### `-p`, `--blending`  <small>(_string_, default: `none`, implicit: `ddp`)</small> {/* #--blending */}

Enable _translucency blending support_.
This is a technique used to correctly render translucent objects (`ddp`: dual depth peeling for quality, `sort`: for gaussians, `sort_cpu`: for gaussians, `stochastic`: fast).

:::warning

`stochastic` is introducing a lot of noise with strong translucency.
It works better when combined with temporal anti-aliasing (when using the [`--anti-aliasing=taa`](#--anti-aliasing) option)
`sort` is only working for 3D gaussians and requires compute shaders support.
Alternatively, `sort_cpu` gives the same result and works everywhere but it's much slower.

:::
#### compare

| none                                       | ddp                                      |
| ------------------------------------------ | ---------------------------------------- |
| ![blending off](./images/blending_off.png) | ![blending on](./images/blending_on.png) |

### `-q`, `--ambient-occlusion`  <small>(_bool_, default: `false`)</small> {/* #--ambient-occlusion */}

Enable _ambient occlusion_. This is a technique used to improve the depth perception of the object.

#### compare

| OFF                                                          | ON                                                         |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| ![ambient occlusion off](./images/ambient_occlusion_off.png) | ![ambient occlusion on](./images/ambient_occlusion_on.png) |

### `-a`, `--anti-aliasing`  <small>(_string_, default: `none`, implicit: `fxaa`)</small> {/* #--anti-aliasing */}

Anti-aliasing method (`fxaa`: fast, `ssaa`: quality, `taa`: balanced, `none`: no anti aliasing)

:::warning

`taa` forces rendering of the scene at regular interval and introduces ghosting artifacts on animated scenes.
It also doesn't work with offscreen rendering (when using the [`--output`](#--output) option)

:::
#### compare: Notice how edges are smoother with SSAA.

| OFF                                                  | ON (SSAA)                                          |
| ---------------------------------------------------- | -------------------------------------------------- |
| ![anti-aliasing off](./images/anti_aliasing_off.png) | ![anti-aliasing on](./images/anti_aliasing_on.png) |

### `-t`, `--tone-mapping`  <small>(_bool_, default: `false`)</small> {/* #--tone-mapping */}

Enable neutral _Tone Mapping_. This technique maps colors properly to the monitor colors.

#### compare

| OFF                                                                     | ON                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------ |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![tone mapping on](./images/tone_mapping_on.png) |

### `--final-shader`  <small>(_string_)</small> {/* #--final-shader */}

Add a final shader to the output image. See the [final shader documentation](11-FINAL_SHADER.md) for more details.

#### compare

| OFF                                                                     | ON (grayscale shader)                                |
| ----------------------------------------------------------------------- | ---------------------------------------------------- |
| ![Damaged Helmet baseline render](./images/damaged_helmet_baseline.png) | ![final shader gray](./images/final_shader_gray.png) |

### `--display-depth`  <small>(_bool_, default: `false`)</small> {/* #--display-depth */}

Display the depth buffer as a grayscale image or with a colormap if [`--coloring-mode`](#--coloring-mode) is `scivis`.
Only opaque objects are displayed, the grid and translucent/volumetric objects are ignored.

#### compare

| OFF                                                  | ON                                                 |
| ---------------------------------------------------- | -------------------------------------------------- |
| ![display depth off](./images/display_depth_off.png) | ![display depth on](./images/display_depth_on.png) |

## Testing options

### `--reference`_`=<png file>`_  <small>(_string_)</small> {/* #--reference */}

Render and compare with the provided _reference image_, for testing purposes. Use with output option to generate new baselines and diff images.

### `--reference-threshold`_`=<threshold>`_  <small>(_double_, default: `0.04`)</small> {/* #--reference-threshold */}

Set the _comparison threshold_ to trigger a test failure or success. The default (0.04) correspond to almost visually identical images.

### `--interaction-test-record`_`=<log file>`_  <small>(_string_)</small> {/* #--interaction-test-record */}

Path to an interaction log file to _record interaction events_ to.

### `--interaction-test-play`_`=<log file>`_  <small>(_string_)</small> {/* #--interaction-test-play */}

Path to an interaction log file to _play interactions events_ from when loading a file.
Run after [`--command-script`](#--command-script).

## Rendering options precedence

Some rendering options are not compatible between them, here is the precedence order if several are provided:

- Raytracing ([`-r`](#--raytracing))
- Volume ([`-v`](#--volume))
- Point Sprites ([`-o`](#--point-sprites))

## Color space

All options of type _color_ must be expressed in [sRGB](https://en.wikipedia.org/wiki/SRGB) color space. They are converted internally in linear color space for physically correct rendering.

## Options syntax

To turn on/off boolean options, write `--option=true` and `--option=false`, eg [`--point-sprites=false`](#--point-sprites).

If an option has an "implicit" value, use the option without specifying the value to use the implicit value.

The default corresponds to the value without any [configuration file](06-CONFIGURATION_FILE.md).

Prefer the `--option=value` syntax. The syntax `--option value` can have unintended effect with positional arguments.

The [`-R`](#--reset) short option has a special syntax: [`-Rlibf3d.option`](#--reset) but can also be used with [`--reset=libf3d.option`](#--reset)

The [`-D/--define`](#--define) option has a special syntax: [`-Dlibf3d.option=value`](#--define) or [`--define=libf3d.option=value`](#--define).

F3D parses all options according to their type, see the [parsing documentation](08-PARSING.md) for more details.

## Piping

F3D supports piping in and out for [most formats](02-SUPPORTED_FORMATS.md), using the `-` char, eg:

```bash
f3d - --output=- < path/to/file.glb > path/to/img.png
```

or, using [display](https://imagemagick.org/script/display.php#gsc.tab=0):

```bash
cat path/to/file.glb | f3d - --output=- | display
```

and even, using [build123d](https://github.com/gumyr/build123d):

`script.py`:

```python
import sys

from build123d import Box, Cylinder, export_brep

obj = Box(2, 2, 1) - Cylinder(0.5, 2)
export_brep(obj, sys.stdout.buffer)
```

```bash
python script.py | f3d - --output=- | display
```

F3D can also output animations to a video using piping with FFmpeg:

```
f3d path/to/file.glb --output-video=- | ffmpeg -f h264 -i - path/to/video.mp4
```

While piping is more common on Linux, F3D supports it perfectly on Windows and macOS as well.

With versions of VTK < v9.6.20260128, specifying the [reader](02-SUPPORTED_FORMATS.md) to use is required, like this:

```bash
cat path/to/file.glb | f3d - --force-reader=GLB --output=- | display
```

## Filename templating

The destination filename used by [`--output`](#--output), to save screenshots using [`--screenshot-filename`](#--screenshot-filename), or to save statefiles using [`--save-statefile`](#--save-statefile)/[`--statefile-filename`](#--statefile-filename) can use the following template variables:

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
- `{frame}`: frame number when outputting animation frames (see [Animations](05-ANIMATIONS.md))
- `{frame:4}`, `{frame:5}`, ...: zero-padded frame number when outputting animation frames
- escape variable names by doubling the braces (eg. use `{{model}}.png` to output `{model}.png` without the model name being substituted)

For example the screenshot filename is configured as `{app}/{model}_{n}.png` by default, meaning that, assuming the model `hello.glb` is being viewed,
consecutive screenshots are going to be saved as `F3D/hello_1.png`, `F3D/hello_2.png`, `F3D/hello_3.png`, ...

F3D replaces model related variables by `no_file` if no file is loaded and `multi_file` if multiple files are loaded using the `multi-file-mode` option.

When loading a statefile ([`--load-statefile`](#--load-statefile)/`load_statefile`), the `{n}` variable resolves to the most recent existing file, instead of the next available one used when saving. This means that, with the default `{n}` template, saving then loading a statefile round-trips to the same file.

## Caches

When using HDRI related options, F3D creates and uses a cache directory to store related data to speed up rendering.

F3D also stores the geometry of the last closed interactive window in a `cache.json` file, in the same directory, so it can restore that geometry on the next start, see [`--resolution`](#--resolution) and [`--position`](#--position). Its `window` entry uses the same layout as in [statefiles](#statefiles):

```json
{
  "window": {
    "width": 1000,
    "height": 600,
    "left": 100,
    "top": 50
  }
}
```

You can safely remove these cache files, at the cost of recomputing the HDRI data on next use and losing the cached window geometry.

The cache directory location is as follows, in order, using the first defined environment variables:

- Windows: `%LOCALAPPDATA%\f3d`
- Linux: `${XDG_CACHE_HOME}/f3d`,`${HOME}/.cache/f3d`
- macOS: `${HOME}/Library/Caches/f3d`

## Statefiles

A statefile is a JSON file that captures a session to restore later, using [`--save-statefile`](#--save-statefile)/[`--load-statefile`](#--load-statefile)
or the `save_statefile`/`load_statefile` [commands](07-COMMANDS.md).

A libf3d statefile (`engine::dump`/`engine::load`) contains the added `files`, the `camera` and the `options`.
F3D stores file paths relatively to the statefile directory when possible, and resolves them on load.
Content added from memory (meshes, buffers) is not captured.

F3D adds a `file_groups` entry storing all file groups, including the ones not currently loaded,
so it can restore the whole navigation state. The library ignores this entry when loading a libf3d statefile.
