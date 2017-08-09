本项目基于[Next.js](https://github.com/zeit/next.js/)开发，主要为实现SSR(server-site render)而生，之前也做过SSR相关实践，但由于构建项目过程繁琐，令人头大。Next.js主要为了解决以下痛点：
- 省去webpack,babel等多余的配置，next一键搞定
- css-in-js或者Built-in CSS support（因人而异吧，有人觉得是缺点。）
- 自动编译和打包
- 热更新（虽然有热更新，但如果有错的时候，热更新停止，页面无法更新，强制刷新也不行，得重启）
- 方便的静态资源管理
- 成熟灵活的路由配置，Prefetching Pages（应该算最大的亮点）

同时，本项目基于[网易云音乐API](https://binaryify.github.io/NeteaseCloudMusicApi/)提供的接口开发

项目亮点，需要完成
1. 轮播组件
2. 音乐播放组件
3. 歌词滚动组件

槽点：
1. 虽然有热更新，但如果有错的时候，热更新停止，页面无法更新，强制刷新也不行，得重启
2. css-in-js  还是写得不友好，调试也比较麻烦