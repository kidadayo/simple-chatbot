// チャットボットの応答テンプレート
const responses = {
    "こんにちは": "こんにちは！何かお手伝いできることはありますか？",
    "おはよう": "おはようございます！今日も良い一日になりますように。",
    "さようなら": "さようなら！また来てくださいね。",
    "help": "以下のキーワードで質問できます：\n- こんにちは\n- おはよう\n- さようなら\n- ヘルプ",
    "ヘルプ": "以下のキーワードで質問できます：\n- こんにちは\n- おはよう\n- さようなら\n- ヘルプ"
};

// デフォルトの応答
const defaultResponse = "申し訳ありません。その質問にはお答えできません。「ヘルプ」と入力すると、利用可能なキーワードが表示されます。";

// チャットメッセージを表示する要素
const chatMessages = document.getElementById('chatMessages');
// 入力フィールド
const questionInput = document.getElementById('questionInput');

// メッセージを送信する関数
function sendMessage() {
    const question = questionInput.value.trim();
    if (question === '') return;

    // ユーザーのメッセージを表示
    addMessage('user', question);
    
    // ボットの応答を取得
    const response = responses[question] || defaultResponse;
    
    // ボットの応答を表示（少し遅延を入れて自然な対話を演出）
    setTimeout(() => {
        addMessage('bot', response);
    }, 500);

    // 入力フィールドをクリア
    questionInput.value = '';
}

// メッセージをチャット画面に追加する関数
function addMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // 最新のメッセージが見えるようにスクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Enterキーでメッセージを送信
questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// APIキー関連の機能は無効化
function showSettings() {
    alert('このバージョンではAPIキーは必要ありません。');
}

// 初期メッセージを表示
window.onload = () => {
    addMessage('bot', 'こんにちは！「ヘルプ」と入力すると、利用可能なキーワードが表示されます。');
};