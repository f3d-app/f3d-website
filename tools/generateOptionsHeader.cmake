if (NOT F3D_SOURCE_DIR)
  message(FATAL_ERROR "F3D_SOURCE_DIR is not defined.")
endif()

# Generate options.h
include(${F3D_SOURCE_DIR}/cmake/f3dOptions.cmake)

f3d_generate_options(
  INPUT_JSON "${F3D_SOURCE_DIR}/library/options.json"
  INPUT_PUBLIC_HEADER "${F3D_SOURCE_DIR}/library/public/options.h.in"
  INPUT_PRIVATE_HEADER "${F3D_SOURCE_DIR}/library/private/options_generated.h.in"
  DESTINATION "${F3D_SOURCE_DIR}/library"
  OUTPUT_NAME "options"
  )
