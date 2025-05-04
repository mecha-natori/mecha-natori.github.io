---
author: Sora Tonami
date: 2025/04/23
description: ロボット制御のための環境を整えよう！
layout: default
modified: 2025/04/23
title: 環境を整えよう \| ロボット制御入門 \| 制御講習
title-short: 環境を整えよう
---

ロボットの制御をするためには様々なツールが必要です。\
今回はそのツール一式をインストールしましょう！

(足りなかったらIssue投げて下さい)

## ツールの説明

### JetBrains CLion

弊部で使わせようと画策しているIDEです。使いやすい(主観ﾏｼﾏｼ)です。\
要JetBrains垢です。

### JetBrains Toolbox

JetBrains CLionを始めとするJetBrains製品を管理するヤツです。\
公式も推奨してるのでNixOSユーザー以外は使おう。

### STM32CubeMX

弊部で使ってるマイコン向けのプログラムのテンプレートを吐いてくれるヤツです。tskr\
Arch
Linux・NixOSユーザー以外は要MyST垢です。\
(やろうと思えば直リンクで全環境不要にも出来るんだろうけど複雑になりそーなので却下)

### Arm GNU Toolchain

弊部で使ってるマイコン向けの、いわゆるコンパイラとかが一緒くたになったセットです。

### Ninja Build

ビルドしてくれるヤツです。なんか速いです。

### CMake

ライブラリとか簡単に組み込めるようにしてくれるヤツです。

### OpenOCD

マイコンに作ったプログラムをカキコしてくれるヤツです。

## アカウント作成

### JetBrainsアカウント

まず[JetBrains公式]でフツーにアカウントを作ります。**この時使うメアドは**何でもいいです。

あとは「JetBrains 学生」とでもggって下さい。(TODO: 学生ライセンス周りの解説追加)

### MySTアカウント

[STマイクロエレクトロニクス]でMySTアカウントを作ります。

## インストール方法 for Windows

### Arm GNU Toolchain

[Arm GNU Toolchain Downloads]の`arm-gnu-toolchain-***.***.rel***-mingw-w64-x86_64-arm-none-eabi.exe`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`arm-gnu-toolchain-14.2.rel1-mingw-w64-x86_64-arm-none-eabi.exe`らしいっす。

### Ninja Build

[ninja-build/ninja]の`ninja-win.zip`を落として展開して下さい。\
`ninja.exe`が出てくるハズなので`C:\`直下にでもテキトーにディレクトリ作ってぶち込んどいて下さい。

あとは`sysdm.cpl`から環境変数`PATH`に`ninja.exe`をぶち込んだディレクトリを追加して完了です。

### CMake

[Download CMake]の`cmake-***.***.***-windows-x86_64.msi`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`cmake-4.0.1-windows-x86_64.msi`らしいっす。

### OpenOCD

[openocd-org/openocd]の`openocd-v***.***.***-i686-w64-mingw32.tar.gz`みたいな名前のヤツを落として下さい。\
**その場にぶちまけられるのでちゃんと空っぽのディレクトリを`C:\`直下にでも用意してから展開して下さい。(ここ重要)**

...展開したらその中の`bin`を`sysdm.cpl`から環境変数`PATH`に追加して完了です。

### JetBrains Toolbox

[JetBrains Toolbox App]で「ダウンロード」を押して実行して画面の指示に従って下さい。

### JetBrains CLion

JetBrains Toolboxを開いて画面の通りにCLionをインスコして下さい。

### STM32CubeMX

[STM32CubeMX]から落として展開します。\
中に入ってる`SetupSTM32CubeMX-***.***.***-Win.exe`みたいな名前のヤツを実行して画面の指示に従って下さい。

## インストール方法 for Linux

### 色々

Debian系：

```terminal
sudo apt install -y cmake gcc-arm-none-eabi ninja-build openocd
```

Arch Linux(pacman+makepkg)：

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

Arch Linux(yay)：

```terminal
yay -S --noconfirm arm-none-eabi-gcc cmake jetbrains-toolbox ninja openocd stm32cubemx
```

NixOS(flake.nix)：

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

### JetBrains Toolbox App(Arch Linux・NixOS以外)

[JetBrains Toolbox App]で「ダウンロード」を押して落として展開して下さい。\
中に`jetbrains-toolbox-***.***.***.***/jetbrains-toolbox`が入ってるのでどっかに入れてPATH通して下さい。

### JetBrains CLion(NixOS以外)

JetBrains Toolboxを開いて画面の通りにCLionをインスコして下さい。

### STM32CubeMX(Arch Linux・NixOS以外)

[STM32CubeMX]から落として展開します。\
中に`SetupSTM32CubeMX-***.***.***`みたいな名前のヤツを実行して画面の指示に従って下さい。

[arm gnu toolchain downloads]: https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads
[download cmake]: https://cmake.org/download/
[jetbrains toolbox app]: https://www.jetbrains.com/ja-jp/toolbox-app/
[jetbrains公式]: https://www.jetbrains.com/ja-jp/
[ninja-build/ninja]: https://github.com/ninja-build/ninja/releases/latest
[openocd-org/openocd]: https://github.com/openocd-org/openocd/releases/latest
[stm32cubemx]: https://www.st.com/ja/development-tools/stm32cubemx.html
[stマイクロエレクトロニクス]: https://www.st.com/content/st_com/ja.html
