---
author: Sora Tonami
date: 2024/12/06
description: 制御班が仕事をする上で、パソコンはもちろん、プログラムを書く専用の鬼強メモ帳「IDE」が必要となるのでまず入れましょう。
layout: default
modified: 2024/12/06
title: 準備 \| 制御班入門 \| 制御講習
title-short: 準備
---

制御班が仕事をする上で、パソコンはもちろん、プログラムを書く専用の鬼強メモ帳「IDE」が必要となるのでまず入れましょう。\
...どうせ皆さん窓の民でしょうから解説は全部窓前提で書きます。\
IDEに関しては色々あるけど~~STM32CubeIDEなんてクソIDE使ってられねーので~~JetBrains
CLionを使います。学生である限り無料です。神ｨ？！

## ライセンス手に入れよう

まずJetBrainsの公式サイトの[申し込みページ](https://www.jetbrains.com/shop/eform/students)から学生ライセンスを申し込みましょう。

|     フィールド名      |        入れるべき内容        |
| :-------------------: | :--------------------------: |
|       申請方法        |   「大学のメールアドレス」   |
|         身分          |           「学生」           |
|       国 / 地域       |           「日本」           |
|      学習レベル       |          「学部生」          |
|   主な研究分野は(ry   |          どっちでも          |
|    メールアドレス     | 学校から賜りしメールアドレス |
|         名前          |  名・姓の順番で日本語で名前  |
|   私は13歳未満です    |             外す             |
| JetBrains Account (ry |            入れる            |
|  関連する調査への(ry  |    要するにメルマガ要るか    |

入れたら「無料製品を申し込む」を押してメールを待ちましょう。

多分数分以内に学校のメールアドレスにJetBrainsからメールが届くはずなので、「Confirm
request」とか「リクエストを確認」とかそれっぽいとこを押します。曖昧なのは許して(懇願)\
そしたら更にメールが届くらしいので、「Confirm your
account」とか「アカウントを確認」とかそれっぽいとこを押すとなんかJetBrainsアカウントのページに飛ばされるみたいなので、そこでJetBrainsアカウントを作らされるっぽいので作ってね。こっちのメールアドレスは学校のじゃなくてもいい。

## JetBrains ToolboxとCLion入れよう

JetBrainsのIDEはJetBrains
Toolboxというソフトで管理するのでまずコイツを入れます。\
[公式サイト](https://www.jetbrains.com/ja-jp/toolbox-app)から入れられるので「ダウンロード」押してインスコしてください。
終わったらToolbox起動して画面の指示に従って初期設定を進めてこの画面まで来ましょう。

![JetBrains Toolbox](/assets/lessons/program/jetbrains-toolbox.png)

...なんか色々入ってますが皆さんはインストール済みツールが空っぽのはずなので、入手可能の中からCLionを見つけてインスコしてください。ちょい時間掛かるんで気長に待ちませう。

## その他もろもろ入れよう

IDEは入れたので他に必要な雑多どもを入れましょう。\
大体コイツらが要ります。

- [OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases)\
  プログラムをマイコンに書き込んだりするやつ。`xpack-openocd-***`が並んでる一番下の`Show all *** assets`を押して出てくる
  `xpack-openocd-***-win32-x64.zip`を落として好きな場所(できればC:直下とか)へ展開しておく。その場所は後で使うので一応メモしておく。
- [Arm GNU Toolchain](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads)\
  マイコン(弊部では主にSTM32)向けのコンパイラとか諸々。`arm-gnu-toolchain-***-mingw-w64-i686-arm-none-eabi.exe`
  を実行してあとは流れで。
- [Ninja](https://github.com/ninja-build/ninja/releases)\
  なんか速いビルドツール。`ninja-win.zip`を落として好きな場所(できればC:直下とか)へ展開しておく。その場所は後で使うのでメモしておく。
- [CMake](https://cmake.org/download)\
  ビルドのためのファイルを生成するやつ。`cmake-***-windows-x86_64.msi`を実行してあとは流れで。
- STM32CubeMX\
  STM32系マイコンのプログラムを書くのに必要な最低限のプログラムを自動生成してくれるやつ。kwskは後ほど。
