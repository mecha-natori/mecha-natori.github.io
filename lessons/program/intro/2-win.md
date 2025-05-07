---
author: Sora Tonami
date: 2025/04/23
description: ロボット制御のための環境を整えよう！
layout: default
modified: 2025/05/05
title: 環境を整えよう その2 Windows編 \| ロボット制御入門 \| 制御講習
title-short: 環境を整えよう その2 Windows編
---

前回はどのようなツール・アカウントが必要なのかを説明しました。\
今回はWindows環境におけるインストール方法です。Linuxに比べるとちょっと煩雑だけど頑張って♡

## インストール方法

### Arm GNU Toolchain

[Arm GNU Toolchain Downloads]の`arm-gnu-toolchain-***.***.rel***-mingw-w64-x86_64-arm-none-eabi.exe`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`arm-gnu-toolchain-14.2.rel1-mingw-w64-x86_64-arm-none-eabi.exe`らしいっす。

### CMake

[Download CMake]の`cmake-***.***.***-windows-x86_64.msi`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`cmake-4.0.1-windows-x86_64.msi`らしいっす。

### Ninja Build

[ninja-build/ninja]の`ninja-win.zip`を落として展開して下さい。\
`ninja.exe`が出てくるハズなので`C:\`直下にでもテキトーにディレクトリ作ってぶち込んどいて下さい。

あとは「設定」→「システム」→「システムの詳細設定」→「環境変数」から環境変数`PATH`に`ninja.exe`をぶち込んだディレクトリを追加して完了です。

### OpenOCD

[openocd-org/openocd]の`openocd-v***.***.***-i686-w64-mingw32.tar.gz`みたいな名前のヤツを落として下さい。\
**その場にぶちまけられるのでちゃんと空っぽのディレクトリを`C:\`直下にでも用意してから展開して下さい。(ここ重要)**

...展開したらその中の`bin`を「設定」→「システム」→「システムの詳細設定」→「環境変数」から環境変数`PATH`に追加して完了です。

### STM32CubeMX

[STM32CubeMX]から落として展開します。\
中に入ってる`SetupSTM32CubeMX-***.***.***-Win.exe`みたいな名前のヤツを実行して画面の指示に従って下さい。

### JetBrains Toolbox

[JetBrains Toolbox App]で「ダウンロード」を押して実行して画面の指示に従って下さい。

### JetBrains CLion

JetBrains Toolboxを開いて画面の通りにCLionをインスコして下さい。

## 次回予告

次回はいよいよ実際にプロジェクトを作っていきます。

[次へ](3)

[arm gnu toolchain downloads]: https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads
[download cmake]: https://cmake.org/download/
[jetbrains toolbox app]: https://www.jetbrains.com/ja-jp/toolbox-app/
[ninja-build/ninja]: https://github.com/ninja-build/ninja/releases/latest
[openocd-org/openocd]: https://github.com/openocd-org/openocd/releases/latest
