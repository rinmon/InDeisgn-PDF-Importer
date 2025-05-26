// i18n.jsx
// 多言語サポートのための翻訳リソース
// 2025-05-26 CHOTTO NEWS / RINMON

var i18n = {
    "ja": {
        "title": "PDF取り込みツール",
        "selectFile": "ファイルを選択",
        "cropType": "クロップタイプ",
        "cropTypeOptions": ["トリミングサイズ", "アートサイズ", "ブリードサイズ", "メディアサイズ", "バウンディングボックス"],
        "pageRange": "ページ範囲",
        "startPage": "開始ページ",
        "endPage": "終了ページ",
        "targetPage": "配置先ページ",
        "pagePosition": "配置位置",
        "positionOptions": ["左上", "上中央", "右上", "左中央", "中央", "右中央", "左下", "下中央", "右下"],
        "scale": "スケール",
        "scaleX": "X",
        "scaleY": "Y",
        "rotation": "回転",
        "rotationOptions": ["0°", "90°", "180°", "270°"],
        "transparentBg": "透明背景",
        "newLayer": "新規レイヤー",
        "layerName": "レイヤー名",
        "pageMapping": "ページマッピング",
        "ok": "OK",
        "cancel": "キャンセル",
        "language": "言語",
        "languageOptions": ["日本語", "English"],
        "selectPDFFile": "PDFファイルを選択",
        "error": "エラー",
        "invalidPageRange": "無効なページ範囲です",
        "processingFile": "ファイル処理中...",
        "complete": "完了",
        "saveSettings": "設定を保存",
        "loadSettings": "設定を読み込み"
    },
    "en": {
        "title": "PDF Import Tool",
        "selectFile": "Select File",
        "cropType": "Crop Type",
        "cropTypeOptions": ["Trim Size", "Art Size", "Bleed Size", "Media Size", "Bounding Box"],
        "pageRange": "Page Range",
        "startPage": "Start Page",
        "endPage": "End Page",
        "targetPage": "Target Page",
        "pagePosition": "Position",
        "positionOptions": ["Top Left", "Top Center", "Top Right", "Middle Left", "Center", "Middle Right", "Bottom Left", "Bottom Center", "Bottom Right"],
        "scale": "Scale",
        "scaleX": "X",
        "scaleY": "Y",
        "rotation": "Rotation",
        "rotationOptions": ["0°", "90°", "180°", "270°"],
        "transparentBg": "Transparent Background",
        "newLayer": "New Layer",
        "layerName": "Layer Name",
        "pageMapping": "Page Mapping",
        "ok": "OK",
        "cancel": "Cancel",
        "language": "Language",
        "languageOptions": ["Japanese", "English"],
        "selectPDFFile": "Select PDF File",
        "error": "Error",
        "invalidPageRange": "Invalid Page Range",
        "processingFile": "Processing File...",
        "complete": "Complete",
        "saveSettings": "Save Settings",
        "loadSettings": "Load Settings"
    }
};

// 現在の言語を取得・設定するための関数
function getCurrentLanguage() {
    // 保存された言語設定があれば使用する
    try {
        var prefsFile = new File(Folder.userData + "/InDesignPDFImporterPrefs.txt");
        if (prefsFile.exists) {
            prefsFile.open("r");
            var prefsStr = prefsFile.read();
            prefsFile.close();
            
            var prefsObj = eval("(" + prefsStr + ")");
            if (prefsObj.language) {
                return prefsObj.language;
            }
        }
    } catch (e) {
        // エラー時はデフォルト言語を使用
    }
    
    // InDesignの言語設定から推測
    var locale = app.locale.toString();
    if (locale.indexOf("ja_") === 0) {
        return "ja";
    }
    
    // デフォルトは英語
    return "en";
}

// 言語設定を保存する関数
function saveLanguagePreference(lang) {
    try {
        var prefsObj = {};
        var prefsFile = new File(Folder.userData + "/InDesignPDFImporterPrefs.txt");
        
        // 既存の設定がある場合は読み込む
        if (prefsFile.exists) {
            prefsFile.open("r");
            var prefsStr = prefsFile.read();
            prefsFile.close();
            
            try {
                prefsObj = eval("(" + prefsStr + ")");
            } catch (e) {
                prefsObj = {};
            }
        }
        
        // 言語設定を更新
        prefsObj.language = lang;
        
        // 設定を保存
        prefsFile.open("w");
        prefsFile.write(prefsObj.toSource());
        prefsFile.close();
        
        return true;
    } catch (e) {
        return false;
    }
}

// 指定されたキーのテキストを現在の言語で取得
function getText(key) {
    var lang = getCurrentLanguage();
    if (i18n[lang] && i18n[lang][key]) {
        return i18n[lang][key];
    }
    // フォールバック: 英語のテキストを返す
    if (i18n["en"] && i18n["en"][key]) {
        return i18n["en"][key];
    }
    // テキストが見つからない場合はキーをそのまま返す
    return key;
}
