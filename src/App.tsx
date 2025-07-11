import "./App.css";
import { Button } from "./components/ui/button";
function App() {
  const handleClick = () => {
    console.log("Button clicked!");
    alert("Button clicked!");
  };
  return (
    <>
      {/* // 通常のボタン（default variant） */}
      <Button className="text-black" onClick={handleClick}>
        クリック
      </Button>
      {/* // 危険なアクション用のボタン（destructive variant） */}
      <Button variant="destructive">削除</Button>
      {/* // アウトライン型のボタン */}
      <Button variant="outline">キャンセル</Button>
      {/* // 小さいサイズのボタン */}
      <Button size="sm">小さいボタン</Button>
      {/* // 大きいサイズの削除ボタン */}
      <Button variant="destructive" size="lg">
        大きな削除ボタン
      </Button>
      {/* // アイコン専用ボタン */}
      <Button variant="ghost" size="icon">
        ああ
      </Button>
    </>
  );
}

export default App;
