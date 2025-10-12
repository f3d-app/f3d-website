# Class f3d::engine

![][C++]
![][public]

**Definition**: `engine.h` (line 38)

Class used to create instance of other classes.

The main class of the libf3d to create all other instances. Configured on creation using an enum, then all objects can be accessed through their getter.





Example usage for adding some files in the scene






```cpp
f3d::engine eng = f3d::engine::create();
f3d::scene& sce = eng.getscene();
sce.add({"path/to/file", "path/to/another/file"});
f3d::interactor& inter = eng.getInteractor();
inter.start();
```

## Inner classes

* [f3d::engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md)
* [f3d::engine::libInformation](structf3d_1_1engine_1_1lib_information.md)
* [f3d::engine::no\_interactor\_exception](structf3d_1_1engine_1_1no__interactor__exception.md)
* [f3d::engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md)
* [f3d::engine::plugin\_exception](structf3d_1_1engine_1_1plugin__exception.md)
* [f3d::engine::readerInformation](structf3d_1_1engine_1_1reader_information.md)

## Members

* [autoloadPlugins](classf3d_1_1engine.md#classf3d_1_1engine_1ac4d909a879b94b496a3e9292162fb855)
* [create](classf3d_1_1engine.md#classf3d_1_1engine_1a8dc98863d9785dee5c90725248c46b8a)
* [createEGL](classf3d_1_1engine.md#classf3d_1_1engine_1af2ad280d2be4c58a8f30eec351cd3bf4)
* [createExternal](classf3d_1_1engine.md#classf3d_1_1engine_1ad34defb23976727cdb2ae884e119e533)
* [createExternalCOCOA](classf3d_1_1engine.md#classf3d_1_1engine_1aa361310e43db522f80340d1b6489f614)
* [createExternalEGL](classf3d_1_1engine.md#classf3d_1_1engine_1a033427bc8d9cfc37340d566e7d901fbe)
* [createExternalGLX](classf3d_1_1engine.md#classf3d_1_1engine_1a4fc077683aa9807ce52d3c0b45494250)
* [createExternalOSMesa](classf3d_1_1engine.md#classf3d_1_1engine_1a2228768b97a56a53ce23fb315ff368ab)
* [createExternalWGL](classf3d_1_1engine.md#classf3d_1_1engine_1aa5ae12e2c05726524b94df82f63e1cc3)
* [createGLX](classf3d_1_1engine.md#classf3d_1_1engine_1a0cf626f2585af37614b088c5c78a2a1a)
* [createNone](classf3d_1_1engine.md#classf3d_1_1engine_1a6c74166d9132a8e0e30e7bd8c4a3ce0f)
* [createOSMesa](classf3d_1_1engine.md#classf3d_1_1engine_1a1ea3b63b10d5f826528545a562297cd1)
* [createWGL](classf3d_1_1engine.md#classf3d_1_1engine_1aad8377f8ceef620a494c3d1ccb86ef4a)
* [engine](classf3d_1_1engine.md#classf3d_1_1engine_1a091ec0742f81eb1931aa008b6d2eb857)
* [engine](classf3d_1_1engine.md#classf3d_1_1engine_1a763538a512e6405aa5d05de6eef8e43e)
* [engine](classf3d_1_1engine.md#classf3d_1_1engine_1ace9f4b7a546a1be097355df320bf0953)
* [getAllReaderOptionNames](classf3d_1_1engine.md#classf3d_1_1engine_1ae1f1d77bb0ec0b5df9997eb77c1b42fd)
* [getInteractor](classf3d_1_1engine.md#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113)
* [getLibInfo](classf3d_1_1engine.md#classf3d_1_1engine_1aaf3b6314d61f6b033887ed09255fe5a7)
* [getOptions](classf3d_1_1engine.md#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a)
* [getPluginsList](classf3d_1_1engine.md#classf3d_1_1engine_1ab72eb52263a39accd6f296f893808b5a)
* [getReadersInfo](classf3d_1_1engine.md#classf3d_1_1engine_1a5b2887501e1975218442d9142f4d3b8e)
* [getRenderingBackendList](classf3d_1_1engine.md#classf3d_1_1engine_1ac2fc13fa23e4f33f0aeda81d9925a2ac)
* [getScene](classf3d_1_1engine.md#classf3d_1_1engine_1a7de2279c63696943a16c8995f6fbbc82)
* [getWindow](classf3d_1_1engine.md#classf3d_1_1engine_1a621751cc41669de47c318b6f20ec0cd7)
* [Internals](classf3d_1_1engine.md#classf3d_1_1engine_1a5129a2dfd256ea59aa30818d30708188)
* [loadPlugin](classf3d_1_1engine.md#classf3d_1_1engine_1a820b4a59f829b77f669f267cfde09186)
* [operator=](classf3d_1_1engine.md#classf3d_1_1engine_1a4755881d465474f30bda5b7f1b630ecf)
* [operator=](classf3d_1_1engine.md#classf3d_1_1engine_1a99cd2684bdd36a245b947075cb28dfa5)
* [setCachePath](classf3d_1_1engine.md#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a)
* [setOptions](classf3d_1_1engine.md#classf3d_1_1engine_1ac4f1d538ed3b0f29c4730893208689df)
* [setOptions](classf3d_1_1engine.md#classf3d_1_1engine_1ac59b6c8c87b1b671b8c7f55d0d7cc6d9)
* [setReaderOption](classf3d_1_1engine.md#classf3d_1_1engine_1a95e7c2840b75b4f56f6a48ce25a4bc45)
* [~engine](classf3d_1_1engine.md#classf3d_1_1engine_1a42c3dd21a33f10e849c804d91af3ca37)

## Private attributes

### Variable Internals {#classf3d_1_1engine_1a5129a2dfd256ea59aa30818d30708188}

![][private]

**Definition**: `engine.h` (line 369)


```cpp
internals* f3d::engine::Internals
```








**Type**: internals *



## Public static functions

### Function create {#classf3d_1_1engine_1a8dc98863d9785dee5c90725248c46b8a}

![][public]
![][static]


```cpp
static engine f3d::engine::create(bool offscreen=false)
```




Create an engine with an automatic window. Optionally, the window can be hidden by setting offscreen to true. For VTK < 9.3, the window type will depend on the VTK build options For VTK >= 9.4: Linux: Try GLX, then EGL, then OSMesa Windows: Try Win32, then EGL, then OSMesa macOS: Always use Cocoa Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Parameters**:

* bool **offscreen** = false 

**Return type**: [engine](classf3d_1_1engine.md)



### Function createNone {#classf3d_1_1engine_1a6c74166d9132a8e0e30e7bd8c4a3ce0f}

![][public]
![][static]


```cpp
static engine f3d::engine::createNone()
```




Create an engine with no window. Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createGLX {#classf3d_1_1engine_1a0cf626f2585af37614b088c5c78a2a1a}

![][public]
![][static]


```cpp
static engine f3d::engine::createGLX(bool offscreen=false)
```




Create an engine with a GLX window. Works on Linux only. VTK >= 9.4 required. Optionally, the window can be hidden by setting offscreen to true. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Parameters**:

* bool **offscreen** = false 

**Return type**: [engine](classf3d_1_1engine.md)



### Function createWGL {#classf3d_1_1engine_1aad8377f8ceef620a494c3d1ccb86ef4a}

![][public]
![][static]


```cpp
static engine f3d::engine::createWGL(bool offscreen=false)
```




Create an engine with a WGL window. Works on Windows only. VTK >= 9.4 required. Optionally, the window can be hidden by setting offscreen to true. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Parameters**:

* bool **offscreen** = false 

**Return type**: [engine](classf3d_1_1engine.md)



### Function createEGL {#classf3d_1_1engine_1af2ad280d2be4c58a8f30eec351cd3bf4}

![][public]
![][static]


```cpp
static engine f3d::engine::createEGL()
```




Create an engine with an offscreen EGL window. VTK >= 9.4 required. If several GPU are available, the environment variable `VTK_DEFAULT_EGL_DEVICE_INDEX` allows its selection. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createOSMesa {#classf3d_1_1engine_1a1ea3b63b10d5f826528545a562297cd1}

![][public]
![][static]


```cpp
static engine f3d::engine::createOSMesa()
```




Create an engine with an offscreen OSMesa window. VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternal {#classf3d_1_1engine_1ad34defb23976727cdb2ae884e119e533}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternal(const context::function &getProcAddress)
```




Create an engine with an external window. A context to retrieve OpenGL symbols is required. Here's an example if a GLFW window is used: 
```cpp
f3d::engine eng = f3d::engine::createExternal(glfwGetProcAddress);
```
 Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Parameters**:

* const context::function & **getProcAddress**

**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternalGLX {#classf3d_1_1engine_1a4fc077683aa9807ce52d3c0b45494250}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternalGLX()
```




Create an engine with an external GLX context. Equivalent to createExternal(f3d::context::glx()); VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternalWGL {#classf3d_1_1engine_1aa5ae12e2c05726524b94df82f63e1cc3}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternalWGL()
```




Create an engine with an external WGL context. Equivalent to createExternal(f3d::context::wgl()); VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternalCOCOA {#classf3d_1_1engine_1aa361310e43db522f80340d1b6489f614}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternalCOCOA()
```




Create an engine with an external COCOA context. Equivalent to createExternal(f3d::context::cocoa()); VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternalEGL {#classf3d_1_1engine_1a033427bc8d9cfc37340d566e7d901fbe}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternalEGL()
```




Create an engine with an external EGL context. Equivalent to createExternal(f3d::context::egl()); VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function createExternalOSMesa {#classf3d_1_1engine_1a2228768b97a56a53ce23fb315ff368ab}

![][public]
![][static]


```cpp
static engine f3d::engine::createExternalOSMesa()
```




Create an engine with an external OSMesa context. Equivalent to createExternal(f3d::context::osmesa()); VTK >= 9.4 required. Throws a [context::loading\_exception](structf3d_1_1context_1_1loading__exception.md) if a needed graphic library cannot be loaded Throws a [context::symbol\_exception](structf3d_1_1context_1_1symbol__exception.md) if a needed symbol cannot be found in graphic library Throws a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md) if the window cannot be created for another reason Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the default cache directory cannot be used



**Return type**: [engine](classf3d_1_1engine.md)



### Function getRenderingBackendList {#classf3d_1_1engine_1ac2fc13fa23e4f33f0aeda81d9925a2ac}

![][public]
![][static]


```cpp
static std::map< std::string, bool > f3d::engine::getRenderingBackendList()
```




List rendering backends supported by libf3d. All backends have an associated boolean flag indicating if it can be used.



**Return type**: std::map< std::string, bool >



### Function loadPlugin {#classf3d_1_1engine_1a820b4a59f829b77f669f267cfde09186}

![][public]
![][static]


```cpp
static void f3d::engine::loadPlugin(const std::string &pathOrName, const std::vector< std::filesystem::path > &pluginSearchPaths={})
```




Load a plugin. The provided pathOrName can be a full path, relative path, or plugin name. First try to load the plugin by name from the static plugins. Then try to load the path provided as if it is a full path to a plugin. Then try to load a plugin by its name looking into the provided plugin search paths (used as is). Then try to load a plugin by its name relying on internal system (eg: LD_LIBRARY_PATH). The plugin "native" is always available and includes native VTK readers. If built and available in your build, F3D is providing 6 additional plugins: "alembic", "assimp", "draco", "hdf", "occt", "usd", "vdb". Custom plugins can also be available that F3D is not supporting officially. Throws a [engine::plugin\_exception](structf3d_1_1engine_1_1plugin__exception.md) if the plugin can't be loaded for some reason.



**Parameters**:

* const std::string & **pathOrName**
* const std::vector< std::filesystem::path > & **pluginSearchPaths** = {} 

**Return type**: void



### Function autoloadPlugins {#classf3d_1_1engine_1ac4d909a879b94b496a3e9292162fb855}

![][public]
![][static]


```cpp
static void f3d::engine::autoloadPlugins()
```




Automatically load all the static plugins. The plugin "native" is guaranteed to be static.



**Return type**: void



### Function getPluginsList {#classf3d_1_1engine_1ab72eb52263a39accd6f296f893808b5a}

![][public]
![][static]


```cpp
static std::vector< std::string > f3d::engine::getPluginsList(const std::filesystem::path &pluginPath)
```




List plugins based on associated json files located in the given directory, used as is. Listed plugins can be loaded using [engine::loadPlugin](classf3d_1_1engine.md#classf3d_1_1engine_1a820b4a59f829b77f669f267cfde09186) function. Note that the listed plugins may fail to load if the library is not found or incompatible. Return available plugins if any, or an empty vector if there are none or the provided path does not exist.



**Parameters**:

* const std::filesystem::path & **pluginPath**

**Return type**: std::vector< std::string >



### Function getAllReaderOptionNames {#classf3d_1_1engine_1ae1f1d77bb0ec0b5df9997eb77c1b42fd}

![][public]
![][static]


```cpp
static std::vector< std::string > f3d::engine::getAllReaderOptionNames()
```




Get all plugin option names that can be set using `setReaderOption` This vector can be expanded when loading plugin using `loadPlugin`



**Return type**: std::vector< std::string >



### Function setReaderOption {#classf3d_1_1engine_1a95e7c2840b75b4f56f6a48ce25a4bc45}

![][public]
![][static]


```cpp
static void f3d::engine::setReaderOption(const std::string &name, const std::string &value)
```




Set a specific reader option from a plugin to provided value if it exists. Throws a [options::inexistent\_exception](structf3d_1_1options_1_1inexistent__exception.md) if the option does not exists in any reader of any plugin.



**Parameters**:

* const std::string & **name**
* const std::string & **value**

**Return type**: void



### Function getLibInfo {#classf3d_1_1engine_1aaf3b6314d61f6b033887ed09255fe5a7}

![][public]
![][static]


```cpp
static libInformation f3d::engine::getLibInfo()
```




Get a struct containing info about the libf3d.



**Return type**: [libInformation](structf3d_1_1engine_1_1lib_information.md)



### Function getReadersInfo {#classf3d_1_1engine_1a5b2887501e1975218442d9142f4d3b8e}

![][public]
![][static]


```cpp
static std::vector< readerInformation > f3d::engine::getReadersInfo()
```




Get a vector of struct containing info about the supported readers.



**Return type**: std::vector< [readerInformation](structf3d_1_1engine_1_1reader_information.md) >



## Public functions

### Function ~engine {#classf3d_1_1engine_1a42c3dd21a33f10e849c804d91af3ca37}

![][public]


```cpp
f3d::engine::~engine()
```




Engine destructor, delete all object instances as well.



**Return type**: 



### Function engine {#classf3d_1_1engine_1a091ec0742f81eb1931aa008b6d2eb857}

![][public]


```cpp
f3d::engine::engine(const engine &other)=delete
```




Engine copy is not possible but move is allowed.



**Parameters**:

* const [engine](classf3d_1_1engine.md) & **other**

**Return type**: 



### Function engine {#classf3d_1_1engine_1a763538a512e6405aa5d05de6eef8e43e}

![][public]


```cpp
f3d::engine::engine(engine &&other) noexcept
```








**Parameters**:

* [engine](classf3d_1_1engine.md) && **other**

**Return type**: 



### Function operator= {#classf3d_1_1engine_1a4755881d465474f30bda5b7f1b630ecf}

![][public]


```cpp
engine & f3d::engine::operator=(const engine &other)=delete
```








**Parameters**:

* const [engine](classf3d_1_1engine.md) & **other**

**Return type**: [engine](classf3d_1_1engine.md) &



### Function operator= {#classf3d_1_1engine_1a99cd2684bdd36a245b947075cb28dfa5}

![][public]


```cpp
engine & f3d::engine::operator=(engine &&other) noexcept
```








**Parameters**:

* [engine](classf3d_1_1engine.md) && **other**

**Return type**: [engine](classf3d_1_1engine.md) &



### Function setCachePath {#classf3d_1_1engine_1a4883c97389b1ab88d606e138d969611a}

![][public]


```cpp
engine & f3d::engine::setCachePath(const std::filesystem::path &cachePath)
```




Set the cache path. The provided path is used as is. Currently, it's only used to store HDRI baked textures. By default, the cache path is:
* Windows: LOCALAPPDATA%\f3d

* Linux: ~/.cache/f3d

* macOS: ~/Library/Caches/f3d Throws a [engine::cache\_exception](structf3d_1_1engine_1_1cache__exception.md) if the provided cachePath cannot be used.



**Parameters**:

* const std::filesystem::path & **cachePath**

**Return type**: [engine](classf3d_1_1engine.md) &



### Function setOptions {#classf3d_1_1engine_1ac4f1d538ed3b0f29c4730893208689df}

![][public]


```cpp
engine & f3d::engine::setOptions(const options &opt)
```




Engine provide a default options that you can use using [engine::getOptions()](classf3d_1_1engine.md#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will copy options into engine.



**Parameters**:

* const [options](classf3d_1_1options.md) & **opt**

**Return type**: [engine](classf3d_1_1engine.md) &



### Function setOptions {#classf3d_1_1engine_1ac59b6c8c87b1b671b8c7f55d0d7cc6d9}

![][public]


```cpp
engine & f3d::engine::setOptions(options &&opt)
```




Engine provide a default options that you can use using [engine::getOptions()](classf3d_1_1engine.md#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a). But you can use this setter to use other options directly. It will move options into engine.



**Parameters**:

* [options](classf3d_1_1options.md) && **opt**

**Return type**: [engine](classf3d_1_1engine.md) &



### Function getOptions {#classf3d_1_1engine_1a412f027391ddf8a752eb9230ae30986a}

![][public]


```cpp
options & f3d::engine::getOptions()
```




Get the default options provided by the engine.



**Return type**: [options](classf3d_1_1options.md) &



### Function getWindow {#classf3d_1_1engine_1a621751cc41669de47c318b6f20ec0cd7}

![][public]


```cpp
window & f3d::engine::getWindow()
```




Get the window provided by the engine, if any. If not, will throw a [engine::no\_window\_exception](structf3d_1_1engine_1_1no__window__exception.md).



**Return type**: [window](classf3d_1_1window.md) &



### Function getScene {#classf3d_1_1engine_1a7de2279c63696943a16c8995f6fbbc82}

![][public]


```cpp
scene & f3d::engine::getScene()
```




Get the loaded provided by the engine.



**Return type**: [scene](classf3d_1_1scene.md) &



### Function getInteractor {#classf3d_1_1engine_1aaa84654442772987a9d233ed1ca8e113}

![][public]


```cpp
interactor & f3d::engine::getInteractor()
```




Get the interactor provided by the engine, if any. If not, will throw a [engine::no\_interactor\_exception](structf3d_1_1engine_1_1no__interactor__exception.md).



**Return type**: [interactor](classf3d_1_1interactor.md) &



## Private functions

### Function engine {#classf3d_1_1engine_1ace9f4b7a546a1be097355df320bf0953}

![][private]


```cpp
f3d::engine::engine(const std::optional< window::Type > &windowType, bool offscreen, const context::function &loader)
```




Engine constructor. This is a private method. The user must rely on factories to create the engine instance.



**Parameters**:

* const std::optional< [window::Type](classf3d_1_1window.md#classf3d_1_1window_1a4742753b53b500ca62f402424aa1f471) > & **windowType**
* bool **offscreen**
* const context::function & **loader**

**Return type**: 





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)