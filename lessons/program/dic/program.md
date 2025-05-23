---
author: Sora Tonami
date: 2025/01/22
description: プログラムに関する用語集です。
layout: default
modified: 2025/01/22
title: プログラム編 \| 用語集 \| 制御講習
title-short: 用語集 プログラム編
---

プログラムに関する用語集です。

|   日本語   |    英語    | 意味                                                                                                                                                   |
| :--------: | :--------: | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| プログラム | `program`  | 正に我々が書いてるもの。機械への指示書的なやつ。あーしろこーしろを事細かに書いていく。                                                                 |
| コンパイル | `compile`  | プログラムを機械が読み取れる形式にすること。                                                                                                           |
| コンパイラ | `compiler` | プログラムをコンパイルしてくれる奴ら。こいつのお叱り(エラー)はしっかり聞こうな。                                                                       |
|   リンク   |   `link`   | コンパイラが大量に吐いた機械が読めるプログラムをひとまとめにすること。                                                                                 |
|   リンカ   |  `linker`  | リンクして実際に書き込むやつにするやつ。                                                                                                               |
|   ビルド   |  `build`   | プロジェクト全体のコンパイル・リンクを行って実際に書き込むファイルを生成したりすること。                                                               |
|  ビルダー  | `builder`  | ビルドしてくれるやつ。                                                                                                                                 |
|    関数    | `function` | ある程度の処理をまとめたやつ。数学の関数と大筋一緒。ただし`f(x)`の`x`みたいな変数はなくてもいい(ﾊｧ?)                                                   |
|    変数    | `variable` | 好きな値を保存できるやつ。ただし種類(例えば整数・文字列・小数など)は最初に決めて固定。                                                                 |
|    宣言    | `declare`  | 「こんな変数があるよー」と書いてやること。あくまでも中身は書いてない。                                                                                 |
|    定義    |  `define`  | 実際に変数とか関数の中身を書いてやること。宣言と同時にやることが多い。                                                                                 |
|    代入    |  `assign`  | 変数に値をぶち込むこと。例えば`a = 1`なら変数`a`に`1`を代入すると言う。                                                                                |
|    定数    | `constant` | 最初に定義して以降、書き換えられない変数。例えばピン番号とか実行中には変わらないはずのものとか。                                                       |
|    期待    |  `expect`  | コンパイラが仕様を元に「次にこんなものが来るはずだ」と目星を付けること。主にそれが外れ(＝プログラムが間違っている)`unexpected token`エラーの形で見る。 |
