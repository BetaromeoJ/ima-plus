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

## 現在の状態（STEP 10 BUILD 第1段階）

次の素材は Placeholder です。Placeholderが残っている間は公開しません。
`PLACEHOLDER:` で検索すると、すべての差し替え箇所が見つかります。

- 操作スクリーンショット（iPhone／Android）と、Geminiを開く・Gemini Liveを始める手順の文
- 「もうひとこと」の実際の回答画面（3枚）
- 講師写真（`images/common/teacher-wada.jpg`）
- LINE公式URL
- OGP画像（任意）

## 第2回を追加するとき（今は実施しない）

SPEC v0.2 第12節に従います。最初に案内したルートURLは変えません。
第1回を `01/` へ移す場合は、参照パスの先頭に `../` を付けるだけで動く構成にしてあります。
章リンクの扱いは、第2回追加時のHuman Checkpointで決めます。
