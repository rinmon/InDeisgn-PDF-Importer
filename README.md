# InDesign PDF Importer

![Version](https://img.shields.io/badge/version-3.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![InDesign](https://img.shields.io/badge/InDesign-CC%202023+-orange.svg)

InDesign用PDFインポートユーティリティ。PDF、PDF互換AIファイル、およびInDesignファイルの複数ページを効率的に配置するためのスクリプト。

## 主な機能

* PDF、InDesign、PDF互換AIファイルの複数ページを一度に配置
* 最新のInDesign (2023/2024)との完全な互換性
* 多言語インターフェース対応（日本語・英語）
* ページ範囲の選択と配置先ページのマッピング
* 回転、スケーリング、配置位置の詳細設定
* 透明背景オプション
* レイヤーへの配置機能

## インストール方法

1. このリポジトリをクローンまたはZIPファイルとしてダウンロード
2. `src`フォルダ内の`PDF取り込み.jsx`ファイルをInDesignスクリプトフォルダにコピー:
   - **Mac**: `/Users/[ユーザー名]/Library/Preferences/Adobe InDesign/[バージョン]/[言語]/Scripts/Scripts Panel/`
   - **Windows**: `C:\Users\[ユーザー名]\AppData\Roaming\Adobe\InDesign\[バージョン]\[言語]\Scripts\Scripts Panel\`

## 使用方法

1. InDesignを起動
2. **ウィンドウ > ユーティリティ > スクリプト**を選択
3. スクリプトパネルで`PDF取り込み.jsx`をダブルクリック
4. 配置するPDFまたはInDesignファイルを選択
5. 表示されるダイアログで配置オプションを設定
6. 「OK」をクリックして配置を実行

## オプション設定

* **クロップタイプ**: ページ範囲、ブリード範囲、スラッグ範囲などから選択
* **ページ範囲**: インポートするページの開始と終了を指定
* **配置先ページ**: ドキュメント内のどのページから配置を開始するか
* **配置位置**: 左上、中央、右下など9つの位置から選択
* **オフセット**: ページ上の精密な配置位置を調整
* **スケール**: X/Y方向のサイズ調整（縦横比維持可能）
* **回転**: 0°、90°、180°、270°から選択
* **透明背景**: 透明背景で配置するかどうか
* **レイヤー**: 新規レイヤーに配置するオプション
* **ページマッピング**: PDF/InDesignページとドキュメントページの詳細なマッピング

## バージョン履歴

### 3.1.0 (2025-05-26)
- 日本語専用版スクリプトの追加（`PDF取り込み_日本語版.jsx`）
- 完全な日本語ユーザーインターフェース
- 使いやすさを向上した画面表示

### 1.0.0 (2025-05-26)
- 初回リリース
- 基本的なPDF/InDesignインポート機能
- 日本語インターフェース

## クレジット

* **開発**: CHOTTO NEWS / RINMON
* **元のスクリプト**: MultiPageImporter by Scott Zanelli (2010)

## ライセンス

MIT License

Copyright (c) 2025 RINMON / CHOTTO NEWS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
