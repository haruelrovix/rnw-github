#!/usr/bin/env bash
# 
# Change babel-preset
# 
# There is an issue on react-native-vector-icons. After it installs packages, the .babelrc file contains
#   [module:metro-react-native-babel-preset].
# The preset supposed to be [react-native].
# The file located at 'node_modules/react-native-vector-icons/.babelrc'.
# Let's monkey patching it for now, until I can find more elegant solution.

echo "Write [react-native] to .babelrc file"

# Remove existing file first
rm -f ./node_modules/react-native-vector-icons/.babelrc

# Write~
echo "{ \"presets\": [\"react-native\"] }" >> ./node_modules/react-native-vector-icons/.babelrc

echo "Done! .babelrc should be updated 😁"