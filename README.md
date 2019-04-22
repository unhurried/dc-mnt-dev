Node.js (TypeScript) とMongoDBを使うアプリケーションの開発環境をDocker Composeで立ち上げる。

#### 使い方

##### 開発環境を立ち上げる

run.bat (run.sh) を実行すると、docker-composeで開発環境コンテナが立ち上がり、Node.jsコンテナのシェルにログインする。

```
# Windowsの場合（run.bat）
./run
# Linusの場合（run.sh）
./run.sh
```

##### アプリケーションを開発する

以下のコマンドでデモアプリケーションを起動できる。（実行中はソースコードの変更を検知して自動でアプリケーションを再起動する。）

```shell
cd app
npm install
npm run watch
```

アプリケーションには http://localhost:3000/users でアクセスできる。（MongoDBに格納されるユーザー情報の一覧をJSON形式で返却するAPI）

##### Visual Studio Codeでデバッグ実行する

デモアプリケーション起動中に、Visual Studio Codeを起動設定（.vscode/launch.json）を使ってデバッグ実行すると、Node.jsコンテナのデバッグ用ポート（9229）に接続して、ブレークポイントでの停止やステップ実行ができる。

##### MongoDBにアクセスする

Node.jsコンテナからMongoDBコンテナへは以下のURLでアクセスできる。

```
mongodb://root:password@mongo:27017/test?authSource=admin
```

また、[MongoDB Express](https://www.npmjs.com/package/mongo-express)（MongoDB管理ツール）が http://localhost:8081 で起動しているため、GUIでデータ操作することもできる。

##### MongoDBに初期データを登録する

以下のパスにスクリプトを追加する。

```
docker/mongo/docker-entrypoint-initdb.d/
```

