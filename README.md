react-router-dom

redux react-redux redux-thunk

google oauth 的 api

1.在 index.html 裡面引用 javascript

<script src="https://apis.google.com/js/api.js"></script>

2.在瀏覽器的 console 裡面輸入 gapi,應該要得到一個 load 物件, 用來 import 需要的東西

3.在 console 輸入 gapi.load('client:auth2')

4.確認 NetWork 標籤可以看到瀏覽器向 google server 發出請求

5.再次輸入 gapi

6.可以看到多了一些東西

7.初始化: window.gapi.client.init({clientId: 'your id', scope: 'email'})

8.gapi.auth2.getAuthInstance

redux-form
如果是 npm v7
npm install redux-form --legacy-peer-deps
