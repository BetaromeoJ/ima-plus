# CHANGELOG

## 2026-10-08 — 素材の一部差し替え

- 講師写真を正式素材として組み込み（`images/common/teacher-wada.jpg`、480×480px・約26KB、円形表示）。
- 「LINEで質問する」をLINE公式URL（https://lin.ee/tDPCOhaZ）へのリンクに差し替え（同じタブで開く）。
- og:url に公開URL（https://betaromeoj.github.io/ima-plus/）を設定。
- 使わなくなったPlaceholder用のスタイルを削除。
- CSS／JSの版番号を `?v=20261008` に更新。

## 2026-10-07 — STEP 10 BUILD 第1段階：レビュー反映

- 目次の章3を、本文の正式な見出し「Geminiは、物知りで仕事の速い新人アシスタント。」に統一（TYPE B。COPYの目次項目も同じ文言に更新が必要）。
- 章見出しの読み上げを調整（TYPE A）。章番号のあとに「、」、「やってみる」のあとに「｜」を、画面には出さず読み上げ環境にだけ伝える。
  - 例：「5、やってみる｜Michiさんの場合」
- 目次6「最初のひとこと」が語の途中で折り返さないよう調整（TYPE A）。
- README に「第2段階で必ず確認すること」を追加（回答欄の320px確認、実機確認）。
- 3つの約束・Gemini回答欄の設計は変更なし。

## 2026-10-07 — STEP 10 BUILD 第1段階

- 第1回「Geminiと話してみよう」のページを作成（`index.html`）。
  - 基準：SPEC v0.2／COPY v0.3／VISUAL_DIRECTION v1.0
  - HERO、常設の目次、全13章、フッター。
  - 章IDを固定（SPEC v0.2 3-3）。
  - `noindex` を設定。
- 共通スタイルを作成（`assets/css/style.css`）。VISUAL v1.0のカラートークン、BIZ UDPGothic／明朝3か所、モバイルファースト。
- iPhone／Androidの手動切替を作成（`assets/js/script.js`）。自動判定なし・保存なし。JavaScriptが無効でも両OSの手順を表示。
- 未確定の素材はPlaceholderで実装（`PLACEHOLDER:` で検索可能）。
  - 操作スクリーンショットと手順の文、回答画面3枚、講師写真、LINE公式URL、OGP画像。
- 画像フォルダ `images/common/`・`images/01/` を用意（中身は第2段階で追加）。
- スマホ幅で文の途中に不自然な折り返しが出る9か所の改行を、幅640px以上でだけ効かせるよう調整（TYPE A。文言は変更なし）。
