---
author: Sora Tonami
date: 2025/01/22
description: Gitに関する用語集です。
layout: default
modified: 2025/01/22
title: Git編 \| 用語集 \| 制御講習
title-short: 用語集 Git編
---

Gitに関する用語集です。

|       日本語       |        英語         | 意味                                                                                                                                                                                                                                        |
| :----------------: | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     リポジトリ     |    `repository`     | ソースコードとか色んなものをバージョン管理しておく場所のこと。                                                                                                                                                                              |
| ローカルリポジトリ | `local repository`  | リポジトリのうち、手元にある方。                                                                                                                                                                                                            |
| リモートリポジトリ | `remote repository` | リポジトリのうち、サーバーとかに置いてる方。GitHubのリポジトリとか。                                                                                                                                                                        |
|      ブランチ      |      `branch`       | 作業内容などに応じて適宜切り分けるサブのリポジトリ的なやつ。                                                                                                                                                                                |
|     作業ツリー     |   `working tree`    | 我々が実際に作業してるディレクトリのこと。                                                                                                                                                                                                  |
|      ステージ      |   `staging area`    | コミットの対象にしたファイル共が仮想的に置かれる場所のこと。                                                                                                                                                                                |
|      コミット      |      `commit`       | ステージの内容をリポジトリに反映すること。                                                                                                                                                                                                  |
|  コミットハッシュ  |    `commit hash`    | コミットごとに割り振られているIDっぽいやつのこと。40桁の16進数が正式なコミットハッシュだけど他と被ってなければ先頭数桁だけでも使える。                                                                                                      |
|    コミットログ    |    `commit log`     | 今までのコミットの記録のこと。一番最初のコミットから現在の最終コミットまでの系譜を辿ることができる。                                                                                                                                        |
|      プッシュ      |       `push`        | ローカルリポジトリの内容をリモートリポジトリに送ること。                                                                                                                                                                                    |
|        プル        |       `pull`        | リモートリポジトリの内容をローカルリポジトリに持ってきて反映させること。                                                                                                                                                                    |
|      フェッチ      |       `fetch`       | リモートリポジトリの内容をローカルリポジトリに持ってくること。反映はしない。                                                                                                                                                                |
|       マージ       |       `merge`       | 他のブランチの内容を現在のブランチに統合するやつその1。他のブランチの変更内容をまとめたコミットを1個作ることで統合する。ただし一部状況でよりスマートな`fast-forward`が可能。                                                                |
| ファストフォワード |   `fast-forward`    | 自分側ブランチから相手側ブランチが切り分けられてから相手側ブランチしか更新されていなかった場合に可能なマージ。変更内容をまとめたコミットを作る代わりに相手側ブランチの最終コミットを自分側ブランチの最終コミットとすることで統合する。      |
|      リベース      |      `rebase`       | 他のブランチの内容を現在のブランチに統合するやつその2。相手側ブランチが切り分けられた次の時点の自分側のコミットが相手側最終コミットの後にされたかのように組み替えてやることで統合する。自分側の分岐点の元(`base`)を付け替えるから`rebase`。 |
