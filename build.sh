#!/bin/bash
# shellcheck disable=SC2034,SC2164
BASE_DIR="$(realpath "$(dirname "$0")")"
cd "$BASE_DIR"
yarn install --frozen-lockfile || exit $?
cd "$BASE_DIR/node_modules/eslint-config-eslint"
rm default.yml
wget https://raw.githubusercontent.com/eslint/eslint/main/packages/eslint-config-eslint/default.yml
cd "$BASE_DIR/node_modules/@types/react"
rm index.d.ts
wget https://raw.githubusercontent.com/ms0503/DefinitelyTyped/fix/react-styled-jsx/types/react/index.d.ts
cd "$BASE_DIR"
yarn lint || exit $?
yarn build || exit $?
exit 0
