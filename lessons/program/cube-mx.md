---
author: "Sora Tonami"
category: "プログラミング"
date: "2024/12/09"
description: "STM32CubeMXとは、STM32系マイコンを使う上で最低限必要なコードを使いたい機能に合わせて自動生成してくれる公式のソフトです。"
layout: "default"
modified: "2024/12/14"
tags:
  - "STM32"
  - "STM32Cube"
  - "STM32CubeMX"
  - "組み込み開発"
title: "STM32CubeMX \\| 制御講習"
title-short: "STM32CubeMX"
---

<!--suppress HtmlUnknownTarget -->

STM32CubeMXとは、STM32系マイコンを使う上で最低限必要なコードを使いたい機能に合わせて自動生成してくれる公式のソフトです。わざわざ難解な文書を大量に読まなくてもプログラムが書けるので神です。崇め称えましょう。
<small>ただし日本語はない</small>

## 導入

ST社の[公式サイト](https://www.st.com/ja/development-tools/stm32cubemx.html)へ飛んで下の方にある「ソフトウェア入手」から
`STM32CubeMX-Win`の「最新バージョンを取得」を押したらなんか出るので「承諾」。  
MyST垢作れとか言われますが右下の「ゲストとしてダウンロード」を押して色々テキトーに入力すれば落とせます。

あとは落としたインストーラを実行して画面の指示に従ってインスコして下さい。  
途中でなんかポップアップでインストール要求されるはずなのでそいつもインスコ。

## プロジェクト作成

![STM32CubeMX ホーム画面]({{ '/assets/lessons/program/cube-mx-home.png' | relative_url }})

開くとホーム画面が見えます。赤丸部分がいわゆる「最近開いたプロジェクト」、青丸部分が「新規プロジェクト」となってます。前者はまぁ見たままなので後者の方を解説します。

3つボタンがあるはずですがそれぞれ

- 使うマイコンを選ぶ(部員による自作基板を使う時)
- 使う基板を選ぶ(Discovery・Nucleoを使う時)
- サンプルを選ぶ(使ったことないから分からん...)

となっています。押すとしばらくロードが入ります。途中でワンチャンYes/Noとか出てくるかもしれませんが多分Yesで大丈夫です。

![STM32CubeMX 新規プロジェクト作成画面]({{ '/assets/lessons/program/cube-mx-new-project.png' | relative_url }})

ロードが終わるとこんな画面が出るはずです。画像はマイコン選択の画面ですが基板選択とかも大筋一緒の画面です。

まず使いたいマイコン・基板の名前を調べます。表面に書いてあるはずなので頑張って読んで下さい。それかﾊﾟｲｾﾝ共に聞けば多分教えてくれます。多分。  
分かったらそれを青丸のとこへぶち込みます。例えば`STM32F407VGT6`とか。ちょっと下にある箱に入れないようにしましょう。

そしたら赤丸の部分に検索結果が出てくるので選んで緑丸の部分のボタンを押します。  
複数出てきたらとりあえず一番上選んどいて下さい。前方一致なので。

## プロジェクト編集

![STM32CubeMX ピン設定画面]({{ '/assets/lessons/program/cube-mx-project-pin.png' | relative_url }})

プロジェクトを作成したり開いたりするとまずこの画面に飛ばされます。  
この画面はマイコンの大量にあるピンに役割を割り振ってやるもので、部員の自作基板なら基板設計者から、評価ボードならネットから仕様書をもらって参考にしながら割り当てます。

左から

- 機能一覧
- 機能設定(画像では非表示)
- 割り当て図(灰:未割り当て ベージュ:電源 黄色:追加設定が必要 緑:有効)

となってます。割り当て図ではピンをクリックすることでそのピンに機能を割り当てられます。試しに右下の`PB12`を押してみて下さい。

![STM32CubeMX ピン選択状態]({{ '/assets/lessons/program/cube-mx-project-pin-selected.png' | relative_url }})

![STM32CubeMX クロック設定画面]({{ '/assets/lessons/program/cube-mx-project-clock.png' | relative_url }})

この画面はその名の通りマイコンのクロックの設定が出来ます。  
色々欄がありますが、基本的に真ん中にあるHCLK欄に数値を入れれば勝手にいい感じにしてくれます。神。

デカければデカいほど(消費電力はデカくなるが)速く動いてくれるので基本MAXでいいです(たまにMAXが使えない場合もあるけど)。  
この例では168MHzがMAXらしいのでこれをHCLKへ入力してEnterするとなんか警告窓が出るので「OK」を押してやるともう設定は完了です。
`Pinout & Configuration`へ戻って下さい。

![STM32CubeMX ピン設定画面]({{ '/assets/lessons/program/cube-mx-project-pin.png' | relative_url }})

下準備が終わったので試しにいくつかの機能を有効にしてみましょう。

機能一覧から`CAN1`(CategoriesだとConnectivityの中)を選択してみると機能設定に`Activated`とかいういかにもそれらしいチェックボックスが出てくるので入れます。

![STM32CubeMX CAN設定画面]({{ '/assets/lessons/program/cube-mx-project-can.png' | relative_url }})

そしたらなんか下の方がｺﾞﾁｬｯとするはずなので設定していきます。

ぶっちゃけ私もあんましよく分かってないんですが、通信速度を1Mbpsに設定するにはHCLKが168MHzの場合、

- `Prescaler (for Time Quantum)`
  →`7`
- `Time Quanta in Bit Segment 1`
  →`4 Times`
- `Time Quanta in Bit Segment 2`
  →`1 Times`

に設定するらしいです。

<details>
<summary>ちなみに...</summary>
<img alt="STM32 CAN 通信速度計算式" src="{{ '/assets/lessons/program/stm-can-speed-expr.png' | relative_url }}" />
<p>って式で計算するらしいです。</p>
</details>

TODO: ピン設定方法の解説

Λ=/////工事中/////=Λ
