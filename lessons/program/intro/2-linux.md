---
author: Sora Tonami
date: 2025/04/23
description: ロボット制御のための環境を整えよう！
layout: default
modified: 2025/05/05
title: 環境を整えよう その2 Linux編 \| ロボット制御入門 \| 制御講習
title-short: 環境を整えよう その2 Linux編
---

前回はどのようなツール・アカウントが必要なのかを説明しました。\
今回はLinux環境におけるインストール方法です。窓共に比べて遥かに楽です。やったね！\
ちなみにLinux環境と言いつつ筆者の使ったことのあるDebian系・Arch Linux・NixOSしか書いてないのは許して♡

## インストール方法

### 色々

Debian系：

```terminal
sudo apt install -y cmake gcc-arm-none-eabi ninja-build openocd
```

Arch Linux (pacman + makepkg)：

```terminal
sudo pacman -S --noconfirm arm-none-eabi-gcc cmake git ninja openocd
git clone https://aur.archlinux.org/jetbrains-toolbox.git
pushd jetbrains-toolbox
makepkg -cs
sudo pacman -U ./jetbrains-toolbox-*.pkg.tar.*
popd
git clone https://aur.archlinux.org/stm32cubemx.git
pushd stm32cubemx
makepkg -cs
sudo pacman -U ./stm32cubemx-*.pkg.tar.*
popd
```

Arch Linux (yay)：

```terminal
yay -S --noconfirm arm-none-eabi-gcc cmake jetbrains-toolbox ninja openocd stm32cubemx
```

NixOS (flake.nix)：

```nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  outputs =
    { nixpkgs, ... }:
    let
      pkgs = import nixpkgs {
        inherit system;
      };
      system = "x86_64-linux";
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          cmake
          ninja
          openocd
          pkgsCross.armhf-embedded.buildPackages.gcc
          stm32cubemx
        ];
      };
    };
}
```

NixOS (flake.nix + flake-utils)：

```nix
{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils"
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs =
    { flake-utils, nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.${system}.default = pkgs.mkShell {
          packages = with pkgs; [
            cmake
            ninja
            openocd
            pkgsCross.armhf-embedded.buildPackages.gcc
            stm32cubemx
          ];
        };
      }
    );
}
```

NixOS (flake.nix + flake-parts)：

```nix
{
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
  };
  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              cmake
              ninja
              openocd
              pkgsCross.armhf-embedded.buildPackages.gcc
              stm32cubemx
            ];
          };
        };
      systems = [
        "x86_64-linux"
      ];
    };
}
```

### JetBrains Toolbox App(Arch Linux・NixOS以外)

[JetBrains Toolbox App]で「ダウンロード」を押して落として展開して下さい。\
中に`jetbrains-toolbox-***.***.***.***/jetbrains-toolbox`が入ってるのでどっかに入れてPATH通して下さい。

### JetBrains CLion(NixOS以外)

JetBrains Toolboxを開いて画面の通りにCLionをインスコして下さい。

### STM32CubeMX(Arch Linux・NixOS以外)

[STM32CubeMX]から落として展開します。\
中に`SetupSTM32CubeMX-***.***.***`みたいな名前のヤツを実行して画面の指示に従って下さい。

## 次回予告

次回はいよいよ実際にプロジェクトを作っていきます。

[次へ](3)

[jetbrains toolbox app]: https://www.jetbrains.com/ja-jp/toolbox-app/
[stm32cubemx]: https://www.st.com/ja/development-tools/stm32cubemx.html
