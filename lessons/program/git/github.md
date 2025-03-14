---
author: "Sora Tonami"
category: "Git"
date: "2025/01/17"
description: "複数人で開発をする時、ソースコードを共有したり、バグ報告を受けたり、タスクの管理をすることが必要です。これらを一つのWebサイトに集約し使いやすくしたものがGitHubです。"
layout: "default"
modified: "2025/01/17"
tags:
  - "Git"
  - "GitHub"
title: "GitHubを使い始める \\| チーム開発・Git入門 \\| 制御講習"
title-short: "GitHubを使い始める"
---

複数人で開発をする時、ソースコードを共有したり、バグ報告を受けたり、タスクの管理をすることが必要です。
これらを一つのWebサイトに集約し、使いやすくしたものがGitHubです。

この記事では各機能の簡単な紹介をしていきます。
前提としてGitHubアカウントが必要ですが筆者が力尽きたのでアカウント作成方法は端折ります。各自テキトーに作ってちょ。

## Gitリポジトリ管理機能

名前にもある通り**Git**Hubなので当然Gitリポジトリを管理できます。
右上の「+」から「New Repository」を選ぶと作成できます。

「Repository template」は文字通りテンプレートとするリポジトリを選択できます。
GitHub上でテンプレートとして使う設定をしたリポジトリが選択できます。正味使わん。

「Owner」はリポジトリの所有者です。自分の他に所属団体が選べます。

「Repository name」は文字通りリポジトリ名です。当然分かりやすい名前が一番です。
多くの場合小文字とハイフンで構成されてるけど別に大文字もアンダースコアも使えたはず。

「Description」はリポジトリ(で管理してるもの)の説明。
リンク貼ったときとかリポジトリページの右上に出てくる短い説明文。英文にして1文程度。

「Public」「Private」はリポジトリの公開範囲。Privateだと自分と許可した人のみ(所属団体がOwnerの場合団体構成員も)見える。

以下3つはONとかにすると(特に既にあるリポジトリをpushするケースにおいて)**めんｄことになるので**触らんほうがいいやで。

「Add a README file」はリポジトリにREADME(リポジトリ(で管理してるもの)の説明書いたファイル)を作っておくかを決めます。

「Add .gitignore」はリポジトリで管理したくない・しない方がいいファイルのリスト`.gitignore`をどのテンプレートから作成するかを選びます。
ただしここでは一種しか選べないため、[github/gitignore](https://github.com/github/gitignore)から自分で必要なのを取ってきてコピペした方がいいです。

「Choose a license」はリポジトリのライセンスを選びます。有名どころのライセンスはここに載ってますが、
人気度では一二を争う(主観)The MIT LicenseはCopyrightに自分で名前を書く必要があるなど追加操作が必要なので大人しく自分で作った方が早いっす。

## Issue

GitHubにはリポジトリごとに更にいくつか機能が生えてます。
バグ報告や機能追加提案などを投げて議論できるIssueもその一つです。
上部のバーの「Issues」を開くとIssue一覧が見えます。「New Issue」でIssueを作成できます。

「Add a title」にIssueのタイトルをぶち込みます。検索した時にデカデカと見えるのでできるだけ簡潔で分かりやすいのがBest。

「Add a description」は任意ですがよっぽどタイトルが自明過ぎるんでもなけりゃ書くのが無難です。
例えばバグ報告なら、何をした時に、どういう内容のバグが発生し、本来はどうなっているべきか、などを書きます。
例えば機能追加提案なら、どういう内容の機能が、どういったユースケースで役に立つのか、などを書きます。

Issueは作成すると、以降はコメントの形式で他のユーザーと会話できます。
バグが修正されたり機能が実装されたりした場合、もしくは対応予定がない場合にはIssueを閉じます。
Issueを閉じることで検索(デフォルト設定)から除外され、他のIssueが探しやすくなります。

## Pull request

通称PRと呼ばれるこの機能はブランチかForkとセットで使われます。

Forkとは、他の人のリポジトリを自分のリポジトリとしてコピーして持ってくる機能です。
自分の開発をそっちで行うことで元々あるリポジトリを汚さずに開発することができるのです。

自分のリポジトリの切ったブランチ、もしくはForkしたリポジトリで行った変更を大本のブランチに統合する提案をすること、これがPull requestです。
上部のバーの「Pull requests」を開くとPull request一覧が見えます。「New pull request」でPull requestを作成できます。

まず統合したいブランチの選択画面が出てきますが、
ForkからPullさせたい場合は「compare across forks」といういかにもそれらしいリンクがあるのでここを押してください。
「base」には統合先、つまりコピー元のリポジトリのブランチを指定します。
「compare」には統合元、つまりコピー先のリポジトリか切った方のブランチを指定します。

変更点が下に全部出るので確認したけりゃして下さい。右上の方に出てる「Create pull request」でPull request作成画面に飛ばされます。

あとはIssueとほぼ同じです。要するに自分でバグ修正・機能追加までする時のIssueだと思えばいいです。

## Discussion

IssueやPull requestは主にリポジトリで管理してるものの開発に関することを話し合いますが、
方針決定の投票や使い方、質問とか開発以外の話題を議論する場がDiscussionです。
上部のバーの「Discussions」を開くとDiscussion一覧が見えます。「New Discussion」でDiscussionを作成できます。

リポジトリ管理者が作成したカテゴリの中から議論内容を選びます。

「Discussion title」にはタイトルを書きます。Issueとかと同じです。

その下には本文を書きます。Issueとかと同じです。

投票系のカテゴリだった場合、追加で2つ項目が生えます。
「Poll question」には質問を書きます。「バナナはおやつに入りますか？」的なね。

「Poll options」には回答を書きます。「はい」「いいえ」「どちらともいえない」的なね。

Discussionは作成すると、Issueとかと同じで会話ができますが、Discussionだけの機能として、
最も分かりやすい回答(要するにベストアンサー)を決めることができます。

また、Discussionそのものも、「賛成票」の量に応じて一覧中で優先的に表示されるなど、よりコミュニティの傾向が分かりやすくなっています。

## Project

GitHubではIssueなどを活用してタスク管理することすら可能です。
ProjectはタスクをIssueとして管理し、自分のタスク一覧やタスクの進行状況一覧、タスクのスケジュールなどを
複数のビューに分けて見ることができるプロジェクト管理機能です。

タスク一覧の並び方、表示するもののフィルター、スケジュールの粒度などは全てカスタマイズ可能で、ビューを増やしたり減らすことも可能です。
プロジェクトの規模に合わせて自由に配置できます。

上部のバーの「Projects」を開くとProject一覧が見えます。「New project」でProjectを作成できます。

kwskは[公式ドキュメント](https://docs.github.com/ja/issues/planning-and-tracking-with-projects)読んで下さい。(丸投げ)

## 軽いファイル編集

ここまでGitHubの魅力的な機能を紹介してきましたが、一応GitHubはリポジトリ管理サイトなので、
リポジトリのファイルを1個ずつ編集する程度の軽い操作なら可能です。

リポジトリのファイル一覧からファイルを開くと(編集権限があれば)右上にペンのアイコンが出ます。
押すと編集画面に飛ばされます。

上部ではファイル名の変更ができます。
編集窓左上の「Edit」「Preview」は編集/プレビューの切り替えスイッチで、「Edit」側は通常の編集画面、「Preview」は
Markdownの場合には実際にページのコードに変換されたMarkdownのプレビューが、それ以外の場合には編集箇所のdiffがそれぞれ見れます。

編集が終わったら「Commit changes...」を押してコミット編集画面に移動します。
コミットメッセージのベストプラクティスは昔からずっと合戦状態で未だにこれといったものはありませんが、
簡潔に何をどうしたかを書くのがいいと思います。多分。

ちなみにコミットメッセージは**上の方のテキストボックス**です。**小さい方**です。
大きくて下にある方はコミットメッセージとして表示されないので注意。

## 最後に

なんだかんだで勢いで書いたけど大体のことは[公式ドキュメント](https://docs.github.com/ja)に書いてあるし大体のページ日本語なのでぶっちゃけこっち読んだ方早い。(本末転倒)
ともかくGitHub便利なんで。みんな活用してちょ。あわよくばこの講習書くのも手伝って♡(他力本願寺)
