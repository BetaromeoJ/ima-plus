# IMA+（イマプラス）研修サイト

「今さら」を、「今から」へ。

IMA+ 研修サイトの公開コードです。GitHub Pagesで公開します。

## 正本の役割分担

| 置き場所 | 役割 |
|---|---|
| Google Drive「00_IMA+共通仕様書・進捗台帳」 | IMA+全体の仕様・決定事項・進捗の正本 |
| このGitHubリポジトリ | 研修サイトの公開コードの正本 |
| Google Drive「01_研修サイト」 | COPY・VISUAL・SPECなどの制作文書と、成果物の控え |

文言は COPY、見た目は VISUAL_DIRECTION、構造・技術は SPEC に従います。
コードを直す前に、まず Drive の正本を確認してください。

## 構成

```
index.html              第1回の本体（ルートURL＝入口＝第1回）
assets/css/style.css    全回で共通のスタイル
assets/js/script.js     全回で共通のスクリプト（iPhone／Androidの切替のみ）
images/common/          全回で共通の画像（講師写真など）
images/01/              第1回の画像（操作スクリーンショットなど）
CHANGELOG.md            更新履歴
```

## 守ること

- 静的HTML／CSS／必要最小限のJavaScriptだけで作る。サーバー側の処理は使わない。
- すべて相対パスで書く（先頭が `/` のパスは使わない）。Project Pagesでも独自ドメインでも動くようにする。
- ファイル名・フォルダ名は半角小文字の英数字とハイフンだけ。
- 画像をBase64で埋め込まない。
- 章ID（`#teacher`、`#hitokoto` など）は変えない。LINEで送ったリンクを壊さないため。
- CSS・JSを更新したら、`index.html` の `?v=` を更新日に変える。
- Pilot期間は `noindex` を外さない。

## 公開先

- リポジトリ：`betaromeoj/ima-plus`
- 公開URL（ルートURL＝入口＝第1回）：https://betaromeoj.github.io/ima-plus/
- 参加者に最初に案内するこのURLは、今後も変えない。

## 現在の状態（2026-10-13：実画面を反映・GitHubへは未push）

- 第6〜8章に、iPhone実機の画面（2026年10月13日撮影・デモ用アカウント）を入れた。
- Androidは端末がないため撮影していない。案A（Androidを選ぶと案内文を表示）で対応している。Androidの画面は推測で作らない。
- 第8章は「夜に、翌朝の朝食を考える」場面の2段階（Michiさん決定）。
- 残っているPlaceholderは、OGP画像（任意）の1か所だけ（`PLACEHOLDER:` で検索）。
- HTMLの「要確認」コメント3か所は、Michiさんの確認待ち（Liveを始めるボタン、声で話したあとの送り方、Liveの終え方）。

画像の元データ（撮影したままのもの）は、Driveの「IMA+ / 02_素材」にある。

## 第2段階（実素材の差し替え）で必ず確認すること

- Geminiの回答欄・操作スクリーンショットが、幅320px前後のスマートフォンでも、拡大操作を前提にせず読めるか（SPEC v0.2 9-1）。読めない場合は切り抜くか、2枚に分ける。
- 実機確認：iPhone（Safari）、Android（Chrome）、LINEアプリ内ブラウザ。
- `PLACEHOLDER:` の検索結果が0件になっていること。
- 画面が公開直前のGeminiのUIと一致していること。

## 第2回を追加するとき（今は実施しない）

SPEC v0.2 第12節に従います。最初に案内したルートURLは変えません。
第1回を `01/` へ移す場合は、参照パスの先頭に `../` を付けるだけで動く構成にしてあります。
章リンクの扱いは、第2回追加時のHuman Checkpointで決めます。
