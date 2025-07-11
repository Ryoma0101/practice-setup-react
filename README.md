# Practice Setup React

React + TypeScript + Vite + ESLint + Prettier のプラクティス用セットアップです。

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/Ryoma0101/practice-setup-react.git
cd practice-setup-react
```

### 2. Node.js のセットアップ

**推奨：nvm を使用**

```bash
# nvmがインストールされていない場合
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Node.js 20 をインストール・使用
nvm install 20
nvm use 20
```

### 3. pnpm のインストール

```bash
npm install -g pnpm
```

### 4. 依存関係のインストール

```bash
pnpm install
```

## 利用可能なスクリプト

| コマンド | 説明 |
|----------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | プロダクション用にビルド |
| `pnpm preview` | ビルドした内容をプレビュー |
| `pnpm lint` | ESLintでコードチェック |
| `pnpm lint:fix` | ESLintで自動修正可能な問題を修正 |
| `pnpm format` | Prettierでコードフォーマット |
| `pnpm format:check` | Prettierのフォーマットチェック |

## 開発の流れ

1. 開発サーバーを起動
   ```bash
   pnpm dev
   ```

2. コーディング

3. コミット前にコードチェック
   ```bash
   pnpm lint
   pnpm format:check
   ```

4. 必要に応じて自動修正
   ```bash
   pnpm lint:fix
   pnpm format
   ```

## CI/CD

GitHub Actions を使用して、プッシュ時に以下が自動実行されます：

- ESLint によるコード品質チェック
- Prettier によるフォーマットチェック
- TypeScript の型チェック

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **リンター**: ESLint
- **フォーマッター**: Prettier
- **パッケージマネージャー**: pnpm
