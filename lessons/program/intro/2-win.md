---
author: Sora Tonami
date: 2025/04/23
description: ロボット制御のための環境を整えよう！
layout: default
modified: 2025/05/28
title: 環境を整えよう その2 Windows編 \| ロボット制御入門 \| 制御講習
title-short: 環境を整えよう その2 Windows編
---

前回はどのようなツール・アカウントが必要なのかを説明しました。\
今回はWindows環境におけるインストール方法です。Linuxに比べるとちょっと煩雑だけど頑張って♡

また、Windows特有の問題として、**圧縮ファイルがフォルダのように開けるせいで展開し忘れる**というものがあります(ﾎﾝﾏｸｿ)ので気を付けてね。

## インストール方法

### Arm GNU Toolchain

[Arm GNU Toolchain Downloads]の`arm-gnu-toolchain-***.***.rel***-mingw-w64-x86_64-arm-none-eabi.exe`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`arm-gnu-toolchain-14.2.rel1-mingw-w64-x86_64-arm-none-eabi.exe`らしいっす。

~~あとは「設定」→「システム」→「バージョン情報」→「システムの詳細設定」→「環境変数」から環境変数`Path`にインストール先\*\*配下の`bin`を(ここ重要)\*\*追加して完了です。~~

Path追加はしなくてもいいっぽいけど、どのみちインストール先がどこかってのは要るので**メモしとくか分かりやすいトコに置いてね**。\
インストール先はデフォルトで`C:\Program Files (x86)\Arm GNU Toolchain arm-none-eabi\***.*** rel***`みたいな名前のトコです。\
執筆時点では`C:\Program Files (x86)\Arm GNU Toolchain arm-none-eabi\14.2 rel1`らしいっす。

### CMake

~~Download
CMakeの`cmake-***.***.***-windows-x86_64.msi`みたいな名前のヤツを落として画面の指示に従って下さい。\
執筆時点では`cmake-4.0.1-windows-x86_64.msi`らしいっす。~~

CLionに付いてくるみたいです。なのでインスコはしなくておｋ。

### Ninja Build

[ninja-build/ninja]の`ninja-win.zip`を落として**展開して下さい**。\
`ninja.exe`が出てくるハズなので`C:\`直下にでもテキトーにディレクトリ作ってぶち込んどいて下さい。

~~あとは「設定」→「システム」→「バージョン情報」→「システムの詳細設定」→「環境変数」から環境変数`Path`に`ninja.exe`をぶち込んだディレクトリを追加して完了です。~~

こっちもPath追加はしなくていいっぽいけど、インストール先がどこかってのは要るので**メモか分かりやすいトコに置くように**。

### OpenOCD

[openocd-org/openocd]の`openocd-v***.***.***-i686-w64-mingw32.tar.gz`みたいな名前のヤツを落として下さい。\
**その場にぶちまけられるのでちゃんと空っぽのディレクトリを`C:\`直下にでも用意してから展開して下さい。(ここ重要)**

~~...展開したらその中の`bin`を「設定」→「システム」→「バージョン情報」→「システムの詳細設定」→「環境変数」から環境変数`Path`に追加して完了です。~~

こっちも例によってPath追加はしなくていいっぽいけど、インストーｒ(ry

### STM32CubeMX

[STM32CubeMX]から落として展開します。\
中に入ってる`SetupSTM32CubeMX-***.***.***-Win.exe`みたいな名前のヤツを実行して画面の指示に従って下さい。

### JetBrains Toolbox

[JetBrains Toolbox App]で「ダウンロード」を押して実行して画面の指示に従って下さい。

### JetBrains CLion

JetBrains Toolboxを開いて画面の通りにCLionをインスコして下さい。

## 次回予告

今回で必要なツールは揃いました。\
次回はいよいよ実際にプロジェクトを作っていきます。

[前へ](1)・[次へ](3)

[ロボット制御入門Topへ](..#%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%88%B6%E5%BE%A1%E5%85%A5%E9%96%80)

[arm gnu toolchain downloads]: https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads
[jetbrains toolbox app]: https://www.jetbrains.com/ja-jp/toolbox-app/
[ninja-build/ninja]: https://github.com/ninja-build/ninja/releases/latest
[openocd-org/openocd]: https://github.com/openocd-org/openocd/releases/latest
[stm32cubemx]: https://www.st.com/ja/development-tools/stm32cubemx.html
